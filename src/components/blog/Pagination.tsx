interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  htmxTarget?: string
  htmxUrl?: string
}

/**
 * Pagination component - Navigation controls for paginated content
 * Figma: Node 633:9174
 * Implements pixel-perfect pagination controls with First, Back, page numbers, Next, Last buttons
 */
export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  htmxTarget = '#articles-container',
  htmxUrl
}: PaginationProps): string {
  if (totalPages <= 1) return ''

  const getPageUrl = (page: number) => {
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}page=${page}`
  }
  const getHtmxUrl = (page: number) => {
    if (!htmxUrl) return getPageUrl(page)
    const separator = htmxUrl.includes('?') ? '&' : '?'
    return `${htmxUrl}${separator}page=${page}`
  }

  // Calculate which page numbers to show
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = []

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push('ellipsis')
      }

      // Pages around current
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  // Figma-matched styles (Node 633:9174)
  // Border: #e9e9e9 (Grey-4), Text: #313131 (Black-1), Active: #eb4a35
  const controlButtonClass = "bg-white border border-[#e9e9e9] px-3 py-2 rounded-[4px] text-base font-normal leading-6 text-[#313131] hover:bg-neutral-50 transition-colors flex items-center gap-1 cursor-pointer"
  const pageButtonClass = "bg-white border border-[#e9e9e9] px-3 py-2 rounded-[4px] text-base font-normal leading-6 text-[#313131] hover:bg-neutral-50 transition-colors cursor-pointer"
  const activePageClass = "bg-[#eb4a35] px-3 py-2 rounded-[4px] text-base font-medium leading-6 text-white tracking-tight"
  const disabledClass = "bg-white border border-[#e9e9e9] px-3 py-2 rounded-[4px] text-base font-normal leading-6 text-[#313131] opacity-50 cursor-not-allowed flex items-center gap-1"

  return (
    <nav class="flex items-center justify-center gap-[6px] flex-wrap" aria-label="Pagination">
      {/* First */}
      {currentPage > 1 ? (
        <button
          hx-get={getHtmxUrl(1)}
          hx-target={htmxTarget}
          hx-swap="innerHTML"
          hx-push-url={getPageUrl(1)}
          class={controlButtonClass}
          aria-label="First page"
        >
          <img src="/icons/blog/pagination/first.svg" alt="" class="w-[9.6px] h-2 rotate-180" />
          <span>First</span>
        </button>
      ) : (
        <span class={disabledClass} aria-disabled="true">
          <img src="/icons/blog/pagination/first.svg" alt="" class="w-[9.6px] h-2 rotate-180" />
          <span>First</span>
        </span>
      )}

      {/* Previous */}
      {currentPage > 1 ? (
        <button
          hx-get={getHtmxUrl(currentPage - 1)}
          hx-target={htmxTarget}
          hx-swap="innerHTML"
          hx-push-url={getPageUrl(currentPage - 1)}
          class={controlButtonClass}
          aria-label="Previous page"
        >
          <img src="/icons/blog/pagination/back.svg" alt="" class="w-2 h-[4.8px] rotate-90" />
          <span>Back</span>
        </button>
      ) : (
        <span class={disabledClass} aria-disabled="true">
          <img src="/icons/blog/pagination/back.svg" alt="" class="w-2 h-[4.8px] rotate-90" />
          <span>Back</span>
        </span>
      )}

      {/* Page numbers */}
      {pageNumbers.map((page, idx) => {
        if (page === 'ellipsis') {
          return (
            <span key={`ellipsis-${idx}`} class="bg-white border border-[#e9e9e9] px-3 py-2 rounded-[4px] flex flex-col items-center justify-center self-stretch">
              <div class="size-[12.8px] overflow-clip relative shrink-0">
                <div class="absolute inset-[42.5%_15%]">
                  <img src="/icons/blog/pagination/ellipsis.svg" alt="..." class="block max-w-none size-full" />
                </div>
              </div>
            </span>
          )
        }

        const isActive = page === currentPage
        return isActive ? (
          <span
            key={page}
            class={activePageClass}
            aria-current="page"
          >
            {page}
          </span>
        ) : (
          <button
            key={page}
            hx-get={getHtmxUrl(page)}
            hx-target={htmxTarget}
            hx-swap="innerHTML"
            hx-push-url={getPageUrl(page)}
            class={pageButtonClass}
          >
            {page}
          </button>
        )
      })}

      {/* Next */}
      {currentPage < totalPages ? (
        <button
          hx-get={getHtmxUrl(currentPage + 1)}
          hx-target={htmxTarget}
          hx-swap="innerHTML"
          hx-push-url={getPageUrl(currentPage + 1)}
          class={controlButtonClass}
          aria-label="Next page"
        >
          <span>Next</span>
          <img src="/icons/blog/pagination/next.svg" alt="" class="w-2 h-[4.8px] -rotate-90" />
        </button>
      ) : (
        <span class={disabledClass} aria-disabled="true">
          <span>Next</span>
          <img src="/icons/blog/pagination/next.svg" alt="" class="w-2 h-[4.8px] -rotate-90" />
        </span>
      )}

      {/* Last */}
      {currentPage < totalPages ? (
        <button
          hx-get={getHtmxUrl(totalPages)}
          hx-target={htmxTarget}
          hx-swap="innerHTML"
          hx-push-url={getPageUrl(totalPages)}
          class={controlButtonClass}
          aria-label="Last page"
        >
          <span>Last</span>
          <img src="/icons/blog/pagination/last.svg" alt="" class="w-[9.6px] h-2" />
        </button>
      ) : (
        <span class={disabledClass} aria-disabled="true">
          <span>Last</span>
          <img src="/icons/blog/pagination/last.svg" alt="" class="w-[9.6px] h-2" />
        </span>
      )}
    </nav>
  )
}
