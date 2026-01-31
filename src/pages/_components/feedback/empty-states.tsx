/**
 * Empty State Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { EmptyState, EmptySearchResults, EmptyList } from "../../../components/ui/EmptyState";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Empty States",
  description: "Placeholders when there's no data to display",
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
      <div class="bg-gray-50 p-8 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function EmptyStatesDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Empty States</h1>
        <p class="mt-2 text-gray-600">
          Display when there's no content or data available.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { EmptyState, EmptySearchResults, EmptyList } from "../components/ui/EmptyState";
        </code>
      </div>

      ${Section({
        title: "Simple Empty State",
        description: "Basic empty state with icon, title, description, and action.",
        children: Example({
          label: "With action button",
          children: EmptyState({
            icon: "folder",
            title: "No projects",
            description: "Get started by creating a new project.",
            action: { label: "New Project", href: "#" },
          }),
          code: `<EmptyState
  icon="folder"
  title="No projects"
  description="Get started by creating a new project."
  action={{ label: "New Project", href: "#" }}
/>`,
        }),
      })}

      ${Section({
        title: "Icons",
        description: "Different icons for various empty states.",
        children: `
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            ${["folder", "document", "photo", "users", "inbox", "search", "chart", "calendar"].map(icon => `
              <div class="bg-white p-6 rounded-lg border border-gray-200">
                ${EmptyState({
                  icon: icon as any,
                  title: `No ${icon}s`,
                  size: "sm",
                })}
              </div>
            `).join("")}
          </div>
          ${CodeBlock({ code: `<EmptyState icon="folder" title="No folders" />
<EmptyState icon="document" title="No documents" />
<EmptyState icon="users" title="No users" />` })}
        `,
      })}

      ${Section({
        title: "Dashed Border Variant",
        description: "Empty state with dashed border, often used for drag-and-drop zones.",
        children: Example({
          label: "Dashed variant",
          children: EmptyState({
            variant: "dashed",
            icon: "photo",
            title: "No images",
            description: "Drag and drop images here, or click to browse.",
            action: { label: "Upload Image", href: "#" },
          }),
          code: `<EmptyState
  variant="dashed"
  icon="photo"
  title="No images"
  description="Drag and drop images here, or click to browse."
  action={{ label: "Upload Image", href: "#" }}
/>`,
        }),
      })}

      ${Section({
        title: "Card Variant",
        description: "Empty state in a card container.",
        children: Example({
          label: "Card variant",
          children: EmptyState({
            variant: "card",
            icon: "inbox",
            title: "Your inbox is empty",
            description: "All caught up! No new messages.",
          }),
          code: `<EmptyState
  variant="card"
  icon="inbox"
  title="Your inbox is empty"
  description="All caught up! No new messages."
/>`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large empty states.",
        children: `
          ${Example({
            label: "Small",
            children: EmptyState({
              size: "sm",
              icon: "document",
              title: "No files",
              description: "Upload your first file.",
              action: { label: "Upload", href: "#" },
            }),
            code: `<EmptyState size="sm" icon="document" title="No files" />`,
          })}
          ${Example({
            label: "Large",
            children: EmptyState({
              size: "lg",
              icon: "chart",
              title: "No data yet",
              description: "Start tracking your metrics to see analytics here.",
              action: { label: "Set Up Analytics", href: "#" },
            }),
            code: `<EmptyState size="lg" icon="chart" title="No data yet" />`,
          })}
        `,
      })}

      ${Section({
        title: "With Multiple Actions",
        description: "Primary and secondary action buttons.",
        children: Example({
          label: "Two actions",
          children: EmptyState({
            icon: "document",
            title: "No documents",
            description: "Create a new document or import from another source.",
            action: { label: "Create Document", href: "#" },
            secondaryAction: { label: "Import", href: "#" },
          }),
          code: `<EmptyState
  icon="document"
  title="No documents"
  description="Create a new document or import from another source."
  action={{ label: "Create Document", href: "#" }}
  secondaryAction={{ label: "Import", href: "#" }}
/>`,
        }),
      })}

      ${Section({
        title: "Search Results",
        description: "Empty state specifically for search with no results.",
        children: Example({
          label: "No search results",
          children: EmptySearchResults({
            query: "fhir implementation",
            suggestions: ["FHIR", "implementation guide", "HL7"],
            onClear: "$search = ''",
          }),
          code: `<EmptySearchResults
  query="fhir implementation"
  suggestions={["FHIR", "implementation guide", "HL7"]}
  onClear="$search = ''"
/>`,
        }),
      })}

      ${Section({
        title: "Empty List",
        description: "Convenience component for empty lists/tables.",
        children: Example({
          label: "Empty list",
          children: EmptyList({
            title: "No items",
            description: "Get started by adding your first item.",
            actionLabel: "Add Item",
            actionHref: "#",
          }),
          code: `<EmptyList
  title="No items"
  description="Get started by adding your first item."
  actionLabel="Add Item"
  actionHref="#"
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
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">"folder" | "document" | "photo" | "users" | "inbox" | "search" | "chart" | "calendar" | "plus"</td><td class="px-4 py-3">"folder"</td><td class="px-4 py-3">Icon to display</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Title text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Description text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">action</td><td class="px-4 py-3">{ label, href?, onClick? }</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Primary action button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "dashed" | "card"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Size variant</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Empty States",
    currentPath: "/_components/feedback/empty-states",
    children: content,
    devMode,
  });
}
