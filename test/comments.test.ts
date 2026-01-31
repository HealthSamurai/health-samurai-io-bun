import { test, expect, describe } from "bun:test";
import { CommentItem, CommentList } from "../src/components/Comments";
import type { Comment } from "../src/components/Comments";

const makeComment = (overrides: Partial<Comment> = {}): Comment => ({
  id: 1,
  blog_slug: "test-post",
  user_id: 1,
  parent_id: null,
  content: "Test comment",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  username: "testuser",
  ...overrides,
});

describe("Comments XSS prevention", () => {
  test("escapes script tags in comment content", () => {
    const comment = makeComment({
      content: "<script>alert('xss')</script>",
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });

  test("escapes HTML in comment content", () => {
    const comment = makeComment({
      content: '<img src="x" onerror="alert(1)">',
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).not.toContain('<img src="x"');
    expect(html).toContain("&lt;img");
  });

  test("escapes event handlers in content", () => {
    const comment = makeComment({
      content: '<div onclick="evil()">click me</div>',
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).not.toContain('onclick="evil()"');
    expect(html).toContain("&lt;div onclick=");
  });

  test("escapes nested malicious content", () => {
    const comment = makeComment({
      content: '"><script>document.cookie</script><"',
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).not.toContain("<script>document.cookie</script>");
  });

  test("preserves safe content unchanged", () => {
    const comment = makeComment({
      content: "This is a normal comment with no special characters",
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).toContain("This is a normal comment with no special characters");
  });

  test("handles ampersands in content", () => {
    const comment = makeComment({
      content: "Tom & Jerry are friends",
    });

    const html = CommentItem({
      comment,
      replies: [],
      allComments: [comment],
      slug: "test-post",
    });

    expect(html).toContain("Tom &amp; Jerry are friends");
  });
});

describe("CommentList", () => {
  test("escapes content in all comments", () => {
    const comments = [
      makeComment({ id: 1, content: "<script>alert(1)</script>" }),
      makeComment({ id: 2, content: "<script>alert(2)</script>" }),
    ];

    const html = CommentList({
      comments,
      slug: "test-post",
    });

    expect(html).not.toContain("<script>");
    expect((html.match(/&lt;script&gt;/g) || []).length).toBe(2);
  });

  test("escapes content in nested replies", () => {
    const parent = makeComment({ id: 1, content: "Parent" });
    const reply = makeComment({
      id: 2,
      parent_id: 1,
      content: '<img onerror="alert(1)">',
    });

    const html = CommentList({
      comments: [parent, reply],
      slug: "test-post",
    });

    expect(html).not.toContain('<img onerror');
    expect(html).toContain("&lt;img onerror");
  });
});
