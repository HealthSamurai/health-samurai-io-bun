/**
 * Shiki Syntax Highlighter
 *
 * Server-side code highlighting with multiple themes.
 */

import { createHighlighter, type Highlighter, type BundledLanguage } from "shiki";

let highlighter: Highlighter | null = null;

// Languages commonly used in documentation
const SUPPORTED_LANGUAGES: BundledLanguage[] = [
  "javascript",
  "typescript",
  "json",
  "yaml",
  "bash",
  "shell",
  "sql",
  "python",
  "java",
  "clojure",
  "http",
  "markdown",
  "html",
  "css",
  "xml",
  "go",
  "rust",
  "c",
  "cpp",
  "csharp",
  "ruby",
  "php",
  "dockerfile",
  "graphql",
  "diff",
];

/**
 * Initialize the Shiki highlighter
 * Call this at server startup
 */
export async function initHighlighter(): Promise<void> {
  if (highlighter) return;

  console.log("[shiki] Initializing highlighter...");
  const startTime = Date.now();

  highlighter = await createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: SUPPORTED_LANGUAGES,
  });

  console.log(`[shiki] Initialized (${Date.now() - startTime}ms)`);
}

/**
 * Get the highlighter instance
 */
export function getHighlighter(): Highlighter {
  if (!highlighter) {
    throw new Error("Shiki highlighter not initialized. Call initHighlighter() first.");
  }
  return highlighter;
}

/**
 * Highlight code with Shiki
 *
 * Returns HTML with both light and dark theme classes.
 * Use CSS to show the appropriate theme based on user preference.
 */
export function highlightCode(code: string, lang?: string): string {
  const hl = getHighlighter();

  // Normalize language name
  const detectedLang = normalizeLanguage(lang) || detectLanguage(code);
  const loadedLangs = hl.getLoadedLanguages();

  // Check if language is supported
  const langToUse = detectedLang && loadedLangs.includes(detectedLang as BundledLanguage)
    ? detectedLang
    : "plaintext";

  try {
    return hl.codeToHtml(code, {
      lang: langToUse,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    });
  } catch (error) {
    // Fallback to plaintext on error
    console.warn(`[shiki] Failed to highlight as ${langToUse}:`, error);
    return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
  }
}

/**
 * Normalize language aliases
 */
function normalizeLanguage(lang?: string): string | undefined {
  if (!lang) return undefined;

  const normalized = lang.toLowerCase().trim();

  // Common aliases
  const aliases: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    zsh: "bash",
    yml: "yaml",
    py: "python",
    rb: "ruby",
    cs: "csharp",
    "c#": "csharp",
    "c++": "cpp",
    text: "plaintext",
    txt: "plaintext",
    plain: "plaintext",
  };

  return aliases[normalized] || normalized;
}

/**
 * Simple language auto-detection based on content patterns
 */
function detectLanguage(code: string): string | undefined {
  const trimmed = code.trim();

  // JSON detection
  if (/^[\[\{]/.test(trimmed) && /[\]\}]$/.test(trimmed)) {
    try {
      JSON.parse(trimmed);
      return "json";
    } catch {
      // Not valid JSON
    }
  }

  // YAML detection (key: value pattern without JSON brackets)
  if (/^\w+:\s/m.test(trimmed) && !/^[\[\{]/.test(trimmed)) {
    return "yaml";
  }

  // SQL detection
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)\s/i.test(trimmed)) {
    return "sql";
  }

  // Shell/bash detection
  if (/^(#!\/bin\/(ba)?sh|curl|wget|npm|yarn|bun|docker|git)\s/m.test(trimmed)) {
    return "bash";
  }

  return undefined;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
