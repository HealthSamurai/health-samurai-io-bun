---
description: Use Bun instead of Node.js, npm, pnpm, or vite.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

# Health Samurai Website

Marketing website for Health Samurai / Aidbox FHIR products. Uses server-side rendering with Bun and htmx for interactivity.

## Quick Start

```sh
bun install              # Install dependencies
./server.sh start        # Start server in background
./server.sh start -h     # Start with hot reload
./server.sh stop         # Stop server
./server.sh restart      # Restart server
./server.sh restart -h   # Restart with hot reload
./server.sh status       # Check if running
./server.sh dev          # Development mode (foreground + hot reload)
./server.sh logs         # Tail server logs
```

Server runs at http://localhost:4444 (override with `PORT=3000 ./server.sh start`)

## Project Structure

```
src/
├── server.ts              # Main server with routes and static file serving
├── lib/
│   ├── jsx-runtime.ts     # Custom JSX runtime for HTML string rendering
│   └── jsx-dev-runtime.ts # Development JSX runtime (re-exports jsx-runtime)
├── pages/
│   ├── home.tsx           # Home page (/)
│   └── fhir-server.tsx    # Product page (/fhir-server, /aidbox)
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

| Path | Handler |
|------|---------|
| `/` | Home page |
| `/fhir-server`, `/aidbox` | Product page |
| `/contacts` | Contact page |
| `/casestudies` | Case studies |
| `/blog` | Blog (placeholder) |
| `/api/contact` (POST) | Contact form submission |
| `/api/subscribe` (POST) | Newsletter subscription |

## Adding a New Page

1. Create `src/pages/my-page.tsx`:
```tsx
export function MyPage(): string {
  return `<section class="section"><h1>My Page</h1></section>`;
}
```

2. Add route in `src/server.ts`:
```ts
case "/my-page":
  return html(Layout({ title: "My Page", children: MyPage() }));
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

## Routing

See [Bun HTTP Routing docs](https://bun.com/docs/runtime/http/routing).

Routes are defined in `Bun.serve()` using the `routes` property. Supports static paths, parameters, and wildcards.

```ts
Bun.serve({
  routes: {
    "/": () => new Response("Home"),
    "/api/users/:id": (req) => Response.json({ id: req.params.id }),
    "/files/*": (req) => new Response(Bun.file("./public/" + req.params["*"])),
  },
  fetch: (req) => new Response("Not found", { status: 404 }), // catch-all
})
```

**Route matching precedence:**
1. Exact routes (`/users/all`)
2. Parameter routes (`/users/:id`)
3. Wildcard routes (`/users/*`)
4. Global catch-all (`/*`)

**Static file serving:**
- Buffered (cached): `new Response(await Bun.file("./logo.png").bytes())`
- Streamed (range requests): `new Response(Bun.file("./download.zip"))`

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
