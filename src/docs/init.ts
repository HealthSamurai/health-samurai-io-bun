/**
 * Documentation Engine Initialization
 *
 * Handles startup tasks:
 * - Load configuration
 * - Clone/fetch product repositories (or use local paths in dev mode)
 * - Index each product (parse SUMMARY.md, build URI mappings)
 * - Pre-render pages (production only)
 */

import { loadConfig, type ProductConfig } from "./config";
import {
  initState,
  setProductState,
  createEmptyProductState,
  markInitialized,
  getState,
  type ProductState,
} from "./state";
import {
  cloneOrFetch,
  getGitHead,
  getLastmod,
  getProductDir,
  getDocsDir,
  isDevMode,
  ensureContentDir,
} from "./git";
import { loadLlmsTxt } from "./llms";
import { indexProduct, loadMarkdownFiles } from "./indexing";
import { initHighlighter } from "./markdown";

/**
 * Initialize the documentation engine
 * Call this at server startup
 */
export async function initializeDocs(): Promise<void> {
  console.log("[docs] Initializing documentation engine...");
  const startTime = Date.now();

  // Initialize Shiki highlighter
  await initHighlighter();

  // Load configuration
  const config = await loadConfig();
  initState(config);

  const devMode = isDevMode();
  if (devMode) {
    console.log("[docs] Running in dev mode - using local paths");
  } else {
    // Ensure content directory exists for git clones
    await ensureContentDir();
  }

  // Initialize each product
  const results = await Promise.allSettled(
    config.products.map((product) => initializeProduct(product, devMode))
  );

  // Log results
  results.forEach((result, i) => {
    const product = config.products[i];
    if (!product) return;

    if (result.status === "fulfilled") {
      console.log(`[docs] ✓ ${product.id}: initialized`);
    } else {
      console.error(`[docs] ✗ ${product.id}: ${result.reason}`);
    }
  });

  // Mark as initialized
  markInitialized();

  const elapsed = Date.now() - startTime;
  console.log(`[docs] Initialization complete (${elapsed}ms)`);
}

/**
 * Initialize a single product
 */
async function initializeProduct(
  product: ProductConfig,
  devMode: boolean
): Promise<void> {
  // Clone or fetch repository (skip in dev mode with local path)
  if (!devMode || !product.devPath) {
    await cloneOrFetch(product);
  }

  // Create product state
  const state = createEmptyProductState();

  // Get git head (for cache busting)
  const gitHead = await getGitHead(product);
  getState().cache.gitHeads.set(product.id, gitHead);

  // Get lastmod timestamps
  const lastmod = await getLastmod(product);

  // Load all markdown files into memory (needed for URI mapping)
  await loadMarkdownFiles(product, state);

  // Index product (parse SUMMARY.md, build URI mappings)
  await indexProduct(product, state, lastmod);

  // Load llms.txt from repo (if present)
  state.llmsTxt = await loadLlmsTxt(product);

  // Store state
  setProductState(product.id, state);
  state.lastIndexed = new Date();
}

/**
 * Reload a single product (called by webhook)
 */
export async function reloadProduct(productId: string): Promise<void> {
  console.log(`[docs] Reloading product: ${productId}`);
  const startTime = Date.now();

  const config = await loadConfig();
  const product = config.products.find((p) => p.id === productId);

  if (!product) {
    throw new Error(`Unknown product: ${productId}`);
  }

  const devMode = isDevMode();

  // Re-clone/fetch
  if (!devMode || !product.devPath) {
    await cloneOrFetch(product);
  }

  // Re-initialize
  await initializeProduct(product, devMode);

  console.log(`[docs] Reload complete: ${productId} (${Date.now() - startTime}ms)`);
}
