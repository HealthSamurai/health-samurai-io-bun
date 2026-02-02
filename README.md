# Health Samurai Website

Rebuilding [health-samurai.io](https://health-samurai.io) with Bun, server-side JSX, and Tailwind CSS v4.

## Quick Start

```bash
bun install    # Install dependencies
bun dev        # Start dev server (background, hot reload)
```

Server runs at http://localhost:4444

## Development Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server in background |
| `bun dev:stop` | Stop background dev server |
| `bun dev:logs` | Tail dev server logs |
| `bun dev:fg` | Run dev server in foreground |
| `bun run routes` | List all available routes |
| `bun run typecheck` | Run TypeScript type checking |

## Working with Claude Code

This project is optimized for development with [Claude Code](https://claude.ai/claude-code). The `CLAUDE.md` file contains detailed project instructions that Claude automatically follows.

### Available Skills

Invoke skills with `/skill-name` in Claude Code:

| Skill | Description |
|-------|-------------|
| `/page-builder` | Create and modify pages, sections, and UI components |
| `/cdp` | Control Chrome via DevTools Protocol for scraping and screenshots |

### Common Workflows

**Create a new page:**
```
/page-builder
Create a new page at /my-page with a hero section and contact form
```

**Clone content from original site:**
```
/cdp
Navigate to health-samurai.io/fhir-server and extract the pricing section
```

**Add a section to existing page:**
```
/page-builder
Add a testimonials section to the aidbox page
```

### Project Structure

```
src/
├── pages/           # File-based routing (*.tsx → routes)
├── components/      # Reusable components
│   ├── ui/          # UI component library
│   ├── Hero.tsx     # Hero section
│   ├── Bento.tsx    # Feature grid
│   ├── UseCases.tsx # Tabbed case studies
│   └── ...
├── lib/             # Utilities (JSX runtime, etc.)
└── styles/          # Tailwind CSS
public/
└── assets/          # Static assets (images, icons)
```

### Key Technologies

- **Bun** - Runtime and package manager
- **Server-side JSX** - Components render to HTML strings
- **Tailwind CSS v4** - Styling with custom theme
- **Datastar** - Client-side reactivity (tabs, toggles)
- **htmx** - Server-driven interactivity (forms)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/aidbox` | Aidbox FHIR Server product page |
| `/fhir-server` | Alias for /aidbox |
| `/contacts` | Contact form |
| `/casestudies` | Case studies |
| `/blog` | Blog |
| `/price` | Pricing page |

## Documentation

- `CLAUDE.md` - Full project documentation and conventions
- `skills/page-builder/SKILL.md` - Page builder skill reference
- `/_components/ui/*` - Live UI component demos
