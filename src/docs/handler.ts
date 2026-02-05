/**
 * Documentation Request Handler
 *
 * Handles requests to /docs/:product/* URLs
 */

import { getProductConfig, getAllProducts } from "./config";
import { getProductState, getState, isInitialized } from "./state";
import { createDocsContext, findNavPath, findPrevNext, flattenNavigation } from "./context";
import { parseMarkdown } from "./markdown";
import { getDocsDir } from "./git";
import { generateProductLlmsTxt, generateRootLlmsTxt } from "./llms";
import { DocsLayout } from "./components/DocsLayout";
import { AidboxLanding } from "./components/AidboxLanding";
import type { ProductConfig } from "./config";
import type { ProductState, NavigationItem } from "./state";
import type { Context } from "../context";

/**
 * Handle a documentation request
 * Returns Response or null if not a docs route
 */
export async function handleDocsRequest(req: Request, ctx?: Context): Promise<Response | null> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Only handle /docs/* routes
  if (!pathname.startsWith("/docs/")) {
    return null;
  }

  // Wait for initialization
  if (!isInitialized()) {
    return new Response("Documentation is loading...", {
      status: 503,
      headers: { "Retry-After": "5" },
    });
  }

  // Parse URL: /docs/:product/:path*
  const parts = pathname.slice(6).split("/"); // Remove "/docs/"
  const productId = parts[0];
  const docPath = parts.slice(1).join("/") || "";

  // /docs/llms.txt — root index listing all products
  if (productId === "llms.txt") {
    return new Response(generateRootLlmsTxt(), {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  if (!productId) {
    // /docs/ - show product index
    return handleDocsIndex();
  }

  // Get product config
  const product = getProductConfig(productId);
  if (!product) {
    return handle404(`Product not found: ${productId}`);
  }

  // Get product state
  const state = getProductState(productId);
  if (!state) {
    return handle404(`Product not initialized: ${productId}`);
  }

  // Handle assets
  if (docPath.startsWith("assets/")) {
    return handleAsset(product, docPath);
  }

  // Handle sitemap.xml
  if (docPath === "sitemap.xml") {
    return handleSitemap(state);
  }

  // Handle llms.txt
  if (docPath === "llms.txt") {
    return handleLlmsTxt(product, state);
  }

  // Handle .md endpoints (raw markdown for Copy Page / View as Markdown)
  if (docPath.endsWith(".md")) {
    return handleMarkdownEndpoint(product, state, docPath);
  }

  // Determine the URI for lookup
  const uri = `${product.path}/${docPath}`.replace(/\/$/, "") || product.path;

  // Check for redirect
  const redirect = state.redirects.get(uri);
  if (redirect) {
    return Response.redirect(redirect, 301);
  }

  // Find the file for this URI
  let filepath = state.uriToFile.get(uri);

  if (!filepath) {
    // For product root without a page
    if (!docPath || docPath === "") {
      // Aidbox has a custom landing page
      if (productId === "aidbox") {
        return handleLandingPage(product, state, ctx);
      }
      // Try README.md first
      if (state.mdFiles.has("README.md")) {
        filepath = "README.md";
      } else {
        // Redirect to first navigation item
        const firstItem = state.flatNavigation[0];
        if (firstItem?.href) {
          return Response.redirect(firstItem.href, 302);
        }
      }
    }
  }

  if (!filepath) {
    // Try with trailing index
    const indexUri = docPath ? `${uri}/` : uri;
    const indexFilepath = state.uriToFile.get(indexUri);
    if (indexFilepath) {
      return handleDocPage(req, product, state, indexUri, indexFilepath, ctx);
    }
    return handleNotFound(product, state, uri, ctx);
  }

  return handleDocPage(req, product, state, uri, filepath, ctx);
}

/**
 * Render a documentation page
 */
async function handleDocPage(
  req: Request,
  product: ProductConfig,
  state: ProductState,
  uri: string,
  filepath: string,
  requestCtx?: Context
): Promise<Response> {
  // Check cache first
  let parsed = state.parsedMarkdown.get(filepath);

  if (!parsed) {
    // Get markdown content
    const content = state.mdFiles.get(filepath);
    if (!content) {
      return handle404(`Content not found: ${filepath}`);
    }

    // Create docs context and parse
    const docsCtx = createDocsContext(product, state, uri, filepath);
    parsed = await parseMarkdown(docsCtx, filepath, content);
    state.parsedMarkdown.set(filepath, parsed);
  }

  // Build navigation context
  const flatNav = state.flatNavigation.length > 0
    ? state.flatNavigation
    : flattenNavigation(state.navigation);

  const { prev, next } = findPrevNext(flatNav, uri);
  const breadcrumbs = findNavPath(state.navigation, uri);

  // Render page
  const html = DocsLayout({
    product,
    navigation: state.navigation,
    currentUri: uri,
    title: parsed.title,
    description: parsed.description,
    content: parsed.html,
    toc: parsed.toc,
    breadcrumbs,
    prev,
    next,
    lastmod: state.lastmod.get(filepath),
    filepath,
    schemaType: parsed.schemaType,
    ctx: requestCtx,
  });

  // Generate ETag from content
  const etag = `"${Bun.hash(html).toString(36)}"`;

  // Check If-None-Match (ETag-based conditional request)
  const ifNoneMatch = req.headers.get("If-None-Match");
  if (ifNoneMatch && ifNoneMatch === etag) {
    return new Response(null, { status: 304, headers: { ETag: etag } });
  }

  // Check If-Modified-Since (date-based conditional request)
  const lastmod = state.lastmod.get(filepath);
  if (lastmod) {
    const ifModifiedSince = req.headers.get("If-Modified-Since");
    if (ifModifiedSince) {
      const clientDate = new Date(ifModifiedSince).getTime();
      const serverDate = new Date(lastmod).getTime();
      if (!isNaN(clientDate) && !isNaN(serverDate) && serverDate <= clientDate) {
        return new Response(null, { status: 304, headers: { ETag: etag } });
      }
    }
  }

  // Build response headers
  const headers: Record<string, string> = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, no-cache",
    "ETag": etag,
  };

  if (lastmod) {
    headers["Last-Modified"] = new Date(lastmod).toUTCString();
  }

  return new Response(html, { headers });
}

/**
 * Show docs product index
 */
function handleDocsIndex(): Response {
  const products = getAllProducts();

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Documentation - Health Samurai</title>
</head>
<body>
  <h1>Documentation</h1>
  <ul>
    ${products.map((p) => `<li><a href="${p.path}">${p.name}</a></li>`).join("\n    ")}
  </ul>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

/**
 * Serve static asset
 */
async function handleAsset(product: ProductConfig, assetPath: string): Promise<Response> {
  const docsDir = await getDocsDir(product);
  const fullPath = `${docsDir}/../${product.assets}/${assetPath.replace("assets/", "")}`;

  const file = Bun.file(fullPath);
  if (!(await file.exists())) {
    return handle404(`Asset not found: ${assetPath}`);
  }

  // Determine content type
  const ext = assetPath.split(".").pop()?.toLowerCase() || "";
  const contentTypes: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    pdf: "application/pdf",
    zip: "application/zip",
  };

  return new Response(file, {
    headers: {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

/**
 * Serve sitemap.xml
 */
function handleSitemap(state: ProductState): Response {
  return new Response(state.sitemap || "<urlset></urlset>", {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

/**
 * Serve llms.txt for a product
 */
function handleLlmsTxt(product: ProductConfig, state: ProductState): Response {
  return new Response(generateProductLlmsTxt(product, state), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}

/**
 * Serve raw markdown content for a page
 */
function handleMarkdownEndpoint(
  product: ProductConfig,
  state: ProductState,
  docPath: string
): Response {
  const cleanPath = docPath.replace(/\.md$/, "");
  const uri = `${product.path}/${cleanPath}`.replace(/\/$/, "") || product.path;
  const filepath = state.uriToFile.get(uri);

  if (!filepath) {
    return handle404(`Markdown not found: ${cleanPath}`);
  }

  const content = state.mdFiles.get(filepath);
  if (!content) {
    return handle404(`Content not found: ${filepath}`);
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=300",
    },
  });
}

/**
 * Render a custom landing page (e.g., Aidbox docs root)
 */
function handleLandingPage(
  product: ProductConfig,
  state: ProductState,
  ctx?: Context
): Response {
  const content = AidboxLanding();

  const html = DocsLayout({
    product,
    navigation: state.navigation,
    currentUri: product.path,
    title: "Aidbox Documentation",
    description: "Complete documentation for Aidbox FHIR server.",
    content,
    toc: [],
    breadcrumbs: [],
    prev: null,
    next: null,
    isLanding: true,
    ctx,
  });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, no-cache",
    },
  });
}

/**
 * Return styled 404 within docs layout
 */
function handleNotFound(
  product: ProductConfig,
  state: ProductState,
  uri: string,
  ctx?: Context
): Response {
  const notFoundContent = `
    <div class="min-h-[50vh] flex items-center justify-center">
      <div class="max-w-2xl w-full px-4 text-center">
        <h2 class="mt-4 text-3xl font-semibold text-on-surface-muted">Page not found</h2>
        <p class="mt-2 text-base text-on-surface">The page you are looking for doesn't exist.</p>
      </div>
    </div>
  `;

  const html = DocsLayout({
    product,
    navigation: state.navigation,
    currentUri: uri,
    title: "Page Not Found",
    description: "The page you are looking for doesn't exist.",
    content: notFoundContent,
    toc: [],
    breadcrumbs: [],
    prev: null,
    next: null,
    ctx,
  });

  return new Response(html, {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

/**
 * Return simple 404 response (no product context)
 */
function handle404(message: string): Response {
  return new Response(
    `<!DOCTYPE html>
<html>
<head><title>404 Not Found</title></head>
<body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0;">
  <div style="text-align: center;">
    <h2 style="font-size: 1.875rem; font-weight: 600; color: #7E8291;">Page not found</h2>
    <p style="margin-top: 0.5rem; color: #717684;">The page you are looking for doesn't exist.</p>
    <a href="/docs" style="display: inline-block; margin-top: 1rem; color: #D95640; text-decoration: underline;">← Back to Documentation</a>
  </div>
</body>
</html>`,
    {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
