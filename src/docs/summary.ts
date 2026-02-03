/**
 * SUMMARY.md Parser
 *
 * Parses GitBook-style SUMMARY.md files to build navigation structure.
 *
 * Format:
 * # Table of contents
 *
 * * [Title](path/to/file.md)
 *   * [Nested Title](path/to/nested.md)
 *
 * ## Section Header
 * * [Section Item](path/to/item.md)
 */

import { readFileSync, existsSync } from "node:fs";

export interface NavItem {
  title: string;
  href: string;
  filepath: string;
  children?: NavItem[];
}

export interface NavSection {
  title?: string;  // Section header (## Header)
  items: NavItem[];
}

export interface Navigation {
  sections: NavSection[];
  flat: NavItem[];  // Flattened list for prev/next navigation
}

/**
 * Parse SUMMARY.md file and return navigation structure
 */
export function parseSummary(summaryPath: string, basePath: string = ""): Navigation {
  if (!existsSync(summaryPath)) {
    console.warn(`SUMMARY.md not found: ${summaryPath}`);
    return { sections: [], flat: [] };
  }

  const content = readFileSync(summaryPath, "utf-8");
  const lines = content.split("\n");

  const sections: NavSection[] = [];
  let currentSection: NavSection = { items: [] };
  const flat: NavItem[] = [];

  // Stack to track nesting: [item, indent]
  const stack: Array<{ item: NavItem; indent: number }> = [];

  for (const line of lines) {
    // Skip empty lines
    if (!line.trim()) continue;

    // Check for section header (## Header)
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch && sectionMatch[1]) {
      // Save current section if it has items
      if (currentSection.items.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { title: sectionMatch[1].trim(), items: [] };
      stack.length = 0; // Reset stack for new section
      continue;
    }

    // Skip the main title (# Table of contents)
    if (line.match(/^#\s+/)) continue;

    // Parse list items (* [Title](path.md))
    const itemMatch = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (itemMatch) {
      const spaces = itemMatch[1] || "";
      const title = itemMatch[2] || "";
      const href = itemMatch[3] || "";
      const indent = spaces.length;

      // Clean href - remove .md extension for URL, keep for filepath
      const filepath = href;
      const cleanHref = basePath + "/" + href.replace(/\.md$/, "").replace(/README$/, "");

      const item: NavItem = {
        title,
        href: cleanHref,
        filepath,
      };

      // Find parent based on indentation
      while (stack.length > 0) {
        const lastItem = stack[stack.length - 1];
        if (lastItem && lastItem.indent >= indent) {
          stack.pop();
        } else {
          break;
        }
      }

      if (stack.length === 0) {
        // Top level item
        currentSection.items.push(item);
      } else {
        // Nested item
        const lastStackItem = stack[stack.length - 1];
        if (lastStackItem) {
          const parent = lastStackItem.item;
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(item);
        } else {
          currentSection.items.push(item);
        }
      }

      stack.push({ item, indent });
      flat.push(item);
    }
  }

  // Don't forget the last section
  if (currentSection.items.length > 0) {
    sections.push(currentSection);
  }

  return { sections, flat };
}

/**
 * Find nav item by href
 */
export function findNavItem(navigation: Navigation, href: string): NavItem | undefined {
  const normalizedHref = href.replace(/\/$/, "");

  function searchItems(items: NavItem[]): NavItem | undefined {
    for (const item of items) {
      if (item.href.replace(/\/$/, "") === normalizedHref) {
        return item;
      }
      if (item.children) {
        const found = searchItems(item.children);
        if (found) return found;
      }
    }
    return undefined;
  }

  for (const section of navigation.sections) {
    const found = searchItems(section.items);
    if (found) return found;
  }

  return undefined;
}

/**
 * Get previous and next items for navigation
 */
export function getPrevNext(navigation: Navigation, currentHref: string): {
  prev: NavItem | undefined;
  next: NavItem | undefined;
} {
  const normalizedHref = currentHref.replace(/\/$/, "");
  const flat = navigation.flat;

  const currentIndex = flat.findIndex(
    item => item.href.replace(/\/$/, "") === normalizedHref
  );

  if (currentIndex === -1) {
    return { prev: undefined, next: undefined };
  }

  return {
    prev: currentIndex > 0 ? flat[currentIndex - 1] : undefined,
    next: currentIndex < flat.length - 1 ? flat[currentIndex + 1] : undefined,
  };
}
