# Task: Analyze differences between original and clone

Compare the ORIGINAL page at https://health-samurai.io{{PAGE_PATH}} against the CLONE at http://localhost:4444{{PAGE_PATH}}.

**Goal:** Create an EXHAUSTIVE list of every difference. Be paranoid - if something looks even slightly different, document it.

## Server Setup

First, ensure the local server is running:

```sh
./server.sh restart -h
./server.sh status
```

Check if clone page exists:
```sh
curl -s -o /dev/null -w "%{http_code}" http://localhost:4444{{PAGE_PATH}}
```

- If 200: Page exists, do comparison
- If 404: Page missing entirely, document full spec needed

## Output Files

```sh
mkdir -p specs/{{PAGE_SLUG}}/original
mkdir -p specs/{{PAGE_SLUG}}/clone
mkdir -p src/assets/images/{{PAGE_SLUG}}
```

- `specs/{{PAGE_SLUG}}.md` - Difference report + full spec
- `specs/{{PAGE_SLUG}}/original/full.png` - Original screenshot
- `specs/{{PAGE_SLUG}}/clone/full.png` - Clone screenshot
- `specs/{{PAGE_SLUG}}/original/sections/*.png` - Original sections
- `specs/{{PAGE_SLUG}}/clone/sections/*.png` - Clone sections

## Step 1: Screenshot Both Pages

Using Playwright, capture BOTH pages side by side:

### Original (https://health-samurai.io{{PAGE_PATH}})
- Full page → `specs/{{PAGE_SLUG}}/original/full.png`
- Mobile (375px) → `specs/{{PAGE_SLUG}}/original/mobile.png`
- Each section → `specs/{{PAGE_SLUG}}/original/sections/{name}.png`

### Clone (http://localhost:4444{{PAGE_PATH}})
- Full page → `specs/{{PAGE_SLUG}}/clone/full.png`
- Mobile (375px) → `specs/{{PAGE_SLUG}}/clone/mobile.png`
- Each section → `specs/{{PAGE_SLUG}}/clone/sections/{name}.png`

## Step 2: Extract Original Design Values

From the ORIGINAL page, extract EXACT values:

### Colors (use browser computed styles)
- Every background color (sections, cards, buttons)
- Every text color (h1, h2, h3, p, links, muted)
- Button colors (normal, hover)
- Border colors

### Typography
- Font family
- Every heading size (h1, h2, h3, h4)
- Body text size
- Font weights
- Line heights

### Spacing (measure in pixels)
- Section padding (top/bottom)
- Container max-width and padding
- Card padding
- Grid gaps
- Margins between elements

### Layout
- Number of columns
- Flex directions
- Alignments

## Step 3: Compare Element by Element

Go through EVERY element and compare:

### For each section:
1. Does it exist in clone? (Y/N)
2. Background color match? (exact hex)
3. Padding match? (exact px)
4. Content complete?
5. Layout correct?

### For each text element:
1. Text content matches exactly?
2. Font size matches?
3. Font weight matches?
4. Color matches?
5. Alignment matches?

### For each image:
1. Image exists in clone?
2. Loaded from LOCAL path (not external URL)?
3. Same dimensions?
4. Same position?

### For each interactive element:
1. Element exists?
2. Behavior works?
3. States styled correctly?

## Step 4: Download Missing Images

For ANY image on original not in clone:

```sh
curl -o src/assets/images/{{PAGE_SLUG}}/descriptive-name.webp "https://original-url"
```

Use descriptive names:
- `hero-background.webp`
- `feature-icon-api.svg`
- `team-photo-john.jpg`

## Step 5: Write specs/{{PAGE_SLUG}}.md

Create comprehensive spec with ALL differences:

```markdown
# {{PAGE_NAME}} - Difference Report

**Original:** https://health-samurai.io{{PAGE_PATH}}
**Clone:** http://localhost:4444{{PAGE_PATH}}
**Status:** [EXISTS/MISSING]

## Screenshots

| View | Original | Clone |
|------|----------|-------|
| Full | specs/{{PAGE_SLUG}}/original/full.png | specs/{{PAGE_SLUG}}/clone/full.png |
| Mobile | specs/{{PAGE_SLUG}}/original/mobile.png | specs/{{PAGE_SLUG}}/clone/mobile.png |

## Summary

- ❌ Critical issues: {count}
- ⚠️ Visual differences: {count}
- ✅ Matching: {count}

## Colors (from original)

| Element | Original | Clone | Status |
|---------|----------|-------|--------|
| Body background | #ffffff | #ffffff | ✅ |
| Hero background | #f5f7fa | #ffffff | ❌ DIFFERENT |
| Primary button | #c9362b | #c9362b | ✅ |
| H1 text | #1a1a1a | #1a1a1a | ✅ |
| Body text | #666666 | #333333 | ⚠️ DIFFERENT |

## Typography (from original)

| Element | Original | Clone | Status |
|---------|----------|-------|--------|
| H1 size | 64px | 48px | ❌ DIFFERENT |
| H1 weight | 900 | 700 | ❌ DIFFERENT |
| Body size | 16px | 16px | ✅ |

## Spacing (from original)

| Element | Original | Clone | Status |
|---------|----------|-------|--------|
| Hero padding | 80px 0 | 60px 0 | ⚠️ DIFFERENT |
| Container max | 1200px | 1200px | ✅ |
| Card padding | 40px | 32px | ⚠️ DIFFERENT |

## Sections

### 1. Hero

**Status:** ⚠️ NEEDS FIXES

| Element | Original | Clone | Fix Needed |
|---------|----------|-------|------------|
| Background | #f5f7fa | #ffffff | Change to bg-[#f5f7fa] |
| H1 text | "Let's implement..." | "Let's implement..." | ✅ |
| H1 size | 64px | 48px | Change to text-[64px] |
| CTA button | Present | Present | ✅ |
| Hero image | hero-dashboard.webp | MISSING | Add image |

### 2. Features

**Status:** ❌ MISSING

This entire section is missing from clone. Create with:
- Background: #ffffff
- 3-column grid
- (full details...)

### 3. Testimonials

**Status:** ✅ MATCHES

(Continue for ALL sections...)

## Images

| Image | Original URL | Local Path | Status |
|-------|--------------|------------|--------|
| Hero dashboard | https://...webp | src/assets/images/{{PAGE_SLUG}}/hero-dashboard.webp | ✅ Downloaded |
| Feature icon 1 | https://...svg | src/assets/images/{{PAGE_SLUG}}/feature-api.svg | ❌ MISSING |
| Logo | https://...png | EXTERNAL URL IN CLONE | ❌ FIX |

## Interactive Elements

### Tabs (Features section)

**Original behavior:**
- 4 tabs: API, Database, Security, SDK
- Click switches content without reload
- Active tab has border-bottom

**Clone status:** ❌ NOT WORKING
- Tabs exist but clicking does nothing
- Missing data-signals attribute

**Fix:** Add Datastar attributes...

### Accordion (FAQ)

**Original behavior:**
- 6 questions
- Click expands/collapses
- +/- icon toggles

**Clone status:** ❌ MISSING
- FAQ section doesn't exist

## Exact Fixes Required

### Critical (must fix):
1. Hero background: add `bg-[#f5f7fa]`
2. H1 size: change to `text-[64px] font-black`
3. Add missing Features section
4. Fix tabs: add `data-signals="{activeTab: 'tab1'}"`
5. Download and add missing images

### Visual (should fix):
1. Hero padding: change to `py-[80px]`
2. Card padding: change to `p-[40px]`
3. Body text color: change to `text-[#666666]`

## Full Original Spec

(Include complete spec for Creator to implement/fix)

### Colors
- Primary: #c9362b
- Text: #1a1a1a
- Text Light: #666666
...

### Typography
- H1: 64px, weight 900, line-height 1.2
...

### All Sections with Content
(Complete content for each section)
```

## Quality Checklist

- [ ] Screenshots taken of BOTH original and clone
- [ ] Every color extracted and compared
- [ ] Every spacing measured and compared
- [ ] Every section documented with status
- [ ] All missing images downloaded
- [ ] Interactive elements tested on both
- [ ] Exact fixes listed with code snippets

## Response Format

```
DONE

Spec: specs/{{PAGE_SLUG}}.md
Page status: [EXISTS/MISSING]
Critical issues: {count}
Visual differences: {count}
Images downloaded: {count}
Interactive elements: {count} found, {count} working
```
