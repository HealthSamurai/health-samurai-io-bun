/**
 * Breadcrumbs Component
 * Navigation trail for hierarchical page structure
 *
 * @example
 * // Basic breadcrumbs
 * <Breadcrumbs items={[
 *   { label: "Home", href: "/" },
 *   { label: "Products", href: "/products" },
 *   { label: "Widget" },
 * ]} />
 *
 * // With home icon
 * <Breadcrumbs items={[...]} showHomeIcon />
 *
 * // Chevron separator
 * <Breadcrumbs items={[...]} separator="chevron" />
 */

export type BreadcrumbItem = {
  /** Display label */
  label: string;
  /** Link URL (omit for current page) */
  href?: string;
  /** Custom icon (optional) */
  icon?: string;
};

export type BreadcrumbsProps = {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator style */
  separator?: "slash" | "chevron" | "arrow";
  /** Show home icon for first item */
  showHomeIcon?: boolean;
  /** Container style */
  variant?: "simple" | "contained" | "bar";
  /** Additional CSS classes */
  className?: string;
};

// Icons
const homeIcon = `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 shrink-0">
  <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
</svg>`;

// Separators
const separators = {
  slash: `<svg class="size-5 shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>`,
  chevron: `<svg class="size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
  </svg>`,
  arrow: `<svg class="size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
  </svg>`,
};

export function Breadcrumbs({
  items,
  separator = "chevron",
  showHomeIcon = false,
  variant = "simple",
  className = "",
}: BreadcrumbsProps): string {
  const sep = separators[separator];

  const containerClasses: Record<string, string> = {
    simple: "",
    contained: "bg-white px-4 py-2 rounded-lg shadow-sm ring-1 ring-gray-900/5",
    bar: "border-b border-gray-200 bg-white",
  };

  const listClasses: Record<string, string> = {
    simple: "flex items-center space-x-2",
    contained: "flex items-center space-x-2",
    bar: "mx-auto flex w-full max-w-7xl space-x-4 px-4 sm:px-6 lg:px-8",
  };

  return `
    <nav aria-label="Breadcrumb" class="${containerClasses[variant]} ${className}">
      <ol role="list" class="${listClasses[variant]}">
        ${items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const showIcon = isFirst && showHomeIcon;

          return `
            <li class="flex items-center">
              ${!isFirst ? `<span class="mr-2">${sep}</span>` : ""}
              ${item.href && !isLast
                ? `<a href="${item.href}" class="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                    ${showIcon ? `<span class="text-gray-400 hover:text-gray-500">${homeIcon}</span><span class="sr-only">${item.label}</span>` : item.label}
                  </a>`
                : `<span class="flex items-center gap-1.5 text-sm font-medium ${isLast ? "text-gray-900" : "text-gray-500"}" ${isLast ? 'aria-current="page"' : ""}>
                    ${showIcon && !item.href ? `<span class="text-gray-400">${homeIcon}</span><span class="sr-only">${item.label}</span>` : item.label}
                  </span>`
              }
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

// Compact breadcrumbs for mobile
export function BreadcrumbsCompact({
  backHref,
  backLabel = "Back",
  currentLabel,
  className = "",
}: {
  backHref: string;
  backLabel?: string;
  currentLabel: string;
  className?: string;
}): string {
  return `
    <nav class="flex items-center gap-2 text-sm ${className}">
      <a href="${backHref}" class="flex items-center gap-1 text-gray-500 hover:text-gray-700">
        <svg class="size-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
        </svg>
        ${backLabel}
      </a>
      <span class="text-gray-300">/</span>
      <span class="font-medium text-gray-900">${currentLabel}</span>
    </nav>
  `;
}

// Breadcrumbs with full-width bar style
export function BreadcrumbsBar({
  items,
  className = "",
}: {
  items: BreadcrumbItem[];
  className?: string;
}): string {
  // Diagonal chevron separator for bar style
  const diagSep = `<svg viewBox="0 0 24 44" fill="currentColor" preserveAspectRatio="none" aria-hidden="true" class="h-full w-6 shrink-0 text-gray-200">
    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
  </svg>`;

  return `
    <nav aria-label="Breadcrumb" class="flex border-b border-gray-200 bg-white ${className}">
      <ol role="list" class="mx-auto flex w-full max-w-7xl space-x-4 px-4 sm:px-6 lg:px-8">
        ${items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return `
            <li class="flex">
              <div class="flex items-center">
                ${!isFirst ? diagSep : ""}
                ${isFirst
                  ? `<a href="${item.href ?? "#"}" class="text-gray-400 hover:text-gray-500">
                      ${homeIcon}
                      <span class="sr-only">${item.label}</span>
                    </a>`
                  : item.href && !isLast
                    ? `<a href="${item.href}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">${item.label}</a>`
                    : `<span class="ml-4 text-sm font-medium text-gray-500" ${isLast ? 'aria-current="page"' : ""}>${item.label}</span>`
                }
              </div>
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}
