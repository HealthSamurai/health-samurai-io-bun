-- Post likes table (one like per user per post)
CREATE TABLE post_likes (
  id SERIAL PRIMARY KEY,
  post_slug TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Each user can only like a post once
  UNIQUE(post_slug, user_id)
);

-- Index for counting likes per post
CREATE INDEX idx_post_likes_post_slug ON post_likes(post_slug);

-- Index for checking if user liked a post
CREATE INDEX idx_post_likes_user ON post_likes(user_id, post_slug);
