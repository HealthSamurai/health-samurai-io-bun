-- Migration: analytics
-- Create analytics tables for tracking page views and user journeys

-- Track individual page views and events
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  session_id TEXT NOT NULL,              -- Anonymous session identifier
  user_id INTEGER REFERENCES users(id),  -- NULL for anonymous visitors
  event_type TEXT NOT NULL,              -- 'page_view', 'click', 'form_submit', 'search'
  path TEXT,                             -- URL path
  referrer TEXT,                         -- External referrer
  previous_path TEXT,                    -- Internal navigation (for journey tracking)
  user_agent TEXT,
  ip_hash TEXT,                          -- Hashed IP for uniqueness, not tracking
  metadata JSONB,                        -- Event-specific data (search query, form name, etc.)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX idx_events_session ON analytics_events(session_id);
CREATE INDEX idx_events_created ON analytics_events(created_at);
CREATE INDEX idx_events_path ON analytics_events(path);
CREATE INDEX idx_events_type ON analytics_events(event_type);

-- Daily aggregates for fast dashboard queries
CREATE TABLE analytics_daily (
  date DATE NOT NULL,
  path TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  unique_sessions INTEGER DEFAULT 0,
  unique_users INTEGER DEFAULT 0,
  PRIMARY KEY (date, path)
);

-- Index for date-based queries
CREATE INDEX idx_daily_date ON analytics_daily(date);
