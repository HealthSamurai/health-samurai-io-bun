import { $ } from "bun";
import type { ProductConfig } from "./config";

// Production clone target. DOCS_REPOS_PATH is the primary env var;
// DOCS_CONTENT_PATH kept for backwards compatibility.
const CONTENT_DIR = process.env.DOCS_REPOS_PATH || process.env.DOCS_CONTENT_PATH || "./content";

/**
 * Get the local directory path for a product's docs
 * In dev mode, uses devPath from config if available
 */
export function getProductDir(product: ProductConfig): string {
  if (isDevMode() && product.devPath) {
    return product.devPath;
  }
  return `${CONTENT_DIR}/${product.id}`;
}

/**
 * Get the docs directory path within a product
 */
export function getDocsDir(product: ProductConfig): string {
  const productDir = getProductDir(product);
  // Remove leading ./ from product.docs if present
  const docsPath = product.docs.replace(/^\.\//, "");
  return `${productDir}/${docsPath}`;
}

/**
 * Get the assets directory path within a product
 */
export function getAssetsDir(product: ProductConfig): string {
  const productDir = getProductDir(product);
  const assetsPath = product.assets.replace(/^\.\//, "");
  return `${productDir}/${assetsPath}`;
}

/**
 * Clone or fetch a product's documentation repository
 */
export async function cloneOrFetch(product: ProductConfig): Promise<void> {
  const repoDir = getProductDir(product);
  const gitDir = `${repoDir}/.git`;

  const gitDirFile = Bun.file(gitDir);
  const exists = await gitDirFile.exists();

  if (exists) {
    // Fetch and reset to latest
    console.log(`[git] Fetching updates for ${product.id}...`);
    await $`git -C ${repoDir} fetch origin ${product.branch}`.quiet();
    await $`git -C ${repoDir} reset --hard origin/${product.branch}`.quiet();
    console.log(`[git] Updated ${product.id} to latest ${product.branch}`);
  } else {
    // Clone with full history (needed for per-file lastmod via git log)
    console.log(`[git] Cloning ${product.repo} for ${product.id}...`);
    const repoUrl = `https://github.com/${product.repo}.git`;
    await $`git clone --single-branch --branch ${product.branch} ${repoUrl} ${repoDir}`.quiet();
    console.log(`[git] Cloned ${product.id}`);
  }
}

/**
 * Get the current HEAD commit hash for a product
 */
export async function getGitHead(product: ProductConfig): Promise<string> {
  const repoDir = getProductDir(product);
  try {
    const result = await $`git -C ${repoDir} rev-parse HEAD`.text();
    return result.trim();
  } catch {
    return "unknown";
  }
}

/**
 * Get lastmod timestamps for all files in a product's docs directory
 * Uses git log to get the most recent commit timestamp for each file
 */
export async function getLastmod(product: ProductConfig): Promise<Map<string, string>> {
  const repoDir = getProductDir(product);
  const docsDir = getDocsDir(product);
  const docsPath = product.docs.replace(/^\.\//, "");

  const lastmod = new Map<string, string>();

  try {
    // Get all commits with their timestamps and file names
    const result = await $`git -C ${repoDir} log --format="%ct" --name-only -- ${docsPath}`.text();

    let currentTimestamp = "";

    for (const line of result.split("\n")) {
      if (/^\d+$/.test(line)) {
        // Unix timestamp line
        currentTimestamp = new Date(parseInt(line) * 1000).toISOString();
      } else if (line && currentTimestamp) {
        // File path line - only set if not already set (first occurrence = most recent)
        const relativePath = line.replace(`${docsPath}/`, "").replace(docsPath, "");
        if (relativePath && !lastmod.has(relativePath)) {
          lastmod.set(relativePath, currentTimestamp);
        }
      }
    }
  } catch (error) {
    console.warn(`[git] Failed to get lastmod for ${product.id}:`, error);
  }

  return lastmod;
}

/**
 * Check if a product's repo directory exists
 */
export async function repoExists(product: ProductConfig): Promise<boolean> {
  const repoDir = getProductDir(product);
  const gitDir = `${repoDir}/.git`;
  return Bun.file(gitDir).exists();
}

/**
 * Check if dev mode is enabled (skip git operations, use local paths)
 */
export function isDevMode(): boolean {
  return process.env.DOCS_DEV_MODE === "true";
}

/**
 * Ensure content directory exists
 */
export async function ensureContentDir(): Promise<void> {
  const dir = Bun.file(CONTENT_DIR);
  if (!(await dir.exists())) {
    await $`mkdir -p ${CONTENT_DIR}`.quiet();
  }
}
