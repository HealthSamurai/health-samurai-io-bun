/**
 * Tokenizer Tests
 */

import { test, expect, describe } from "bun:test";
import { tokenize, isOpeningToken, isClosingToken } from "./tokenizer";

describe("tokenize", () => {
  test("returns empty array for empty content", () => {
    expect(tokenize("")).toEqual([]);
  });

  test("returns single text token for plain text", () => {
    const tokens = tokenize("Hello, world!");
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "text",
      value: "Hello, world!",
    });
  });

  test("parses simple opening directive", () => {
    const tokens = tokenize("{% hint %}");
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "hint",
    });
  });

  test("parses closing directive", () => {
    const tokens = tokenize("{% endhint %}");
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_close",
      name: "hint",
    });
  });

  test("parses self-closing directive", () => {
    const tokens = tokenize('{% embed url="https://example.com" / %}');
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_self_closing",
      name: "embed",
      attributes: { url: "https://example.com" },
    });
  });

  test("parses directive with attributes", () => {
    const tokens = tokenize('{% hint style="warning" %}');
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "hint",
      attributes: { style: "warning" },
    });
  });

  test("parses multiple attributes", () => {
    const tokens = tokenize('{% tab title="First Tab" id="tab1" %}');
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "tab",
      attributes: { title: "First Tab", id: "tab1" },
    });
  });

  test("parses attributes with single quotes", () => {
    const tokens = tokenize("{% hint style='info' %}");
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "hint",
      attributes: { style: "info" },
    });
  });

  test("handles text before and after directive", () => {
    const tokens = tokenize("Before {% hint %} After");
    expect(tokens).toHaveLength(3);
    expect(tokens[0]).toMatchObject({ type: "text", value: "Before " });
    expect(tokens[1]).toMatchObject({ type: "directive_open", name: "hint" });
    expect(tokens[2]).toMatchObject({ type: "text", value: " After" });
  });

  test("parses complete hint block", () => {
    const content = `{% hint style="info" %}
This is a hint message.
{% endhint %}`;

    const tokens = tokenize(content);
    expect(tokens).toHaveLength(3);
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "hint",
      attributes: { style: "info" },
    });
    expect(tokens[1]).toMatchObject({
      type: "text",
      value: "\nThis is a hint message.\n",
    });
    expect(tokens[2]).toMatchObject({
      type: "directive_close",
      name: "hint",
    });
  });

  test("parses nested directives", () => {
    const content = `{% tabs %}
{% tab title="Tab 1" %}
Content 1
{% endtab %}
{% endtabs %}`;

    const tokens = tokenize(content);
    expect(tokens).toHaveLength(7);
    expect(tokens[0]).toMatchObject({ type: "directive_open", name: "tabs" });
    expect(tokens[2]).toMatchObject({ type: "directive_open", name: "tab" });
    expect(tokens[4]).toMatchObject({ type: "directive_close", name: "tab" });
    expect(tokens[6]).toMatchObject({ type: "directive_close", name: "tabs" });
  });

  test("preserves position information", () => {
    const content = "Hello {% hint %} World";
    const tokens = tokenize(content);

    expect(tokens[0]?.start).toBe(0);
    expect(tokens[0]?.end).toBe(6);
    expect(tokens[1]?.start).toBe(6);
    expect(tokens[1]?.end).toBe(16);
    expect(tokens[2]?.start).toBe(16);
    expect(tokens[2]?.end).toBe(22);
  });

  test("handles whitespace in directive tags", () => {
    const tokens = tokenize("{%   hint   style=\"info\"   %}");
    expect(tokens[0]).toMatchObject({
      type: "directive_open",
      name: "hint",
      attributes: { style: "info" },
    });
  });
});

describe("isOpeningToken", () => {
  test("returns true for opening directive", () => {
    const token = tokenize("{% hint %}")[0]!;
    expect(isOpeningToken(token)).toBe(true);
  });

  test("returns true for opening directive with matching name", () => {
    const token = tokenize("{% hint %}")[0]!;
    expect(isOpeningToken(token, "hint")).toBe(true);
  });

  test("returns false for opening directive with wrong name", () => {
    const token = tokenize("{% hint %}")[0]!;
    expect(isOpeningToken(token, "tabs")).toBe(false);
  });

  test("returns false for closing directive", () => {
    const token = tokenize("{% endhint %}")[0]!;
    expect(isOpeningToken(token)).toBe(false);
  });

  test("returns false for text token", () => {
    const token = tokenize("Hello")[0]!;
    expect(isOpeningToken(token)).toBe(false);
  });
});

describe("isClosingToken", () => {
  test("returns true for closing directive", () => {
    const token = tokenize("{% endhint %}")[0]!;
    expect(isClosingToken(token)).toBe(true);
  });

  test("returns true for closing directive with matching name", () => {
    const token = tokenize("{% endhint %}")[0]!;
    expect(isClosingToken(token, "hint")).toBe(true);
  });

  test("returns false for closing directive with wrong name", () => {
    const token = tokenize("{% endhint %}")[0]!;
    expect(isClosingToken(token, "tabs")).toBe(false);
  });

  test("returns false for opening directive", () => {
    const token = tokenize("{% hint %}")[0]!;
    expect(isClosingToken(token)).toBe(false);
  });
});
