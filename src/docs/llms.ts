/**
 * llms.txt Generator
 *
 * Implements the llms.txt specification (https://llmstxt.org/) for documentation.
 *
 * Priority:
 * 1. If the docs repo has a llms.txt file, serve it (with {{baseUrl}} interpolation)
 * 2. Otherwise, auto-generate from the navigation tree
 *
 * Endpoints:
 * - /docs/:product/llms.txt  — per-product llms.txt
 * - /docs/llms.txt            — root index linking all products
 */

import type { ProductConfig } from "./config";
import { getAllProducts } from "./config";
import type { ProductState, NavigationItem, NavigationSection } from "./state";
import { getProductState } from "./state";
import { getProductDir } from "./git";

const BASE_URL = (process.env.BASE_URL || "https://health-samurai.io").replace(/\/$/, "");

/**
 * Load llms.txt from the docs repo root (if it exists).
 * Called during product initialization.
 */
export async function loadLlmsTxt(product: ProductConfig): Promise<string | undefined> {
  const productDir = getProductDir(product);
  const llmsPath = `${productDir}/${product.llms}`;

  const file = Bun.file(llmsPath);
  if (await file.exists()) {
    const content = await file.text();
    // Interpolate {{baseUrl}} so the repo file can use relative-looking URLs
    return content.replace(/\{\{baseUrl\}\}/g, `${BASE_URL}${product.path}`);
  }

  return undefined;
}

/**
 * Generate llms.txt content for a product.
 * Uses the repo file if available, otherwise generates from navigation.
 */
export function generateProductLlmsTxt(product: ProductConfig, state: ProductState): string {
  if (state.llmsTxt) {
    return state.llmsTxt;
  }

  return generateFromNavigation(product, state);
}

/**
 * Generate root /docs/llms.txt listing all products
 */
export function generateRootLlmsTxt(): string {
  const products = getAllProducts();

  const lines: string[] = [
    "# Health Samurai Documentation",
    "",
    "> Documentation for Health Samurai products — FHIR-native healthcare infrastructure.",
    "",
    "## Products",
    "",
  ];

  for (const product of products) {
    const state = getProductState(product.id);
    if (!state) continue;

    // Count pages
    const pageCount = state.mdFiles.size;
    lines.push(`- [${product.name}](${BASE_URL}${product.path}/llms.txt): ${pageCount} pages`);
  }

  lines.push("");

  return lines.join("\n");
}

// ============================================================
// Auto-generation from navigation tree
// ============================================================

function generateFromNavigation(product: ProductConfig, state: ProductState): string {
  const lines: string[] = [
    `# ${product.name} Documentation`,
    "",
    `> Documentation for ${product.name}`,
    "",
  ];

  for (const section of state.navigation) {
    if (section.title) {
      lines.push(`## ${section.title}`);
      lines.push("");
    }
    for (const item of section.children) {
      lines.push(...renderNavItem(product, item, 0));
    }
    lines.push("");
  }

  return lines.join("\n");
}

function renderNavItem(product: ProductConfig, item: NavigationItem, depth: number): string[] {
  const lines: string[] = [];
  const indent = "  ".repeat(depth);

  // Skip external links
  if (item.isExternal) return lines;

  if (item.href) {
    const url = buildLlmsUrl(product, item.href);
    lines.push(`${indent}- [${item.title}](${url})`);
  } else {
    // Item without a page link (group header)
    lines.push(`${indent}- ${item.title}`);
  }

  if (item.children) {
    for (const child of item.children) {
      lines.push(...renderNavItem(product, child, depth + 1));
    }
  }

  return lines;
}

function buildLlmsUrl(product: ProductConfig, href: string): string {
  if (href.startsWith("http")) return href;
  const cleanHref = href.replace(/\/$/, "");
  return `${BASE_URL}${cleanHref}.md`;
}
