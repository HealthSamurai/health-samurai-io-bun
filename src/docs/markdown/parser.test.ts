/**
 * Markdown Parser Integration Tests
 *
 * Tests the full parseMarkdown pipeline end-to-end:
 * frontmatter stripping, title/description extraction, TOC generation,
 * schema type detection, link/image transforms, GitBook directives,
 * KaTeX math rendering, and Shiki code highlighting.
 *
 * Ported from Clojure combined_widgets_test, integration_test, render_all_test.
 */

import { test, expect, describe, beforeAll } from "bun:test";
import { parseMarkdown } from "./parser";
import { initHighlighter } from "./shiki";
import type { DocsContext } from "../context";
import type { ProductState } from "../state";

// ---------------------------------------------------------------------------
// Shared minimal mock context
// ---------------------------------------------------------------------------

function createMockState(): ProductState {
  return {
    navigation: [],
    uriToFile: new Map(),
    fileToUri: new Map(),
    redirects: new Map(),
    mdFiles: new Map(),
    parsedMarkdown: new Map(),
    renderedPages: new Map(),
    lastmod: new Map(),
    sitemap: "",
    flatNavigation: [],
  };
}

function createMockCtx(overrides?: Partial<DocsContext>): DocsContext {
  return {
    product: {
      id: "test",
      name: "Test Product",
      repo: "health-samurai/test-docs",
      path: "/docs/test",
      branch: "main",
      docs: "./docs",
      assets: "./assets",
      summary: "SUMMARY.md",
      redirects: "redirects.yaml",
      llms: "llms.txt",
      meilisearchIndex: "test",
    },
    productId: "test",
    productPath: "/docs/test",
    baseUrl: "https://health-samurai.io",
    uri: "/docs/test/test",
    filepath: "test.md",
    state: createMockState(),
    devMode: false,
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// Initialize Shiki once before all tests (required for code highlighting)
// ---------------------------------------------------------------------------

beforeAll(async () => {
  await initHighlighter();
});

// ---------------------------------------------------------------------------
// 1. Basic markdown rendering
// ---------------------------------------------------------------------------

describe("basic markdown rendering", () => {
  test("H1 heading renders with id attribute", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Hello World\n\nSome text.");

    expect(result.html).toContain("<h1");
    expect(result.html).toContain('id="hello-world"');
    expect(result.html).toContain("Hello World");
  });

  test("paragraphs render as <p> tags", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Title\n\nFirst paragraph.\n\nSecond paragraph.");

    expect(result.html).toContain("<p>First paragraph.</p>");
    expect(result.html).toContain("<p>Second paragraph.</p>");
  });

  test("code blocks with language go through Shiki highlighting", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n```json\n{\"key\": \"value\"}\n```";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("<pre");
    expect(result.html).toContain("<code");
    // Shiki produces themed output with shiki class
    expect(result.html).toContain("shiki");
  });

  test("code blocks without language still get highlighted", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n```\nplain code\n```";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("<pre");
    expect(result.html).toContain("<code");
  });

  test("internal links with .md extension get .md stripped", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n[Link](other-page.md)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('href="other-page"');
    expect(result.html).not.toContain('href="other-page.md"');
  });

  test("external links get target=_blank and rel attributes", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n[Google](https://google.com)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('target="_blank"');
    expect(result.html).toContain('rel="noopener noreferrer"');
    expect(result.html).toContain("external-link");
  });

  test("http links also get target=_blank", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n[Example](http://example.com)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('target="_blank"');
  });
});

// ---------------------------------------------------------------------------
// 2. Title and description extraction
// ---------------------------------------------------------------------------

describe("title and description extraction", () => {
  test("H1 is used as title", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# My Page Title\n\nSome content.");

    expect(result.title).toBe("My Page Title");
  });

  test("first paragraph is used as description", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(
      ctx,
      "test.md",
      "# Title\n\nThis is the first paragraph describing the page.\n\nAnother paragraph."
    );

    expect(result.description).toBe("This is the first paragraph describing the page.");
  });

  test("description is truncated to 200 chars", async () => {
    const ctx = createMockCtx();
    const longText = "A".repeat(250);
    const result = await parseMarkdown(ctx, "test.md", `# Title\n\n${longText}\n\nNext.`);

    expect(result.description.length).toBeLessThanOrEqual(200);
  });

  test("if no H1, filename is used as title", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "my-cool-page.md", "Some content without heading.");

    expect(result.title).toBe("My Cool Page");
  });

  test("underscores in filename are converted to spaces for title", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "getting_started.md", "Content only.");

    expect(result.title).toBe("Getting Started");
  });

  test("empty content returns empty description", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "empty.md", "");

    expect(result.description).toBe("");
  });
});

// ---------------------------------------------------------------------------
// 3. TOC generation
// ---------------------------------------------------------------------------

describe("TOC generation", () => {
  test("H2 and H3 headings are added to toc", async () => {
    const ctx = createMockCtx();
    const content = `# Main Title

## Section One

Some text.

### Subsection A

More text.

## Section Two

Even more text.
`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.toc).toHaveLength(3);
    expect(result.toc[0]).toEqual({ id: "section-one", text: "Section One", level: 2 });
    expect(result.toc[1]).toEqual({ id: "subsection-a", text: "Subsection A", level: 3 });
    expect(result.toc[2]).toEqual({ id: "section-two", text: "Section Two", level: 2 });
  });

  test("H1 is excluded from toc", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n## Section\n\nText.";
    const result = await parseMarkdown(ctx, "test.md", content);

    const h1Items = result.toc.filter((item) => item.level === 1);
    expect(h1Items).toHaveLength(0);
  });

  test("H4+ headings are excluded from toc", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n## Section\n\n#### Deep Heading\n\n##### Deeper\n\nText.";
    const result = await parseMarkdown(ctx, "test.md", content);

    const deepItems = result.toc.filter((item) => item.level >= 4);
    expect(deepItems).toHaveLength(0);
    expect(result.toc).toHaveLength(1);
    expect(result.toc[0]!.text).toBe("Section");
  });

  test("each toc item has id, text, and level", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n## My Section\n\nText.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.toc).toHaveLength(1);
    const item = result.toc[0]!;
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("text");
    expect(item).toHaveProperty("level");
    expect(typeof item.id).toBe("string");
    expect(typeof item.text).toBe("string");
    expect(typeof item.level).toBe("number");
  });

  test("empty document has empty toc", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Title\n\nJust a paragraph.");

    expect(result.toc).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// 4. Schema type detection
// ---------------------------------------------------------------------------

describe("schema type detection", () => {
  test("title containing FAQ returns faq", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# FAQ - Common Questions\n\nQ: What?\nA: Yes.");

    expect(result.schemaType).toBe("faq");
  });

  test("title containing 'how to' returns howto", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# How to configure Aidbox\n\nSteps here.");

    expect(result.schemaType).toBe("howto");
  });

  test("title containing 'tutorial' returns howto", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Tutorial: Getting Started\n\nIntro.");

    expect(result.schemaType).toBe("howto");
  });

  test("title containing 'guide' returns howto", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Deployment Guide\n\nSteps.");

    expect(result.schemaType).toBe("howto");
  });

  test("content with stepper directive returns howto", async () => {
    const ctx = createMockCtx();
    const content = `# Setup

{% stepper %}
{% step %}
Do this first
{% endstep %}
{% step %}
Then this
{% endstep %}
{% endstepper %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.schemaType).toBe("howto");
  });

  test("regular content returns article", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Overview\n\nThis is an overview page.");

    expect(result.schemaType).toBe("article");
  });

  test("content with Q: pattern returns faq", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(
      ctx,
      "test.md",
      "# Questions\n\nQ: How does it work?\nA: Like this."
    );

    expect(result.schemaType).toBe("faq");
  });
});

// ---------------------------------------------------------------------------
// 5. Frontmatter stripping
// ---------------------------------------------------------------------------

describe("frontmatter stripping", () => {
  test("YAML frontmatter is stripped before parsing", async () => {
    const ctx = createMockCtx();
    const content = `---
title: My Page
description: A test page
---

# Actual Title

Content here.`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.title).toBe("Actual Title");
    expect(result.html).not.toContain("---");
    expect(result.html).not.toContain("title: My Page");
    expect(result.html).toContain("Content here.");
  });

  test("content without frontmatter is parsed normally", async () => {
    const ctx = createMockCtx();
    const content = "# No Frontmatter\n\nJust content.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.title).toBe("No Frontmatter");
    expect(result.html).toContain("Just content.");
  });

  test("frontmatter with various YAML fields is fully stripped", async () => {
    const ctx = createMockCtx();
    const content = `---
title: Ignored
tags:
  - one
  - two
draft: true
---

# Real Title

Body text.`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.title).toBe("Real Title");
    expect(result.html).not.toContain("draft");
    expect(result.html).not.toContain("tags");
    expect(result.html).toContain("Body text.");
  });
});

// ---------------------------------------------------------------------------
// 6. GitBook directives in full pipeline
// ---------------------------------------------------------------------------

describe("GitBook directives in full pipeline", () => {
  test("hint directive renders with correct class", async () => {
    const ctx = createMockCtx();
    const content = `# Page

{% hint style="info" %}
This is an informational hint.
{% endhint %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("hint-info");
    expect(result.html).toContain("informational hint");
  });

  test("warning hint renders with warning class", async () => {
    const ctx = createMockCtx();
    const content = `# Page

{% hint style="warning" %}
Be careful with this operation.
{% endhint %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("hint-warning");
    expect(result.html).toContain("Be careful");
  });

  test("tabs directive renders tabs-container", async () => {
    const ctx = createMockCtx();
    const content = `# Page

{% tabs %}
{% tab title="First Tab" %}
Content of tab A.
{% endtab %}
{% tab title="Second Tab" %}
Content of tab B.
{% endtab %}
{% endtabs %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("tabs-container");
    expect(result.html).toContain("First Tab");
    expect(result.html).toContain("Second Tab");
    expect(result.html).toContain("Content of tab A.");
    expect(result.html).toContain("Content of tab B.");
  });

  test("no nested <pre> tags from directives (Clojure bug test)", async () => {
    const ctx = createMockCtx();
    const content = `# Page

{% tabs %}
{% tab title="JSON" %}
\`\`\`json
{"key": "value"}
\`\`\`
{% endtab %}
{% endtabs %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    // Count occurrences of <pre - there should be exactly one from the code block
    // and not a nested <pre> inside another <pre>
    const preMatches = result.html.match(/<pre[^>]*>[\s\S]*?<pre/g);
    expect(preMatches).toBeNull();
  });

  test("no GITBOOK_EMPTY_LINE markers in output", async () => {
    const ctx = createMockCtx();
    const content = `# Page

{% hint style="info" %}

Some content with empty lines around it.

{% endhint %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).not.toContain("GITBOOK_EMPTY_LINE");
    expect(result.html).not.toContain("%%");
  });

  test("stepper directive renders step numbers", async () => {
    const ctx = createMockCtx();
    const content = `# Setup Guide

{% stepper %}
{% step %}
Install the package.
{% endstep %}
{% step %}
Configure the settings.
{% endstep %}
{% endstepper %}`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("stepper-container");
    expect(result.html).toContain("Install the package");
    expect(result.html).toContain("Configure the settings");
  });
});

// ---------------------------------------------------------------------------
// 7. Image path resolution
// ---------------------------------------------------------------------------

describe("image path resolution", () => {
  test(".gitbook/assets path resolves to productPath/assets", async () => {
    const ctx = createMockCtx();
    const content = "# Page\n\n![image](.gitbook/assets/screenshot.png)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('src="/docs/test/assets/screenshot.png"');
  });

  test("nested .gitbook/assets path resolves correctly", async () => {
    const ctx = createMockCtx();
    const content = "# Page\n\n![image](../../.gitbook/assets/foo.png)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('src="/docs/test/assets/foo.png"');
  });

  test("assets/ path resolves to productPath/assets/", async () => {
    const ctx = createMockCtx();
    const content = "# Page\n\n![image](assets/bar.png)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('src="/docs/test/assets/bar.png"');
  });

  test("relative ../img.png resolves relative to filepath", async () => {
    const ctx = createMockCtx({ filepath: "guides/setup.md" });
    const content = "# Page\n\n![image](../img.png)";
    const result = await parseMarkdown(ctx, "guides/setup.md", content);

    expect(result.html).toContain('src="/docs/test/img.png"');
  });

  test("deeper relative path resolves correctly", async () => {
    const ctx = createMockCtx({ filepath: "api/v1/endpoints.md" });
    const content = "# Page\n\n![image](../../images/diagram.png)";
    const result = await parseMarkdown(ctx, "api/v1/endpoints.md", content);

    expect(result.html).toContain('src="/docs/test/images/diagram.png"');
  });

  test("absolute http URLs are not rewritten", async () => {
    const ctx = createMockCtx();
    const content = "# Page\n\n![image](https://example.com/photo.png)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('src="https://example.com/photo.png"');
  });

  test("images get lazy loading attribute", async () => {
    const ctx = createMockCtx();
    const content = "# Page\n\n![image](assets/pic.png)";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain('loading="lazy"');
  });
});

// ---------------------------------------------------------------------------
// 8. KaTeX in full pipeline
// ---------------------------------------------------------------------------

describe("KaTeX in full pipeline", () => {
  test("inline math $x^2$ renders katex-inline", async () => {
    const ctx = createMockCtx();
    const content = "# Math Page\n\nThe formula $x^2$ is quadratic.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("katex-inline");
  });

  test("display math $$formula$$ renders katex-display", async () => {
    const ctx = createMockCtx();
    const content = "# Math Page\n\n$$x^2 + y^2 = z^2$$";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("katex-display");
  });

  test("multiline display math renders correctly", async () => {
    const ctx = createMockCtx();
    const content = `# Math Page

$$
a^2 + b^2 = c^2
$$`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("katex-display");
  });

  test("FHIR $export is NOT rendered as math", async () => {
    const ctx = createMockCtx();
    const content = "# FHIR Operations\n\nUse the $export operation to export data.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).not.toContain("katex-inline");
    expect(result.html).toContain("export");
  });

  test("FHIR $everything is NOT rendered as math", async () => {
    const ctx = createMockCtx();
    const content = "# API\n\nCall $everything to get all resources.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).not.toContain("katex-inline");
    expect(result.html).toContain("everything");
  });

  test("mixed math and FHIR operations are handled correctly", async () => {
    const ctx = createMockCtx();
    const content = `# Mixed Content

The formula $x^2$ applies. Use $export for bulk data.`;
    const result = await parseMarkdown(ctx, "test.md", content);

    // The math formula should be rendered
    expect(result.html).toContain("katex-inline");
    // The FHIR operation should not be rendered as math
    expect(result.html).toContain("export");
  });

  test("math inside code blocks is not rendered", async () => {
    const ctx = createMockCtx();
    const content = "# Code\n\n```\n$x^2$\n```\n\nOutside: $a_i$ is rendered.";
    const result = await parseMarkdown(ctx, "test.md", content);

    // The inline math outside code should be rendered
    expect(result.html).toContain("katex-inline");
  });
});

// ---------------------------------------------------------------------------
// 9. Return value structure
// ---------------------------------------------------------------------------

describe("return value structure", () => {
  test("parseMarkdown returns all expected fields", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "test.md", "# Title\n\nDescription.\n\n## Section");

    expect(result).toHaveProperty("filepath", "test.md");
    expect(result).toHaveProperty("title", "Title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("html");
    expect(result).toHaveProperty("toc");
    expect(result).toHaveProperty("schemaType");
    expect(typeof result.html).toBe("string");
    expect(Array.isArray(result.toc)).toBe(true);
  });

  test("filepath in result matches input filepath", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "deep/nested/file.md", "# Test");

    expect(result.filepath).toBe("deep/nested/file.md");
  });
});

// ---------------------------------------------------------------------------
// 10. Edge cases
// ---------------------------------------------------------------------------

describe("edge cases", () => {
  test("empty content does not throw", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "empty.md", "");

    expect(result.html).toBeDefined();
    expect(result.title).toBe("Empty");
    expect(result.toc).toHaveLength(0);
  });

  test("content with only whitespace does not throw", async () => {
    const ctx = createMockCtx();
    const result = await parseMarkdown(ctx, "blank.md", "   \n\n  \n");

    expect(result.html).toBeDefined();
  });

  test("heading with special characters gets slugified id", async () => {
    const ctx = createMockCtx();
    const content = "# Title\n\n## What's New in v2.0?\n\nText.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.toc).toHaveLength(1);
    expect(result.toc[0]!.id).toBe("what-s-new-in-v2-0");
    expect(result.toc[0]!.text).toBe("What's New in v2.0?");
  });

  test("GFM tables are rendered", async () => {
    const ctx = createMockCtx();
    const content = `# Table Test

| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |
`;
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("<table>");
    expect(result.html).toContain("<th>");
    expect(result.html).toContain("Value 1");
  });

  test("GFM strikethrough is rendered", async () => {
    const ctx = createMockCtx();
    const content = "# Test\n\n~~deleted text~~";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.html).toContain("<del>");
    expect(result.html).toContain("deleted text");
  });

  test("multiple H1 headings - first is used as title", async () => {
    const ctx = createMockCtx();
    const content = "# First Title\n\n# Second Title\n\nText.";
    const result = await parseMarkdown(ctx, "test.md", content);

    expect(result.title).toBe("First Title");
  });
});
