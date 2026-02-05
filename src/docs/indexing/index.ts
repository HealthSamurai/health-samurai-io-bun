/**
 * Documentation Indexing
 *
 * Builds indexes for navigation, URI mapping, and search.
 */

export { parseSummary, flattenNavigation, buildNavIndex } from "./summary";
export { buildUriToFileIndex, buildFileToUriIndex, resolveUriToFile } from "./uri-to-file";
export { parseRedirects, loadRedirects } from "./redirects";
export { generateSitemap, generateSitemapIndex } from "./sitemap";

import type { ProductConfig } from "../config";
import type { ProductState } from "../state";
import { getProductDir, getDocsDir } from "../git";
import { parseSummary, flattenNavigation } from "./summary";
import { buildUriToFileIndex, buildFileToUriIndex } from "./uri-to-file";
import { loadRedirects } from "./redirects";
import { generateSitemap } from "./sitemap";

/**
 * Index a product's documentation
 *
 * This reads SUMMARY.md, builds navigation tree, URI mappings,
 * and generates sitemap.
 */
export async function indexProduct(
  product: ProductConfig,
  state: ProductState,
  lastmod: Map<string, string>
): Promise<void> {
  const productDir = getProductDir(product);
  const docsDir = getDocsDir(product);

  // Read SUMMARY.md
  const summaryPath = `${productDir}/${product.summary}`;
  const summaryFile = Bun.file(summaryPath);

  if (!(await summaryFile.exists())) {
    throw new Error(`SUMMARY.md not found: ${summaryPath}`);
  }

  const summaryContent = await summaryFile.text();

  // Parse navigation
  state.navigation = parseSummary(product.path, summaryContent);
  state.flatNavigation = flattenNavigation(state.navigation);

  // Load redirects
  const redirectsPath = `${productDir}/${product.redirects}`;
  state.redirects = await loadRedirects(redirectsPath);

  // Build URI mappings (use mdFiles to resolve directories)
  const mdFileKeys = new Set(state.mdFiles.keys());
  state.uriToFile = buildUriToFileIndex(
    product.path,
    state.navigation,
    state.redirects,
    mdFileKeys
  );
  state.fileToUri = buildFileToUriIndex(state.uriToFile);

  // Store lastmod
  state.lastmod = lastmod;

  // Generate sitemap
  const baseUrl = process.env.BASE_URL || "https://health-samurai.io";
  state.sitemap = generateSitemap(baseUrl, product.path, state.uriToFile, lastmod);

  // Log stats
  console.log(
    `[index] ${product.id}: ${state.uriToFile.size} pages, ${state.redirects.size} redirects`
  );
}

/**
 * Read all markdown files into state
 */
export async function loadMarkdownFiles(
  product: ProductConfig,
  state: ProductState
): Promise<void> {
  const docsDir = getDocsDir(product);

  // Use glob to find all .md files
  const glob = new Bun.Glob("**/*.md");

  for await (const filepath of glob.scan({ cwd: docsDir })) {
    const fullPath = `${docsDir}/${filepath}`;
    const content = await Bun.file(fullPath).text();
    state.mdFiles.set(filepath, content);
  }

  console.log(`[index] ${product.id}: loaded ${state.mdFiles.size} markdown files`);
}
