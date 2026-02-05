/**
 * Redirects Parser
 *
 * Parses redirects.yaml files that define URL redirects.
 */

import { parse } from "yaml";

/**
 * Parse redirects.yaml content into a Map
 *
 * Format:
 * ```yaml
 * redirects:
 *   old/path: new/path.md
 *   another/old: another/new.md
 * ```
 */
export function parseRedirects(content: string): Map<string, string> {
  const redirects = new Map<string, string>();

  try {
    const data = parse(content);

    if (data?.redirects && typeof data.redirects === "object") {
      for (const [from, to] of Object.entries(data.redirects)) {
        if (typeof to === "string") {
          redirects.set(String(from), to);
        }
      }
    }
  } catch (e) {
    console.warn("[redirects] Failed to parse redirects.yaml:", e);
  }

  return redirects;
}

/**
 * Load redirects from a file path
 */
export async function loadRedirects(filepath: string): Promise<Map<string, string>> {
  const file = Bun.file(filepath);

  if (!(await file.exists())) {
    return new Map();
  }

  const content = await file.text();
  return parseRedirects(content);
}
