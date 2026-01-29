# Site Diff Documentation (Original vs. Rebuild)

This document captures the differences between the current **Health Samurai rebuild in this repo** and the **original health-samurai.io** site. It is based on the code and content present in this repository; anything about the original site should be verified against the live site.

## 1) Tech Stack & Rendering
- Rebuild uses Bun server-side rendering with a custom JSX runtime (`src/lib/jsx-runtime.ts`).
- Interactivity is handled via htmx and Datastar attributes (no client-side React runtime).
- File-based routing via `Bun.FileSystemRouter` (`src/server.ts`).

## 2) Implemented Routes in Rebuild
These routes exist as TSX pages in `src/pages/`:
- `/` (home)
- `/fhir-server`
- `/aidbox` (alias)
- `/fhir-database`
- `/medical-form`
- `/price`
- `/contacts`
- `/casestudies`
- `/blog` (placeholder)
- `/services`
- `/company`
- `/careers`
- `/case-study/:slug` (dynamic)

## 3) Links Referenced But Not Implemented (404s)
These are linked in navigation/footer or page content, but do **not** exist as pages in `src/pages/`:
- `/c-cda-to-fhir-converter`
- `/terminology`
- `/e-prescription-module`
- `/startups`
- `/healthcare-data-platform-toolkit-aidbox`
- `/ehr-toolkit`
- `/fhir-api`
- `/payers`
- `/opensource`
- `/news`
- `/fhir-meetups`
- `/legal/privacy-policy`
- `/legal/cookie-policy`
- `/blog/fhir-fuse`
- `/blog/multi-clinic-sync`
- `/blog/paper-form-to-fhir`

## 4) Content Gaps / Placeholders
- `/blog` shows “Blog posts coming soon...” and no post detail pages are implemented.
- `services` page links to blog posts that do not exist (see section 3).
- Some product/solution pages referenced in nav/footer are missing (see section 3).

## 5) Navigation & IA Differences (Repo-Based)
The rebuild currently defines a fixed navigation structure in `src/data/navigation.ts`, including product/solution categories and CTAs. The original site’s IA may be broader; confirm against the live site if exact parity is required.

## 6) Assets & Branding in Rebuild
- Static assets exist for logos, icons, illustrations, and imagery under `public/assets` and `src/assets`.
- Footer includes certification badges (HIPAA, ISO 27001) and a version stamp if `.version.json` exists (not typical for a marketing site).

## 7) Functional Endpoints
Rebuild has basic API endpoints:
- `POST /api/contact`
- `POST /api/subscribe`
- `POST /api/webhook/github`

---
If you want a verified, page-by-page diff vs. the live site, compare this list with the current health-samurai.io structure and content.
