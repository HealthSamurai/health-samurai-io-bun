-- Rollback: comments-threads
-- Remove parent_id column

DROP INDEX IF EXISTS idx_comments_parent_id;
ALTER TABLE comments DROP COLUMN IF EXISTS parent_id;
