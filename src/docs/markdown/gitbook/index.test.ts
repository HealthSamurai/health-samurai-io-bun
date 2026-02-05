/**
 * Integration Tests for GitBook Directive Processor
 */

import { test, expect, describe } from "bun:test";
import {
  processGitBookDirectives,
  hasGitBookDirectives,
  SUPPORTED_DIRECTIVES,
} from "./index";

// Simple markdown renderer for tests
const mockRenderMarkdown = async (content: string): Promise<string> => {
  const trimmed = content.trim();
  if (!trimmed) return "";
  // Convert basic markdown-like content
  return `<p>${trimmed}</p>`;
};

describe("processGitBookDirectives", () => {
  test("returns content as-is when no directives", async () => {
    const content = "# Hello World\n\nThis is plain markdown.";
    const result = await processGitBookDirectives(content, mockRenderMarkdown);
    expect(result).toBe(content);
  });

  test("processes hint directive", async () => {
    const content = '{% hint style="info" %}Important note{% endhint %}';
    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("hint-info");
    expect(result).toContain("<p>Important note</p>");
  });

  test("processes tabs directive", async () => {
    const content = `{% tabs %}
{% tab title="Tab A" %}Content A{% endtab %}
{% tab title="Tab B" %}Content B{% endtab %}
{% endtabs %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("tabs-container");
    expect(result).toContain("Tab A");
    expect(result).toContain("Tab B");
  });

  test("processes stepper directive", async () => {
    const content = `{% stepper %}
{% step %}Step 1{% endstep %}
{% step %}Step 2{% endstep %}
{% endstepper %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("stepper-container");
    expect(result).toContain(">1<");
    expect(result).toContain(">2<");
  });

  test("processes embed directive", async () => {
    const content = '{% embed url="https://youtube.com/watch?v=abc123" / %}';
    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("iframe");
    expect(result).toContain("youtube.com/embed/abc123");
  });

  test("processes file directive", async () => {
    const content = '{% file src="/docs/guide.pdf" / %}';
    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("file-widget");
    expect(result).toContain("guide.pdf");
  });

  test("processes content-ref directive", async () => {
    const content = `{% content-ref url="intro.md" %}
[Introduction](intro.md)
{% endcontent-ref %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("big-link");
  });

  test("processes code directive with title", async () => {
    const content = `{% code title="config.yaml" %}
\`\`\`yaml
key: value
\`\`\`
{% endcode %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("code-block-wrapper");
    expect(result).toContain("config.yaml");
  });

  test("preserves text around directives", async () => {
    const content = `# Title

Some intro text.

{% hint style="info" %}Note{% endhint %}

More text after.`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("# Title");
    expect(result).toContain("Some intro text.");
    expect(result).toContain("hint-info");
    expect(result).toContain("More text after.");
  });

  test("handles nested directives", async () => {
    const content = `{% tabs %}
{% tab title="Example" %}
{% hint style="warning" %}
Nested warning
{% endhint %}
{% endtab %}
{% endtabs %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("tabs-container");
    expect(result).toContain("hint-warning");
    expect(result).toContain("<p>Nested warning</p>");
  });

  test("handles multiple directives", async () => {
    const content = `{% hint style="info" %}First{% endhint %}

{% hint style="warning" %}Second{% endhint %}

{% hint style="danger" %}Third{% endhint %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("hint-info");
    expect(result).toContain("hint-warning");
    expect(result).toContain("hint-danger");
  });
});

describe("hasGitBookDirectives", () => {
  test("returns false for plain content", () => {
    expect(hasGitBookDirectives("Hello world")).toBe(false);
    expect(hasGitBookDirectives("# Markdown heading")).toBe(false);
    expect(hasGitBookDirectives("")).toBe(false);
  });

  test("returns true when directive present", () => {
    expect(hasGitBookDirectives("{% hint %}")).toBe(true);
    expect(hasGitBookDirectives("Before {% tabs %} after")).toBe(true);
    expect(hasGitBookDirectives("{% embed / %}")).toBe(true);
  });

  test("returns true for any {% pattern", () => {
    expect(hasGitBookDirectives("{% anything %}")).toBe(true);
  });
});

describe("SUPPORTED_DIRECTIVES", () => {
  test("includes expected directives", () => {
    expect(SUPPORTED_DIRECTIVES).toContain("hint");
    expect(SUPPORTED_DIRECTIVES).toContain("tabs");
    expect(SUPPORTED_DIRECTIVES).toContain("tab");
    expect(SUPPORTED_DIRECTIVES).toContain("stepper");
    expect(SUPPORTED_DIRECTIVES).toContain("step");
    expect(SUPPORTED_DIRECTIVES).toContain("code");
    expect(SUPPORTED_DIRECTIVES).toContain("embed");
    expect(SUPPORTED_DIRECTIVES).toContain("content-ref");
    expect(SUPPORTED_DIRECTIVES).toContain("file");
  });

  test("is readonly array", () => {
    expect(Array.isArray(SUPPORTED_DIRECTIVES)).toBe(true);
    expect(SUPPORTED_DIRECTIVES.length).toBe(9);
  });
});

describe("real-world examples", () => {
  test("FHIRbase-style documentation", async () => {
    const content = `# Getting Started with FHIRbase

{% hint style="info" %}
FHIRbase requires PostgreSQL 14 or higher.
{% endhint %}

## Installation

{% tabs %}
{% tab title="Docker" %}
\`\`\`bash
docker pull healthsamurai/fhirbase
\`\`\`
{% endtab %}
{% tab title="Binary" %}
Download from releases page.
{% endtab %}
{% endtabs %}

## Quick Start

{% stepper %}
{% step %}
Create database:
\`\`\`sql
CREATE DATABASE fhirbase;
\`\`\`
{% endstep %}
{% step %}
Initialize schema:
\`\`\`bash
fhirbase init
\`\`\`
{% endstep %}
{% endstepper %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    // Check all elements are present
    expect(result).toContain("Getting Started");
    expect(result).toContain("hint-info");
    expect(result).toContain("tabs-container");
    expect(result).toContain("Docker");
    expect(result).toContain("Binary");
    expect(result).toContain("stepper-container");
    expect(result).toContain(">1<");
    expect(result).toContain(">2<");
  });

  test("Aidbox-style documentation with embeds", async () => {
    const content = `# Aidbox Overview

Watch the introduction video:

{% embed url="https://www.youtube.com/watch?v=example123" / %}

## Resources

{% file src="/downloads/aidbox-starter.zip" / %}

{% content-ref url="quickstart.md" %}
[Quick Start Guide](quickstart.md)
{% endcontent-ref %}`;

    const result = await processGitBookDirectives(content, mockRenderMarkdown);

    expect(result).toContain("youtube.com/embed");
    expect(result).toContain("file-widget");
    expect(result).toContain("big-link");
  });
});
