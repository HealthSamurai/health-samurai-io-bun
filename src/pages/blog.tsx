import { Fragment } from "../lib/jsx-runtime";
import { getAllPosts, formatDate, type BlogPost } from "../data/blog";

export const metadata = {
  title: "Blog",
  description: "Articles, tutorials, and news about FHIR, healthcare interoperability, and Health Samurai products.",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function BlogCard({ post }: { post: BlogPost }): string {
  const formattedDate = formatDate(post.date);
  // Clean up title (remove emoji prefix if present)
  const title = post.title.replace(/^🔥\s*/, "");

  return (
    <article class="flex max-w-xl flex-col items-start justify-between">
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime={post.date} class="text-gray-500 dark:text-dark-text-muted">
          {formattedDate}
        </time>
      </div>
      <div class="group relative">
        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-dark-text group-hover:text-gray-600 dark:group-hover:text-dark-text-light">
          <a href={`/blog/${post.slug}`}>
            <span class="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-dark-text-light">
          {post.description}
        </p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <div class="size-10 rounded-full bg-gray-100 dark:bg-dark-bg-alt flex items-center justify-center text-sm font-medium text-gray-600 dark:text-dark-text-light">
          {getInitials(post.author)}
        </div>
        <div class="text-sm/6">
          <p class="font-semibold text-gray-900 dark:text-dark-text">
            {post.author}
          </p>
        </div>
      </div>
    </article>
  );
}

function RssButton(): string {
  return (
    <a
      href="/blog/rss.xml"
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-orange-400 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 font-medium text-sm transition-colors cursor-pointer"
      title="Subscribe via RSS"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
      </svg>
      RSS
    </a>
  );
}

export default function BlogPage(): string {
  const posts = getAllPosts();

  return (
    <Fragment>
      <div class="bg-white dark:bg-dark-bg py-24 sm:py-32 transition-colors">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl">
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-dark-text sm:text-5xl">
                From the blog
              </h2>
              <RssButton />
            </div>
            <p class="mt-2 text-lg/8 text-gray-600 dark:text-dark-text-light">
              Learn how to build better healthcare applications with FHIR.
            </p>
            <div class="mt-10 space-y-16 border-t border-gray-200 dark:border-dark-border pt-10 sm:mt-16 sm:pt-16">
              {posts.map(post => (
                <BlogCard post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
