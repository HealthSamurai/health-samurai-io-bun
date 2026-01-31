# Analytics Specification

Self-hosted analytics system for tracking page views, user journeys, and site traffic.

## Overview

Built-in privacy-focused analytics without third-party dependencies. Stores data in PostgreSQL with real-time dashboard for authenticated admins.

**Key Files:**
- `src/analytics.ts` - Core tracking logic and query functions
- `src/pages/admin/analytics.tsx` - Dashboard UI
- `migrations/20260131T180000-analytics.up.sql` - Database schema
- `migrations/20260131T181000-add-raw-ip-to-analytics.up.sql` - Raw IP column

## Database Schema

### `analytics_events` table

Primary event storage with flexible metadata.

```sql
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  session_id TEXT NOT NULL,              -- Anonymous UUID session
  user_id INTEGER REFERENCES users(id),  -- NULL for anonymous visitors
  event_type TEXT NOT NULL,              -- 'page_view', 'click', 'form_submit', 'search'
  path TEXT,                             -- URL path
  referrer TEXT,                         -- External referrer URL
  previous_path TEXT,                    -- Internal navigation (journey tracking)
  user_agent TEXT,                       -- Raw UA string
  ip_hash TEXT,                          -- SHA-256 truncated hash (privacy)
  ip_address TEXT,                       -- Raw IP (admin geo analysis)
  metadata JSONB,                        -- Flexible event data
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Indexes:**
- `idx_events_session` on `session_id`
- `idx_events_created` on `created_at`
- `idx_events_path` on `path`
- `idx_events_type` on `event_type`
- `idx_events_ip` on `ip_address`

### `analytics_daily` table

Pre-aggregated daily stats for fast dashboard queries (not yet implemented).

```sql
CREATE TABLE analytics_daily (
  date DATE NOT NULL,
  path TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  unique_sessions INTEGER DEFAULT 0,
  unique_users INTEGER DEFAULT 0,
  PRIMARY KEY (date, path)
);
```

## Metadata Structure

The `metadata` JSONB column stores structured event data:

```typescript
interface EventMetadata {
  // Browser info (from user agent parsing)
  browser?: {
    name: string;     // "Chrome", "Firefox", "Safari", etc.
    version: string;  // "120.0.6099"
  };

  // Operating system
  os?: {
    name: string;     // "Windows", "macOS", "iOS", "Android", "Linux"
    version: string;  // "10/11", "14.2", etc.
  };

  // Device type
  device?: "desktop" | "mobile" | "tablet" | "bot" | "unknown";
  isBot?: boolean;

  // Geolocation (from ip-api.com)
  geo?: {
    country: string;      // "United States"
    countryCode: string;  // "US"
    city: string;         // "San Francisco"
    region: string;       // "California"
  };

  // User's preferred language
  language?: string;  // "en-US", "ru", etc.

  // UTM campaign parameters
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };

  // Screen dimensions (if provided by client)
  screen?: {
    width: number;
    height: number;
  };
}
```

## Session Management

### Configuration

```typescript
const SESSION_COOKIE_NAME = "_hs_sid";
const SESSION_DURATION = 30 * 60 * 1000;  // 30 minutes sliding window
```

### Cookie

```
_hs_sid=<uuid>; HttpOnly; Path=/; Max-Age=1800; SameSite=Lax; Secure
```

- `HttpOnly` prevents JavaScript access
- `SameSite=Lax` prevents CSRF
- `Secure` flag added in production only
- 30-minute sliding expiration

### Functions

```typescript
// Get or create session ID from request
getAnalyticsSessionId(req: Request): string

// Create Set-Cookie header value
createAnalyticsCookie(sessionId: string): string

// Track previous path for journey (in-memory cache)
getAndSetPreviousPath(sessionId: string, currentPath: string): string | undefined
```

## IP Handling

### Privacy

IP addresses are hashed using SHA-256 with salt for privacy-preserving unique visitor counts:

```typescript
function hashIP(ip: string): string {
  const hash = new Bun.CryptoHasher("sha256");
  hash.update(`hs_analytics_${ip}_salt_v1`);
  return hash.digest("hex").substring(0, 16);  // Truncated for storage
}
```

### Geolocation

Uses [ip-api.com](http://ip-api.com) free tier (45 requests/minute):

```typescript
const GEO_CACHE_TTL = 24 * 60 * 60 * 1000;  // 24 hours
const GEO_CACHE_MAX_SIZE = 10000;

// Skips private/local IPs
// Returns: { country, countryCode, city, region } or null
lookupGeoLocation(ip: string): Promise<GeoLocation | null>
```

### Client IP Extraction

Checks headers in order:
1. `X-Forwarded-For` (first IP in list)
2. `X-Real-IP`
3. Falls back to "unknown"

## User Agent Parsing

Detects browsers, operating systems, device types, and bots.

### Supported Browsers
Chrome, Firefox, Safari, Edge, Opera, IE

### Supported Operating Systems
Windows, macOS, iOS, Android, Linux, ChromeOS

### Device Types
- `desktop` - Traditional computers
- `mobile` - Phones
- `tablet` - Tablets
- `bot` - Search engines and crawlers
- `unknown` - Unidentified

### Bot Detection

Identifies crawlers from: Google, Bing, Yandex, Baidu, DuckDuckGo, Facebook, Twitter, LinkedIn, Pinterest, WhatsApp, Telegram, Slack

## Declarative Client Tracking

Use data attributes to track clicks, form submissions, and input changes without writing JavaScript.

**Script:** `public/assets/js/analytics.js` (auto-loaded in Layout)

### Click Tracking

```html
<!-- Basic click tracking -->
<button data-track="click" data-track-label="Sign Up">
  Sign Up
</button>

<!-- With category and extra data -->
<a href="/pricing"
   data-track="click"
   data-track-label="View Pricing"
   data-track-category="nav"
   data-track-position="header">
  Pricing
</a>

<!-- CTA button with value -->
<button data-track="click"
        data-track-label="Start Trial"
        data-track-category="cta"
        data-track-plan="pro"
        data-track-value="49">
  Start Free Trial
</button>
```

### Form Tracking

```html
<form action="/api/contact"
      method="POST"
      data-track="submit"
      data-track-label="Contact Form"
      data-track-category="lead">
  ...
</form>
```

### Input Change Tracking

```html
<select data-track="change"
        data-track-label="Plan Selection"
        data-track-category="pricing">
  <option value="starter">Starter</option>
  <option value="pro">Pro</option>
</select>
```

### Attributes Reference

| Attribute | Description |
|-----------|-------------|
| `data-track="click"` | Enable click tracking |
| `data-track="submit"` | Enable form submit tracking |
| `data-track="change"` | Enable input change tracking |
| `data-track-label="..."` | Human-readable label (defaults to innerText) |
| `data-track-category="..."` | Category grouping (cta, nav, footer, etc.) |
| `data-track-value="..."` | Numeric value (price, quantity) |
| `data-track-*="..."` | Any custom data becomes metadata |

### Programmatic API

For cases where you need JavaScript:

```javascript
// Global function available after script loads
hsTrack('custom_event', 'Event Label', {
  category: 'interaction',
  customField: 'value',
});
```

### How It Works

1. Uses event delegation on `document` for efficiency
2. Sends events via `navigator.sendBeacon()` (doesn't block navigation)
3. Falls back to `fetch()` with `keepalive: true`
4. Silently fails - never breaks the page

## Tracking API

### Server-side (automatic)

Every page request in `src/server.ts` calls:

```typescript
// In request handler
const analyticsSessionId = getAnalyticsSessionId(req);
const previousPath = getAndSetPreviousPath(analyticsSessionId, url.pathname);

trackPageView(req, analyticsSessionId, userId, previousPath).catch(console.error);

// Response includes Set-Cookie header
headers["Set-Cookie"] = createAnalyticsCookie(analyticsSessionId);
```

### Client-side (optional)

```typescript
POST /api/analytics/event
Content-Type: application/json

{
  "eventType": "click" | "form_submit" | "search" | "custom",
  "path": "/current/path",
  "metadata": { ... }
}
```

### User Linking

When a user logs in, link their anonymous session to their user ID:

```typescript
// Call after successful authentication
linkSessionToUser(analyticsSessionId: string, userId: number): Promise<number>
```

## Dashboard Queries

All query functions accept `(startDate: Date, endDate: Date, limit?: number)`.

| Function | Returns |
|----------|---------|
| `getDashboardStats()` | Total views, unique visitors, unique users, bounce rate |
| `getTopPages()` | Pages ranked by views with unique visitor counts |
| `getTopReferrers()` | Traffic sources (external referrers) |
| `getUserFlow()` | Page transitions (from_path → to_path) |
| `getAverageSessionDuration()` | Avg session length in seconds |
| `getTopLanguages()` | Visitor languages from Accept-Language |
| `getUTMStats()` | UTM campaign performance |
| `getTopCountries()` | Countries with visitor counts |
| `getTopCities()` | Cities with visitor counts |
| `getTopBrowsers()` | Browser market share (excludes bots) |
| `getTopOS()` | OS distribution (excludes bots) |
| `getDeviceBreakdown()` | Desktop/mobile/tablet percentages |
| `getBotStats()` | Bot traffic with top crawlers |
| `getRecentVisitors()` | Live feed with full details |

## Dashboard UI

Available at `/admin/analytics` for authenticated `@health-samurai.io` users.

### Features

1. **Overview Stats** - Page views, unique visitors, logged-in users, bounce rate, bot hits
2. **Time Period Selector** - Today, 7 days, 30 days
3. **Recent Visitors** - Live table with time, location (flag + city), page, browser/device, IP
4. **Top Pages** - Most visited paths with view/visitor counts
5. **Traffic Sources** - Top referrers (hostname extracted)
6. **Geographic** - Countries, cities, languages (3-column grid)
7. **Technology** - Browsers, operating systems, device breakdown chart
8. **User Journey** - Page transition flows (from → to with counts)
9. **Bot Traffic** - Crawler identification (when present)

### Components

```tsx
<StatCard label="Page Views" value="1.2k" subtext="optional" />
<SimpleTable items={[...]} columns={[...]} />
<DeviceChart devices={[{ device, visitors, percentage }]} />
<RecentVisitorsTable visitors={[...]} />
<UserFlowTable flows={[{ from_path, to_path, count }]} />
<PeriodSelector currentPeriod="today" />
```

## Internal User Exclusion

All `@health-samurai.io` users are excluded from analytics tracking to keep stats clean.

**Helper:** `src/lib/auth-helpers.ts`

```typescript
import { isSamurai } from "../lib/auth-helpers";

if (!isSamurai(user)) {
  trackPageView(req, sessionId, userId, previousPath);
}
```

### Exclusion Points

| Layer | File | Mechanism |
|-------|------|-----------|
| Server page views | `src/server.ts` | Skip `trackPageView()` for internal users |
| Server event API | `src/server.ts` | Return `{ ok: true, skipped: true }` early |
| Client tracking | `public/assets/js/analytics.js` | Check `data-no-track` attribute on body |
| Body attribute | `src/components/Layout.tsx` | Add `data-no-track="true"` for internal users |

### Client-side Detection

Layout adds `data-no-track` attribute for internal users:

```html
<body data-no-track="true">
```

The analytics.js script checks this before sending any events:

```javascript
function isTrackingDisabled() {
  return document.body?.hasAttribute('data-no-track');
}
```

## Privacy Considerations

1. **No cookies for tracking across sites** - Session cookie is first-party only
2. **IP hashing** - Raw IPs can be disabled; hashed IPs prevent identification
3. **Bot filtering** - Crawler traffic excluded from visitor stats
4. **Anonymous by default** - No personal data collected without login
5. **User control** - Session linking only happens on explicit login
6. **Local geolocation** - No third-party analytics scripts
7. **Internal user exclusion** - @health-samurai.io users excluded from all tracking

## Performance

1. **Non-blocking tracking** - `trackPageView()` runs asynchronously with `.catch()`
2. **In-memory caches** - Session paths and geo lookups avoid DB/API calls
3. **Indexed queries** - All dashboard queries use appropriate indexes
4. **Parallel data fetching** - Dashboard loads all stats via `Promise.all()`
5. **Cache cleanup** - Periodic interval removes stale session cache entries

## Page Stats Panel (Admin)

A collapsible panel shown at the bottom of every page for `@health-samurai.io` users.

**File:** `src/components/PageStatsPanel.tsx`

### Features

- **Summary bar** (always visible): Page path, total views, unique visitors, today's views, event count
- **Expandable panel** with three columns:
  - Recent page views (session IDs, timestamps)
  - Click events (labels, metadata)
  - Other events (form submits, custom events)
- **Quick links** to full analytics dashboard

### Implementation

```tsx
// In Layout.tsx
{path && <div dangerouslySetInnerHTML={{ __html: await PageStatsPanel({ path, ctx }) }} />}
```

The panel only renders if:
1. `path` prop is provided to Layout
2. User is logged in with `@health-samurai.io` email

### UI

```
┌─────────────────────────────────────────────────────────────────────┐
│ /aidbox  |  234 views  |  89 visitors  |  12 today  |  45 events  ▼ │
├─────────────────────────────────────────────────────────────────────┤
│ Recent Page Views (10)  │  Click Events (8)    │  Other Events (2)  │
│ a1b2c3d4... 2m ago      │  Monthly (pricing)   │  form_submit 1h    │
│ e5f6g7h8... 5m ago      │  Get started - Team  │                    │
│ ...                     │  ...                 │                    │
├─────────────────────────────────────────────────────────────────────┤
│ Full Analytics Dashboard    Filter by this page                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Future Improvements

- [ ] Implement `analytics_daily` aggregation for faster historical queries
- [ ] Add real-time WebSocket updates to dashboard
- [ ] Export functionality (CSV/JSON)
- [ ] Custom date range picker
- [ ] Page-specific drill-down views
- [ ] Conversion funnel tracking
- [ ] A/B test tracking
