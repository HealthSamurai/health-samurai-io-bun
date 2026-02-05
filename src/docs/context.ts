import type { ProductConfig } from "./config";
import type { NavigationSection, NavigationItem, ProductState } from "./state";

/**
 * Context passed through the documentation rendering pipeline
 */
export interface DocsContext {
  // Current product configuration
  product: ProductConfig;

  // Shorthand for product.id
  productId: string;

  // Shorthand for product.path (e.g., /docs/aidbox)
  productPath: string;

  // Base URL for the site
  baseUrl: string;

  // Current request URI (e.g., /docs/aidbox/api/rest)
  uri: string;

  // Current file path relative to docs dir (e.g., api/rest.md)
  filepath: string;

  // Product state with navigation, indexes, etc.
  state: ProductState;

  // Whether this is a dev mode request
  devMode: boolean;
}

/**
 * Create a docs context for a request
 */
export function createDocsContext(
  product: ProductConfig,
  state: ProductState,
  uri: string,
  filepath: string
): DocsContext {
  return {
    product,
    productId: product.id,
    productPath: product.path,
    baseUrl: process.env.BASE_URL || "https://health-samurai.io",
    uri,
    filepath,
    state,
    devMode: process.env.DOCS_DEV_MODE === "true",
  };
}

/**
 * Find current navigation item and its ancestors for breadcrumbs
 */
export function findNavPath(
  navigation: NavigationSection[],
  uri: string
): NavigationItem[] {
  const path: NavigationItem[] = [];

  function search(items: NavigationItem[], ancestors: NavigationItem[]): boolean {
    for (const item of items) {
      if (item.href === uri) {
        path.push(...ancestors, item);
        return true;
      }
      if (item.children) {
        if (search(item.children, [...ancestors, item])) {
          return true;
        }
      }
    }
    return false;
  }

  for (const section of navigation) {
    if (search(section.children, [])) {
      break;
    }
  }

  return path;
}

/**
 * Find previous and next navigation items
 */
export function findPrevNext(
  flatNav: NavigationItem[],
  uri: string
): { prev: NavigationItem | null; next: NavigationItem | null } {
  const index = flatNav.findIndex((item) => item.href === uri);

  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev = index > 0 ? flatNav[index - 1] ?? null : null;
  const next = index < flatNav.length - 1 ? flatNav[index + 1] ?? null : null;

  // Skip external links
  return {
    prev: prev && prev.isExternal ? null : prev,
    next: next && next.isExternal ? null : next,
  };
}

/**
 * Flatten navigation tree into a list for prev/next navigation
 */
export function flattenNavigation(navigation: NavigationSection[]): NavigationItem[] {
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

  for (const section of navigation) {
    flatten(section.children);
  }

  return flat;
}
