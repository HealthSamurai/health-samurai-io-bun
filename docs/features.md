# Documentation Engine Features

## Done

- Aidbox docs repo (714 markdown files migrated)
- Aidbox landing page (ported from Clojure)
- Auditbox docs repo (with nested test pages)
- Bento grid icons (7 SVG icons)
- Breadcrumb navigation
- Code blocks with copy button
- Content-ref: resolves titles from navigation/markdown
- Dark mode CSS
- Details/summary accordion styling (stacked borders, chevron animation)
- Dev mode with DOCS_REPOS_PATH convention
- DocsLayout (full page: header, nav, content, toc, footer)
- ETag / HTTP caching (If-None-Match, Last-Modified, 304)
- Embed directive: YouTube iframe + generic big-link with favicon
- External links open in new tab with icon
- FHIR structure tables (tree view with icons, ported from Clojure)
- FHIRbase docs repo
- Git operations - clone/fetch/reset (git.ts)
- GitBook directives: hint, tabs, tab, stepper, step, code, content-ref, file, embed
- Heading anchor links (click to copy)
- Heading styles h1-h6
- Image path resolution (relative, assets/, .gitbook/assets/)
- In-memory state management (state.ts)
- Internal link .md stripping
- JSON-LD structured data (article/howto/faq schemas)
- KaTeX math rendering (inline + display, server-side)
- Lastmod display on pages
- Left navigation with collapsible sections
- Markdown parsing pipeline (remark + rehype)
- Mermaid: server-side SVG rendering with light/dark themes (beautiful-mermaid)
- Page actions (Open in ChatGPT, Open in Claude, Copy as Markdown)
- Previous/Next page navigation
- Products configuration (products.yaml, config.ts)
- Raw .md endpoint (per page)
- Redirects (redirects.yaml)
- Right table of contents
- SDK icons (docker, cloud, typescript, java, python, csharp, mcp, zulip)
- SUMMARY.md parser (proper markdown AST parsing)
- Server integration (handler.ts)
- Shiki syntax highlighting (light + dark themes)
- Sitemap XML generation
- TOC scroll spy (scroll position tracking + requestAnimationFrame)
- Tests: 223 tests (gitbook AST/tokenizer/renderer, KaTeX, summary parser, full pipeline)
- Theme toggle (light/dark/system)
- URI-to-file and file-to-URI mapping
- llms.txt (root index, per-product, nested nav, .md URLs, repo llms.txt support)

## To Do

- Verify repos can be pushed to GitHub and cloned in production mode

## Skip

- Search / Meilisearch (skip for now)
- Link previews / hover tooltips
- Webhook handler (GitHub push reload)
- OG image generation (will do in GitHub repo)
- Docker/deployment updates
- Examples system (GitHub artifact fetcher)
- Mobile navigation (hamburger + overlay)
