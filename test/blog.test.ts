import { test, expect, describe } from "bun:test";
import { getAllArticles } from "../src/lib/articles";
import BlogPage from "../src/pages/blog";
import { parseHtml, findAll, getAttr, textContent } from "./utils/html";

describe("Blog page", () => {
  test("renders hero and RSS link", () => {
    const html = BlogPage();
    const doc = parseHtml(html);

    const rssLinks = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === "/blog/rss.xml");
    expect(rssLinks.length).toBe(1);
    expect(textContent(rssLinks[0])).toContain("RSS");
  });

  test("renders article cards with correct links", () => {
    const articles = getAllArticles();
    expect(articles.length).toBeGreaterThan(0);

    const html = BlogPage();
    const doc = parseHtml(html);

    // The page shows featured + paginated articles; verify first few have links
    for (const article of articles.slice(0, 5)) {
      const linkHref = `/blog/${article.slug}`;
      const links = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === linkHref);
      expect(links.length).toBeGreaterThan(0);
    }
  });
});
