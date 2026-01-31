-- Migration: add-raw-ip-to-analytics
-- Add raw IP column for detailed analytics
-- Keep ip_hash for privacy-focused queries, add ip_address for admin analysis

ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS ip_address TEXT;

-- Index for geo queries
CREATE INDEX IF NOT EXISTS idx_events_ip ON analytics_events(ip_address);

COMMENT ON COLUMN analytics_events.ip_address IS 'Raw IP address for admin geo analysis';
COMMENT ON COLUMN analytics_events.ip_hash IS 'Hashed IP for privacy-preserving unique visitor counts';
