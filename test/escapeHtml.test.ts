import { test, expect, describe } from "bun:test";
import { escapeHtml } from "../src/lib/jsx-runtime";

describe("escapeHtml", () => {
  test("escapes script tags", () => {
    const malicious = "<script>alert('xss')</script>";
    const result = escapeHtml(malicious);

    expect(result).not.toContain("<script>");
    expect(result).toBe("&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;");
  });

  test("escapes all HTML entities", () => {
    const content = "Tom & Jerry <> \"test\" 'quotes'";
    const result = escapeHtml(content);

    expect(result).toBe("Tom &amp; Jerry &lt;&gt; &quot;test&quot; &#39;quotes&#39;");
  });

  test("escapes img onerror attacks", () => {
    const malicious = '<img src="x" onerror="alert(1)">';
    const result = escapeHtml(malicious);

    expect(result).not.toContain("<img");
    expect(result).toContain("&lt;img");
  });

  test("escapes nested HTML", () => {
    const malicious = "<div onclick=\"evil()\"><b>click me</b></div>";
    const result = escapeHtml(malicious);

    expect(result).not.toContain("<div");
    expect(result).not.toContain("<b>");
  });

  test("handles empty string", () => {
    expect(escapeHtml("")).toBe("");
  });

  test("handles plain text unchanged (except ampersand)", () => {
    expect(escapeHtml("Hello World")).toBe("Hello World");
    expect(escapeHtml("Just some text")).toBe("Just some text");
  });

  test("handles ampersand in URLs", () => {
    const url = "https://example.com?a=1&b=2";
    const result = escapeHtml(url);

    expect(result).toBe("https://example.com?a=1&amp;b=2");
  });
});
