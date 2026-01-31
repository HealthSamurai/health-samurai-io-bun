---
name: pagespeed
description: Run Lighthouse performance analysis on websites. Use for Core Web Vitals, accessibility audits, SEO checks, and performance optimization.
metadata:
  author: niquola
  version: "1.0"
compatibility: Requires Lighthouse CLI (bun add -g lighthouse) and Chrome
---

# PageSpeed - Lighthouse Performance Analysis

Run Google Lighthouse to analyze website performance, accessibility, best practices, and SEO.

## Quick Start

```bash
# Analyze local dev server (fastest)
bun skills/pagespeed/lighthouse.ts http://localhost:4444

# Analyze with desktop preset
bun skills/pagespeed/lighthouse.ts http://localhost:4444 --desktop

# Analyze production site
bun skills/pagespeed/lighthouse.ts https://site-dev.apki.dev
```

## Commands

### Lighthouse Script (Recommended)

```bash
# Mobile (default) - simulates slow 4G + CPU throttling
bun skills/pagespeed/lighthouse.ts <url>

# Desktop - no throttling
bun skills/pagespeed/lighthouse.ts <url> --desktop

# JSON output for parsing
bun skills/pagespeed/lighthouse.ts <url> --json | jq '.scores'
```

### Direct Lighthouse CLI

```bash
# Quick mobile test
lighthouse http://localhost:4444 --output=json --chrome-flags="--headless=new" --quiet | jq '{performance: .categories.performance.score, lcp: .audits["largest-contentful-paint"].displayValue}'

# Desktop test
lighthouse http://localhost:4444 --preset=desktop --output=json --chrome-flags="--headless=new" --quiet | jq '.categories | map_values(.score * 100 | round)'

# Generate HTML report
lighthouse http://localhost:4444 --output=html --output-path=./report.html --chrome-flags="--headless=new"
```

## Interpreting Results

### Score Ranges

| Score | Rating |
|-------|--------|
| 90-100 | Good (green) |
| 50-89 | Needs Improvement (orange) |
| 0-49 | Poor (red) |

### Core Web Vitals Targets

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| FCP (First Contentful Paint) | < 1.8s | 1.8-3s | > 3s |
| LCP (Largest Contentful Paint) | < 2.5s | 2.5-4s | > 4s |
| TBT (Total Blocking Time) | < 200ms | 200-600ms | > 600ms |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |

## Common Issues & Fixes

### Render-Blocking Resources
```html
<!-- Before -->
<script src="/script.js"></script>

<!-- After - defer non-critical scripts -->
<script src="/script.js" defer></script>
```

### Missing Cache Headers
```typescript
// In server.ts
headers: {
  "Cache-Control": "public, max-age=31536000, immutable"  // 1 year for images
}
```

### Images Without Dimensions
```html
<!-- Before -->
<img src="/logo.png" class="h-16">

<!-- After -->
<img src="/logo.png" width="64" height="64" loading="lazy">
```

### Color Contrast
Use contrast ratio >= 4.5:1 for normal text.
Check at: https://webaim.org/resources/contrastchecker/

## Example Output

```
============================================================
Lighthouse Analysis: http://localhost:4444/
Device: DESKTOP
============================================================

Scores:
  Performance        99
  Accessibility      97
  Best Practices     100
  SEO                100

Core Web Vitals:
  First Contentful Paint (FCP)    0.8 s
  Largest Contentful Paint (LCP)  0.9 s
  Total Blocking Time (TBT)       0 ms
  Cumulative Layout Shift (CLS)   0

Issues to Fix:
  • Background and foreground colors do not have a sufficient contrast ratio.
  • Render blocking requests (Est savings of 380 ms)
```

## Instructions

When user asks to analyze website performance:

1. **For local testing** - use `bun skills/pagespeed/lighthouse.ts http://localhost:4444`
2. **For production** - use `bun skills/pagespeed/lighthouse.ts https://site-dev.apki.dev`
3. **For desktop scores** - add `--desktop` flag
4. **For JSON output** - add `--json` flag and pipe to `jq`

After running analysis:
1. Report the scores (Performance, Accessibility, Best Practices, SEO)
2. List the Core Web Vitals metrics
3. Identify top issues to fix with estimated savings
4. Suggest specific code changes based on the issues found

## PageSpeed Insights via CDP

For remote PageSpeed Insights analysis (includes real user data):

```bash
# Requires Chrome headless + CDP server running
bun skills/pagespeed/analyze.ts https://site-dev.apki.dev
```

Prerequisites:
1. Chrome: `google-chrome --headless=new --remote-debugging-port=9222`
2. CDP server: `cd /Users/niquola/chromoi && bun src/index.js`
