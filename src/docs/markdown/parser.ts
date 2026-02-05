/**
 * Markdown Parser
 *
 * Parses GitBook-style markdown with custom widgets into HTML.
 * Uses a two-phase approach:
 * 1. GitBook directives: Process {% tabs %}, {% hint %}, etc. via AST
 * 2. Standard markdown: Parse with remark and transform to HTML
 */

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { Element } from "hast";

import { highlightCode } from "./shiki";
import { renderFhirStructureTable } from "./fhir-table";
import { processGitBookDirectives, hasGitBookDirectives } from "./gitbook";
import { processKaTeX, hasKaTeX } from "./katex";
import { renderMermaidDiagram } from "./mermaid";
import type { DocsContext } from "../context";
import type { TocItem } from "../state";

export interface ParsedMarkdown {
  filepath: string;
  title: string;
  description: string;
  html: string;
  toc: TocItem[];
  schemaType?: "howto" | "faq" | "article" | null;
}

export interface ParseContext {
  ctx: DocsContext;
  filepath: string;
  toc: TocItem[];
}

/**
 * Parse markdown content into HTML
 */
export async function parseMarkdown(
  ctx: DocsContext,
  filepath: string,
  content: string
): Promise<ParsedMarkdown> {
  const parseCtx: ParseContext = {
    ctx,
    filepath,
    toc: [],
  };

  // Strip YAML frontmatter
  let processed = stripFrontmatter(content);

  // Extract metadata before processing
  const title = extractTitle(processed, filepath);
  const description = extractDescription(processed);
  const schemaType = detectSchemaType(processed, title);

  // Process mermaid diagrams server-side (before markdown parsing)
  if (processed.includes("```mermaid")) {
    processed = await preprocessMermaid(processed);
  }

  // Process KaTeX math expressions before any markdown parsing
  if (hasKaTeX(processed)) {
    processed = processKaTeX(processed);
  }

  // Create markdown renderer for GitBook directives
  const renderMarkdown = async (md: string): Promise<string> => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeImageTransform, { ctx, filepath })
      .use(rehypeShiki)
      .use(rehypeStringify, { allowDangerousHtml: true });

    const result = await processor.process(md);
    return String(result);
  };

  // Process GitBook directives if present
  if (hasGitBookDirectives(processed)) {
    processed = await processGitBookDirectives(processed, renderMarkdown, ctx);
  }

  // Parse remaining markdown and transform to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHeadingIds, { toc: parseCtx.toc })
    .use(rehypeLinkTransform, { ctx })
    .use(rehypeImageTransform, { ctx, filepath })
    .use(rehypeShiki)
    .use(rehypeStringify, { allowDangerousHtml: true });

  const result = await processor.process(processed);
  const html = String(result);

  return {
    filepath,
    title,
    description,
    html,
    toc: parseCtx.toc,
    schemaType,
  };
}

// ============================================================
// Frontmatter & Metadata
// ============================================================

/**
 * Strip YAML frontmatter from content
 */
function stripFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (match) {
    return content.slice(match[0].length);
  }
  return content;
}

/**
 * Extract title from first H1 or filename
 */
function extractTitle(content: string, filepath: string): string {
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match?.[1]) {
    return h1Match[1].trim();
  }

  const filename = filepath.split("/").pop() || filepath;
  return filename
    .replace(/\.md$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Extract description from first paragraph
 */
function extractDescription(content: string): string {
  let text = content.replace(/^---[\s\S]*?---\n/, "");
  text = text.replace(/^#\s+.+\n/, "");

  const match = text.match(/^\s*([^\n#>*\-\d].+?)(?:\n\n|\n(?=[#>*\-\d]))/);
  if (match?.[1]) {
    return match[1].trim().slice(0, 200);
  }

  return "";
}

/**
 * Detect schema type from content
 */
function detectSchemaType(
  content: string,
  title: string
): "howto" | "faq" | "article" | null {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("faq") || /\bq:\s/i.test(content)) {
    return "faq";
  }

  if (
    lowerTitle.includes("how to") ||
    lowerTitle.includes("tutorial") ||
    lowerTitle.includes("guide") ||
    content.includes("{% stepper %}")
  ) {
    return "howto";
  }

  return "article";
}

// ============================================================
// Rehype plugins (HTML transformation)
// ============================================================

/**
 * Apply Shiki syntax highlighting to code blocks.
 * Special handling for:
 * - Mermaid: rendered as <pre class="mermaid"> for client-side rendering
 * - fhir-structure: rendered as interactive tree table with icons
 */
function rehypeShiki() {
  return (tree: Root) => {
    // Track last H2 heading text for FHIR structure tables (resource-type annotation)
    let lastH2Text = "";

    visit(tree, "element", (node: Element) => {
      // Track H2 headings for fhir-structure resource-type
      if (node.tagName === "h2") {
        lastH2Text = getTextContent(node).trim();
        return;
      }

      if (node.tagName === "pre") {
        const codeNode = node.children.find(
          (child): child is Element =>
            child.type === "element" && child.tagName === "code"
        );

        if (codeNode) {
          const className = codeNode.properties?.className;
          const langClass = Array.isArray(className)
            ? className.find(
                (c) => typeof c === "string" && c.startsWith("language-")
              )
            : undefined;
          const lang = langClass
            ? String(langClass).replace("language-", "")
            : undefined;

          const codeText = getTextContent(codeNode);

          // Mermaid diagrams: fallback for any not caught by preprocessMermaid
          if (lang === "mermaid") {
            node.type = "raw" as any;
            (node as any).value = `<div class="mermaid-diagram mermaid-fallback"><pre class="mermaid">${escapeHtml(codeText)}</pre></div>`;
            node.children = [];
            return;
          }

          // FHIR structure tables: render as interactive tree table
          if (lang === "fhir-structure") {
            const tableHtml = renderFhirStructureTable(codeText, lastH2Text || undefined);
            node.type = "raw" as any;
            (node as any).value = tableHtml;
            node.children = [];
            return;
          }

          const highlighted = highlightCode(codeText, lang);

          node.type = "raw" as any;
          (node as any).value = highlighted;
          node.children = [];
        }
      }
    });
  };
}

/**
 * Add IDs to headings, build TOC, and inject anchor links
 */
function rehypeHeadingIds(options: { toc: TocItem[] }) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      const tagName = node.tagName;
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagName)) {
        const level = parseInt(tagName.charAt(1), 10);
        const text = getTextContent(node);
        const id = slugify(text);

        node.properties = node.properties || {};
        node.properties.id = id;

        // Inject anchor link element before heading text
        const anchor: Element = {
          type: "element",
          tagName: "a",
          properties: {
            href: `#${id}`,
            className: ["heading-anchor"],
            ariaLabel: `Link to ${text}`,
          },
          children: [],
        };
        node.children.unshift(anchor);

        if (level >= 2 && level <= 3) {
          options.toc.push({ id, text, level });
        }
      }
    });
  };
}

/**
 * Transform internal links
 */
function rehypeLinkTransform(options: { ctx: DocsContext }) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a" && node.properties?.href) {
        const href = String(node.properties.href);

        if (href.startsWith("http://") || href.startsWith("https://")) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener noreferrer";
          node.properties.className = [
            ...(Array.isArray(node.properties.className)
              ? node.properties.className
              : []),
            "external-link",
          ];
          // Add arrow-up-right icon inline
          node.children.push({
            type: "element",
            tagName: "svg",
            properties: {
              className: ["external-link-icon"],
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              ariaHidden: "true",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  fillRule: "evenodd",
                  d: "M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z",
                  clipRule: "evenodd",
                },
                children: [],
              },
            ],
          } as any);
        } else if (href.endsWith(".md")) {
          node.properties.href = href.replace(/\.md$/, "");
        }
      }
    });
  };
}

/**
 * Transform image paths
 */
function rehypeImageTransform(options: { ctx: DocsContext; filepath: string }) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "img" && node.properties?.src) {
        const src = String(node.properties.src);

        if (src.startsWith("http://") || src.startsWith("https://")) {
          return;
        }

        if (src.includes(".gitbook/assets")) {
          const assetPath = src.replace(/.*\.gitbook\/assets\//, "");
          node.properties.src = `${options.ctx.productPath}/assets/${assetPath}`;
        } else if (src.startsWith("assets/")) {
          // "assets/" is always relative to repo root, not to the markdown file
          node.properties.src = `${options.ctx.productPath}/${src}`;
        } else if (src.startsWith("../") || src.startsWith("./") || !src.startsWith("/")) {
          // Resolve relative paths based on markdown file location
          const mdDir = options.filepath.includes("/")
            ? options.filepath.substring(0, options.filepath.lastIndexOf("/"))
            : "";
          const resolvedPath = resolveRelativePath(mdDir, src);
          node.properties.src = `${options.ctx.productPath}/${resolvedPath}`;
        }

        node.properties.loading = "lazy";
      }
    });
  };
}

/**
 * Resolve a relative path against a base directory
 */
function resolveRelativePath(baseDir: string, relativePath: string): string {
  const baseParts = baseDir ? baseDir.split("/") : [];
  const relParts = relativePath.split("/");

  for (const part of relParts) {
    if (part === "..") {
      baseParts.pop();
    } else if (part !== "." && part !== "") {
      baseParts.push(part);
    }
  }

  return baseParts.join("/");
}

// ============================================================
// Mermaid Server-Side Rendering
// ============================================================

/**
 * Pre-process mermaid code blocks by rendering them to SVG server-side.
 * Runs BEFORE the unified pipeline so the SVG HTML passes through as raw HTML.
 */
async function preprocessMermaid(content: string): Promise<string> {
  const mermaidRegex = /```mermaid\n([\s\S]*?)```/g;
  const matches = [...content.matchAll(mermaidRegex)];

  if (matches.length === 0) return content;

  let result = content;
  // Process in reverse order to preserve string positions
  for (const match of matches.reverse()) {
    const code = match[1]!.trim();
    try {
      const svg = await renderMermaidDiagram(code);
      // Remove background from SVG (let page background show through)
      const cleanSvg = svg.replace(/background:var\(--bg\)/, "background:transparent");
      const html = `<div class="mermaid-diagram">${cleanSvg}</div>`;
      result =
        result.slice(0, match.index!) +
        html +
        result.slice(match.index! + match[0].length);
    } catch (e) {
      // Fallback: keep as code block
      console.warn(`[mermaid] Render failed for ${code.substring(0, 50)}...`, e);
    }
  }

  return result;
}

// ============================================================
// Utilities
// ============================================================

/**
 * Get text content from a node and its children
 */
function getTextContent(node: Element): string {
  let text = "";

  function extract(n: any) {
    if (n.type === "text") {
      text += n.value;
    } else if (n.children) {
      n.children.forEach(extract);
    }
  }

  extract(node);
  return text;
}

/**
 * Generate URL-safe slug from text
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Escape HTML special characters
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
