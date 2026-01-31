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
import {
  getAnalyticsSessionId,
  createAnalyticsCookie,
  trackPageView,
  getAndSetPreviousPath,
  trackEvent,
} from "./analytics";
import { CommentItem, CommentList, type Comment } from "./components/Comments";

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

    // Log all requests for debugging (skip static assets and ping)
    if (!path.startsWith("/assets/") && !path.startsWith("/styles/") && path !== "/__ping") {
      console.log(`[Request] ${req.method} ${path}`);
    }

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

    // llms.txt - LLM-friendly site index (https://llmstxt.org/)
    if (path === "/llms.txt") {
      const { getAllPosts } = await import("./data/blog");
      const posts = getAllPosts();

      const llmstxt = `# Health Samurai

> Health Samurai builds FHIR-native healthcare infrastructure. Our main product is Aidbox — a FHIR server and healthcare development platform used by healthcare organizations worldwide.

## Products

- [Aidbox FHIR Server](/aidbox.md): Enterprise FHIR server with advanced features
- [Aidbox Forms](/medical-form.md): FHIR SDC-compliant form builder
- [Pricing](/price.md): Aidbox pricing and plans

## Company

- [About Us](/about.md): Health Samurai company information
- [Contact](/contacts.md): Get in touch with our team
- [Case Studies](/casestudies.md): Customer success stories

## Blog

- [All Articles](/blog.md): ${posts.length} articles about FHIR and healthcare interoperability

## Optional

${posts.slice(0, 10).map(p => `- [${p.title}](/blog/${p.slug}.md): ${p.description.slice(0, 100)}${p.description.length > 100 ? '...' : ''}`).join('\n')}
`;

      return new Response(llmstxt, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
        },
      });
    }

    // Raw markdown for LLMs: /blog.md (index) and /blog/[slug].md
    if (path === "/blog.md") {
      const { getAllPosts } = await import("./data/blog");
      const posts = getAllPosts();

      const markdown = `# Health Samurai Blog

${posts.length} articles about FHIR, healthcare interoperability, and Health Samurai products.

## Articles

${posts.map(p => `- [${p.title}](/blog/${p.slug}.md) - ${p.date} by ${p.author}
  ${p.description}`).join("\n\n")}
`;

      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Robots-Tag": "noindex",
        },
      });
    }

    if (path.startsWith("/blog/") && path.endsWith(".md")) {
      const slug = path.replace("/blog/", "").replace(".md", "");
      const { getPostBySlug } = await import("./data/blog");
      const post = getPostBySlug(slug);

      if (post) {
        // Return full markdown with frontmatter
        const markdown = `---
title: ${post.title}
description: ${post.description}
date: ${post.date}
author: ${post.author}
url: https://health-samurai.io/blog/${post.slug}
---

${post.content}`;

        return new Response(markdown, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "X-Robots-Tag": "noindex",
          },
        });
      }
      return new Response("Post not found", { status: 404 });
    }

    // Static page markdown for LLMs (main pages)
    const pageMarkdown: Record<string, string> = {
      "/aidbox.md": `# Aidbox FHIR Server

> Enterprise-grade FHIR server and healthcare development platform.

Aidbox is a FHIR-native backend for healthcare applications. It provides:

- **FHIR R4/R5 API** - Full FHIR compliance with REST API
- **SQL on FHIR** - Query FHIR data with SQL
- **SMART on FHIR** - OAuth2/OpenID Connect authentication
- **Subscriptions** - Real-time notifications
- **Bulk Data** - Large-scale data import/export
- **Terminology Services** - ValueSet, CodeSystem operations

## Use Cases

- Electronic Health Records (EHR)
- Health Information Exchange (HIE)
- Clinical Decision Support
- Patient Portals
- Research Data Platforms

## Links

- [Pricing](/price.md)
- [Documentation](https://docs.aidbox.app)
- [Contact Sales](/contacts.md)
`,
      "/fhir-server.md": `# Aidbox FHIR Server

See [/aidbox.md](/aidbox.md) for full details.
`,
      "/medical-form.md": `# Aidbox Forms

> FHIR SDC-compliant healthcare form builder.

Aidbox Forms enables healthcare organizations to:

- Build FHIR Questionnaires visually
- Render forms for patients and clinicians
- Extract structured data as FHIR resources
- Support complex logic and calculations

## Features

- Drag-and-drop form builder
- FHIR SDC compliance
- Conditional logic
- Scoring and calculations
- PDF generation
- Multi-language support

## Links

- [Documentation](https://docs.aidbox.app/modules/aidbox-forms)
- [Contact Sales](/contacts.md)
`,
      "/price.md": `# Aidbox Pricing

> Flexible pricing for healthcare organizations of all sizes.

## Plans

- **Development** - Free for development and testing
- **Production** - Pay-as-you-go for production workloads
- **Enterprise** - Custom pricing with dedicated support

## Contact

[Contact our sales team](/contacts.md) for detailed pricing information.
`,
      "/contacts.md": `# Contact Health Samurai

> Get in touch with our team.

## Sales Inquiries

Email: hello@health-samurai.io

## Technical Support

- Documentation: https://docs.aidbox.app
- Community: https://t.me/aidbox

## Office

Health Samurai, Inc.
`,
      "/casestudies.md": `# Case Studies

> See how healthcare organizations use Aidbox.

Read our [blog](/blog.md) for detailed case studies and technical articles.
`,
      "/about.md": `# About Health Samurai

> Building FHIR-native healthcare infrastructure since 2014.

Health Samurai is a healthcare technology company focused on FHIR interoperability. We build Aidbox, an enterprise FHIR server used by healthcare organizations worldwide.

## Mission

Make healthcare data interoperable through FHIR standards.

## Products

- [Aidbox FHIR Server](/aidbox.md)
- [Aidbox Forms](/medical-form.md)

## Contact

- Website: https://health-samurai.io
- Email: hello@health-samurai.io
`,
    };

    if (pageMarkdown[path]) {
      return new Response(pageMarkdown[path], {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Robots-Tag": "noindex",
        },
      });
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

    // Analytics event API endpoint (for client-side tracking)
    if (path === "/api/analytics/event" && req.method === "POST") {
      try {
        const analyticsSessionId = getAnalyticsSessionId(req);
        const body = await req.json() as { eventType?: string; path?: string; metadata?: Record<string, unknown> };

        await trackEvent({
          sessionId: analyticsSessionId,
          userId: user?.id,
          eventType: body.eventType || "custom",
          path: body.path || url.pathname,
          metadata: body.metadata,
          userAgent: req.headers.get("user-agent") || undefined,
        });

        return new Response(JSON.stringify({ ok: true }), {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": createAnalyticsCookie(analyticsSessionId),
          },
        });
      } catch (error) {
        console.error("Analytics API error:", error);
        return new Response(JSON.stringify({ error: "Invalid request" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
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

    // Blog comments API - GET comments for a post
    const commentsMatch = path.match(/^\/api\/blog\/([^/]+)\/comments$/);
    if (commentsMatch && req.method === "GET") {
      const slug = commentsMatch[1]!;
      const comments = await db`
        SELECT c.*, u.username, u.avatar_url, u.role
        FROM comments c
        JOIN users u ON c.user_id = u.id
        WHERE c.blog_slug = ${slug}
        ORDER BY c.created_at ASC
      ` as Comment[];

      return html(CommentList({ comments, currentUser: user, slug }));
    }

    // Blog comments API - POST new comment
    if (commentsMatch && req.method === "POST") {
      const slug = commentsMatch[1]!;

      // Require authentication
      if (!user) {
        return new Response("Unauthorized", { status: 401 });
      }

      const formData = await req.formData();
      const content = formData.get("content")?.toString().trim();
      const parentIdStr = formData.get("parent_id")?.toString();
      const parentId = parentIdStr ? parseInt(parentIdStr) : null;

      if (!content) {
        return new Response("Content is required", { status: 400 });
      }

      // Insert comment and return the new comment HTML
      const [newComment] = await db`
        INSERT INTO comments (blog_slug, user_id, content, parent_id)
        VALUES (${slug}, ${user.id}, ${content}, ${parentId})
        RETURNING *
      `;

      const comment: Comment = {
        ...newComment,
        username: user.username,
        avatar_url: user.avatarUrl,
        role: user.role,
      };

      return html(CommentItem({
        comment,
        replies: [],
        allComments: [],
        currentUser: user,
        slug,
        depth: parentId ? 1 : 0,
      }));
    }

    // Blog comments API - DELETE comment
    const deleteCommentMatch = path.match(/^\/api\/blog\/([^/]+)\/comments\/(\d+)$/);
    if (deleteCommentMatch && req.method === "DELETE") {
      const slug = deleteCommentMatch[1]!;
      const commentId = parseInt(deleteCommentMatch[2]!);

      // Require authentication
      if (!user) {
        return new Response("Unauthorized", { status: 401 });
      }

      // Get the comment to check ownership
      const [comment] = await db`
        SELECT * FROM comments WHERE id = ${commentId} AND blog_slug = ${slug}
      `;

      if (!comment) {
        return new Response("Comment not found", { status: 404 });
      }

      // Check if user can delete (own comment or admin)
      if (comment.user_id !== user.id && user.role !== "admin") {
        return new Response("Forbidden", { status: 403 });
      }

      // Delete the comment
      await db`DELETE FROM comments WHERE id = ${commentId}`;

      // Return empty response (htmx will remove the element)
      return new Response("", { status: 200 });
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

    // Admin routes protection - require @health-samurai.io users
    if (path.startsWith("/admin")) {
      // Check if user is logged in
      if (!user) {
        return new Response(null, {
          status: 303,
          headers: {
            Location: `/login?redirect=${encodeURIComponent(path)}`,
          },
        });
      }

      // Check if user has @health-samurai.io email
      if (!user.email.endsWith("@health-samurai.io")) {
        return new Response(
          Layout({
            title: "Access Denied",
            children: `
              <section class="section" style="text-align: center; padding: var(--space-24) 0;">
                <div class="container">
                  <h1 class="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
                  <p class="text-gray-600 mb-8">Admin pages are only available to @health-samurai.io users.</p>
                  <p class="text-gray-500 mb-8">Logged in as: ${user.email}</p>
                  <div class="flex gap-4 justify-center">
                    <a href="/" class="btn btn-primary">Back to Home</a>
                    <form method="POST" action="/api/logout" class="inline">
                      <button type="submit" class="btn btn-outline">Sign out</button>
                    </form>
                  </div>
                </div>
              </section>
            `,
            devMode: DEV_MODE,
            ctx,
          }),
          {
            status: 403,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          }
        );
      }
    }

    // File system routing for pages
    const match = router.match(req);
    if (match) {
      // Track page view (non-blocking)
      const analyticsSessionId = getAnalyticsSessionId(req);
      const previousPath = getAndSetPreviousPath(analyticsSessionId, path);
      trackPageView(req, analyticsSessionId, user?.id, previousPath).catch(() => {});

      const page = await import(match.filePath);
      // Merge route params with query params
      const queryParams = Object.fromEntries(url.searchParams.entries());
      const params = { ...match.params, ...queryParams };
      // Support dynamic metadata via getMetadata(params) function
      const metadata = page.getMetadata
        ? page.getMetadata(params)
        : page.metadata || {};

      // If page has fullPage: true, pass extended context including ctx and path
      if (metadata.fullPage) {
        const content = await page.default({ ...params, ctx, path, devMode: DEV_MODE });
        return new Response(`<!DOCTYPE html>${content}`, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Set-Cookie": createAnalyticsCookie(analyticsSessionId),
          },
        });
      }

      // Support both sync and async page components
      // Pass ctx to all pages so they can access user session if needed
      const content = await page.default({ ...params, ctx });

      return new Response(
        Layout({
          title: metadata.title || "Health Samurai",
          description: metadata.description,
          children: content,
          hideFooter: metadata.hideFooter,
          devMode: DEV_MODE,
          ctx,
        }),
        {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Set-Cookie": createAnalyticsCookie(analyticsSessionId),
          },
        }
      );
    }

    // 404 - also track as page view
    const analyticsSessionId = getAnalyticsSessionId(req);
    const previousPath = getAndSetPreviousPath(analyticsSessionId, path);
    trackPageView(req, analyticsSessionId, user?.id, previousPath).catch(() => {});

    return new Response(
      Layout({
        title: "Page Not Found",
        children: notFoundPage(),
        devMode: DEV_MODE,
        ctx,
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Set-Cookie": createAnalyticsCookie(analyticsSessionId),
        },
      }
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
