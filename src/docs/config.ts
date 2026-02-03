/**
 * Documentation Engine Configuration
 *
 * Supports multiple products, each with their own documentation structure.
 */

import { parse as parseYaml } from "yaml";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface NavLink {
  text: string;
  href: string;
  target?: string;
  entries?: NavLink[];
  title?: string;
}

export interface ProductConfig {
  id: string;
  name: string;
  path: string;          // URL path prefix (e.g., /aidbox)
  docsPath: string;      // Filesystem path to docs
  summaryPath: string;   // Path to SUMMARY.md
  logo?: string;
  favicon?: string;
  ogPreviewText?: string;
  meilisearchIndex?: string;
  links?: NavLink[];
}

export interface DocsConfig {
  rootRedirect?: string;
  products: ProductConfig[];
}

/**
 * Load documentation configuration from products.yaml
 */
export function loadDocsConfig(docsRoot: string): DocsConfig {
  const configPath = join(docsRoot, "products.yaml");

  if (!existsSync(configPath)) {
    // Return default config if no products.yaml - auto-discover products
    return {
      products: discoverProducts(docsRoot),
    };
  }

  const configContent = readFileSync(configPath, "utf-8");
  const config = parseYaml(configContent) as any;

  const products: ProductConfig[] = (config.products || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    path: p.path || `/${p.id}`,
    docsPath: join(docsRoot, p.id),
    summaryPath: join(docsRoot, p.id, "SUMMARY.md"),
    logo: p.logo,
    favicon: p.favicon,
    ogPreviewText: p["og-preview-text"],
    meilisearchIndex: p["meilisearch-index"],
    links: p.links,
  }));

  return {
    rootRedirect: config["root-redirect"],
    products,
  };
}

/**
 * Load configuration for existing Aidbox documentation structure
 * (tmp/documentation/docs format where SUMMARY.md is at root level)
 */
export function loadLegacyDocsConfig(docsRoot: string): DocsConfig {
  // Check if this is the legacy structure with SUMMARY.md at root
  const rootSummary = join(docsRoot, "SUMMARY.md");

  if (existsSync(rootSummary)) {
    // Legacy single-product structure
    return {
      rootRedirect: "/aidbox",
      products: [{
        id: "aidbox",
        name: "Aidbox Documentation",
        path: "/aidbox",
        docsPath: docsRoot,
        summaryPath: rootSummary,
        ogPreviewText: "FHIR server for building healthcare applications",
      }],
    };
  }

  // Try loading from products.yaml
  return loadDocsConfig(docsRoot);
}

/**
 * Auto-discover products from directory structure
 */
function discoverProducts(docsRoot: string): ProductConfig[] {
  const products: ProductConfig[] = [];

  try {
    const { readdirSync, statSync } = require("node:fs");
    const entries = readdirSync(docsRoot);

    for (const entry of entries) {
      const entryPath = join(docsRoot, entry);
      const stat = statSync(entryPath);

      if (stat.isDirectory() && !entry.startsWith(".")) {
        const summaryPath = join(entryPath, "SUMMARY.md");
        if (existsSync(summaryPath)) {
          products.push({
            id: entry,
            name: entry.charAt(0).toUpperCase() + entry.slice(1) + " Documentation",
            path: `/${entry}`,
            docsPath: entryPath,
            summaryPath,
          });
        }
      }
    }
  } catch (e) {
    console.error("Error discovering products:", e);
  }

  return products;
}

/**
 * Get product by ID
 */
export function getProduct(config: DocsConfig, productId: string): ProductConfig | undefined {
  return config.products.find(p => p.id === productId);
}

/**
 * Get product by URL path
 */
export function getProductByPath(config: DocsConfig, urlPath: string): ProductConfig | undefined {
  // Remove leading /docs prefix if present
  const normalizedPath = urlPath.replace(/^\/docs/, "");

  for (const product of config.products) {
    if (normalizedPath.startsWith(product.path)) {
      return product;
    }
  }

  return undefined;
}
