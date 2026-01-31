# SEO Improvements for Health Samurai

## Critical Issues

### 1. Dynamic Sitemap Generation
**Current:** Static `sitemap.xml` with only 6 URLs
**Problem:** 19 pages + 100 blog posts are not indexed
**Fix:** Generate sitemap dynamically to include all pages and blog posts with `lastmod` dates

### 2. Missing Open Graph & Twitter Cards
**Current:** No social meta tags
**Fix:** Add to Layout.tsx:
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

### 3. Missing Canonical URLs
**Current:** No canonical tags
**Fix:** Add `<link rel="canonical" href="https://health-samurai.io/..." />` to prevent duplicate content issues

### 4. No Structured Data (JSON-LD)
**Current:** No schema.org markup
**Fix:** Add structured data for:
- **Organization** schema on homepage
- **Article** schema on blog posts
- **Product** schema on product pages (Aidbox, etc.)
- **BreadcrumbList** for navigation
- **FAQPage** for FAQ sections

---

## Important Improvements

### 5. Image Optimization
- Add `loading="lazy"` to images below the fold
- Add `width` and `height` attributes to prevent CLS
- Ensure all images have descriptive `alt` text
- Consider WebP format with fallbacks
- Add `fetchpriority="high"` to hero images

### 6. Core Web Vitals
- **LCP:** Preload hero images and critical fonts
- **CLS:** Set explicit dimensions on images/embeds
- **INP:** Defer non-critical JavaScript
```html
<link rel="preload" as="image" href="/hero-image.webp" />
```

### 7. Enhanced robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /login

Sitemap: https://health-samurai.io/sitemap.xml
```

### 8. Add Breadcrumb Navigation
Display path like: Home > Blog > Article Title
Improves UX and enables rich snippets in search results

### 9. Internal Linking Strategy
- Link between related blog posts
- Cross-link product pages to relevant case studies
- Add "Related Articles" section to blog posts

---

## Nice-to-Have Enhancements

### 10. Blog Post SEO Enhancements
- Add reading time estimate
- Add article publish/modified dates in structured data
- Add author schema with links to author pages
- Enable comments (already done!)

### 11. Page-Specific Meta Descriptions
**Current:** Generic fallback description
**Fix:** Ensure each page has unique, keyword-rich description (150-160 chars)

### 12. URL Structure
- Current URLs are clean
- Consider adding category prefixes for products: `/products/aidbox`

### 13. hreflang Tags (if multilingual)
If planning international expansion:
```html
<link rel="alternate" hreflang="en" href="..." />
```

### 14. XML Sitemap Index
Split into multiple sitemaps if >50k URLs:
- `sitemap-pages.xml`
- `sitemap-blog.xml`
- `sitemap-products.xml`

### 15. Performance Headers
Add to server responses:
```
Cache-Control: public, max-age=31536000, immutable (for static assets)
X-Content-Type-Options: nosniff
```

### 16. Search Console & Analytics Integration
- Verify site in Google Search Console
- Verify in Bing Webmaster Tools
- Monitor Core Web Vitals reports

### 17. FAQ Schema for Product Pages
Add FAQ sections with structured data to capture featured snippets

### 18. 404 Page Optimization
- Custom 404 with search functionality
- Links to popular pages
- Track 404 hits in analytics

---

## Implementation Priority

| Priority | Item | Effort |
|----------|------|--------|
| 1 | Dynamic sitemap | Medium |
| 2 | Open Graph tags | Low |
| 3 | Canonical URLs | Low |
| 4 | JSON-LD structured data | Medium |
| 5 | Image optimization | Medium |
| 6 | Breadcrumbs | Low |
| 7 | Enhanced robots.txt | Low |
| 8 | Internal linking | Ongoing |

---

## Sources
- [Backlinko SEO Checklist](https://backlinko.com/seo-checklist)
- [DashThis Technical SEO Checklist 2026](https://dashthis.com/blog/technical-seo-checklist/)
- [First Page Sage SEO Best Practices](https://firstpagesage.com/seo-blog/seo-best-practices/)
- [SEO Hacker 2026 Checklist](https://seo-hacker.com/seo-checklist-2026/)
