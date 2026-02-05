/**
 * Markdown Module
 *
 * Exports markdown parsing functionality for documentation.
 */

export { initHighlighter, getHighlighter, highlightCode } from "./shiki";
export { parseMarkdown, type ParsedMarkdown, type ParseContext } from "./parser";
export {
  processGitBookDirectives,
  hasGitBookDirectives,
  SUPPORTED_DIRECTIVES,
  type SupportedDirective,
} from "./gitbook";
