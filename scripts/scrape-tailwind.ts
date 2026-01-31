#!/usr/bin/env bun
/**
 * Scrapes Tailwind Plus UI blocks via CDP
 * Prerequisites:
 *   1. Chrome running: google-chrome --headless=new --remote-debugging-port=9222 --disable-gpu about:blank
 *   2. CDP server running: bun src/index.js (from chromoi directory)
 *   3. Signed into Tailwind Plus in the browser
 *
 * Usage: bun scripts/scrape-tailwind.ts [category-url]
 */

const CDP_URL = "http://localhost:2229/cdp";

async function cdp(method: string, params: Record<string, any> = {}): Promise<any> {
  const res = await fetch(CDP_URL, {
    method: "POST",
    body: JSON.stringify({ method, params }),
  });
  return res.json();
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function navigate(url: string): Promise<void> {
  await cdp("Page.navigate", { url });
  await sleep(3000); // Wait for page to load
}

async function evaluate(expression: string): Promise<any> {
  const result = await cdp("Runtime.evaluate", { expression });
  return result?.result?.value;
}

interface ComponentData {
  name: string;
  html: string;
}

async function scrapeComponentPage(url: string): Promise<ComponentData[]> {
  console.log(`Scraping: ${url}`);
  await navigate(url);

  // Get component section titles
  const titlesJson = await evaluate(`
    JSON.stringify([...document.querySelectorAll('h2')].filter(h => {
      // Find h2s that have a sibling with Code button
      const parent = h.closest('section') || h.parentElement?.parentElement?.parentElement;
      return parent && parent.querySelector('button');
    }).map(h => h.textContent.trim()))
  `);
  const titles: string[] = JSON.parse(typeof titlesJson === "string" ? titlesJson : "[]");
  console.log(`Found ${titles.length} component titles`);

  // Click all Code buttons to reveal code
  await evaluate(`
    [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Code').forEach(b => b.click())
  `);
  await sleep(1000);

  // Get all code blocks
  const codesJson = await evaluate(`
    JSON.stringify([...document.querySelectorAll('pre code, pre')].map(c => c.textContent))
  `);
  const codes: string[] = JSON.parse(typeof codesJson === "string" ? codesJson : "[]");
  console.log(`Found ${codes.length} code blocks`);

  // Match titles with codes
  const components: ComponentData[] = [];
  for (let i = 0; i < Math.min(titles.length, codes.length); i++) {
    const title = titles[i] ?? "";
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    components.push({
      name: name || `component-${i + 1}`,
      html: codes[i] ?? "",
    });
  }

  return components;
}

function extractCategoryInfo(url: string): { group: string; category: string } {
  // URL format: https://tailwindcss.com/plus/ui-blocks/application-ui/[group]/[category]
  const parts = url.split("/");
  return {
    group: parts.at(-2) ?? "unknown",
    category: parts.at(-1) ?? "unknown",
  };
}

async function saveComponents(
  components: ComponentData[],
  group: string,
  category: string
): Promise<void> {
  const baseDir = `/Users/niquola/health-samurai/tailwind-ui/${group}`;
  await Bun.$`mkdir -p ${baseDir}`;

  // Save each component as separate HTML file
  for (const comp of components) {
    const filename = `${baseDir}/${category}-${comp.name}.html`;
    await Bun.write(filename, comp.html);
    console.log(`Saved: ${filename}`);
  }

  // Also save a combined file
  const combinedFile = `${baseDir}/${category}.html`;
  const combined = components
    .map((c) => `<!-- ${c.name} -->\n${c.html}`)
    .join("\n\n");
  await Bun.write(combinedFile, combined);
  console.log(`Saved combined: ${combinedFile}`);
}

// Application UI categories
const CATEGORIES = [
  "https://tailwindcss.com/plus/ui-blocks/application-ui/application-shells/stacked",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/application-shells/sidebar",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/application-shells/multi-column",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/headings/page-headings",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/headings/card-headings",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/headings/section-headings",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/data-display/description-lists",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/data-display/stats",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/data-display/calendars",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/lists/stacked-lists",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/lists/tables",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/lists/grid-lists",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/lists/feeds",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/form-layouts",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/input-groups",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/select-menus",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/sign-in-forms",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/textareas",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/radio-groups",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/checkboxes",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/toggles",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/action-panels",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/forms/comboboxes",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/feedback/alerts",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/feedback/empty-states",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/pagination",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/tabs",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/vertical-navigation",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/sidebar-navigation",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/breadcrumbs",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/progress-bars",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/command-palettes",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/drawers",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/notifications",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/elements/avatars",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/elements/badges",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/elements/dropdowns",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/elements/buttons",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/elements/button-groups",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/layout/containers",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/layout/cards",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/layout/list-containers",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/layout/media-objects",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/layout/dividers",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/home-screens",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/detail-screens",
  "https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/settings-screens",
];

async function main() {
  const args = process.argv.slice(2);

  // If a specific URL is provided, scrape just that
  if (args[0]) {
    const url = args[0];
    const { group, category } = extractCategoryInfo(url);
    const components = await scrapeComponentPage(url);
    await saveComponents(components, group, category);
    return;
  }

  // Otherwise, scrape all categories
  console.log(`Scraping ${CATEGORIES.length} categories...`);
  for (const url of CATEGORIES) {
    try {
      const { group, category } = extractCategoryInfo(url);
      const components = await scrapeComponentPage(url);
      await saveComponents(components, group, category);
    } catch (error) {
      console.error(`Error scraping ${url}:`, error);
    }
  }
  console.log("Done!");
}

main();
