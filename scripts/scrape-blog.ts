#!/usr/bin/env bun
/**
 * Scrape blog posts from health-samurai.io and convert to markdown
 * Usage: bun scripts/scrape-blog.ts
 */

import { $ } from "bun";

const BASE_URL = "https://www.health-samurai.io";
const BLOG_DIR = "./blog";

// Simple HTML to Markdown converter
function htmlToMarkdown(html: string): string {
  let md = html
    // Remove scripts and styles
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    // Headers
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n")
    .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "\n##### $1\n")
    .replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "\n###### $1\n")
    // Bold and italic
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    // Images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "![$2]($1)")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, "![$1]($2)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, "![]($1)")
    // Code blocks
    .replace(/<pre[^>]*><code[^>]*class="[^"]*language-(\w+)[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "\n```$1\n$2\n```\n")
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "\n```\n$1\n```\n")
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, "\n```\n$1\n```\n")
    // Inline code
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
    // Lists
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, "$1\n")
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, "$1\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n")
    // Blockquotes
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, "\n> $1\n")
    // Paragraphs and breaks
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n---\n")
    // Remove remaining tags
    .replace(/<figure[^>]*>([\s\S]*?)<\/figure>/gi, "$1")
    .replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, "*$1*")
    .replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, "$1")
    .replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, "$1")
    .replace(/<[^>]+>/g, "")
    // Decode HTML entities
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "...")
    // Clean up whitespace
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return md;
}

// Extract metadata from HTML head
function extractMetadata(html: string, url: string): Record<string, string> {
  const meta: Record<string, string> = { url };

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (titleMatch) meta.title = titleMatch[1].trim();

  // Description
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i)
    || html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i);
  if (descMatch) meta.description = descMatch[1].trim();

  // OG Image
  const imgMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i)
    || html.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:image"[^>]*>/i);
  if (imgMatch) meta.image = imgMatch[1].trim();

  // Published date - look for time element or date patterns
  const timeMatch = html.match(/<time[^>]*datetime="([^"]*)"[^>]*>/i);
  if (timeMatch) meta.date = timeMatch[1].trim();

  // Author
  const authorMatch = html.match(/class="[^"]*author[^"]*"[^>]*>([^<]*)</i);
  if (authorMatch) meta.author = authorMatch[1].trim();

  // Category from URL or content
  const categoryMatch = html.match(/href="\/article-categories\/([^"]+)"/i);
  if (categoryMatch) meta.category = categoryMatch[1].replace(/-/g, " ");

  // Slug from URL
  const slugMatch = url.match(/\/articles\/([^\/]+)$/);
  if (slugMatch) meta.slug = slugMatch[1];

  return meta;
}

// Extract article content
function extractContent(html: string): string {
  // Find the rich text content container
  const richTextMatch = html.match(/<div[^>]*class="[^"]*w-richtext[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i)
    || html.match(/<div[^>]*class="ar-rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div|<\/section)/i);

  if (richTextMatch) {
    return htmlToMarkdown(richTextMatch[1]);
  }

  // Fallback: try to find article content
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    return htmlToMarkdown(articleMatch[1]);
  }

  return "";
}

// Fetch all article URLs from blog listing
async function fetchArticleUrls(): Promise<string[]> {
  const urls: Set<string> = new Set();

  console.log("Fetching blog listing...");
  const response = await fetch(`${BASE_URL}/blog`);
  const html = await response.text();

  // Extract all article links
  const matches = html.matchAll(/href="(\/articles\/[^"]+)"/g);
  for (const match of matches) {
    urls.add(match[1]);
  }

  console.log(`Found ${urls.size} articles`);
  return Array.from(urls);
}

// Fetch and process a single article
async function processArticle(path: string): Promise<void> {
  const url = `${BASE_URL}${path}`;
  const slug = path.replace("/articles/", "");

  console.log(`Processing: ${slug}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`  Failed to fetch: ${response.status}`);
      return;
    }

    const html = await response.text();
    const metadata = extractMetadata(html, url);
    const content = extractContent(html);

    if (!content) {
      console.error(`  No content found`);
      return;
    }

    // Create markdown with frontmatter
    const frontmatter = JSON.stringify(metadata, null, 2);
    const markdown = `---
${frontmatter}
---

${content}
`;

    // Write to file
    const filename = `${BLOG_DIR}/${slug}.md`;
    await Bun.write(filename, markdown);
    console.log(`  Saved: ${filename}`);

  } catch (error) {
    console.error(`  Error: ${error}`);
  }
}

// Main
async function main() {
  // Ensure blog directory exists
  await $`mkdir -p ${BLOG_DIR}`;

  // Get all article URLs
  const articlePaths = await fetchArticleUrls();

  // Process articles with rate limiting
  for (const path of articlePaths) {
    await processArticle(path);
    // Small delay to be nice to the server
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log(`\nDone! Processed ${articlePaths.length} articles.`);
}

main().catch(console.error);
