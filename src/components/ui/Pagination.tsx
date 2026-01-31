/**
 * Pagination Component
 * Navigation for paginated content
 *
 * @example
 * // Basic pagination
 * <Pagination current={1} total={10} baseUrl="/items?page=" />
 *
 * // With item count info
 * <Pagination current={1} total={10} baseUrl="/items" showInfo itemsPerPage={10} totalItems={97} />
 *
 * // Simple prev/next
 * <PaginationSimple prevHref="/page/1" nextHref="/page/3" />
 */

export type PaginationProps = {
  /** Current page number (1-indexed) */
  current: number;
  /** Total number of pages */
  total: number;
  /** Base URL for page links (page number appended) */
  baseUrl: string;
  /** Query parameter name for page */
  pageParam?: string;
  /** Show page info (showing X to Y of Z) */
  showInfo?: boolean;
  /** Items per page (for info display) */
  itemsPerPage?: number;
  /** Total items (for info display) */
  totalItems?: number;
  /** Maximum page buttons to show */
  maxButtons?: number;
  /** Additional CSS classes */
  className?: string;
};

// Arrow SVGs
const prevArrow = `<svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>`;

const nextArrow = `<svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>`;

// Build page URL
function pageUrl(baseUrl: string, page: number, pageParam: string): string {
  if (baseUrl.includes("?")) {
    return `${baseUrl}&${pageParam}=${page}`;
  }
  return `${baseUrl}?${pageParam}=${page}`;
}

// Generate page numbers with ellipsis
function getPageNumbers(current: number, total: number, maxButtons: number): (number | "ellipsis")[] {
  if (total <= maxButtons) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];
  const sideButtons = Math.floor((maxButtons - 3) / 2); // Reserve space for first, last, and ellipsis

  // Always show first page
  pages.push(1);

  // Calculate range around current page
  let rangeStart = Math.max(2, current - sideButtons);
  let rangeEnd = Math.min(total - 1, current + sideButtons);

  // Adjust range if at edges
  if (current <= sideButtons + 2) {
    rangeEnd = Math.min(total - 1, maxButtons - 2);
  } else if (current >= total - sideButtons - 1) {
    rangeStart = Math.max(2, total - maxButtons + 3);
  }

  // Add ellipsis before range if needed
  if (rangeStart > 2) {
    pages.push("ellipsis");
  }

  // Add range
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  // Add ellipsis after range if needed
  if (rangeEnd < total - 1) {
    pages.push("ellipsis");
  }

  // Always show last page
  if (total > 1) {
    pages.push(total);
  }

  return pages;
}

export function Pagination({
  current,
  total,
  baseUrl,
  pageParam = "page",
  showInfo = false,
  itemsPerPage = 10,
  totalItems,
  maxButtons = 7,
  className = "",
}: PaginationProps): string {
  const pages = getPageNumbers(current, total, maxButtons);
  const hasPrev = current > 1;
  const hasNext = current < total;

  // Calculate info
  const startItem = (current - 1) * itemsPerPage + 1;
  const endItem = Math.min(current * itemsPerPage, totalItems ?? current * itemsPerPage);

  const buttonBase = "relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0";
  const currentButton = "z-10 bg-primary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const defaultButton = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
  const disabledButton = "text-gray-300 cursor-not-allowed";

  return `
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ${className}">
      <!-- Mobile: simple prev/next -->
      <div class="flex flex-1 justify-between sm:hidden">
        ${hasPrev
          ? `<a href="${pageUrl(baseUrl, current - 1, pageParam)}" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>`
          : `<span class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">Previous</span>`
        }
        ${hasNext
          ? `<a href="${pageUrl(baseUrl, current + 1, pageParam)}" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>`
          : `<span class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">Next</span>`
        }
      </div>

      <!-- Desktop: full pagination -->
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        ${showInfo && totalItems !== undefined ? `
          <div>
            <p class="text-sm text-gray-700">
              Showing <span class="font-medium">${startItem}</span> to <span class="font-medium">${endItem}</span> of <span class="font-medium">${totalItems}</span> results
            </p>
          </div>
        ` : "<div></div>"}
        <div>
          <nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <!-- Previous button -->
            ${hasPrev
              ? `<a href="${pageUrl(baseUrl, current - 1, pageParam)}" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Previous</span>
                  ${prevArrow}
                </a>`
              : `<span class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
                  <span class="sr-only">Previous</span>
                  ${prevArrow}
                </span>`
            }

            <!-- Page numbers -->
            ${pages.map(page => {
              if (page === "ellipsis") {
                return `<span class="${buttonBase} text-gray-700 ring-1 ring-inset ring-gray-300">...</span>`;
              }
              if (page === current) {
                return `<a href="${pageUrl(baseUrl, page, pageParam)}" aria-current="page" class="${buttonBase} ${currentButton}">${page}</a>`;
              }
              return `<a href="${pageUrl(baseUrl, page, pageParam)}" class="${buttonBase} ${defaultButton}">${page}</a>`;
            }).join("")}

            <!-- Next button -->
            ${hasNext
              ? `<a href="${pageUrl(baseUrl, current + 1, pageParam)}" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Next</span>
                  ${nextArrow}
                </a>`
              : `<span class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
                  <span class="sr-only">Next</span>
                  ${nextArrow}
                </span>`
            }
          </nav>
        </div>
      </div>
    </div>
  `;
}

// Simple prev/next pagination
export function PaginationSimple({
  prevHref,
  nextHref,
  prevLabel = "Previous",
  nextLabel = "Next",
  className = "",
}: {
  prevHref?: string;
  nextHref?: string;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}): string {
  return `
    <nav class="flex items-center justify-between ${className}">
      ${prevHref
        ? `<a href="${prevHref}" class="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            ${prevArrow}
            ${prevLabel}
          </a>`
        : `<span class="flex items-center gap-2 text-sm font-medium text-gray-300 cursor-not-allowed">
            ${prevArrow}
            ${prevLabel}
          </span>`
      }
      ${nextHref
        ? `<a href="${nextHref}" class="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            ${nextLabel}
            ${nextArrow}
          </a>`
        : `<span class="flex items-center gap-2 text-sm font-medium text-gray-300 cursor-not-allowed">
            ${nextLabel}
            ${nextArrow}
          </span>`
      }
    </nav>
  `;
}

// Pagination info only (for use with other controls)
export function PaginationInfo({
  current,
  total,
  itemsPerPage,
  totalItems,
  className = "",
}: {
  current: number;
  total: number;
  itemsPerPage: number;
  totalItems: number;
  className?: string;
}): string {
  const startItem = (current - 1) * itemsPerPage + 1;
  const endItem = Math.min(current * itemsPerPage, totalItems);

  return `
    <p class="text-sm text-gray-700 ${className}">
      Showing <span class="font-medium">${startItem}</span> to <span class="font-medium">${endItem}</span> of <span class="font-medium">${totalItems}</span> results
    </p>
  `;
}
