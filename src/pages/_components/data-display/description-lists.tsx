/**
 * Description List Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { DescriptionList, DescriptionListHorizontal, DescriptionListTwoColumn, AttachmentList } from "../../../components/ui/DescriptionList";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Description Lists",
  description: "Display labeled data in key-value format",
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

export default function DescriptionListsDemo({ devMode }: { devMode?: boolean }): string {
  const sampleItems = [
    { label: "Full name", value: "Margot Foster" },
    { label: "Application for", value: "Backend Developer" },
    { label: "Email address", value: "margotfoster@example.com" },
    { label: "Salary expectation", value: "$120,000" },
  ];

  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Description Lists</h1>
        <p class="mt-2 text-gray-600">
          Display labeled data in a structured key-value format.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { DescriptionList, DescriptionListHorizontal, DescriptionListTwoColumn, AttachmentList } from "../components/ui/DescriptionList";
        </code>
      </div>

      ${Section({
        title: "Basic Description List",
        description: "Simple key-value pairs with optional header.",
        children: Example({
          label: "With title and description",
          children: DescriptionList({
            title: "Applicant Information",
            description: "Personal details and application.",
            items: sampleItems,
          }),
          code: `<DescriptionList
  title="Applicant Information"
  description="Personal details and application."
  items={[
    { label: "Full name", value: "Margot Foster" },
    { label: "Email", value: "margot@example.com" },
    { label: "Salary", value: "$120,000" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Striped Variant",
        description: "Alternating row backgrounds for better readability.",
        children: Example({
          label: "Striped rows",
          children: DescriptionList({
            variant: "striped",
            items: sampleItems,
          }),
          code: `<DescriptionList variant="striped" items={[...]} />`,
        }),
      })}

      ${Section({
        title: "Card Variant",
        description: "Description list in a card container.",
        children: Example({
          label: "Card with header",
          children: DescriptionList({
            variant: "card",
            title: "Order Details",
            description: "Order #12345",
            items: [
              { label: "Order date", value: "January 15, 2024" },
              { label: "Status", value: "Shipped" },
              { label: "Tracking", value: "1Z999AA10123456784", action: { label: "Track", href: "#" } },
              { label: "Total", value: "$249.99" },
            ],
          }),
          code: `<DescriptionList
  variant="card"
  title="Order Details"
  items={[
    { label: "Status", value: "Shipped" },
    { label: "Tracking", value: "1Z999...", action: { label: "Track", href: "#" } },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "With Actions",
        description: "Add action links to individual items.",
        children: Example({
          label: "Items with actions",
          children: DescriptionList({
            items: [
              { label: "Email", value: "jane@example.com", action: { label: "Update", href: "#" } },
              { label: "Password", value: "********", action: { label: "Change", href: "#" } },
              { label: "Phone", value: "+1 (555) 123-4567", action: { label: "Update", href: "#" } },
            ],
          }),
          code: `<DescriptionList items={[
  { label: "Email", value: "jane@example.com", action: { label: "Update", href: "#" } },
  { label: "Password", value: "********", action: { label: "Change", href: "#" } },
]} />`,
        }),
      })}

      ${Section({
        title: "Inline Variant",
        description: "Compact horizontal layout for simple data.",
        children: Example({
          label: "Inline layout",
          children: DescriptionList({
            variant: "inline",
            items: [
              { label: "Status", value: "Active" },
              { label: "Role", value: "Admin" },
              { label: "Last login", value: "2 hours ago" },
            ],
          }),
          code: `<DescriptionList variant="inline" items={[
  { label: "Status", value: "Active" },
  { label: "Role", value: "Admin" },
]} />`,
        }),
      })}

      ${Section({
        title: "Two-Column Layout",
        description: "Grid layout for more items.",
        children: Example({
          label: "Two columns",
          children: DescriptionListTwoColumn({
            title: "Contact Information",
            items: [
              { label: "First name", value: "Jane" },
              { label: "Last name", value: "Cooper" },
              { label: "Email", value: "jane@example.com" },
              { label: "Phone", value: "+1 (555) 123-4567" },
              { label: "Address", value: "123 Main Street, San Francisco, CA 94102", fullWidth: true },
            ],
          }),
          code: `<DescriptionListTwoColumn
  title="Contact Information"
  items={[
    { label: "First name", value: "Jane" },
    { label: "Last name", value: "Cooper" },
    { label: "Address", value: "...", fullWidth: true },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Horizontal Layout",
        description: "Horizontal key-value pairs.",
        children: Example({
          label: "Horizontal description list",
          children: DescriptionListHorizontal({
            items: [
              { label: "Created", value: "Jan 15, 2024" },
              { label: "Modified", value: "Jan 20, 2024" },
              { label: "Owner", value: "John Doe" },
              { label: "Size", value: "2.4 MB" },
            ],
          }),
          code: `<DescriptionListHorizontal items={[
  { label: "Created", value: "Jan 15, 2024" },
  { label: "Owner", value: "John Doe" },
]} />`,
        }),
      })}

      ${Section({
        title: "Attachment List",
        description: "List of downloadable files.",
        children: Example({
          label: "File attachments",
          children: AttachmentList({
            attachments: [
              { name: "resume_backend_developer.pdf", size: "2.4 MB", href: "#" },
              { name: "coverletter_backend_developer.pdf", size: "4.5 MB", href: "#" },
              { name: "portfolio.zip", size: "12.8 MB", href: "#" },
            ],
          }),
          code: `<AttachmentList attachments={[
  { name: "resume.pdf", size: "2.4 MB", href: "/files/resume.pdf" },
  { name: "cover_letter.pdf", size: "4.5 MB", href: "/files/cover.pdf" },
]} />`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">items</td><td class="px-4 py-3">DescriptionItem[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">List items</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Optional header title</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Optional header description</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "striped" | "card" | "inline"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">columns</td><td class="px-4 py-3">1 | 2 | 3</td><td class="px-4 py-3">1</td><td class="px-4 py-3">Grid columns (card variant)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">DescriptionItem</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Label/term</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Value/description</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">action</td><td class="px-4 py-3">{ label: string; href: string }</td><td class="px-4 py-3">Optional action link</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">fullWidth</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Span full width in grid</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Description Lists",
    currentPath: "/_components/data-display/description-lists",
    children: content,
    devMode,
  });
}
