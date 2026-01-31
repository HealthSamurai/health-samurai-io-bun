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
    const slug = meta.slug || file.replace(/\.md$/, "");

    return {
      slug,
      title: meta.title || slug,
      description: meta.description || "",
      date: meta.date || "",
      author: meta.author || "Health Samurai",
      image: meta.image,
      url: meta.url,
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
