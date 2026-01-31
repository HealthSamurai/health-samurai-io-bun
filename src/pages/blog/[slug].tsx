import { Fragment } from "../../lib/jsx-runtime";
import { getPostBySlug, formatDate } from "../../data/blog";
import { renderMarkdown } from "../../lib/markdown";
import { CommentsSection } from "../../components/Comments";
import type { Context } from "../../context";

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

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
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

interface BlogPostParams {
  slug: string;
  ctx?: Context;
}

export default function BlogPost(params: BlogPostParams): string {
  const { slug, ctx } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return NotFound();
  }

  // Clean up title (remove emoji prefix if present)
  const title = post.title.replace(/^🔥\s*/, "");
  const formattedDate = formatDate(post.date);

  // Parse markdown to HTML with syntax highlighting
  const contentHtml = renderMarkdown(post.content);

  return (
    <Fragment>
      <article class="bg-white">
        {/* Header */}
        <header class="pt-16 pb-8 px-6">
          <div class="mx-auto max-w-2xl">
            {/* Back link */}
            <a href="/blog" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              All posts
            </a>

            {/* Title */}
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Description */}
            {post.description && (
              <p class="mt-6 text-xl text-gray-500 leading-relaxed">
                {post.description}
              </p>
            )}

            {/* Author + Date */}
            <div class="mt-8 flex items-center gap-x-4 border-b border-gray-100 pb-8">
              <div class="size-12 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                {getInitials(post.author)}
              </div>
              <div>
                <p class="font-semibold text-gray-900">{post.author}</p>
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <time datetime={post.date}>{formattedDate}</time>
                </div>
              </div>
            </div>

            {/* Open with AI buttons */}
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <span class="text-sm text-gray-500">Discuss with AI:</span>
              <a
                href={`https://chat.openai.com/?q=${encodeURIComponent(`Read and analyze this article, then let me ask questions about it:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                </svg>
                ChatGPT
              </a>
              <a
                href={`https://claude.ai/new?q=${encodeURIComponent(`Read and analyze this article, then let me ask questions about it:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.709 15.955l4.72-2.647.08-.08v-.16l-.08-.08-2.2-1.239c-.4-.239-.56-.639-.56-1.038 0-.16.04-.32.08-.48l2.12-3.756c.24-.4.64-.56 1.04-.56.16 0 .32.04.48.08l8.477 4.793c.4.24.56.64.56 1.04 0 .159-.04.319-.08.479l-2.12 3.756c-.24.4-.64.56-1.04.56-.16 0-.32-.04-.479-.08l-4.72 2.647-.08.08v.16l.08.08 2.2 1.238c.4.24.56.64.56 1.04 0 .16-.04.32-.08.48l-2.12 3.756c-.24.4-.64.56-1.04.56-.16 0-.32-.04-.48-.08L1.749 19.71c-.4-.24-.56-.64-.56-1.04 0-.16.04-.32.08-.48l2.12-3.756c.24-.4.64-.56 1.04-.56.16 0 .32.04.48.08l-.2.001z"/>
                </svg>
                Claude
              </a>
              <a
                href={`/blog/${slug}.md`}
                target="_blank"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                title="View raw markdown"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                .md
              </a>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <figure class="my-8 px-6">
            <div class="mx-auto max-w-4xl">
              <img
                src={post.image}
                alt={title}
                class="w-full rounded-lg object-cover max-h-[500px]"
              />
            </div>
          </figure>
        )}

        {/* Content */}
        <div class="px-6 pb-24">
          <div
            class="prose prose-lg mx-auto max-w-2xl
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:p-0
              [&_pre]:!bg-[#24292e] [&_.shiki]:!bg-[#24292e] [&_pre]:p-4
              [&_pre_code]:bg-transparent [&_pre_code]:p-0
              [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:bg-gray-100 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:text-gray-800
              prose-img:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-ul:my-4 prose-li:my-1
              prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Comments Section */}
        {CommentsSection({ slug, ctx })}

        {/* Footer */}
        <footer class="border-t border-gray-100 bg-gray-50">
          <div class="mx-auto max-w-2xl px-6 py-12">
            <div class="flex items-center justify-between">
              <a href="/blog" class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to blog
              </a>
            </div>
          </div>
        </footer>
      </article>
    </Fragment>
  );
}
