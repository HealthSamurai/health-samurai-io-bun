-- Migration: comments-threads
-- Add parent_id for threaded comments

ALTER TABLE comments ADD COLUMN parent_id INTEGER REFERENCES comments(id) ON DELETE CASCADE;

CREATE INDEX idx_comments_parent_id ON comments(parent_id);
