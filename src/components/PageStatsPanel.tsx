import type { Context } from "../context";

interface PageStats {
  totalViews: number;
  uniqueVisitors: number;
  todayViews: number;
}

interface PageEvent {
  id: number;
  event_type: string;
  session_id: string;
  referrer: string | null;
  metadata: Record<string, unknown> | null;
  created_at: Date;
}

async function getPageStats(ctx: Context, path: string): Promise<PageStats> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [result] = await ctx.db`
    SELECT
      COUNT(*) as total_views,
      COUNT(DISTINCT session_id) as unique_visitors,
      COUNT(*) FILTER (WHERE created_at >= ${today}) as today_views
    FROM analytics_events
    WHERE path = ${path}
      AND event_type = 'page_view'
  `;

  return {
    totalViews: Number(result?.total_views) || 0,
    uniqueVisitors: Number(result?.unique_visitors) || 0,
    todayViews: Number(result?.today_views) || 0,
  };
}

async function getPageEvents(ctx: Context, path: string, limit: number = 20): Promise<PageEvent[]> {
  return await ctx.db`
    SELECT id, event_type, session_id, referrer, metadata, created_at
    FROM analytics_events
    WHERE path = ${path}
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function formatMetadata(metadata: Record<string, unknown> | null): string {
  if (!metadata) return "";

  // Filter out verbose fields for compact display
  const { browser, os, geo, isBot, ...rest } = metadata as Record<string, unknown>;

  const parts: string[] = [];

  if (rest.label) parts.push(`label: ${rest.label}`);
  if (rest.category) parts.push(`cat: ${rest.category}`);
  if (rest.element) parts.push(`el: ${rest.element}`);

  // Add remaining fields
  for (const [key, value] of Object.entries(rest)) {
    if (!["label", "category", "element", "elementId", "device", "language"].includes(key)) {
      parts.push(`${key}: ${JSON.stringify(value)}`);
    }
  }

  return parts.join(", ");
}

export type PageStatsPanelProps = {
  path: string;
  ctx: Context;
};

export async function PageStatsPanel({ path, ctx }: PageStatsPanelProps): Promise<string> {
  // Only show for @health-samurai.io users
  if (!ctx?.user?.email?.endsWith("@health-samurai.io")) {
    return "";
  }

  const [stats, events] = await Promise.all([
    getPageStats(ctx, path),
    getPageEvents(ctx, path, 30),
  ]);

  const pageViewEvents = events.filter(e => e.event_type === "page_view");
  const clickEvents = events.filter(e => e.event_type === "click");
  const otherEvents = events.filter(e => !["page_view", "click"].includes(e.event_type));

  return (
    <div
      class="border-t-4 border-primary bg-gray-900 text-gray-100"
      data-signals="{statsOpen: false}"
    >
      {/* Toggle Header */}
      <button
        class="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
        data-on:click="$statsOpen = !$statsOpen"
      >
        <div class="flex items-center gap-4 text-sm">
          <span class="font-mono text-primary">{path}</span>
          <span class="text-gray-400">|</span>
          <span>{stats.totalViews} views</span>
          <span class="text-gray-400">|</span>
          <span>{stats.uniqueVisitors} visitors</span>
          <span class="text-gray-400">|</span>
          <span>{stats.todayViews} today</span>
          <span class="text-gray-400">|</span>
          <span>{events.length} events</span>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-400">
          <span>Admin Panel</span>
          <svg
            class="w-4 h-4 transition-transform"
            data-class="{'rotate-180': $statsOpen}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Collapsible Content */}
      <div
        data-show="$statsOpen"
        style="display: none"
        class="border-t border-gray-700"
      >
        <div class="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {/* Page Views */}
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase mb-2">
              Recent Page Views ({pageViewEvents.length})
            </div>
            <div class="space-y-1 text-xs font-mono">
              {pageViewEvents.length === 0 ? (
                <p class="text-gray-500">No page views yet</p>
              ) : (
                pageViewEvents.slice(0, 10).map((e) => (
                  <div class="flex justify-between text-gray-300">
                    <span class="truncate max-w-[200px]" title={e.session_id}>
                      {e.session_id.slice(0, 8)}...
                    </span>
                    <span class="text-gray-500">{timeAgo(e.created_at)}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Click Events */}
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase mb-2">
              Click Events ({clickEvents.length})
            </div>
            <div class="space-y-1 text-xs font-mono">
              {clickEvents.length === 0 ? (
                <p class="text-gray-500">No click events yet</p>
              ) : (
                clickEvents.slice(0, 10).map((e) => (
                  <div class="text-gray-300">
                    <div class="flex justify-between">
                      <span class="text-primary truncate max-w-[180px]">
                        {(e.metadata as Record<string, unknown>)?.label || "click"}
                      </span>
                      <span class="text-gray-500">{timeAgo(e.created_at)}</span>
                    </div>
                    {e.metadata && (
                      <div class="text-gray-500 truncate text-[10px]">
                        {formatMetadata(e.metadata)}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Other Events */}
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase mb-2">
              Other Events ({otherEvents.length})
            </div>
            <div class="space-y-1 text-xs font-mono">
              {otherEvents.length === 0 ? (
                <p class="text-gray-500">No other events yet</p>
              ) : (
                otherEvents.slice(0, 10).map((e) => (
                  <div class="text-gray-300">
                    <div class="flex justify-between">
                      <span class="text-yellow-400">{e.event_type}</span>
                      <span class="text-gray-500">{timeAgo(e.created_at)}</span>
                    </div>
                    {e.metadata && (
                      <div class="text-gray-500 truncate text-[10px]">
                        {formatMetadata(e.metadata)}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div class="px-4 py-2 border-t border-gray-700 flex gap-4 text-xs">
          <a href="/admin/analytics" class="text-primary hover:underline">
            Full Analytics Dashboard
          </a>
          <a href={`/admin/analytics?path=${encodeURIComponent(path)}`} class="text-primary hover:underline">
            Filter by this page
          </a>
        </div>
      </div>
    </div>
  );
}
