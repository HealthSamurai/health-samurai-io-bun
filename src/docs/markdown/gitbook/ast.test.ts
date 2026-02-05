/**
 * AST Builder Tests
 */

import { test, expect, describe } from "bun:test";
import { parse, walk, findDirectives, getTextContent } from "./ast";

describe("parse", () => {
  test("parses plain text", () => {
    const ast = parse("Hello, world!");
    expect(ast.type).toBe("root");
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]).toMatchObject({
      type: "text",
      value: "Hello, world!",
    });
  });

  test("parses simple directive", () => {
    const ast = parse("{% hint %}Content{% endhint %}");
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]).toMatchObject({
      type: "directive",
      name: "hint",
    });

    const hint = ast.children[0] as { children: any[] };
    expect(hint.children).toHaveLength(1);
    expect(hint.children[0]).toMatchObject({
      type: "text",
      value: "Content",
    });
  });

  test("parses directive with attributes", () => {
    const ast = parse('{% hint style="warning" %}Alert!{% endhint %}');
    const hint = ast.children[0] as { name: string; attributes: any };
    expect(hint.name).toBe("hint");
    expect(hint.attributes).toEqual({ style: "warning" });
  });

  test("parses nested directives", () => {
    const content = `{% tabs %}
{% tab title="Tab 1" %}
Content 1
{% endtab %}
{% tab title="Tab 2" %}
Content 2
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    expect(ast.children).toHaveLength(1);

    const tabs = ast.children[0] as { name: string; children: any[] };
    expect(tabs.name).toBe("tabs");

    // Filter out text nodes (whitespace between tabs)
    const tabNodes = tabs.children.filter((c) => c.type === "directive");
    expect(tabNodes).toHaveLength(2);
    expect(tabNodes[0].name).toBe("tab");
    expect(tabNodes[0].attributes).toEqual({ title: "Tab 1" });
    expect(tabNodes[1].name).toBe("tab");
    expect(tabNodes[1].attributes).toEqual({ title: "Tab 2" });
  });

  test("parses deeply nested directives", () => {
    const content = `{% tabs %}
{% tab title="Examples" %}
{% hint style="info" %}
This is inside a tab
{% endhint %}
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const tabs = ast.children[0] as { children: any[] };
    const tabNodes = tabs.children.filter((c) => c.type === "directive");
    const tab = tabNodes[0] as { children: any[] };
    const hintNodes = tab.children.filter((c) => c.type === "directive");
    expect(hintNodes).toHaveLength(1);
    expect(hintNodes[0].name).toBe("hint");
  });

  test("parses self-closing directive", () => {
    const ast = parse('{% embed url="https://youtube.com/watch?v=123" / %}');
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]).toMatchObject({
      type: "directive",
      name: "embed",
      attributes: { url: "https://youtube.com/watch?v=123" },
      children: [],
    });
  });

  test("handles text before and after directives", () => {
    const ast = parse("Before {% hint %}Inside{% endhint %} After");
    expect(ast.children).toHaveLength(3);
    expect(ast.children[0]).toMatchObject({ type: "text", value: "Before " });
    expect(ast.children[1]).toMatchObject({ type: "directive", name: "hint" });
    expect(ast.children[2]).toMatchObject({ type: "text", value: " After" });
  });

  test("handles multiple sibling directives", () => {
    const content = `{% hint style="info" %}Info{% endhint %}
{% hint style="warning" %}Warning{% endhint %}`;

    const ast = parse(content);
    const hints = ast.children.filter((c) => c.type === "directive");
    expect(hints).toHaveLength(2);
  });

  test("preserves position information", () => {
    const content = "{% hint %}Content{% endhint %}";
    const ast = parse(content);
    const hint = ast.children[0] as { start: number; end: number };
    expect(hint.start).toBe(0);
    expect(hint.end).toBe(content.length);
  });

  test("handles content-ref directive", () => {
    const content = `{% content-ref url="getting-started.md" %}
[Getting Started](getting-started.md)
{% endcontent-ref %}`;

    const ast = parse(content);
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]).toMatchObject({
      type: "directive",
      name: "content-ref",
      attributes: { url: "getting-started.md" },
    });
  });

  test("handles stepper directive", () => {
    const content = `{% stepper %}
{% step %}
First step content
{% endstep %}
{% step %}
Second step content
{% endstep %}
{% endstepper %}`;

    const ast = parse(content);
    const stepper = ast.children[0] as { children: any[] };
    expect(stepper).toMatchObject({ type: "directive", name: "stepper" });

    const steps = stepper.children.filter((c) => c.type === "directive");
    expect(steps).toHaveLength(2);
    expect(steps[0].name).toBe("step");
    expect(steps[1].name).toBe("step");
  });

  test("handles code directive with title", () => {
    const content = `{% code title="example.ts" %}
\`\`\`typescript
const x = 1;
\`\`\`
{% endcode %}`;

    const ast = parse(content);
    expect(ast.children).toHaveLength(1);
    expect(ast.children[0]).toMatchObject({
      type: "directive",
      name: "code",
      attributes: { title: "example.ts" },
    });
  });
});

describe("walk", () => {
  test("visits all nodes", () => {
    const ast = parse("{% hint %}Content{% endhint %}");
    const visited: string[] = [];

    walk(ast, {
      enter: (node) => visited.push(`enter:${node.type}`),
      leave: (node) => visited.push(`leave:${node.type}`),
    });

    expect(visited).toEqual([
      "enter:root",
      "enter:directive",
      "enter:text",
      "leave:text",
      "leave:directive",
      "leave:root",
    ]);
  });

  test("calls text visitor", () => {
    const ast = parse("Hello {% hint %}World{% endhint %}");
    const texts: string[] = [];

    walk(ast, {
      text: (node) => texts.push(node.value),
    });

    expect(texts).toEqual(["Hello ", "World"]);
  });

  test("calls directive visitor", () => {
    const ast = parse('{% hint style="info" %}Content{% endhint %}');
    const directives: string[] = [];

    walk(ast, {
      directive: (node) => directives.push(node.name),
    });

    expect(directives).toEqual(["hint"]);
  });

  test("visits nested directives in order", () => {
    const content = `{% tabs %}
{% tab title="A" %}{% endtab %}
{% tab title="B" %}{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const names: string[] = [];

    walk(ast, {
      directive: (node) => names.push(node.name),
    });

    expect(names).toEqual(["tabs", "tab", "tab"]);
  });
});

describe("findDirectives", () => {
  test("finds all directives by name", () => {
    const content = `{% hint style="info" %}Info{% endhint %}
{% hint style="warning" %}Warning{% endhint %}
{% tabs %}{% endtabs %}`;

    const ast = parse(content);
    const hints = findDirectives(ast, "hint");

    expect(hints).toHaveLength(2);
    expect(hints[0]?.attributes?.style).toBe("info");
    expect(hints[1]?.attributes?.style).toBe("warning");
  });

  test("finds nested directives", () => {
    const content = `{% tabs %}
{% tab title="A" %}
{% hint style="info" %}Nested hint{% endhint %}
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const hints = findDirectives(ast, "hint");

    expect(hints).toHaveLength(1);
    expect(hints[0]?.attributes?.style).toBe("info");
  });

  test("returns empty array when no matches", () => {
    const ast = parse("{% tabs %}{% endtabs %}");
    const hints = findDirectives(ast, "hint");
    expect(hints).toEqual([]);
  });
});

describe("getTextContent", () => {
  test("returns value for text node", () => {
    const ast = parse("Hello, world!");
    const firstChild = ast.children[0];
    expect(firstChild).toBeDefined();
    const text = getTextContent(firstChild!);
    expect(text).toBe("Hello, world!");
  });

  test("returns concatenated text from directive", () => {
    const ast = parse("{% hint %}Hello World{% endhint %}");
    const firstChild = ast.children[0];
    expect(firstChild).toBeDefined();
    const content = getTextContent(firstChild!);
    expect(content).toBe("Hello World");
  });

  test("returns concatenated text from nested directives", () => {
    const content = `{% tabs %}
{% tab title="A" %}
First content
{% endtab %}
{% tab title="B" %}
Second content
{% endtab %}
{% endtabs %}`;

    const ast = parse(content);
    const text = getTextContent(ast);

    expect(text).toContain("First content");
    expect(text).toContain("Second content");
  });

  test("returns concatenated text from root", () => {
    const ast = parse("Hello {% hint %}World{% endhint %}!");
    const text = getTextContent(ast);
    expect(text).toContain("Hello");
    expect(text).toContain("World");
    expect(text).toContain("!");
  });
});

describe("error handling", () => {
  test("handles unclosed directive gracefully", () => {
    // Should not throw, just log warning
    const ast = parse("{% hint %}Content without closing");
    expect(ast.type).toBe("root");
    expect(ast.children.length).toBeGreaterThan(0);
  });

  test("handles mismatched closing tag", () => {
    // Should not throw, just log warning
    const ast = parse("{% hint %}Content{% endtabs %}");
    expect(ast.type).toBe("root");
  });

  test("handles unexpected closing tag", () => {
    // Should not throw, just log warning
    const ast = parse("{% endhint %}");
    expect(ast.type).toBe("root");
  });

  test("handles empty content", () => {
    const ast = parse("");
    expect(ast.type).toBe("root");
    expect(ast.children).toHaveLength(0);
  });
});
