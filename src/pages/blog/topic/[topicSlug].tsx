import { BlogLayout } from "../../../components/blog/BlogLayout"
import { getArticlesByTag, type Article } from "../../../lib/articles"
import { ArticleCard } from "../../../components/blog/ArticleCard"
import { BackToArticles } from "../../../components/blog/BackToArticles"
import type { Context } from "../../../context"

export const metadata = {
  title: "Topic",
  description: "Articles by topic",
  fullPage: true,
}

interface TopicPageParams {
  topicSlug: string
  ctx?: Context
  devMode?: boolean
}

export default function TopicPage(params: TopicPageParams): string {
  const { topicSlug, ctx, devMode } = params
  // Decode and normalize the tag name
  const topicName = decodeURIComponent(topicSlug)

  const articles = getArticlesByTag(topicName)

  const content = `
    <main class="flex-1 blog-section">
      <!-- Back to Articles Button - Figma 616-6153 -->
      <div class="max-w-[1200px] mx-auto px-4 pt-11 pb-7">
        ${BackToArticles()}
      </div>

      <!-- Topic Header -->
      <div class="max-w-[1200px] mx-auto px-4 pb-14">
        <div class="text-[72px] font-bold leading-[80px] tracking-[-0.4px] text-text-primary mb-2">
          ${topicName}
        </div>
        <p class="text-[24px] font-normal leading-[1.6] text-brand-500">
          Topic
        </p>
      </div>

      <!-- Articles Section -->
      <div class="max-w-[1200px] mx-auto px-4 pb-12">
        <div class="text-[36px] font-bold leading-[40px] tracking-[-0.4px] text-section-heading mb-[24px]">
          Articles about ${topicName} (${articles.length})
        </div>

        ${articles.length > 0 ? `
          <div class="flex flex-col">
            ${articles.map(article => `
              <div class="border-b border-blog-border py-[24px]">
                ${ArticleCard({ article, variant: 'horizontal', showAuthor: false })}
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <p class="text-xl text-neutral-500 mb-4">
              No articles found for this topic yet
            </p>
            <a
              href="/blog"
              class="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 transition-colors"
            >
              Browse all articles
            </a>
          </div>
        `}
      </div>
    </main>
  `

  return BlogLayout({
    title: `${topicName} | Aidbox Blog`,
    description: `Articles about ${topicName}`,
    children: content,
    ctx,
    devMode,
  })
}
