/**
 * SUMMARY.md Parser
 *
 * Parses GitBook-style SUMMARY.md files into a navigation tree structure.
 * Uses remark for proper markdown parsing instead of manual line parsing.
 */

import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Root, Heading, List, ListItem, Link, Text, Paragraph } from "mdast";
import type { NavigationSection, NavigationItem } from "../state";

interface ParseContext {
  productPath: string; // e.g., /docs/fhirbase
}

/**
 * Parse SUMMARY.md content into navigation sections
 */
export function parseSummary(
  productPath: string,
  summaryContent: string
): NavigationSection[] {
  const ctx: ParseContext = { productPath };

  // Parse SUMMARY.md as proper markdown AST
  const tree = unified().use(remarkParse).parse(summaryContent) as Root;

  const sections: NavigationSection[] = [];
  let currentSection: NavigationSection | null = null;

  // Process nodes in document order
  for (const node of tree.children) {
    if (node.type === "heading") {
      // Section header (## Getting Started, etc.)
      const title = extractTextFromNode(node);
      // Skip "Table of contents" header
      if (title && title.toLowerCase() !== "table of contents") {
        if (currentSection) sections.push(currentSection);
        currentSection = { title, children: [] };
      }
    } else if (node.type === "list") {
      // Navigation list - recursively process
      const items = processNavList(ctx, node);
      if (currentSection) {
        currentSection.children.push(...items);
      } else {
        // No section header yet - create default section
        currentSection = { title: "", children: items };
      }
    }
  }

  if (currentSection && currentSection.children.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Recursively process a list node into navigation items
 * Handles nested lists for sub-navigation
 */
function processNavList(ctx: ParseContext, list: List): NavigationItem[] {
  const items: NavigationItem[] = [];

  for (const listItem of list.children) {
    if (listItem.type !== "listItem") continue;

    let navItem: NavigationItem | null = null;
    const children: NavigationItem[] = [];

    for (const child of listItem.children) {
      if (child.type === "paragraph") {
        // Find link in paragraph
        const link = findLink(child);
        if (link) {
          navItem = createNavigationItem(ctx, link);
        }
      } else if (child.type === "list") {
        // Nested list = children
        children.push(...processNavList(ctx, child));
      }
    }

    if (navItem) {
      if (children.length > 0) {
        navItem.children = children;
      }
      items.push(navItem);
    }
  }

  return items;
}

/**
 * Find first link node in a paragraph
 */
function findLink(node: Paragraph): Link | null {
  let link: Link | null = null;
  visit(node, "link", (n: Link) => {
    if (!link) link = n;
  });
  return link;
}

/**
 * Extract text content from any node (heading, paragraph, etc.)
 */
function extractTextFromNode(node: Heading | Link | Paragraph): string {
  const texts: string[] = [];
  visit(node, "text", (n: Text) => {
    texts.push(n.value);
  });
  return texts.join("").trim();
}

/**
 * Create NavigationItem from a Link node
 */
function createNavigationItem(ctx: ParseContext, link: Link): NavigationItem {
  // Clean up title (unescape underscores, etc.)
  const title = extractTextFromNode(link).replace(/\\_/g, "_");
  const href = link.url;
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const normalizedHref = isExternal ? href : normalizeHref(ctx.productPath, href);

  return {
    title,
    href: normalizedHref,
    isExternal,
  };
}

/**
 * Normalize relative href to full docs path
 *
 * Examples:
 *   README.md -> /docs/product
 *   getting-started.md -> /docs/product/getting-started
 *   api/rest.md -> /docs/product/api/rest
 *   ./integrations/README.md -> /docs/product/integrations
 */
function normalizeHref(productPath: string, href: string): string {
  // Remove .md extension
  let normalized = href.replace(/\.md$/, "");

  // Handle relative paths starting with ./
  if (normalized.startsWith("./")) {
    normalized = normalized.slice(2);
  }

  // Handle README → directory root
  if (normalized === "README" || normalized.endsWith("/README")) {
    normalized = normalized.replace(/\/?README$/, "");
  }

  // Build full path
  if (normalized === "") {
    return productPath;
  }

  return `${productPath}/${normalized}`.replace(/\/+/g, "/");
}

/**
 * Flatten navigation tree into a list for prev/next navigation
 */
export function flattenNavigation(sections: NavigationSection[]): NavigationItem[] {
  const flat: NavigationItem[] = [];

  function flatten(items: NavigationItem[]): void {
    for (const item of items) {
      if (!item.isExternal) {
        flat.push(item);
      }
      if (item.children) {
        flatten(item.children);
      }
    }
  }

  for (const section of sections) {
    flatten(section.children);
  }

  return flat;
}

/**
 * Build a map of URIs to navigation items for quick lookup
 */
export function buildNavIndex(
  sections: NavigationSection[]
): Map<string, NavigationItem> {
  const index = new Map<string, NavigationItem>();

  function processItem(item: NavigationItem): void {
    if (!item.isExternal && item.href) {
      index.set(item.href, item);
    }
    item.children?.forEach(processItem);
  }

  for (const section of sections) {
    section.children.forEach(processItem);
  }

  return index;
}
