import { Fragment } from "../../lib/jsx-runtime";
import { getPostBySlug, formatDate, getAllPosts, type BlogPost } from "../../data/blog";
import { renderMarkdown } from "../../lib/markdown";
import { CommentsSection } from "../../components/Comments";
import { PostLikeButton } from "../../components/PostLikeButton";
import type { Context } from "../../context";
import { getSamuraiByName, getInitials, type Samurai } from "../../data/samurai";

export const metadata = {
  title: "Blog",
  description: "Health Samurai blog article",
};

export function getMetadata(params: { slug: string }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found", description: "" };
  }
  const title = post.title.replace(/^🔥\s*/, "");
  return {
    title,
    description: post.description,
    image: post.image,
  };
}


function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function extractTableOfContents(content: string): Array<{ id: string; title: string; level: number }> {
  const headings: Array<{ id: string; title: string; level: number }> = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const levelStr = match[1];
    const titleStr = match[2];
    if (!levelStr || !titleStr) continue;
    const level = levelStr.length;
    const title = titleStr.trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, title, level });
  }
  return headings;
}

function getSimilarPosts(currentSlug: string, limit = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
}

function NotFound(): string {
  return (
    <div class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
        <p class="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
        <a href="/blog" class="text-primary hover:text-primary-dark font-medium">
          ← Back to blog
        </a>
      </div>
    </div>
  );
}

function ArticleCard({ post }: { post: BlogPost }): string {
  const title = post.title.replace(/^🔥\s*/, "");
  const author = getSamuraiByName(post.author);
  return (
    <a href={`/blog/${post.slug}`} class="group block">
      <article class="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
        {post.image && (
          <div class="aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div class="p-5">
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {title}
          </h3>
          {post.description && (
            <p class="text-sm text-gray-500 line-clamp-2 mb-3">{post.description}</p>
          )}
          <div class="flex items-center gap-2 text-xs text-gray-400">
            {author?.avatar ? (
              <img src={author.avatar} alt={post.author} class="size-5 rounded-full object-cover" />
            ) : (
              <div class="size-5 rounded-full bg-[#e9ecef] flex items-center justify-center text-[10px] font-medium text-[#717684]">
                {getInitials(post.author)}
              </div>
            )}
            <span>{post.author}</span>
            <span>·</span>
            <time datetime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </article>
    </a>
  );
}

interface BlogPostParams {
  slug: string;
  ctx: Context;
}

export default async function BlogPost(params: BlogPostParams): Promise<string> {
  const { slug, ctx } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return NotFound();
  }

  const title = post.title.replace(/^🔥\s*/, "");
  const formattedDate = formatDate(post.date);
  const readingTime = estimateReadingTime(post.content);
  const toc = extractTableOfContents(post.content);
  const similarPosts = getSimilarPosts(slug, 3);
  const contentHtml = renderMarkdown(post.content);
  const author = getSamuraiByName(post.author);

  return (
    <Fragment>
      <article class="bg-white">
        {/* Header */}
        <header class="pt-12 pb-8 px-6 lg:px-8">
          <div class="mx-auto max-w-[1200px]">
            {/* Back link */}
            <a
              href="/blog"
              class="inline-flex items-center gap-2 text-base text-[#717684] hover:text-gray-900 mb-6 group"
            >
              <svg class="w-5 h-5 rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
              <span>Back to blog</span>
            </a>

            {/* Meta row: date, reading time, comments - ABOVE title */}
            <div class="mb-6 flex flex-wrap items-center gap-4 text-base text-[#717684]">
              <time datetime={post.date} class="font-light">{formattedDate}</time>
              <span class="text-[#e9ecef]">|</span>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-light">{readingTime} min read</span>
              </div>
              <span class="text-[#e9ecef]">|</span>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span class="font-light">5 comments</span>
              </div>
            </div>

            {/* Title */}
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#181e21] leading-[1.1] tracking-[-0.4px] max-w-4xl">
              {title}
            </h1>

            {/* Author - BELOW title */}
            <div class="mt-6 flex items-center gap-3">
              {author?.avatar ? (
                <img
                  src={author.avatar}
                  alt={post.author}
                  class="size-10 rounded-full object-cover"
                />
              ) : (
                <div class="size-10 rounded-full bg-[#e9ecef] flex items-center justify-center text-sm font-medium text-[#717684]">
                  {getInitials(post.author)}
                </div>
              )}
              <div class="flex flex-col">
                {author?.linkedin ? (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-base text-[#353b50] hover:text-primary transition-colors"
                  >
                    {post.author}
                  </a>
                ) : (
                  <span class="text-base text-[#353b50]">{post.author}</span>
                )}
                {author?.role && (
                  <span class="text-sm text-[#717684]">{author.role}</span>
                )}
              </div>
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
                <div class="mb-8 p-6 bg-[#f8f9fa] rounded-xl">
                  <h4 class="text-base text-[#717684] mb-4">Summarize this blog post with:</h4>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* ChatGPT */}
                    <a
                      href={`https://chat.openai.com/?q=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#e9ecef] text-[#353b50] hover:border-[#717684] rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/ChatGPT.svg" alt="ChatGPT" class="w-5 h-5" />
                      <span class="text-base">ChatGPT</span>
                    </a>
                    {/* Perplexity */}
                    <a
                      href={`https://www.perplexity.ai/?q=${encodeURIComponent(`Summarize this article: https://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#e9ecef] text-[#353b50] hover:border-[#717684] rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Perplexity.svg" alt="Perplexity" class="w-5 h-5" />
                      <span class="text-base">Perplexity</span>
                    </a>
                    {/* Claude */}
                    <a
                      href={`https://claude.ai/new?q=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#e9ecef] text-[#353b50] hover:border-[#717684] rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Claude.svg" alt="Claude" class="w-5 h-5" />
                      <span class="text-base">Claude</span>
                    </a>
                    {/* Grok */}
                    <a
                      href={`https://x.com/i/grok?text=${encodeURIComponent(`Read and summarize this article:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#e9ecef] text-[#353b50] hover:border-[#717684] rounded-lg transition-colors"
                    >
                      <img src="/assets/logos/Grok.svg" alt="Grok" class="w-5 h-5" />
                      <span class="text-base">Grok</span>
                    </a>
                  </div>
                </div>

                {/* Featured Image */}
                {post.image && (
                  <figure class="mb-10">
                    <img
                      src={post.image}
                      alt={title}
                      class="w-full rounded-xl object-cover max-h-[400px]"
                    />
                  </figure>
                )}

                {/* Article content */}
                <div
                  class="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-[-0.4px] prose-headings:text-[#181e21]
                    prose-h2:text-[30px] prose-h2:leading-[1.2] prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-[21px] prose-h3:leading-[1.3] prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-[18px] prose-p:leading-[1.7] prose-p:text-[#353b50] prose-p:mb-6
                    prose-a:text-[#1922c2] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-[#181e21] prose-strong:font-semibold
                    prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:p-0
                    [&_pre]:!bg-[#1d2331] [&_.shiki]:!bg-[#1d2331] [&_pre]:p-5
                    [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[15px]
                    [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:bg-[#f1f3f5] [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:text-[#353b50]
                    prose-img:rounded-xl
                    prose-blockquote:border-l-4 prose-blockquote:border-[#ea4a35] prose-blockquote:bg-[#fdedea] prose-blockquote:rounded-r-xl prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-[#353b50]
                    prose-ul:my-4 prose-li:my-1 prose-li:text-[18px] prose-li:text-[#353b50]
                    prose-ol:my-4"
                >
                  {contentHtml}
                </div>

                {/* Like Button */}
                <div class="mt-10 pt-8 border-t border-[#e9ecef]">
                  {await PostLikeButton({ slug, ctx })}
                </div>
              </div>

              {/* Sidebar */}
              <aside class="hidden lg:block w-[340px] flex-shrink-0">
                <div class="sticky top-8">
                  {/* Table of Contents */}
                  {toc.length > 0 && (
                    <nav class="mb-6 p-6 bg-[#f8f9fa] rounded-xl">
                      <h4 class="text-[20px] font-semibold text-[#181e21] mb-4">In this article:</h4>
                      <ul class="space-y-2">
                        {toc.map(item => (
                          <li class={item.level === 3 ? "pl-4" : ""}>
                            <a
                              href={`#${item.id}`}
                              class="text-base text-[#717684] hover:text-[#181e21] transition-colors block py-1"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}

                  {/* Share / Actions */}
                  <div class="p-6 border border-[#e9ecef] rounded-xl">
                    <h4 class="text-sm font-medium text-[#717684] mb-4">Share this article</h4>
                    <div class="flex items-center gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://health-samurai.io/blog/${slug}`)}&text=${encodeURIComponent(title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2.5 text-[#717684] hover:text-[#181e21] hover:bg-[#f8f9fa] rounded-lg transition-colors"
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
                        class="p-2.5 text-[#717684] hover:text-[#0077B5] hover:bg-[#f8f9fa] rounded-lg transition-colors"
                        title="Share on LinkedIn"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <button
                        onclick={`navigator.clipboard.writeText('https://health-samurai.io/blog/${slug}'); this.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'; setTimeout(() => this.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>', 2000)`}
                        class="p-2.5 text-[#717684] hover:text-[#181e21] hover:bg-[#f8f9fa] rounded-lg transition-colors"
                        title="Copy link"
                      >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      <a
                        href={`/blog/${slug}.md`}
                        target="_blank"
                        class="p-2.5 text-[#717684] hover:text-[#181e21] hover:bg-[#f8f9fa] rounded-lg transition-colors"
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
        <div class="bg-[#f8f9fa] border-t border-[#e9ecef]">
          <div class="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div class="max-w-[784px]">
              {CommentsSection({ slug, ctx })}
            </div>
          </div>
        </div>

        {/* Similar Articles */}
        {similarPosts.length > 0 && (
          <section class="py-16 px-6 lg:px-8 border-t border-[#e9ecef]">
            <div class="mx-auto max-w-[1200px]">
              <div class="flex items-center gap-3 mb-8">
                <span class="text-primary text-2xl">●●</span>
                <h2 class="text-[36px] font-bold text-[#181e21] tracking-[-0.4px]">Similar articles</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarPosts.map(p => ArticleCard({ post: p }))}
              </div>
            </div>
          </section>
        )}

        {/* Dark Footer CTA */}
        <section class="bg-[#181e21] py-20 px-6 lg:px-8">
          <div class="mx-auto max-w-[1200px]">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div class="max-w-xl">
                <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Shape what's next.
                </h2>
                <p class="text-lg text-[#98a1ae]">
                  Subscribe for our updates
                </p>
              </div>
              <form class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto" action="/api/subscribe" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  class="px-5 py-3.5 bg-[#2d3a54] border border-[#353b50] rounded-lg text-white placeholder:text-[#717684] focus:outline-none focus:border-primary w-full sm:w-[300px]"
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
    </Fragment>
  );
}
