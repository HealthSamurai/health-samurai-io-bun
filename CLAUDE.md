---
description: Use Bun instead of Node.js, npm, pnpm, or vite.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

# Health Samurai Website

Rebuilding [health-samurai.io](https://health-samurai.io) from scratch using Bun and server-side rendering.

**Goal:** Clone the existing health-samurai.io site with modern tech stack (Bun + htmx + Datastar) instead of the original Webflow implementation. Reference the live site for design, content, and functionality.

## Quick Start

```sh
bun install    # Install dependencies
bun dev        # Start dev server (hot reload + opens browser)
```

Server runs at http://localhost:4444

## Scripts

All scripts are in `scripts/` and run via `bun run <script>`:

| Command | Description |
|---------|-------------|
| `bun dev` | Dev server + Tailwind watcher (hot reload, opens browser) |
| `bun start` | Production server (builds CSS, no hot reload) |
| `bun run css:build` | Build Tailwind CSS (minified) |
| `bun run css:watch` | Watch Tailwind CSS for changes |
| `bun run routes` | List all available routes |
| `bun run typecheck` | Run TypeScript type checking |

**Environment variables:**
- `PORT` - Server port (default: 4444)
- `NO_BROWSER=1` - Disable auto-open browser on dev

```sh
PORT=3000 bun dev           # Run on different port
NO_BROWSER=1 bun dev        # Don't open browser
```

## Server Management (Background)

Use `server.sh` to run the server in background with proper PID tracking:

```sh
./server.sh start       # Start server + CSS watcher in background
./server.sh start -h    # Start with hot reload (recommended for dev)
./server.sh stop        # Stop server and CSS watcher (uses PID, not pkill!)
./server.sh restart     # Restart server
./server.sh restart -h  # Restart with hot reload
./server.sh status      # Check if running (shows PIDs)
./server.sh logs        # Tail server logs
./server.sh dev         # Foreground mode (Ctrl+C to stop)
```

**PID files:**
- `.server.pid` - Server process ID
- `.css.pid` - Tailwind CSS watcher process ID

**Log files:**
- `.server.log` - Server output
- `.css.log` - CSS watcher output

**Important:** Always use `./server.sh stop` to stop the server. Never use `pkill bun` as it kills all Bun processes system-wide.

## Project Structure

```
scripts/
├── dev.ts                 # Development server (bun dev)
├── start.ts               # Production server (bun start)
├── routes.ts              # List routes (bun run routes)
└── typecheck.ts           # Type checking (bun run typecheck)
src/
├── server.ts              # Main server with FileSystemRouter + file watcher
├── lib/
│   ├── jsx-runtime.ts     # Custom JSX runtime for HTML string rendering
│   └── jsx-dev-runtime.ts # Development JSX runtime (re-exports jsx-runtime)
├── pages/                 # File-based routing (Next.js style)
│   ├── index.tsx          # Home page (/)
│   ├── fhir-server.tsx    # Product page (/fhir-server)
│   ├── aidbox.tsx         # Alias for /fhir-server
│   ├── medical-form.tsx   # Aidbox Forms page (/medical-form)
│   ├── price.tsx          # Pricing page (/price)
│   ├── contacts.tsx       # Contact page (/contacts)
│   ├── casestudies.tsx    # Case studies (/casestudies)
│   └── blog.tsx           # Blog page (/blog)
├── components/
│   ├── Layout.tsx         # HTML wrapper with head, header, footer
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ui/
│   │   ├── Button.tsx     # Reusable button component
│   │   └── Tabs.tsx       # Tabs component with Datastar interactivity
│   └── sections/
│       ├── Hero.tsx       # Hero banner section
│       ├── Services.tsx   # Services cards section
│       ├── CaseStudies.tsx
│       ├── Clients.tsx
│       ├── Contributions.tsx
│       └── ContactForm.tsx
├── data/
│   ├── navigation.ts      # Nav links and footer links
│   └── clients.ts         # Client logos data
└── styles/
    ├── global.css         # CSS variables, base styles
    ├── header.css
    ├── footer.css
    ├── hero.css
    ├── sections.css
    └── fhir-server.css
public/
└── assets/
    └── js/
        └── datastar.js    # Datastar framework for client-side reactivity
```

## Tailwind CSS

This project uses **Tailwind CSS v4** with the CLI for styling.

**Development:** `bun dev` automatically runs Tailwind watcher alongside the server.

**Manual commands:**
```sh
bun run css:build   # One-time build (minified) - used by `bun start`
bun run css:watch   # Watch mode - used by `bun dev`
```

**Files:**
- `src/styles/tailwind.css` - Main entry point with @theme config and component styles
- `public/styles/main.css` - Compiled output (gitignored)
- `src/styles/*.css` - Page-specific styles imported into tailwind.css

**Usage in components:**
```tsx
// Use Tailwind utility classes directly
<div className="flex items-center gap-4 p-6 bg-bg-alt rounded-lg">
  <h2 className="text-2xl font-bold text-text">Title</h2>
</div>

// Or use component classes defined in tailwind.css
<button className="btn btn-primary">Click me</button>
<div className="card">Card content</div>
<section className="section section-alt">...</section>
```

**Custom theme colors** (defined in @theme):
- `primary`, `primary-dark`, `primary-light` - Brand red
- `text`, `text-light`, `text-muted` - Text colors
- `bg`, `bg-alt`, `bg-light` - Background colors
- `border`, `border-dark` - Border colors

**Adding new page styles:**
1. Create `src/styles/my-page.css`
2. Add `@import "./my-page.css";` to `src/styles/tailwind.css`
3. Rebuild with `bun run css:build`

## Architecture

**Server-side JSX rendering**: Components use JSX syntax that compiles to HTML strings at runtime. No React runtime or client-side hydration - just TypeScript functions generating HTML.

The custom JSX runtime is in `src/lib/jsx-runtime.ts` and configured via `tsconfig.json`:
- `jsx: "react-jsx"` - Use the new JSX transform
- `jsxImportSource: "#jsx"` - Points to our custom runtime via path alias

```tsx
// Example component with JSX
type Props = { title: string; href: string };

export function Card({ title, href }: Props): string {
  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={href}>Learn more</a>
    </div>
  );
}
```

**JSX Features:**
- Use `className` (converted to `class` in HTML)
- Use `htmlFor` for label's `for` attribute
- Boolean attributes: `<input disabled />` renders as `<input disabled>`
- Style objects: `style={{ color: 'red' }}` renders as `style="color: red"`
- `dangerouslySetInnerHTML={{ __html: rawHtml }}` for raw HTML injection
- `Fragment` from `src/lib/jsx-runtime` for multiple elements without wrapper

```tsx
import { Fragment } from "../lib/jsx-runtime";

function MultipleItems(): string {
  return (
    <Fragment>
      <div>First</div>
      <div>Second</div>
    </Fragment>
  );
}
```

**Layout wrapper**: All pages use `Layout()` which wraps content with `<!DOCTYPE html>`, `<head>`, `Header()`, and `Footer()`.

**Static files**: CSS served from `/styles/*`, images from `/assets/*`. Files live in `src/styles/` and `src/assets/`.

## Current Routes

Routes are automatically discovered from `src/pages/` using `Bun.FileSystemRouter`.

| Path | Page File |
|------|-----------|
| `/` | `index.tsx` |
| `/fhir-server` | `fhir-server.tsx` |
| `/aidbox` | `aidbox.tsx` (re-exports fhir-server) |
| `/medical-form` | `medical-form.tsx` |
| `/price` | `price.tsx` |
| `/contacts` | `contacts.tsx` |
| `/casestudies` | `casestudies.tsx` |
| `/blog` | `blog.tsx` |
| `/api/contact` (POST) | API endpoint in server.ts |
| `/api/subscribe` (POST) | API endpoint in server.ts |

## Adding a New Page

Create a file in `src/pages/` with `default` export and `metadata`:

```tsx
// src/pages/my-page.tsx
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "My Page",           // Required: page title
  description: "Optional",    // Optional: meta description
};

export default function MyPage(): string {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1>My Page</h1>
        </div>
      </section>
    </Fragment>
  );
}
```

The route is automatically created from the filename:
- `my-page.tsx` → `/my-page`
- `index.tsx` → `/`
- `blog/[slug].tsx` → `/blog/:slug` (dynamic routes)

**Route aliases:** To create an alias, re-export from another page:
```tsx
// src/pages/alias.tsx
export { default, metadata } from "./original-page";
```

## Adding a New Component

1. Create in `src/components/` (or `src/components/sections/` for page sections)
2. Export a function returning `string`
3. Import and use in pages by calling the function

---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## File System Router

This project uses [Bun.FileSystemRouter](https://bun.com/docs/api/file-system-router) for automatic file-based routing.

**How it works in this project:**
```ts
// src/server.ts
const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
  fileExtensions: [".tsx"],
});

Bun.serve({
  async fetch(req) {
    const match = router.match(req);
    if (match) {
      const page = await import(match.filePath);
      return html(Layout({
        title: page.metadata?.title,
        description: page.metadata?.description,
        children: page.default(match.params),
      }));
    }
    return html(Layout({ title: "404", children: notFoundPage() }));
  },
});
```

**File naming conventions (Next.js style):**
- `index.tsx` → `/`
- `about.tsx` → `/about`
- `blog/index.tsx` → `/blog`
- `blog/[slug].tsx` → `/blog/:slug` (dynamic)
- `[[...catchall]].tsx` → catch-all route

**Match result object:**
- `filePath`: Full path to matched file
- `kind`: "exact" | "dynamic" | "catch-all" | "optional-catch-all"
- `params`: Dynamic route parameters (e.g., `{ slug: "my-post" }`)
- `query`: Parsed query string

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";
import { createRoot } from "react-dom/client";

// import .css files directly and it works
import './index.css';

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.mdx`.

## htmx

See [htmx docs](https://htmx.org/docs/). Use htmx for dynamic interactions via HTML attributes instead of JavaScript frameworks.

**AJAX Attributes:**
- `hx-get`, `hx-post`, `hx-put`, `hx-patch`, `hx-delete` — issue HTTP requests to URL

**Core Attributes:**
- `hx-trigger` — event that triggers request (default: click/change/submit)
- `hx-target` — CSS selector for where to put response (default: current element)
- `hx-swap` — how to swap content: `innerHTML`, `outerHTML`, `beforeend`, `afterbegin`, `delete`, `none`

```html
<!-- Click button, GET /users, replace #results innerHTML -->
<button hx-get="/users" hx-target="#results">Load Users</button>
<div id="results"></div>

<!-- Live search with debounce -->
<input type="search" name="q"
       hx-get="/search"
       hx-trigger="keyup changed delay:300ms"
       hx-target="#results">

<!-- Delete with confirmation -->
<button hx-delete="/items/1" hx-target="closest tr" hx-swap="outerHTML">Delete</button>
```

**Trigger Modifiers:** `once`, `changed`, `delay:500ms`, `throttle:1s`, `from:<selector>`

**Target Selectors:** `this`, `closest <sel>`, `next <sel>`, `previous <sel>`, `find <sel>`

**Swap Modifiers:** `transition:true`, `swap:100ms`, `settle:100ms`, `scroll:top`

**Loading Indicator:**
```html
<button hx-get="/slow">
  Submit <img class="htmx-indicator" src="/spinner.gif">
</button>
```

**Response Headers (server can send):**
- `HX-Redirect` — redirect client
- `HX-Trigger` — fire client-side events
- `HX-Reswap` / `HX-Retarget` — override swap/target

**Server returns HTML fragments.** Status 204 = no swap, 4xx/5xx = error (no swap by default).

## Deployment

The site is deployed on GKE Autopilot with automatic git-based deployments.

**URLs:**
| Environment | URL | Branch |
|-------------|-----|--------|
| Production | https://site-prod.apki.dev | `prod` |
| Development | https://site-dev.apki.dev | `main` |

**Instant Deploy via GitHub Webhook:**
- Push to GitHub triggers webhook → server pulls changes → restarts in ~2 seconds
- Webhook endpoint: `/api/webhook/github`
- Secret stored in K8s: `kubectl get secret health-samurai-secrets`

**Fallback Polling:**
- Dev polls every 30s, Prod polls every 120s
- Container auto-restarts when new commits detected

**Deploy to Production:**
```bash
git checkout prod && git merge main && git push && git checkout main
```

See `docs/DEPLOYMENT.md` for full infrastructure documentation.

## Kubernetes Configuration

Uses Kustomize for Kubernetes deployments with environment-specific overlays.

**Directory Structure:**
```
k8s/
├── base/                    # Shared resources
│   ├── kustomization.yaml
│   ├── deployment.yaml      # 1 replica, health probes, resource limits
│   ├── service.yaml         # ClusterIP on port 80 → 4444
│   └── configmap.yaml       # GIT_REPO, GIT_BRANCH, POLL_INTERVAL, PORT
└── overlays/
    ├── dev/                 # Development environment
    │   ├── kustomization.yaml
    │   └── ingress.yaml     # TLS ingress for site-dev.apki.dev
    └── prod/                # Production environment
        ├── kustomization.yaml
        └── ingress.yaml     # TLS ingress for site-prod.apki.dev
```

**Environment Differences:**

| Setting | Dev | Prod |
|---------|-----|------|
| URL | site-dev.apki.dev | site-prod.apki.dev |
| Namespace | health-samurai-dev | health-samurai-prod |
| Replicas | 1 | 3 |
| Git Branch | develop | main |
| Poll Interval | 30s | 120s |

**Usage:**
```bash
# Preview generated manifests
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod

# Deploy to cluster
kubectl apply -k k8s/overlays/dev
kubectl apply -k k8s/overlays/prod

# Delete deployment
kubectl delete -k k8s/overlays/dev
```

**Container Image:**
Update the image in `k8s/overlays/prod/kustomization.yaml`:
```yaml
images:
  - name: health-samurai-web
    newName: ghcr.io/healthsamurai/health-samurai-web
    newTag: v1.0.0
```

**Build and push image:**
```bash
docker build -t ghcr.io/healthsamurai/health-samurai-web:latest .
docker push ghcr.io/healthsamurai/health-samurai-web:latest
```

## Datastar

See [Datastar docs](https://data-star.dev/). Use Datastar for reactive client-side interactivity via HTML attributes. Datastar is loaded from `/assets/js/datastar.js`.

**Core Concepts:**
- `data-signals` — Define reactive state as a JSON object
- `data-show` — Conditionally show/hide elements based on signal values
- `data-class` — Conditionally apply CSS classes
- `data-on-click` — Handle click events and update signals

```html
<!-- Tabs example with Datastar -->
<div data-signals="{activeTab: 'tab1'}">
  <button data-class="{active: $activeTab == 'tab1'}" data-on-click="$activeTab = 'tab1'">
    Tab 1
  </button>
  <button data-class="{active: $activeTab == 'tab2'}" data-on-click="$activeTab = 'tab2'">
    Tab 2
  </button>

  <div data-show="$activeTab == 'tab1'">Content 1</div>
  <div data-show="$activeTab == 'tab2'" style="display: none">Content 2</div>
</div>
```

**Signal Syntax:**
- Define signals: `data-signals="{name: 'value', count: 0}"`
- Read signals: `$name`, `$count` (prefix with `$`)
- Update signals: `$count = $count + 1` or `$name = 'new value'`

**Important:** Panels hidden by `data-show` should have `style="display: none"` initially to prevent flash of content before Datastar initializes.

**Reusable Tabs Component:**
```tsx
import { Tabs } from "../components/ui/Tabs";

// Usage
<Tabs
  tabs={[
    { id: "tab1", label: "First Tab", content: "<p>Content here</p>" },
    { id: "tab2", label: "Second Tab", content: "<p>More content</p>" },
  ]}
  defaultTab="tab1"
/>
```
