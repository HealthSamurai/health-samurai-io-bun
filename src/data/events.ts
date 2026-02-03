import { join } from "path";

export type Speaker = {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
};

export type Venue = {
  name: string;
  address?: string;
  description?: string;
  mapUrl?: string;
  imageUrl?: string;
};

export type PricingTier = {
  name: string;
  price: number;
  currency?: string;
  deadline?: string;
  features?: string[];
  highlighted?: boolean;
  soldOut?: boolean;
};

export type Benefit = {
  icon: "grow" | "connect" | "inspire" | "enjoy";
  title: string;
  description: string;
};

export type AboutContent = {
  title: string;
  content: string;
  image?: string;
  linkText?: string;
  linkUrl?: string;
};

export type RecapContent = {
  title: string;
  description?: string;
  images: string[];
  link?: string;
  linkText?: string;
};

export type InfoContent = {
  title: string;
  items: string[];
  note?: string;
};

export type Event = {
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
  speaker?: string; // Legacy: speaker name (used if speakerSlug not set)
  speakerSlug?: string; // Link to speaker entity by slug
  speakerSlugs?: string[]; // Multiple speakers by slug
  role?: string; // Legacy: speaker role (used if speakerSlug not set)
  featured?: boolean; // Show on main events page
  mtime?: number; // File modification time (ms since epoch) for sorting
  // Rich event fields
  type?: "talk" | "conference";
  about?: AboutContent;
  agenda?: string[];
  agendaDescription?: string;
  agendaPdfUrl?: string;
  speakers?: Speaker[];
  speakersTitle?: string;
  speakersDescription?: string;
  benefits?: Benefit[];
  venue?: Venue;
  pricing?: PricingTier[];
  pricingDescription?: string;
  info?: InfoContent;
  recap?: RecapContent;
  contact?: string;
};

export type EventSeries = {
  id: string;
  name: string;
  description?: string;
  date?: string;
  sortOrder?: number;
  events: Event[];
};

const EVENTS_DIR = join(import.meta.dir, "../../events");

function parseFrontmatter(content: string): { meta: Record<string, any>; body: string } {
  // Allow optional body after closing ---
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n([\s\S]*))?$/);
  if (!match) {
    return { meta: {}, body: content };
  }

  try {
    if (!match[1]) {
      return { meta: {}, body: content };
    }
    const meta = JSON.parse(match[1]);
    return { meta, body: match[2] || "" };
  } catch {
    return { meta: {}, body: content };
  }
}

async function parseJsonFile(path: string): Promise<Record<string, any>> {
  try {
    const file = Bun.file(path);
    if (await file.exists()) {
      return await file.json();
    }
    return {};
  } catch {
    return {};
  }
}

export async function getAllEvents(): Promise<EventSeries[]> {
  const eventsDir = Bun.file(EVENTS_DIR);

  // Use Bun.$ to list directories
  const { stdout } = await Bun.$`ls -d ${EVENTS_DIR}/*/`.quiet().nothrow();
  const dirs = stdout.toString().trim().split("\n").filter(Boolean).map(d => d.replace(/\/$/, "").split("/").pop()!);

  if (dirs.length === 0) {
    return [];
  }

  const series: EventSeries[] = [];

  for (const dir of dirs) {
    const seriesPath = join(EVENTS_DIR, dir);
    const indexPath = join(seriesPath, "index.json");

    // Load series metadata
    const seriesMeta = await parseJsonFile(indexPath);

    // Find .md files using Bun.$
    const { stdout: mdFiles } = await Bun.$`ls ${seriesPath}/*.md 2>/dev/null`.quiet().nothrow();
    const eventFiles = mdFiles.toString().trim().split("\n").filter(f => f.endsWith(".md"));

    const events: Event[] = [];

    for (const filePath of eventFiles) {
      const file = Bun.file(filePath);
      const content = await file.text();
      const mtime = file.lastModified; // Get file modification time
      const { meta, body } = parseFrontmatter(content);
      const id = filePath.split("/").pop()!.replace(/\.md$/, "");

      events.push({
        id,
        name: meta.name || id,
        date: meta.date,
        startDate: meta.startDate,
        endDate: meta.endDate,
        time: meta.time,
        location: meta.location,
        description: meta.description,
        youtube: meta.youtube,
        content: body.trim(),
        series: dir,
        speaker: meta.speaker,
        speakerSlug: meta.speakerSlug,
        speakerSlugs: meta.speakerSlugs,
        role: meta.role,
        featured: meta.featured,
        mtime,
        // Rich event fields
        type: meta.type,
        about: meta.about,
        agenda: meta.agenda,
        agendaDescription: meta.agendaDescription,
        agendaPdfUrl: meta.agendaPdfUrl,
        speakers: meta.speakers,
        speakersTitle: meta.speakersTitle,
        speakersDescription: meta.speakersDescription,
        benefits: meta.benefits,
        venue: meta.venue,
        pricing: meta.pricing,
        pricingDescription: meta.pricingDescription,
        info: meta.info,
        recap: meta.recap,
        contact: meta.contact,
      });
    }

    // If no .md files, treat the series itself as a single event (for conferences)
    if (events.length === 0 && seriesMeta.start_date) {
      events.push({
        id: dir,
        name: seriesMeta.name || dir,
        startDate: seriesMeta.start_date,
        endDate: seriesMeta.end_date,
        location: seriesMeta.location,
        description: seriesMeta.description,
        series: dir,
      });
    }

    series.push({
      id: dir,
      name: seriesMeta.name || dir,
      description: seriesMeta.description,
      date: seriesMeta.date || seriesMeta.start_date,
      sortOrder: seriesMeta.sortOrder,
      events: events.sort((a, b) => {
        // Sort by file modification time (most recently modified first)
        const mtimeA = a.mtime || 0;
        const mtimeB = b.mtime || 0;
        if (mtimeA !== mtimeB) {
          return mtimeB - mtimeA;
        }
        // Secondary sort by id for stable ordering when mtime is equal
        return a.id.localeCompare(b.id);
      }),
    });
  }

  // Sort series by sortOrder (if set), then by date (newest first)
  return series.sort((a, b) => {
    // If both have sortOrder, use that
    if (a.sortOrder !== undefined && b.sortOrder !== undefined) {
      return a.sortOrder - b.sortOrder;
    }
    // Items with sortOrder come before items without
    if (a.sortOrder !== undefined) return -1;
    if (b.sortOrder !== undefined) return 1;
    // Otherwise sort by date
    const dateA = a.date || "";
    const dateB = b.date || "";
    return dateB.localeCompare(dateA);
  });
}

export function formatEventDate(event: Event): string {
  if (event.startDate && event.endDate) {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    return `${start.toLocaleDateString("en-US", opts)} - ${end.toLocaleDateString("en-US", opts)}`;
  }
  if (event.date) {
    const date = new Date(event.date);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  return "";
}

export async function getEventBySlug(slug: string): Promise<{ event: Event; series: EventSeries } | null> {
  const allSeries = await getAllEvents();

  for (const series of allSeries) {
    for (const event of series.events) {
      if (event.id === slug) {
        return { event, series };
      }
    }
  }

  return null;
}

export async function getSeriesById(id: string): Promise<EventSeries | null> {
  const allSeries = await getAllEvents();
  return allSeries.find(s => s.id === id) || null;
}
