# Task: Fix ALL differences from Analyzer report

Fix the "{{PAGE_NAME}}" page to match the ORIGINAL at https://health-samurai.io{{PAGE_PATH}} exactly.

**Goal:** Fix EVERY difference listed. Use Playwright to compare while you work. Be paranoid about matching.

## Step 1: Read the Analyzer Report

The analyzer found differences between:
- **Original:** https://health-samurai.io{{PAGE_PATH}}
- **Clone:** http://localhost:4444{{PAGE_PATH}}

Read the spec file if it exists:
```sh
cat specs/{{PAGE_SLUG}}.md 2>/dev/null || echo "No spec file yet"
```

## Step 2: Restart Server

**ALWAYS restart before testing:**
```sh
./server.sh restart -h
./server.sh status
```

## Step 3: Open BOTH Pages in Playwright

Open both the original and clone side by side for comparison:

1. Navigate to original: https://health-samurai.io{{PAGE_PATH}}
2. Take screenshot for reference
3. Open new tab with clone: http://localhost:4444{{PAGE_PATH}}
4. Compare visually

**Keep both pages open while you work!**

## Step 4: Fix Each Difference

For EVERY difference in the analyzer report:

### Before fixing, VERIFY on original:
1. Use Playwright to inspect the original element
2. Extract computed styles (padding, margin, color, font-size, etc.)
3. Note the EXACT values

### Apply the fix:
1. Edit the source file
2. Restart server: `./server.sh restart -h`
3. Refresh clone in Playwright
4. Compare with original - does it match NOW?

### Double-check these properties (most commonly wrong):

**Spacing:**
- padding-top, padding-bottom, padding-left, padding-right
- margin-top, margin-bottom, margin-left, margin-right
- gap (in flex/grid containers)

**Layout:**
- max-width of containers
- flex-direction, justify-content, align-items
- grid-template-columns, grid-gap

**Typography:**
- font-size (exact px)
- font-weight (exact number: 400, 500, 600, 700, 800, 900)
- line-height (exact value)
- letter-spacing

**Colors:**
- background-color (exact hex)
- color (exact hex)
- border-color

**Visual:**
- border-radius
- box-shadow
- opacity

## Step 5: Verify EVERY Fix with Playwright

After each fix:

1. Restart server: `./server.sh restart -h`
2. Refresh clone page in Playwright
3. Take screenshot of the fixed element
4. Compare with original - MUST BE IDENTICAL

**Use Playwright to extract computed styles:**
```javascript
// In browser_evaluate
const el = document.querySelector('.your-selector');
const styles = window.getComputedStyle(el);
return {
  padding: styles.padding,
  margin: styles.margin,
  fontSize: styles.fontSize,
  fontWeight: styles.fontWeight,
  lineHeight: styles.lineHeight,
  color: styles.color,
  backgroundColor: styles.backgroundColor,
  borderRadius: styles.borderRadius,
  boxShadow: styles.boxShadow
};
```

Compare these values between original and clone - they MUST match!

## Step 6: Use Tailwind with Exact Values

Use arbitrary values for pixel-perfect matching:

```tsx
// Exact padding
<div className="pt-[80px] pb-[60px] px-[32px]">

// Exact font size and weight
<h1 className="text-[64px] font-black leading-[1.2]">

// Exact colors
<div className="bg-[#f5f7fa] text-[#1a1a1a]">

// Exact border radius
<div className="rounded-[12px]">

// Exact shadow
<div className="shadow-[0_4px_20px_rgba(0,0,0,0.1)]">

// Exact max-width
<div className="max-w-[1200px] mx-auto">

// Exact gap
<div className="flex gap-[24px]">
```

## Step 7: Final Comparison

After all fixes:

1. Restart server one more time
2. Open both pages in Playwright side by side
3. Scroll through ENTIRE page
4. Check EVERY section matches
5. Check mobile view (resize to 375px)

Take final screenshots:
- `specs/{{PAGE_SLUG}}/clone/final.png`

## Step 8: Git Commit and Push

After fixing all differences:

```sh
git add -A
git commit -m "Fix {{PAGE_NAME}} ({{PAGE_PATH}}) - match original

- Fixed padding/margins
- Fixed typography
- Fixed colors
- Fixed layout
- Verified with Playwright comparison"
git push
```

## Checklist Before Completing

- [ ] Read all differences from analyzer report
- [ ] Opened BOTH original and clone in Playwright
- [ ] Fixed EVERY difference listed
- [ ] Verified each fix by comparing computed styles
- [ ] Double-checked all padding and margins
- [ ] Double-checked all font sizes and weights
- [ ] Double-checked all colors
- [ ] Double-checked all shadows and borders
- [ ] Final side-by-side comparison looks identical
- [ ] Git committed and pushed

## Response Format

```
DONE

Page: src/pages/{{PAGE_SLUG}}.tsx
Fixes applied: {count}
Verified with Playwright: YES
Git committed: YES
Git pushed: YES

Changes made:
- [list each fix]
```
