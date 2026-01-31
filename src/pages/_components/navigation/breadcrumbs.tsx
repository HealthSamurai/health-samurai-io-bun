/**
 * Breadcrumbs Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Breadcrumbs, BreadcrumbsCompact, BreadcrumbsBar } from "../../../components/ui/Breadcrumbs";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Breadcrumbs",
  description: "Navigation trail for hierarchical page structure",
  fullPage: true,
};

function Section({ title, description, children }: { title: string; description?: string; children: string }): string {
  return `
    <div class="mb-12">
      <h2 class="text-lg font-semibold text-gray-900 mb-2">${title}</h2>
      ${description ? `<p class="text-sm text-gray-600 mb-4">${description}</p>` : ""}
      <div class="space-y-4">
        ${children}
      </div>
    </div>
  `;
}

function CodeBlock({ code }: { code: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, "tsx")}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function BreadcrumbsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Breadcrumbs Component</h1>
        <p class="mt-2 text-gray-600">
          Navigation trail showing the current page location within the site hierarchy.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Breadcrumbs, BreadcrumbsCompact, BreadcrumbsBar } from "../components/ui/Breadcrumbs";
        </code>
      </div>

      ${Section({
        title: "Basic Breadcrumbs",
        description: "Simple breadcrumb navigation with links.",
        children: Example({
          label: "Default breadcrumbs",
          children: Breadcrumbs({
            items: [
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Widget Pro", href: "/products/widget-pro" },
              { label: "Details" },
            ],
          }),
          code: `<Breadcrumbs items={[
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Widget Pro", href: "/products/widget-pro" },
  { label: "Details" },
]} />`,
        }),
      })}

      ${Section({
        title: "With Home Icon",
        description: "Replace the first item label with a home icon.",
        children: Example({
          label: "Home icon breadcrumbs",
          children: Breadcrumbs({
            items: [
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Project Nero" },
            ],
            showHomeIcon: true,
          }),
          code: `<Breadcrumbs
  showHomeIcon
  items={[
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Project Nero" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Separator Styles",
        description: "Different separator options between items.",
        children: `
          ${Example({
            label: "Chevron separator (default)",
            children: Breadcrumbs({
              separator: "chevron",
              items: [
                { label: "Home", href: "/" },
                { label: "Docs", href: "/docs" },
                { label: "API Reference" },
              ],
            }),
            code: `<Breadcrumbs separator="chevron" items={[...]} />`,
          })}
          ${Example({
            label: "Slash separator",
            children: Breadcrumbs({
              separator: "slash",
              items: [
                { label: "Home", href: "/" },
                { label: "Docs", href: "/docs" },
                { label: "API Reference" },
              ],
            }),
            code: `<Breadcrumbs separator="slash" items={[...]} />`,
          })}
          ${Example({
            label: "Arrow separator",
            children: Breadcrumbs({
              separator: "arrow",
              items: [
                { label: "Home", href: "/" },
                { label: "Docs", href: "/docs" },
                { label: "API Reference" },
              ],
            }),
            code: `<Breadcrumbs separator="arrow" items={[...]} />`,
          })}
        `,
      })}

      ${Section({
        title: "Container Variants",
        description: "Different visual container styles.",
        children: `
          ${Example({
            label: "Simple (no container)",
            children: Breadcrumbs({
              variant: "simple",
              items: [
                { label: "Home", href: "/" },
                { label: "Settings" },
              ],
            }),
            code: `<Breadcrumbs variant="simple" items={[...]} />`,
          })}
          ${Example({
            label: "Contained (with shadow)",
            children: Breadcrumbs({
              variant: "contained",
              items: [
                { label: "Home", href: "/" },
                { label: "Settings" },
              ],
            }),
            code: `<Breadcrumbs variant="contained" items={[...]} />`,
          })}
        `,
      })}

      ${Section({
        title: "Full-Width Bar",
        description: "Breadcrumbs in a full-width bar with diagonal separators.",
        children: Example({
          label: "Bar style breadcrumbs",
          children: BreadcrumbsBar({
            items: [
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Project Nero" },
            ],
          }),
          code: `<BreadcrumbsBar items={[
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Project Nero" },
]} />`,
        }),
      })}

      ${Section({
        title: "Compact Breadcrumbs",
        description: "Simple back navigation for mobile or compact layouts.",
        children: Example({
          label: "Compact with back link",
          children: BreadcrumbsCompact({
            backHref: "/projects",
            backLabel: "Projects",
            currentLabel: "Project Details",
          }),
          code: `<BreadcrumbsCompact
  backHref="/projects"
  backLabel="Projects"
  currentLabel="Project Details"
/>`,
        }),
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">items</td><td class="px-4 py-3">BreadcrumbItem[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Breadcrumb items</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">separator</td><td class="px-4 py-3">"slash" | "chevron" | "arrow"</td><td class="px-4 py-3">"chevron"</td><td class="px-4 py-3">Separator style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showHomeIcon</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show home icon for first item</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "contained" | "bar"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Container style</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">BreadcrumbItem</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Display text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">href</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Link URL (omit for current page)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Breadcrumbs",
    currentPath: "/_components/navigation/breadcrumbs",
    children: content,
    devMode,
  });
}
