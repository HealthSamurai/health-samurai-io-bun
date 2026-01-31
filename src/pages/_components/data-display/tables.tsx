/**
 * Table Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Table, TableWithActions, SelectableTable, DataTable, StatusCell, AvatarCell } from "../../../components/ui/Table";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Tables",
  description: "Data tables with various styles and features",
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
      <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

const sampleUsers = [
  ["John Doe", "john@example.com", "Admin", "Active"],
  ["Jane Smith", "jane@example.com", "Editor", "Active"],
  ["Bob Wilson", "bob@example.com", "Viewer", "Inactive"],
];

const sampleUsersObj = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
  { id: "3", name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
];

export default function TablesDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Tables</h1>
        <p class="mt-2 text-gray-600">
          Data tables with various styles, features, and customization options.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Table, TableWithActions, SelectableTable, DataTable } from "../components/ui/Table";
        </code>
      </div>

      ${Section({
        title: "Simple Table",
        description: "Basic table with string columns and rows.",
        children: Example({
          label: "Default",
          children: Table({
            columns: ["Name", "Email", "Role", "Status"],
            rows: sampleUsers,
          }),
          code: `<Table
  columns={["Name", "Email", "Role", "Status"]}
  rows={[
    ["John Doe", "john@example.com", "Admin", "Active"],
    ["Jane Smith", "jane@example.com", "Editor", "Active"],
    ["Bob Wilson", "bob@example.com", "Viewer", "Inactive"],
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Striped Rows",
        description: "Alternating row colors for better readability.",
        children: Example({
          label: "Striped variant",
          children: Table({
            columns: ["Name", "Email", "Role", "Status"],
            rows: sampleUsers,
            variant: "striped",
          }),
          code: `<Table variant="striped" columns={[...]} rows={[...]} />`,
        }),
      })}

      ${Section({
        title: "Bordered",
        description: "Table with outer border.",
        children: Example({
          label: "Bordered variant",
          children: Table({
            columns: ["Name", "Email", "Role", "Status"],
            rows: sampleUsers,
            variant: "bordered",
          }),
          code: `<Table variant="bordered" columns={[...]} rows={[...]} />`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Compact and comfortable table sizes.",
        children: `
          ${Example({
            label: "Small",
            children: Table({
              columns: ["Name", "Email", "Role"],
              rows: sampleUsers.map(r => r.slice(0, 3)),
              size: "sm",
            }),
            code: `<Table size="sm" ... />`,
          })}
          ${Example({
            label: "Large",
            children: Table({
              columns: ["Name", "Email", "Role"],
              rows: sampleUsers.map(r => r.slice(0, 3)),
              size: "lg",
            }),
            code: `<Table size="lg" ... />`,
          })}
        `,
      })}

      ${Section({
        title: "With Actions",
        description: "Table with action links for each row.",
        children: Example({
          label: "Actions column",
          children: TableWithActions({
            columns: [
              { header: "Name", key: "name" },
              { header: "Email", key: "email" },
              { header: "Role", key: "role" },
            ],
            rows: sampleUsersObj,
            actions: [
              { label: "Edit", onClick: "console.log('edit {{index}}')" },
              { label: "Delete", onClick: "console.log('delete {{index}}')" },
            ],
          }),
          code: `<TableWithActions
  columns={[
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Role", key: "role" },
  ]}
  rows={[...]}
  actions={[
    { label: "Edit", onClick: "..." },
    { label: "Delete", onClick: "..." },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Selectable Rows",
        description: "Table with row selection checkboxes.",
        children: Example({
          label: "With selection",
          children: SelectableTable({
            columns: [
              { header: "Name", key: "name" },
              { header: "Email", key: "email" },
              { header: "Role", key: "role" },
            ],
            rows: sampleUsersObj,
            idKey: "id",
            selectedIds: ["2"],
          }),
          code: `<SelectableTable
  columns={[
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
  ]}
  rows={[...]}
  idKey="id"
  selectedIds={["2"]}
/>`,
        }),
      })}

      ${Section({
        title: "Data Table with Card",
        description: "Table wrapped in a card with title and empty state.",
        children: `
          ${Example({
            label: "With data",
            children: DataTable({
              title: "Team Members",
              description: "A list of all users in your team.",
              columns: [
                { header: "Name", key: "name" },
                { header: "Email", key: "email" },
                { header: "Role", key: "role" },
              ],
              rows: sampleUsersObj,
              actions: [
                { label: "Edit" },
              ],
            }),
            code: `<DataTable
  title="Team Members"
  description="A list of all users in your team."
  columns={[...]}
  rows={[...]}
  actions={[{ label: "Edit" }]}
/>`,
          })}
          ${Example({
            label: "Empty state",
            children: DataTable({
              title: "Invoices",
              description: "Your recent invoices.",
              columns: ["Number", "Date", "Amount", "Status"],
              rows: [],
              emptyMessage: "No invoices found",
            }),
            code: `<DataTable
  title="Invoices"
  columns={["Number", "Date", "Amount", "Status"]}
  rows={[]}
  emptyMessage="No invoices found"
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Custom Cell Content",
        description: "Using helper functions for rich cell content.",
        children: Example({
          label: "Avatar and status cells",
          children: `
            <div class="bg-white rounded-lg overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase">User</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Role</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-4 py-3">${AvatarCell({ name: "John Doe", email: "john@example.com", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop" })}</td>
                    <td class="px-4 py-3 text-sm text-gray-900">Admin</td>
                    <td class="px-4 py-3">${StatusCell({ status: "Active", variant: "success" })}</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3">${AvatarCell({ name: "Jane Smith", email: "jane@example.com" })}</td>
                    <td class="px-4 py-3 text-sm text-gray-900">Editor</td>
                    <td class="px-4 py-3">${StatusCell({ status: "Pending", variant: "warning" })}</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3">${AvatarCell({ name: "Bob Wilson", email: "bob@example.com" })}</td>
                    <td class="px-4 py-3 text-sm text-gray-900">Viewer</td>
                    <td class="px-4 py-3">${StatusCell({ status: "Inactive", variant: "error" })}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          code: `// Avatar cell
${AvatarCell.toString().split('\n').slice(0, 3).join('\n')}...

// Status cell
<StatusCell status="Active" variant="success" />
<StatusCell status="Pending" variant="warning" />
<StatusCell status="Inactive" variant="error" />`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">columns</td><td class="px-4 py-3">(string | TableColumn)[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Column definitions</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">rows</td><td class="px-4 py-3">(string[] | object)[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Row data</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "striped" | "bordered"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Cell padding size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showHeader</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Show table header</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">stickyHeader</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Sticky header on scroll</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">TableColumn</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">header</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Column header text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">key</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Object key for data access</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">align</td><td class="px-4 py-3">"left" | "center" | "right"</td><td class="px-4 py-3">Column alignment</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">width</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Column width (CSS value)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">sortable</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Show sort indicator</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Tables",
    currentPath: "/_components/data-display/tables",
    children: content,
    devMode,
  });
}
