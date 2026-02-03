/**
 * Documentation Layout Component
 *
 * Uses the main site Layout with docs-specific sidebar and content area.
 */

import type { ProductConfig } from "../config";
import type { Navigation } from "../summary";
import type { Heading } from "../markdown";
import { LeftNav, MobileNav } from "./LeftNav";
import { RightToc, MobileToc } from "./RightToc";
import { Breadcrumb, buildBreadcrumb } from "./Breadcrumb";
import { PrevNextNav } from "./Navigation";
import type { NavItem } from "../summary";
import { Layout } from "../../components/Layout";

interface DocsLayoutProps {
  product: ProductConfig;
  navigation: Navigation;
  currentPath: string;
  title: string;
  description: string;
  content: string;
  headings: Heading[];
  prev?: NavItem;
  next?: NavItem;
  lastUpdated?: string;
}

export async function DocsLayout({
  product,
  navigation,
  currentPath,
  title,
  description,
  content,
  headings,
  prev,
  next,
  lastUpdated,
}: DocsLayoutProps): Promise<string> {
  const breadcrumbItems = buildBreadcrumb(currentPath, product.name, title);

  const docsContent = `
    <!-- Mobile nav overlay and drawer -->
    ${MobileNav({ navigation, currentPath, productPath: product.path })}

    <!-- Main docs layout - fullscreen edge-to-edge -->
    <div class="flex w-full border-t border-gray-200 dark:border-gray-700">
      <!-- Left sidebar - full height, edge-to-edge -->
      ${LeftNav({ navigation, currentPath, productPath: product.path })}

      <!-- Main content - constrained width for readability -->
      <main id="doc-content" class="flex-1 min-w-0 px-8 lg:px-16 py-6 max-w-4xl">
        ${Breadcrumb({ items: breadcrumbItems })}

        ${MobileToc({ headings })}

        <article class="docs-prose prose max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-[28px] prose-h1:leading-tight prose-h1:mb-4
          prose-h2:text-[22px] prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-[18px] prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-li:text-[15px] prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-1
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-ul:my-3 prose-ol:my-3">
          ${content}
        </article>

        ${PrevNextNav({ prev, next })}

        ${lastUpdated ? `
          <p class="mt-8 text-sm text-gray-500">
            Last updated: <time datetime="${lastUpdated}">${formatDate(lastUpdated)}</time>
          </p>
        ` : ""}
      </main>

      <!-- Right TOC -->
      ${RightToc({ headings })}
    </div>

    <style>
      /* Docs-specific styles */
      .docs-prose h1, .docs-prose h2, .docs-prose h3 {
        scroll-margin-top: 80px;
      }
      /* Inline code (not inside pre blocks) */
      .docs-prose code:not(pre code) {
        background: #f3f4f6;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-size: 0.875em;
        color: #1f2937;
      }
      /* Shiki code blocks - let inline styles work */
      .docs-prose pre.shiki {
        margin: 1rem 0;
        border-radius: 0.5rem;
      }
      .docs-prose pre.shiki code {
        background: transparent !important;
        padding: 0;
        font-size: 0; /* Collapse whitespace between lines */
        color: inherit;
        display: flex;
        flex-direction: column;
      }
      .docs-prose pre.shiki code span {
        background: transparent !important;
      }
      .docs-prose pre.shiki .line {
        font-size: 13px;
        line-height: 1.5;
      }
      .prose table {
        display: block;
        overflow-x: auto;
      }
      .prose img {
        border-radius: 0.5rem;
      }

      /* Hint boxes */
      .hint {
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
      }
      .hint.info { background: #eff6ff; border-left: 4px solid #3b82f6; }
      .hint.warning { background: #fefce8; border-left: 4px solid #eab308; }
      .hint.danger { background: #fef2f2; border-left: 4px solid #ef4444; }
      .hint.success { background: #f0fdf4; border-left: 4px solid #22c55e; }

      /* Navigation open state */
      .nav-item.open > .nav-summary .nav-chevron { transform: rotate(90deg); }
    </style>

    <script>
      // Handle navigation clicks for htmx
      document.body.addEventListener('htmx:afterSwap', function(event) {
        window.scrollTo(0, 0);
        updateActiveNavItem(window.location.pathname);
      });

      function updateActiveNavItem(path) {
        document.querySelectorAll('#navigation a').forEach(a => {
          a.classList.remove('bg-primary/10', 'text-primary', 'font-medium', 'border-l-2', 'border-primary');
        });
        const activeLink = document.querySelector('#navigation a[href="' + path + '"]');
        if (activeLink) {
          activeLink.classList.add('bg-primary/10', 'text-primary', 'font-medium', 'border-l-2', 'border-primary');
        }
      }
    </script>
  `;

  return Layout({
    title: `${title} | ${product.name}`,
    description,
    children: docsContent,
    fullWidth: true,
    hideFooter: true, // Docs have their own footer style
  });
}

/**
 * Partial content for htmx requests
 */
export function DocsPartial({
  product,
  navigation,
  currentPath,
  title,
  content,
  headings,
  prev,
  next,
  lastUpdated,
}: DocsLayoutProps): string {
  const breadcrumbItems = buildBreadcrumb(currentPath, product.name, title);

  return `
    ${Breadcrumb({ items: breadcrumbItems })}

    ${MobileToc({ headings })}

    <article class="docs-prose prose max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-[28px] prose-h1:leading-tight prose-h1:mb-4
      prose-h2:text-[22px] prose-h2:mt-8 prose-h2:mb-4
      prose-h3:text-[18px] prose-h3:mt-6 prose-h3:mb-3
      prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
      prose-li:text-[15px] prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-1
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900 dark:prose-strong:text-white
      prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[14px] prose-code:font-normal
      prose-pre:bg-gray-900 prose-pre:text-[14px]
      prose-ul:my-3 prose-ol:my-3">
      ${content}
    </article>

    ${PrevNextNav({ prev, next })}

    ${lastUpdated ? `
      <p class="mt-8 text-sm text-gray-500">
        Last updated: <time datetime="${lastUpdated}">${formatDate(lastUpdated)}</time>
      </p>
    ` : ""}

    <script>
      document.title = '${escapeHtml(title)} | ${escapeHtml(product.name)} | Health Samurai';
    </script>
  `;
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
