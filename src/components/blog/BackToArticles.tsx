/**
 * Back to Articles button component
 * Figma Node: 616-6153
 */
export function BackToArticles(): string {
  return `
    <a
      href="/blog"
      class="inline-flex items-center gap-2 px-2 py-1 bg-blog-back-bg rounded-lg text-base font-normal text-blog-title hover:opacity-80 transition-opacity w-fit"
    >
      <img src="/icons/blog/arrow-back.svg" alt="" class="w-4 h-4 -rotate-90" />
      <span>Go back to Articles</span>
    </a>
  `
}
