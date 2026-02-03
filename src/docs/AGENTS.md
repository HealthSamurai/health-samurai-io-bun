# Documentation Engine

## Source Data

Documentation files are loaded from `tmp/documentation/docs/` directory.

**Default path:** `tmp/documentation/docs`
**Override:** Set `DOCS_ROOT` environment variable

## Structure

```
tmp/documentation/
└── docs/
    ├── SUMMARY.md           # Navigation structure (GitBook format)
    ├── .gitbook/
    │   └── assets/          # Images and other assets
    ├── getting-started/
    ├── api/
    ├── configuration/
    └── ...                  # Other documentation sections
```

## How It Works

1. `src/docs/index.ts` reads `DOCS_ROOT` (defaults to `tmp/documentation/docs`)
2. `src/docs/config.ts` detects legacy structure via `SUMMARY.md` at root
3. Navigation is parsed from `SUMMARY.md`
4. Markdown files are rendered with GitBook syntax support (hints, tabs, embeds)

## Routes

- `/docs` → redirects to `/docs/aidbox`
- `/docs/aidbox/*` → serves documentation pages
- `/docs/aidbox/.gitbook/assets/*` → serves images

## Configuration

Legacy structure (current): Single product detected from `SUMMARY.md` at docs root.

Multi-product structure (future): Add `products.yaml` to docs root:

```yaml
root-redirect: /aidbox
products:
  - id: aidbox
    name: Aidbox Documentation
    path: /aidbox
    og-preview-text: FHIR server for building healthcare applications
```

## TODO

- [ ] Move documentation to permanent location (not `tmp/`)
- [ ] Configure proper git submodule or clone from docs repo
