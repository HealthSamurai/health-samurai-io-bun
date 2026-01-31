// Search button for navigation
export function SearchButton(): string {
  return (
    <button
      type="button"
      class="group flex items-center gap-2 p-2 rounded-lg text-gray-500 dark:text-dark-text-light hover:text-gray-700 dark:hover:text-dark-text cursor-pointer transition-colors"
      data-on:click="$searchOpen = true"
      aria-label="Search"
      title="Search (⌘K)"
    >
      <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <kbd class="hidden sm:inline-flex items-center gap-1 rounded-md border-2 border-gray-300 dark:border-dark-text-muted px-2 py-1 font-mono text-xs font-medium text-gray-500 dark:text-dark-text-light group-hover:border-gray-400 group-hover:text-gray-700 dark:group-hover:border-dark-text-light dark:group-hover:text-dark-text transition-colors">
        <span>⌘</span>K
      </kbd>
    </button>
  );
}

// Mobile search button
export function MobileSearchButton(): string {
  return (
    <button
      type="button"
      class="lg:hidden -m-2 p-2 text-gray-500 dark:text-dark-text-light hover:text-gray-700 dark:hover:text-dark-text"
      data-on:click="$searchOpen = true"
    >
      <span class="sr-only">Search</span>
      <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </button>
  );
}

// Search modal (command palette)
export function SearchModal(): string {
  return (
    <div
      class="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20"
      data-show="$searchOpen"
      style={{ display: "none" }}
      data-on:keydown__window="if (event.key === 'k' && (event.metaKey || event.ctrlKey)) { event.preventDefault(); $searchOpen = !$searchOpen; } if (event.key === 'Escape') { $searchOpen = false; }"
    >
      {/* Backdrop */}
      <div
        class="fixed inset-0 bg-gray-500/75 dark:bg-black/75 transition-opacity"
        data-on:click="$searchOpen = false"
      />

      {/* Modal */}
      <div class="relative mx-auto max-w-xl transform rounded-xl bg-white dark:bg-dark-bg shadow-2xl ring-1 ring-black/5 dark:ring-dark-border transition-all">
        {/* Search input */}
        <div class="flex items-center border-b border-gray-100 dark:border-dark-border px-4">
          <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            name="q"
            class="w-full border-0 bg-transparent px-4 py-4 text-gray-900 dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-0 sm:text-sm"
            placeholder="Search blog posts, documentation..."
            hx-get="/api/search"
            hx-trigger="input changed delay:200ms, keyup[key=='Enter']"
            hx-target="#search-results"
            hx-swap="innerHTML"
            data-bind:searchQuery
          />
          <kbd class="hidden sm:inline-flex items-center rounded border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg-alt px-1.5 font-mono text-xs text-gray-400 dark:text-dark-text-muted">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div
          id="search-results"
          class="max-h-80 scroll-py-2 overflow-y-auto"
        >
          {/* Results loaded via htmx, show quick links by default */}
        </div>

        {/* Quick links when no query */}
        <div
          id="quick-links"
          class="px-4 py-3"
        >
          <p class="text-xs font-semibold text-gray-500 dark:text-dark-text-muted uppercase tracking-wide mb-2">Quick links</p>
          <ul class="space-y-1">
            <li>
              <a href="/blog" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-dark-text-light hover:bg-gray-100 dark:hover:bg-dark-bg-alt" data-on:click="$searchOpen = false">
                <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                Blog
              </a>
            </li>
            <li>
              <a href="/aidbox" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-dark-text-light hover:bg-gray-100 dark:hover:bg-dark-bg-alt" data-on:click="$searchOpen = false">
                <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                Aidbox FHIR Server
              </a>
            </li>
            <li>
              <a href="/docs" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-dark-text-light hover:bg-gray-100 dark:hover:bg-dark-bg-alt" data-on:click="$searchOpen = false">
                <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Documentation
              </a>
            </li>
            <li>
              <a href="/contacts" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-dark-text-light hover:bg-gray-100 dark:hover:bg-dark-bg-alt" data-on:click="$searchOpen = false">
                <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
