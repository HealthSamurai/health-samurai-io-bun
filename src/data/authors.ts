import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

export interface AuthorData {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
  image: string;
}

const AUTHORS_DIR = join(import.meta.dir, "../../content/authors");

let cachedAuthors: Map<string, AuthorData> | null = null;

function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match || !match[1]) return {};

  const result: Record<string, any> = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    result[key] = value;
  }

  return result;
}

export function loadAuthors(): Map<string, AuthorData> {
  if (cachedAuthors) return cachedAuthors;

  cachedAuthors = new Map();

  if (!existsSync(AUTHORS_DIR)) {
    return cachedAuthors;
  }

  const files = readdirSync(AUTHORS_DIR).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const content = readFileSync(join(AUTHORS_DIR, file), 'utf-8');
    const data = parseFrontmatter(content);

    if (data.name) {
      cachedAuthors.set(data.name, {
        name: data.name,
        title: data.title || 'Contributor at Health Samurai',
        bio: data.bio || `${data.name} is a contributor to the Health Samurai blog.`,
        linkedin: data.linkedin,
        image: data.image || '',
      });
    }
  }

  return cachedAuthors;
}

export function getAuthorData(authorName: string): AuthorData | null {
  const authors = loadAuthors();
  return authors.get(authorName) || null;
}

export function getAuthorImage(authorName: string): string {
  const author = getAuthorData(authorName);
  if (!author?.image || author.image === 'placeholder.jpg') return '';
  return `https://storage.googleapis.com/samurai-public/Photo%20for%20KB/${encodeURIComponent(author.image)}`;
}
