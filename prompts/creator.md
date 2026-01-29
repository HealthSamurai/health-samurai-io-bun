# Task: Implement page from design spec

Implement the "{{PAGE_NAME}}" page using the design specification at `specs/{{PAGE_SLUG}}.md`.

**Goal:** Create a pixel-perfect implementation. All research is done - just code!

## Step 1: Read the Design Spec

```sh
cat specs/{{PAGE_SLUG}}.md
```

The spec contains:
- **Colors** - Exact hex values for all elements
- **Typography** - Font sizes, weights, line heights
- **Spacing** - Padding, margins, gaps
- **Sections** - Each section with content and layout
- **Images** - Local paths (already downloaded to src/assets/images/)
- **Interactive** - Tabs, accordions, etc. with their structure

Also review the screenshots:
- `specs/{{PAGE_SLUG}}/full.png` - Full page reference
- `specs/{{PAGE_SLUG}}/mobile.png` - Mobile reference
- `specs/{{PAGE_SLUG}}/sections/*.png` - Section details

## Step 2: Create the Page File

Create `src/pages/{{PAGE_SLUG}}.tsx`:

```tsx
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "{{PAGE_NAME}}", // from spec.page.title
  description: "...",      // from spec.page.description
};

export default function PageName(): string {
  return (
    <Fragment>
      {/* Implement each section from spec.sections */}
    </Fragment>
  );
}
```

## Step 3: Implement Each Section

For each section in `spec.sections`:

1. Read the section's `description` and `elements`
2. Look at the section screenshot for reference
3. Use the exact colors from `spec.colors`
4. Use the exact spacing from `spec.spacing`
5. Reference images from their `local` paths in `spec.images`

### Use Tailwind CSS

```tsx
// Use theme colors
<div className="bg-bg-alt text-text">

// Use arbitrary values for exact pixels from spec
<section className="py-[80px]">
<div className="max-w-[1200px] mx-auto px-[32px]">
<h1 className="text-[64px] font-black leading-[1.2]">

// Or inline styles for complex values
<div style={{ background: 'linear-gradient(...)' }}>
```

### Component Classes Available

```tsx
// Buttons
<a className="btn btn-primary btn-lg">Primary Button</a>
<a className="btn btn-secondary">Secondary Button</a>
<a className="btn btn-outline">Outline Button</a>

// Cards
<div className="card">Card content</div>

// Sections
<section className="section">          {/* py-20 */}
<section className="section section-alt">  {/* with bg-alt */}

// Container
<div className="container">Centered content</div>
```

## Step 4: Implement Interactive Elements

Check `spec.interactive` for each interactive element:

### Tabs
```tsx
<div data-signals="{activeTab: 'tab0'}">
  {/* Tab buttons */}
  <div className="flex gap-4">
    <button
      data-class="{'tab-active': $activeTab == 'tab0'}"
      data-on-click="$activeTab = 'tab0'"
    >
      {spec.interactive[0].items[0].label}
    </button>
    {/* More tabs... */}
  </div>

  {/* Tab panels */}
  <div data-show="$activeTab == 'tab0'">
    {/* Content for tab 0 */}
  </div>
  <div data-show="$activeTab == 'tab1'" style="display: none">
    {/* Content for tab 1 */}
  </div>
</div>
```

### Accordion
```tsx
<div data-signals="{accordion0: false, accordion1: false}">
  <div>
    <button data-on-click="$accordion0 = !$accordion0">
      {spec.interactive[0].items[0].title}
      <span data-show="!$accordion0">+</span>
      <span data-show="$accordion0" style="display: none">-</span>
    </button>
    <div data-show="$accordion0" style="display: none">
      {spec.interactive[0].items[0].content}
    </div>
  </div>
</div>
```

### Dropdown
```tsx
<div data-signals="{dropdownOpen: false}">
  <button data-on-click="$dropdownOpen = !$dropdownOpen">
    Toggle
  </button>
  <div data-show="$dropdownOpen" style="display: none">
    Dropdown content
  </div>
</div>
```

**Remember:** Hidden elements need `style="display: none"` initially!

## Step 5: Add Page-Specific CSS (if needed)

If Tailwind can't achieve something, create `src/styles/{{PAGE_SLUG}}.css`:

```css
.{{PAGE_SLUG}}-special-element {
  /* Custom styles */
}
```

Then add to `src/styles/tailwind.css`:
```css
@import "./{{PAGE_SLUG}}.css";
```

## Step 6: Test the Page

**IMPORTANT:** Always restart the server after changes!

```sh
./server.sh restart -h
./server.sh status
curl -I http://localhost:4444{{PAGE_PATH}}
```

Open http://localhost:4444{{PAGE_PATH}} and verify:
- All sections render
- Images display
- Interactive elements work
- Compare against `specs/{{PAGE_SLUG}}/full.png`

## JSX Reference

```tsx
// className (not class)
<div className="flex items-center">

// htmlFor (not for)
<label htmlFor="email">

// Style objects
<div style={{ marginTop: '20px', backgroundColor: '#fff' }}>

// Boolean attributes
<input disabled />
<input required />

// Raw HTML
<div dangerouslySetInnerHTML={{ __html: svgCode }} />

// Fragments
import { Fragment } from "../lib/jsx-runtime";
<Fragment>
  <section>...</section>
  <section>...</section>
</Fragment>
```

## Quality Checklist

- [ ] Page loads at http://localhost:4444{{PAGE_PATH}}
- [ ] All sections from spec implemented
- [ ] Colors match spec exactly
- [ ] Spacing matches spec
- [ ] All images display (from local paths)
- [ ] All interactive elements work
- [ ] Mobile layout works (check spec mobile screenshot)
- [ ] No TypeScript errors
- [ ] Clean, readable code

## Response Format

After implementation, respond with:

```
DONE

Page: src/pages/{{PAGE_SLUG}}.tsx
Styles: src/styles/{{PAGE_SLUG}}.css (if created)
Sections: {count} implemented
Interactive: {list of what was implemented}
```
