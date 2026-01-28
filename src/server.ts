import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home";
import { FhirServerPage } from "./pages/fhir-server";

const PORT = 4321;

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

// Main server
Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Static files
    if (path.startsWith("/assets/") || path.startsWith("/styles/")) {
      return serveStatic(path, getContentType(path));
    }

    // API endpoints (for htmx forms)
    if (path === "/api/contact" && req.method === "POST") {
      // In a real app, you'd process the form data here
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

    // Pages
    switch (path) {
      case "/":
        return html(Layout({ title: "Home", children: HomePage() }));

      case "/fhir-server":
      case "/aidbox":
        return html(
          Layout({
            title: "FHIR Server",
            description: "Aidbox FHIR Server - Build healthcare solutions with FHIR, PostgreSQL, and our SDK",
            children: FhirServerPage(),
          })
        );

      case "/contacts":
        return html(
          Layout({
            title: "Contact Us",
            children: `
              <section class="hero" style="padding: var(--space-12) 0;">
                <div class="container">
                  <h1 style="text-align: center;">Contact Us</h1>
                  <p style="text-align: center; color: var(--color-text-light);">We're ready to lead you to the future of health technology</p>
                </div>
              </section>
              ${(await import("./components/sections/ContactForm")).ContactForm()}
            `,
          })
        );

      case "/casestudies":
        return html(
          Layout({
            title: "Case Studies",
            children: `
              <section class="section">
                <div class="container">
                  <h1 style="text-align: center; margin-bottom: var(--space-12);">Case Studies</h1>
                </div>
              </section>
              ${(await import("./components/sections/CaseStudies")).CaseStudies()}
            `,
          })
        );

      case "/blog":
        return html(
          Layout({
            title: "Blog",
            children: `
              <section class="section">
                <div class="container">
                  <h1 style="text-align: center;">The Health Samurai Blog</h1>
                  <p style="text-align: center; color: var(--color-text-light); margin-bottom: var(--space-12);">
                    Insights on FHIR, healthcare interoperability, and building health tech
                  </p>
                  <div class="card" style="text-align: center; padding: var(--space-12);">
                    <p class="text-muted">Blog posts coming soon...</p>
                  </div>
                </div>
              </section>
            `,
          })
        );

      default:
        return html(
          Layout({
            title: "Page Not Found",
            children: `
              <section class="section" style="text-align: center; padding: var(--space-24) 0;">
                <div class="container">
                  <h1>404</h1>
                  <p style="color: var(--color-text-light); margin-bottom: var(--space-8);">Page not found</p>
                  <a href="/" class="btn btn-primary">Back to Home</a>
                </div>
              </section>
            `,
          })
        );
    }
  },
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`   Hot reload enabled - changes will auto-refresh`);
