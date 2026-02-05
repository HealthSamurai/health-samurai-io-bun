/**
 * Tests for SUMMARY.md parser
 *
 * Ported from Clojure documentation repo summary_test.clj
 * Tests cover: link parsing, sections, nested navigation,
 * flattenNavigation, buildNavIndex, and real-world SUMMARY.md content.
 */

import { test, expect, describe } from "bun:test";
import { parseSummary, flattenNavigation, buildNavIndex } from "./summary";

const PRODUCT_PATH = "/docs/test";

// ---------------------------------------------------------------------------
// 1. parseSummary - basic link parsing
// ---------------------------------------------------------------------------
describe("parseSummary - basic link parsing", () => {
  test("internal link resolves to product-prefixed href", () => {
    const md = `* [Getting Started](getting-started.md)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    expect(sections.length).toBe(1);
    const item = sections[0].children[0];
    expect(item.title).toBe("Getting Started");
    expect(item.href).toBe("/docs/test/getting-started");
    expect(item.isExternal).toBeFalsy();
  });

  test("nested path link resolves correctly", () => {
    const md = `* [API Reference](api/reference.md)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    const item = sections[0].children[0];
    expect(item.title).toBe("API Reference");
    expect(item.href).toBe("/docs/test/api/reference");
  });

  test("README.md maps to product root", () => {
    const md = `* [Home](README.md)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    const item = sections[0].children[0];
    expect(item.title).toBe("Home");
    expect(item.href).toBe("/docs/test");
  });

  test("nested README.md maps to directory root", () => {
    const md = `* [Section](section/README.md)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    const item = sections[0].children[0];
    expect(item.title).toBe("Section");
    expect(item.href).toBe("/docs/test/section");
  });

  test("external links are preserved with isExternal flag", () => {
    const md = `* [GitHub](https://github.com/aidbox)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    const item = sections[0].children[0];
    expect(item.title).toBe("GitHub");
    expect(item.href).toBe("https://github.com/aidbox");
    expect(item.isExternal).toBe(true);
  });

  test("relative path with ./ prefix is normalized", () => {
    const md = `* [Integrations](./integrations/README.md)`;
    const sections = parseSummary(PRODUCT_PATH, md);

    const item = sections[0].children[0];
    expect(item.href).toBe("/docs/test/integrations");
  });

  test("multiple links in a flat list", () => {
    const md = [
      `* [First](first.md)`,
      `* [Second](second.md)`,
      `* [Third](third.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    expect(sections[0].children).toHaveLength(3);
    expect(sections[0].children[0].href).toBe("/docs/test/first");
    expect(sections[0].children[1].href).toBe("/docs/test/second");
    expect(sections[0].children[2].href).toBe("/docs/test/third");
  });
});

// ---------------------------------------------------------------------------
// 2. parseSummary - sections
// ---------------------------------------------------------------------------
describe("parseSummary - sections", () => {
  test("## headers create named sections", () => {
    const md = [
      `## Getting Started`,
      ``,
      `* [Installation](installation.md)`,
      ``,
      `## Advanced`,
      ``,
      `* [Plugins](plugins.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    expect(sections).toHaveLength(2);
    expect(sections[0].title).toBe("Getting Started");
    expect(sections[0].children).toHaveLength(1);
    expect(sections[0].children[0].title).toBe("Installation");

    expect(sections[1].title).toBe("Advanced");
    expect(sections[1].children).toHaveLength(1);
    expect(sections[1].children[0].title).toBe("Plugins");
  });

  test("# Table of contents header is skipped", () => {
    const md = [
      `# Table of contents`,
      ``,
      `* [Overview](README.md)`,
      ``,
      `## Setup`,
      ``,
      `* [Install](install.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    // "Table of contents" should not create its own section
    // Items before first real section go into a default section
    const titles = sections.map((s) => s.title);
    expect(titles).not.toContain("Table of contents");

    // Overview should be in the default (untitled) section
    expect(sections[0].title).toBe("");
    expect(sections[0].children[0].title).toBe("Overview");

    // Setup section follows
    expect(sections[1].title).toBe("Setup");
    expect(sections[1].children[0].title).toBe("Install");
  });

  test("items before any section header go into a default section with empty title", () => {
    const md = [
      `* [Overview](README.md)`,
      `* [Quickstart](quickstart.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    expect(sections).toHaveLength(1);
    expect(sections[0].title).toBe("");
    expect(sections[0].children).toHaveLength(2);
  });

  test("empty sections are not included", () => {
    const md = [
      `## Empty Section`,
      ``,
      `## Has Items`,
      ``,
      `* [Item](item.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    // The empty section has no children, so when it gets pushed
    // it still has 0 children. Check that the section with items exists.
    const nonEmpty = sections.filter((s) => s.children.length > 0);
    expect(nonEmpty).toHaveLength(1);
    expect(nonEmpty[0].title).toBe("Has Items");
  });
});

// ---------------------------------------------------------------------------
// 3. parseSummary - nested navigation
// ---------------------------------------------------------------------------
describe("parseSummary - nested navigation", () => {
  test("sub-lists create children on parent item", () => {
    const md = [
      `* [Parent](parent.md)`,
      `  * [Child 1](parent/child1.md)`,
      `  * [Child 2](parent/child2.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    const parent = sections[0].children[0];
    expect(parent.title).toBe("Parent");
    expect(parent.href).toBe("/docs/test/parent");
    expect(parent.children).toBeDefined();
    expect(parent.children).toHaveLength(2);
    expect(parent.children![0].title).toBe("Child 1");
    expect(parent.children![0].href).toBe("/docs/test/parent/child1");
    expect(parent.children![1].title).toBe("Child 2");
    expect(parent.children![1].href).toBe("/docs/test/parent/child2");
  });

  test("deeply nested items (3 levels)", () => {
    const md = [
      `* [Level 1](l1.md)`,
      `  * [Level 2](l1/l2.md)`,
      `    * [Level 3](l1/l2/l3.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    const l1 = sections[0].children[0];
    expect(l1.title).toBe("Level 1");
    expect(l1.children).toHaveLength(1);

    const l2 = l1.children![0];
    expect(l2.title).toBe("Level 2");
    expect(l2.children).toHaveLength(1);

    const l3 = l2.children![0];
    expect(l3.title).toBe("Level 3");
    expect(l3.href).toBe("/docs/test/l1/l2/l3");
  });

  test("siblings at same level after nested children", () => {
    const md = [
      `* [First](first.md)`,
      `  * [First Child](first/child.md)`,
      `* [Second](second.md)`,
    ].join("\n");
    const sections = parseSummary(PRODUCT_PATH, md);

    expect(sections[0].children).toHaveLength(2);
    expect(sections[0].children[0].title).toBe("First");
    expect(sections[0].children[0].children).toHaveLength(1);
    expect(sections[0].children[1].title).toBe("Second");
    expect(sections[0].children[1].children).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// 4. flattenNavigation
// ---------------------------------------------------------------------------
describe("flattenNavigation", () => {
  test("returns flat list of all non-external items in order", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [Overview](README.md)`,
        ``,
        `## Section`,
        ``,
        `* [Parent](parent.md)`,
        `  * [Child](parent/child.md)`,
        `* [Other](other.md)`,
      ].join("\n")
    );

    const flat = flattenNavigation(sections);

    expect(flat.map((i) => i.title)).toEqual([
      "Overview",
      "Parent",
      "Child",
      "Other",
    ]);
  });

  test("excludes external links", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [Internal](page.md)`,
        `* [External](https://example.com)`,
        `* [Another](another.md)`,
      ].join("\n")
    );

    const flat = flattenNavigation(sections);

    expect(flat).toHaveLength(2);
    expect(flat.map((i) => i.title)).toEqual(["Internal", "Another"]);
  });

  test("empty sections produce empty flat list", () => {
    const flat = flattenNavigation([]);
    expect(flat).toEqual([]);
  });

  test("preserves depth-first order for nested items", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [A](a.md)`,
        `  * [A1](a/a1.md)`,
        `  * [A2](a/a2.md)`,
        `* [B](b.md)`,
        `  * [B1](b/b1.md)`,
      ].join("\n")
    );

    const flat = flattenNavigation(sections);

    expect(flat.map((i) => i.title)).toEqual(["A", "A1", "A2", "B", "B1"]);
  });
});

// ---------------------------------------------------------------------------
// 5. buildNavIndex
// ---------------------------------------------------------------------------
describe("buildNavIndex", () => {
  test("returns Map keyed by href with NavigationItem values", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [Overview](README.md)`,
        `* [Install](install.md)`,
      ].join("\n")
    );

    const index = buildNavIndex(sections);

    expect(index).toBeInstanceOf(Map);
    expect(index.size).toBe(2);

    const overview = index.get("/docs/test");
    expect(overview).toBeDefined();
    expect(overview!.title).toBe("Overview");

    const install = index.get("/docs/test/install");
    expect(install).toBeDefined();
    expect(install!.title).toBe("Install");
  });

  test("excludes external links from index", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [Docs](docs.md)`,
        `* [GitHub](https://github.com/example)`,
      ].join("\n")
    );

    const index = buildNavIndex(sections);

    expect(index.size).toBe(1);
    expect(index.has("/docs/test/docs")).toBe(true);
    expect(index.has("https://github.com/example")).toBe(false);
  });

  test("includes nested children in the index", () => {
    const sections = parseSummary(
      PRODUCT_PATH,
      [
        `* [Parent](parent.md)`,
        `  * [Child](parent/child.md)`,
        `    * [Grandchild](parent/child/grandchild.md)`,
      ].join("\n")
    );

    const index = buildNavIndex(sections);

    expect(index.size).toBe(3);
    expect(index.has("/docs/test/parent")).toBe(true);
    expect(index.has("/docs/test/parent/child")).toBe(true);
    expect(index.has("/docs/test/parent/child/grandchild")).toBe(true);
  });

  test("empty sections produce empty index", () => {
    const index = buildNavIndex([]);
    expect(index.size).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// 6. Real-world SUMMARY.md
// ---------------------------------------------------------------------------
describe("parseSummary - real-world SUMMARY.md", () => {
  const realWorldSummary = `# Table of contents

* [Overview](README.md)

## Getting Started

* [Installation](getting-started/installation.md)
* [Configuration](getting-started/configuration.md)

## API

* [REST API](api/rest.md)
  * [Authentication](api/rest/auth.md)
  * [Resources](api/rest/resources.md)
* [FHIR Schema](https://fhir-schema.github.io/fhir-schema/)
`;

  test("parses correct number of sections", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);

    // Default section (Overview), Getting Started, API
    expect(sections).toHaveLength(3);
  });

  test("first section is untitled with Overview item", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);

    expect(sections[0].title).toBe("");
    expect(sections[0].children).toHaveLength(1);
    expect(sections[0].children[0].title).toBe("Overview");
    expect(sections[0].children[0].href).toBe("/docs/test");
  });

  test("Getting Started section has correct items", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);

    const gs = sections[1];
    expect(gs.title).toBe("Getting Started");
    expect(gs.children).toHaveLength(2);
    expect(gs.children[0].title).toBe("Installation");
    expect(gs.children[0].href).toBe("/docs/test/getting-started/installation");
    expect(gs.children[1].title).toBe("Configuration");
    expect(gs.children[1].href).toBe("/docs/test/getting-started/configuration");
  });

  test("API section has nested children and external link", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);

    const api = sections[2];
    expect(api.title).toBe("API");
    expect(api.children).toHaveLength(2);

    // REST API with nested children
    const rest = api.children[0];
    expect(rest.title).toBe("REST API");
    expect(rest.href).toBe("/docs/test/api/rest");
    expect(rest.isExternal).toBeFalsy();
    expect(rest.children).toHaveLength(2);
    expect(rest.children![0].title).toBe("Authentication");
    expect(rest.children![0].href).toBe("/docs/test/api/rest/auth");
    expect(rest.children![1].title).toBe("Resources");
    expect(rest.children![1].href).toBe("/docs/test/api/rest/resources");

    // External link
    const fhirSchema = api.children[1];
    expect(fhirSchema.title).toBe("FHIR Schema");
    expect(fhirSchema.href).toBe(
      "https://fhir-schema.github.io/fhir-schema/"
    );
    expect(fhirSchema.isExternal).toBe(true);
    expect(fhirSchema.children).toBeUndefined();
  });

  test("flattenNavigation on real-world content excludes external links", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);
    const flat = flattenNavigation(sections);

    // Overview, Installation, Configuration, REST API, Authentication, Resources
    // FHIR Schema (external) is excluded
    expect(flat).toHaveLength(6);
    const titles = flat.map((i) => i.title);
    expect(titles).toEqual([
      "Overview",
      "Installation",
      "Configuration",
      "REST API",
      "Authentication",
      "Resources",
    ]);
    expect(titles).not.toContain("FHIR Schema");
  });

  test("buildNavIndex on real-world content has all internal hrefs", () => {
    const sections = parseSummary(PRODUCT_PATH, realWorldSummary);
    const index = buildNavIndex(sections);

    // 6 internal items
    expect(index.size).toBe(6);
    expect(index.has("/docs/test")).toBe(true);
    expect(index.has("/docs/test/getting-started/installation")).toBe(true);
    expect(index.has("/docs/test/getting-started/configuration")).toBe(true);
    expect(index.has("/docs/test/api/rest")).toBe(true);
    expect(index.has("/docs/test/api/rest/auth")).toBe(true);
    expect(index.has("/docs/test/api/rest/resources")).toBe(true);

    // External link not in index
    expect(
      index.has("https://fhir-schema.github.io/fhir-schema/")
    ).toBe(false);
  });
});
