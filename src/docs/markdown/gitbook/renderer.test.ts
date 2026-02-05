/**
 * Renderer Tests
 */

import { test, expect, describe } from "bun:test";
import { parse } from "./ast";
import { render } from "./renderer";

// Simple markdown renderer for tests - just wraps content in <p> tags
const mockRenderMarkdown = async (content: string): Promise<string> => {
  const trimmed = content.trim();
  if (!trimmed) return "";
  return `<p>${trimmed}</p>`;
};

describe("render", () => {
  test("renders plain text as-is", async () => {
    const ast = parse("Hello, world!");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });
    expect(html).toBe("Hello, world!");
  });

  test("renders empty content", async () => {
    const ast = parse("");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });
    expect(html).toBe("");
  });
});

describe("hint directive", () => {
  test("renders info hint", async () => {
    const ast = parse('{% hint style="info" %}This is info{% endhint %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="hint hint-info"');
    expect(html).toContain('class="hint-content"');
    expect(html).toContain("<p>This is info</p>");
    expect(html).toContain("svg"); // Should have icon
  });

  test("renders warning hint", async () => {
    const ast = parse('{% hint style="warning" %}Warning!{% endhint %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="hint hint-warning"');
    expect(html).toContain("<p>Warning!</p>");
  });

  test("renders success hint", async () => {
    const ast = parse('{% hint style="success" %}Success!{% endhint %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="hint hint-success"');
  });

  test("renders danger hint", async () => {
    const ast = parse('{% hint style="danger" %}Danger!{% endhint %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="hint hint-danger"');
  });

  test("defaults to info style", async () => {
    const ast = parse("{% hint %}Default hint{% endhint %}");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="hint hint-info"');
  });
});

describe("tabs directive", () => {
  test("renders tabs with buttons and panels", async () => {
    const content = `{% tabs %}
{% tab title="First" %}
Content 1
{% endtab %}
{% tab title="Second" %}
Content 2
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    // Check structure
    expect(html).toContain('class="tabs-container"');
    expect(html).toContain('class="tabs-header"');
    expect(html).toContain('class="tabs-content"');

    // Check buttons
    expect(html).toContain('class="tab-button active"');
    expect(html).toContain("First");
    expect(html).toContain("Second");

    // Check panels
    expect(html).toContain('class="tab-panel active"');
    expect(html).toContain("<p>Content 1</p>");
    expect(html).toContain("<p>Content 2</p>");
  });

  test("first tab is active by default", async () => {
    const content = `{% tabs %}
{% tab title="A" %}A{% endtab %}
{% tab title="B" %}B{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    // First button and panel should be active
    expect(html).toMatch(/tab-button active.*data-tab="0"/);
    expect(html).toMatch(/tab-panel active.*data-tab="0"/);
  });

  test("generates onclick handlers", async () => {
    const content = `{% tabs %}
{% tab title="Tab" %}Content{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("onclick=");
    expect(html).toContain("switchTab");
  });

  test("escapes HTML in tab titles", async () => {
    const content = `{% tabs %}
{% tab title="<script>alert(1)</script>" %}Content{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });

  test("returns empty string for tabs without tab children", async () => {
    const content = `{% tabs %}
Some text without tabs
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toBe("");
  });

  test("uses default title when not provided", async () => {
    const content = `{% tabs %}
{% tab %}Content{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("Tab 1");
  });
});

describe("stepper directive", () => {
  test("renders stepper with numbered steps", async () => {
    const content = `{% stepper %}
{% step %}
First step
{% endstep %}
{% step %}
Second step
{% endstep %}
{% endstepper %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("stepper-container");
    expect(html).toContain("bg-brand");
    expect(html).toContain(">1<");
    expect(html).toContain(">2<");
    expect(html).toContain("stepper-step-content");
  });

  test("renders step content through markdown", async () => {
    const content = `{% stepper %}
{% step %}
Step content here
{% endstep %}
{% endstepper %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("<p>Step content here</p>");
  });

  test("returns empty string for stepper without steps", async () => {
    const content = `{% stepper %}
Some text without steps
{% endstepper %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toBe("");
  });
});

describe("code directive", () => {
  test("renders code with title", async () => {
    const content = `{% code title="example.ts" %}
\`\`\`typescript
const x = 1;
\`\`\`
{% endcode %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="code-block-wrapper"');
    expect(html).toContain('class="code-block-title"');
    expect(html).toContain("example.ts");
  });

  test("escapes HTML in title", async () => {
    const content = `{% code title="<script>alert(1)</script>" %}
code
{% endcode %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
  });

  test("renders code without title wrapper", async () => {
    const content = `{% code %}
\`\`\`
code
\`\`\`
{% endcode %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).not.toContain('class="code-block-wrapper"');
    expect(html).not.toContain('class="code-block-title"');
  });
});

describe("embed directive", () => {
  test("renders YouTube embed", async () => {
    const ast = parse(
      '{% embed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" / %}'
    );
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("<iframe");
    expect(html).toContain("youtube.com/embed/dQw4w9WgXcQ");
    expect(html).toContain('pb-[56.25%]');
  });

  test("renders YouTube short URL", async () => {
    const ast = parse('{% embed url="https://youtu.be/dQw4w9WgXcQ" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("youtube.com/embed/dQw4w9WgXcQ");
  });

  test("renders generic embed as link", async () => {
    const ast = parse('{% embed url="https://example.com/resource" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("big-link");
    expect(html).toContain('href="https://example.com/resource"');
    expect(html).toContain('target="_blank"');
  });

  test("returns empty for embed without URL", async () => {
    const ast = parse("{% embed / %}");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toBe("");
  });

  test("escapes HTML in URL", async () => {
    const ast = parse('{% embed url="https://example.com/<script>" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).not.toContain("<script>");
  });
});

describe("content-ref directive", () => {
  test("renders content reference", async () => {
    const content = `{% content-ref url="getting-started.md" %}
[Getting Started](getting-started.md)
{% endcontent-ref %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("big-link");
    expect(html).toContain("Getting Started");
  });
});

describe("file directive", () => {
  test("renders file download link", async () => {
    const ast = parse('{% file src="/assets/document.pdf" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("file-widget-wrapper");
    expect(html).toContain("file-widget");
    expect(html).toContain('href="/assets/document.pdf"');
    expect(html).toContain("download");
    expect(html).toContain("document.pdf");
    expect(html).toContain("svg"); // File icon
  });

  test("extracts filename from path", async () => {
    const ast = parse('{% file src="/path/to/my-file.zip" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("my-file.zip");
  });

  test("returns empty for file without src", async () => {
    const ast = parse("{% file / %}");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toBe("");
  });

  test("escapes HTML in filename", async () => {
    const ast = parse('{% file src="/path/<script>.txt" / %}');
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).not.toContain("<script>");
  });
});

describe("unknown directive", () => {
  test("renders unknown directive as comment", async () => {
    const ast = parse("{% unknown %}Content{% endunknown %}");
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("<!-- unknown directive: unknown -->");
    expect(html).toContain("Content");
  });
});

describe("nested directives", () => {
  test("renders hint inside tab", async () => {
    const content = `{% tabs %}
{% tab title="Info" %}
{% hint style="info" %}
Important information
{% endhint %}
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain('class="tabs-container"');
    expect(html).toContain('class="hint hint-info"');
    expect(html).toContain("<p>Important information</p>");
  });

  test("renders multiple hints in tabs", async () => {
    const content = `{% tabs %}
{% tab title="Warnings" %}
{% hint style="warning" %}Warning 1{% endhint %}
{% hint style="danger" %}Danger 1{% endhint %}
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    expect(html).toContain("hint-warning");
    expect(html).toContain("hint-danger");
  });
});

describe("complex documents", () => {
  test("renders document with mixed content", async () => {
    const content = `# Introduction

{% hint style="info" %}
Read this first!
{% endhint %}

Some text here.

{% tabs %}
{% tab title="JavaScript" %}
\`\`\`js
console.log('hello');
\`\`\`
{% endtab %}
{% tab title="Python" %}
\`\`\`python
print('hello')
\`\`\`
{% endtab %}
{% endtabs %}

{% stepper %}
{% step %}
Install dependencies
{% endstep %}
{% step %}
Run the code
{% endstep %}
{% endstepper %}`;

    const ast = parse(content);
    const html = await render(ast, { renderMarkdown: mockRenderMarkdown });

    // Check all directives are rendered
    expect(html).toContain("hint-info");
    expect(html).toContain("tabs-container");
    expect(html).toContain("JavaScript");
    expect(html).toContain("Python");
    expect(html).toContain("stepper-container");

    // Check text content is preserved
    expect(html).toContain("# Introduction");
    expect(html).toContain("Some text here.");
  });
});
