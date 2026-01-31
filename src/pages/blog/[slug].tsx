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
