import { Fragment } from "../../lib/jsx-runtime";
import { getPostBySlug, formatDate } from "../../data/blog";
import { renderMarkdown } from "../../lib/markdown";
import { CommentsSection } from "../../components/Comments";
import { PostLikeButton } from "../../components/PostLikeButton";
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

export default async function BlogPost(params: BlogPostParams): Promise<string> {
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
            <div class="mt-6 flex items-center gap-2">
              <span class="text-xs text-gray-400 mr-1">Open in:</span>
              {/* ChatGPT */}
              <a
                href={`https://chat.openai.com/?q=${encodeURIComponent(`Read and analyze this article, then let me ask questions about it:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Open in ChatGPT"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                </svg>
              </a>
              {/* Claude */}
              <a
                href={`https://claude.ai/new?q=${encodeURIComponent(`Read and analyze this article, then let me ask questions about it:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 text-gray-400 hover:text-[#D97757] hover:bg-gray-100 rounded-lg transition-colors"
                title="Open in Claude"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.603 16.634l4.34-2.478.074-.074v-.148l-.074-.074-2.022-1.145c-.37-.222-.518-.592-.518-.962 0-.148.037-.296.074-.444l1.948-3.48c.222-.37.592-.518.962-.518.148 0 .296.037.444.074l7.798 4.432c.37.222.518.592.518.962 0 .148-.037.296-.074.444l-1.948 3.48c-.222.37-.592.518-.962.518-.148 0-.296-.037-.444-.074l-4.34 2.478-.074.074v.148l.074.074 2.022 1.145c.37.222.518.592.518.962 0 .148-.037.296-.074.444l-1.948 3.48c-.222.37-.592.518-.962.518-.148 0-.296-.037-.444-.074L1.69 20.114c-.37-.222-.518-.592-.518-.962 0-.148.037-.296.074-.444l1.948-3.48c.222-.37.592-.518.962-.518.148 0 .296.037.444.074l.003-.15z"/>
                </svg>
              </a>
              {/* Grok */}
              <a
                href={`https://x.com/i/grok?text=${encodeURIComponent(`Read and analyze this article, then let me ask questions about it:\n\nhttps://health-samurai.io/blog/${slug}.md`)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                title="Open in Grok"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Raw Markdown */}
              <a
                href={`/blog/${slug}.md`}
                target="_blank"
                class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="View as Markdown"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm16.5 15V6h-2.25v6.75L14.5 9.5l-2.75 3.25V6H9.5v12h2.25v-5.25l2.75 3.25 2.75-3.25V18h2.75zM6 15v-4.5l1.5 2 1.5-2V15h1.5V9H9l-1.5 2L6 9H4.5v6H6z"/>
                </svg>
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
        <div class="px-6 pb-12">
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

          {/* Like Button */}
          <div class="mx-auto max-w-2xl" dangerouslySetInnerHTML={{ __html: await PostLikeButton({ slug, ctx }) }} />
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
