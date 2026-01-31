/**
 * Built-in analytics tracking
 * Tracks page views and user journeys stored in PostgreSQL
 */

import { db } from "./db";

const SESSION_COOKIE_NAME = "_hs_sid";
const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes sliding window

// ============================================
// IP Geolocation (using ip-api.com - free tier)
// ============================================

interface GeoLocation {
  country: string;
  countryCode: string;
  city: string;
  region: string;
}

// In-memory cache for geo lookups (avoid rate limits)
const geoCache = new Map<string, { data: GeoLocation | null; timestamp: number }>();
const GEO_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
const GEO_CACHE_MAX_SIZE = 10000;

/**
 * Lookup geolocation for an IP address
 * Uses ip-api.com free tier (45 requests/minute limit)
 */
export async function lookupGeoLocation(ip: string): Promise<GeoLocation | null> {
  // Skip private/local IPs
  if (!ip || ip === "unknown" || ip.startsWith("127.") || ip.startsWith("192.168.") ||
      ip.startsWith("10.") || ip === "::1" || ip.startsWith("172.")) {
    return null;
  }

  // Check cache
  const cached = geoCache.get(ip);
  if (cached && Date.now() - cached.timestamp < GEO_CACHE_TTL) {
    return cached.data;
  }

  try {
    // ip-api.com free tier - no API key needed
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,regionName,city`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json() as {
      status: string;
      country?: string;
      countryCode?: string;
      regionName?: string;
      city?: string;
    };

    if (data.status !== "success") {
      geoCache.set(ip, { data: null, timestamp: Date.now() });
      return null;
    }

    const geo: GeoLocation = {
      country: data.country || "Unknown",
      countryCode: data.countryCode || "XX",
      city: data.city || "Unknown",
      region: data.regionName || "Unknown",
    };

    // Cache the result
    if (geoCache.size >= GEO_CACHE_MAX_SIZE) {
      // Evict oldest entries
      const oldestKey = geoCache.keys().next().value;
      if (oldestKey) geoCache.delete(oldestKey);
    }
    geoCache.set(ip, { data: geo, timestamp: Date.now() });

    return geo;
  } catch (error) {
    console.error("Geo lookup error:", error);
    return null;
  }
}

/**
 * Parse cookies from request
 */
function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};

  return cookieHeader.split(";").reduce(
    (cookies, cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name && value) {
        cookies[name] = decodeURIComponent(value);
      }
      return cookies;
    },
    {} as Record<string, string>
  );
}

/**
 * Generate anonymous session ID
 */
function generateSessionId(): string {
  return crypto.randomUUID();
}

/**
 * Hash IP address for privacy (one-way hash)
 */
function hashIP(ip: string): string {
  const hash = new Bun.CryptoHasher("sha256");
  // Add a salt to prevent rainbow table attacks
  hash.update(`hs_analytics_${ip}_salt_v1`);
  return hash.digest("hex").substring(0, 16); // Truncate for storage efficiency
}

/**
 * Get or create session ID from request
 */
export function getAnalyticsSessionId(req: Request): string {
  const cookies = parseCookies(req.headers.get("Cookie"));
  return cookies[SESSION_COOKIE_NAME] || generateSessionId();
}

/**
 * Create analytics session cookie
 */
export function createAnalyticsCookie(sessionId: string): string {
  const isProduction = process.env.NODE_ENV === "production";
  const secure = isProduction ? "; Secure" : "";
  const maxAge = Math.floor(SESSION_DURATION / 1000);
  return `${SESSION_COOKIE_NAME}=${sessionId}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

/**
 * Extract client IP from request
 */
function getClientIP(req: Request): string {
  // Check common headers for proxied requests
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0];
    return first ? first.trim() : "unknown";
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  // Fallback (may not work in all environments)
  return "unknown";
}

export interface TrackEventOptions {
  sessionId: string;
  userId?: number;
  eventType: string;
  path: string;
  referrer?: string;
  previousPath?: string;
  userAgent?: string;
  ip?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Track an analytics event
 */
export async function trackEvent(opts: TrackEventOptions): Promise<void> {
  const {
    sessionId,
    userId,
    eventType,
    path,
    referrer,
    previousPath,
    userAgent,
    ip,
    metadata,
  } = opts;

  const ipHash = ip ? hashIP(ip) : null;

  try {
    await db`
      INSERT INTO analytics_events (
        session_id, user_id, event_type, path, referrer,
        previous_path, user_agent, ip_hash, metadata
      ) VALUES (
        ${sessionId}, ${userId ?? null}, ${eventType}, ${path}, ${referrer ?? null},
        ${previousPath ?? null}, ${userAgent ?? null}, ${ipHash}, ${metadata ? JSON.stringify(metadata) : null}
      )
    `;
  } catch (error) {
    // Don't let analytics errors break the request
    console.error("Analytics tracking error:", error);
  }
}

/**
 * Link anonymous session events to authenticated user
 * Called when user logs in to connect their previous anonymous activity
 */
export async function linkSessionToUser(analyticsSessionId: string, userId: number): Promise<number> {
  try {
    const result = await db`
      UPDATE analytics_events
      SET user_id = ${userId}
      WHERE session_id = ${analyticsSessionId}
        AND user_id IS NULL
    `;
    const count = result.count ?? 0;
    if (count > 0) {
      console.log(`[Analytics] Linked ${count} anonymous events to user ${userId}`);
    }
    return count;
  } catch (error) {
    console.error("Failed to link session to user:", error);
    return 0;
  }
}

/**
 * Extract UTM parameters from URL
 */
function getUTMParams(url: URL): Record<string, string> | undefined {
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const params: Record<string, string> = {};

  for (const key of utmKeys) {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  }

  return Object.keys(params).length > 0 ? params : undefined;
}

/**
 * Parse Accept-Language header to get primary language
 */
function getLanguage(req: Request): string | undefined {
  const acceptLanguage = req.headers.get("accept-language");
  if (!acceptLanguage) return undefined;

  // Parse "en-US,en;q=0.9,ru;q=0.8" -> "en-US"
  const primary = acceptLanguage.split(",")[0];
  const lang = primary?.split(";")[0];
  return lang ? lang.trim() : undefined;
}

/**
 * Track a page view (convenience wrapper)
 * Geo lookup runs in background to avoid blocking the response
 */
export async function trackPageView(
  req: Request,
  sessionId: string,
  userId?: number,
  previousPath?: string
): Promise<void> {
  const url = new URL(req.url);
  const referrer = req.headers.get("referer") || undefined;
  const clientIP = getClientIP(req);

  // Build metadata with language and UTM params
  const language = getLanguage(req);
  const utm = getUTMParams(url);
  const metadata: Record<string, unknown> = {};

  if (language) metadata.language = language;
  if (utm) metadata.utm = utm;

  // Fetch geo data (uses cache, so usually fast)
  const geo = await lookupGeoLocation(clientIP);
  if (geo) {
    metadata.geo = {
      country: geo.country,
      countryCode: geo.countryCode,
      city: geo.city,
      region: geo.region,
    };
  }

  await trackEvent({
    sessionId,
    userId,
    eventType: "page_view",
    path: url.pathname,
    referrer,
    previousPath,
    userAgent: req.headers.get("user-agent") || undefined,
    ip: clientIP,
    metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
  });
}

// In-memory cache for session's last path (for journey tracking)
// This avoids additional DB queries on every request
const sessionLastPath = new Map<string, { path: string; timestamp: number }>();

// Clean up old entries periodically
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
const MAX_CACHE_AGE = SESSION_DURATION;

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of sessionLastPath.entries()) {
    if (now - value.timestamp > MAX_CACHE_AGE) {
      sessionLastPath.delete(key);
    }
  }
}, CLEANUP_INTERVAL);

/**
 * Get and update the previous path for a session
 */
export function getAndSetPreviousPath(sessionId: string, currentPath: string): string | undefined {
  const entry = sessionLastPath.get(sessionId);
  const previousPath = entry?.path;

  // Update with current path
  sessionLastPath.set(sessionId, {
    path: currentPath,
    timestamp: Date.now(),
  });

  return previousPath;
}

// ============================================
// Dashboard Query Functions
// ============================================

export interface DashboardStats {
  totalPageViews: number;
  uniqueVisitors: number;
  uniqueUsers: number;
  bounceRate: number;
}

export interface TopPage {
  path: string;
  views: number;
  uniqueVisitors: number;
}

export interface TopReferrer {
  referrer: string;
  visits: number;
}

export interface UserFlow {
  from_path: string;
  to_path: string;
  count: number;
}

/**
 * Get dashboard statistics for a date range
 */
export async function getDashboardStats(
  startDate: Date,
  endDate: Date
): Promise<DashboardStats> {
  const [result] = await db`
    SELECT
      COUNT(*) as total_views,
      COUNT(DISTINCT session_id) as unique_visitors,
      COUNT(DISTINCT user_id) FILTER (WHERE user_id IS NOT NULL) as unique_users
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
  `;

  // Calculate bounce rate (sessions with only 1 page view)
  const [bounceResult] = await db`
    WITH session_counts AS (
      SELECT session_id, COUNT(*) as page_count
      FROM analytics_events
      WHERE event_type = 'page_view'
        AND created_at >= ${startDate}
        AND created_at < ${endDate}
      GROUP BY session_id
    )
    SELECT
      COUNT(*) FILTER (WHERE page_count = 1) as bounced,
      COUNT(*) as total
    FROM session_counts
  `;

  const bounceRate = bounceResult.total > 0
    ? (bounceResult.bounced / bounceResult.total) * 100
    : 0;

  return {
    totalPageViews: Number(result.total_views) || 0,
    uniqueVisitors: Number(result.unique_visitors) || 0,
    uniqueUsers: Number(result.unique_users) || 0,
    bounceRate: Math.round(bounceRate * 10) / 10,
  };
}

/**
 * Get top pages by views
 */
export async function getTopPages(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<TopPage[]> {
  const results = await db`
    SELECT
      path,
      COUNT(*) as views,
      COUNT(DISTINCT session_id) as unique_visitors
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
    GROUP BY path
    ORDER BY views DESC
    LIMIT ${limit}
  `;

  return results.map((row: { path: string; views: number; unique_visitors: number }) => ({
    path: row.path,
    views: Number(row.views),
    uniqueVisitors: Number(row.unique_visitors),
  }));
}

/**
 * Get top referrers
 */
export async function getTopReferrers(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<TopReferrer[]> {
  const results = await db`
    SELECT
      COALESCE(referrer, 'Direct') as referrer,
      COUNT(*) as visits
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
      AND (referrer IS NULL OR referrer NOT LIKE '%localhost%')
    GROUP BY referrer
    ORDER BY visits DESC
    LIMIT ${limit}
  `;

  return results.map((row: { referrer: string; visits: number }) => ({
    referrer: row.referrer,
    visits: Number(row.visits),
  }));
}

/**
 * Get user flow (page transitions)
 */
export async function getUserFlow(
  startDate: Date,
  endDate: Date,
  limit: number = 20
): Promise<UserFlow[]> {
  const results = await db`
    SELECT
      previous_path as from_path,
      path as to_path,
      COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND previous_path IS NOT NULL
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
    GROUP BY previous_path, path
    ORDER BY count DESC
    LIMIT ${limit}
  `;

  return results.map((row: { from_path: string; to_path: string; count: number }) => ({
    from_path: row.from_path,
    to_path: row.to_path,
    count: Number(row.count),
  }));
}

/**
 * Get recent events (for live dashboard)
 */
export async function getRecentEvents(limit: number = 50): Promise<Array<{
  id: number;
  session_id: string;
  event_type: string;
  path: string;
  referrer: string | null;
  created_at: Date;
}>> {
  return await db`
    SELECT id, session_id, event_type, path, referrer, created_at
    FROM analytics_events
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
}

/**
 * Get average session duration
 */
export async function getAverageSessionDuration(
  startDate: Date,
  endDate: Date
): Promise<number> {
  const [result] = await db`
    WITH session_durations AS (
      SELECT
        session_id,
        EXTRACT(EPOCH FROM (MAX(created_at) - MIN(created_at))) as duration_seconds
      FROM analytics_events
      WHERE event_type = 'page_view'
        AND created_at >= ${startDate}
        AND created_at < ${endDate}
      GROUP BY session_id
      HAVING COUNT(*) > 1
    )
    SELECT AVG(duration_seconds) as avg_duration
    FROM session_durations
  `;

  return Math.round(Number(result?.avg_duration) || 0);
}

/**
 * Get top languages
 */
export async function getTopLanguages(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<Array<{ language: string; count: number }>> {
  const results = await db`
    SELECT
      COALESCE(metadata->>'language', 'Unknown') as language,
      COUNT(DISTINCT session_id) as count
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
    GROUP BY metadata->>'language'
    ORDER BY count DESC
    LIMIT ${limit}
  `;

  return results.map((row: { language: string; count: number }) => ({
    language: row.language,
    count: Number(row.count),
  }));
}

/**
 * Get UTM campaign stats
 */
export async function getUTMStats(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<Array<{ source: string; medium: string; campaign: string; visits: number }>> {
  const results = await db`
    SELECT
      COALESCE(metadata->'utm'->>'utm_source', 'direct') as source,
      COALESCE(metadata->'utm'->>'utm_medium', 'none') as medium,
      COALESCE(metadata->'utm'->>'utm_campaign', 'none') as campaign,
      COUNT(DISTINCT session_id) as visits
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
      AND metadata->'utm' IS NOT NULL
    GROUP BY
      metadata->'utm'->>'utm_source',
      metadata->'utm'->>'utm_medium',
      metadata->'utm'->>'utm_campaign'
    ORDER BY visits DESC
    LIMIT ${limit}
  `;

  return results.map((row: { source: string; medium: string; campaign: string; visits: number }) => ({
    source: row.source,
    medium: row.medium,
    campaign: row.campaign,
    visits: Number(row.visits),
  }));
}

/**
 * Get top countries by visitors
 */
export async function getTopCountries(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<Array<{ country: string; countryCode: string; visitors: number }>> {
  const results = await db`
    SELECT
      COALESCE(metadata->'geo'->>'country', 'Unknown') as country,
      COALESCE(metadata->'geo'->>'countryCode', 'XX') as country_code,
      COUNT(DISTINCT session_id) as visitors
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
    GROUP BY metadata->'geo'->>'country', metadata->'geo'->>'countryCode'
    ORDER BY visitors DESC
    LIMIT ${limit}
  `;

  return results.map((row: { country: string; country_code: string; visitors: number }) => ({
    country: row.country,
    countryCode: row.country_code,
    visitors: Number(row.visitors),
  }));
}

/**
 * Get top cities by visitors
 */
export async function getTopCities(
  startDate: Date,
  endDate: Date,
  limit: number = 10
): Promise<Array<{ city: string; country: string; visitors: number }>> {
  const results = await db`
    SELECT
      COALESCE(metadata->'geo'->>'city', 'Unknown') as city,
      COALESCE(metadata->'geo'->>'country', 'Unknown') as country,
      COUNT(DISTINCT session_id) as visitors
    FROM analytics_events
    WHERE event_type = 'page_view'
      AND created_at >= ${startDate}
      AND created_at < ${endDate}
      AND metadata->'geo'->>'city' IS NOT NULL
    GROUP BY metadata->'geo'->>'city', metadata->'geo'->>'country'
    ORDER BY visitors DESC
    LIMIT ${limit}
  `;

  return results.map((row: { city: string; country: string; visitors: number }) => ({
    city: row.city,
    country: row.country,
    visitors: Number(row.visitors),
  }));
}
