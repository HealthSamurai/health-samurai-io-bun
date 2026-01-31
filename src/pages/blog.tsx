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
        <time datetime={post.date} class="text-gray-500">
          {formattedDate}
        </time>
      </div>
      <div class="group relative">
        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <a href={`/blog/${post.slug}`}>
            <span class="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          {post.description}
        </p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <div class="size-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
          {getInitials(post.author)}
        </div>
        <div class="text-sm/6">
          <p class="font-semibold text-gray-900">
            {post.author}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage(): string {
  const posts = getAllPosts();

  return (
    <Fragment>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl">
            <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              From the blog
            </h2>
            <p class="mt-2 text-lg/8 text-gray-600">
              Learn how to build better healthcare applications with FHIR.
            </p>
            <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
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
