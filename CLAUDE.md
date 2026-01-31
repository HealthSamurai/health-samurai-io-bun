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
bun dev        # Start dev server in background (watch mode + Tailwind watch)
```

Server runs at http://localhost:4444

## Scripts

All scripts are in `scripts/` and run via `bun run <script>`:

| Command | Description |
|---------|-------------|
| `bun dev` | Start background dev server + Tailwind watch |
| `bun dev:fg` | Run dev server + Tailwind watch in foreground |
| `bun dev:reload` | Restart background dev processes |
| `bun dev:stop` | Stop background dev processes |
| `bun dev:status` | Show background dev status |
| `bun dev:logs` | Tail dev server + Tailwind logs |
| `bun start` | Production server (builds CSS, no hot reload) |
| `bun run css:build` | Build Tailwind CSS (minified) |
| `bun run css:watch` | Watch Tailwind CSS for changes |
| `bun run routes` | List all available routes |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run migrate:status` | Show database migration status |
| `bun run migrate:up` | Run pending database migrations |
| `bun run migrate:down` | Rollback last migration |
| `bun run migrate:create <name>` | Create new migration files |
| `bun run sql "<query>"` | Run SQL query against the database |

**Environment variables:**
- `PORT` - Server port (default: 4444)

```sh
PORT=3000 bun dev           # Run background dev server on different port
PORT=3000 bun dev:fg        # Foreground dev server on different port
```

## Server Management (Dev)

Use `bun dev` (single entry point) to manage background dev processes with PID + log files:

```sh
bun dev           # Start server + CSS watcher in background
bun dev:reload    # Restart background processes
bun dev:stop      # Stop background processes (uses PID files)
bun dev:status    # Check if running (shows PIDs)
bun dev:logs      # Tail server + Tailwind logs
bun dev:fg        # Foreground mode (Ctrl+C to stop)
```

**PID files:**
- `.server.pid` - Server process ID
- `.css.pid` - Tailwind CSS watcher process ID

**Log files:**
- `.server.log` - Server output
- `.css.log` - CSS watcher output

**Important:** Always use `bun dev:stop` to stop the server. Never use `pkill bun` as it kills all Bun processes system-wide.

**Tailwind watch fallback:** On systems where native file watching fails, `bun run css:watch` falls back to polling rebuilds every 2 seconds. This is expected and keeps CSS up to date.

**Temp directory:** Dev scripts use a local `./.tmp` directory for Bun temp files.

## Webflow HTML Snapshots (chro / CDP)

Prereqs:
1) Chrome headless on port 9222
2) chro server on port 2229

```sh
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --remote-debugging-port=9222 --disable-gpu about:blank

cd /Users/niquola/chromoi
bun src/index.js
```

Health check:

```sh
curl -sS localhost:2229/health
```

Snapshot helper (use `jq` for CDP JSON parsing):

```sh
save_snapshot() {
  local url="$1"
  local out="$2"
  curl -sS localhost:2229/cdp -d "{\"method\":\"Page.navigate\",\"params\":{\"url\":\"${url}\"}}" >/dev/null
  sleep 4
  curl -sS localhost:2229/cdp -d '{"method":"Runtime.evaluate","params":{"expression":"document.documentElement.outerHTML"}}' \
    | jq -r '.result.value // ""' \
    > "$out"
}

save_snapshot "https://health-samurai.io/" "./webflow/index.html"
save_snapshot "https://health-samurai.io/fhir-server" "./webflow/fhir-server.html"
```

## Ad‑hoc Scripts

- Prefer Bun for ad‑hoc scripts (`bun -e` or `scripts/*.ts` run via `bun`).
- Use `jq` for quick CDP JSON parsing in shell pipelines.
- Scripts should handle optional data defensively (TypeScript `strict`), especially scrapers that parse HTML.

## Project Structure

```
scripts/
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

### Theme Configuration

The custom theme is defined in `src/styles/tailwind.css` using the `@theme` directive:

```css
@theme {
  /* Colors - WCAG AA compliant */
  --color-primary: #c9362b;
  --color-primary-dark: #a82d24;
  --color-primary-light: #fef2f0;
  --color-primary-vibrant: #EA4A35;
  --color-secondary: #0066FF;

  /* Text colors */
  --color-text: #1a1a1a;
  --color-text-light: #666666;
  --color-text-muted: #999999;

  /* Background colors */
  --color-bg: #ffffff;
  --color-bg-alt: #f7f7f7;
  --color-bg-light: #f5f5f5;

  /* Border colors */
  --color-border: #ebebeb;
  --color-border-dark: #e0e0e0;

  /* Typography */
  --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-heading: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Fira Code', 'Monaco', monospace;

  /* Container */
  --container-max: 1200px;
}
```

### Using Theme Colors

Theme colors can be used with any Tailwind color utility:

| Color | Background | Text | Border |
|-------|------------|------|--------|
| primary | `bg-primary` | `text-primary` | `border-primary` |
| primary-dark | `bg-primary-dark` | `text-primary-dark` | `border-primary-dark` |
| primary-light | `bg-primary-light` | `text-primary-light` | `border-primary-light` |
| text | `bg-text` | `text-text` | `border-text` |
| text-light | `bg-text-light` | `text-text-light` | `border-text-light` |
| text-muted | `bg-text-muted` | `text-text-muted` | `border-text-muted` |
| bg | `bg-bg` | `text-bg` | `border-bg` |
| bg-alt | `bg-bg-alt` | - | `border-bg-alt` |
| bg-light | `bg-bg-light` | - | `border-bg-light` |
| border | - | - | `border-border` |
| border-dark | - | - | `border-border-dark` |

### Using Theme Fonts

```tsx
<p className="font-sans">Body text (Inter)</p>
<h1 className="font-heading">Heading text (Inter)</h1>
<code className="font-mono">Code text (Fira Code)</code>
```

### Component Classes

Reusable component classes are defined in `@layer components`:

```tsx
// Buttons
<a className="btn btn-primary">Primary button</a>
<a className="btn btn-secondary">Secondary button</a>
<a className="btn btn-outline">Outline button</a>
<a className="btn btn-link">Link style button</a>
<a className="btn btn-primary btn-lg">Large button</a>

// Cards
<div className="card">Card with hover shadow</div>

// Sections
<section className="section">Standard section (py-20)</section>
<section className="section section-alt">Alt background section</section>
<section className="section-light">Light background section</section>

// Container
<div className="container">Max 1200px, centered, px-8</div>

// Forms
<div className="form-group">
  <label className="form-label">Label</label>
  <input className="form-input" />
  <textarea className="form-input form-textarea" />
</div>

// Accessibility
<span className="sr-only">Screen reader only text</span>
<a className="skip-link" href="#main">Skip to content</a>

// Badge
<span className="badge">Tag</span>
```

### Usage Examples

**Inline Tailwind classes (preferred for new components):**
```tsx
<div className="flex items-center gap-4 p-6 bg-bg-alt rounded-lg">
  <h2 className="text-2xl font-bold text-text">Title</h2>
  <p className="text-text-light">Description</p>
</div>
```

**Common patterns:**
```tsx
// Centered container with max width
<div className="max-w-[1200px] mx-auto px-8">

// Grid layout (responsive)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

// Flexbox with gap
<div className="flex flex-wrap gap-4 items-center justify-center">

// Responsive text
<h1 className="text-3xl lg:text-5xl font-bold">

// Arbitrary values (when theme doesn't have exact value)
<div className="max-w-[560px] leading-[1.7] tracking-[-1.12px]">
```

### Migrating CSS to Tailwind

When refactoring existing CSS classes to Tailwind:

1. Replace CSS variables with theme colors: `var(--color-primary)` → `text-primary`
2. Use arbitrary values for exact matches: `56px` → `text-[56px]`
3. Keep keyframe animations in CSS (typewriter, marquee, etc.)
4. Use `@apply` in CSS for complex reusable patterns

**Example migration:**
```css
/* Before (CSS) */
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fef2f0;
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  margin-bottom: 24px;
}
```

```tsx
// After (Tailwind classes)
<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-[20px] font-mono text-sm text-primary mb-6">
```

### Adding New Page Styles

For page-specific styles that can't use Tailwind utilities:

1. Create `src/styles/my-page.css`
2. Add `@import "./my-page.css";` to `src/styles/tailwind.css`
3. Use `@apply` for Tailwind utilities in CSS when needed:
   ```css
   .my-custom-class {
     @apply flex items-center gap-4 text-primary;
     /* Custom CSS that can't be expressed with utilities */
     animation: custom-animation 2s infinite;
   }
   ```
4. Rebuild with `bun run css:build`

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

**XSS Prevention:**

> **WARNING:** This JSX runtime does NOT auto-escape text content (unlike React). User-provided content must be explicitly escaped to prevent XSS attacks.

Use `escapeHtml()` for any user-provided data:

```tsx
import { escapeHtml } from "../lib/jsx-runtime";

// UNSAFE - XSS vulnerability!
<p>{comment.content}</p>

// SAFE - escaped
<p>{escapeHtml(comment.content)}</p>
```

**When to escape:**
- Comment/post content from database
- User-submitted form data displayed back
- Any data that originates from user input

**When NOT to escape:**
- Static strings in code
- Component output (already HTML)
- Content from `dangerouslySetInnerHTML` (intentionally raw)

**Layout wrapper**: All pages use `Layout()` which wraps content with `<!DOCTYPE html>`, `<head>`, `Header()`, and `Footer()`.

## Context & Database

All database access should go through `ctx` (Context) rather than importing `db` directly. This keeps request-scoped data centralized and makes handlers testable by passing a fake `ctx`.

**Examples:**
```ts
// ✅ Preferred
await trackEvent(ctx, { ... })
await ctx.db`SELECT ...`

// ❌ Avoid
import { db } from "../db";
await db`SELECT ...`
```

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

## LLM-Friendly Endpoints (llms.txt)

The site implements the [llms.txt specification](https://llmstxt.org/) for LLM-friendly content discovery.

### Endpoints

| Path | Description |
|------|-------------|
| `/llms.txt` | Site index for LLMs with links to all markdown content |
| `/blog.md` | Blog index with all 100+ articles |
| `/blog/[slug].md` | Individual blog post in markdown with YAML frontmatter |
| `/aidbox.md` | Aidbox FHIR Server product page |
| `/medical-form.md` | Aidbox Forms product page |
| `/price.md` | Pricing information |
| `/contacts.md` | Contact information |
| `/casestudies.md` | Case studies overview |
| `/about.md` | Company information |

### Example Usage

```bash
# Get site index for LLMs
curl https://health-samurai.io/llms.txt

# Get blog index
curl https://health-samurai.io/blog.md

# Get specific article
curl https://health-samurai.io/blog/aidbox-2025-building-a-future-proof-fhir-platform.md
```

### llms.txt Format

The `/llms.txt` file follows the specification:

```markdown
# Site Name

> Brief description

## Section
- [Link](/path.md): Description

## Optional
- [Less important links](/other.md): Can be skipped for shorter context
```

### Headers

All `.md` endpoints return:
- `Content-Type: text/markdown; charset=utf-8`
- `X-Robots-Tag: noindex` (prevents search engine indexing)

### Adding New Page Markdown

Add entries to the `pageMarkdown` object in `src/server.ts`:

```typescript
const pageMarkdown: Record<string, string> = {
  "/new-page.md": `# New Page

> Description

Content here...
`,
};
```

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

## UI Component Library

Reusable UI components based on Tailwind Plus UI patterns. All components are server-rendered functions returning HTML strings.

**Location:** `src/components/ui/`

**Demo pages:** `/_components/ui/*` (with live examples and code snippets)

### Available Components

| Component | File | Description |
|-----------|------|-------------|
| Avatar | `Avatar.tsx` | User avatars with sizes (xs-2xl), shapes, status indicators, initials fallback, groups |
| Badge | `Badge.tsx` | Status badges with colors, variants (flat/outline), dots, removable option |
| Button | `Button.tsx` | Buttons with variants, sizes, icons, loading states, link style |
| Card | `Card.tsx` | Content cards with headers, footers, dividers, well variant |
| Alert | `Alert.tsx` | Notifications with types (info/success/warning/error), icons, actions, dismissible |
| Input | `Input.tsx` | Form inputs with types, addons, validation states, icons |
| Tabs | `Tabs.tsx` | Tab navigation with variants (underline/pills), icons, badges, Datastar integration |
| Modal | `Modal.tsx` | Dialog modals with sizes, icons, variants, ConfirmDialog/SuccessDialog helpers |
| Dropdown | `Dropdown.tsx` | Datastar-powered dropdown menus with positions, icons, sections |
| Toggle | `Toggle.tsx` | Toggle switches with sizes, variants, descriptions, groups |
| Spinner | `Spinner.tsx` | Loading indicators, skeleton loaders, loading overlays |

### Usage

```tsx
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Avatar } from "../components/ui/Avatar";

// Components are functions that return HTML strings
const html = `
  ${Button({ variant: "primary", children: "Click me" })}
  ${Badge({ color: "green", dot: true, children: "Active" })}
  ${Avatar({ src: "/avatar.jpg", size: "lg" })}
`;
```

### Interactive Components

Some components use Datastar for interactivity:

- **Tabs** - `TabsWithContent()` for client-side tab switching
- **Dropdown** - Opens/closes with click outside detection
- **Modal** - Uses native `<dialog>` element with Datastar triggers

```tsx
import { TabsWithContent } from "../components/ui/Tabs";
import { Dropdown, DropdownItem, DropdownSection } from "../components/ui/Dropdown";

// Tabs with Datastar state management
${TabsWithContent({
  id: "my-tabs",
  tabs: [
    { id: "tab1", label: "First", content: "Content 1" },
    { id: "tab2", label: "Second", content: "Content 2" },
  ],
})}

// Dropdown with menu items
${Dropdown({
  id: "menu",
  trigger: "Options",
  children: DropdownSection({
    children: DropdownItem({ children: "Edit", href: "/edit" }),
  }),
})}
```

### Creating New Components

1. Create in `src/components/ui/NewComponent.tsx`
2. Define TypeScript types for props
3. Export function(s) returning HTML strings
4. Add demo page at `src/pages/_components/ui/newcomponent.tsx`
5. Add to sidebar in `src/components/ComponentsLayout.tsx`

**Demo page pattern:**
```tsx
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { NewComponent } from "../../../components/ui/NewComponent";
import { highlightCode } from "../../../lib/markdown";

export const metadata = { title: "New Component", fullPage: true };

export default function Demo({ devMode }: { devMode?: boolean }): string {
  return ComponentsLayout({
    title: "New Component",
    currentPath: "/_components/ui/newcomponent",
    children: `
      <h1>New Component</h1>
      <div>${NewComponent({ ... })}</div>
      ${highlightCode(`<NewComponent ... />`, "tsx")}
    `,
    devMode,
  });
}
```

## Component Tracing

Components use `data-component` attributes for debugging. This makes it easy to identify which component rendered which HTML in browser DevTools.

**Usage:**
```tsx
import { Component } from "../lib/component";

export function MySection(): string {
  return (
    <Component name="pages/mypage/MySection" className="my-section">
      <h2>Content here</h2>
    </Component>
  );
}
```

**Output:**
```html
<div data-component="pages/mypage/MySection" class="my-section">
  <h2>Content here</h2>
</div>
```

**Naming convention:** Use full path from `src/` without extension: `pages/index/HeroSection`, `components/ContactForm`

**Shared components with configurable names:**
```tsx
// In shared component
export function ContactSection(config: { componentName?: string } = {}): string {
  const name = config.componentName ?? "components/ContactSection";
  return <Component name={name}>...</Component>;
}

// In page-specific wrapper
export function ContactSection(): string {
  return BaseContactSection({
    componentName: "pages/index/ContactSection",
  });
}
```

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

## Database

PostgreSQL database using ParadeDB (Postgres with vector extensions).

**Start the database:**
```bash
docker-compose up -d postgres
```

**Connection:**
```bash
DATABASE_URL=postgres://healthsamurai:healthsamurai@localhost:5436/healthsamurai
```

Copy `.env.example` to `.env` for local development.

### Database Migrations

SQL-based migrations with up/down scripts. Migration files are stored in `migrations/` directory.

**Automatic migrations:** Migrations run automatically when the server starts. No manual intervention needed for deployments.

**IMPORTANT: Never modify a migration after it has been committed.** Once a migration is pushed to git, it may have already run on other environments (dev, prod, other developers). To make changes, create a new migration instead.

```
→ Database migrations: up to date
→ Server running at http://localhost:4321
```

**Manual commands:**

| Command | Description |
|---------|-------------|
| `bun run migrate` | Show usage help |
| `bun run migrate:status` | Show migration status |
| `bun run migrate:create <name>` | Create new migration files |
| `bun run migrate:up` | Run pending migrations |
| `bun run migrate:down [count]` | Rollback last migration(s) |

**Creating a migration:**
```bash
bun run migrate:create add-users-table
# Creates:
#   migrations/20260131T160019-add-users-table.up.sql
#   migrations/20260131T160019-add-users-table.down.sql
```

**Migration file format:**
```sql
-- migrations/20260131T160019-add-users-table.up.sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- migrations/20260131T160019-add-users-table.down.sql
DROP TABLE IF EXISTS users;
```

**Check status:**
```bash
bun run migrate:status
# Migration Status:
# =================
# [x] 20260131T160019-add-users-table  (executed)
# [ ] 20260131T170000-add-posts-table  (pending)
```

**Run migrations:**
```bash
bun run migrate:up
# Found 1 pending migration(s)
# Running migration: 20260131T170000-add-posts-table
#   Migration completed
```

**Rollback:**
```bash
bun run migrate:down      # Rollback last 1 migration
bun run migrate:down 3    # Rollback last 3 migrations
```

**Implementation:**
- `src/migrate.ts` - Core migration logic using `Bun.SQL`
- `scripts/migrate.ts` - CLI wrapper
- Migrations tracked in `migrations` table in the database

## Authentication

Session-based authentication with Google OAuth for `@health-samurai.io` accounts.

### Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/login` | GET | Login page with Google + email/password options |
| `/auth/google` | GET | Redirect to Google OAuth consent |
| `/auth/google/callback` | GET | Google OAuth callback handler |
| `/api/login` | POST | Email/password login |
| `/api/logout` | POST | Destroy session and redirect |

### Files

```
src/
├── auth/
│   └── google.ts          # Google OAuth implementation
├── middleware/
│   ├── session.ts         # Session management (create, get, destroy)
│   └── auth.ts            # Auth middleware (withAuth, requireAuth)
├── pages/
│   └── login.tsx          # Login page component
├── components/
│   └── BareLayout.tsx     # Minimal layout for auth pages
├── context.ts             # Request context with user session
└── types.ts               # User and session types
```

### Context

User session is available via `ctx.user` in layouts and components:

```tsx
// In Layout or Header
type Props = { ctx?: Context };

export function Header({ ctx }: Props): string {
  const user = ctx?.user;
  if (user) {
    return <span>{user.username}</span>;
  }
  return <a href="/login">Log in</a>;
}
```

### Local Development

Copy `.env.example` to `.env` with Google OAuth credentials:

```env
GOOGLE_CLIENT_ID=353194995576-anatl78m48o2p16j250sbaob01rgmo92.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=<get from team or GCP Console>
GOOGLE_REDIRECT_URI=http://localhost:4444/auth/google/callback
GOOGLE_ALLOWED_DOMAIN=health-samurai.io
```

### Kubernetes

OAuth credentials stored in `health-samurai-secrets` secret. See `/deploy` skill for details.

## Analytics

Self-hosted analytics tracking page views, user journeys, and site traffic. See [spec/analytics.md](spec/analytics.md) for full documentation.

**Key files:**
- `src/analytics.ts` - Tracking logic and dashboard queries
- `src/pages/admin/analytics.tsx` - Admin dashboard UI

**Dashboard:** `/admin/analytics` (requires `@health-samurai.io` login)

**Automatic tracking:** Every page view is tracked server-side with session, referrer, geo, browser/device info.

**Declarative tracking:** Add `data-track` attributes to track clicks without JavaScript:

```html
<!-- Track button click -->
<button data-track="click" data-track-label="Sign Up" data-track-category="cta">
  Sign Up
</button>

<!-- Track link with extra data -->
<a href="/docs" data-track="click" data-track-label="View Docs" data-track-position="header">
  Documentation
</a>

<!-- Track form submission -->
<form data-track="submit" data-track-label="Contact Form">...</form>
```

**Programmatic tracking:** From JavaScript:

```javascript
hsTrack('custom_event', 'Button Clicked', { category: 'cta', plan: 'pro' });
```

## Zulip Bot

Zulip integration for posting form submission notifications to Zulip streams.

**Key files:**
- `src/lib/zulip.ts` - Zulip API client

**Environment variables:**
| Variable | Description | Default |
|----------|-------------|---------|
| `ZULIP_BOT_EMAIL` | Bot email (from zuliprc) | - |
| `ZULIP_API_KEY` | Bot API key (from zuliprc) | - |
| `ZULIP_SERVER` | Zulip server URL | `https://chat.health-samurai.io` |
| `ZULIP_STREAM` | Stream to post to | `health-samurai.io` |

**Notifications:** All form submissions post to `#health-samurai.io > form-submissions`

**Local development:** Add credentials to `.env` (see `.env.example`)

**Kubernetes:** Credentials stored in `health-samurai-secrets` secret

## File System Router

This project uses [Bun.FileSystemRouter](https://bun.sh/docs/api/file-system-router) for automatic file-based routing.

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

See `/deploy` skill for full deployment documentation.

**Quick deploy to production:**
```bash
git checkout prod && git merge main && git push && git checkout main
```

**URLs:**
- Dev: https://site-dev.apki.dev (auto-deploys from `main`)
- Prod: https://site-prod.apki.dev

## Datastar

See [Datastar docs](https://data-star.dev/reference). Use Datastar for reactive client-side interactivity via HTML attributes.

**IMPORTANT: Attribute syntax uses COLONS, not hyphens!**
**JSX note:** Datastar attributes like `data-on:click` and `data-signals:foo` are valid in this JSX runtime. For htmx events, prefer `hx-on="event: handler"` because JSX rejects names like `hx-on:htmx:afterRequest`.

**Scope rule:** Signals must be declared on the element or an ancestor of any element that reads/updates them. Sibling scopes do not share signals.

**Core Attributes:**
- `data-signals` — Define reactive state (object or key syntax)
- `data-show` — Conditionally show/hide elements
- `data-class` — Conditionally apply CSS classes
- `data-on:click` — Handle click events (note the COLON)
- `data-bind` — Two-way data binding for inputs
- `data-text` — Bind element text content

**Attribute Syntax (uses colons for modifiers):**
```html
<!-- Signals: object syntax or key syntax -->
<div data-signals="{activeTab: 'tab1', count: 0}"></div>
<div data-signals:foo="1"></div>
<div data-signals:foo.bar="nested"></div>

<!-- Events: data-on:eventname -->
<button data-on:click="$count = $count + 1">Increment</button>
<input data-on:input="$search = evt.target.value" />
<form data-on:submit="@post('/api/submit')">...</form>

<!-- Classes: object syntax or key syntax -->
<div data-class="{active: $tab == 'one', hidden: !$visible}"></div>
<div data-class:font-bold="$isImportant"></div>
<div data-class:bg-primary="$selected"></div>

<!-- Show/hide -->
<div data-show="$isVisible">Shown when true</div>
<div data-show="$tab == 'settings'" style="display: none">Settings panel</div>

<!-- Binding inputs -->
<input data-bind:username />
<select data-bind:country>...</select>

<!-- Text content -->
<span data-text="$message"></span>
```

**Event Modifiers:**
```html
<button data-on:click__once="$init()">Run once</button>
<input data-on:input__debounce_300ms="$search = evt.target.value" />
<div data-on:click__outside="$menuOpen = false">...</div>
<button data-on:click__prevent="$submit()">Submit</button>
```

**Signal Syntax:**
- Define: `data-signals="{name: 'value'}"` or `data-signals:name="value"`
- Read: `$name` (prefix with `$`)
- Update: `$name = 'new value'`
- Nested: `data-signals:user.name="John"` → access as `$user.name`

**Important:** Elements hidden by `data-show` should have `style="display: none"` initially to prevent flash before Datastar initializes.

**Tabs Example:**
```html
<div data-signals="{activeTab: 'tab1'}">
  <button data-class="{active: $activeTab == 'tab1'}" data-on:click="$activeTab = 'tab1'">
    Tab 1
  </button>
  <button data-class="{active: $activeTab == 'tab2'}" data-on:click="$activeTab = 'tab2'">
    Tab 2
  </button>

  <div data-show="$activeTab == 'tab1'">Content 1</div>
  <div data-show="$activeTab == 'tab2'" style="display: none">Content 2</div>
</div>
```
