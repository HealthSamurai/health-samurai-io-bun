/**
 * GitBook Directive Tokenizer
 *
 * Tokenizes GitBook-style directives into a stream of tokens.
 * Handles: {% directive %}, {% enddirective %}, and content between.
 */

export type TokenType =
  | "text"
  | "directive_open"
  | "directive_close"
  | "directive_self_closing";

export interface Token {
  type: TokenType;
  value: string;
  name?: string; // directive name (hint, tabs, tab, etc.)
  attributes?: Record<string, string>;
  start: number;
  end: number;
}

// Regex to match directive tags (non-greedy, captures tag content)
const DIRECTIVE_REGEX = /\{%\s*([^%]+?)\s*%\}/g;

/**
 * Tokenize content into a stream of tokens
 */
export function tokenize(content: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;

  // Reset regex state
  DIRECTIVE_REGEX.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = DIRECTIVE_REGEX.exec(content)) !== null) {
    const [fullMatch, tagContent] = match;
    const start = match.index;
    const end = start + fullMatch.length;

    // Add text token before this directive (if any)
    if (start > lastIndex) {
      tokens.push({
        type: "text",
        value: content.slice(lastIndex, start),
        start: lastIndex,
        end: start,
      });
    }

    // Parse the directive tag
    const directiveToken = parseDirectiveTag((tagContent ?? "").trim(), start, end);
    tokens.push(directiveToken);

    lastIndex = end;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    tokens.push({
      type: "text",
      value: content.slice(lastIndex),
      start: lastIndex,
      end: content.length,
    });
  }

  return tokens;
}

/**
 * Parse a directive tag content into a token
 * Examples:
 *   "hint style=\"info\"" -> { type: "directive_open", name: "hint", attributes: { style: "info" } }
 *   "endhint" -> { type: "directive_close", name: "hint" }
 *   "embed url=\"...\" /" -> { type: "directive_self_closing", name: "embed", attributes: { url: "..." } }
 */
function parseDirectiveTag(tagContent: string, start: number, end: number): Token {
  // Check for self-closing (ends with /)
  const selfClosing = tagContent.endsWith("/");
  if (selfClosing) {
    tagContent = tagContent.slice(0, -1).trim();
  }

  // Check for closing tag (starts with "end")
  if (tagContent.startsWith("end")) {
    const name = tagContent.slice(3).trim();
    return {
      type: "directive_close",
      value: tagContent,
      name: name || undefined,
      start,
      end,
    };
  }

  // Parse opening tag: name + attributes
  const { name, attributes } = parseNameAndAttributes(tagContent);

  return {
    type: selfClosing ? "directive_self_closing" : "directive_open",
    value: tagContent,
    name,
    attributes: Object.keys(attributes).length > 0 ? attributes : undefined,
    start,
    end,
  };
}

/**
 * Parse directive name and attributes from tag content
 * Example: "hint style=\"info\" title=\"Note\"" -> { name: "hint", attributes: { style: "info", title: "Note" } }
 */
function parseNameAndAttributes(content: string): {
  name: string;
  attributes: Record<string, string>;
} {
  const attributes: Record<string, string> = {};

  // Split on first whitespace to get name
  const firstSpace = content.search(/\s/);
  if (firstSpace === -1) {
    return { name: content, attributes };
  }

  const name = content.slice(0, firstSpace);
  const rest = content.slice(firstSpace + 1);

  // Parse attributes: key="value" or key='value'
  const attrRegex = /(\w+)=["']([^"']*?)["']/g;
  let attrMatch: RegExpExecArray | null;
  while ((attrMatch = attrRegex.exec(rest)) !== null) {
    const [, key, value] = attrMatch;
    if (key) {
      attributes[key] = value ?? "";
    }
  }

  return { name, attributes };
}

/**
 * Check if a token opens a specific directive
 */
export function isOpeningToken(token: Token, name?: string): boolean {
  if (token.type !== "directive_open") return false;
  if (name && token.name !== name) return false;
  return true;
}

/**
 * Check if a token closes a specific directive
 */
export function isClosingToken(token: Token, name?: string): boolean {
  if (token.type !== "directive_close") return false;
  if (name && token.name !== name) return false;
  return true;
}
