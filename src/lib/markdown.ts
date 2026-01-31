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
