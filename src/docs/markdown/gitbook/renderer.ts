/**
 * GitBook Directive Renderer
 *
 * Converts GitBook AST nodes to HTML.
 * Each directive type has its own render function.
 */

import type { ASTNode, DirectiveNode, TextNode, RootNode } from "./ast";
import { getTextContent } from "./ast";
import type { DocsContext } from "../../context";

/**
 * Markdown renderer function type
 * Used for recursive markdown rendering inside directives
 */
export type MarkdownRenderer = (content: string) => Promise<string>;

/**
 * Render context passed to all renderers
 */
export interface RenderContext {
  renderMarkdown: MarkdownRenderer;
  docsCtx?: DocsContext;
}

/**
 * Render an AST to HTML
 */
export async function render(
  node: ASTNode,
  ctx: RenderContext
): Promise<string> {
  switch (node.type) {
    case "text":
      return node.value;

    case "directive":
      return renderDirective(node, ctx);

    case "root":
      return renderChildren(node.children, ctx);
  }
}

/**
 * Render children nodes
 */
async function renderChildren(
  children: ASTNode[],
  ctx: RenderContext
): Promise<string> {
  const parts = await Promise.all(children.map((child) => render(child, ctx)));
  return parts.join("");
}

/**
 * Render a directive node
 */
async function renderDirective(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const renderer = DIRECTIVE_RENDERERS[node.name];

  if (renderer) {
    return renderer(node, ctx);
  }

  // Unknown directive - render as comment + content
  console.warn(`Unknown directive: ${node.name}`);
  const content = await renderChildren(node.children, ctx);
  return `<!-- unknown directive: ${node.name} -->\n${content}`;
}

/**
 * Directive renderer type
 */
type DirectiveRenderer = (
  node: DirectiveNode,
  ctx: RenderContext
) => Promise<string>;

/**
 * Registry of directive renderers
 */
const DIRECTIVE_RENDERERS: Record<string, DirectiveRenderer> = {
  hint: renderHint,
  tabs: renderTabs,
  tab: renderTab,
  stepper: renderStepper,
  step: renderStep,
  code: renderCode,
  embed: renderEmbed,
  "content-ref": renderContentRef,
  file: renderFile,
};

// ============================================================
// Hint Directive
// ============================================================

const HINT_STYLES: Record<string, { icon: string; class: string }> = {
  info: { icon: "info", class: "hint-info" },
  success: { icon: "check", class: "hint-success" },
  warning: { icon: "alert", class: "hint-warning" },
  danger: { icon: "error", class: "hint-danger" },
};

const HINT_ICONS: Record<string, string> = {
  info: `<svg class="hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  check: `<svg class="hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alert: `<svg class="hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  error: `<svg class="hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
};

async function renderHint(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const style = node.attributes.style || "info";
  const styleInfo = HINT_STYLES[style] ?? HINT_STYLES.info!;
  const icon = HINT_ICONS[styleInfo.icon] ?? "";

  const innerContent = getTextContent(node);
  const html = await ctx.renderMarkdown(innerContent);

  return `<div class="hint ${styleInfo.class}">
  ${icon}
  <div class="hint-content">${html}</div>
</div>`;
}

// ============================================================
// Tabs Directive
// ============================================================

async function renderTabs(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  // Find all tab children
  const tabs = node.children.filter(
    (child): child is DirectiveNode =>
      child.type === "directive" && child.name === "tab"
  );

  if (tabs.length === 0) {
    return "";
  }

  // Render each tab - recursively render children to handle nested directives
  const renderedTabs = await Promise.all(
    tabs.map(async (tab, idx) => {
      const title = tab.attributes.title || `Tab ${idx + 1}`;
      // Render children recursively to support nested directives
      const html = await renderTabContent(tab, ctx);
      return { title, html, idx };
    })
  );

  const buttons = renderedTabs
    .map(
      (tab) =>
        `<button class="tab-button${tab.idx === 0 ? " active" : ""}" data-tab="${tab.idx}" onclick="switchTab(this, ${tab.idx})">${escapeHtml(tab.title)}</button>`
    )
    .join("");

  const panels = renderedTabs
    .map(
      (tab) =>
        `<div class="tab-panel${tab.idx === 0 ? " active" : ""}" data-tab="${tab.idx}">${tab.html}</div>`
    )
    .join("");

  return `<div class="tabs-container" data-tabs>
  <div class="tabs-header">${buttons}</div>
  <div class="tabs-content">${panels}</div>
</div>`;
}

/**
 * Render tab content with support for nested directives
 * Text nodes are passed to markdown renderer, directives are rendered recursively
 */
async function renderTabContent(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const parts: string[] = [];

  for (const child of node.children) {
    if (child.type === "text") {
      // Render text through markdown
      const trimmed = child.value.trim();
      if (trimmed) {
        parts.push(await ctx.renderMarkdown(trimmed));
      }
    } else if (child.type === "directive") {
      // Render nested directive through AST renderer
      parts.push(await renderDirective(child, ctx));
    }
  }

  return parts.join("\n");
}

async function renderTab(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  // Tab is rendered by parent tabs directive
  // If rendered standalone, just render content
  const content = getTextContent(node);
  return ctx.renderMarkdown(content);
}

// ============================================================
// Stepper Directive
// ============================================================

async function renderStepper(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  // Find all step children
  const steps = node.children.filter(
    (child): child is DirectiveNode =>
      child.type === "directive" && child.name === "step"
  );

  if (steps.length === 0) {
    return "";
  }

  // Render each step - recursively render children to handle nested directives
  const renderedSteps = await Promise.all(
    steps.map(async (step, idx) => {
      // Render children recursively to support nested directives
      const html = await renderStepContent(step, ctx);
      const isLast = idx === steps.length - 1;
      return { number: idx + 1, html, isLast };
    })
  );

  const stepsHtml = renderedSteps
    .map(
      (step) => `<div class="flex gap-4">
  <div class="relative select-none">
    <div class="flex size-7 items-center justify-center rounded-full bg-brand text-white font-semibold text-sm">${step.number}</div>
    ${step.isLast ? "" : '<div class="absolute top-9 bottom-2 left-3.5 w-px bg-outline-subtle"></div>'}
  </div>
  <div class="flex-1 ${step.isLast ? "pb-0" : "pb-6"}">
    <div class="stepper-step-content text-base text-on-surface-muted leading-relaxed">${step.html}</div>
  </div>
</div>`
    )
    .join("");

  return `<div class="stepper-container my-6">${stepsHtml}</div>`;
}

/**
 * Render step content with support for nested directives
 */
async function renderStepContent(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const parts: string[] = [];

  for (const child of node.children) {
    if (child.type === "text") {
      const trimmed = child.value.trim();
      if (trimmed) {
        parts.push(await ctx.renderMarkdown(trimmed));
      }
    } else if (child.type === "directive") {
      parts.push(await renderDirective(child, ctx));
    }
  }

  return parts.join("\n");
}

async function renderStep(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  // Step is rendered by parent stepper directive
  const content = getTextContent(node);
  return ctx.renderMarkdown(content);
}

// ============================================================
// Code Directive (with title)
// ============================================================

async function renderCode(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const title = node.attributes.title;
  const lineNumbers = node.attributes.lineNumbers === "true";
  const content = getTextContent(node);

  // The content should be a code block - render via markdown
  const html = await ctx.renderMarkdown(content);

  if (title) {
    return `<div class="code-block-wrapper">
  <div class="code-block-title">${escapeHtml(title)}</div>
  ${html}
</div>`;
  }

  return html;
}

// ============================================================
// Embed Directive
// ============================================================

async function renderEmbed(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const url = node.attributes.url;

  if (!url) {
    return "";
  }

  // YouTube embed - 16:9 aspect ratio with proper sizing
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      return `<div class="my-6">
  <div class="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
    <iframe src="https://www.youtube.com/embed/${videoId}" class="absolute top-0 left-0 w-full h-full border-0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
  </div>
</div>`;
    }
  }

  // Generic embed - render as big-link card with favicon
  const hostname = extractHostname(url);
  const favicon = hostname ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=32` : "";
  const displayTitle = node.attributes.title || hostname || url;

  const chevronIcon = "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z";

  return `<div class="big-link mt-2 mb-4 p-4 border border-outline-subtle rounded-lg bg-surface hover:border-outline-input-focus transition-all duration-200 flex items-center cursor-pointer group">
  ${favicon ? `<div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"><img src="${escapeHtml(favicon)}" alt="" class="w-6 h-6 object-contain" loading="lazy"></div>` : ""}
  <div class="flex-1">
    <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="text-base font-normal text-on-surface-strong transition-colors duration-200 no-underline block w-full h-full">${escapeHtml(displayTitle)}</a>
  </div>
  <svg class="size-5 text-on-surface-strong/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="${chevronIcon}"/>
  </svg>
</div>`;
}

function extractYouTubeId(url: string): string | null {
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) return watchMatch[1];

  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch?.[1]) return shortMatch[1];

  const embedMatch = url.match(/youtube\.com\/embed\/([^?]+)/);
  if (embedMatch?.[1]) return embedMatch[1];

  return null;
}

// ============================================================
// Content-Ref Directive
// ============================================================

async function renderContentRef(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  // Content inside is usually a markdown link - extract it
  const content = getTextContent(node).trim();

  // Parse the markdown link: [title](url)
  const linkMatch = content.match(/\[([^\]]+)\]\(([^)]+)\)/);

  if (linkMatch) {
    let title = linkMatch[1]!;
    let href = linkMatch[2]!;

    // Resolve title and href using docs context
    if (ctx.docsCtx) {
      const resolved = resolveContentRef(ctx.docsCtx, href, title);
      title = resolved.title;
      href = resolved.href;
    } else {
      // Strip .md extension from href even without context
      href = href.replace(/\.md$/, "").replace(/\/README$/, "");
    }

    const chevronIcon = "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z";

    return `<div class="big-link mt-2 mb-4 p-4 border border-outline-subtle rounded-lg bg-surface hover:border-outline-input-focus transition-all duration-200 flex items-center cursor-pointer group">
  <div class="flex-1">
    <a href="${escapeHtml(href)}" class="text-base font-normal text-on-surface-strong transition-colors duration-200 no-underline block w-full h-full">${escapeHtml(title)}</a>
  </div>
  <svg class="size-5 text-on-surface-strong/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="${chevronIcon}"/>
  </svg>
</div>`;
  }

  // Fallback: render as markdown
  const html = await ctx.renderMarkdown(content);
  return `<div class="content-ref">${html}</div>`;
}

/**
 * Resolve content-ref href and title using docs context
 */
function resolveContentRef(
  docsCtx: DocsContext,
  rawHref: string,
  fallbackTitle: string
): { href: string; title: string } {
  const { state, productPath, filepath } = docsCtx;

  // Resolve relative path to a filepath relative to docs root
  const currentDir = filepath.includes("/")
    ? filepath.substring(0, filepath.lastIndexOf("/"))
    : "";

  // Clean the raw href
  let resolvedPath = rawHref;

  // Resolve relative paths
  if (resolvedPath.startsWith("../") || resolvedPath.startsWith("./")) {
    resolvedPath = resolveRelativePath(currentDir, resolvedPath);
  } else if (!resolvedPath.startsWith("/")) {
    // Relative to current directory
    resolvedPath = currentDir ? `${currentDir}/${resolvedPath}` : resolvedPath;
  }

  // Strip .md extension and /README
  resolvedPath = resolvedPath.replace(/\.md$/, "").replace(/\/README$/, "");
  // Strip trailing slash
  resolvedPath = resolvedPath.replace(/\/$/, "");

  // Build the full URI
  const uri = resolvedPath ? `${productPath}/${resolvedPath}` : productPath;

  // Try to find title from navigation
  let title = findTitleInNavigation(state.navigation, uri);

  // If not found in navigation, try to get from raw markdown
  if (!title) {
    // Try to find the filepath from URI
    const targetFile = state.uriToFile.get(uri);
    if (targetFile) {
      const mdContent = state.mdFiles.get(targetFile);
      if (mdContent) {
        title = extractTitleFromMarkdown(mdContent);
      }
    }
  }

  // Use fallback title if not found, but clean up filename-style titles
  if (!title) {
    title = cleanFallbackTitle(fallbackTitle);
  }

  return { href: uri, title };
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

/**
 * Find title in navigation tree by URI
 */
function findTitleInNavigation(
  navigation: Array<{ title: string; children: Array<any> }>,
  uri: string
): string | null {
  for (const section of navigation) {
    const found = findTitleInItems(section.children, uri);
    if (found) return found;
  }
  return null;
}

function findTitleInItems(items: Array<any>, uri: string): string | null {
  for (const item of items) {
    if (item.href === uri) return item.title;
    if (item.children) {
      const found = findTitleInItems(item.children, uri);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Extract title from raw markdown (first H1)
 */
function extractTitleFromMarkdown(content: string): string | null {
  // Strip frontmatter
  let text = content;
  const fmMatch = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (fmMatch) text = text.slice(fmMatch[0].length);

  const h1 = text.match(/^#\s+(.+)$/m);
  return h1?.[1]?.trim() || null;
}

/**
 * Clean up a filename-style fallback title
 */
function cleanFallbackTitle(title: string): string {
  // If it looks like a filename (has .md extension or no spaces + has dashes/underscores)
  if (title.endsWith(".md") || title.endsWith("/")) {
    return title
      .replace(/\.md$/, "")
      .replace(/\/$/, "")
      .replace(/\/README$/, "")
      .split("/")
      .pop()!
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return title;
}

// ============================================================
// File Directive
// ============================================================

async function renderFile(
  node: DirectiveNode,
  ctx: RenderContext
): Promise<string> {
  const src = node.attributes.src;

  if (!src) {
    return "";
  }

  const filename = src.split("/").pop() || src;
  const label = getTextContent(node).trim() || filename;

  // Download icon SVG path
  const downloadIcon = "M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z";
  const chevronIcon = "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z";

  return `<div class="file-widget-wrapper">
  <a href="${escapeHtml(src)}" download="${escapeHtml(filename)}" class="file-widget mt-2 mb-4 p-4 border border-outline-subtle rounded-lg bg-surface hover:border-brand transition-all duration-200 flex items-center cursor-pointer group no-underline">
    <div class="flex-shrink-0 p-2 bg-brand/10 rounded-md mr-3">
      <svg class="size-5 text-brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="${downloadIcon}"/>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <span class="text-base font-normal text-on-surface-strong block truncate">${escapeHtml(label)}</span>
    </div>
    <svg class="size-5 text-on-surface-strong/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" clip-rule="evenodd" d="${chevronIcon}"/>
    </svg>
  </a>
</div>`;
}

// ============================================================
// Utilities
// ============================================================

function extractHostname(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
