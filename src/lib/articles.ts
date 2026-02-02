import { readdirSync, readFileSync, existsSync, statSync } from "fs";
import { join } from "path";
import { parseMarkdown } from "./markdown";
import { getSamuraiByName } from "../data/samurai";

export interface Article {
  slug: string;
  title: string;
  published: string;
  author: string;
  authorImage: string;
  category: string;
  teaser: string;
  image: string;
  readingTime: string;
  tags: string[];
  content: string; // rendered HTML
  tldr?: string;
}

const BLOG_DIR = join(import.meta.dir, "../../blog");

// Preview images pool - used cyclically for all articles
const PREVIEW_IMAGES = [
  "/images/articles/horizontal-1.png",
  "/images/articles/horizontal-2.png",
  "/images/articles/horizontal-3.png",
];

let cachedArticles: Article[] | null = null;

/**
 * Get article preview image from pool (cyclic)
 */
function getArticleImage(index: number): string {
  return PREVIEW_IMAGES[index % PREVIEW_IMAGES.length] || PREVIEW_IMAGES[0]!;
}

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

function calculateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function cleanTitle(title: string): string {
  // Remove emoji prefix if present (e.g., "🔥 Title" -> "Title")
  // But preserve brackets like [Online Workshop]
  return title.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}]+\s*/u, "").trim();
}

/**
 * Find all article markdown files.
 * Supports two structures:
 * - blog/{slug}.md (flat files)
 * - blog/{slug}/index.md (folder structure)
 */
function findArticleFiles(): Array<{ slug: string; filePath: string }> {
  const entries = readdirSync(BLOG_DIR, { withFileTypes: true });
  const result: Array<{ slug: string; filePath: string }> = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Check for blog/{slug}/index.md
      const indexPath = join(BLOG_DIR, entry.name, "index.md");
      if (existsSync(indexPath)) {
        result.push({ slug: entry.name, filePath: indexPath });
      }
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      // blog/{slug}.md
      result.push({
        slug: entry.name.replace(/\.md$/, ""),
        filePath: join(BLOG_DIR, entry.name),
      });
    }
  }

  return result;
}

export function getAllArticles(): Article[] {
  if (cachedArticles) return cachedArticles;

  const articleFiles = findArticleFiles();
  const articles: Article[] = [];

  for (let i = 0; i < articleFiles.length; i++) {
    const { slug: fileSlug, filePath } = articleFiles[i]!;
    const content = readFileSync(filePath, "utf-8");
    const { meta, body } = parseFrontmatter(content);

    const slug = typeof meta.slug === "string" && meta.slug.length > 0
      ? meta.slug
      : fileSlug;

    const author = typeof meta.author === "string" && meta.author.length > 0
      ? meta.author
      : "Health Samurai";

    const samurai = getSamuraiByName(author);

    const article: Article = {
      slug,
      title: cleanTitle(typeof meta.title === "string" ? meta.title : slug),
      published: typeof meta.date === "string" ? meta.date : "",
      author,
      authorImage: samurai?.avatar || "",
      category: typeof meta.category === "string" ? meta.category : "Other",
      teaser: typeof meta.description === "string" ? meta.description : "",
      image: typeof meta.image === "string" && meta.image.length > 0
        ? meta.image
        : getArticleImage(i),
      readingTime: typeof meta["reading-time"] === "string"
        ? meta["reading-time"]
        : calculateReadingTime(body),
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      content: parseMarkdown(body, slug),
      tldr: typeof meta.tldr === "string" ? meta.tldr : undefined,
    };

    articles.push(article);
  }

  // Sort by date descending
  cachedArticles = articles.sort((a, b) => {
    if (!a.published) return 1;
    if (!b.published) return -1;
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return cachedArticles;
}

export function getArticle(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find(a => a.slug === slug) || null;
}

export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(a =>
    a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(a =>
    slugify(a.author) === authorSlug
  );
}

export function getArticlesByTag(tag: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(a =>
    a.tags.includes(tag)
  );
}

export function getCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set(articles.map(a => a.category));
  return Array.from(categories).sort();
}

export function getAuthors(): { name: string; slug: string; image: string; count: number }[] {
  const articles = getAllArticles();
  const authorMap = new Map<string, { name: string; image: string; count: number }>();

  for (const article of articles) {
    // Split author string by comma to handle co-author pairs
    const authors = article.author.split(",").map(a => a.trim());

    for (const authorName of authors) {
      const slug = slugify(authorName);
      const existing = authorMap.get(slug);
      if (existing) {
        existing.count++;
      } else {
        const samurai = getSamuraiByName(authorName);
        authorMap.set(slug, {
          name: authorName,
          image: samurai?.avatar || "",
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

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tagSet = new Set<string>();

  for (const article of articles) {
    for (const tag of article.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}

export function getSimilarArticles(currentSlug: string, limit: number = 3): Article[] {
  const articles = getAllArticles();
  const currentArticle = articles.find(a => a.slug === currentSlug);

  if (!currentArticle) return [];

  // Filter out current article
  const otherArticles = articles.filter(a => a.slug !== currentSlug);

  // Score articles by similarity
  const scored = otherArticles.map(article => {
    let score = 0;

    // Same category gets highest weight
    if (article.category === currentArticle.category) {
      score += 10;
    }

    // Shared tags get points
    const sharedTags = article.tags.filter(tag =>
      currentArticle.tags.includes(tag)
    );
    score += sharedTags.length * 3;

    return { article, score };
  });

  // Sort by score (desc), then by date (desc)
  return scored
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.article.published).getTime() - new Date(a.article.published).getTime();
    })
    .slice(0, limit)
    .map(item => item.article);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
