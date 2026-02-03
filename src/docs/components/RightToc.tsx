/**
 * Right Table of Contents Component
 *
 * Displays the page's heading structure for quick navigation
 */

import type { Heading } from "../markdown";

interface RightTocProps {
  headings: Heading[];
}

export function RightToc({ headings }: RightTocProps): string {
  // Filter to only h2 and h3 for the TOC
  const tocHeadings = headings.filter(h => h.level >= 2 && h.level <= 3);

  if (tocHeadings.length === 0) {
    return "";
  }

  return `
    <aside class="hidden xl:block w-56 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 border-t border-gray-200 dark:border-gray-700">
      <div class="px-4">
        <h4 class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
          On this page
        </h4>
        <nav class="space-y-1" aria-label="Table of contents">
          ${tocHeadings.map(heading => `
            <a href="#${heading.id}"
               class="block text-[13px] py-0.5 ${heading.level === 3 ? "pl-3" : ""}
                      text-gray-500 dark:text-gray-400
                      hover:text-primary dark:hover:text-primary
                      transition-colors duration-200"
               data-toc-link="${heading.id}">
              ${escapeHtml(heading.text)}
            </a>
          `).join("")}
        </nav>
      </div>
    </aside>
  `;
}

/**
 * Mobile TOC dropdown
 */
export function MobileToc({ headings }: RightTocProps): string {
  const tocHeadings = headings.filter(h => h.level >= 2 && h.level <= 3);

  if (tocHeadings.length === 0) {
    return "";
  }

  return `
    <div class="xl:hidden mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
      <button onclick="this.nextElementSibling.classList.toggle('hidden')"
              class="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
        <span>On this page</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <nav class="hidden mt-4 space-y-2" aria-label="Table of contents">
        ${tocHeadings.map(heading => `
          <a href="#${heading.id}"
             class="block text-sm py-1 ${heading.level === 3 ? "pl-4" : ""}
                    text-gray-600 dark:text-gray-400
                    hover:text-primary">
            ${escapeHtml(heading.text)}
          </a>
        `).join("")}
      </nav>
    </div>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
