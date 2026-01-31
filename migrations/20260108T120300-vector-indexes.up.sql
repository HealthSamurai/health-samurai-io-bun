-- Migration: vector-indexes
-- HNSW indexes for semantic search with pgvector

-- Content embeddings
CREATE INDEX IF NOT EXISTS idx_embed_nomic ON documents USING hnsw (embed_nomic vector_cosine_ops);

-- Title embeddings (used for title-weighted search)
CREATE INDEX IF NOT EXISTS idx_title_embed_nomic ON documents USING hnsw (title_embed_nomic vector_cosine_ops);
