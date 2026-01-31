import { test, expect, describe } from "bun:test";
import { getAllPosts } from "../src/data/blog";
import BlogPage from "../src/pages/blog";
import { parseHtml, findAll, getAttr, textContent } from "./utils/html";

describe("Blog page", () => {
  test("renders header and RSS link", () => {
    const html = BlogPage();
    const doc = parseHtml(html);

    const headings = findAll(doc, n => n.tagName === "h2");
    const headingText = headings.map(textContent).join(" ");
    expect(headingText).toContain("From the blog");

    const rssLinks = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === "/blog/rss.xml");
    expect(rssLinks.length).toBe(1);
    expect(textContent(rssLinks[0])).toContain("RSS");
  });

  test("renders one article card per post with correct link", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);

    const html = BlogPage();
    const doc = parseHtml(html);

    const articles = findAll(doc, n => n.tagName === "article");
    expect(articles.length).toBe(posts.length);

    for (const post of posts) {
      const linkHref = `/blog/${post.slug}`;
      const links = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === linkHref);
      expect(links.length).toBeGreaterThan(0);
    }
  });

  test("includes datetime attributes for dated posts", () => {
    const posts = getAllPosts().filter(p => p.date);
    if (posts.length === 0) return;

    const html = BlogPage();
    const doc = parseHtml(html);

    for (const post of posts) {
      const times = findAll(doc, n => n.tagName === "time" && getAttr(n, "datetime") === post.date);
      expect(times.length).toBeGreaterThan(0);
    }
  });
});
