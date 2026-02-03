import { join } from "path";

export type Speaker = {
  slug: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
};

const SPEAKERS_DIR = join(import.meta.dir, "../../speakers");

// Cache for loaded speakers
let speakersCache: Speaker[] | null = null;
let speakersByNameCache: Map<string, Speaker> | null = null;
let speakersBySlugCache: Map<string, Speaker> | null = null;

function parseFrontmatter(content: string): { meta: Record<string, any>; body: string } {
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

export async function getAllSpeakers(): Promise<Speaker[]> {
  if (speakersCache) {
    return speakersCache;
  }

  const { stdout } = await Bun.$`ls ${SPEAKERS_DIR}/*.md 2>/dev/null`.quiet().nothrow();
  const files = stdout.toString().trim().split("\n").filter(f => f.endsWith(".md"));

  const speakers: Speaker[] = [];

  for (const filePath of files) {
    const file = Bun.file(filePath);
    const content = await file.text();
    const { meta, body } = parseFrontmatter(content);
    const slug = filePath.split("/").pop()!.replace(/\.md$/, "");

    speakers.push({
      slug,
      name: meta.name || slug,
      role: meta.role,
      avatar: meta.avatar,
      bio: body.trim() || undefined,
    });
  }

  speakersCache = speakers;
  return speakers;
}

export async function getSpeakerBySlug(slug: string): Promise<Speaker | null> {
  if (!speakersBySlugCache) {
    const speakers = await getAllSpeakers();
    speakersBySlugCache = new Map(speakers.map(s => [s.slug, s]));
  }
  return speakersBySlugCache.get(slug) || null;
}

export async function getSpeakerByName(name: string): Promise<Speaker | null> {
  if (!speakersByNameCache) {
    const speakers = await getAllSpeakers();
    speakersByNameCache = new Map();
    for (const speaker of speakers) {
      // Index by exact name
      speakersByNameCache.set(speaker.name, speaker);
      // Also index by name variations (lowercase)
      speakersByNameCache.set(speaker.name.toLowerCase(), speaker);
    }
  }
  return speakersByNameCache.get(name) || speakersByNameCache.get(name.toLowerCase()) || null;
}

// Backwards compatibility: get avatar by name
export async function getSpeakerAvatar(name: string): Promise<string | undefined> {
  const speaker = await getSpeakerByName(name);
  return speaker?.avatar;
}

// Convert name to slug format (for backward compatibility)
export function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Synchronous lookup by slug (must call preloadSpeakers first)
export function getSpeakerBySlugSync(slug: string): Speaker | undefined {
  if (!speakersBySlugCache) {
    return undefined;
  }
  return speakersBySlugCache.get(slug);
}

// Synchronous version using cache (must call preloadSpeakers first)
export function getSpeakerAvatarSync(name: string): string | undefined {
  if (!speakersByNameCache) {
    return undefined;
  }
  const speaker = speakersByNameCache.get(name) || speakersByNameCache.get(name.toLowerCase());
  return speaker?.avatar;
}

// Get speaker by slug or name (tries slug first, then name-to-slug, then exact name)
export function getSpeakerSync(slugOrName: string): Speaker | undefined {
  if (!speakersBySlugCache || !speakersByNameCache) {
    return undefined;
  }
  // Try direct slug lookup
  let speaker = speakersBySlugCache.get(slugOrName);
  if (speaker) return speaker;

  // Try converting name to slug
  const derivedSlug = nameToSlug(slugOrName);
  speaker = speakersBySlugCache.get(derivedSlug);
  if (speaker) return speaker;

  // Fall back to name lookup
  return speakersByNameCache.get(slugOrName) || speakersByNameCache.get(slugOrName.toLowerCase());
}

// Clear cache (useful for hot reload)
export function clearSpeakersCache(): void {
  speakersCache = null;
  speakersByNameCache = null;
  speakersBySlugCache = null;
}

// Resolve speaker from slug or name - returns speaker entity or creates fallback
export function resolveSpeaker(slugOrName: string): Speaker {
  const speaker = getSpeakerSync(slugOrName);
  if (speaker) {
    return speaker;
  }
  // Fallback: create a minimal speaker from the name
  return {
    slug: nameToSlug(slugOrName),
    name: slugOrName,
  };
}

// Check if speaker field indicates a panel discussion
export function isPanel(speaker?: string): boolean {
  if (!speaker) return false;
  const lower = speaker.toLowerCase();
  return (
    lower.includes("panel") ||
    lower.includes("roundtable") ||
    lower.includes("discussion")
  );
}

export type SpeakerType = "single" | "multiple" | "panel" | "none";

export type ParsedSpeakers = {
  type: SpeakerType;
  speakers: Speaker[];
};

// Parse event speaker field and resolve to Speaker entities
// Works with: speakerSlugs array, speakerSlug string, or comma-separated speaker names
export function parseEventSpeakers(event: {
  speaker?: string;
  speakerSlug?: string;
  speakerSlugs?: string[];
}): ParsedSpeakers {
  // If event has speakerSlugs, use those
  if (event.speakerSlugs && event.speakerSlugs.length > 0) {
    const speakers = event.speakerSlugs.map((slug) => resolveSpeaker(slug));
    if (speakers.length === 1) {
      return { type: "single", speakers };
    }
    return { type: "multiple", speakers };
  }

  // If event has single speakerSlug
  if (event.speakerSlug) {
    return { type: "single", speakers: [resolveSpeaker(event.speakerSlug)] };
  }

  // Fall back to parsing speaker name string
  if (!event.speaker) {
    return { type: "none", speakers: [] };
  }

  // Check if it's a panel discussion
  if (isPanel(event.speaker)) {
    return { type: "panel", speakers: [] };
  }

  const names = event.speaker
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (names.length === 0) {
    return { type: "none", speakers: [] };
  }

  // Resolve each name to a speaker entity
  const speakers = names.map((name) => resolveSpeaker(name));

  if (speakers.length === 1) {
    return { type: "single", speakers };
  }

  return { type: "multiple", speakers };
}

// Name aliases for speakers (maps alternative names to canonical names)
const NAME_ALIASES: Record<string, string> = {
  "Christopher Oakman": "Chris Oakman",
  "Michael Lawley": "Dr. Michael Lawley",
  "Vladislav Ganshin": "Vlad Ganshin",
  "Vitaly Banchenko": "Vitaliy Banchenko",
};

// Preload speakers into cache
export async function preloadSpeakers(): Promise<void> {
  await getAllSpeakers();
  // Build name index
  const speakers = speakersCache!;
  speakersByNameCache = new Map();
  speakersBySlugCache = new Map();
  for (const speaker of speakers) {
    speakersByNameCache.set(speaker.name, speaker);
    speakersByNameCache.set(speaker.name.toLowerCase(), speaker);
    speakersBySlugCache.set(speaker.slug, speaker);
  }
  // Add aliases
  for (const [alias, canonical] of Object.entries(NAME_ALIASES)) {
    const speaker = speakersByNameCache.get(canonical);
    if (speaker) {
      speakersByNameCache.set(alias, speaker);
      speakersByNameCache.set(alias.toLowerCase(), speaker);
    }
  }
}
