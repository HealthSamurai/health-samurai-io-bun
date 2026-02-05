/**
 * KaTeX Math Rendering
 *
 * Pre-processes markdown content to find math delimiters and replace them
 * with server-side rendered KaTeX HTML.
 *
 * Supports:
 * - Display math: $$...$$ (can be multiline)
 * - Inline math: $...$ (single line only)
 *
 * Skips math inside code blocks (fenced ``` and inline `).
 */

import katex from "katex";

/**
 * Process KaTeX math expressions in markdown content.
 *
 * Runs BEFORE remark parsing. Finds math delimiters and replaces them
 * with rendered KaTeX HTML.
 *
 * @param content - Raw markdown content
 * @returns Content with math expressions replaced by rendered HTML
 */
export function processKaTeX(content: string): string {
  // Split content into segments: code blocks, inline code, and text.
  // We only process math in text segments, never inside code.
  const segments = splitByCode(content);

  const result = segments
    .map((segment) => {
      if (segment.isCode) {
        return segment.text;
      }
      // Process display math first ($$...$$), then inline math ($...$)
      let processed = processDisplayMath(segment.text);
      processed = processInlineMath(processed);
      return processed;
    })
    .join("");

  return result;
}

interface Segment {
  text: string;
  isCode: boolean;
}

/**
 * Split content into code and non-code segments.
 * Code segments include fenced code blocks (```...```) and inline code (`...`).
 */
function splitByCode(content: string): Segment[] {
  const segments: Segment[] = [];
  let remaining = content;

  while (remaining.length > 0) {
    // Look for the next code delimiter
    const fencedMatch = remaining.match(/^([\s\S]*?)(```[\s\S]*?```)/);
    const inlineMatch = remaining.match(/^([\s\S]*?)(`[^`\n]+`)/);

    let bestMatch: RegExpMatchArray | null = null;
    let matchType: "fenced" | "inline" | null = null;

    if (fencedMatch && inlineMatch) {
      // Choose whichever comes first
      if ((fencedMatch[1] ?? "").length <= (inlineMatch[1] ?? "").length) {
        bestMatch = fencedMatch;
        matchType = "fenced";
      } else {
        bestMatch = inlineMatch;
        matchType = "inline";
      }
    } else if (fencedMatch) {
      bestMatch = fencedMatch;
      matchType = "fenced";
    } else if (inlineMatch) {
      bestMatch = inlineMatch;
      matchType = "inline";
    }

    if (bestMatch && matchType) {
      const before = bestMatch[1] ?? "";
      const code = bestMatch[2] ?? "";

      if (before.length > 0) {
        segments.push({ text: before, isCode: false });
      }
      segments.push({ text: code, isCode: true });
      remaining = remaining.slice(before.length + code.length);
    } else {
      // No more code blocks found
      if (remaining.length > 0) {
        segments.push({ text: remaining, isCode: false });
      }
      break;
    }
  }

  return segments;
}

/**
 * Process display math: $$...$$
 * Can be multiline. Rendered in display mode wrapped in a div.
 */
function processDisplayMath(text: string): string {
  // Match $$ on its own line or inline $$...$$
  // The pattern matches $$, then any content (including newlines), then $$
  return text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, formula: string) => {
    const trimmed = formula.trim();
    try {
      const rendered = katex.renderToString(trimmed, {
        displayMode: true,
        throwOnError: false,
      });
      return `<div class="katex-display">${rendered}</div>`;
    } catch {
      return `<div class="katex-display katex-error">${escapeHtml(trimmed)}</div>`;
    }
  });
}

/**
 * Check if text between $ delimiters is actually a LaTeX formula
 * vs a FHIR operation like $meta, $export, etc.
 *
 * Valid LaTeX must contain at least one of:
 * - Backslash commands (\le, \frac, etc.)
 * - Math operators (^, _, {, })
 * - Parenthesized tuple expressions like (x, y)
 *
 * Simple words like "meta", "export", "meta-add" are NOT LaTeX.
 */
function isValidLatex(text: string): boolean {
  // Reject content that looks like markdown link syntax (e.g., "meta](url) and [")
  if (/\]\(/.test(text)) return false;

  const hasLatexCommand = text.includes("\\");
  const hasMathOperators = /[\^_{}]/.test(text);
  const hasMathParens = /\([^)]+,\s*[^)]+\)/.test(text);
  const hasArithmeticOps = /[+*/=<>]/.test(text);
  const isSimpleWord = /^[a-zA-Z][a-zA-Z0-9\-]*$/.test(text);

  return (hasLatexCommand || hasMathOperators || hasMathParens || hasArithmeticOps) && !isSimpleWord;
}

/**
 * Process inline math: $...$
 * Single line only. Must not match $$ (display math).
 * Must have non-space content after opening $ and before closing $.
 */
function processInlineMath(text: string): string {
  // Match single $ delimiters:
  // - Not preceded by $ or \ (to avoid matching $$ or escaped \$)
  // - Not followed by $ (to avoid matching $$)
  // - Content must not start or end with space
  // - Content must not contain newlines
  // - Content must not be empty
  return text.replace(
    /(?<!\$|\\)\$(?!\$)([^\n$]+?)(?<!\s)\$(?!\$)/g,
    (_match, formula: string) => {
      const trimmed = formula.trim();
      if (trimmed.length === 0 || !isValidLatex(trimmed)) {
        return _match;
      }
      try {
        const rendered = katex.renderToString(trimmed, {
          displayMode: false,
          throwOnError: false,
        });
        return `<span class="katex-inline">${rendered}</span>`;
      } catch {
        return `<span class="katex-inline katex-error">${escapeHtml(trimmed)}</span>`;
      }
    }
  );
}

/**
 * Check if content contains any math delimiters worth processing
 */
export function hasKaTeX(content: string): boolean {
  return content.includes("$");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
