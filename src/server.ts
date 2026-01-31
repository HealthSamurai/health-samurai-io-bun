import { Layout } from "./components/Layout";
import { BareLayout } from "./components/BareLayout";
import { watch } from "fs";
import { initGitInfo } from "./lib/git-info";
import { initHighlighter } from "./lib/markdown";
import { getAllPosts } from "./data/blog";
import { db } from "./db";
import { newContext } from "./context";
import {
  createSession,
  destroySession,
  getSession,
  getSessionId,
  createSessionCookie,
  clearSessionCookie,
} from "./middleware/session";
import { LoginForm } from "./pages/login";
import { googleLogin, googleCallback, isGoogleOAuthConfigured } from "./auth/google";
import { runMigrations } from "./migrate";

// Initialize at startup
await initGitInfo();
await initHighlighter();

// Run database migrations
try {
  await runMigrations({ silent: true });
  console.log("\x1b[32m→\x1b[0m Database migrations: up to date");
} catch (error) {
  console.error("\x1b[31m✗\x1b[0m Database migrations failed:", error);
}

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4321;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "";
const PAGES_DIR = "./src/pages";
const DEV_MODE = process.env.DEV === "1" || process.argv.includes("--hot");

// Server ID for live reload (changes on restart)
const SERVER_ID = crypto.randomUUID();

// File system router for pages
const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: PAGES_DIR,
  fileExtensions: [".tsx"],
});

// Watch for new/deleted pages and reload router
watch(PAGES_DIR, { recursive: true }, (event, filename) => {
  if (filename?.endsWith(".tsx")) {
    router.reload();
    console.log(`\x1b[36m[Router]\x1b[0m Reloaded (${event}: ${filename})`);
  }
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

    // Create context with user session for all requests
    const user = await getSession(req);
    const ctx = newContext(db, user);

    // robots.txt and sitemap.xml
    if (path === "/robots.txt") {
      return serveStatic("/robots.txt", "text/plain");
    }
    if (path === "/sitemap.xml") {
      return serveStatic("/sitemap.xml", "application/xml");
    }

    // Live reload ping endpoint (dev mode only)
    if (DEV_MODE && path === "/__ping") {
      return new Response(SERVER_ID);
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

    // Login API endpoint
    if (path === "/api/login" && req.method === "POST") {
      const formData = await req.formData();
      const emailOrUsername = formData.get("email_or_username")?.toString() || "";
      const password = formData.get("password")?.toString() || "";
      const redirectUrl = formData.get("redirect")?.toString() || "/";

      // Validate input
      if (!emailOrUsername || !password) {
        const content = LoginForm({ error: "Please provide both email/username and password", redirect: redirectUrl });
        return html(BareLayout({ title: "Login", children: content }));
      }

      try {
        // Try to find user by email or username
        let [user] = await db`SELECT * FROM users WHERE email = ${emailOrUsername}`;
        if (!user) {
          [user] = await db`SELECT * FROM users WHERE username = ${emailOrUsername}`;
        }

        if (!user) {
          const content = LoginForm({ error: "Invalid email/username or password", redirect: redirectUrl });
          return html(BareLayout({ title: "Login", children: content }));
        }

        // Check if user has a password
        if (!user.password_hash) {
          const content = LoginForm({ error: "This account does not have password login enabled", redirect: redirectUrl });
          return html(BareLayout({ title: "Login", children: content }));
        }

        // Verify password using Bun's built-in password hashing
        const passwordMatch = await Bun.password.verify(password, user.password_hash);

        if (!passwordMatch) {
          const content = LoginForm({ error: "Invalid email/username or password", redirect: redirectUrl });
          return html(BareLayout({ title: "Login", children: content }));
        }

        // Check if user is active
        if (user.is_active === false) {
          const content = LoginForm({ error: "Your account has been deactivated", redirect: redirectUrl });
          return html(BareLayout({ title: "Login", children: content }));
        }

        // Update last login time
        await db`UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = ${user.id}`;

        // Create session
        const sessionId = await createSession(user.id!);

        // Redirect with session cookie
        return new Response(null, {
          status: 303,
          headers: {
            Location: redirectUrl,
            "Set-Cookie": createSessionCookie(sessionId),
          },
        });
      } catch (error) {
        console.error("Login error:", error);
        const content = LoginForm({ error: "An error occurred during login. Please try again.", redirect: redirectUrl });
        return html(BareLayout({ title: "Login", children: content }));
      }
    }

    // Logout API endpoint
    if (path === "/api/logout" && req.method === "POST") {
      const sessionId = getSessionId(req);
      if (sessionId) {
        await destroySession(sessionId);
      }

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/login",
          "Set-Cookie": clearSessionCookie(),
        },
      });
    }

    // Google OAuth routes
    if (path === "/auth/google") {
      return googleLogin(req);
    }

    if (path === "/auth/google/callback") {
      return googleCallback(req);
    }

    // Search API endpoint
    if (path === "/api/search") {
      const query = url.searchParams.get("q")?.toLowerCase().trim() || "";
      if (!query || query.length < 2) {
        return html(`<div class="p-4 text-center text-sm text-gray-500">Type at least 2 characters...</div>`);
      }

      const posts = getAllPosts();
      const results = posts
        .filter(post => {
          const title = post.title.toLowerCase();
          const desc = post.description.toLowerCase();
          return title.includes(query) || desc.includes(query);
        })
        .slice(0, 8);

      if (results.length === 0) {
        return html(`<div class="p-4 text-center text-sm text-gray-500">No results found for "${query}"</div>`);
      }

      const resultsHtml = results.map(post => {
        const title = post.title.replace(/^🔥\s*/, "");
        return `
          <a href="/blog/${post.slug}" class="block px-4 py-3 hover:bg-gray-50" data-on:click="$searchOpen = false">
            <p class="text-sm font-medium text-gray-900">${title}</p>
            <p class="text-sm text-gray-500 line-clamp-1">${post.description}</p>
          </a>
        `;
      }).join("");

      return html(`
        <p class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Blog posts</p>
        <div class="divide-y divide-gray-100">${resultsHtml}</div>
      `);
    }

    // GitHub webhook for instant reload
    if (path === "/api/webhook/github" && req.method === "POST") {
      // Verify webhook secret
      const signature = req.headers.get("x-hub-signature-256");
      const body = await req.text();

      if (!WEBHOOK_SECRET) {
        console.log("[Webhook] No WEBHOOK_SECRET configured, rejecting");
        return new Response("Webhook not configured", { status: 503 });
      }

      // Verify GitHub signature
      const hmac = new Bun.CryptoHasher("sha256", WEBHOOK_SECRET);
      hmac.update(body);
      const expectedSignature = "sha256=" + hmac.digest("hex");

      if (signature !== expectedSignature) {
        console.log("[Webhook] Invalid signature");
        return new Response("Invalid signature", { status: 401 });
      }

      // Parse event type
      const event = req.headers.get("x-github-event");
      console.log(`[Webhook] Received ${event} event`);

      // Only trigger reload on push events
      if (event === "push") {
        // Write trigger file for entrypoint to detect
        const triggerFile = ".reload-trigger";
        await Bun.write(triggerFile, Date.now().toString());
        console.log("[Webhook] Reload triggered");
        return new Response(JSON.stringify({ status: "reload_triggered" }), {
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ status: "ignored", event }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // File system routing for pages
    const match = router.match(req);
    if (match) {
      const page = await import(match.filePath);
      // Support dynamic metadata via getMetadata(params) function
      const metadata = page.getMetadata
        ? page.getMetadata(match.params)
        : page.metadata || {};
      const content = page.default(match.params);

      // If page has fullPage: true, render without Layout wrapper
      if (metadata.fullPage) {
        return html(`<!DOCTYPE html>${content}`);
      }

      return html(
        Layout({
          title: metadata.title || "Health Samurai",
          description: metadata.description,
          children: content,
          hideFooter: metadata.hideFooter,
          devMode: DEV_MODE,
          ctx,
        })
      );
    }

    // 404
    return html(
      Layout({
        title: "Page Not Found",
        children: notFoundPage(),
        devMode: DEV_MODE,
        ctx,
      })
    );
  },
});

// List available routes on startup
function listRoutes(): string[] {
  const routes: string[] = [];
  const entries = new Bun.Glob("**/*.tsx").scanSync(PAGES_DIR);
  for (const entry of entries) {
    const name = entry.replace(".tsx", "").replace(/\\/g, "/");
    if (name === "index") {
      routes.push("/");
    } else if (name.endsWith("/index")) {
      routes.push("/" + name.replace("/index", ""));
    } else {
      routes.push("/" + name);
    }
  }
  return routes.sort();
}

const routes = listRoutes();
console.log(`\n\x1b[32m→\x1b[0m Server running at \x1b[1mhttp://localhost:${PORT}\x1b[0m`);
console.log(`\x1b[32m→\x1b[0m Routes: ${routes.join(", ")}`);
console.log(`\x1b[32m→\x1b[0m Watching \x1b[36m${PAGES_DIR}\x1b[0m for changes`);
if (DEV_MODE) {
  console.log(`\x1b[32m→\x1b[0m Live reload: \x1b[35m/__ping\x1b[0m (polling)`);
}
console.log();
