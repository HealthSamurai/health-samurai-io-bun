import { Fragment } from "../../lib/jsx-runtime"
import { getArticle, getSimilarArticles, slugify, type Article } from "../../lib/articles"
import { CommentsSection } from "../../components/Comments"
import { BackToArticles } from "../../components/blog/BackToArticles"
import { getSamuraiByName, getInitials, type Samurai } from "../../data/samurai"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import type { Context } from "../../context"

export const metadata = {
  title: "Blog",
  description: "Health Samurai blog article",
  fullPage: true,
}

export function getMetadata(params: { slug: string }) {
  const article = getArticle(params.slug)
  if (!article) {
    return { title: "Article Not Found", description: "" }
  }
  const title = article.title.replace(/^🔥\s*/, "")
  return {
    title,
    description: article.teaser,
    image: article.image,
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Check if article is a video or workshop (for "x min watch" vs "x min read")
function isWatchableContent(article: Article): boolean {
  const tags = article.tags || []
  return tags.some(tag => {
    const tagLower = tag.toLowerCase()
    return tagLower === 'video' || tagLower === 'videos' ||
           tagLower === 'online workshop' || tagLower === 'workshop'
  })
}

function extractTableOfContents(content: string): Array<{ id: string; title: string; level: number }> {
  const headings: Array<{ id: string; title: string; level: number }> = []
  // Match h2 and h3 tags with id attribute from rendered HTML
  const regex = /<h([23])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi
  let match
  while ((match = regex.exec(content)) !== null) {
    const levelStr = match[1]
    const idStr = match[2]
    const titleStr = match[3]
    if (!levelStr || !idStr || !titleStr) continue
    const level = parseInt(levelStr)
    const id = idStr
    // Strip HTML tags from text
    const title = titleStr.replace(/<[^>]+>/g, "").trim()
    if (title) {
      headings.push({ id, title, level })
    }
  }
  return headings
}

function getSimilarPosts(currentSlug: string, limit = 3): Article[] {
  return getSimilarArticles(currentSlug, limit)
}

// Parse author string to get multiple authors (e.g. "John Smith, Jane Doe" or "John Smith and Jane Doe")
function parseAuthors(authorString: string): string[] {
  if (!authorString) return []
  // Split by comma or " and "
  return authorString.split(/,\s*|\s+and\s+/i).map(a => a.trim()).filter(Boolean)
}

function NotFound(ctx?: Context): string {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Article Not Found | Aidbox Blog</title>
        <link rel="icon" href="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff62247c38400019e81f3_32.png" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body class="bg-white text-body-text min-h-screen flex flex-col antialiased font-sans">
        {Header({ ctx })}
        <div class="flex-1 flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Article not found</h1>
            <p class="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <a href="/blog" class="text-primary hover:text-primary-dark font-medium">
              ← Back to blog
            </a>
          </div>
        </div>
        {Footer()}
      </body>
    </html>
  )
}

function ArticleCard({ article }: { article: Article }): string {
  const title = article.title.replace(/^🔥\s*/, "")
  const author = getSamuraiByName(article.author)
  return (
    <a href={`/blog/${article.slug}`} class="group block">
      <article class="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
        {article.image && (
          <div class="aspect-[16/9] overflow-hidden">
            <img
              src={article.image}
              alt={title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div class="p-5">
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {title}
          </h3>
          {article.teaser && (
            <p class="text-sm text-gray-500 line-clamp-2 mb-3">{article.teaser}</p>
          )}
          <div class="flex items-center gap-2 text-xs text-gray-400">
            {author?.avatar ? (
              <img src={author.avatar} alt={article.author} class="size-5 rounded-full object-cover" />
            ) : (
              <div class="size-5 rounded-full bg-blog-separator flex items-center justify-center text-[10px] font-medium text-blog-meta">
                {getInitials(article.author)}
              </div>
            )}
            <span>{article.author}</span>
            <span>·</span>
            <time datetime={article.published}>{formatDate(article.published)}</time>
          </div>
        </div>
      </article>
    </a>
  )
}

interface BlogPostParams {
  slug: string
  ctx?: Context
  devMode?: boolean
}

export default function BlogPost(params: BlogPostParams): string {
  const { slug, ctx } = params
  const article = getArticle(slug)

  if (!article) {
    return NotFound(ctx)
  }

  const title = article.title.replace(/^🔥\s*/, "")
  const formattedDate = formatDate(article.published)
  const readingTime = estimateReadingTime(article.content)
  const isVideo = isWatchableContent(article)
  const readingTimeText = isVideo ? `${readingTime} min watch` : `${readingTime} min read`
  const toc = extractTableOfContents(article.content)
  const similarPosts = getSimilarPosts(slug, 3)

  // Parse multiple authors
  const authorNames = parseAuthors(article.author)
  const authors = authorNames.map(name => ({
    name,
    samurai: getSamuraiByName(name)
  }))

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Aidbox Blog</title>
        <meta name="description" content={article.teaser} />
        {article.image && <meta property="og:image" content={article.image} />}
        <link rel="icon" href="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff62247c38400019e81f3_32.png" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      </head>
      <body class="bg-white text-body-text min-h-screen flex flex-col antialiased font-sans">
        {Header({ ctx })}
        <article class="bg-white blog-section flex-1">
        {/* Header */}
        <header class="pt-12 pb-8 px-6 lg:px-8">
          <div class="mx-auto max-w-[1200px]">
            {/* Back link - Figma 616-6153 */}
            <div class="mb-6">
              ${BackToArticles()}
            </div>

            {/* Meta row: date, reading time - ABOVE title */}
            <div class="mb-6 flex flex-wrap items-center gap-4 text-base text-blog-meta">
              <time datetime={article.published} class="font-light">{formattedDate}</time>
              <span class="text-blog-separator">|</span>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-light">{readingTimeText}</span>
              </div>
              {/* Video tag if applicable - Figma 616-5433 */}
              {isVideo && (
                <Fragment>
                  <span class="text-blog-separator">|</span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1.5 bg-tag-video-bg text-tag-video-text text-sm font-normal rounded-full">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Video
                  </span>
                </Fragment>
              )}
            </div>

            {/* Title - full width per Figma 616-6263 */}
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-heading-primary leading-[80px] tracking-[-0.4px] w-full">
              {title}
            </h1>

            {/* Author(s) - BELOW title */}
            <div class="mt-6 flex flex-wrap items-center gap-4">
              {authors.map(({ name, samurai }) => (
                <a
                  href={`/blog/author/${slugify(name)}`}
                  class="inline-flex items-center gap-2 pl-2 pr-2.5 py-1.5 bg-author-pill-bg rounded-full hover:opacity-80 transition-opacity"
                >
                  {samurai?.avatar && (
                    <img
                      src={samurai.avatar}
                      alt={name}
                      class="size-6 rounded-full object-cover"
                    />
                  )}
                  <span class="text-base text-text-primary">
                    <span class="font-light">Author: </span>
                    <span class="font-medium">{name}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Main content area with sidebar */}
        <div class="px-6 lg:px-8 pb-16">
          <div class="mx-auto max-w-[1200px]">
            <div class="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <div class="flex-1 min-w-0 max-w-[784px]">
                {/* Summarize with AI */}
                <div class="mb-8 p-6 bg-author-pill-bg rounded-xl">
                  <h4 class="text-base text-blog-meta mb-4">Summarize this blog post with:</h4>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* ChatGPT */}
                    <a
                      href={`https://chat.openai.com/?q=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blog-separator text-body-text hover:border-blog-meta rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/ChatGPT.svg" alt="ChatGPT" class="w-5 h-5" />
                      <span class="text-base">ChatGPT</span>
                    </a>
                    {/* Perplexity */}
                    <a
                      href={`https://www.perplexity.ai/?q=${encodeURIComponent(`Summarize this article: https://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blog-separator text-body-text hover:border-blog-meta rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Perplexity.svg" alt="Perplexity" class="w-5 h-5" />
                      <span class="text-base">Perplexity</span>
                    </a>
                    {/* Claude */}
                    <a
                      href={`https://claude.ai/new?q=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blog-separator text-body-text hover:border-blog-meta rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Claude.svg" alt="Claude" class="w-5 h-5" />
                      <span class="text-base">Claude</span>
                    </a>
                    {/* Grok */}
                    <a
                      href={`https://x.com/i/grok?text=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-blog-separator text-body-text hover:border-blog-meta rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Grok.svg" alt="Grok" class="w-5 h-5" />
                      <span class="text-base">Grok</span>
                    </a>
                  </div>
                </div>

                {/* TLDR Section */}
                {article.tldr && (
                  <div class="bg-tldr-bg rounded-[12px] p-6 md:pl-[44px] md:pr-[68px] md:py-[44px] flex flex-col md:flex-row gap-6 items-start mb-8">
                    <div class="bg-tldr-icon-bg rounded-full p-4 shrink-0">
                      <img src="/icons/blog/flash.svg" alt="" class="w-12 h-12" />
                    </div>
                    <div class="flex-1 flex flex-col gap-6">
                      <h2 class="text-[28px] md:text-[36px] font-bold tracking-[-0.4px] leading-[1.1] text-body-text">
                        TL;DR – {title}
                      </h2>
                      <p class="text-[18px] font-normal leading-[1.6] text-body-text">
                        {article.tldr}
                      </p>
                    </div>
                  </div>
                )}

                {/* Article content */}
                <div
                  class="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-[-0.4px] prose-headings:text-heading-primary
                    prose-h2:text-[30px] prose-h2:leading-[1.2] prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-[21px] prose-h3:leading-[1.3] prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-[18px] prose-p:leading-[1.7] prose-p:text-[color:var(--color-body-text)] prose-p:mb-6
                    prose-a:text-tag-video-text prose-a:no-underline hover:prose-a:underline hover:prose-a:text-link-hover
                    prose-strong:text-heading-primary prose-strong:font-semibold
                    prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:p-0
                    [&_pre]:!bg-blog-pre-bg [&_.shiki]:!bg-blog-pre-bg [&_pre]:p-5
                    [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[15px]
                    [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:bg-blog-code-bg [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:text-body-text
                    prose-img:rounded-xl
                    prose-blockquote:border-l-4 prose-blockquote:border-tag-video-text prose-blockquote:bg-tldr-bg prose-blockquote:rounded-r-xl prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-body-text
                    prose-ul:my-4 prose-li:my-1 prose-li:text-[18px] prose-li:text-body-text
                    prose-ol:my-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                >
                </div>
              </div>

              {/* Sidebar */}
              <aside class="hidden lg:block w-[340px] flex-shrink-0">
                <div class="sticky top-8">
                  {/* Table of Contents - Figma 616-6388 */}
                  {toc.length > 0 && (
                    <nav id="toc-nav" class="mb-6 rounded-lg border border-blog-border py-6 relative overflow-hidden">
                      {/* Header - no border-b per Figma */}
                      <div class="px-8 pb-4 mb-4">
                        <h4 class="text-[20px] font-semibold leading-[1.6] text-text-primary">In this article:</h4>
                      </div>

                      {/* Items with left track */}
                      <div class="relative">
                        {/* Track background */}
                        <div class="absolute left-8 top-0 bottom-0 w-1 bg-toc-track rounded-sm"></div>
                        {/* Active indicator - animated on scroll */}
                        <div id="toc-indicator" class="absolute left-8 top-0 w-1 h-8 bg-toc-h2 rounded-sm transition-transform duration-200"></div>

                        <ul id="toc-list" class="flex flex-col gap-[11px]">
                          {toc.map((item, index) => (
                            <li class={`relative toc-item ${item.level === 3 ? "pl-[68px]" : "pl-14"}`} data-section={item.id}>
                              <a
                                href={`#${item.id}`}
                                class={`toc-link text-base leading-6 transition-colors block pr-6 ${index === 0 ? 'text-toc-h2 toc-active' : 'text-text-primary hover:text-toc-h2'}`}
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  )}

                  {/* Share / Actions - Figma 616-6283 */}
                  <div class="p-6 border border-blog-border rounded-lg">
                    <h4 class="text-sm font-medium text-blog-meta mb-4">Share this article</h4>
                    <div class="flex items-center gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://health-samurai.io/blog/${slug}`)}&text=${encodeURIComponent(title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2.5 text-blog-meta hover:text-heading-primary hover:bg-author-pill-bg rounded-lg transition-colors"
                        title="Share on X"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://health-samurai.io/blog/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2.5 text-blog-meta hover:text-linkedin hover:bg-author-pill-bg rounded-lg transition-colors"
                        title="Share on LinkedIn"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <button
                        onclick={`navigator.clipboard.writeText('https://health-samurai.io/blog/${slug}'); this.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'; setTimeout(() => this.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>', 2000)`}
                        class="p-2.5 text-blog-meta hover:text-heading-primary hover:bg-author-pill-bg rounded-lg transition-colors"
                        title="Copy link"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      <a
                        href={`/blog/${slug}.md`}
                        target="_blank"
                        class="p-2.5 text-blog-meta hover:text-heading-primary hover:bg-author-pill-bg rounded-lg transition-colors"
                        title="View as Markdown"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 3h18v18H3V3zm16.5 15V6h-2.25v6.75L14.5 9.5l-2.75 3.25V6H9.5v12h2.25v-5.25l2.75 3.25 2.75-3.25V18h2.75zM6 15v-4.5l1.5 2 1.5-2V15h1.5V9H9l-1.5 2L6 9H4.5v6H6z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div class="bg-author-pill-bg border-t border-blog-separator">
          <div class="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div class="max-w-[784px]">
              {CommentsSection({ slug, ctx })}
            </div>
          </div>
        </div>

        {/* Similar Articles */}
        {similarPosts.length > 0 && (
          <section class="py-16 px-6 lg:px-8 border-t border-border-secondary">
            <div class="mx-auto max-w-[1200px]">
              <div class="flex items-center gap-[7px] mb-8">
                <img src="/icons/blog/similar-articles.svg" alt="" class="size-10" />
                <h2 class="text-[36px] font-bold text-section-heading tracking-[-0.4px] leading-[40px]">Similar articles</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarPosts.map(post => ArticleCard({ article: post }))}
              </div>
            </div>
          </section>
        )}

        {/* Dark Footer CTA */}
        <section class="bg-footer-bg py-20 px-6 lg:px-8">
          <div class="mx-auto max-w-[1200px]">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div class="max-w-xl">
                <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Shape what's next.
                </h2>
                <p class="text-lg text-footer-text">
                  Subscribe for our updates
                </p>
              </div>
              <form class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto" action="/api/subscribe" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  class="px-5 py-3.5 bg-footer-input-bg border border-body-text rounded-lg text-white placeholder:text-blog-meta focus:outline-none focus:border-primary w-full sm:w-[300px]"
                />
                <button
                  type="submit"
                  class="px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </article>
      {Footer()}
      {/* TOC scroll-based active link highlighting */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          const tocNav = document.getElementById('toc-nav');
          if (!tocNav) return;

          const tocLinks = document.querySelectorAll('.toc-link');
          const tocItems = document.querySelectorAll('.toc-item');
          const indicator = document.getElementById('toc-indicator');

          // Get all section headings that are in the TOC
          const sectionIds = Array.from(tocItems).map(item => item.dataset.section);
          const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

          if (sections.length === 0) return;

          function updateActiveSection() {
            const scrollPos = window.scrollY + 120; // Offset for header

            // Find the current section
            let activeIndex = 0;
            for (let i = sections.length - 1; i >= 0; i--) {
              if (sections[i].offsetTop <= scrollPos) {
                activeIndex = i;
                break;
              }
            }

            // Update link styles
            tocLinks.forEach((link, i) => {
              if (i === activeIndex) {
                link.classList.add('text-toc-h2', 'toc-active');
                link.classList.remove('text-text-primary');
              } else {
                link.classList.remove('text-toc-h2', 'toc-active');
                link.classList.add('text-text-primary');
              }
            });

            // Move indicator
            if (indicator && tocItems[activeIndex]) {
              const itemTop = tocItems[activeIndex].offsetTop;
              indicator.style.transform = 'translateY(' + itemTop + 'px)';
            }
          }

          // Debounced scroll handler
          let ticking = false;
          window.addEventListener('scroll', function() {
            if (!ticking) {
              requestAnimationFrame(function() {
                updateActiveSection();
                ticking = false;
              });
              ticking = true;
            }
          });

          // Initial update
          updateActiveSection();
        })();
      `}} />
    </body>
    </html>
  )
}
