/**
 * Sitemap Generation
 *
 * Generates sitemap.xml for documentation pages.
 */

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generate sitemap XML for a product's documentation
 */
export function generateSitemap(
  baseUrl: string,
  productPath: string,
  uriToFile: Map<string, string>,
  lastmod: Map<string, string>
): string {
  const urls: string[] = [];

  for (const [uri, filepath] of uriToFile) {
    // Skip external URLs
    if (uri.startsWith("http")) continue;

    const loc = `${baseUrl}${uri}`;
    const lastmodDate = lastmod.get(filepath);

    let urlEntry = `  <url>\n    <loc>${escapeXml(loc)}</loc>`;

    if (lastmodDate) {
      // Format as YYYY-MM-DD
      const dateStr = lastmodDate.split("T")[0];
      urlEntry += `\n    <lastmod>${dateStr}</lastmod>`;
    }

    urlEntry += `\n  </url>`;
    urls.push(urlEntry);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

/**
 * Generate sitemap index that references all product sitemaps
 */
export function generateSitemapIndex(
  baseUrl: string,
  productPaths: string[]
): string {
  const sitemaps = productPaths.map((path) => {
    return `  <sitemap>
    <loc>${escapeXml(baseUrl)}${path}/sitemap.xml</loc>
  </sitemap>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.join("\n")}
</sitemapindex>`;
}
