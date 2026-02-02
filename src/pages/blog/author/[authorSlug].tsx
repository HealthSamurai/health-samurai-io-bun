import { BlogLayout } from "../../../components/blog/BlogLayout"
import { getArticlesByAuthor, slugify, type Article } from "../../../lib/articles"
import { ArticleCard } from "../../../components/blog/ArticleCard"
import { BackToArticles } from "../../../components/blog/BackToArticles"
import { getSamuraiByName, type Samurai } from "../../../data/samurai"
import { getAuthorData, getAuthorImage } from "../../../data/authors"
import type { Context } from "../../../context"

export const metadata = {
  title: "Author",
  description: "Articles by author",
  fullPage: true,
}

interface AuthorPageParams {
  authorSlug: string
  ctx?: Context
  devMode?: boolean
}

export default function AuthorPage(params: AuthorPageParams): string {
  const { authorSlug, ctx, devMode } = params
  const articles = getArticlesByAuthor(authorSlug)

  if (articles.length === 0) {
    return BlogLayout({
      title: "Author Not Found",
      children: `
        <div class="min-h-[60vh] flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-neutral-900 mb-4">Author not found</h1>
            <p class="text-neutral-500 mb-8">No articles found for this author.</p>
            <a href="/blog" class="text-brand-500 hover:text-brand-600 font-medium">
              ← Back to blog
            </a>
          </div>
        </div>
      `,
      ctx,
      devMode,
    })
  }

  // Get author info from first article
  const firstArticle = articles[0]!
  const authorName = firstArticle.author

  // Try to get author data from markdown files first, then fall back to samurai
  const authorData = getAuthorData(authorName)
  const samurai = getSamuraiByName(authorName)

  // Prefer samurai avatar (LinkedIn CDN - reliable), then GCS, then article image
  const authorImageFromMd = getAuthorImage(authorName)
  const authorImageUrl = samurai?.avatar || authorImageFromMd || firstArticle.authorImage || ''
  const authorTitle = authorData?.title || samurai?.role || 'Contributor at Health Samurai'
  const authorBio = authorData?.bio || `${authorName} is a contributor to the Health Samurai blog, sharing insights on FHIR, healthcare technology, and digital health solutions.`
  const authorLinkedIn = authorData?.linkedin || samurai?.linkedin

  const content = `
    <main class="flex-1 blog-section">
      <!-- Back to Articles Button - Figma 616-6153 -->
      <div class="max-w-[1200px] mx-auto px-4 pt-11 pb-7">
        ${BackToArticles()}
      </div>

      <!-- Author Profile Section -->
      <div class="max-w-[1200px] mx-auto px-4 pb-14">
        <div class="flex gap-[47px] items-start">
          <!-- Author Photo -->
          <div class="shrink-0">
            ${authorImageUrl ? `
              <img
                src="${authorImageUrl}"
                alt="${authorName}"
                width="371"
                height="371"
                class="rounded-lg object-cover"
              />
            ` : `
              <div class="w-[371px] h-[371px] rounded-lg bg-neutral-200 flex items-center justify-center">
                <span class="text-6xl font-bold text-neutral-400">
                  ${authorName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                </span>
              </div>
            `}
          </div>

          <!-- Author Info - Figma 633-8232 -->
          <div class="flex flex-col gap-9">
            <!-- Name and Title -->
            <div class="flex flex-col gap-2">
              <h1 class="text-[72px] font-bold leading-[80px] tracking-[-0.4px] text-blog-title">
                ${authorName}
              </h1>
              <p class="text-[24px] leading-[1.6] text-blog-accent">
                ${authorTitle}
              </p>
            </div>

            <!-- Bio -->
            <p class="text-[18px] leading-[1.6] text-body-text max-w-[678px]">
              ${authorBio}
            </p>

            <!-- LinkedIn Link -->
            ${authorLinkedIn ? `
              <a
                href="${authorLinkedIn}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-linkedin hover:opacity-80 transition-opacity w-fit"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="text-base font-medium">Connect on LinkedIn</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Articles Section -->
      <div class="max-w-[1200px] mx-auto px-4 pb-12">
        <h2 class="text-[36px] font-bold leading-[40px] tracking-[-0.4px] text-neutral-650 mb-[24px]">
          Articles with ${authorName} participation (${articles.length})
        </h2>

        <div class="flex flex-col">
          ${articles.map(article => `
            <div class="border-b border-border-secondary py-[24px]">
              ${ArticleCard({ article, variant: 'horizontal', showAuthor: false })}
            </div>
          `).join('')}
        </div>
      </div>
    </main>
  `

  return BlogLayout({
    title: `${authorName} | Aidbox Blog`,
    description: `Articles by ${authorName}`,
    children: content,
    ctx,
    devMode,
  })
}
