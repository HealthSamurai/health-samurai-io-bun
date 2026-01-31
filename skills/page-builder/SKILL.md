---
name: page-builder
description: Build pages for the Health Samurai website. Use when creating new pages, adding sections, or working with UI components.
metadata:
  author: niquola
  version: "2.0"
compatibility: Requires bun dev running (localhost:4444)
---

# Page Builder - Health Samurai Website

Create and modify pages using server-side JSX rendering with Tailwind CSS v4.

## Quick Reference

```bash
# Start dev server
bun dev

# Check available routes
bun run routes

# Typecheck
bun run typecheck
```

## Creating a New Page

### Step 1: Create the file

```tsx
// src/pages/my-page.tsx
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "My Page",                    // Required - appears in <title>
  description: "Page description",     // Optional - meta description for SEO
};

export default function MyPage(): string {
  return (
    <Fragment>
      {/* Your content here */}
    </Fragment>
  );
}
```

**Route mapping:**
- `src/pages/my-page.tsx` → `/my-page`
- `src/pages/index.tsx` → `/`
- `src/pages/blog/index.tsx` → `/blog`
- `src/pages/blog/[slug].tsx` → `/blog/:slug` (dynamic)

### Step 2: Add sections

```tsx
import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "My Page",
};

export default function MyPage(): string {
  return (
    <Fragment>
      {Hero({
        title: "Welcome to My Page",
        description: "A brief description of what this page is about.",
        primaryCta: { label: "Get Started", href: "/signup" },
        secondaryCta: { label: "Learn more", href: "/about" },
      })}

      <section class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-3xl font-bold">Section Title</h2>
          <p class="mt-4 text-gray-600">Section content...</p>
        </div>
      </section>

      {ContactForm({ title: "Contact Us", page: "/my-page" })}
    </Fragment>
  );
}
```

## Page with Context (Auth/Database)

When you need access to the current user or database:

```tsx
import { Fragment } from "../lib/jsx-runtime";
import type { Context } from "../context";

export const metadata = {
  title: "Dashboard",
};

type PageProps = {
  ctx?: Context;
};

export default function DashboardPage({ ctx }: PageProps = {}): string {
  const user = ctx?.user;

  if (!user) {
    return (
      <section class="py-24 text-center">
        <p>Please <a href="/login" class="text-primary">log in</a> to view this page.</p>
      </section>
    );
  }

  return (
    <Fragment>
      <section class="py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 class="text-3xl font-bold">Welcome, {user.username}</h1>
        </div>
      </section>
    </Fragment>
  );
}
```

## Full Page Layout (No Header/Footer)

For auth pages or custom layouts:

```tsx
import { BareLayout } from "../components/BareLayout";

export const metadata = {
  title: "Login",
  fullPage: true,  // Important: tells server to skip Layout wrapper
};

export default function LoginPage(): string {
  return BareLayout({
    title: "Login",
    children: `
      <div class="min-h-screen flex items-center justify-center">
        <!-- Login form here -->
      </div>
    `,
  });
}
```

## Dynamic Routes

For pages with URL parameters:

```tsx
// src/pages/blog/[slug].tsx
import { Fragment } from "../../lib/jsx-runtime";

// Dynamic metadata based on params
export function getMetadata(params: { slug: string }) {
  return {
    title: `Article: ${params.slug}`,
    description: "Blog article",
  };
}

type PageProps = {
  slug: string;
};

export default function BlogPost({ slug }: PageProps): string {
  // Fetch post by slug
  return (
    <Fragment>
      <article class="py-24">
        <div class="mx-auto max-w-3xl px-6">
          <h1 class="text-4xl font-bold">{slug}</h1>
        </div>
      </article>
    </Fragment>
  );
}
```

## Available Layouts

| Layout | Import | Use For |
|--------|--------|---------|
| `Layout` | Auto-applied | Standard pages with header/footer |
| `BareLayout` | `../components/BareLayout` | Auth pages, minimal UI |
| `AdminLayout` | `../components/AdminLayout` | Admin dashboard pages |
| `ComponentsLayout` | `../components/ComponentsLayout` | UI component demos |

## Section Components

Import from `../components/`:

| Component | Props | Description |
|-----------|-------|-------------|
| `Hero` | `title`, `description`, `primaryCta`, `secondaryCta`, `image`, `video` | Page hero with CTAs |
| `Bento` | `tagline`, `title`, `items[]` | Feature grid (5 items max) |
| `ContactForm` | `title`, `description`, `page`, `user` | Contact form with htmx |
| `Subscribe` | - | Newsletter subscription |
| `Pricing` | - | Pricing cards |
| `FAQ` | - | Accordion FAQ |
| `Trusted` | - | Client logos |

### Hero Example

```tsx
import { Hero } from "../components/Hero";

{Hero({
  title: "Build Healthcare Apps Fast",
  description: "FHIR-native platform for modern healthcare.",
  primaryCta: {
    label: "Get Started",
    href: "/signup",
  },
  secondaryCta: {
    label: "View Demo",
    href: "/demo",
  },
  image: {
    src: "/assets/images/screenshot.png",
    alt: "Product screenshot",
  },
})}
```

### Bento Grid Example

```tsx
import { Bento, type BentoItem } from "../components/Bento";

const features: BentoItem[] = [
  {
    title: "FHIR Server",
    subtitle: "Product",
    description: "Enterprise-grade FHIR R4/R5 server.",
    href: "/aidbox",
    icon: `<svg>...</svg>`,
  },
  // ... more items (up to 5)
];

{Bento({
  tagline: "Our Products",
  title: "Everything you need",
  items: features,
})}
```

## UI Components

Import from `../components/ui/`:

### Button

```tsx
import { Button, ButtonIcons } from "../components/ui/Button";

// Basic
${Button({ children: "Click me" })}

// Variants: primary, secondary, soft, ghost, danger
${Button({ variant: "secondary", children: "Cancel" })}

// Sizes: xs, sm, md, lg, xl
${Button({ size: "lg", children: "Large Button" })}

// With icon
${Button({ icon: ButtonIcons.plus, children: "Add Item" })}

// As link
${Button({ href: "/signup", children: "Sign Up" })}

// Loading state
${Button({ loading: true, children: "Saving..." })}
```

### Badge

```tsx
import { Badge } from "../components/ui/Badge";

// Colors: gray, red, yellow, green, blue, indigo, purple, pink
${Badge({ color: "green", children: "Active" })}

// With dot indicator
${Badge({ color: "green", dot: true, children: "Online" })}

// Removable
${Badge({ removable: true, children: "Tag" })}
```

### Card

```tsx
import { Card, CardHeader, CardFooter } from "../components/ui/Card";

${Card({
  children: `
    ${CardHeader({ title: "Card Title", subtitle: "Subtitle" })}
    <p>Card content here...</p>
    ${CardFooter({ children: Button({ children: "Action" }) })}
  `,
})}
```

### Alert

```tsx
import { Alert } from "../components/ui/Alert";

// Types: info, success, warning, error
${Alert({
  type: "success",
  title: "Success!",
  children: "Your changes have been saved.",
})}
```

### Input

```tsx
import { Input } from "../components/ui/Input";

${Input({
  label: "Email",
  type: "email",
  name: "email",
  placeholder: "you@example.com",
})}

// With error
${Input({
  label: "Password",
  type: "password",
  error: "Password is required",
})}

// With addon
${Input({
  label: "Website",
  addon: "https://",
  placeholder: "example.com",
})}
```

### More Components

View live demos at `/_components/ui/*`:
- `/_components/ui/buttons`
- `/_components/ui/badges`
- `/_components/ui/cards`
- `/_components/ui/alerts`
- `/_components/ui/inputs`
- `/_components/ui/avatars`
- `/_components/ui/tabs`
- `/_components/ui/modals`
- `/_components/ui/dropdowns`
- `/_components/ui/toggles`
- `/_components/ui/spinners`

## Tailwind Patterns

### Container & Layout

```html
<!-- Centered container with max width -->
<div class="mx-auto max-w-7xl px-6 lg:px-8">

<!-- Section with vertical padding -->
<section class="py-24 sm:py-32">

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Flexbox with gap -->
<div class="flex items-center gap-4">
```

### Typography

```html
<!-- Heading -->
<h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">

<!-- Subheading -->
<h2 class="text-base/7 font-semibold text-primary">

<!-- Body text -->
<p class="text-lg text-gray-600">

<!-- Small/muted -->
<p class="text-sm text-gray-500">
```

### Theme Colors

| Color | Usage |
|-------|-------|
| `text-primary` / `bg-primary` | Brand red (#c9362b) |
| `hover:bg-primary-dark` | Darker red on hover |
| `bg-primary-light` | Light red background |
| `text-gray-900` | Headings, primary text |
| `text-gray-600` | Body text |
| `text-gray-500` | Muted text |
| `bg-gray-50` | Light background |
| `bg-gray-100` | Slightly darker background |

### Buttons (CSS Classes)

```html
<a class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark">
  Primary
</a>

<a class="text-sm font-semibold text-gray-900">
  Link →
</a>
```

## Interactivity

### htmx (Server Requests)

```html
<!-- Form with htmx -->
<form hx-post="/api/contact" hx-target="#response" hx-swap="innerHTML">
  <input name="email" type="email" required />
  <button type="submit">Submit</button>
</form>
<div id="response"></div>

<!-- Loading indicator -->
<span class="htmx-indicator">Loading...</span>
```

### Datastar (Client-side)

**Important:** Use colons in attributes: `data-on:click`, `data-class:active`

```html
<!-- Tabs -->
<div data-signals="{tab: 'one'}">
  <button data-on:click="$tab = 'one'" data-class:font-bold="$tab == 'one'">Tab 1</button>
  <button data-on:click="$tab = 'two'" data-class:font-bold="$tab == 'two'">Tab 2</button>

  <div data-show="$tab == 'one'">Content 1</div>
  <div data-show="$tab == 'two'" style="display: none">Content 2</div>
</div>

<!-- Toggle -->
<div data-signals="{open: false}">
  <button data-on:click="$open = !$open">Toggle</button>
  <div data-show="$open" style="display: none">Hidden content</div>
</div>
```

## XSS Prevention

**This JSX runtime does NOT auto-escape text.** Always escape user content:

```tsx
import { escapeHtml } from "../lib/jsx-runtime";

// UNSAFE - XSS vulnerability
<p>{userComment}</p>

// SAFE - escaped
<p>{escapeHtml(userComment)}</p>
```

**When to escape:**
- User comments/posts from database
- Form data displayed back
- Any external/user-provided content

**Don't escape:**
- Static strings in code
- Component output (already HTML)
- `dangerouslySetInnerHTML` content

## Checklist

Before committing a new page:

- [ ] Has `metadata` with `title`
- [ ] Uses `Fragment` for multiple root elements
- [ ] Responsive (works on mobile and desktop)
- [ ] User content escaped with `escapeHtml()`
- [ ] Images have `width`, `height`, `loading="lazy"`, and `alt`
- [ ] Interactive elements are accessible (keyboard, screen reader)
- [ ] Forms use htmx for submission
- [ ] No hardcoded data that should come from database/API

## Common Patterns

### Stats Section

```tsx
<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      <div class="flex flex-col bg-gray-50 p-8">
        <dt class="text-sm/6 font-semibold text-gray-600">Users</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-primary">10k+</dd>
      </div>
      {/* More stats... */}
    </dl>
  </div>
</div>
```

### CTA Section

```tsx
<div class="bg-primary py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-white">Ready to get started?</h2>
    <p class="mt-4 text-lg text-white/80">Join thousands of healthcare organizations.</p>
    <a href="/signup" class="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-primary hover:bg-gray-100">
      Get Started
    </a>
  </div>
</div>
```

### Feature Grid

```tsx
<div class="py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-lg bg-gray-50 p-8">
        <h3 class="font-semibold text-gray-900">Feature 1</h3>
        <p class="mt-2 text-gray-600">Description...</p>
      </div>
      {/* More features... */}
    </div>
  </div>
</div>
```

## Instructions

When creating a page:

1. Create `src/pages/<name>.tsx`
2. Add `metadata` with title
3. Use existing section components when possible
4. Follow Tailwind patterns for custom sections
5. Test at `http://localhost:4444/<name>`
6. Check responsive layout
7. Verify forms work (htmx)

When adding a component:

1. Check if similar component exists in `src/components/ui/`
2. Check demo pages at `/_components/ui/*`
3. Import and use the function with props object
4. Components return HTML strings, not JSX elements
