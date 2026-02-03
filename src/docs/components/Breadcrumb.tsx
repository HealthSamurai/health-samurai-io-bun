/**
 * Breadcrumb Component
 *
 * Shows the navigation path to the current page
 */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps): string {
  if (items.length === 0) {
    return "";
  }

  return `
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex flex-wrap items-center gap-1 text-[13px] text-gray-400 dark:text-gray-500">
        ${items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return `
            <li class="flex items-center">
              ${idx > 0 ? `
                <svg class="w-3 h-3 mx-1.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              ` : ""}
              ${item.href && !isLast ? `
                <a href="${item.href}" class="hover:text-primary transition-colors">
                  ${escapeHtml(item.label)}
                </a>
              ` : `
                <span class="${isLast ? "text-gray-600 dark:text-gray-400" : ""}">
                  ${escapeHtml(item.label)}
                </span>
              `}
            </li>
          `;
        }).join("")}
      </ol>
    </nav>
  `;
}

/**
 * Build breadcrumb items from URL path
 */
export function buildBreadcrumb(
  path: string,
  productName: string,
  pageTitle: string
): BreadcrumbItem[] {
  const parts = path.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  // Add product as first item
  if (parts.length > 0) {
    items.push({
      label: productName,
      href: `/docs/${parts[0]}`,
    });
  }

  // Add intermediate paths (skip first as it's the product, skip last as it's the current page)
  let currentPath = `/docs/${parts[0]}`;
  for (let i = 1; i < parts.length - 1; i++) {
    currentPath += `/${parts[i]}`;
    const segment = parts[i];
    if (segment) {
      items.push({
        label: formatPathSegment(segment),
        href: currentPath,
      });
    }
  }

  // Add current page (no link)
  items.push({
    label: pageTitle,
  });

  return items;
}

/**
 * Format a path segment for display
 */
function formatPathSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
