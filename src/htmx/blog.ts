import { getAllArticles, getAllTags, getAuthors, slugify } from "../lib/articles"
import { ArticleCard } from "../components/blog/ArticleCard"
import { Pagination } from "../components/blog/Pagination"
import { FilterSection } from "../components/blog/FilterSection"
import { AuthorFilterSection } from "../components/blog/AuthorFilterSection"

const ARTICLES_PER_PAGE = 4

// Tabs component for HTMX responses
function Tabs({ activeTab }: { activeTab: string }): string {
  return `
    <div class="flex gap-5 mb-2">
      <a
        href="/blog?tab=recent"
        hx-get="/htmx/blog/recent"
        hx-target="#tabs-and-content-container"
        hx-swap="outerHTML"
        hx-push-url="/blog?tab=recent"
        class="text-sm pb-1 ${activeTab === 'recent' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
      >
        RECENT
      </a>
      <a
        href="/blog?tab=by-topic"
        hx-get="/htmx/blog/by-topic"
        hx-target="#tabs-and-content-container"
        hx-swap="outerHTML"
        hx-push-url="/blog?tab=by-topic"
        class="text-sm pb-1 ${activeTab === 'by-topic' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
      >
        BY TOPIC
      </a>
      <a
        href="/blog?tab=by-author"
        hx-get="/htmx/blog/by-author"
        hx-target="#tabs-and-content-container"
        hx-swap="outerHTML"
        hx-push-url="/blog?tab=by-author"
        class="text-sm pb-1 ${activeTab === 'by-author' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
      >
        BY AUTHOR
      </a>
    </div>
  `
}

export function handleBlogHtmx(url: URL): string | null {
  const path = url.pathname

  if (path === '/htmx/blog/recent') {
    return handleRecent(url)
  }

  if (path === '/htmx/blog/by-topic') {
    return handleByTopic(url)
  }

  if (path === '/htmx/blog/by-author') {
    return handleByAuthor(url)
  }

  return null
}

function handleRecent(url: URL): string {
  const page = Number(url.searchParams.get('page') || 1)
  const articles = getAllArticles()

  const restArticles = articles.slice(1)
  const totalArticles = restArticles.length
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)
  const currentPage = Math.min(Math.max(1, page), totalPages || 1)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const pageArticles = restArticles.slice(startIndex, endIndex)

  const articlesContent = `
    <div class="flex flex-col">
      ${pageArticles.map(article => ArticleCard({ article, variant: 'list' })).join('')}
    </div>

    <div class="mt-8 pt-8 border-t border-neutral-200">
      ${Pagination({
        currentPage,
        totalPages,
        baseUrl: '/blog?tab=recent',
        htmxUrl: '/htmx/blog/recent',
      })}
    </div>
  `

  // If page query param exists, return only articles
  // If no page param (tab switch), return tabs + articles
  if (currentPage > 1 || url.searchParams.has('page')) {
    return `
      <div id="articles-container">
        ${articlesContent}
      </div>
    `
  }

  return `
    <div id="tabs-and-content-container" class="mt-[44px]">
      ${Tabs({ activeTab: 'recent' })}
      <div id="articles-container">
        ${articlesContent}
      </div>
    </div>
  `
}

function handleByTopic(url: URL): string {
  const page = Number(url.searchParams.get('page') || 1)
  const tagsParam = url.searchParams.get('tags') || ''
  const selectedTags = tagsParam ? tagsParam.split(',').filter(Boolean) : []

  const articles = getAllArticles()
  const allTags = getAllTags()

  let restArticles = articles.slice(1)

  if (selectedTags.length > 0) {
    restArticles = restArticles.filter(article =>
      article.tags && selectedTags.some(tag => article.tags?.includes(tag))
    )
  }

  const totalArticles = restArticles.length
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)
  const currentPage = Math.min(Math.max(1, page), totalPages || 1)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const pageArticles = restArticles.slice(startIndex, endIndex)

  const articlesContent = `
    ${FilterSection({
      tags: allTags,
      selectedTags,
      baseUrl: '/blog',
    })}

    <div class="flex flex-col">
      ${pageArticles.map(article => ArticleCard({ article, variant: 'list' })).join('')}
    </div>

    <div class="mt-8 pt-8 border-t border-neutral-200">
      ${Pagination({
        currentPage,
        totalPages,
        baseUrl: `/blog?tab=by-topic${selectedTags.length > 0 ? `&tags=${selectedTags.join(',')}` : ''}`,
        htmxUrl: `/htmx/blog/by-topic${selectedTags.length > 0 ? `?tags=${selectedTags.join(',')}` : ''}`,
      })}
    </div>
  `

  // If page query param or tags param exists, return only articles
  // If neither (tab switch), return tabs + articles
  if (currentPage > 1 || url.searchParams.has('page') || url.searchParams.has('tags')) {
    return `
      <div id="articles-container">
        ${articlesContent}
      </div>
    `
  }

  return `
    <div id="tabs-and-content-container" class="mt-[44px]">
      ${Tabs({ activeTab: 'by-topic' })}
      <div id="articles-container">
        ${articlesContent}
      </div>
    </div>
  `
}

function handleByAuthor(url: URL): string {
  const page = Number(url.searchParams.get('page') || 1)
  const authorParam = url.searchParams.get('author') || ''
  const selectedAuthor = authorParam || null

  const articles = getAllArticles()
  const authors = getAuthors()

  let restArticles = articles.slice(1)

  if (selectedAuthor) {
    restArticles = restArticles.filter(article =>
      slugify(article.author) === selectedAuthor
    )
  }

  const totalArticles = restArticles.length
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)
  const currentPage = Math.min(Math.max(1, page), totalPages || 1)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const pageArticles = restArticles.slice(startIndex, endIndex)

  const articlesContent = `
    ${AuthorFilterSection({
      authors,
      selectedAuthor,
      baseUrl: '/blog',
    })}

    <div class="flex flex-col">
      ${pageArticles.map(article => ArticleCard({ article, variant: 'list' })).join('')}
    </div>

    ${selectedAuthor ? `
      <div class="mt-8 pt-8 border-t border-neutral-200">
        ${Pagination({
          currentPage,
          totalPages,
          baseUrl: `/blog?tab=by-author&author=${selectedAuthor}`,
          htmxUrl: `/htmx/blog/by-author?author=${selectedAuthor}`,
        })}
      </div>
    ` : ''}
  `

  // If page query param or author param exists, return only articles
  // If neither (tab switch), return tabs + articles
  if (currentPage > 1 || url.searchParams.has('page') || url.searchParams.has('author')) {
    return `
      <div id="articles-container">
        ${articlesContent}
      </div>
    `
  }

  return `
    <div id="tabs-and-content-container" class="mt-[44px]">
      ${Tabs({ activeTab: 'by-author' })}
      <div id="articles-container">
        ${articlesContent}
      </div>
    </div>
  `
}
