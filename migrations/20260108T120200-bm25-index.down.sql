-- Down migration: bm25-index
DROP INDEX IF EXISTS idx_documents_bm25;
