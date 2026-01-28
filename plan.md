# Health Samurai Website Clone - Plan

## Decisions

- **Images**: Download all, rename to semantic names
- **CSS**: Recreate manually (pixel-perfect from inspection)
- **Fonts**: Google Fonts CDN (Open Sans, Bitter, Merriweather)
- **Scope**: All pages
- **Tech**: Server-side TSX templates with Bun

---

## Tech Stack

```
Bun.serve() + TSX templates + htmx + CSS
```

- **Server**: `Bun.serve()` with routes
- **Templates**: TSX components rendered to HTML strings server-side
- **Interactivity**: htmx for forms, navigation dropdowns, carousels
- **Styling**: Plain CSS (no Tailwind), CSS variables for theming

---

## Pages to Clone

| Page | URL | Priority |
|------|-----|----------|
| Homepage | `/` | 1 |
| Aidbox (FHIR Server) | `/fhir-server` | 1 |
| Fhirbase | `/fhir-database` | 2 |
| Blog listing | `/blog` | 2 |
| Case Studies | `/casestudies` | 2 |
| Case Study detail | `/case-study/:slug` | 3 |
| Contacts | `/contacts` | 2 |
| Company | `/company` | 3 |
| Careers | `/careers` | 3 |
| Pricing | `/price` | 2 |
| Services | `/services` | 3 |

---

## Images to Download

Rename to semantic names and organize:

```
assets/
├── logos/
│   ├── health-samurai.webp
│   ├── health-samurai-footer.svg
│   ├── aidbox.svg
│   ├── aidbox-mini.svg
│   └── clients/
│       ├── innovaccer.svg
│       ├── prenosis.webp
│       ├── narus-health.webp
│       ├── bestnotes.webp
│       ├── healthie.webp
│       ├── patients-know-best.webp
│       ├── firenote.png
│       ├── duodecim.png
│       ├── lucent-health.webp
│       ├── novellia.png
│       ├── 4medica.png
│       ├── deep6-ai.png
│       ├── solutio.webp
│       └── ...
├── icons/
│   ├── arrow-right.svg
│   ├── database.svg
│   ├── api.svg
│   ├── auth.svg
│   ├── terminology.svg
│   ├── sdk.svg
│   ├── ui.svg
│   ├── cloud-lock.svg
│   ├── cloud-platform.svg
│   ├── server-box.svg
│   ├── check.svg
│   └── ...
├── hero/
│   └── aidbox-ui-demo.webp
├── case-studies/
│   ├── prenosis-logo.png
│   ├── narus-logo.png
│   ├── deep6-logo.png
│   ├── 4medica-logo.png
│   └── ...
├── blog/
│   └── (blog post images)
├── certifications/
│   ├── hipaa.png
│   └── iso-27001.svg
└── misc/
    ├── fhirbase-logo.svg
    ├── fhirjs-logo.svg
    ├── fhir-schema-logo.svg
    ├── fhir-camp.svg
    ├── meetup-sf.svg
    ├── meetup-eu.svg
    └── community-users.png
```

---

## File Structure

```
src/
├── server.ts                 # Bun.serve() entry point
├── components/
│   ├── Layout.tsx            # HTML wrapper, head, scripts
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Icon.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── LogoCarousel.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── PricingTable.tsx
│   │   ├── ContactForm.tsx
│   │   └── Newsletter.tsx
│   └── blog/
│       ├── BlogCard.tsx
│       └── BlogPost.tsx
├── pages/
│   ├── home.tsx
│   ├── fhir-server.tsx
│   ├── fhir-database.tsx
│   ├── blog.tsx
│   ├── blog-post.tsx
│   ├── casestudies.tsx
│   ├── case-study.tsx
│   ├── contacts.tsx
│   ├── company.tsx
│   ├── careers.tsx
│   ├── price.tsx
│   └── services.tsx
├── data/
│   ├── navigation.ts         # Menu structure
│   ├── clients.ts            # Client logos
│   ├── testimonials.ts       # Quotes
│   ├── case-studies.ts       # Case study content
│   └── blog-posts.ts         # Blog content (or fetch from CMS)
├── styles/
│   ├── global.css            # Reset, variables, typography
│   ├── header.css
│   ├── footer.css
│   ├── hero.css
│   ├── sections.css
│   ├── forms.css
│   └── utilities.css
└── assets/
    ├── images/               # Downloaded images (semantic names)
    └── fonts/                # If self-hosting later
```

---

## TSX Template Approach

Server-side TSX that returns HTML strings:

```tsx
// components/Layout.tsx
export function Layout({ children, title }: { children: string; title: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Health Samurai</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Bitter:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/global.css">
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body>
  ${Header()}
  <main>${children}</main>
  ${Footer()}
</body>
</html>`;
}
```

```tsx
// components/ui/Button.tsx
type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: string;
};

export function Button({ href, variant = 'primary', children }: ButtonProps) {
  const className = `btn btn-${variant}`;
  if (href) {
    return `<a href="${href}" class="${className}">${children}</a>`;
  }
  return `<button class="${className}">${children}</button>`;
}
```

```tsx
// server.ts
import { Layout } from './components/Layout';
import { HomePage } from './pages/home';

Bun.serve({
  routes: {
    '/': () => new Response(Layout({ title: 'Home', children: HomePage() }), {
      headers: { 'Content-Type': 'text/html' },
    }),
    '/fhir-server': () => new Response(Layout({ title: 'FHIR Server', children: FhirServerPage() }), {
      headers: { 'Content-Type': 'text/html' },
    }),
    '/assets/*': async (req) => {
      const path = new URL(req.url).pathname;
      return new Response(Bun.file(`./src${path}`));
    },
    '/styles/*': async (req) => {
      const path = new URL(req.url).pathname;
      return new Response(Bun.file(`./src${path}`), {
        headers: { 'Content-Type': 'text/css' },
      });
    },
  },
  fetch: () => new Response('Not Found', { status: 404 }),
});
```

---

## Implementation Phases

### Phase 1: Foundation
1. Set up project structure
2. Create `server.ts` with basic routing
3. Build `Layout`, `Header`, `Footer` components
4. Set up `global.css` with variables, typography, reset
5. Download and organize images with semantic names

### Phase 2: Homepage
6. Build Hero section with typewriter effect (CSS animation or htmx)
7. Build Services section
8. Build Case Studies grid
9. Build Client logos carousel
10. Build FHIR Contributions section
11. Build Newsletter + Contact forms (htmx)

### Phase 3: Product Pages
12. Build Aidbox (`/fhir-server`) page
13. Build Fhirbase (`/fhir-database`) page
14. Build Pricing page

### Phase 4: Content Pages
15. Build Blog listing
16. Build Blog post template
17. Build Case Studies listing
18. Build Case Study detail template
19. Build Contacts page

### Phase 5: Company Pages
20. Build Company/About page
21. Build Careers page
22. Build Services page

### Phase 6: Polish
23. Mobile responsive styles
24. Animations and transitions
25. Cookie banner (htmx)
26. SEO meta tags
27. Performance optimization

---

## CSS Design Tokens (from site inspection)

```css
:root {
  /* Colors */
  --color-primary: #2563eb;      /* Blue */
  --color-primary-dark: #1d4ed8;
  --color-secondary: #10b981;    /* Green */
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-bg: #ffffff;
  --color-bg-alt: #f9fafb;
  --color-border: #e5e7eb;

  /* Typography */
  --font-sans: 'Open Sans', sans-serif;
  --font-heading: 'Bitter', serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Container */
  --container-max: 1200px;
  --container-padding: 1.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

---

## Next Steps

1. Create `download-images.ts` script to fetch all images and rename semantically
2. Set up project skeleton (`server.ts`, basic routes)
3. Start with Header + Footer (shared across all pages)
4. Build homepage section by section

Ready to start?
