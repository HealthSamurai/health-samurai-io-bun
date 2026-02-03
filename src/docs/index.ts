/**
 * Documentation Engine
 *
 * Multi-product documentation system inspired by GitBook.
 * Supports multiple products, each with their own docs folder:
 * - docs/aidbox/
 * - docs/termbox/
 * - etc.
 *
 * Also supports legacy structure where SUMMARY.md is at docs root.
 *
 * Features:
 * - SUMMARY.md-based navigation
 * - Markdown rendering with syntax highlighting
 * - GitBook syntax support (hints, tabs, embeds)
 * - htmx for smooth navigation
 * - Global search integration (handled externally)
 */

import { join } from "node:path";
import { existsSync } from "node:fs";
import { loadDocsConfig, loadLegacyDocsConfig, getProduct, type ProductConfig, type DocsConfig } from "./config";
import { parseSummary, getPrevNext, type Navigation } from "./summary";
import { readMarkdownFile, processGitBookSyntax, type ParsedMarkdown } from "./markdown";
import { DocsLayout, DocsPartial } from "./components/DocsLayout";

// Default docs root - uses tmp/documentation/docs for now, will be changed later
// Set DOCS_ROOT env var to override
const DOCS_ROOT = process.env.DOCS_ROOT || join(process.cwd(), "tmp/documentation/docs");

// Cache for loaded config and navigation
let cachedConfig: DocsConfig | null = null;
let navigationCache: Map<string, Navigation> = new Map();

/**
 * Initialize or get the docs configuration
 */
export function getDocsConfig(): DocsConfig {
  if (!cachedConfig) {
    // Try legacy config first (for tmp/documentation/docs structure)
    cachedConfig = loadLegacyDocsConfig(DOCS_ROOT);
  }
  return cachedConfig;
}

/**
 * Clear all caches (for dev mode)
 */
export function clearCache(): void {
  cachedConfig = null;
  navigationCache.clear();
}

/**
 * Get navigation for a product
 */
export function getNavigation(product: ProductConfig): Navigation {
  const cacheKey = product.id;

  if (!navigationCache.has(cacheKey)) {
    const nav = parseSummary(product.summaryPath, product.path);
    navigationCache.set(cacheKey, nav);
  }

  return navigationCache.get(cacheKey)!;
}

/**
 * Resolve file path from URL path
 * Returns [filepath, shouldRedirect, redirectPath]
 */
function resolveFilePath(product: ProductConfig, urlPath: string): [string, boolean, string?] {
  // Remove product path prefix
  let relativePath = urlPath.replace(product.path, "").replace(/^\//, "");

  // Handle root/empty path -> README.md
  if (!relativePath || relativePath === "/" || relativePath === "") {
    const rootReadme = join(product.docsPath, "README.md");
    if (existsSync(rootReadme)) {
      return [rootReadme, false];
    }
    // No root README - redirect to first navigation item
    const nav = getNavigation(product);
    if (nav.flat.length > 0) {
      const firstItem = nav.flat[0];
      return ["", true, firstItem.href];
    }
    return [rootReadme, false]; // Will 404
  }
  // Add .md extension if missing
  if (!relativePath.endsWith(".md")) {
    // Check if it's a directory with README.md
    const dirPath = join(product.docsPath, relativePath, "README.md");
    if (existsSync(dirPath)) {
      relativePath = join(relativePath, "README.md");
    } else {
      relativePath = relativePath + ".md";
    }
  }

  return [join(product.docsPath, relativePath), false];
}

/**
 * Handle documentation request
 */
export async function handleDocsRequest(
  req: Request
): Promise<Response | null> {
  const url = new URL(req.url);
  const path = url.pathname;

  // Only handle /docs/* routes
  if (!path.startsWith("/docs")) {
    return null;
  }

  const config = getDocsConfig();

  // Handle root /docs -> redirect to first product or configured redirect
  if (path === "/docs" || path === "/docs/") {
    const redirectTo = config.rootRedirect || (config.products[0]?.path);
    if (redirectTo) {
      return Response.redirect(new URL(`/docs${redirectTo}`, req.url), 302);
    }
    return new Response("No documentation products configured", { status: 404 });
  }

  // Find the product for this path
  const pathWithoutDocs = path.replace(/^\/docs/, "");
  let product: ProductConfig | undefined;

  for (const p of config.products) {
    if (pathWithoutDocs.startsWith(p.path)) {
      product = p;
      break;
    }
  }

  if (!product) {
    // Return 404 page listing available products
    return new Response(
      renderProductList(config.products),
      {
        status: 404,
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  // Serve static assets from .gitbook/assets
  if (pathWithoutDocs.includes("/.gitbook/assets/")) {
    return handleAssetRequest(product, pathWithoutDocs);
  }

  // Get the relative path within the product
  const relativePath = pathWithoutDocs.replace(product.path, "");

  // Resolve the markdown file
  const [filePath, shouldRedirect, redirectPath] = resolveFilePath(product, pathWithoutDocs);

  // Handle redirect (e.g., root with no README.md -> first nav item)
  if (shouldRedirect && redirectPath) {
    return Response.redirect(new URL(`/docs${redirectPath}`, req.url), 302);
  }

  // Check if file exists
  if (!existsSync(filePath)) {
    return new Response(
      renderNotFound(product, relativePath),
      {
        status: 404,
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  // Parse the markdown file with base path for link resolution
  const parsed = await readMarkdownFile(filePath, product.path);

  if (!parsed) {
    return new Response("Error reading file", { status: 500 });
  }

  // Process additional GitBook syntax (embeds, tabs, etc.)
  const processedContent = processGitBookSyntax(parsed.content, product.path);

  // Get navigation
  const navigation = getNavigation(product);

  // Get prev/next navigation
  const currentHref = product.path + relativePath.replace(/\.md$/, "").replace(/\/README$/, "");
  const { prev, next } = getPrevNext(navigation, currentHref);

  // Check if this is a partial request (htmx)
  const isPartial = url.searchParams.get("partial") === "true";

  const layoutProps = {
    product,
    navigation,
    currentPath: pathWithoutDocs,
    title: parsed.title,
    description: parsed.description,
    content: processedContent,
    headings: parsed.headings,
    prev,
    next,
  };

  const html = isPartial
    ? DocsPartial(layoutProps)
    : await DocsLayout(layoutProps);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

/**
 * Handle asset requests (images, etc.)
 */
function handleAssetRequest(product: ProductConfig, path: string): Response | null {
  // Extract the asset path after .gitbook/assets/
  const assetMatch = path.match(/\.gitbook\/assets\/(.+)$/);
  if (!assetMatch || !assetMatch[1]) {
    return null;
  }

  const assetPath = assetMatch[1];

  // Try multiple locations
  const possiblePaths = [
    join(product.docsPath, ".gitbook", "assets", assetPath),
    join(DOCS_ROOT, product.id, ".gitbook", "assets", assetPath),
    join(DOCS_ROOT, ".gitbook", "assets", assetPath),
  ];

  for (const tryPath of possiblePaths) {
    if (existsSync(tryPath)) {
      const file = Bun.file(tryPath);
      return new Response(file, {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  }

  return new Response("Asset not found", { status: 404 });
}

/**
 * Render product list page
 */
function renderProductList(products: ProductConfig[]): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Documentation</title>
      <link rel="stylesheet" href="/styles/main.css">
    </head>
    <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="max-w-2xl mx-auto py-16 px-4">
        <h1 class="text-3xl font-bold mb-8">Documentation</h1>
        <div class="space-y-4">
          ${products.map(p => `
            <a href="/docs${p.path}" class="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
              <h2 class="text-xl font-semibold">${escapeHtml(p.name)}</h2>
              ${p.ogPreviewText ? `<p class="text-gray-600 dark:text-gray-400 mt-2">${escapeHtml(p.ogPreviewText)}</p>` : ""}
            </a>
          `).join("")}
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Render 404 page
 */
function renderNotFound(product: ProductConfig, path: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Page Not Found | ${escapeHtml(product.name)}</title>
      <link rel="stylesheet" href="/styles/main.css">
    </head>
    <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 class="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        <h2 class="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4">
          The page <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">${escapeHtml(path)}</code> could not be found.
        </p>
        <a href="/docs${product.path}" class="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Go to ${escapeHtml(product.name)} Home
        </a>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * List all available products
 */
export function listProducts(): ProductConfig[] {
  return getDocsConfig().products;
}

/**
 * Get product by ID
 */
export function getProductById(id: string): ProductConfig | undefined {
  return getProduct(getDocsConfig(), id);
}
