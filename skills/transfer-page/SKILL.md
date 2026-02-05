---
name: transfer-page
description: Transfer pages from Webflow to the Bun SSR stack via DevLink. Use when migrating a page from health-samurai.io Webflow site to the local Bun application pixel-perfect.
metadata:
  author: d.chistoforov
  version: "1.0"
compatibility: Requires bun dev running (localhost:4444), react and react-dom installed
---

# Transfer Page — Webflow DevLink to Bun SSR

Migrate pages from the Webflow-based health-samurai.io site to the local Bun SSR stack, preserving pixel-perfect layout via DevLink components.

## Overview

The pipeline:

```
Webflow DevLink component (.js + .module.css)
  → React SSR (renderToStaticMarkup)
    → Static HTML + scoped CSS
      → Bun page (src/pages/*.tsx) with dangerouslySetInnerHTML
```

## Prerequisites

1. **DevLink component** already downloaded into `devlink/` folder
2. **Dependencies installed**: `react` and `react-dom` (already in package.json)
3. **TSConfig override**: `tsconfig.devlink.json` (already exists at project root)
4. **Dev server running**: `bun dev`

### Infrastructure (already set up, no changes needed)

These one-time changes were made during the pricing page migration:

- `tsconfig.devlink.json` — overrides `jsxImportSource` to `react` for DevLink rendering
- `src/components/Layout.tsx` — has `stylesheets?: string[]` prop for injecting page CSS
- `src/server.ts` — forwards `metadata.stylesheets` to Layout; serves `/devlink/*` as static files

## Step-by-Step Migration

### Step 1: Identify the DevLink component

The `devlink/` folder contains exported Webflow components. Each page component has:
- `ComponentName.js` — React component (JSX)
- `ComponentName.module.css` — Component-specific styles
- `ComponentName.d.ts` — TypeScript types

Also shared across all components:
- `devlink/global.css` — Webflow global styles (fonts, CSS variables, framework classes, reset)
- `devlink/_Builtin/` — Webflow built-in component implementations

Find the component for the page you want to migrate:

```bash
ls devlink/*.js
# Example output: Pricing.js, Services.js, About.js, etc.
```

### Step 2: Analyze the component structure

Before writing the render script, check what the component includes:

```bash
# Look at imports to understand what sub-components are included
head -20 devlink/ComponentName.js
```

DevLink components typically include:
- **NewNavbar** — site navigation (STRIP — we use our own Header)
- **Page content sections** (KEEP)
- **Contact form** (STRIP — we have our own)
- **GPrefooter** — pre-footer awards/badges section (STRIP)
- **GFooter** — site footer (STRIP — we use our own Footer)

### Step 3: Create the render script

Create `scripts/render-webflow-<pagename>.tsx`:

```tsx
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ComponentName } from '../devlink/ComponentName';

// 1. Render full component to static HTML
const fullHtml = renderToStaticMarkup(React.createElement(ComponentName));

// 2. Find the content boundaries
//    IMPORTANT: Inspect the rendered HTML to find the correct class names!
//    Save full HTML first, then analyze:
const outputDir = 'public/devlink';
await Bun.write(`${outputDir}/<pagename>-raw.html`, fullHtml);

// Use a script like this to find section boundaries:
// python3 -c "
// import re
// html = open('public/devlink/<pagename>-raw.html').read()
// for m in re.finditer(r'<section[^>]*>', html):
//     cls = re.search(r'class=\"([^\"]+)\"', m.group())
//     sid = re.search(r'id=\"([^\"]+)\"', m.group())
//     print(f'{m.start()}: class={cls.group(1) if cls else \"NONE\"} id={sid.group(1) if sid else \"\"})
// "
```

### Step 4: Identify content boundaries

After running the script once to get the raw HTML, inspect it:

```bash
# Run initial render to get raw HTML
bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-<pagename>.tsx

# Find all section markers
python3 -c "
import re
html = open('public/devlink/<pagename>-raw.html').read()
for m in re.finditer(r'<section[^>]*>', html):
    cls = re.search(r'class=\"([^\"]+)\"', m.group())
    sid = re.search(r'id=\"([^\"]+)\"', m.group())
    end = min(len(html), m.end() + 100)
    print(f'char {m.start()}: class=\"{cls.group(1) if cls else \"NONE\"}\" id=\"{sid.group(1) if sid else \"\"}\"')
    print(f'  preview: {html[m.end():end]}')
    print()
"
```

Look for:
- **Start marker**: The first `<section>` with the page's unique class (e.g., `price-hero__section`)
- **End markers**: Contact form (`id="form-contact"`), prefooter sections, footer elements

### Step 5: Complete the render script

Based on the analysis, finalize the render script. Here's the full pattern:

```tsx
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ComponentName } from '../devlink/ComponentName';

const fullHtml = renderToStaticMarkup(React.createElement(ComponentName));

// ── Strip navbar, footer, and other unwanted sections ──
const contentStart = fullHtml.indexOf('<section class="YOUR-CONTENT-CLASS"');

// Find ALL possible end markers (contact form, prefooter, footer)
const endMarkers = [
  fullHtml.indexOf('<section id="form-contact"'),
  fullHtml.indexOf('<section class="g-prefooter__section"'),
  fullHtml.indexOf('class="prefooter-section_awards"'),
  fullHtml.indexOf('class="footer-section"'),
  fullHtml.indexOf('<footer'),
].filter(idx => idx !== -1);

const endIdx = endMarkers.length > 0 ? Math.min(...endMarkers) : fullHtml.length;

let pageHtml: string;
if (contentStart !== -1) {
  pageHtml = fullHtml.slice(contentStart, endIdx);
  // Balance unclosed tags
  const openDivs = (pageHtml.match(/<div/g) || []).length;
  const closeDivs = (pageHtml.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    pageHtml += '</div>'.repeat(openDivs - closeDivs);
  }
} else {
  console.error('Warning: Could not find content section');
  pageHtml = fullHtml;
}

// Strip stray preload links
pageHtml = pageHtml.replace(/<link rel="preload"[^>]*\/>/g, '');

// ── Activate default tab state (if page has Webflow tabs) ──
// Webflow hides .w-tab-pane by default; add .w--tab-active to the first tab
pageHtml = pageHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-pane[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--tab-active"'
);
pageHtml = pageHtml.replace(
  /data-w-tab="Tab 1"([^>]*?)class="([^"]*w-tab-link[^"]*)"/g,
  'data-w-tab="Tab 1"$1class="$2 w--current"'
);

// ── Wrap in scoping container ──
pageHtml = `<div class="webflow-<pagename>">${pageHtml}</div>`;

// ── Save HTML ──
const outputDir = 'public/devlink';
await Bun.write(`${outputDir}/<pagename>-raw.html`, fullHtml);
await Bun.write(`${outputDir}/<pagename>.html`, pageHtml);
console.log(`Saved HTML: ${pageHtml.length} bytes`);

// ── Build safe CSS ──
const globalCss = await Bun.file('devlink/global.css').text();
const moduleCss = await Bun.file('devlink/ComponentName.module.css').text();

// Use the extractSafeCss function (see below)
const safeCss = extractSafeCss(globalCss);

// Scope component CSS to prevent leaking to header/footer
const scopedCss = `.webflow-<pagename> {\n${moduleCss}\n}`;

const combinedCss = `/* Webflow DevLink CSS for <PageName> page */
/* Auto-generated — do not edit manually */
/* Regenerate with: bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-<pagename>.tsx */

/* === Safe Global Styles (fonts, variables, .w-* framework) === */
${safeCss}

/* === Page Styles (scoped to .webflow-<pagename>) === */
${scopedCss}
`;

await Bun.write(`${outputDir}/<pagename>.css`, combinedCss);
console.log(`Saved CSS: ${combinedCss.length} bytes`);
```

### Step 6: The CSS safety filter (`extractSafeCss`)

The `devlink/global.css` contains **conflicting styles** that break our site's header/footer:

| Section | Content | Action |
|---------|---------|--------|
| `@import`, `@font-face` | Google Fonts, custom fonts | **KEEP** |
| `/*! normalize.css */` | CSS reset (html, body, *, etc.) | **SKIP** |
| `.w-*` classes | Webflow framework (tabs, forms, buttons) | **KEEP** |
| `:root { ... }` | CSS custom properties | **KEEP** |
| `body {}`, `h1 {}`, `a {}`, `img {}` | Bare element selectors | **SKIP** |
| `@media` blocks | Responsive .w-* rules | **KEEP** |

Copy the `extractSafeCss`, `isBareElementSelector`, and `findClosingBrace` functions from the reference implementation at `scripts/render-webflow-component.tsx`.

### Step 7: Run the render script

```bash
bun --tsconfig-override tsconfig.devlink.json scripts/render-webflow-<pagename>.tsx
```

**IMPORTANT**: Must use `--tsconfig-override tsconfig.devlink.json` so JSX compiles with React's runtime instead of our custom `#jsx` runtime.

Verify the output:

```bash
# Check files were created
ls -la public/devlink/<pagename>.*

# Verify no bare element selectors leaked
grep -c '^body ' public/devlink/<pagename>.css   # should be 0
grep -c '^a '    public/devlink/<pagename>.css   # should be 0
grep -c '^h1 '   public/devlink/<pagename>.css   # should be 0

# Verify content is present
grep -c '<section' public/devlink/<pagename>.html

# Verify unwanted sections were stripped
grep -c 'form-contact' public/devlink/<pagename>.html       # should be 0
grep -c 'prefooter'    public/devlink/<pagename>.html       # should be 0
grep -c 'footer-section' public/devlink/<pagename>.html     # should be 0
```

### Step 8: Create the page file

Create `src/pages/<pagename>.tsx`:

```tsx
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Page Title",
  description: "Page description for SEO.",
  stylesheets: ["/devlink/<pagename>.css"],
};

// Cache HTML in production, read fresh in dev
let htmlCache: string | null = null;

async function getPageHtml(): Promise<string> {
  if (!htmlCache || process.env.NODE_ENV !== "production") {
    htmlCache = await Bun.file("public/devlink/<pagename>.html").text();
  }
  return htmlCache;
}

// Tab switching JS (include ONLY if the page has Webflow tabs)
const tabSwitchScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.w-tab-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var tabId = this.getAttribute('data-w-tab');
      var tabsContainer = this.closest('.w-tabs');
      if (!tabsContainer) return;
      tabsContainer.querySelectorAll('.w-tab-link').forEach(function(l) {
        l.classList.remove('w--current');
      });
      this.classList.add('w--current');
      tabsContainer.querySelectorAll('.w-tab-pane').forEach(function(pane) {
        pane.classList.remove('w--tab-active');
      });
      var targetPane = tabsContainer.querySelector('.w-tab-pane[data-w-tab="' + tabId + '"]');
      if (targetPane) {
        targetPane.classList.add('w--tab-active');
      }
    });
  });
});
</script>
`;

export default async function PageName(): Promise<string> {
  const pageHtml = await getPageHtml();
  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: pageHtml + tabSwitchScript }} />
    </Fragment>
  );
}
```

### Step 9: Test

```bash
# Restart server to pick up new files
bun dev:stop && bun dev

# Check page loads
curl -sS -o /dev/null -w "%{http_code}" http://localhost:4444/<pagename>
# Should return 200

# Check CSS loads
curl -sS -o /dev/null -w "%{http_code}" http://localhost:4444/devlink/<pagename>.css
# Should return 200

# Open in browser
open http://localhost:4444/<pagename>
```

**Verify visually:**
1. Content renders pixel-perfect (compare with https://health-samurai.io/<pagename>)
2. Our site header displays correctly (not affected by Webflow CSS)
3. Our site footer displays correctly (not affected by Webflow CSS)
4. Tabs/toggles work if present (Yearly/Monthly, etc.)
5. Page is responsive

## Key Architecture Decisions

### Why pre-render to static HTML?

DevLink components are React components. Our site uses a custom JSX runtime (`#jsx`) that renders to HTML strings — it's NOT React. Rather than integrating React into our SSR pipeline, we pre-render once and serve the static output.

### Why `tsconfig.devlink.json`?

Bun transpiles `.js` files' JSX using the project's `jsxImportSource`. Our project uses `#jsx` (custom runtime), but DevLink needs `react`. The override forces React JSX for the render script only.

### Why scope CSS with `.webflow-<pagename>`?

Webflow's CSS includes generic class names (`.container`, `.gap-*`, etc.) that conflict with Tailwind CSS. CSS nesting (`.webflow-<pagename> { ... }`) ensures these styles only apply inside the wrapper div.

### Why filter `global.css`?

Webflow's `global.css` contains normalize.css reset and bare element selectors (`body {}`, `a {}`, `h1 {}`, etc.) that override our Tailwind base styles. The filter keeps only:
- `@font-face` declarations (fonts)
- `:root` CSS custom properties (colors, sizes)
- `.w-*` framework classes (tabs, forms, layout)

### Why manually activate tabs?

Webflow uses JavaScript to manage tab state (`.w--tab-active` / `.w--current` classes). Since we render static HTML, we add these classes manually for the default tab, and include vanilla JS for switching.

## File Map

```
tsconfig.devlink.json          # JSX override: jsxImportSource → "react"
devlink/
├── global.css                 # Shared: fonts, variables, .w-* framework (SHARED)
├── ComponentName.js           # React component source
├── ComponentName.module.css   # Component-specific styles
└── _Builtin/                  # Webflow built-in components
scripts/
└── render-webflow-<pagename>.tsx  # Render script (per page)
public/devlink/
├── <pagename>.html            # Pre-rendered content (scoped, tabs activated)
├── <pagename>.css             # Combined CSS (filtered + scoped)
└── <pagename>-raw.html        # Full unprocessed render (for debugging)
src/pages/
└── <pagename>.tsx             # Bun page file
src/components/Layout.tsx      # Has stylesheets prop for CSS injection
src/server.ts                  # Serves /devlink/* static files; forwards metadata.stylesheets
```

## Troubleshooting

### Content is empty / hidden

Check for `display: none` from Webflow's CSS. Common causes:
- `.w-tab-pane { display: none }` — tabs not activated. Add `w--tab-active` class.
- Webflow interaction-based visibility — check for `data-w-id` attributes that control show/hide.

### CSS conflicts with header/footer

Check the generated CSS for bare element selectors:
```bash
grep -n '^body\|^a \|^h1\|^html\|^img\|^\*' public/devlink/<pagename>.css
```
If any found, the `extractSafeCss` filter missed them. Add the selector to the `BARE_ELEMENTS` set.

### Page renders but looks wrong

1. Check if `global.css` variables are included (`:root` block)
2. Check if `@font-face` declarations are included
3. Compare with the raw HTML (`<pagename>-raw.html`) to see if content was over-stripped

### Module import errors

Ensure you're using `--tsconfig-override tsconfig.devlink.json` when running the render script. Without it, JSX compiles to the wrong runtime and you'll see `[object Object]` in the output.

### Tab switching doesn't work

1. Verify the tab switch `<script>` is included in the page
2. Check that `.w-tab-link` elements have `data-w-tab` attributes
3. Check that `.w-tab-pane` elements have matching `data-w-tab` attributes
4. Verify `.w-tabs` container wraps both the menu and content

## Reference Implementation

See the pricing page migration for a complete working example:
- Render script: `scripts/render-webflow-component.tsx`
- Page file: `src/pages/price.tsx`
- Output files: `public/devlink/pricing.html`, `public/devlink/pricing.css`
