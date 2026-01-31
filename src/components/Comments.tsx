import { Fragment } from "../lib/jsx-runtime";
import type { Context, SessionUser } from "../context";
import type { UserRole } from "../types";

export interface Comment {
  id: number;
  blog_slug: string;
  user_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  // Joined from users table
  username: string;
  avatar_url?: string;
  role?: UserRole;
}

function getInitials(name: string): string {
  return name
    .split(/[._-]/)
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatCommentDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
}

interface CommentItemProps {
  comment: Comment;
  currentUser?: SessionUser;
}

export function CommentItem({ comment, currentUser }: CommentItemProps): string {
  const canDelete = currentUser && (
    currentUser.id === comment.user_id ||
    currentUser.role === "admin"
  );

  return (
    <div class="comment flex gap-3 py-4 border-b border-gray-100 last:border-0" id={`comment-${comment.id}`}>
      {/* Avatar */}
      {comment.avatar_url ? (
        <img
          src={comment.avatar_url}
          alt={comment.username}
          class="size-10 rounded-full flex-shrink-0"
        />
      ) : (
        <div class="size-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
          {getInitials(comment.username)}
        </div>
      )}

      {/* Content */}
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="font-medium text-gray-900">{comment.username}</span>
          <span class="text-sm text-gray-500">{formatCommentDate(comment.created_at)}</span>
          {canDelete && (
            <button
              hx-delete={`/api/blog/${comment.blog_slug}/comments/${comment.id}`}
              hx-target={`#comment-${comment.id}`}
              hx-swap="outerHTML"
              hx-confirm="Delete this comment?"
              class="ml-auto text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
        <p class="text-gray-700 whitespace-pre-wrap break-words">{comment.content}</p>
      </div>
    </div>
  );
}

interface CommentListProps {
  comments: Comment[];
  currentUser?: SessionUser;
}

export function CommentList({ comments, currentUser }: CommentListProps): string {
  if (comments.length === 0) {
    return (
      <div class="text-center py-8 text-gray-500">
        No comments yet. Be the first to comment!
      </div>
    );
  }

  return (
    <div class="divide-y divide-gray-100">
      {comments.map(comment => CommentItem({ comment, currentUser }))}
    </div>
  );
}

interface CommentFormProps {
  slug: string;
  user: SessionUser;
}

export function CommentForm({ slug, user }: CommentFormProps): string {
  return (
    <form
      hx-post={`/api/blog/${slug}/comments`}
      hx-target="#comments-list"
      hx-swap="afterbegin"
      hx-on--after-request="if(event.detail.successful) this.reset()"
      class="mb-8"
    >
      <div class="flex gap-3">
        {/* User avatar */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.username}
            class="size-10 rounded-full flex-shrink-0"
          />
        ) : (
          <div class="size-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
            {getInitials(user.username)}
          </div>
        )}

        {/* Input area */}
        <div class="flex-1">
          <textarea
            name="content"
            required
            rows={3}
            placeholder="Write a comment..."
            class="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <div class="flex justify-end mt-2">
            <button
              type="submit"
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

interface CommentsSectionProps {
  slug: string;
  ctx?: Context;
}

export function CommentsSection({ slug, ctx }: CommentsSectionProps): string {
  const user = ctx?.user;

  return (
    <section class="border-t border-gray-200 mt-12 pt-12">
      <div class="mx-auto max-w-2xl px-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Comments</h2>

        {/* Comment form (only for authenticated users) */}
        {user ? (
          CommentForm({ slug, user })
        ) : (
          <div class="mb-8 p-4 bg-gray-50 rounded-lg text-center">
            <p class="text-gray-600">
              <a href={`/login?redirect=/blog/${slug}`} class="text-primary hover:underline font-medium">
                Log in
              </a>
              {" "}to leave a comment.
            </p>
          </div>
        )}

        {/* Comments list (loaded via htmx) */}
        <div
          id="comments-list"
          hx-get={`/api/blog/${slug}/comments`}
          hx-trigger="load"
          hx-swap="innerHTML"
        >
          <div class="text-center py-8 text-gray-400">
            Loading comments...
          </div>
        </div>
      </div>
    </section>
  );
}
