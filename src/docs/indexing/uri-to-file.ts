/**
 * URI to File Mapping
 *
 * Builds bidirectional mappings between URIs and file paths.
 */

import type { NavigationSection, NavigationItem } from "../state";

/**
 * Build URI → filepath mapping from navigation tree
 *
 * @param productPath - URL path prefix (e.g., /docs/fhirbase)
 * @param navigation - Parsed navigation sections
 * @param redirects - Redirect mappings
 * @param mdFiles - Set of existing markdown files (for resolving directories)
 * @returns Map of URI → relative filepath
 */
export function buildUriToFileIndex(
  productPath: string,
  navigation: NavigationSection[],
  redirects: Map<string, string>,
  mdFiles?: Set<string>
): Map<string, string> {
  const index = new Map<string, string>();

  function processItem(item: NavigationItem): void {
    if (item.isExternal || !item.href) return;

    // Convert href to filepath
    // /docs/fhirbase/getting-started → getting-started.md OR getting-started/README.md
    // /docs/fhirbase → README.md
    // /docs/fhirbase/integrations → integrations/README.md

    let filepath = item.href;

    // Remove product path prefix
    filepath = filepath.replace(productPath, "");
    filepath = filepath.replace(/^\//, "");

    if (!filepath || filepath === "") {
      // Root path → README.md
      filepath = "README.md";
    } else {
      // Add .md extension if not present
      if (!filepath.endsWith(".md")) {
        // Check if it's a directory with README.md or a direct file
        const directFile = `${filepath}.md`;
        const indexFile = `${filepath}/README.md`;

        if (mdFiles?.has(indexFile)) {
          filepath = indexFile;
        } else if (mdFiles?.has(directFile)) {
          filepath = directFile;
        } else {
          // Default to direct file if we can't check
          filepath = directFile;
        }
      }
    }

    index.set(item.href, filepath);

    // Process children
    item.children?.forEach(processItem);
  }

  for (const section of navigation) {
    section.children.forEach(processItem);
  }

  // Add redirects
  for (const [from, to] of redirects) {
    // Normalize redirect paths
    const fromUri = normalizeRedirectUri(productPath, from);
    const toUri = normalizeRedirectUri(productPath, to);

    // Get the target file from existing index
    const toFile = index.get(toUri);
    if (toFile) {
      index.set(fromUri, toFile);
    }
  }

  return index;
}

/**
 * Build filepath → URI mapping (reverse of uriToFile)
 */
export function buildFileToUriIndex(
  uriToFile: Map<string, string>
): Map<string, string> {
  const index = new Map<string, string>();

  for (const [uri, filepath] of uriToFile) {
    // Only set if not already set (first URI wins for duplicates)
    if (!index.has(filepath)) {
      index.set(filepath, uri);
    }
  }

  return index;
}

/**
 * Normalize a redirect path to a full URI
 */
function normalizeRedirectUri(productPath: string, path: string): string {
  // Remove .md extension
  let normalized = path.replace(/\.md$/, "");

  // Handle leading slash
  if (normalized.startsWith("/")) {
    // Already absolute path relative to site root
    return normalized;
  }

  // Relative path - prepend product path
  return `${productPath}/${normalized}`.replace(/\/+/g, "/");
}

/**
 * Resolve a URI to a file path, handling directory indexes
 *
 * @param uri - Request URI
 * @param uriToFile - URI to file mapping
 * @param docsDir - Base docs directory path
 * @returns Resolved file path or null if not found
 */
export async function resolveUriToFile(
  uri: string,
  uriToFile: Map<string, string>,
  docsDir: string
): Promise<string | null> {
  // Direct lookup
  let filepath = uriToFile.get(uri);
  if (filepath) {
    return filepath;
  }

  // Try with trailing slash removed
  if (uri.endsWith("/")) {
    filepath = uriToFile.get(uri.slice(0, -1));
    if (filepath) return filepath;
  }

  // Try directory index (README.md)
  const indexPath = `${uri.replace(/\/$/, "")}/README.md`;
  filepath = uriToFile.get(indexPath);
  if (filepath) return filepath;

  return null;
}
