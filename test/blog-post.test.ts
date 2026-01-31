import { test, expect, describe } from "bun:test";
import { getAllPosts } from "../src/data/blog";
import BlogPost from "../src/pages/blog/[slug]";
import { parseHtml, findAll, getAttr, textContent } from "./utils/html";

const fakeDb = async (_strings: TemplateStringsArray, ..._values: any[]) => {
  return [{ count: 0 }];
};

describe("Blog post page", () => {
  test("renders not found for unknown slug", async () => {
    const html = await BlogPost({ slug: "missing-post", ctx: { db: fakeDb as any } });
    const doc = parseHtml(html);

    const headings = findAll(doc, n => n.tagName === "h1");
    const headingText = headings.map(textContent).join(" ");
    expect(headingText).toContain("Post not found");

    const backLinks = findAll(doc, n => n.tagName === "a" && getAttr(n, "href") === "/blog");
    expect(backLinks.length).toBeGreaterThan(0);
  });

  test("renders content for a known post", async () => {
    const posts = getAllPosts();
    const pinnedSlug = "why-building-healthcare-forms-is-so-challenging--and-how-to-fix-it";
    const post = posts.find(p => p.slug === pinnedSlug) ?? posts[posts.length - 1];
    expect(post).toBeTruthy();

    const html = await BlogPost({ slug: post.slug, ctx: { db: fakeDb as any } });
    const doc = parseHtml(html);

    const expectedTitle = post.title.replace(/^🔥\s*/, "");
    const h1s = findAll(doc, n => n.tagName === "h1");
    const h1Text = h1s.map(textContent).join(" ");
    expect(h1Text).toContain(expectedTitle);

    const timeNodes = findAll(doc, n => n.tagName === "time" && getAttr(n, "datetime") === post.date);
    expect(timeNodes.length).toBeGreaterThan(0);

    const markdownLinks = findAll(
      doc,
      n => n.tagName === "a" && getAttr(n, "href") === `/blog/${post.slug}.md`,
    );
    expect(markdownLinks.length).toBe(1);

    const commentsHeading = findAll(doc, n => n.tagName === "h2");
    const h2Text = commentsHeading.map(textContent).join(" ");
    expect(h2Text).toContain("Comments");

    const commentsList = findAll(
      doc,
      n => getAttr(n, "id") === "comments-list" && getAttr(n, "hx-get") === `/api/blog/${post.slug}/comments`,
    );
    expect(commentsList.length).toBe(1);

    const likeSections = findAll(doc, n => typeof getAttr(n, "data-signals") === "string");
    expect(likeSections.length).toBeGreaterThan(0);
  });
});
