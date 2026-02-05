/**
 * Table Component
 * Data tables with various styles and features
 *
 * @example
 * // Simple table
 * <Table
 *   columns={["Name", "Email", "Role"]}
 *   rows={[
 *     ["John Doe", "john@example.com", "Admin"],
 *     ["Jane Smith", "jane@example.com", "User"],
 *   ]}
 * />
 */

export type TableColumn = {
  /** Column header text */
  header: string;
  /** Column key for data access */
  key?: string;
  /** Column alignment */
  align?: "left" | "center" | "right";
  /** Column width */
  width?: string;
  /** Is sortable */
  sortable?: boolean;
};

export type TableProps = {
  /** Column definitions (string[] for simple, or TableColumn[] for advanced) */
  columns: (string | TableColumn)[];
  /** Table rows (array of arrays or objects) */
  rows: (string[] | Record<string, string>)[];
  /** Visual variant */
  variant?: "simple" | "striped" | "bordered" | "divided";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Show header */
  showHeader?: boolean;
  /** Is condensed */
  condensed?: boolean;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Additional CSS classes */
  className?: string;
};

// Size classes
const sizes = {
  sm: { cell: "px-3 py-2 text-xs", header: "px-3 py-2 text-xs" },
  md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-xs" },
  lg: { cell: "px-6 py-4 text-sm", header: "px-6 py-3 text-sm" },
} as const;

// Alignment classes
const alignments = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export function Table({
  columns,
  rows,
  variant = "simple",
  size = "md",
  showHeader = true,
  stickyHeader = false,
  className = "",
}: TableProps): string {
  const sizeConfig = sizes[size];

  // Normalize columns to TableColumn[]
  const normalizedColumns: TableColumn[] = columns.map((col, i) => {
    if (typeof col === "string") {
      return { header: col, key: `col${i}`, align: "left" };
    }
    return { align: "left", ...col };
  });

  // Variant classes
  const variantClasses = {
    simple: "",
    striped: "",
    bordered: "border border-gray-200",
    divided: "",
  };

  const rowVariantClasses = {
    simple: "border-b border-gray-200",
    striped: "even:bg-gray-50",
    bordered: "border-b border-gray-200",
    divided: "border-b border-gray-200",
  };

  return `
    <div class="overflow-x-auto ${className}">
      <table class="min-w-full divide-y divide-gray-200 ${variantClasses[variant]}">
        ${showHeader ? `
          <thead class="bg-gray-50 ${stickyHeader ? 'sticky top-0 z-10' : ''}">
            <tr>
              ${normalizedColumns.map(col => `
                <th scope="col" class="${sizeConfig.header} ${alignments[col.align || "left"]} font-semibold text-gray-900 uppercase tracking-wider ${col.width ? `w-[${col.width}]` : ''}">
                  ${col.sortable ? `
                    <button type="button" class="group inline-flex items-center gap-x-1">
                      ${col.header}
                      <svg viewBox="0 0 20 20" fill="currentColor" class="size-4 text-gray-400 group-hover:text-gray-500">
                        <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  ` : col.header}
                </th>
              `).join("")}
            </tr>
          </thead>
        ` : ""}
        <tbody class="bg-white divide-y divide-gray-200">
          ${rows.map(row => `
            <tr class="${rowVariantClasses[variant]}">
              ${normalizedColumns.map((col, i) => {
                const value = Array.isArray(row) ? row[i] : row[col.key || `col${i}`];
                return `
                  <td class="${sizeConfig.cell} ${alignments[col.align || "left"]} text-gray-900">
                    ${value || ""}
                  </td>
                `;
              }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Table with selection checkboxes
export function SelectableTable({
  columns,
  rows,
  idKey = "id",
  selectedIds = [],
  onSelect,
  size = "md",
  className = "",
}: {
  columns: (string | TableColumn)[];
  rows: Record<string, string>[];
  idKey?: string;
  selectedIds?: string[];
  onSelect?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const sizeConfig = sizes[size];
  const signalName = "selectedRows";

  const normalizedColumns: TableColumn[] = columns.map((col, i) => {
    if (typeof col === "string") {
      return { header: col, key: `col${i}`, align: "left" };
    }
    return { align: "left", ...col };
  });

  return `
    <div class="overflow-x-auto ${className}" data-signals="{${signalName}: ${JSON.stringify(selectedIds)}}">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="relative w-12 ${sizeConfig.header}">
              <input
                type="checkbox"
                class="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-primary focus:ring-primary"
                data-on:change="$${signalName} = evt.target.checked ? ${JSON.stringify(rows.map(r => r[idKey]))} : []" />
            </th>
            ${normalizedColumns.map(col => `
              <th scope="col" class="${sizeConfig.header} ${alignments[col.align || "left"]} font-semibold text-gray-900 uppercase tracking-wider">
                ${col.header}
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          ${rows.map(row => `
            <tr data-class="{'bg-gray-50': $${signalName}.includes('${row[idKey]}')}">
              <td class="relative w-12 ${sizeConfig.cell}">
                <input
                  type="checkbox"
                  value="${row[idKey]}"
                  class="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-primary focus:ring-primary"
                  data-attr:checked="$${signalName}.includes('${row[idKey]}')"
                  data-on:change="$${signalName} = evt.target.checked ? [...$${signalName}, '${row[idKey]}'] : $${signalName}.filter(id => id !== '${row[idKey]}')" />
              </td>
              ${normalizedColumns.map((col) => {
                const value = row[col.key || ""];
                return `
                  <td class="${sizeConfig.cell} ${alignments[col.align || "left"]} text-gray-900">
                    ${value || ""}
                  </td>
                `;
              }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Table with actions column
export function TableWithActions({
  columns,
  rows,
  actions,
  size = "md",
  className = "",
}: {
  columns: (string | TableColumn)[];
  rows: (string[] | Record<string, string>)[];
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: string;
  }>;
  size?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const sizeConfig = sizes[size];

  const normalizedColumns: TableColumn[] = columns.map((col, i) => {
    if (typeof col === "string") {
      return { header: col, key: `col${i}`, align: "left" };
    }
    return { align: "left", ...col };
  });

  return `
    <div class="overflow-x-auto ${className}">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            ${normalizedColumns.map(col => `
              <th scope="col" class="${sizeConfig.header} ${alignments[col.align || "left"]} font-semibold text-gray-900 uppercase tracking-wider">
                ${col.header}
              </th>
            `).join("")}
            ${actions ? `<th scope="col" class="${sizeConfig.header} text-right"><span class="sr-only">Actions</span></th>` : ""}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          ${rows.map((row, rowIndex) => `
            <tr class="hover:bg-gray-50">
              ${normalizedColumns.map((col, i) => {
                const value = Array.isArray(row) ? row[i] : row[col.key || `col${i}`];
                return `
                  <td class="${sizeConfig.cell} ${alignments[col.align || "left"]} text-gray-900">
                    ${value || ""}
                  </td>
                `;
              }).join("")}
              ${actions ? `
                <td class="${sizeConfig.cell} text-right">
                  <div class="flex justify-end gap-x-3">
                    ${actions.map(action => {
                      if (action.href) {
                        return `<a href="${action.href}" class="text-primary hover:text-primary-dark font-medium">${action.label}</a>`;
                      }
                      return `<button type="button" ${action.onClick ? `data-on:click="${action.onClick.replace('{{index}}', String(rowIndex))}"` : ""} class="text-primary hover:text-primary-dark font-medium">${action.label}</button>`;
                    }).join("")}
                  </div>
                </td>
              ` : ""}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Simple data table with card wrapper
export function DataTable({
  title,
  description,
  columns,
  rows,
  actions,
  emptyMessage = "No data available",
  className = "",
}: {
  title?: string;
  description?: string;
  columns: (string | TableColumn)[];
  rows: (string[] | Record<string, string>)[];
  actions?: Array<{ label: string; href?: string; onClick?: string }>;
  emptyMessage?: string;
  className?: string;
}): string {
  const hasData = rows.length > 0;

  return `
    <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl ${className}">
      ${(title || description) ? `
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          ${title ? `<div class="text-base font-semibold text-gray-900">${title}</div>` : ""}
          ${description ? `<p class="mt-1 text-sm text-gray-500">${description}</p>` : ""}
        </div>
      ` : ""}
      ${hasData ? TableWithActions({ columns, rows, actions }) : `
        <div class="px-4 py-12 text-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto size-12 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
          <p class="mt-4 text-sm text-gray-500">${emptyMessage}</p>
        </div>
      `}
    </div>
  `;
}

// Table cell components for custom content
export function TableCell({
  children,
  align = "left",
  highlight = false,
  className = "",
}: {
  children: string;
  align?: "left" | "center" | "right";
  highlight?: boolean;
  className?: string;
}): string {
  return `
    <td class="px-4 py-3 text-sm ${alignments[align]} ${highlight ? 'font-medium text-gray-900' : 'text-gray-500'} ${className}">
      ${children}
    </td>
  `;
}

// Badge cell for status columns
export function StatusCell({
  status,
  variant = "default",
}: {
  status: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}): string {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return `
    <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}">
      ${status}
    </span>
  `;
}

// Avatar cell for user columns
export function AvatarCell({
  name,
  email,
  avatar,
}: {
  name: string;
  email?: string;
  avatar?: string;
}): string {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

  return `
    <div class="flex items-center gap-x-3">
      ${avatar
        ? `<img class="size-8 rounded-full" src="${avatar}" alt="${name}" />`
        : `<span class="inline-flex size-8 items-center justify-center rounded-full bg-gray-500 text-xs font-medium text-white">${initials}</span>`
      }
      <div>
        <div class="text-sm font-medium text-gray-900">${name}</div>
        ${email ? `<div class="text-sm text-gray-500">${email}</div>` : ""}
      </div>
    </div>
  `;
}
