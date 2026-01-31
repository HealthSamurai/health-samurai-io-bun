import { test, expect, describe } from "bun:test";
import { jsx, jsxs, Fragment } from "../src/lib/jsx-runtime";

describe("jsx-runtime", () => {
  describe("XSS prevention", () => {
    test("escapes HTML in text content", () => {
      const malicious = "<script>alert('xss')</script>";
      const result = jsx("p", { children: malicious });

      expect(result).not.toContain("<script>");
      expect(result).toContain("&lt;script&gt;");
      expect(result).toBe("<p>&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;</p>");
    });

    test("escapes HTML entities in text content", () => {
      const content = "Tom & Jerry <> \"test\" 'quotes'";
      const result = jsx("span", { children: content });

      expect(result).toBe("<span>Tom &amp; Jerry &lt;&gt; &quot;test&quot; &#39;quotes&#39;</span>");
    });

    test("escapes nested children", () => {
      const result = jsxs("div", {
        children: [
          jsx("p", { children: "<b>bold</b>" }),
          "<script>evil()</script>",
        ],
      });

      expect(result).not.toContain("<script>");
      expect(result).toContain("&lt;script&gt;");
    });

    test("escapes content in Fragment", () => {
      const result = Fragment({ children: "<img onerror=alert(1)>" });

      expect(result).not.toContain("<img");
      expect(result).toContain("&lt;img");
    });

    test("allows raw HTML via dangerouslySetInnerHTML", () => {
      const rawHtml = "<strong>Bold</strong>";
      const result = jsx("div", {
        dangerouslySetInnerHTML: { __html: rawHtml },
      });

      expect(result).toBe("<div><strong>Bold</strong></div>");
      expect(result).toContain("<strong>");
    });
  });

  describe("basic rendering", () => {
    test("renders simple element", () => {
      const result = jsx("div", { children: "Hello" });
      expect(result).toBe("<div>Hello</div>");
    });

    test("renders with className", () => {
      const result = jsx("div", { className: "test-class", children: "Content" });
      expect(result).toBe('<div class="test-class">Content</div>');
    });

    test("renders void elements", () => {
      const result = jsx("input", { type: "text", name: "email" });
      expect(result).toBe('<input type="text" name="email" />');
    });

    test("renders boolean attributes", () => {
      const result = jsx("input", { type: "checkbox", disabled: true });
      expect(result).toBe('<input type="checkbox" disabled />');
    });

    test("omits false boolean attributes", () => {
      const result = jsx("input", { type: "checkbox", disabled: false });
      expect(result).toBe('<input type="checkbox" />');
    });

    test("renders numbers as text", () => {
      const result = jsx("span", { children: 42 });
      expect(result).toBe("<span>42</span>");
    });

    test("renders null/undefined/boolean children as empty", () => {
      expect(jsx("div", { children: null })).toBe("<div></div>");
      expect(jsx("div", { children: undefined })).toBe("<div></div>");
      expect(jsx("div", { children: false })).toBe("<div></div>");
      expect(jsx("div", { children: true })).toBe("<div></div>");
    });
  });

  describe("attribute escaping", () => {
    test("escapes HTML in attributes", () => {
      const result = jsx("div", {
        title: '"><script>alert(1)</script>',
        children: "Safe",
      });

      expect(result).not.toContain("<script>");
      expect(result).toContain("&quot;&gt;&lt;script&gt;");
    });

    test("escapes style object values", () => {
      const result = jsx("div", {
        style: { color: "red", fontSize: "12px" },
        children: "Styled",
      });

      expect(result).toContain('style="color: red; font-size: 12px"');
    });
  });
});
