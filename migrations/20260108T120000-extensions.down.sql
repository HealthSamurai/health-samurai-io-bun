-- Down migration: extensions
DROP EXTENSION IF EXISTS pg_search;
DROP EXTENSION IF EXISTS vector;
DROP EXTENSION IF EXISTS pg_trgm;
