-- Migration: bm25-index
-- BM25 index for full-text search (ParadeDB pg_search v2 API)
-- Uses English stemmer for better matching (running -> run, patients -> patient)

CREATE INDEX idx_documents_bm25 ON documents
USING bm25 (
  id,
  resource,
  (page_title::pdb.simple('stemmer=english')),
  (section_title::pdb.simple('stemmer=english')),
  (content::pdb.simple('stemmer=english'))
)
WITH (key_field = 'id');
