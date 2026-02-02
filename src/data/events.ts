import { join } from "path";

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
  speaker?: string;
  role?: string;
};

export type EventSeries = {
  id: string;
  name: string;
  description?: string;
  date?: string;
  events: Event[];
};

const EVENTS_DIR = join(import.meta.dir, "../../events");

function parseFrontmatter(content: string): { meta: Record<string, any>; body: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: content };
  }

  try {
    if (!match[1] || !match[2]) {
      return { meta: {}, body: content };
    }
    const meta = JSON.parse(match[1]);
    return { meta, body: match[2] };
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
      const { meta, body } = parseFrontmatter(content);
      const id = filePath.split("/").pop()!.replace(/\.md$/, "");

      events.push({
        id,
        name: meta.name || id,
        date: meta.date,
        time: meta.time,
        description: meta.description,
        youtube: meta.youtube,
        content: body.trim(),
        series: dir,
        speaker: meta.speaker,
        role: meta.role,
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
      events: events.sort((a, b) => {
        const dateA = a.date || a.startDate || "";
        const dateB = b.date || b.startDate || "";
        return dateB.localeCompare(dateA); // newest first
      }),
    });
  }

  // Sort series by date (newest first)
  return series.sort((a, b) => {
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
