/**
 * AuthorFilterSection component - Author filtering with author pills
 * Similar to FilterSection but for authors
 *
 * Displays selectable author pills with HTMX navigation
 * Uses HTMX for dynamic content loading without page refresh
 */

interface AuthorFilterSectionProps {
  authors: { name: string; slug: string; image: string; count: number }[];
  selectedAuthor: string | null;
  baseUrl?: string;
}

export function AuthorFilterSection({ authors, selectedAuthor, baseUrl = "/blog" }: AuthorFilterSectionProps): string {
  const getAuthorUrl = (authorSlug: string) => {
    const newAuthor = selectedAuthor === authorSlug ? "" : authorSlug;
    const authorQuery = newAuthor ? `&author=${newAuthor}` : "";
    return `${baseUrl}?tab=by-author${authorQuery}`;
  };

  const getHtmxUrl = (authorSlug: string) => {
    const newAuthor = selectedAuthor === authorSlug ? "" : authorSlug;
    const authorQuery = newAuthor ? `?author=${newAuthor}` : "";
    return `/htmx/blog/by-author${authorQuery}`;
  };

  return `
    <div id="filter-section" class="mb-8">
      <div class="flex flex-wrap gap-3">
        ${authors.map(author => {
          const isSelected = selectedAuthor === author.slug;
          const url = getAuthorUrl(author.slug);
          const htmxUrl = getHtmxUrl(author.slug);

          // State-dependent border class
          const borderClass = isSelected ? "border-brand-500" : "border-neutral-300";
          const bgClass = isSelected ? "bg-neutral-50" : "bg-white hover:bg-neutral-50";

          return `
            <a
              href="${url}"
              hx-get="${htmxUrl}"
              hx-target="#articles-container"
              hx-swap="outerHTML"
              hx-push-url="${url}"
              class="flex gap-[8px] items-center justify-center px-[10px] py-[6px] rounded-[48px] shrink-0 transition-colors no-underline border border-solid ${borderClass} ${bgClass}"
            >
              ${author.image ? `<img src="${author.image}" alt="" class="w-5 h-5 rounded-full object-cover" />` : ''}
              <span class="font-sans font-normal text-neutral-900 text-[14px] leading-[20px] tracking-[0px] whitespace-nowrap">${author.name} (${author.count})</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
