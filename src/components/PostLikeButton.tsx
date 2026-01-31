import type { Context } from "../context";

interface PostLikeButtonProps {
  slug: string;
  ctx: Context;
}

export async function PostLikeButton({ slug, ctx }: PostLikeButtonProps): Promise<string> {
  // Get like count
  const [{ count }] = await ctx.db`SELECT COUNT(*)::int as count FROM post_likes WHERE post_slug = ${slug}`;

  // Check if current user liked
  let liked = false;
  if (ctx?.user) {
    const [existing] = await ctx.db`SELECT id FROM post_likes WHERE post_slug = ${slug} AND user_id = ${ctx.user.id}`;
    liked = !!existing;
  }

  const isLoggedIn = !!ctx?.user;

  return (
    <div
      class="flex items-center justify-center py-8 border-t border-b border-gray-100 dark:border-dark-border my-8"
      data-signals={`{postLiked: ${liked}, likeCount: ${count}, likeLoading: false}`}
    >
      <div class="flex flex-col items-center gap-3">
        <button
          type="button"
          class="group flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all cursor-pointer"
          data-class="{
            'border-red-300 bg-red-50 dark:bg-red-950 text-red-600': $postLiked,
            'border-gray-200 dark:border-dark-border hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950 text-gray-500 dark:text-dark-text-light hover:text-red-500': !$postLiked,
            'opacity-50 pointer-events-none': $likeLoading
          }"
          data-on:click={isLoggedIn
            ? `$likeLoading = true; fetch('/api/posts/like', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: '${slug}' }) }).then(r => r.json()).then(data => { $postLiked = data.liked; $likeCount = data.count; $likeLoading = false; }).catch(() => { $likeLoading = false; })`
            : `window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)`
          }
          aria-label={isLoggedIn ? "Like this post" : "Log in to like"}
        >
          {/* Heart icon */}
          <svg
            class="w-6 h-6 transition-transform group-hover:scale-110"
            data-class="{'fill-current': $postLiked}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span class="font-medium" data-text="$postLiked ? 'Liked' : 'Like'">
            {liked ? "Liked" : "Like"}
          </span>
        </button>

        <span class="text-sm text-gray-500 dark:text-dark-text-muted">
          <span data-text="$likeCount">{count}</span>
          {" "}
          <span data-text="$likeCount === 1 ? 'like' : 'likes'">{count === 1 ? "like" : "likes"}</span>
        </span>

        {!isLoggedIn && (
          <span class="text-xs text-gray-400 dark:text-dark-text-muted">
            <a href={`/login?redirect=/blog/${slug}`} class="underline hover:text-gray-600 dark:hover:text-dark-text-light">
              Log in
            </a>
            {" to like this post"}
          </span>
        )}
      </div>
    </div>
  );
}
