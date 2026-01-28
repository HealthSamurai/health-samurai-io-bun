import { Layout } from "./components/Layout";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4321;

// File system router for pages
const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
  fileExtensions: [".tsx"],
});

// Helper to create HTML response
function html(content: string): Response {
  return new Response(content, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// Helper to serve static files
async function serveStatic(path: string, contentType: string): Promise<Response> {
  // Try public directory first (for images and other assets)
  try {
    const publicFile = Bun.file(`./public${path}`);
    if (await publicFile.exists()) {
      return new Response(publicFile, {
        headers: { "Content-Type": contentType },
      });
    }
  } catch (e) {
    // File not found in public
  }

  // Fall back to src directory (for CSS and JS)
  try {
    const srcFile = Bun.file(`./src${path}`);
    if (await srcFile.exists()) {
      return new Response(srcFile, {
        headers: { "Content-Type": contentType },
      });
    }
  } catch (e) {
    // File not found
  }
  return new Response("Not Found", { status: 404 });
}

// Determine content type from extension
function getContentType(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase();
  const types: Record<string, string> = {
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
    avif: "image/avif",
    ico: "image/x-icon",
    woff: "font/woff",
    woff2: "font/woff2",
  };
  return types[ext || ""] || "application/octet-stream";
}

// 404 page
function notFoundPage(): string {
  return `
    <section class="section" style="text-align: center; padding: var(--space-24) 0;">
      <div class="container">
        <h1>404</h1>
        <p style="color: var(--color-text-light); margin-bottom: var(--space-8);">Page not found</p>
        <a href="/" class="btn btn-primary">Back to Home</a>
      </div>
    </section>
  `;
}

// Main server
Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // robots.txt and sitemap.xml
    if (path === "/robots.txt") {
      return serveStatic("/robots.txt", "text/plain");
    }
    if (path === "/sitemap.xml") {
      return serveStatic("/sitemap.xml", "application/xml");
    }

    // Static files
    if (path.startsWith("/assets/") || path.startsWith("/styles/")) {
      return serveStatic(path, getContentType(path));
    }

    // API endpoints (for htmx forms)
    if (path === "/api/contact" && req.method === "POST") {
      return html(`
        <div class="card" style="text-align: center; padding: var(--space-8);">
          <h3 style="color: var(--color-secondary);">Thank you!</h3>
          <p>We've received your message and will get back to you soon.</p>
        </div>
      `);
    }

    if (path === "/api/subscribe" && req.method === "POST") {
      return html(`
        <div style="text-align: center; padding: var(--space-4); color: white;">
          <strong>Thanks for subscribing!</strong>
        </div>
      `);
    }

    // File system routing for pages
    const match = router.match(req);
    if (match) {
      const page = await import(match.filePath);
      const metadata = page.metadata || {};
      const content = page.default(match.params);
      return html(
        Layout({
          title: metadata.title || "Health Samurai",
          description: metadata.description,
          children: content,
        })
      );
    }

    // 404
    return html(
      Layout({
        title: "Page Not Found",
        children: notFoundPage(),
      })
    );
  },
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`   File-based routing enabled from src/pages/`);
