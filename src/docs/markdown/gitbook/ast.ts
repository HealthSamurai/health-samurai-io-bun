/**
 * GitBook Directive AST Builder
 *
 * Converts a token stream into an Abstract Syntax Tree.
 * Properly handles nesting (e.g., tabs containing hints).
 */

import { tokenize, type Token, isOpeningToken, isClosingToken } from "./tokenizer";

export type NodeType = "root" | "text" | "directive";

export interface TextNode {
  type: "text";
  value: string;
}

export interface DirectiveNode {
  type: "directive";
  name: string;
  attributes: Record<string, string>;
  children: ASTNode[];
  // Original positions for error reporting
  start: number;
  end: number;
}

export interface RootNode {
  type: "root";
  children: ASTNode[];
}

export type ASTNode = TextNode | DirectiveNode | RootNode;

/**
 * Parse content into an AST
 */
export function parse(content: string): RootNode {
  const tokens = tokenize(content);
  return buildAST(tokens, content);
}

/**
 * Build AST from token stream
 */
function buildAST(tokens: Token[], _originalContent: string): RootNode {
  const root: RootNode = { type: "root", children: [] };
  const stack: (RootNode | DirectiveNode)[] = [root];

  for (const token of tokens) {
    const current = stack[stack.length - 1];

    if (!current) {
      throw new Error("Invalid parser state: empty stack");
    }

    switch (token.type) {
      case "text": {
        // Add text node to current parent
        if (token.value.trim() || token.value.includes("\n")) {
          current.children.push({
            type: "text",
            value: token.value,
          });
        }
        break;
      }

      case "directive_open": {
        // Create new directive node and push to stack
        const directive: DirectiveNode = {
          type: "directive",
          name: token.name || "unknown",
          attributes: token.attributes || {},
          children: [],
          start: token.start,
          end: token.end, // Will be updated when closed
        };
        current.children.push(directive);
        stack.push(directive);
        break;
      }

      case "directive_close": {
        // Pop from stack (validate matching)
        if (stack.length <= 1) {
          console.warn(`Unexpected closing tag: {% end${token.name ?? ""} %}`);
          break;
        }

        const opening = stack[stack.length - 1];
        if (opening && opening.type === "directive" && opening.name !== token.name) {
          console.warn(
            `Mismatched tags: expected {% end${opening.name} %}, got {% end${token.name ?? ""} %}`
          );
        }

        if (opening && opening.type === "directive") {
          opening.end = token.end;
        }
        stack.pop();
        break;
      }

      case "directive_self_closing": {
        // Add self-closing directive as leaf node
        current.children.push({
          type: "directive",
          name: token.name || "unknown",
          attributes: token.attributes || {},
          children: [],
          start: token.start,
          end: token.end,
        });
        break;
      }
    }
  }

  // Check for unclosed directives
  if (stack.length > 1) {
    const unclosed = stack.slice(1) as DirectiveNode[];
    console.warn(
      `Unclosed directives: ${unclosed.map((d) => d.name).join(", ")}`
    );
  }

  return root;
}

/**
 * Walk the AST and call visitor functions
 */
export function walk(
  node: ASTNode,
  visitor: {
    text?: (node: TextNode) => void;
    directive?: (node: DirectiveNode) => void;
    enter?: (node: ASTNode) => void;
    leave?: (node: ASTNode) => void;
  }
): void {
  visitor.enter?.(node);

  switch (node.type) {
    case "text":
      visitor.text?.(node);
      break;

    case "directive":
      visitor.directive?.(node);
      for (const child of node.children) {
        walk(child, visitor);
      }
      break;

    case "root":
      for (const child of node.children) {
        walk(child, visitor);
      }
      break;
  }

  visitor.leave?.(node);
}

/**
 * Find all directives of a specific type
 */
export function findDirectives(root: RootNode, name: string): DirectiveNode[] {
  const results: DirectiveNode[] = [];

  walk(root, {
    directive: (node) => {
      if (node.name === name) {
        results.push(node);
      }
    },
  });

  return results;
}

/**
 * Get text content from a node (concatenates all text children)
 */
export function getTextContent(node: ASTNode): string {
  if (node.type === "text") {
    return node.value;
  }

  if (node.type === "directive" || node.type === "root") {
    return node.children.map(getTextContent).join("");
  }

  return "";
}
