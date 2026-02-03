import type { Article } from '../../lib/articles.ts'
import { slugify } from '../../lib/articles.ts'

// Check if article is a video or workshop (for "x min watch" vs "x min read")
function isWatchableContent(article: Article): boolean {
  const tags = article.tags || []
  return tags.some(tag => {
    const tagLower = tag.toLowerCase()
    return tagLower === 'video' || tagLower === 'videos' ||
           tagLower === 'online workshop' || tagLower === 'workshop'
  })
}

// Get reading time text based on content type
// Normalize all formats to "X min read" or "X min watch"
function getReadingTimeText(article: Article): string {
  const time = article.readingTime || ''
  if (!time) return ''

  // Extract the numeric part
  const match = time.match(/(\d+)/)
  if (!match) return time

  const minutes = match[1]
  const suffix = isWatchableContent(article) ? 'min watch' : 'min read'

  return `${minutes} ${suffix}`
}

interface ArticleCardProps {
  key?: string
  article: Article
  variant?: 'featured' | 'horizontal' | 'grid' | 'list' | 'similar'
  showAuthor?: boolean
}

/**
 * Article card component with four variants:
 * - featured: Large vertical card (474×592px) for featured articles
 * - horizontal: Horizontal card with thumbnail for article lists
 * - grid: Compact card for grid layouts
 * - list: Full-width list item for All Articles section (Figma 616-5641)
 *
 * All designs match Figma specs with pixel-perfect fidelity.
 */
export function ArticleCard({ article, variant = 'grid', showAuthor = true }: ArticleCardProps): string {
  if (variant === 'featured') {
    return FeaturedCard({ article })
  }

  if (variant === 'horizontal') {
    return HorizontalCard({ article, showAuthor })
  }

  if (variant === 'list') {
    return ListCard({ article })
  }

  return GridCard({ article })
}

/**
 * Featured Card - large vertical card (474×592px)
 * Figma Node: 616:5189
 * Note: Uses div wrapper with separate links to avoid nested <a> tags
 */
function FeaturedCard({ article }: { article: Article }): string {
  return (
    <div class="group bg-white border border-neutral-300 rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow w-[474px] h-[524px] flex flex-col justify-between shrink-0">
      <a href={`/blog/${article.slug}`} class="block">
        {article.image && (
          <div class="w-full h-[233px] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div class="flex flex-col gap-[16px] px-[31px] pt-[16px]">
          <h3 class="text-neutral-900 text-[24px] font-semibold leading-[32px] tracking-[-0.4px]">
            {article.title}
          </h3>
          <p class="text-neutral-500 text-[16px] font-normal leading-[24px]">
            {article.teaser}
          </p>
        </div>
      </a>

      <div class="px-[31px] pb-[32px]">
        {CardMetadata({ article, clickable: true })}
      </div>
    </div>
  )
}

/**
 * Horizontal Card - for author/topic pages and featured section
 * Figma Node: 616:5215 (featured section), 633:5778 (author page)
 */
function HorizontalCard({ article, showAuthor = true }: { article: Article; showAuthor?: boolean }): string {
  const CALENDAR_ICON = '/icons/blog/calendar.svg'
  const CLOCK_ICON = '/icons/blog/clock.svg'

  // Author/topic page layout (Figma 633:5778)
  if (!showAuthor) {
    return (
      <a
        href={`/blog/${article.slug}`}
        class="group block hover:opacity-80 transition-opacity"
      >
        <div class="flex gap-[40px] items-start w-full">
          {article.image && (
            <div class="w-[186px] h-[143px] rounded-[8px] overflow-hidden shrink-0">
              <img
                src={article.image}
                alt={article.title}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          <div class="flex-1 flex flex-col gap-[20px] min-w-0">
            <div class="flex flex-col gap-[12px] py-[4px]">
              {/* Metadata at top */}
              <div class="flex gap-[16px] items-start">
                <div class="flex gap-[8px] items-center">
                  <img src={CALENDAR_ICON} alt="" class="w-4 h-4" />
                  <span class="text-[14px] font-normal leading-[20px] text-text-secondary">
                    {formatDate(article.published)}
                  </span>
                </div>
                <div class="flex gap-[8px] items-center">
                  <img src={CLOCK_ICON} alt="" class="w-4 h-4" />
                  <span class="text-[14px] font-normal leading-[20px] text-text-secondary">
                    {getReadingTimeText(article)}
                  </span>
                </div>
              </div>

              {/* Title and Description */}
              <div class="flex flex-col gap-[16px]">
                <div class="flex flex-col gap-[8px]">
                  <h3 class="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-text-primary">
                    {article.title}
                  </h3>
                  <p class="text-[16px] font-normal leading-[24px] text-text-secondary overflow-hidden text-ellipsis">
                    {article.teaser}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }

  // Featured section layout (Figma 616:5215)
  // Note: Uses div wrapper with separate links to avoid nested <a> tags
  return (
    <div class="group hover:opacity-80 transition-opacity">
      <div class="flex gap-[20px] items-end w-[681px] h-[160px]">
        <a href={`/blog/${article.slug}`} class="block shrink-0">
          {article.image && (
            <div class="w-[208px] h-[160px] rounded-[8px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </a>
        <div class="flex-1 flex flex-col justify-between h-full min-w-0">
          <a href={`/blog/${article.slug}`} class="flex flex-col gap-3">
            <h3 class="text-neutral-900 text-[20px] font-medium leading-[28px] tracking-[-0.4px] line-clamp-2 h-[56px]">
              {article.title}
            </h3>
            <p class="text-neutral-500 text-[16px] font-normal leading-[24px] tracking-[0px] line-clamp-2">
              {article.teaser}
            </p>
          </a>
          {CardMetadata({ article, clickable: true })}
        </div>
      </div>
    </div>
  )
}

/**
 * List Card - full-width list item for All Articles section
 * Figma Node: 616:5293
 * Note: Uses div wrapper with separate links to avoid nested <a> tags
 */
function ListCard({ article }: { article: Article }): string {
  const CALENDAR_ICON = '/icons/blog/calendar.svg'
  const CLOCK_ICON = '/icons/blog/clock.svg'
  const AUTHOR_ICON = '/icons/blog/author.svg'

  return (
    <div class="group border-b border-neutral-200 py-[24px] hover:opacity-95 transition-opacity">
      <div class="flex gap-[40px] items-start w-full">
        {/* Image - clickable */}
        <a href={`/blog/${article.slug}`} class="block shrink-0">
          {article.image && (
            <div class="w-[258px] h-[200px] rounded-[8px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </a>

        {/* Content - title clickable */}
        <div class="flex flex-col gap-[20px] w-[611px]">
          <div class="flex flex-col gap-[12px] py-[4px]">
            {/* Metadata at top */}
            <div class="flex gap-[16px] items-start">
              <div class="flex gap-[8px] items-center">
                <img src={CALENDAR_ICON} alt="" class="w-4 h-4" />
                <span class="text-[14px] font-normal leading-[20px] text-neutral-500">
                  {formatDate(article.published)}
                </span>
              </div>
              <div class="flex gap-[8px] items-center">
                <img src={CLOCK_ICON} alt="" class="w-4 h-4" />
                <span class="text-[14px] font-normal leading-[20px] text-neutral-500">
                  {getReadingTimeText(article)}
                </span>
              </div>
            </div>

            {/* Title and Description - title clickable */}
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[8px]">
                <a href={`/blog/${article.slug}`} class="block">
                  <h3 class="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-neutral-900 hover:text-brand-500 transition-colors">
                    {article.title}
                  </h3>
                </a>
                <p class="text-[16px] font-normal leading-[24px] text-neutral-500 overflow-hidden text-ellipsis">
                  {article.teaser}
                </p>
              </div>

              {/* Tags */}
              {CardTags({ article })}
            </div>
          </div>
        </div>

        {/* Author column - clickable */}
        <div class="flex flex-col items-start w-[232px] shrink-0">
          <a
            href={`/blog/author/${slugify(article.author)}`}
            class="inline-flex items-center gap-[8px] px-[6px] py-[4px] rounded-[8px] hover:opacity-80 transition-opacity"
          >
            <img src={AUTHOR_ICON} alt="" class="w-4 h-4" />
            <span class="text-[14px] font-normal leading-[20px] tracking-[0px] text-text-secondary whitespace-nowrap">
              {article.author}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

// Grid Card - simpler variant for grid layouts (fallback)
// Note: Uses div wrapper with separate links to avoid nested <a> tags
function GridCard({ article }: { article: Article }): string {
  return (
    <div class="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-300 transition-colors">
      <a href={`/blog/${article.slug}`} class="block">
        {article.image && (
          <div class="aspect-video overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div class="p-6 pb-0">
          <h3 class="text-neutral-900 text-2xl font-semibold leading-8 tracking-[-0.4px] line-clamp-2">
            {article.title}
          </h3>
          <p class="mt-3 text-neutral-500 text-base font-normal leading-6 line-clamp-2">
            {article.teaser}
          </p>
          <div class="mt-4">
            {CardTags({ article })}
          </div>
        </div>
      </a>
      <div class="p-6 pt-4">
        {CardMetadata({ article, clickable: true })}
      </div>
    </div>
  )
}

/**
 * Tag badges component
 * Figma Node: 616:5325 (tags section in all-articles card)
 *
 * Tag color rules (from Figma, using theme tokens):
 * - "Video" tag → pink bg (tag-video-bg), red text (brand-500) with play icon
 * - "Online Workshop" tag → green bg (green-400)
 * - All other tags → white bg with gray border (neutral-300)
 */
function CardTags({ article }: { article: Article }): string {
  if (!article.tags || article.tags.length === 0) {
    return ''
  }

  const PLAY_ICON = '/icons/blog/play.svg'

  return `
    <div class="flex flex-wrap gap-[8px] items-start w-full">
      ${article.tags.map((tag) => {
        const tagLower = tag.toLowerCase()
        const isVideoTag = tagLower === 'video' || tagLower === 'videos'
        const isWorkshopTag = tagLower === 'online workshop' || tagLower === 'workshop'

        if (isVideoTag) {
          // Figma 616-5433
          return `
            <div class="bg-tag-video-bg flex items-center gap-1 justify-center px-2.5 py-1.5 rounded-full shrink-0">
              <svg class="w-4 h-4 text-tag-video-text" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span class="text-tag-video-text text-sm font-normal leading-5 tracking-normal whitespace-nowrap">
                ${tag}
              </span>
            </div>
          `
        }

        if (isWorkshopTag) {
          return `
            <div class="bg-green-400 flex items-center justify-center px-[10px] py-[6px] rounded-[48px] shrink-0">
              <span class="text-neutral-900 text-sm font-normal leading-5 tracking-normal whitespace-nowrap">
                ${tag}
              </span>
            </div>
          `
        }

        return `
          <div class="bg-white border border-neutral-300 flex items-center justify-center px-[10px] py-[6px] rounded-[48px] shrink-0">
            <span class="text-neutral-900 text-sm font-normal leading-5 tracking-normal whitespace-nowrap">
              ${tag}
            </span>
          </div>
        `
      }).join('')}
    </div>
  `
}

/**
 * Shared metadata component
 * Icons from Figma MCP assets (node 616:5189)
 */
function CardMetadata({ article, clickable = true }: { article: Article; clickable?: boolean }): string {
  const CALENDAR_ICON = '/icons/blog/calendar.svg'
  const CLOCK_ICON = '/icons/blog/clock.svg'
  const AUTHOR_ICON = '/icons/blog/author.svg'

  return (
    <div class="flex items-center justify-between w-full text-sm leading-5 text-neutral-500">
      {/* Author - on the left (flex-1) */}
      <div class="flex-1">
        {clickable ? (
          <a
            href={`/blog/author/${slugify(article.author)}`}
            class="inline-flex items-center gap-[8px] rounded-[8px] hover:opacity-80 transition-opacity"
            onclick="event.stopPropagation()"
          >
            <img src={AUTHOR_ICON} alt="" class="w-4 h-4" />
            <span class="text-[14px] font-normal leading-[20px] tracking-[0px] text-text-secondary whitespace-nowrap">
              {article.author}
            </span>
          </a>
        ) : (
          <div class="inline-flex items-center gap-[8px]">
            <img src={AUTHOR_ICON} alt="" class="w-4 h-4" />
            <span class="text-[14px] font-normal leading-[20px] tracking-[0px] text-text-secondary whitespace-nowrap">
              {article.author}
            </span>
          </div>
        )}
      </div>

      {/* Date and reading time - on the right with gap-20px */}
      <div class="flex items-center gap-5 shrink-0">
        <div class="flex items-center gap-2">
          <img src={CALENDAR_ICON} alt="" class="w-4 h-4" />
          <span class="text-[14px] font-normal leading-[20px] text-text-secondary">{formatDate(article.published)}</span>
        </div>
        <div class="flex items-center gap-2">
          <img src={CLOCK_ICON} alt="" class="w-4 h-4" />
          <span class="text-[14px] font-normal leading-[20px] text-text-secondary">{getReadingTimeText(article)}</span>
        </div>
      </div>
    </div>
  )
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
