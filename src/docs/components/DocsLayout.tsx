/**
 * Documentation Page Layout
 *
 * Three-column layout:
 * - Left: Navigation sidebar
 * - Center: Main content
 * - Right: Table of contents
 */

import type { ProductConfig } from "../config";
import type { NavigationSection, NavigationItem, TocItem } from "../state";
import type { Context } from "../../context";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { generateJsonLd } from "../seo/json-ld";

export interface DocsLayoutProps {
  product: ProductConfig;
  navigation: NavigationSection[];
  currentUri: string;
  title: string;
  description: string;
  content: string;
  toc: TocItem[];
  breadcrumbs: NavigationItem[];
  prev: NavigationItem | null;
  next: NavigationItem | null;
  lastmod?: string;
  filepath?: string;
  schemaType?: "article" | "howto" | "faq" | null;
  isLanding?: boolean;
  ctx?: Context;
}

export function DocsLayout(props: DocsLayoutProps): string {
  const {
    product,
    navigation,
    currentUri,
    title,
    description,
    content,
    toc,
    breadcrumbs,
    prev,
    next,
    lastmod,
    filepath,
    schemaType,
    isLanding,
    ctx,
  } = props;

  const mdUrl = currentUri + ".md";
  const docsPath = product.docs.replace(/^\.\//, "");
  const githubUrl = filepath
    ? `https://github.com/${product.repo}/edit/${product.branch}/${docsPath}/${filepath}`
    : null;

  const jsonLdTag = generateJsonLd({
    title,
    description,
    url: currentUri,
    lastmod,
    productName: product.name,
    schemaType: schemaType ?? "article",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - ${escapeHtml(product.name)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png">
  <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon.png">
  <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@1.0.0-RC.7/bundles/datastar.js"></script>
  ${jsonLdTag}
</head>
<body class="docs-page" data-signals="{mobileNavOpen: false, productsOpen: false, aboutOpen: false, mobileOpen: false, searchOpen: false, searchQuery: ''}">
  ${Header({ ctx, fullWidth: true })}

  ${isLanding ? "" : `<!-- Docs mobile menu button (separate from main nav mobile) -->
  <div class="docs-mobile-nav-toggle lg:hidden px-4 py-2 border-b border-outline-subtle bg-surface flex items-center gap-2">
    <button
      class="docs-menu-btn"
      data-on:click="$mobileNavOpen = !$mobileNavOpen"
      aria-label="Toggle docs navigation"
    >
      <svg data-show="!$mobileNavOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
      <svg data-show="$mobileNavOpen" style="display: none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
    <span class="text-sm text-on-surface-muted">${escapeHtml(product.name)} Docs</span>
  </div>

  <!-- Mobile overlay -->
  <div
    class="docs-overlay"
    data-show="$mobileNavOpen"
    data-on:click="$mobileNavOpen = false"
    style="display: none"
  ></div>`}

  <div class="docs-container">
    <!-- Left Sidebar: Navigation -->
    ${isLanding ? "" : `<aside class="docs-sidebar" data-class="{'docs-sidebar-open': $mobileNavOpen}">
      ${renderNavigation(navigation, currentUri)}
    </aside>`}

    <!-- Main Content -->
    <main class="docs-main${isLanding ? " docs-main-landing" : ""}">
      ${isLanding ? "" : renderBreadcrumbContainer(navigation, currentUri, breadcrumbs, mdUrl, githubUrl)}

      <article class="${isLanding ? "docs-content-landing" : "docs-content"}">
        ${content}
      </article>

      ${isLanding ? "" : renderPrevNext(prev, next)}

      ${!isLanding && lastmod ? `<p class="mt-4 text-sm text-on-surface-muted">Last updated: <time id="docs-lastmod-time" datetime="${lastmod}" data-updated-at="${lastmod}">${lastmod}</time></p>` : ""}
    </main>

    <!-- Right Sidebar: Table of Contents -->
    ${isLanding ? "" : `<aside class="docs-toc">
      ${renderSearchInput()}
      ${renderToc(toc)}
    </aside>`}
  </div>

  ${Footer()}

  <!-- Theme Toggle (fixed position) -->
  <div id="theme-toggle" class="theme-toggle" role="radiogroup" aria-label="Select color theme">
    <button onclick="setTheme('light')" data-theme="light" aria-label="Switch to light theme">
      <span class="theme-tooltip">Light</span>
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 12.9 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
      </svg>
    </button>
    <button onclick="setTheme('system')" data-theme="system" aria-label="Switch to system theme">
      <span class="theme-tooltip">System</span>
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd"/>
      </svg>
    </button>
    <button onclick="setTheme('dark')" data-theme="dark" aria-label="Switch to dark theme">
      <span class="theme-tooltip">Dark</span>
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        <path d="M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2c0 108.9 83.5 198.3 189.9 207.3C289.8 439 257.7 448 223.5 448C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2zm66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3z"/>
      </svg>
    </button>
  </div>

  <script>
    // Theme management
    function setTheme(theme) {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
      updateThemeToggleUI(theme);
    }

    function applyTheme(theme) {
      const html = document.documentElement;
      let isDark = theme === 'dark';
      if (theme === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      html.classList.toggle('dark', isDark);
    }

    function updateThemeToggleUI(theme) {
      document.querySelectorAll('[data-theme]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
      });
    }

    // Initialize theme
    (function() {
      const theme = localStorage.getItem('theme') || 'system';
      applyTheme(theme);
      updateThemeToggleUI(theme);

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (localStorage.getItem('theme') === 'system') {
          applyTheme('system');
        }
      });
    })();

    // Tab switching for code examples
    function switchTab(button, tabIndex) {
      const container = button.closest('[data-tabs]');
      if (!container) return;

      container.querySelectorAll('.tab-button').forEach((btn, i) => {
        btn.classList.toggle('active', i === tabIndex);
      });
      container.querySelectorAll('.tab-panel').forEach((panel, i) => {
        panel.classList.toggle('active', i === tabIndex);
      });
    }

    // TOC scroll spy - highlight current section in right sidebar
    (function() {
      const tocLinks = document.querySelectorAll('.toc-item a');
      if (tocLinks.length === 0) return;

      const headings = [];
      tocLinks.forEach(link => {
        const id = link.getAttribute('href')?.slice(1);
        if (id) {
          const heading = document.getElementById(id);
          if (heading) headings.push({ id, element: heading, link });
        }
      });

      if (headings.length === 0) return;

      let activeLink = null;
      const OFFSET = 100; // Account for sticky header

      function updateActive() {
        const scrollPos = window.scrollY + OFFSET;

        // Find the heading that's currently in view
        let current = headings[0];
        for (const h of headings) {
          if (h.element.offsetTop <= scrollPos) {
            current = h;
          } else {
            break;
          }
        }

        if (activeLink !== current.link) {
          if (activeLink) activeLink.classList.remove('active');
          current.link.classList.add('active');
          activeLink = current.link;
        }
      }

      // Throttled scroll handler
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateActive();
            ticking = false;
          });
          ticking = true;
        }
      });

      // Initial update
      updateActive();
    })();

    // Update last updated timestamp to relative time
    (function() {
      const element = document.getElementById('docs-lastmod-time');
      if (element) {
        const updatedAt = element.getAttribute('data-updated-at');
        if (updatedAt) {
          const date = new Date(updatedAt);
          const now = new Date();
          const diffMs = now - date;
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffMinutes = Math.floor(diffMs / (1000 * 60));

          let relativeTime;
          if (diffMinutes < 1) {
            relativeTime = 'just now';
          } else if (diffMinutes < 60) {
            relativeTime = diffMinutes + ' minute' + (diffMinutes === 1 ? '' : 's') + ' ago';
          } else if (diffHours < 24) {
            relativeTime = diffHours + ' hour' + (diffHours === 1 ? '' : 's') + ' ago';
          } else if (diffDays < 7) {
            relativeTime = diffDays + ' day' + (diffDays === 1 ? '' : 's') + ' ago';
          } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            relativeTime = weeks + ' week' + (weeks === 1 ? '' : 's') + ' ago';
          } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            relativeTime = months + ' month' + (months === 1 ? '' : 's') + ' ago';
          } else {
            const years = Math.floor(diffDays / 365);
            relativeTime = years + ' year' + (years === 1 ? '' : 's') + ' ago';
          }

          element.textContent = relativeTime;
        }
      }
    })();

    // Page actions dropdown
    (function() {
      var toggle = document.getElementById('page-actions-toggle');
      var dropdown = document.getElementById('page-actions-dropdown');
      if (!toggle || !dropdown) return;

      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });

      document.addEventListener('click', function(e) {
        if (dropdown && toggle && !dropdown.contains(e.target) && !toggle.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    })();

    function copyPageAsMarkdown(button) {
      var mdUrl = button.getAttribute('data-md-url');
      if (!mdUrl) return;

      fetch(mdUrl)
        .then(function(response) {
          if (!response.ok) throw new Error('Failed to fetch');
          return response.text();
        })
        .then(function(markdown) {
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(markdown).then(function() {
              showCopySuccess(button);
              var dropdown = document.getElementById('page-actions-dropdown');
              if (dropdown) dropdown.classList.add('hidden');
            });
          }
        })
        .catch(function(err) {
          console.error('Failed to fetch markdown:', err);
        });
    }

    function showCopySuccess(button) {
      var textSpan = button.querySelector('span:last-child');
      if (textSpan && button.id === 'copy-page-button') {
        var original = textSpan.textContent;
        textSpan.textContent = 'Copied!';
        setTimeout(function() { textSpan.textContent = original; }, 2000);
      } else {
        var originalHTML = button.innerHTML;
        button.innerHTML = '<span class="text-sm">Copied!</span>';
        setTimeout(function() { button.innerHTML = originalHTML; }, 2000);
      }
    }

    function openInChatGPT() {
      var fullUrl = window.location.origin + window.location.pathname;
      var prompt = 'Read ' + fullUrl + ' and answer questions about the content.';
      var chatgptUrl = 'https://chat.openai.com/?q=' + encodeURIComponent(prompt);
      window.open(chatgptUrl, '_blank');
    }

    function openInClaude() {
      var fullUrl = window.location.origin + window.location.pathname;
      var prompt = 'Read from ' + fullUrl + ' so I can ask questions about it.';
      var claudeUrl = 'https://claude.ai/new?q=' + encodeURIComponent(prompt);
      window.open(claudeUrl, '_blank');
    }

    // Copy code button
    (function() {
      document.querySelectorAll('pre').forEach(function(pre) {
        if (pre.querySelector('[data-copy-code]')) return;
        var code = pre.querySelector('code');
        if (!code) return;

        var btn = document.createElement('button');
        btn.setAttribute('data-copy-code', 'true');
        btn.className = 'copy-code-btn';
        btn.textContent = 'Copy';
        btn.title = 'Copy code';

        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          var text = code.textContent;
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function() {
              btn.textContent = 'Copied!';
              setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
            });
          }
        });

        pre.style.position = 'relative';

        pre.addEventListener('mouseenter', function() {
          if (window.innerWidth > 768) { btn.style.display = 'block'; btn.style.opacity = '1'; }
        });
        pre.addEventListener('mouseleave', function() {
          if (window.innerWidth > 768) {
            btn.style.opacity = '0';
            setTimeout(function() { if (btn.style.opacity === '0') btn.style.display = 'none'; }, 200);
          }
        });
        pre.addEventListener('touchstart', function() {
          btn.style.display = 'block'; btn.style.opacity = '1';
          setTimeout(function() {
            btn.style.opacity = '0';
            setTimeout(function() { btn.style.display = 'none'; }, 200);
          }, 3000);
        }, { passive: true });

        pre.appendChild(btn);
      });
    })();

  </script>
</body>
</html>`;
}

function renderNavigation(sections: NavigationSection[], currentUri: string): string {
  if (sections.length === 0) {
    return "<p>No navigation</p>";
  }

  return sections
    .map(
      (section) => `
    <div class="nav-section">
      <div class="text-xs font-medium leading-4 text-brand uppercase tracking-wider mb-3">${escapeHtml(section.title)}</div>
      <ul class="nav-list">
        ${renderNavItems(section.children, currentUri)}
      </ul>
    </div>
  `
    )
    .join("");
}

function renderNavItems(items: NavigationItem[], currentUri: string): string {
  return items
    .map((item) => {
      const isActive = item.href === currentUri;
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = hasChildren && isAncestor(item, currentUri);

      return `
      <li class="nav-item${isActive ? " active" : ""}${isExpanded ? " expanded" : ""}">
        <a href="${escapeHtml(item.href)}"${item.isExternal ? ' target="_blank" rel="noopener"' : ""}>
          ${escapeHtml(item.title)}
          ${item.isExternal ? '<span class="external-icon">↗</span>' : ""}
        </a>
        ${
          hasChildren
            ? `<ul class="nav-children">${renderNavItems(item.children!, currentUri)}</ul>`
            : ""
        }
      </li>
    `;
    })
    .join("");
}

function isAncestor(item: NavigationItem, uri: string): boolean {
  if (item.href === uri) return true;
  if (item.children) {
    return item.children.some((child) => isAncestor(child, uri));
  }
  return false;
}

function renderBreadcrumbContainer(
  navigation: NavigationSection[],
  currentUri: string,
  breadcrumbs: NavigationItem[],
  mdUrl: string,
  githubUrl: string | null
): string {
  const breadcrumbHtml = renderBreadcrumbs(navigation, currentUri, breadcrumbs);
  const actionsHtml = renderPageActions(mdUrl, githubUrl);

  if (!breadcrumbHtml && !actionsHtml) return "";

  return `
    <div class="flex items-center gap-2 mb-3 overflow-visible">
      ${breadcrumbHtml}
      ${actionsHtml}
    </div>
  `;
}

function renderBreadcrumbs(
  navigation: NavigationSection[],
  currentUri: string,
  breadcrumbs: NavigationItem[]
): string {
  // Find the section this page belongs to
  let sectionTitle = "";
  for (const section of navigation) {
    const found = findInItems(section.children, currentUri);
    if (found) {
      sectionTitle = section.title;
      break;
    }
  }

  // Build breadcrumb items: section title + parent pages (exclude current page)
  const items: string[] = [];

  if (sectionTitle) {
    items.push(
      `<li class="flex items-center bg-breadcrumb-bg rounded-md px-2 py-0.5 max-w-48 shrink-0">
        <span class="text-sm font-normal leading-6 text-on-surface truncate">${escapeHtml(sectionTitle)}</span>
      </li>`
    );
  }

  // Add parent pages (all breadcrumbs except last which is current page)
  const parents = breadcrumbs.slice(0, -1);
  for (const item of parents) {
    items.push(
      `<li class="flex items-center bg-breadcrumb-bg rounded-md px-2 py-0.5 max-w-48 shrink-0">
        <a href="${escapeHtml(item.href)}" class="text-sm font-normal leading-6 text-on-surface hover:text-on-surface-strong truncate no-underline">${escapeHtml(item.title)}</a>
      </li>`
    );
  }

  if (items.length === 0) return "";

  const separator = `<span class="text-xs font-semibold leading-none text-breadcrumb-separator mx-1">/</span>`;

  return `
    <nav class="flex-1" aria-label="Breadcrumb">
      <ol class="flex flex-nowrap items-center overflow-hidden list-none p-0 m-0">
        ${items.join(separator)}
      </ol>
    </nav>
  `;
}

function findInItems(items: NavigationItem[], uri: string): boolean {
  for (const item of items) {
    if (item.href === uri) return true;
    if (item.children && findInItems(item.children, uri)) return true;
  }
  return false;
}

function renderPageActions(mdUrl: string, githubUrl: string | null): string {
  const arrowUpRight = `<svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7m0 0H7m10 0v10"/></svg>`;

  const copyIcon = `<svg class="size-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

  const chevronDown = `<svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>`;

  const githubIcon = `<svg class="size-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`;

  const chatIcon = `<svg class="size-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/></svg>`;

  const sparkleIcon = `<svg class="size-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>`;

  const mdIcon = `<svg class="size-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`;

  const githubMenuItem = githubUrl
    ? `<a href="${escapeHtml(githubUrl)}" target="_blank" class="w-full flex items-start gap-3 px-4 py-2 text-sm text-on-surface-strong hover:bg-surface-hover transition-colors no-underline">
        ${githubIcon}
        <div class="flex-1 min-w-0">
          <div class="font-normal inline-flex items-center gap-1">Edit on GitHub ${arrowUpRight}</div>
          <div class="text-xs opacity-60 mt-0.5">Edit this page on GitHub</div>
        </div>
      </a>`
    : "";

  return `
    <div class="relative inline-flex ml-auto overflow-visible">
      <div class="inline-flex rounded-md shadow-sm">
        <button type="button" id="copy-page-button" data-md-url="${escapeHtml(mdUrl)}" onclick="copyPageAsMarkdown(this)" class="inline-flex items-center gap-1.5 px-2 py-1.5 text-xs font-normal text-on-surface-strong bg-surface border border-outline rounded-l-md hover:bg-surface-hover transition-colors cursor-pointer">
          ${copyIcon}
          <span>Copy Page</span>
        </button>
        <button type="button" id="page-actions-toggle" class="inline-flex items-center px-1.5 py-1.5 text-xs text-on-surface-strong bg-surface border border-l-0 border-outline rounded-r-md hover:bg-surface-hover transition-colors cursor-pointer">
          ${chevronDown}
        </button>
      </div>
      <div id="page-actions-dropdown" class="hidden absolute right-0 top-full mt-2 min-w-64 w-64 rounded-md shadow-lg bg-surface z-[9999] border border-outline">
        <div class="py-1">
          <button id="copy-page-button-menu" data-md-url="${escapeHtml(mdUrl)}" onclick="copyPageAsMarkdown(this)" class="w-full flex items-start gap-3 px-4 py-2 text-left text-sm text-on-surface-strong hover:bg-surface-hover transition-colors cursor-pointer">
            ${copyIcon}
            <div class="flex-1 min-w-0">
              <div class="font-normal">Copy Page</div>
              <div class="text-xs opacity-60 mt-0.5">Copy this page as Markdown for LLMs</div>
            </div>
          </button>
          <a href="${escapeHtml(mdUrl)}" target="_blank" class="w-full flex items-start gap-3 px-4 py-2 text-sm text-on-surface-strong hover:bg-surface-hover transition-colors no-underline">
            ${mdIcon}
            <div class="flex-1 min-w-0">
              <div class="font-normal inline-flex items-center gap-1">View as Markdown ${arrowUpRight}</div>
              <div class="text-xs opacity-60 mt-0.5">View this page as plain text</div>
            </div>
          </a>
          ${githubMenuItem}
          <div class="border-t border-outline my-1"></div>
          <button onclick="openInChatGPT()" class="w-full flex items-start gap-3 px-4 py-2 text-left text-sm text-on-surface-strong hover:bg-surface-hover transition-colors cursor-pointer">
            ${chatIcon}
            <div class="flex-1 min-w-0">
              <div class="font-normal inline-flex items-center gap-1">Open in ChatGPT ${arrowUpRight}</div>
              <div class="text-xs opacity-60 mt-0.5">Ask questions about this page</div>
            </div>
          </button>
          <button onclick="openInClaude()" class="w-full flex items-start gap-3 px-4 py-2 text-left text-sm text-on-surface-strong hover:bg-surface-hover transition-colors cursor-pointer">
            ${sparkleIcon}
            <div class="flex-1 min-w-0">
              <div class="font-normal inline-flex items-center gap-1">Open in Claude ${arrowUpRight}</div>
              <div class="text-xs opacity-60 mt-0.5">Ask questions about this page</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSearchInput(): string {
  const searchIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>`;

  return `
    <div class="toc-search">
      <div class="toc-search-input">
        <div class="toc-search-icon">${searchIcon}</div>
        <input type="text" placeholder="remove me?" autocomplete="off" />
      </div>
    </div>
  `;
}

function renderToc(toc: TocItem[]): string {
  if (toc.length === 0) {
    return "";
  }

  return `
    <nav class="toc" aria-label="Table of contents">
      <div class="toc-title">On this page</div>
      <ul class="space-y-0.5">
        ${toc
          .map(
            (item) => `
          <li class="toc-item toc-level-${item.level}">
            <a href="#${escapeHtml(item.id)}"><span>${escapeHtml(item.text)}</span></a>
          </li>
        `
          )
          .join("")}
      </ul>
    </nav>
  `;
}

function renderPrevNext(
  prev: NavigationItem | null,
  next: NavigationItem | null
): string {
  if (!prev && !next) {
    return "";
  }

  const btnCls = "group text-sm flex gap-4 flex-1 items-center p-2.5 border border-outline-subtle rounded hover:border-outline-input-focus transition-all text-pretty md:text-base md:h-[80px] no-underline";

  const chevLeft = `<svg class="size-4 text-on-surface-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>`;
  const chevRight = `<svg class="size-4 text-on-surface-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;

  const prevHtml = prev
    ? `<div class="flex-1 w-full sm:w-auto">
        <a href="${escapeHtml(prev.href)}" class="${btnCls} flex-row-reverse">
          <span class="flex flex-col flex-1 text-right justify-center">
            <span class="text-xs text-on-surface-placeholder">Previous</span>
            <span class="text-on-surface-muted line-clamp-2">${escapeHtml(prev.title)}</span>
          </span>
          ${chevLeft}
        </a>
      </div>`
    : "";

  const nextHtml = next
    ? `<div class="flex-1 w-full sm:w-auto">
        <a href="${escapeHtml(next.href)}" class="${btnCls}">
          <span class="flex flex-col flex-1 justify-center">
            <span class="text-xs text-on-surface-placeholder">Next</span>
            <span class="text-on-surface-muted line-clamp-2">${escapeHtml(next.title)}</span>
          </span>
          ${chevRight}
        </a>
      </div>`
    : "";

  return `
    <nav class="flex flex-col sm:flex-row justify-between items-start mt-8 pt-4 gap-4">
      ${prevHtml}${nextHtml}
    </nav>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
