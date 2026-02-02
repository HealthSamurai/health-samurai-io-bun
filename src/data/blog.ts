import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  url?: string;
  content: string;
};

const BLOG_DIR = join(import.meta.dir, "../../blog");

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

export function getAllPosts(): BlogPost[] {
  const files = readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));

  const posts = files.map(file => {
    const content = readFileSync(join(BLOG_DIR, file), "utf-8");
    const { meta, body } = parseFrontmatter(content);
    const slug = typeof meta.slug === "string" && meta.slug.length > 0
      ? meta.slug
      : file.replace(/\.md$/, "");

    return {
      slug,
      title: typeof meta.title === "string" && meta.title.length > 0 ? meta.title : slug,
      description: typeof meta.description === "string" ? meta.description : "",
      date: typeof meta.date === "string" ? meta.date : "",
      author: typeof meta.author === "string" && meta.author.length > 0 ? meta.author : "Health Samurai",
      image: typeof meta.image === "string" ? meta.image : undefined,
      url: typeof meta.url === "string" ? meta.url : undefined,
      content: body,
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(p => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getAuthors(): { name: string; slug: string; count: number }[] {
  const posts = getAllPosts();
  const authorMap = new Map<string, { name: string; count: number }>();

  for (const post of posts) {
    // Split author string by comma to handle co-author pairs
    const authors = post.author.split(',').map(a => a.trim());

    for (const authorName of authors) {
      const slug = slugify(authorName);
      const existing = authorMap.get(slug);
      if (existing) {
        existing.count++;
      } else {
        authorMap.set(slug, {
          name: authorName,
          count: 1,
        });
      }
    }
  }

  return Array.from(authorMap.entries()).map(([slug, data]) => ({
    slug,
    ...data,
  })).sort((a, b) => b.count - a.count);
}

export function getTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    const content = readFileSync(join(BLOG_DIR, `${post.slug}.md`), "utf-8");
    const { meta } = parseFrontmatter(content);

    if (Array.isArray(meta.tags)) {
      for (const tag of meta.tags) {
        if (typeof tag === "string") {
          tagSet.add(tag);
        }
      }
    }
  }

  return Array.from(tagSet).sort();
}

export function getTopics(): string[] {
  const posts = getAllPosts();
  const topicSet = new Set<string>();

  for (const post of posts) {
    const content = readFileSync(join(BLOG_DIR, `${post.slug}.md`), "utf-8");
    const { meta } = parseFrontmatter(content);

    if (Array.isArray(meta.topics)) {
      for (const topic of meta.topics) {
        if (typeof topic === "string") {
          topicSet.add(topic);
        }
      }
    }
  }

  return Array.from(topicSet).sort();
}
