import { BlogLayout } from "../components/blog/BlogLayout"
import { getAllArticles, getAuthors, getAllTags, slugify, type Article } from "../lib/articles"
import { BlogHero } from "../components/blog/BlogHero"
import { ArticleCard } from "../components/blog/ArticleCard"
import { FilterSection } from "../components/blog/FilterSection"
import { AuthorFilterSection } from "../components/blog/AuthorFilterSection"
import { Pagination } from "../components/blog/Pagination"
import type { Context } from "../context"

export const metadata = {
  title: "Aidbox Blog - FHIR Expert Hub",
  description: "Healthcare IT, FHIR, and Aidbox insights from Health Samurai",
  fullPage: true,
}

const ARTICLES_PER_PAGE = 4

interface BlogPageProps {
  tab?: string
  tags?: string
  author?: string
  page?: string
  ctx?: Context
  devMode?: boolean
}

export default function BlogPage(props: BlogPageProps = {}): string {
  const page = Number(props.page || 1)
  const tab = props.tab || 'recent'
  const tagsParam = props.tags || ''
  const selectedTags = tagsParam ? tagsParam.split(',').filter(Boolean) : []
  const authorParam = props.author || ''
  const selectedAuthor = authorParam || null

  const articles = getAllArticles()
  const allTags = getAllTags()
  const authors = getAuthors()

  const featuredArticle = articles[0]
  let restArticles = articles.slice(1)

  // Filter by selected tags if on BY TOPIC tab
  if (tab === 'by-topic' && selectedTags.length > 0) {
    restArticles = restArticles.filter(article =>
      article.tags && selectedTags.some(tag => article.tags?.includes(tag))
    )
  }

  // Filter by selected author if on BY AUTHOR tab
  if (tab === 'by-author' && selectedAuthor) {
    restArticles = restArticles.filter(article =>
      slugify(article.author) === selectedAuthor
    )
  }

  // Pagination calculations
  const totalArticles = restArticles.length
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)
  const currentPage = Math.min(Math.max(1, page), totalPages || 1)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const pageArticles = restArticles.slice(startIndex, endIndex)

  const content = `
    <main class="flex-1">
      ${BlogHero()}

      ${featuredArticle ? `
        <section class="mb-16">
          <div class="max-w-[1200px] mx-auto px-4">
            <div class="text-[36px] font-semibold leading-tight tracking-tight text-neutral-900 mb-11 flex items-center gap-2">
              <img src="/icons/blog/featured.svg" alt="" class="w-6 h-6" />
              Featured articles
            </div>

            <div class="flex flex-col lg:flex-row gap-6 lg:gap-11 lg:justify-between">
              ${ArticleCard({ article: featuredArticle, variant: "featured" })}

              <div class="flex flex-col gap-6 lg:w-[681px]">
                ${restArticles.slice(0, 3).map(article =>
                  ArticleCard({ article, variant: "horizontal" })
                ).join('')}
              </div>
            </div>
          </div>
        </section>
      ` : ''}

      <section class="pt-16">
        <div class="max-w-[1200px] mx-auto px-4">
          <div class="flex items-center gap-2">
            <img src="/icons/blog/hamburger.svg" alt="" class="w-6 h-6" />
            <div class="text-[36px] font-semibold leading-tight tracking-tight text-neutral-900">
              All articles
            </div>
          </div>

          <div id="tabs-and-content-container" class="mt-[44px]">
            <div class="flex gap-5 mb-2">
              <a
                href="/blog?tab=recent"
                hx-get="/htmx/blog/recent"
                hx-target="#tabs-and-content-container"
                hx-swap="outerHTML"
                hx-push-url="/blog?tab=recent"
                class="text-sm pb-1 ${tab === 'recent' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
              >
                RECENT
              </a>
              <a
                href="/blog?tab=by-topic"
                hx-get="/htmx/blog/by-topic"
                hx-target="#tabs-and-content-container"
                hx-swap="outerHTML"
                hx-push-url="/blog?tab=by-topic"
                class="text-sm pb-1 ${tab === 'by-topic' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
              >
                BY TOPIC
              </a>
              <a
                href="/blog?tab=by-author"
                hx-get="/htmx/blog/by-author"
                hx-target="#tabs-and-content-container"
                hx-swap="outerHTML"
                hx-push-url="/blog?tab=by-author"
                class="text-sm pb-1 ${tab === 'by-author' ? 'font-medium text-neutral-900 border-b-2 border-brand-500' : 'font-normal text-neutral-500 hover:text-neutral-900'}"
              >
                BY AUTHOR
              </a>
            </div>

            <div id="articles-container">
              ${tab === 'by-topic' ? FilterSection({
                tags: allTags,
                selectedTags,
                baseUrl: "/blog",
              }) : ''}

              ${tab === 'by-author' ? AuthorFilterSection({
                authors,
                selectedAuthor,
                baseUrl: "/blog",
              }) : ''}

              <div class="flex flex-col">
                ${pageArticles.map(article =>
                  ArticleCard({ article, variant: "list" })
                ).join('')}
              </div>

              <div class="mt-8 pt-8 border-t border-neutral-200">
                ${Pagination({
                  currentPage,
                  totalPages,
                  baseUrl: `/blog?tab=${tab}${tab === 'by-topic' && selectedTags.length > 0 ? `&tags=${selectedTags.join(',')}` : ''}${tab === 'by-author' && selectedAuthor ? `&author=${selectedAuthor}` : ''}`,
                  htmxUrl: `/htmx/blog/${tab}${tab === 'by-topic' && selectedTags.length > 0 ? `?tags=${selectedTags.join(',')}` : ''}${tab === 'by-author' && selectedAuthor ? `?author=${selectedAuthor}` : ''}`,
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `

  return BlogLayout({
    title: metadata.title,
    description: metadata.description,
    children: content,
    ctx: props.ctx,
    devMode: props.devMode,
  })
}
