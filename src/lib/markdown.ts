import { marked } from "marked";
import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

// Initialize highlighter at startup
export async function initHighlighter() {
  highlighter = await createHighlighter({
    themes: ["github-dark"],
    langs: [
      "javascript",
      "typescript",
      "tsx",
      "jsx",
      "json",
      "bash",
      "shell",
      "yaml",
      "sql",
      "python",
      "java",
      "xml",
      "html",
      "css",
      "markdown",
      "http",
      "clojure",
    ],
  });
}

// Custom renderer for code blocks
const renderer = new marked.Renderer();

renderer.code = function ({ text, lang }) {
  if (!highlighter) {
    // Fallback if highlighter not initialized
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang || ""}">${escaped}</code></pre>`;
  }

  // Normalize language name
  let language = lang || "text";
  const langMap: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    yml: "yaml",
  };
  language = langMap[language] || language;

  // Check if language is supported
  const supportedLangs = highlighter.getLoadedLanguages();
  if (!supportedLangs.includes(language as any)) {
    language = "text";
  }

  try {
    const html = highlighter.codeToHtml(text, {
      lang: language,
      theme: "github-dark",
    });
    return html;
  } catch {
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang || ""}">${escaped}</code></pre>`;
  }
};

marked.use({ renderer });

export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string;
}

/**
 * Highlight a code snippet with Shiki
 * @param code - The code to highlight
 * @param lang - Language (typescript, javascript, html, etc.)
 * @returns HTML string with syntax highlighting
 */
export function highlightCode(code: string, lang: string = "typescript"): string {
  if (!highlighter) {
    // Fallback if highlighter not initialized
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="p-4 rounded-lg overflow-x-auto bg-[#24292e]"><code class="text-sm font-mono">${escaped}</code></pre>`;
  }

  // Normalize language name
  const langMap: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    sh: "bash",
    yml: "yaml",
  };
  const normalizedLang = langMap[lang] || lang;

  // Check if language is supported
  const supportedLangs = highlighter.getLoadedLanguages();
  const finalLang = supportedLangs.includes(normalizedLang as any) ? normalizedLang : "text";

  try {
    const html = highlighter.codeToHtml(code, {
      lang: finalLang,
      theme: "github-dark",
    });
    // Add padding to the existing style attribute
    return html.replace(
      /style="([^"]*)"/,
      'style="$1; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"'
    );
  } catch {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="p-4 rounded-lg overflow-x-auto bg-[#24292e]"><code class="text-sm font-mono">${escaped}</code></pre>`;
  }
}
