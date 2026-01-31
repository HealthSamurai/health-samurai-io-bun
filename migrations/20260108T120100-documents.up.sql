-- Migration: documents
-- Documents table for FHIR specification RAG with multi-model embeddings

CREATE TABLE IF NOT EXISTS documents (
  id SERIAL PRIMARY KEY,
  resource TEXT NOT NULL,
  path TEXT NOT NULL,
  page_title TEXT NOT NULL,
  section_title TEXT NOT NULL,
  content TEXT NOT NULL,

  -- Content embeddings (per model)
  embed_nomic vector(768),
  embed_mxbai vector(1024),
  embed_minilm vector(384),

  -- Title embeddings (per model)
  title_embed_nomic vector(768),
  title_embed_mxbai vector(1024),
  title_embed_minilm vector(384),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Regular indexes
CREATE INDEX IF NOT EXISTS idx_resource ON documents(resource);
CREATE INDEX IF NOT EXISTS idx_path ON documents(path);
