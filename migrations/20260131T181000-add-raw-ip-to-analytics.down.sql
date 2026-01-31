-- Rollback: add-raw-ip-to-analytics

DROP INDEX IF EXISTS idx_events_ip;
ALTER TABLE analytics_events DROP COLUMN IF EXISTS ip_address;
