# Events

Documentation for the Health Samurai events system.

## Structure

```
events/
├── AGENTS.md                    # This file
├── [event-slug]/                # Event series folder
│   ├── index.json               # Event metadata (required)
│   └── [talk-slug].md           # Individual talks (optional)
```

## Routes

| Route | Description |
|-------|-------------|
| `/events` | All events listing with 3 featured talks each |
| `/events/[slug]` | Event page with all talks |
| `/events/[slug]/[talk]` | Individual talk detail page |

## Event Series (index.json)

Each event folder must have an `index.json` with metadata:

```json
{
  "name": "Event Name",
  "description": "Brief description of the event series.",
  "date": "2025-07-03"
}
```

**Fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Event series name |
| `description` | No | Brief description |
| `date` | Yes | Event date (YYYY-MM-DD) for sorting |
| `start_date` | No | Alternative to `date` for multi-day events |
| `end_date` | No | End date for multi-day events |
| `location` | No | Physical location (for in-person events) |

**Sorting:** Events are sorted by date, newest first.

## Talks (*.md files)

Individual talks within an event series are stored as markdown files with JSON frontmatter:

```markdown
---
{
  "name": "Talk Title",
  "speaker": "Speaker Name",
  "role": "Speaker Role, Company",
  "youtube": "https://www.youtube.com/watch?v=VIDEO_ID"
}
---

# Talk Title

Description and content of the talk in markdown format.
```

**Frontmatter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Talk title |
| `speaker` | No | Speaker's full name |
| `role` | No | Speaker's role and company |
| `youtube` | No | YouTube video URL |
| `date` | No | Talk date (if different from event) |
| `time` | No | Talk time |

**File naming:** Use numbered prefixes for ordering: `01-first-talk.md`, `02-second-talk.md`

## Examples

### Conference with talks

```
events/
└── sdc-conference-2025/
    ├── index.json
    ├── 01-introduction-to-fhir-sdc.md
    ├── 02-managing-resource-lifecycle.md
    └── 03-template-based-extraction.md
```

**index.json:**
```json
{
  "name": "SDC Conference 2025",
  "description": "Virtual conference about FHIR Structured Data Capture.",
  "date": "2025-07-03"
}
```

**01-introduction-to-fhir-sdc.md:**
```markdown
---
{
  "name": "Introduction to FHIR SDC",
  "speaker": "Lloyd McKenzie",
  "role": "Principal Consultant, LM&A Consulting",
  "youtube": "https://www.youtube.com/watch?v=z5HKrtWEmSQ"
}
---

# Introduction to FHIR SDC

The presentation introduces FHIR Structured Data Capture (SDC)...
```

### Single event (no talks)

For events without individual talk pages (like conferences with external content):

```
events/
└── fhir-camp-2025/
    └── index.json
```

```json
{
  "name": "FHIR Camp 2025",
  "description": "FHIR Camp 2025 is a conference about FHIR.",
  "start_date": "2025-01-01",
  "end_date": "2025-01-02",
  "location": "Porto, Portugal"
}
```

### Recurring calls/webinars

```
events/
└── sql-on-fhir/
    ├── index.json
    ├── 2026-01-31-call.md
    └── 2026-02-28-call.md
```

## Data Layer

**Source:** `src/data/events.ts`

**Functions:**

| Function | Description |
|----------|-------------|
| `getAllEvents()` | Get all event series with talks |
| `getSeriesById(id)` | Get single event series by slug |
| `getEventBySlug(slug)` | Get single talk by slug |
| `formatEventDate(event)` | Format event date for display |

**Types:**

```typescript
type Event = {
  id: string;
  name: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  location?: string;
  description?: string;
  youtube?: string;
  content?: string;
  series?: string;
  speaker?: string;
  role?: string;
};

type EventSeries = {
  id: string;
  name: string;
  description?: string;
  date?: string;
  events: Event[];
};
```

## Pages

| File | Route | Description |
|------|-------|-------------|
| `src/pages/events.tsx` | `/events` | Events listing |
| `src/pages/events/[slug].tsx` | `/events/:slug` | Event series page |
| `src/pages/events/[slug]/[talk].tsx` | `/events/:slug/:talk` | Talk detail page |

## Features

- **Sorting:** Events sorted by date (newest first)
- **Featured talks:** Only 3 talks shown initially, "Show all" expands
- **YouTube embed:** Talks with `youtube` field show embedded video
- **Prev/Next nav:** Talk pages have navigation to adjacent talks
- **Markdown content:** Talk descriptions rendered as HTML
