/**
 * Previous/Next Navigation Component
 *
 * Shows navigation buttons to move between documentation pages
 */

import type { NavItem } from "../summary";

interface NavigationProps {
  prev?: NavItem;
  next?: NavItem;
}

export function PrevNextNav({ prev, next }: NavigationProps): string {
  if (!prev && !next) {
    return "";
  }

  return `
    <div class="flex flex-col sm:flex-row justify-between items-stretch mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 gap-4">
      ${prev ? `
        <a href="${prev.href}"
           hx-get="/docs${prev.href}?partial=true"
           hx-target="#doc-content"
           hx-push-url="/docs${prev.href}"
           hx-swap="innerHTML"
           class="group flex-1 flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg
                  hover:border-primary/50 hover:bg-primary/5 transition-all">
          <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <div class="flex-1 text-right">
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Previous</div>
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-2">
              ${escapeHtml(prev.title)}
            </div>
          </div>
        </a>
      ` : '<div class="flex-1"></div>'}
      ${next ? `
        <a href="${next.href}"
           hx-get="/docs${next.href}?partial=true"
           hx-target="#doc-content"
           hx-push-url="/docs${next.href}"
           hx-swap="innerHTML"
           class="group flex-1 flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg
                  hover:border-primary/50 hover:bg-primary/5 transition-all">
          <div class="flex-1">
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Next</div>
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-2">
              ${escapeHtml(next.title)}
            </div>
          </div>
          <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      ` : '<div class="flex-1"></div>'}
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
