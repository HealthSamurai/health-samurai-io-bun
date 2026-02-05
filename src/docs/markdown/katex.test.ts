/**
 * KaTeX Math Rendering Tests
 *
 * Ported from the Clojure documentation repo's core_test.clj.
 * Tests LaTeX formula detection, FHIR operation exclusion,
 * mixed content handling, display math, code block exclusion,
 * and the hasKaTeX helper.
 */

import { test, expect, describe } from "bun:test";
import { processKaTeX, hasKaTeX } from "./katex";

// ---------------------------------------------------------------------------
// Helper to count non-overlapping occurrences of a substring
// ---------------------------------------------------------------------------
function countOccurrences(haystack: string, needle: string): number {
  let count = 0;
  let pos = 0;
  while ((pos = haystack.indexOf(needle, pos)) !== -1) {
    count++;
    pos += needle.length;
  }
  return count;
}

// ---------------------------------------------------------------------------
// 1. LaTeX formulas should be detected and rendered
//    (formula-latex-detection-test)
// ---------------------------------------------------------------------------
describe("LaTeX formula detection", () => {
  test("renders inequality: $r \\le s$", () => {
    const result = processKaTeX("$r \\le s$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders set relation: $(s, S) \\supset (r, R)$", () => {
    const result = processKaTeX("$(s, S) \\supset (r, R)$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders parenthesized expression: $(s, S)$", () => {
    const result = processKaTeX("$(s, S)$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders superscript: $x^2$", () => {
    const result = processKaTeX("$x^2$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders subscript: $a_i$", () => {
    const result = processKaTeX("$a_i$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders braces in subscript: $x_{max}$", () => {
    const result = processKaTeX("$x_{max}$");
    expect(result).toContain('class="katex-inline"');
  });

  test("renders formula embedded in a sentence", () => {
    const result = processKaTeX(
      "When $r \\le s$ then we know the condition holds."
    );
    expect(result).toContain('class="katex-inline"');
    expect(result).toContain("When");
    expect(result).toContain("then we know the condition holds.");
  });
});

// ---------------------------------------------------------------------------
// 2. FHIR operations should NOT be rendered as LaTeX
//    (fhir-operations-not-latex-test)
// ---------------------------------------------------------------------------
describe("FHIR operations not treated as LaTeX", () => {
  const fhirOperations = [
    "$export",
    "$import",
    "$everything",
    "$dump",
    "$load",
  ];

  for (const op of fhirOperations) {
    test(`${op} is not rendered as LaTeX`, () => {
      const result = processKaTeX(op);
      expect(result).not.toContain('class="katex-inline"');
      // The text should still be present (minus the leading $)
      expect(result).toContain(op.slice(1));
    });
  }

  test("FHIR operation in a sentence is not rendered", () => {
    const result = processKaTeX(
      "Use the $export operation to export data."
    );
    expect(result).not.toContain('class="katex-inline"');
    expect(result).toContain("export");
  });

  test("FHIR operation at end of sentence is not rendered", () => {
    const result = processKaTeX("Call $everything");
    expect(result).not.toContain('class="katex-inline"');
    expect(result).toContain("everything");
  });

  test("$meta in surrounding text is not rendered as LaTeX", () => {
    const result = processKaTeX("Text with $meta here");
    expect(result).not.toContain('class="katex-inline"');
  });

  test("$meta-add in surrounding text is not rendered as LaTeX", () => {
    const result = processKaTeX("Use $meta-add operation");
    expect(result).not.toContain('class="katex-inline"');
  });

  test("$meta-delete in surrounding text is not rendered as LaTeX", () => {
    const result = processKaTeX("The $meta-delete endpoint");
    expect(result).not.toContain('class="katex-inline"');
  });

  test("markdown link with $meta is not rendered as LaTeX", () => {
    const result = processKaTeX("See [$meta](rest-api/other/meta.md)");
    expect(result).not.toContain('class="katex-inline"');
    expect(result).toContain("$meta");
  });

  test("multiple $meta links do not create false positive math", () => {
    const result = processKaTeX(
      "Use [$meta](rest-api/other/meta.md) and [$meta-add](rest-api/other/meta-add.md)"
    );
    expect(result).not.toContain('class="katex-inline"');
    expect(result).toContain("$meta");
    expect(result).toContain("$meta-add");
  });
});

// ---------------------------------------------------------------------------
// 3. Mixed content
//    (mixed-content-test)
// ---------------------------------------------------------------------------
describe("mixed content", () => {
  test("code-fenced FHIR op preserved, formula rendered", () => {
    const input = "Use `$export` to get data. The formula $r \\le s$ holds.";
    const result = processKaTeX(input);
    // The code-fenced $export must stay as-is (inside backticks)
    expect(result).toContain("`$export`");
    // The formula should be rendered
    expect(result).toContain('class="katex-inline"');
  });

  test("multiple formulas in same paragraph are all rendered", () => {
    const input =
      "Given $x^2$ and $a_i$ we derive $x_{max}$.";
    const result = processKaTeX(input);
    const count = countOccurrences(result, 'class="katex-inline"');
    expect(count).toBe(3);
  });

  test("multiple FHIR operations are none rendered as math", () => {
    const input =
      "Endpoints: $export, $import, $everything are all available.";
    const result = processKaTeX(input);
    expect(result).not.toContain('class="katex-inline"');
  });

  test("formula next to plain text dollar amounts is handled", () => {
    // A lone $ without a closing $ should not break anything
    const input = "Price is $ 100 but $x^2$ is math.";
    const result = processKaTeX(input);
    // The formula should still be rendered
    expect(result).toContain('class="katex-inline"');
    // The lone dollar sign should remain
    expect(result).toContain("Price is $");
  });
});

// ---------------------------------------------------------------------------
// 4. Display math ($$...$$)
// ---------------------------------------------------------------------------
describe("display math", () => {
  test("renders simple display math", () => {
    const result = processKaTeX("$$x^2 + y^2 = z^2$$");
    expect(result).toContain('class="katex-display"');
  });

  test("renders multiline display math", () => {
    const input = `$$
x^2 + y^2 = z^2
$$`;
    const result = processKaTeX(input);
    expect(result).toContain('class="katex-display"');
  });

  test("renders multiline display math with aligned environment", () => {
    const input = `$$
\\begin{aligned}
  a &= b + c \\\\
  d &= e + f
\\end{aligned}
$$`;
    const result = processKaTeX(input);
    expect(result).toContain('class="katex-display"');
  });

  test("display math should not appear inside fenced code block", () => {
    const input = "```\n$$x^2$$\n```";
    const result = processKaTeX(input);
    expect(result).not.toContain('class="katex-display"');
    // The original code block content should be preserved
    expect(result).toContain("$$x^2$$");
  });

  test("display math and inline math in same document", () => {
    const input = `Inline: $a + b$

$$
c^2 = a^2 + b^2
$$

More inline: $x_i$`;
    const result = processKaTeX(input);
    expect(result).toContain('class="katex-display"');
    expect(countOccurrences(result, 'class="katex-inline"')).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// 5. Code block exclusion
// ---------------------------------------------------------------------------
describe("code block exclusion", () => {
  test("inline code with dollar signs is not processed", () => {
    const input = "Use `$variable` in your code.";
    const result = processKaTeX(input);
    expect(result).not.toContain('class="katex-inline"');
    expect(result).toContain("`$variable`");
  });

  test("fenced code block with math expressions is not processed", () => {
    const input = "```\nlet price = $100;\nlet tax = $20;\n```";
    const result = processKaTeX(input);
    expect(result).not.toContain('class="katex-inline"');
    expect(result).not.toContain('class="katex-display"');
  });

  test("fenced code block with language tag is not processed", () => {
    const input = '```python\nresult = "$x^2$"\n```';
    const result = processKaTeX(input);
    expect(result).not.toContain('class="katex-inline"');
  });

  test("math before and after code block is still processed", () => {
    const input = `Formula $x^2$ here.

\`\`\`
$not_math$
\`\`\`

Another $a_i$ formula.`;
    const result = processKaTeX(input);
    expect(countOccurrences(result, 'class="katex-inline"')).toBe(2);
    // The code block content should be untouched
    expect(result).toContain("$not_math$");
  });

  test("inline code between two formulas", () => {
    const input = "$x^2$ then `$code$` then $a_i$";
    const result = processKaTeX(input);
    expect(countOccurrences(result, 'class="katex-inline"')).toBe(2);
    expect(result).toContain("`$code$`");
  });
});

// ---------------------------------------------------------------------------
// 6. hasKaTeX function
// ---------------------------------------------------------------------------
describe("hasKaTeX", () => {
  test("returns true for content containing $", () => {
    expect(hasKaTeX("The formula $x^2$ is important")).toBe(true);
  });

  test("returns true for content with display math $$", () => {
    expect(hasKaTeX("$$a + b$$")).toBe(true);
  });

  test("returns true for FHIR operations (contains $)", () => {
    // hasKaTeX is a cheap check, it just looks for $
    expect(hasKaTeX("$export")).toBe(true);
  });

  test("returns false for content without $", () => {
    expect(hasKaTeX("No math here, just plain text.")).toBe(false);
  });

  test("returns false for empty string", () => {
    expect(hasKaTeX("")).toBe(false);
  });

  test("returns false for content with backticks but no dollars", () => {
    expect(hasKaTeX("`code` and more `code`")).toBe(false);
  });
});
