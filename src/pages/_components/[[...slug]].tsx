/**
 * Dynamic component showcase page
 * Displays Tailwind Plus UI blocks for each category
 *
 * Route: /_components/[group]/[category]
 * Example: /_components/elements/buttons
 */
import { ComponentsLayout } from "../../components/ComponentsLayout";

export const metadata = {
  title: "Components",
  description: "Tailwind Plus UI Components",
  fullPage: true,
};

// Read component HTML from file system
async function loadComponentHtml(group: string, category: string): Promise<string | null> {
  const filePath = `./tailwind-ui/${group}/${category}.html`;
  try {
    const file = Bun.file(filePath);
    if (await file.exists()) {
      return await file.text();
    }
  } catch (e) {
    // File not found
  }
  return null;
}

// Parse component HTML into sections
function parseComponents(html: string): { name: string; html: string }[] {
  const sections: { name: string; html: string }[] = [];
  const lines = html.split("\n");
  let currentName = "";
  let currentHtml = "";

  for (const line of lines) {
    // Check for HTML comment with component name
    const commentMatch = line.match(/^<!-- (.+) -->$/);
    if (commentMatch) {
      // Save previous component if exists
      if (currentName && currentHtml.trim()) {
        sections.push({ name: currentName, html: currentHtml.trim() });
      }
      currentName = commentMatch[1]!;
      currentHtml = "";
    } else {
      currentHtml += line + "\n";
    }
  }

  // Save last component
  if (currentName && currentHtml.trim()) {
    sections.push({ name: currentName, html: currentHtml.trim() });
  }

  // If no comments found, treat whole file as one component
  if (sections.length === 0 && html.trim()) {
    sections.push({ name: "Component", html: html.trim() });
  }

  return sections;
}

// Convert slug to display name
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Component card with live preview
function ComponentCard({ name, html, index }: { name: string; html: string; index: number }): string {
  const displayName = slugToName(name);
  const signalId = `show_${index}`;

  return `
    <div class="mb-12 border border-gray-200 rounded-lg overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900">${displayName}</h3>
        <div class="flex gap-2">
          <button
            class="px-3 py-1 text-xs font-medium rounded-md transition-colors"
            data-class="{'bg-white shadow-sm text-gray-900': !$${signalId}, 'text-gray-500 hover:text-gray-700': $${signalId}}"
            data-on:click="$${signalId} = false"
          >
            Preview
          </button>
          <button
            class="px-3 py-1 text-xs font-medium rounded-md transition-colors"
            data-class="{'bg-white shadow-sm text-gray-900': $${signalId}, 'text-gray-500 hover:text-gray-700': !$${signalId}}"
            data-on:click="$${signalId} = true"
          >
            Code
          </button>
        </div>
      </div>

      <!-- Preview -->
      <div data-show="!$${signalId}" class="p-8 bg-white flex items-center justify-center min-h-[120px]">
        <div class="w-full">
          ${html}
        </div>
      </div>

      <!-- Code -->
      <div data-show="$${signalId}" style="display: none" class="bg-gray-900 p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words"><code>${escapeHtml(html)}</code></pre>
      </div>
    </div>
  `;
}

// HTML escape for code display
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type Params = {
  slug?: string | string[];
  devMode?: boolean;
};

export default async function ComponentsPage({ slug, devMode }: Params): Promise<string> {
  // Normalize slug to array
  const slugParts = !slug ? [] : Array.isArray(slug) ? slug : slug.split("/").filter(Boolean);

  // If no slug, redirect to index
  if (slugParts.length === 0) {
    // Import and return the index page
    const indexModule = await import("./index");
    return indexModule.default();
  }

  // Parse slug: [group, category]
  if (slugParts.length !== 2) {
    return ComponentsLayout({
      title: "Not Found",
      currentPath: `/_components/${slugParts.join("/")}`,
      children: `
        <div class="text-center py-12">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Component Not Found</h1>
          <p class="text-gray-600 mb-8">The component category you're looking for doesn't exist.</p>
          <a href="/_components" class="text-primary hover:underline">Back to Components</a>
        </div>
      `,
      devMode,
    });
  }

  const [group, category] = slugParts;
  const currentPath = `/_components/${group}/${category}`;
  const title = `${slugToName(category!)} | ${slugToName(group!)}`;

  // Load component HTML
  const html = await loadComponentHtml(group!, category!);

  if (!html) {
    return ComponentsLayout({
      title: "Not Found",
      currentPath,
      children: `
        <div class="text-center py-12">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Component Not Found</h1>
          <p class="text-gray-600 mb-8">Could not load components for ${slugToName(group!)} / ${slugToName(category!)}</p>
          <a href="/_components" class="text-primary hover:underline">Back to Components</a>
        </div>
      `,
      devMode,
    });
  }

  // Parse into individual components
  const components = parseComponents(html);

  // Build signals initialization
  const signals = components.map((_, i) => `show_${i}: false`).join(", ");

  const content = `
    <div data-signals="{${signals}}">
      <div class="mb-8">
        <nav class="text-sm text-gray-500 mb-2">
          <a href="/_components" class="hover:text-gray-900">Components</a>
          <span class="mx-2">/</span>
          <a href="/_components/${group}" class="hover:text-gray-900">${slugToName(group!)}</a>
          <span class="mx-2">/</span>
          <span class="text-gray-900">${slugToName(category!)}</span>
        </nav>
        <h1 class="text-2xl font-bold text-gray-900">${slugToName(category!)}</h1>
        <p class="mt-1 text-gray-600">${components.length} component${components.length !== 1 ? "s" : ""} in this category</p>
      </div>

      ${components.map((comp, i) => ComponentCard({ name: comp.name, html: comp.html, index: i })).join("")}
    </div>
  `;

  return ComponentsLayout({
    title,
    currentPath,
    children: content,
    devMode,
  });
}
