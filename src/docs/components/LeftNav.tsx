/**
 * Left Navigation Component
 *
 * Renders the documentation sidebar navigation from parsed SUMMARY.md
 */

import type { NavItem, NavSection, Navigation } from "../summary";

interface LeftNavProps {
  navigation: Navigation;
  currentPath: string;
  productPath: string;
}

function NavLink({
  item,
  currentPath,
  productPath,
  depth = 0,
}: {
  item: NavItem;
  currentPath: string;
  productPath: string;
  depth?: number;
}): string {
  const isActive = currentPath === item.href || currentPath === item.href + "/";
  const isOpen = currentPath.startsWith(item.href);
  const hasChildren = item.children && item.children.length > 0;

  const linkClasses = `
    flex items-center gap-2 px-3 py-1.5 text-[13px]
    hover:bg-gray-100 dark:hover:bg-gray-800
    transition-colors duration-200
    ${isActive ? "bg-primary/10 text-primary font-medium border-l-2 border-primary -ml-[2px]" : "text-gray-600 dark:text-gray-300"}
    ${depth > 0 ? "ml-3" : ""}
  `.trim();

  if (hasChildren) {
    return `
      <div class="nav-item ${isOpen ? "open" : ""}">
        <button
          type="button"
          class="nav-summary flex items-center justify-between w-full text-[13px] font-normal
                 transition-colors duration-200 cursor-pointer bg-transparent border-0 text-left
                 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5
                 ${isActive ? "bg-primary/10 text-primary font-medium" : "text-gray-600 dark:text-gray-300"}"
          aria-expanded="${isOpen}"
          onclick="this.parentElement.classList.toggle('open'); this.nextElementSibling.hidden = !this.nextElementSibling.hidden"
        >
          <a href="/docs${item.href}" class="flex-1 no-underline ${isActive ? "text-primary" : "text-inherit"}"
             hx-get="/docs${item.href}?partial=true"
             hx-target="#doc-content"
             hx-push-url="/docs${item.href}"
             hx-swap="innerHTML">
            ${escapeHtml(item.title)}
          </a>
          <svg class="nav-chevron w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <div class="nav-children ml-3 border-l border-gray-200 dark:border-gray-700" ${!isOpen ? 'hidden' : ''}>
          ${item.children!.map(child => NavLink({ item: child, currentPath, productPath, depth: depth + 1 })).join("")}
        </div>
      </div>
    `;
  }

  return `
    <a href="/docs${item.href}" class="${linkClasses}"
       hx-get="/docs${item.href}?partial=true"
       hx-target="#doc-content"
       hx-push-url="/docs${item.href}"
       hx-swap="innerHTML">
      ${escapeHtml(item.title)}
    </a>
  `;
}

function NavSectionComponent({
  section,
  currentPath,
  productPath,
  isFirst,
}: {
  section: NavSection;
  currentPath: string;
  productPath: string;
  isFirst: boolean;
}): string {
  return `
    <div class="${isFirst ? "" : "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"}">
      ${section.title ? `
        <div class="mb-1.5 px-3">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-primary">
            ${escapeHtml(section.title)}
          </span>
        </div>
      ` : ""}
      <div class="space-y-0.5">
        ${section.items.map(item => NavLink({ item, currentPath, productPath })).join("")}
      </div>
    </div>
  `;
}

export function LeftNav({ navigation, currentPath, productPath }: LeftNavProps): string {
  const nonEmptySections = navigation.sections.filter(
    s => s.title || (s.items && s.items.length > 0)
  );

  return `
    <nav id="navigation" class="w-60 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)]
         overflow-y-auto py-4 pl-4 pr-2 bg-gray-50 dark:bg-gray-900
         border-r border-gray-200 dark:border-gray-700
         border-t border-t-gray-200 dark:border-t-gray-700
         hidden lg:block"
         aria-label="Documentation menu">
      ${nonEmptySections.map((section, idx) =>
        NavSectionComponent({
          section,
          currentPath,
          productPath,
          isFirst: idx === 0,
        })
      ).join("")}
    </nav>
  `;
}

/**
 * Mobile navigation drawer
 */
export function MobileNav({ navigation, currentPath, productPath }: LeftNavProps): string {
  return `
    <div id="mobile-nav-overlay" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden"
         onclick="document.getElementById('mobile-nav').classList.add('hidden'); this.classList.add('hidden')">
    </div>
    <nav id="mobile-nav" class="fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-gray-900
         z-50 overflow-y-auto hidden lg:hidden shadow-xl"
         aria-label="Mobile documentation menu">
      <div class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
        <span class="font-semibold">Documentation</span>
        <button onclick="document.getElementById('mobile-nav').classList.add('hidden'); document.getElementById('mobile-nav-overlay').classList.add('hidden')"
                class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="py-4">
        ${navigation.sections.map((section, idx) =>
          NavSectionComponent({
            section,
            currentPath,
            productPath,
            isFirst: idx === 0,
          })
        ).join("")}
      </div>
    </nav>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
