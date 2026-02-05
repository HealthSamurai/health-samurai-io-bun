import { Fragment, escapeHtml } from "../lib/jsx-runtime";
import type { Context, SessionUser } from "../context";
import type { UserRole } from "../types";

export interface Comment {
  id: number;
  blog_slug: string;
  user_id: number;
  parent_id: number | null;
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
  replies: Comment[];
  allComments: Comment[];
  currentUser?: SessionUser;
  slug: string;
  depth?: number;
}

export function CommentItem({ comment, replies, allComments, currentUser, slug, depth = 0 }: CommentItemProps): string {
  const canDelete = currentUser && (
    currentUser.id === comment.user_id ||
    currentUser.role === "admin"
  );
  const maxDepth = 3; // Limit nesting depth
  const canReply = currentUser && depth < maxDepth;
  const replySignal = `reply_${comment.id}`;

  return (
    <div class={`comment ${depth > 0 ? "ml-8 border-l-2 border-gray-100 pl-4" : ""}`} id={`comment-${comment.id}`}>
      <div class="flex gap-3 py-4">
        {/* Avatar */}
        {comment.avatar_url ? (
          <img
            src={comment.avatar_url}
            alt={comment.username}
            class="size-8 rounded-full flex-shrink-0"
          />
        ) : (
          <div class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 flex-shrink-0">
            {getInitials(comment.username)}
          </div>
        )}

        {/* Content */}
        <div
          class="flex-1 min-w-0"
          data-signals={`{${replySignal}: false}`}
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="font-medium text-gray-900 text-sm">{comment.username}</span>
            <span class="text-xs text-gray-500">{formatCommentDate(comment.created_at)}</span>
          </div>
          <p class="text-gray-700 text-sm whitespace-pre-wrap break-words">{escapeHtml(comment.content)}</p>

          {/* Actions */}
          <div class="flex items-center gap-4 mt-2">
            {canReply && (
              <button
                {...{ "data-on:click": `$${replySignal} = !$${replySignal}` }}
                class="text-xs text-gray-500 hover:text-gray-700"
              >
                Reply
              </button>
            )}
            {canDelete && (
              <button
                hx-delete={`/api/blog/${slug}/comments/${comment.id}`}
                hx-target={`#comment-${comment.id}`}
                hx-swap="outerHTML"
                hx-confirm="Delete this comment?"
                class="text-xs text-gray-400 hover:text-red-500"
              >
                Delete
              </button>
            )}
          </div>

          {/* Reply form (hidden by default) */}
          {canReply && (
            <div
              data-show={`$${replySignal}`}
              style="display: none"
              class="mt-3"
            >
              <form
                hx-post={`/api/blog/${slug}/comments`}
                hx-target={`#comment-${comment.id} > .replies`}
                hx-swap="beforeend"
                {...{
                  "hx-on": `htmx:afterRequest: if(event.detail.successful) { this.reset(); $${replySignal} = false; }`,
                }}
                class="flex gap-2"
              >
                <input type="hidden" name="parent_id" value={String(comment.id)} />
                <textarea
                  name="content"
                  required
                  rows={2}
                  placeholder="Write a reply..."
                  class="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <div class="flex flex-col gap-1">
                  <button
                    type="submit"
                    class="px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary-dark text-xs font-medium"
                  >
                    Reply
                  </button>
                  <button
                    type="button"
                    {...{ "data-on:click": `$${replySignal} = false` }}
                    class="px-3 py-1.5 text-gray-500 hover:text-gray-700 text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Nested replies */}
      <div class="replies">
        {replies.map(reply => {
          const nestedReplies = allComments.filter(c => c.parent_id === reply.id);
          return CommentItem({
            comment: reply,
            replies: nestedReplies,
            allComments,
            currentUser,
            slug,
            depth: depth + 1,
          });
        })}
      </div>
    </div>
  );
}

interface CommentListProps {
  comments: Comment[];
  currentUser?: SessionUser;
  slug: string;
}

export function CommentList({ comments, currentUser, slug }: CommentListProps): string {
  // Get top-level comments (no parent)
  const topLevel = comments.filter(c => c.parent_id === null);

  if (topLevel.length === 0) {
    return (
      <div class="text-center py-8 text-gray-500">
        No comments yet. Be the first to comment!
      </div>
    );
  }

  return (
    <div class="divide-y divide-gray-100">
      {topLevel.map(comment => {
        const replies = comments.filter(c => c.parent_id === comment.id);
        return CommentItem({
          comment,
          replies,
          allComments: comments,
          currentUser,
          slug,
        });
      })}
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
      hx-swap="beforeend"
      {...{ "hx-on": "htmx:afterRequest: if(event.detail.successful) this.reset()" }}
      class="mt-8 pt-8 border-t border-gray-100"
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
    <section class="py-12">
      <div class="mb-8 flex items-center justify-between">
        <div class="flex items-center gap-[7px]">
          <img src="/icons/blog/comments.svg" alt="" class="size-10" />
          <div class="text-[36px] font-bold leading-[40px] tracking-[-0.4px] text-section-heading">Comments</div>
        </div>
        {!user && (
          <a
            href={`/login?redirect=/blog/${slug}`}
            class="px-3 py-1.5 bg-brand-500 text-white text-sm font-medium rounded hover:bg-brand-600 transition-colors"
          >
            Sign in
          </a>
        )}
      </div>

      {/* Comments list (loaded via htmx) */}
      <div
        id="comments-list"
        hx-get={`/api/blog/${slug}/comments`}
        hx-trigger="load"
        hx-swap="innerHTML"
      >
        <div class="text-center py-8 text-neutral-400">
          Loading comments...
        </div>
      </div>

      {/* Comment form at the bottom (only for authenticated users) */}
      {user && CommentForm({ slug, user })}
    </section>
  );
}
