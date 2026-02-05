import { test, expect, describe } from "bun:test";
import { getAllArticles } from "../src/lib/articles";
import BlogPost from "../src/pages/blog/[slug]";
import { parseHtml, findAll, getAttr, textContent } from "./utils/html";

const fakeDb = async (_strings: TemplateStringsArray, ..._values: any[]) => {
  return [{ count: 0 }];
};

describe("Blog post page", () => {
  test("renders not found for unknown slug", () => {
    const html = BlogPost({ slug: "missing-post", ctx: { db: fakeDb as any } });
    const doc = parseHtml(html);

    const allText = textContent(doc);
    expect(allText).toContain("Article not found");

    const backLinks = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === "/blog");
    expect(backLinks.length).toBeGreaterThan(0);
  });

  test("renders content for a known post", () => {
    const articles = getAllArticles();
    const pinnedSlug = "why-building-healthcare-forms-is-so-challenging--and-how-to-fix-it";
    const article = articles.find(a => a.slug === pinnedSlug) ?? articles[0];
    expect(article).toBeTruthy();

    const html = BlogPost({ slug: article!.slug, ctx: { db: fakeDb as any } });
    const doc = parseHtml(html);

    const expectedTitle = article!.title.replace(/^🔥\s*/, "");
    const h1s = findAll(doc, n => n.tagName === "h1");
    const h1Text = h1s.map(textContent).join(" ");
    expect(h1Text).toContain(expectedTitle);

    const timeNodes = findAll(doc, n => n.tagName === "time" && getAttr(n, "datetime") === article!.published);
    expect(timeNodes.length).toBeGreaterThan(0);

    const markdownLinks = findAll(
      doc,
      n => n.tagName === "a" && getAttr(n, "href") === `/blog/${article!.slug}.md`,
    );
    expect(markdownLinks.length).toBe(1);

    const allText = textContent(doc);
    expect(allText).toContain("Comments");

    const commentsList = findAll(
      doc,
      n => getAttr(n, "id") === "comments-list" && getAttr(n, "hx-get") === `/api/blog/${article!.slug}/comments`,
    );
    expect(commentsList.length).toBe(1);
  });
});
