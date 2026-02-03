/**
 * Markdown Parser and Renderer
 *
 * Uses marked for parsing, Shiki for code highlighting, and beautiful-mermaid for diagrams.
 */

import { marked, type Tokens, type TokenizerExtension, type RendererExtension } from "marked";
import { createHighlighter, type Highlighter } from "shiki";
import { renderMermaid } from "beautiful-mermaid";
import { readFileSync, existsSync } from "node:fs";

// Shared highlighter instance
let highlighter: Highlighter | null = null;

/**
 * Initialize Shiki highlighter (call at server startup)
 */
export async function initDocsHighlighter() {
  if (highlighter) return;
  highlighter = await createHighlighter({
    themes: ["github-dark"],
    langs: [
      "javascript", "typescript", "tsx", "jsx", "json",
      "bash", "shell", "yaml", "sql", "python", "java",
      "xml", "html", "css", "markdown", "http", "clojure",
      "go", "ruby", "php", "c", "cpp", "csharp", "kotlin",
      "swift", "rust", "scala", "groovy", "dockerfile",
    ],
  });
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Base path for resolving links (set per-request)
let currentBasePath = "";

/**
 * Custom extension for [[url]] big link syntax
 * Based on: https://marked.js.org/using_pro
 * Using block level to avoid being wrapped in <p> tags
 */
const bigLinkExtension: TokenizerExtension & RendererExtension = {
  name: "bigLink",
  level: "block",
  start(src: string) {
    return src.match(/^\[\[/)?.index;
  },
  tokenizer(src: string) {
    // Match [[url]] at the start of a line
    const rule = /^\[\[([^\]]+)\]\]\n?/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: "bigLink",
        raw: match[0],
        url: match[1],
      };
    }
    return undefined;
  },
  renderer(token: { url: string }) {
    const url = token.url;
    const cleanUrl = url.replace(/\.md$/, "").replace(/\/$/, "");
    const title = cleanUrl.split("/").pop()?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()) || cleanUrl;
    const href = `${currentBasePath}/${cleanUrl}`;
    // Single line to avoid HTML parsing issues
    return `<a href="${escapeHtml(href)}" class="big-link flex items-center gap-3 p-4 my-3 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group no-underline"><div class="flex-1"><span class="text-gray-900 font-medium group-hover:text-primary">${escapeHtml(title)}</span></div><svg class="w-5 h-5 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>\n`;
  },
};

// Configure marked with custom extensions
marked.use({ extensions: [bigLinkExtension] });

// Custom renderer for links to handle relative paths
const renderer = new marked.Renderer();

renderer.link = function ({ href, title, tokens }: Tokens.Link): string {
  let linkHref = href || "";
  // Convert .md links to clean URLs
  if (linkHref.endsWith(".md")) {
    linkHref = linkHref.replace(/\.md$/, "");
  }
  // Handle README.md links
  if (linkHref.endsWith("/README")) {
    linkHref = linkHref.replace(/\/README$/, "/");
  }
  const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
  const text = this.parser.parseInline(tokens);
  return `<a href="${escapeHtml(linkHref)}"${titleAttr}>${text}</a>`;
};

// Custom image renderer for .gitbook/assets paths
renderer.image = function ({ href, title, text }: Tokens.Image): string {
  const imgHref = href || "";
  const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
  const altAttr = text ? ` alt="${escapeHtml(text)}"` : "";
  return `<img src="${escapeHtml(imgHref)}"${altAttr}${titleAttr}>`;
};

// Custom code renderer using Shiki for server-side highlighting
renderer.code = function ({ text, lang }: Tokens.Code): string {
  if (!highlighter) {
    // Fallback if highlighter not initialized - match Shiki output structure
    const escaped = escapeHtml(text);
    const lines = escaped.split('\n').map(line => `<span class="line">${line}</span>`).join('\n');
    return `<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 14px;" tabindex="0"><code>${lines}</code></pre>`;
  }

  // Normalize language name
  let language = lang || "text";
  const langMap: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    yml: "yaml",
  };
  language = langMap[language] || language;

  // Check if language is supported
  const supportedLangs = highlighter.getLoadedLanguages();
  if (!supportedLangs.includes(language as any)) {
    language = "text";
  }

  try {
    const html = highlighter.codeToHtml(text, {
      lang: language,
      theme: "github-dark",
    });
    // Add styling to the pre element
    return html.replace(
      /style="([^"]*)"/,
      'style="$1; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 14px;"'
    );
  } catch {
    // Fallback on error - match Shiki output structure
    const escaped = escapeHtml(text);
    const lines = escaped.split('\n').map(line => `<span class="line">${line}</span>`).join('\n');
    return `<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 14px;" tabindex="0"><code>${lines}</code></pre>`;
  }
};

marked.use({ renderer });

/**
 * Render all mermaid code blocks to SVG (async preprocessing)
 */
async function preprocessMermaid(content: string): Promise<string> {
  const mermaidRegex = /```mermaid\n([\s\S]*?)```/g;
  const matches = [...content.matchAll(mermaidRegex)];

  if (matches.length === 0) return content;

  let result = content;
  for (const match of matches) {
    const diagram = match[1]?.trim();
    if (!diagram) continue;

    try {
      const svg = await renderMermaid(diagram);
      // Wrap SVG in a container with styling
      const wrapper = `<div class="mermaid-diagram my-4 flex justify-center">${svg}</div>`;
      result = result.replace(match[0], wrapper);
    } catch (error) {
      console.error("Mermaid rendering error:", error);
      // Keep original code block on error
    }
  }

  return result;
}

export interface ParsedMarkdown {
  title: string;
  description: string;
  content: string;
  headings: Heading[];
  rawContent: string;
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

/**
 * Set the base path for resolving links in big-link syntax
 */
export function setBasePath(basePath: string): void {
  currentBasePath = basePath;
}

/**
 * Parse markdown content and return rendered HTML with metadata
 */
export async function parseMarkdown(content: string, basePath: string = ""): Promise<ParsedMarkdown> {
  // Set the base path for the big-link extension
  currentBasePath = basePath;
  // Extract title from first H1 (before preprocessing)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch && titleMatch[1] ? titleMatch[1].trim() : "Untitled";

  // Extract description from first paragraph after title
  const descriptionMatch = content.match(/^#\s+.+\n\n([^#\n].+)/m);
  const description = descriptionMatch && descriptionMatch[1]
    ? descriptionMatch[1].trim().slice(0, 160)
    : "";

  // Extract headings for table of contents
  const headings: Heading[] = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const hashes = match[1];
    const text = match[2];
    if (hashes && text) {
      headings.push({
        level: hashes.length,
        text: text.trim(),
        id: slugify(text.trim()),
      });
    }
  }

  // Preprocess GitBook syntax before parsing
  let preprocessed = preprocessGitBook(content);

  // Render mermaid diagrams to SVG
  preprocessed = await preprocessMermaid(preprocessed);

  // Render markdown to HTML
  const html = marked.parse(preprocessed) as string;

  return {
    title,
    description,
    content: html,
    headings,
    rawContent: content,
  };
}

/**
 * Read and parse a markdown file
 */
export async function readMarkdownFile(filepath: string, basePath: string = ""): Promise<ParsedMarkdown | null> {
  if (!existsSync(filepath)) {
    return null;
  }

  const content = readFileSync(filepath, "utf-8");
  return await parseMarkdown(content, basePath);
}

/**
 * Convert text to URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Preprocess GitBook syntax BEFORE markdown parsing
 *
 * Converts GitBook-specific syntax to standard markdown that can be parsed.
 */
export function preprocessGitBook(content: string): string {
  // Convert {% content-ref url="..." %}[text](url){% endcontent-ref %} to [[url]]
  // The format is:
  // {% content-ref url="run-aidbox-in-sandbox.md" %}
  // [run-aidbox-in-sandbox.md](run-aidbox-in-sandbox.md)
  // {% endcontent-ref %}
  content = content.replace(
    /\{%\s*content-ref\s+url="([^"]+)"\s*%\}\s*\n\[[^\]]*\]\([^)]*\)\s*\n\{%\s*endcontent-ref\s*%\}/g,
    "[[$1]]"
  );

  // Convert {% hint style="..." %}content{% endhint %} to blockquote with marker
  content = content.replace(
    /\{%\s*hint\s+style="([^"]+)"\s*%\}\s*\n([\s\S]*?)\n\{%\s*endhint\s*%\}/g,
    (_, style, text) => {
      const marker = style.toUpperCase();
      const lines = text.trim().split("\n");
      return `> [!${marker}] ${lines[0]}\n${lines.slice(1).map((l: string) => `> ${l}`).join("\n")}`;
    }
  );

  // Remove YAML frontmatter (---\n...\n---)
  content = content.replace(/^---\n[\s\S]*?\n---\n/, "");

  return content;
}

/**
 * Process GitBook-specific syntax in rendered HTML
 *
 * Handles:
 * - [!NOTE] style blockquotes (GitHub-style admonitions)
 * - {% embed url="..." %}
 * - {% tabs %} ... {% endtabs %}
 *
 * Note: [[url]] big links are now handled by the marked extension
 */
export function processGitBookSyntax(content: string, basePath: string = ""): string {
  // Process GitHub-style admonitions in blockquotes: > [!NOTE] text
  content = content.replace(
    /<blockquote>\s*<p>\s*\[!(NOTE|INFO|TIP|SUCCESS|WARNING|DANGER)\]\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi,
    (_, type, text) => {
      const typeUpper = type.toUpperCase();
      const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
        NOTE: { bg: "bg-blue-50", border: "border-blue-400", icon: "i" },
        INFO: { bg: "bg-blue-50", border: "border-blue-400", icon: "i" },
        TIP: { bg: "bg-green-50", border: "border-green-400", icon: "TIP" },
        SUCCESS: { bg: "bg-green-50", border: "border-green-400", icon: "OK" },
        WARNING: { bg: "bg-yellow-50", border: "border-yellow-400", icon: "!" },
        DANGER: { bg: "bg-red-50", border: "border-red-400", icon: "X" },
      };
      const colors = colorMap[typeUpper] || colorMap.NOTE;
      return `
        <div class="hint ${typeUpper.toLowerCase()} ${colors.bg} ${colors.border} border-l-4 p-4 my-4 rounded-r-lg">
          <div class="flex gap-3">
            <div class="font-bold text-lg">${colors.icon}</div>
            <div class="flex-1">${text.trim()}</div>
          </div>
        </div>
      `;
    }
  );

  // Process embeds (YouTube, etc.)
  content = content.replace(
    /\{%\s*embed\s+url="([^"]+)"\s*%\}/g,
    (_, url) => {
      // YouTube embed
      const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
      if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        return `<div class="embed-responsive aspect-video my-4">
          <iframe src="https://www.youtube.com/embed/${videoId}"
            class="w-full h-full rounded-lg"
            allowfullscreen></iframe>
        </div>`;
      }
      // Generic link
      return `<a href="${url}" target="_blank" class="embed-link text-primary underline">${url}</a>`;
    }
  );

  // Process tabs (simplified - show all tabs as sections)
  content = content.replace(
    /\{%\s*tabs\s*%\}([\s\S]*?)\{%\s*endtabs\s*%\}/g,
    (_, tabsContent) => {
      const tabs = tabsContent.split(/\{%\s*tab\s+title="([^"]+)"\s*%\}/);
      let result = '<div class="tabs-container my-4 border border-gray-200 rounded-lg overflow-hidden">';
      for (let i = 1; i < tabs.length; i += 2) {
        const title = tabs[i];
        const tabContent = tabs[i + 1]?.replace(/\{%\s*endtab\s*%\}/, "").trim() || "";
        result += `<div class="tab-panel border-b border-gray-200 last:border-b-0">
          <div class="tab-title font-semibold text-sm bg-gray-50 px-4 py-2 border-b border-gray-200">${title}</div>
          <div class="tab-content p-4">${tabContent}</div>
        </div>`;
      }
      result += "</div>";
      return result;
    }
  );

  return content;
}
