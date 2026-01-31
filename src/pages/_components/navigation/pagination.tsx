/**
 * Pagination Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Pagination, PaginationSimple, PaginationInfo } from "../../../components/ui/Pagination";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Pagination",
  description: "Navigation for paginated content",
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
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function PaginationDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Pagination Component</h1>
        <p class="mt-2 text-gray-600">
          Navigation controls for paginated lists, tables, and search results.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Pagination, PaginationSimple, PaginationInfo } from "../components/ui/Pagination";
        </code>
      </div>

      ${Section({
        title: "Basic Pagination",
        description: "Full pagination with page numbers and navigation arrows.",
        children: Example({
          label: "Default pagination",
          children: Pagination({
            current: 1,
            total: 10,
            baseUrl: "/items",
          }),
          code: `<Pagination current={1} total={10} baseUrl="/items" />`,
        }),
      })}

      ${Section({
        title: "With Item Info",
        description: "Show the range of items being displayed.",
        children: Example({
          label: "Pagination with info",
          children: Pagination({
            current: 3,
            total: 10,
            baseUrl: "/items",
            showInfo: true,
            itemsPerPage: 10,
            totalItems: 97,
          }),
          code: `<Pagination
  current={3}
  total={10}
  baseUrl="/items"
  showInfo
  itemsPerPage={10}
  totalItems={97}
/>`,
        }),
      })}

      ${Section({
        title: "Current Page States",
        description: "Different current page positions.",
        children: `
          ${Example({
            label: "First page (prev disabled)",
            children: Pagination({ current: 1, total: 10, baseUrl: "/items" }),
            code: `<Pagination current={1} total={10} baseUrl="/items" />`,
          })}
          ${Example({
            label: "Middle page",
            children: Pagination({ current: 5, total: 10, baseUrl: "/items" }),
            code: `<Pagination current={5} total={10} baseUrl="/items" />`,
          })}
          ${Example({
            label: "Last page (next disabled)",
            children: Pagination({ current: 10, total: 10, baseUrl: "/items" }),
            code: `<Pagination current={10} total={10} baseUrl="/items" />`,
          })}
        `,
      })}

      ${Section({
        title: "Few Pages",
        description: "When there are only a few pages, all are shown.",
        children: Example({
          label: "5 pages total",
          children: Pagination({ current: 3, total: 5, baseUrl: "/items" }),
          code: `<Pagination current={3} total={5} baseUrl="/items" />`,
        }),
      })}

      ${Section({
        title: "Simple Pagination",
        description: "Just previous/next buttons without page numbers.",
        children: `
          ${Example({
            label: "Both links enabled",
            children: `<div class="p-4">${PaginationSimple({ prevHref: "/page/1", nextHref: "/page/3" })}</div>`,
            code: `<PaginationSimple prevHref="/page/1" nextHref="/page/3" />`,
          })}
          ${Example({
            label: "First page (no prev)",
            children: `<div class="p-4">${PaginationSimple({ nextHref: "/page/2" })}</div>`,
            code: `<PaginationSimple nextHref="/page/2" />`,
          })}
          ${Example({
            label: "Last page (no next)",
            children: `<div class="p-4">${PaginationSimple({ prevHref: "/page/4" })}</div>`,
            code: `<PaginationSimple prevHref="/page/4" />`,
          })}
        `,
      })}

      ${Section({
        title: "Custom Labels",
        description: "Customize the previous/next button labels.",
        children: Example({
          label: "Custom labels",
          children: `<div class="p-4">${PaginationSimple({
            prevHref: "/older",
            nextHref: "/newer",
            prevLabel: "Older posts",
            nextLabel: "Newer posts",
          })}</div>`,
          code: `<PaginationSimple
  prevHref="/older"
  nextHref="/newer"
  prevLabel="Older posts"
  nextLabel="Newer posts"
/>`,
        }),
      })}

      ${Section({
        title: "Pagination Info Only",
        description: "Just the info text, for use with custom controls.",
        children: Example({
          label: "Info component",
          children: `<div class="p-4">${PaginationInfo({
            current: 2,
            total: 10,
            itemsPerPage: 25,
            totalItems: 243,
          })}</div>`,
          code: `<PaginationInfo
  current={2}
  total={10}
  itemsPerPage={25}
  totalItems={243}
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
              <tr><td class="px-4 py-3 font-mono text-primary">current</td><td class="px-4 py-3">number</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Current page (1-indexed)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">total</td><td class="px-4 py-3">number</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Total number of pages</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">baseUrl</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Base URL for page links</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">pageParam</td><td class="px-4 py-3">string</td><td class="px-4 py-3">"page"</td><td class="px-4 py-3">Query parameter name</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showInfo</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show "Showing X to Y of Z"</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">itemsPerPage</td><td class="px-4 py-3">number</td><td class="px-4 py-3">10</td><td class="px-4 py-3">Items per page (for info)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">totalItems</td><td class="px-4 py-3">number</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Total items (for info)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">maxButtons</td><td class="px-4 py-3">number</td><td class="px-4 py-3">7</td><td class="px-4 py-3">Max page buttons to show</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Pagination",
    currentPath: "/_components/navigation/pagination",
    children: content,
    devMode,
  });
}
