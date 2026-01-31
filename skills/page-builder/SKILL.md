---
name: page-builder
description: Build pages for the Health Samurai website. Use when creating new pages, adding sections, or working with UI components.
metadata:
  author: niquola
  version: "1.0"
compatibility: Requires bun dev running
---

# Page Builder - Health Samurai Website Pages

Create and modify pages using server-side JSX rendering with Tailwind CSS.

## Quick Start

```tsx
// src/pages/my-page.tsx
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "My Page",
  description: "Page description for SEO",
};

export default function MyPage(): string {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 className="text-4xl font-bold">My Page</h1>
        </div>
      </section>
    </Fragment>
  );
}
```

Route is auto-created from filename: `my-page.tsx` → `/my-page`

## Page Structure

Every page needs:

1. **metadata export** - title (required), description (optional)
2. **default export** - function returning HTML string
3. **Fragment wrapper** - for multiple root elements

### With Context (for auth/db)

```tsx
import type { Context } from "../context";

type PageProps = { ctx?: Context };

export default function MyPage({ ctx }: PageProps = {}): string {
  const user = ctx?.user;
  return <Fragment>...</Fragment>;
}
```

## Layouts

| Layout | Use For |
|--------|---------|
| `Layout` | Standard pages (auto-wrapped by server) |
| `BareLayout` | Auth pages, minimal chrome |
| `AdminLayout` | Admin dashboard pages |
| `ComponentsLayout` | UI component demo pages |

Layout is auto-applied. For custom layout, set `metadata.fullPage = true`:

```tsx
export const metadata = { title: "Login", fullPage: true };

export default function LoginPage(): string {
  return BareLayout({ children: "..." });
}
```

## UI Components

Location: `src/components/ui/`

| Component | Import | Common Props |
|-----------|--------|--------------|
| Button | `ui/Button` | `variant`, `size`, `disabled`, `href` |
| Badge | `ui/Badge` | `color`, `dot`, `removable` |
| Card | `ui/Card` | `header`, `footer`, `well` |
| Alert | `ui/Alert` | `type` (info/success/warning/error) |
| Avatar | `ui/Avatar` | `src`, `size`, `initials` |
| Input | `ui/Input` | `type`, `label`, `error`, `addon` |
| Tabs | `ui/Tabs` | `tabs[]`, `variant` |
| Modal | `ui/Modal` | `id`, `title`, `size` |
| Dropdown | `ui/Dropdown` | `id`, `trigger`, `position` |
| Toggle | `ui/Toggle` | `checked`, `size` |
| Spinner | `ui/Spinner` | `size`, `overlay` |
| Select | `ui/Select` | `options[]`, `label` |
| Stats | `ui/Stats` | `stats[]` |
| Pagination | `ui/Pagination` | `currentPage`, `totalPages` |
| Breadcrumbs | `ui/Breadcrumbs` | `items[]` |
| EmptyState | `ui/EmptyState` | `title`, `icon` |
| Progress | `ui/Progress` | `value`, `max` |

### Usage Pattern

```tsx
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

// Components are functions returning HTML strings
const html = `
  ${Button({ variant: "primary", children: "Click" })}
  ${Badge({ color: "green", children: "Active" })}
`;
```

### Demo Pages

Browse all components at `/_components/ui/*`:
- `/_components/ui/buttons`
- `/_components/ui/badges`
- `/_components/ui/cards`
- etc.

## Section Components

Location: `src/components/`

| Component | Purpose |
|-----------|---------|
| `Hero` | Page hero with title, description, CTA |
| `Trusted` | Client logos carousel |
| `Bento` | Feature grid layout |
| `Pricing` | Pricing cards |
| `FAQ` | Accordion FAQ section |
| `ContactForm` | Contact form with validation |
| `Subscribe` | Newsletter subscription |

```tsx
import { Hero } from "../components/Hero";
import { Trusted } from "../components/Trusted";

export default function MyPage(): string {
  return (
    <Fragment>
      {Hero({ title: "Welcome", subtitle: "Description" })}
      {Trusted()}
    </Fragment>
  );
}
```

## Component Tracing

Use `data-component` for debugging:

```tsx
import { Component } from "../lib/component";

export function MySection(): string {
  return (
    <Component name="pages/mypage/MySection" className="my-section">
      <h2>Content</h2>
    </Component>
  );
}
```

Renders: `<div data-component="pages/mypage/MySection" class="my-section">...</div>`

## Tailwind Patterns

### Common Classes

```tsx
// Container with max width
<div className="max-w-[1200px] mx-auto px-8">

// Section with padding
<section className="section">  // py-20
<section className="section section-alt">  // py-20 + bg-bg-alt

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Flexbox
<div className="flex items-center justify-between gap-4">

// Typography
<h1 className="text-4xl lg:text-5xl font-bold text-text">
<p className="text-lg text-text-light leading-relaxed">
```

### Theme Colors

| Color | Class Examples |
|-------|----------------|
| primary | `text-primary`, `bg-primary`, `border-primary` |
| primary-dark | `hover:bg-primary-dark` |
| primary-light | `bg-primary-light` |
| text | `text-text` |
| text-light | `text-text-light` |
| text-muted | `text-text-muted` |
| bg-alt | `bg-bg-alt` |
| border | `border-border` |

### Button Classes

```html
<a class="btn btn-primary">Primary</a>
<a class="btn btn-secondary">Secondary</a>
<a class="btn btn-outline">Outline</a>
<a class="btn btn-lg">Large</a>
```

## Interactivity

### htmx (Server Requests)

```html
<!-- Load content via AJAX -->
<button hx-get="/api/data" hx-target="#result">Load</button>
<div id="result"></div>

<!-- Form submission -->
<form hx-post="/api/contact" hx-swap="outerHTML">
  <input name="email" />
  <button type="submit">Send</button>
</form>
```

### Datastar (Client-side Reactivity)

```html
<!-- Tabs -->
<div data-signals="{tab: 'one'}">
  <button data-on:click="$tab = 'one'" data-class:font-bold="$tab == 'one'">One</button>
  <button data-on:click="$tab = 'two'" data-class:font-bold="$tab == 'two'">Two</button>

  <div data-show="$tab == 'one'">Content One</div>
  <div data-show="$tab == 'two'" style="display: none">Content Two</div>
</div>

<!-- Toggle visibility -->
<button data-signals="{open: false}" data-on:click="$open = !$open">
  Toggle
</button>
<div data-show="$open" style="display: none">Hidden content</div>
```

**Important:** Use colons in Datastar attributes: `data-on:click`, `data-class:active`

## XSS Prevention

**User-provided content must be escaped:**

```tsx
import { escapeHtml } from "../lib/jsx-runtime";

// UNSAFE
<p>{userComment}</p>

// SAFE
<p>{escapeHtml(userComment)}</p>
```

Escape: comments, form data, any user input displayed back.

Don't escape: static strings, component output, `dangerouslySetInnerHTML`.

## Checklist

When creating/modifying a page:

- [ ] Export `metadata` with title
- [ ] Use `Fragment` for multiple root elements
- [ ] Add `data-component` to custom sections
- [ ] Use theme colors (`text-primary`, `bg-bg-alt`, etc.)
- [ ] Escape user-provided content with `escapeHtml()`
- [ ] Test responsive layout (mobile + desktop)
- [ ] Check accessibility (color contrast, labels, alt text)

## Instructions

When user asks to create a page:

1. **Create file** in `src/pages/` with `.tsx` extension
2. **Add metadata** with title and description
3. **Import Fragment** from `../lib/jsx-runtime`
4. **Use existing components** from `src/components/` when possible
5. **Follow Tailwind patterns** for styling
6. **Add component tracing** for custom sections

When user asks to add a section:

1. **Check existing sections** in `src/components/` first
2. **Create in page** if page-specific, or **create component** if reusable
3. **Use `Component` wrapper** with `data-component` name
4. **Follow existing patterns** for props and styling

When user asks about components:

1. **Point to demo pages** at `/_components/ui/*`
2. **Show import path** and common props
3. **Provide usage example** with actual prop values
