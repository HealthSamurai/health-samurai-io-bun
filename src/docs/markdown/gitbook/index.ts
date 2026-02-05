/**
 * GitBook Directive Parser
 *
 * Clean parser for GitBook-style directives ({% tabs %}, {% hint %}, etc.)
 *
 * Architecture:
 * 1. Tokenizer - converts content to token stream
 * 2. AST Builder - converts tokens to tree structure
 * 3. Renderer - converts AST to HTML
 *
 * Usage:
 * ```typescript
 * import { processGitBookDirectives } from './gitbook';
 *
 * const html = await processGitBookDirectives(content, async (md) => {
 *   // Your markdown renderer
 *   return renderMarkdown(md);
 * });
 * ```
 */

export { tokenize, type Token, type TokenType } from "./tokenizer";
export {
  parse,
  walk,
  findDirectives,
  getTextContent,
  type ASTNode,
  type DirectiveNode,
  type TextNode,
  type RootNode,
} from "./ast";
export { render, type RenderContext, type MarkdownRenderer } from "./renderer";

import { parse } from "./ast";
import { render, type MarkdownRenderer } from "./renderer";
import type { DocsContext } from "../../context";

/**
 * Process GitBook directives in content
 *
 * This is the main entry point. It:
 * 1. Parses the content into an AST
 * 2. Renders the AST to HTML, using the provided markdown renderer for content
 *
 * @param content - Content containing GitBook directives
 * @param renderMarkdown - Function to render markdown to HTML
 * @param docsCtx - Optional docs context for title resolution in content-ref
 * @returns Processed HTML
 */
export async function processGitBookDirectives(
  content: string,
  renderMarkdown: MarkdownRenderer,
  docsCtx?: DocsContext
): Promise<string> {
  // Quick check - if no directives, return as-is
  if (!content.includes("{%")) {
    return content;
  }

  const ast = parse(content);
  const html = await render(ast, { renderMarkdown, docsCtx });
  return html;
}

/**
 * Check if content contains GitBook directives
 */
export function hasGitBookDirectives(content: string): boolean {
  return content.includes("{%");
}

/**
 * List of supported directive names
 */
export const SUPPORTED_DIRECTIVES = [
  "hint",
  "tabs",
  "tab",
  "stepper",
  "step",
  "code",
  "embed",
  "content-ref",
  "file",
] as const;

export type SupportedDirective = (typeof SUPPORTED_DIRECTIVES)[number];
