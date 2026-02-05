/**
 * JSON-LD Structured Data for Documentation Pages
 *
 * Generates schema.org structured data based on the detected schema type
 * (article, howto, faq) of each documentation page.
 */

export interface JsonLdOptions {
  title: string;
  description: string;
  url: string;
  lastmod?: string;
  productName: string;
  schemaType?: "article" | "howto" | "faq" | null;
}

const PUBLISHER = {
  "@type": "Organization",
  name: "Health Samurai",
  url: "https://health-samurai.io",
  logo: {
    "@type": "ImageObject",
    url: "https://health-samurai.io/assets/images/logo.svg",
  },
};

const AUTHOR = {
  "@type": "Organization",
  name: "Health Samurai",
  url: "https://health-samurai.io",
};

/**
 * Generate a JSON-LD <script> tag for structured data.
 * Returns empty string if schemaType is null.
 */
export function generateJsonLd(options: JsonLdOptions): string {
  const { title, description, url, lastmod, productName, schemaType } = options;

  if (schemaType === null || schemaType === undefined) {
    return "";
  }

  let data: Record<string, unknown>;

  switch (schemaType) {
    case "howto":
      data = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        description,
        url,
      };
      break;

    case "faq":
      data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url,
      };
      break;

    case "article":
    default:
      data = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description,
        url,
        author: AUTHOR,
        publisher: PUBLISHER,
        ...(lastmod ? { dateModified: lastmod } : {}),
      };
      break;
  }

  const json = JSON.stringify(data);
  return `<script type="application/ld+json">${json}</script>`;
}
