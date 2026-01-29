# Task: Analyze EVERY difference between original and clone

Compare the ORIGINAL page at https://health-samurai.io{{PAGE_PATH}} against the CLONE at http://localhost:4444{{PAGE_PATH}}.

**Goal:** Find EVERY SINGLE DIFFERENCE. No classification. Every pixel matters. Report ALL differences found.

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

## Step 1: Screenshot Both Pages

Using Playwright, capture BOTH pages:

### Original (https://health-samurai.io{{PAGE_PATH}})
- Full page screenshot → `specs/{{PAGE_SLUG}}/original/full.png`
- Mobile (375px) → `specs/{{PAGE_SLUG}}/original/mobile.png`

### Clone (http://localhost:4444{{PAGE_PATH}})
- Full page screenshot → `specs/{{PAGE_SLUG}}/clone/full.png`
- Mobile (375px) → `specs/{{PAGE_SLUG}}/clone/mobile.png`

## Step 2: Extract and Compare EVERYTHING

Go through the page section by section, element by element. For EACH element, extract computed styles from BOTH pages and compare.

**Use Playwright browser_evaluate to extract styles:**
```javascript
// Extract all typography and spacing for an element
const el = document.querySelector('h1'); // or any selector
const styles = window.getComputedStyle(el);
return {
  // Typography
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  fontWeight: styles.fontWeight,
  fontStyle: styles.fontStyle,
  lineHeight: styles.lineHeight,
  letterSpacing: styles.letterSpacing,
  textTransform: styles.textTransform,
  color: styles.color,
  // Spacing
  marginTop: styles.marginTop,
  marginBottom: styles.marginBottom,
  marginLeft: styles.marginLeft,
  marginRight: styles.marginRight,
  paddingTop: styles.paddingTop,
  paddingBottom: styles.paddingBottom,
  paddingLeft: styles.paddingLeft,
  paddingRight: styles.paddingRight,
  // Layout
  maxWidth: styles.maxWidth,
  width: styles.width,
  // Visual
  backgroundColor: styles.backgroundColor,
  borderRadius: styles.borderRadius,
  boxShadow: styles.boxShadow,
};
```

Run this on BOTH original and clone, then compare the values!

### For EVERY Section:
1. Does it exist in clone?
2. Background color - extract exact hex from both, compare
3. Padding-top - exact px (vertical spacing inside section)
4. Padding-bottom - exact px
5. Padding-left - exact px
6. Padding-right - exact px
7. Margin-top - exact px (spacing BETWEEN sections)
8. Margin-bottom - exact px (spacing BETWEEN sections)
9. Border-top/border-bottom - if any dividers

### For EVERY Container/Wrapper inside sections:
1. Max-width - exact px (e.g., 1200px, 1140px, 960px)
2. Margin-left - should be "auto" for centering
3. Margin-right - should be "auto" for centering
4. Padding-left - exact px (content inset from edge)
5. Padding-right - exact px

### For EVERY Heading (h1, h2, h3, h4, h5, h6):
1. Font-family - exact font name (e.g., "Inter", "Roboto", system-ui)
2. Font-size - exact px
3. Font-weight - exact number (100-900)
4. Font-style - normal/italic
5. Line-height - exact value (px or unitless)
6. Letter-spacing - exact value (px or em)
7. Text-transform - none/uppercase/lowercase/capitalize
8. Color - exact hex
9. Margin-top - exact px
10. Margin-bottom - exact px
11. Padding - if any
12. Text content matches exactly?

### For EVERY Paragraph and Text:
1. Font-family - exact font name
2. Font-size - exact px
3. Font-weight - exact number
4. Font-style - normal/italic
5. Line-height - exact value
6. Letter-spacing - exact value
7. Color - exact hex
8. Margin-top and margin-bottom
9. Text-align - left/center/right/justify

### For Body/Root Element:
1. Font-family - the default font stack
2. Font-size - base font size
3. Line-height - base line height
4. Color - default text color

### For EVERY Button/Link:
1. Font-family
2. Font-size - exact px
3. Font-weight - exact number
4. Letter-spacing
5. Text-transform - none/uppercase
6. Background color - exact hex
7. Text color - exact hex
8. Padding (all 4 sides separately)
9. Border - color, width, style
10. Border-radius - exact px
11. Hover states (background, color, border)

### For EVERY Card/Box:
1. Background color
2. Border (color, width, style)
3. Border-radius
4. Padding (all 4 sides separately)
5. Box-shadow
6. Gap between cards

### For EVERY Grid/Flex Container:
1. Display type
2. Flex-direction
3. Justify-content
4. Align-items
5. Gap
6. Number of columns

### For EVERY Image:
1. Image exists in clone?
2. Loaded from LOCAL path (not external URL)?
3. Width and height
4. Object-fit
5. Border-radius

### For EVERY Interactive Element:
1. Element exists?
2. Behavior works identically?
3. States styled correctly?

## Step 3: Download Missing Images

For ANY image on original not in clone:

```sh
curl -o src/assets/images/{{PAGE_SLUG}}/descriptive-name.webp "https://original-url"
```

Use descriptive names like `hero-background.webp`, `feature-icon-api.svg`, etc.

## Step 4: Write specs/{{PAGE_SLUG}}.md

Create the spec with ALL differences listed. NO CLASSIFICATION - just list every difference found.

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

Total differences found: {count}

## All Differences

List EVERY difference found, one by one:

### Section 1: [Name]

| Property | Original | Clone | Difference |
|----------|----------|-------|------------|
| background | #f5f7fa | #ffffff | YES |
| padding-top | 80px | 60px | YES (20px) |
| padding-bottom | 80px | 60px | YES (20px) |
| padding-left | 0px | 0px | NO |
| padding-right | 0px | 0px | NO |

#### Container in Section 1

| Property | Original | Clone | Difference |
|----------|----------|-------|------------|
| max-width | 1200px | 1140px | YES |
| margin-left | auto | auto | NO |
| margin-right | auto | auto | NO |
| padding-left | 32px | 16px | YES |
| padding-right | 32px | 16px | YES |

#### H1 in Section 1

| Property | Original | Clone | Difference |
|----------|----------|-------|------------|
| font-family | Inter | system-ui | YES |
| font-size | 64px | 48px | YES (16px) |
| font-weight | 900 | 700 | YES |
| line-height | 1.2 | 1.5 | YES |
| letter-spacing | -0.02em | normal | YES |
| color | #1a1a1a | #333333 | YES |
| margin-bottom | 24px | 16px | YES (8px) |

#### Paragraph in Section 1

| Property | Original | Clone | Difference |
|----------|----------|-------|------------|
| font-family | Inter | system-ui | YES |
| font-size | 18px | 16px | YES (2px) |
| font-weight | 400 | 400 | NO |
| line-height | 1.6 | 1.5 | YES |
| color | #666666 | #333333 | YES |
| margin-bottom | 32px | 24px | YES (8px) |

#### Button in Section 1

| Property | Original | Clone | Difference |
|----------|----------|-------|------------|
| background | #c9362b | #c9362b | NO |
| padding | 16px 32px | 12px 24px | YES |
| border-radius | 8px | 4px | YES |

(Continue for EVERY element in EVERY section...)

### Section 2: [Name]
(Same detailed comparison...)

### Section 3: [Name]
(Same detailed comparison...)

## Images

| Image | Original URL | Local Path | Status |
|-------|--------------|------------|--------|
| Hero image | https://... | src/assets/images/{{PAGE_SLUG}}/hero.webp | Downloaded |
| Logo 1 | https://... | MISSING | Need to download |

## Interactive Elements

### [Element Name]
- Original behavior: [describe]
- Clone behavior: [describe]
- Difference: [YES/NO and what]

## Exact Fixes Required

For EACH difference found, provide the exact fix:

1. Section 1 background:
   - Current: `className="..."`
   - Fix: Add `bg-[#f5f7fa]`

2. Section 1 padding-top:
   - Current: `py-16` (64px)
   - Fix: Change to `pt-[80px]`

3. H1 font-size:
   - Current: `text-4xl` (36px)
   - Fix: Change to `text-[64px]`

4. H1 font-weight:
   - Current: `font-bold` (700)
   - Fix: Change to `font-black` (900)

(List fix for EVERY difference...)
```

## Response Format

```
DONE

Spec: specs/{{PAGE_SLUG}}.md
Page status: [EXISTS/MISSING]
Total differences found: {count}
Images downloaded: {count}
Interactive elements checked: {count}
```

If differences found, the number must be > 0. The Creator will fix them and we'll run again.
