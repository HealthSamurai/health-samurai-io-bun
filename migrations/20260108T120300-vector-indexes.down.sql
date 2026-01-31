-- Down migration: vector-indexes
DROP INDEX IF EXISTS idx_title_embed_nomic;
DROP INDEX IF EXISTS idx_embed_nomic;
