/**
 * Description List Component
 * Display labeled data in key-value format
 *
 * @example
 * // Basic description list
 * <DescriptionList items={[
 *   { label: "Name", value: "John Doe" },
 *   { label: "Email", value: "john@example.com" },
 * ]} />
 *
 * // With header
 * <DescriptionList title="Details" description="Personal information" items={[...]} />
 *
 * // Striped variant
 * <DescriptionList items={[...]} variant="striped" />
 */

export type DescriptionItem = {
  /** Label/term */
  label: string;
  /** Value/description (can be HTML) */
  value: string;
  /** Optional action link */
  action?: {
    label: string;
    href: string;
  };
  /** Span full width (for long content) */
  fullWidth?: boolean;
};

export type DescriptionListProps = {
  /** List items */
  items: DescriptionItem[];
  /** Optional title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Visual variant */
  variant?: "simple" | "striped" | "card" | "inline";
  /** Number of columns (for grid layout) */
  columns?: 1 | 2 | 3;
  /** Additional CSS classes */
  className?: string;
};

export function DescriptionList({
  items,
  title,
  description,
  variant = "simple",
  columns = 1,
  className = "",
}: DescriptionListProps): string {
  const header = title || description ? `
    <div class="px-4 sm:px-0">
      ${title ? `<h3 class="text-base/7 font-semibold text-gray-900">${title}</h3>` : ""}
      ${description ? `<p class="mt-1 max-w-2xl text-sm/6 text-gray-500">${description}</p>` : ""}
    </div>
  ` : "";

  if (variant === "inline") {
    return `
      <div class="${className}">
        ${header}
        <dl class="${title || description ? "mt-4" : ""} flex flex-wrap gap-x-6 gap-y-2">
          ${items.map(item => `
            <div class="flex items-center gap-2">
              <dt class="text-sm text-gray-500">${item.label}:</dt>
              <dd class="text-sm font-medium text-gray-900">${item.value}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    `;
  }

  if (variant === "striped") {
    return `
      <div class="${className}">
        ${header}
        <dl class="${title || description ? "mt-6" : ""} divide-y divide-gray-100">
          ${items.map((item, i) => `
            <div class="${i % 2 === 0 ? "bg-gray-50" : "bg-white"} px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">${item.label}</dt>
              <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center justify-between">
                <span>${item.value}</span>
                ${item.action ? `<a href="${item.action.href}" class="font-medium text-primary hover:text-primary-dark">${item.action.label}</a>` : ""}
              </dd>
            </div>
          `).join("")}
        </dl>
      </div>
    `;
  }

  if (variant === "card") {
    const colClasses: Record<number, string> = {
      1: "",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-2 lg:grid-cols-3",
    };

    return `
      <div class="overflow-hidden bg-white shadow ring-1 ring-gray-900/5 sm:rounded-xl ${className}">
        ${title || description ? `
          <div class="px-4 py-6 sm:px-6">
            ${title ? `<h3 class="text-base/7 font-semibold text-gray-900">${title}</h3>` : ""}
            ${description ? `<p class="mt-1 max-w-2xl text-sm/6 text-gray-500">${description}</p>` : ""}
          </div>
        ` : ""}
        <div class="border-t border-gray-100">
          <dl class="divide-y divide-gray-100 ${columns > 1 ? `sm:grid ${colClasses[columns]} sm:divide-y-0` : ""}">
            ${items.map(item => `
              <div class="px-4 py-6 ${columns > 1 ? "sm:border-b sm:border-gray-100" : ""} ${item.fullWidth && columns > 1 ? "sm:col-span-full" : ""}">
                <dt class="text-sm font-medium text-gray-900">${item.label}</dt>
                <dd class="mt-1 text-sm text-gray-700 ${item.action ? "flex items-center justify-between" : ""}">
                  <span>${item.value}</span>
                  ${item.action ? `<a href="${item.action.href}" class="font-medium text-primary hover:text-primary-dark">${item.action.label}</a>` : ""}
                </dd>
              </div>
            `).join("")}
          </dl>
        </div>
      </div>
    `;
  }

  // Simple variant (default)
  return `
    <div class="${className}">
      ${header}
      <div class="${title || description ? "mt-6 border-t border-gray-100" : ""}">
        <dl class="divide-y divide-gray-100">
          ${items.map(item => `
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm/6 font-medium text-gray-900">${item.label}</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 ${item.action ? "flex items-center justify-between" : ""}">
                <span>${item.value}</span>
                ${item.action ? `<a href="${item.action.href}" class="font-medium text-primary hover:text-primary-dark">${item.action.label}</a>` : ""}
              </dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </div>
  `;
}

// Horizontal description list for compact displays
export function DescriptionListHorizontal({
  items,
  className = "",
}: {
  items: { label: string; value: string }[];
  className?: string;
}): string {
  return `
    <dl class="flex flex-wrap gap-x-8 gap-y-4 ${className}">
      ${items.map(item => `
        <div>
          <dt class="text-sm font-medium text-gray-500">${item.label}</dt>
          <dd class="mt-1 text-sm text-gray-900">${item.value}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

// Two-column description list
export function DescriptionListTwoColumn({
  items,
  title,
  description,
  className = "",
}: {
  items: DescriptionItem[];
  title?: string;
  description?: string;
  className?: string;
}): string {
  return `
    <div class="${className}">
      ${title || description ? `
        <div class="mb-6">
          ${title ? `<h3 class="text-base/7 font-semibold text-gray-900">${title}</h3>` : ""}
          ${description ? `<p class="mt-1 text-sm text-gray-500">${description}</p>` : ""}
        </div>
      ` : ""}
      <dl class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        ${items.map(item => `
          <div class="${item.fullWidth ? "sm:col-span-2" : ""}">
            <dt class="text-sm font-medium text-gray-900">${item.label}</dt>
            <dd class="mt-1 text-sm text-gray-700">${item.value}</dd>
          </div>
        `).join("")}
      </dl>
    </div>
  `;
}

// Attachment list item (commonly used with description lists)
export function AttachmentList({
  attachments,
  className = "",
}: {
  attachments: { name: string; size: string; href: string }[];
  className?: string;
}): string {
  const paperclipIcon = `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 shrink-0 text-gray-400">
    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
  </svg>`;

  return `
    <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200 ${className}">
      ${attachments.map(attachment => `
        <li class="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
          <div class="flex w-0 flex-1 items-center">
            ${paperclipIcon}
            <div class="ml-4 flex min-w-0 flex-1 gap-2">
              <span class="truncate font-medium text-gray-900">${attachment.name}</span>
              <span class="shrink-0 text-gray-400">${attachment.size}</span>
            </div>
          </div>
          <div class="ml-4 shrink-0">
            <a href="${attachment.href}" class="font-medium text-primary hover:text-primary-dark">Download</a>
          </div>
        </li>
      `).join("")}
    </ul>
  `;
}
