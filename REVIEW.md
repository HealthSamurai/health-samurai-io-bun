# Review Findings

1) Critical: User content is rendered without HTML escaping (XSS)
- `renderChildren` returns raw strings and does not escape HTML, so user input like comments can inject scripts.
- Example: comment content is inserted directly as `{comment.content}` and will flow into `renderChildren` unescaped.
- Files: `src/lib/jsx-runtime.ts:27-35`, `src/components/Comments.tsx:88`.

2) High: Comment reply toggle is broken due to invalid Datastar attribute and scope
- The toggle uses `data-on-click` instead of `data-on:click` and the signal is declared on a sibling element, so `$reply_*` is undefined at the button.
- Result: reply form never opens/closes.
- Files: `src/components/Comments.tsx:93-118`, `src/components/Comments.tsx:143-149`.

3) High: htmx post-submit reset handlers never fire
- `hx-on--after-request` is not a valid htmx attribute; correct forms use `hx-on::after-request` or `hx-on:htmx:afterRequest`.
- Result: reply/comment forms do not reset or close after successful post.
- Files: `src/components/Comments.tsx:121-126`, `src/components/Comments.tsx:216-221`.

4) Medium: Webhook signature check is vulnerable to timing attacks
- Signature comparison uses `!==` rather than constant‑time comparison, making it vulnerable to timing leaks.
- File: `src/server.ts:451-474`.

5) Medium: Comment replies can attach to unrelated posts
- `parent_id` is accepted and stored without validating that the parent comment belongs to the same `blog_slug`.
- Result: cross‑post comment threading and inconsistent reply trees.
- Files: `src/server.ts:357-383`.

Open questions / assumptions
- Assumed Datastar syntax follows project instructions (`data-on:click` and signal scope is element + descendants).
- Assumed htmx version expects `hx-on::after-request` or `hx-on:htmx:afterRequest` (current attributes appear invalid).
