import { AdminLayout } from "../../components/AdminLayout";
import type { Context } from "../../context";
import {
  getDashboardStats,
  getTopPages,
  getTopReferrers,
  getUserFlow,
  getAverageSessionDuration,
  getTopCountries,
  getTopCities,
  getTopLanguages,
  getTopBrowsers,
  getTopOS,
  getDeviceBreakdown,
  getBotStats,
  getRecentVisitors,
} from "../../analytics";

export const metadata = {
  title: "Analytics",
  description: "View site analytics and user journeys",
  fullPage: true,
};

// Date range helpers
function getDateRange(period: string): { start: Date; end: Date; label: string } {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  switch (period) {
    case "week":
      start.setDate(start.getDate() - 7);
      return { start, end, label: "Last 7 days" };
    case "month":
      start.setDate(start.getDate() - 30);
      return { start, end, label: "Last 30 days" };
    case "today":
    default:
      return { start, end, label: "Today" };
  }
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

// Country flag emoji from country code
function countryFlag(code: string): string {
  if (!code || code === "XX" || code.length !== 2) return "";
  const codePoints = code.toUpperCase().split("").map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Stat card component
function StatCard({ label, value, subtext }: { label: string; value: string; subtext?: string }): string {
  return (
    <div class="bg-white rounded-lg shadow p-6">
      <div class="text-sm font-medium text-gray-500 truncate">{label}</div>
      <div class="mt-1 text-3xl font-semibold text-gray-900">{value}</div>
      {subtext && <div class="mt-1 text-sm text-gray-500">{subtext}</div>}
    </div>
  );
}

// Simple list table component
function SimpleTable({ items, columns }: {
  items: Array<Record<string, unknown>>;
  columns: Array<{ key: string; label: string; align?: "left" | "right"; format?: (v: unknown, row: Record<string, unknown>) => string }>
}): string {
  if (items.length === 0) {
    return <p class="text-gray-500 text-sm py-4 text-center">No data yet</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th class={`px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${col.align === "right" ? "text-right" : "text-left"}`}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr>
              {columns.map((col) => (
                <td class={`px-4 py-3 whitespace-nowrap text-sm ${col.align === "right" ? "text-right text-gray-500" : "text-gray-900"}`}>
                  {col.format ? col.format(item[col.key], item) : String(item[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Card wrapper
function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: string }): string {
  return (
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">{title}</h2>
        {subtitle && <p class="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div class="p-4">{children}</div>
    </div>
  );
}

// Device breakdown bar chart
function DeviceChart({ devices }: { devices: Array<{ device: string; visitors: number; percentage: number }> }): string {
  const colors: Record<string, string> = {
    desktop: "bg-blue-500",
    mobile: "bg-green-500",
    tablet: "bg-yellow-500",
    unknown: "bg-gray-400",
  };

  const icons: Record<string, string> = {
    desktop: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    mobile: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    tablet: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    unknown: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  };

  if (devices.length === 0) {
    return <p class="text-gray-500 text-sm py-4 text-center">No data yet</p>;
  }

  return (
    <div class="space-y-4">
      {devices.map((d) => (
        <div>
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-2">
              <span class="text-gray-500" dangerouslySetInnerHTML={{ __html: icons[d.device] || icons.unknown }} />
              <span class="text-sm font-medium text-gray-900 capitalize">{d.device}</span>
            </div>
            <span class="text-sm text-gray-500">{formatNumber(d.visitors)} ({d.percentage}%)</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class={`${colors[d.device] || colors.unknown} h-2 rounded-full`} style={`width: ${d.percentage}%`}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Recent visitors live view
function RecentVisitorsTable({ visitors }: { visitors: Array<{
  session_id: string;
  path: string;
  ip_address: string | null;
  country: string | null;
  city: string | null;
  browser: string | null;
  os: string | null;
  device: string | null;
  referrer: string | null;
  created_at: Date;
}> }): string {
  if (visitors.length === 0) {
    return <p class="text-gray-500 text-sm py-4 text-center">No recent visitors</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 text-sm">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Page</th>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Browser / Device</th>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">IP</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {visitors.map((v) => (
            <tr class="hover:bg-gray-50">
              <td class="px-3 py-2 whitespace-nowrap text-gray-500">{timeAgo(v.created_at)}</td>
              <td class="px-3 py-2 whitespace-nowrap">
                {v.country && v.country !== "Unknown" ? (
                  <span title={`${v.city || ""}, ${v.country}`}>
                    {countryFlag(v.country)} {v.city || v.country}
                  </span>
                ) : (
                  <span class="text-gray-400">Unknown</span>
                )}
              </td>
              <td class="px-3 py-2 whitespace-nowrap">
                <a href={v.path} class="text-primary hover:underline truncate max-w-[200px] block">{v.path}</a>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-gray-500">
                {v.browser || "?"} / {v.os || "?"} / <span class="capitalize">{v.device || "?"}</span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap font-mono text-xs text-gray-400">{v.ip_address || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// User flow visualization
function UserFlowTable({ flows }: { flows: Array<{ from_path: string; to_path: string; count: number }> }): string {
  if (flows.length === 0) {
    return <p class="text-gray-500 text-sm">No user flow data yet (users need to visit multiple pages)</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
            <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
            <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {flows.map((flow) => (
            <tr>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{flow.from_path}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-400 text-center">
                <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{flow.to_path}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{formatNumber(flow.count)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Period selector
function PeriodSelector({ currentPeriod }: { currentPeriod: string }): string {
  const periods = [
    { value: "today", label: "Today" },
    { value: "week", label: "7 Days" },
    { value: "month", label: "30 Days" },
  ];

  return (
    <div class="flex gap-2">
      {periods.map((period) => (
        <a
          href={`/admin/analytics?period=${period.value}`}
          class={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            currentPeriod === period.value
              ? "bg-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
          }`}
        >
          {period.label}
        </a>
      ))}
    </div>
  );
}

type PageParams = {
  period?: string;
  ctx?: Context;
  path?: string;
  devMode?: boolean;
};

export default async function AnalyticsDashboard(params: PageParams): Promise<string> {
  if (!params.ctx) {
    throw new Error("Context is required for analytics dashboard");
  }
  const ctx = params.ctx;

  // Get period from URL params (default to today)
  const period = params.period || "today";
  const { start, end, label } = getDateRange(period);
  const currentPath = params.path || "/admin/analytics";

  // Fetch all data in parallel
  const [
    stats,
    topPages,
    referrers,
    userFlow,
    avgDuration,
    countries,
    cities,
    languages,
    browsers,
    operatingSystems,
    devices,
    botStats,
    recentVisitors,
  ] = await Promise.all([
    getDashboardStats(ctx, start, end),
    getTopPages(ctx, start, end, 10),
    getTopReferrers(ctx, start, end, 10),
    getUserFlow(ctx, start, end, 15),
    getAverageSessionDuration(ctx, start, end),
    getTopCountries(ctx, start, end, 10),
    getTopCities(ctx, start, end, 10),
    getTopLanguages(ctx, start, end, 10),
    getTopBrowsers(ctx, start, end, 10),
    getTopOS(ctx, start, end, 10),
    getDeviceBreakdown(ctx, start, end),
    getBotStats(ctx, start, end, 5),
    getRecentVisitors(ctx, 15),
  ]);

  const content = (
    <div>
      {/* Header */}
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Analytics</h1>
          <p class="text-gray-500 mt-1">{label}</p>
        </div>
        <PeriodSelector currentPeriod={period} />
      </div>

      {/* Stats Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard label="Page Views" value={formatNumber(stats.totalPageViews)} />
        <StatCard label="Unique Visitors" value={formatNumber(stats.uniqueVisitors)} />
        <StatCard label="Logged-in Users" value={formatNumber(stats.uniqueUsers)} />
        <StatCard label="Bounce Rate" value={`${stats.bounceRate}%`} subtext={`Avg: ${formatDuration(avgDuration)}`} />
        <StatCard label="Bot Hits" value={formatNumber(botStats.totalBotHits)} subtext="Filtered from stats" />
      </div>

      {/* Recent Visitors (Live View) */}
      <div class="mb-8">
        <Card title="Recent Visitors" subtitle="Live view of recent site visitors">
          <RecentVisitorsTable visitors={recentVisitors} />
        </Card>
      </div>

      {/* Two Column Layout - Pages & Sources */}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card title="Top Pages">
          <SimpleTable
            items={topPages as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "path", label: "Page", format: (v) => `<a href="${v}" class="text-primary hover:underline">${v}</a>` },
              { key: "views", label: "Views", align: "right", format: (v) => formatNumber(v as number) },
              { key: "uniqueVisitors", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>

        <Card title="Traffic Sources">
          <SimpleTable
            items={referrers as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "referrer", label: "Source", format: (v) => {
                const ref = v as string;
                if (ref === "Direct") return '<span class="text-gray-500">Direct / None</span>';
                try { return new URL(ref).hostname; } catch { return ref; }
              }},
              { key: "visits", label: "Visits", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>
      </div>

      {/* Three Column Layout - Geo */}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card title="Countries">
          <SimpleTable
            items={countries as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "country", label: "Country", format: (v, row) => `${countryFlag(row.countryCode as string)} ${v}` },
              { key: "visitors", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>

        <Card title="Cities">
          <SimpleTable
            items={cities as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "city", label: "City", format: (v, row) => `${v}, ${row.country}` },
              { key: "visitors", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>

        <Card title="Languages">
          <SimpleTable
            items={languages as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "language", label: "Language" },
              { key: "count", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>
      </div>

      {/* Three Column Layout - Tech */}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card title="Browsers">
          <SimpleTable
            items={browsers as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "browser", label: "Browser" },
              { key: "visitors", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>

        <Card title="Operating Systems">
          <SimpleTable
            items={operatingSystems as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "os", label: "OS" },
              { key: "visitors", label: "Visitors", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>

        <Card title="Devices">
          <DeviceChart devices={devices} />
        </Card>
      </div>

      {/* User Flow */}
      <div class="mb-8">
        <Card title="User Journey" subtitle="How visitors navigate between pages">
          <UserFlowTable flows={userFlow} />
        </Card>
      </div>

      {/* Bot Stats */}
      {botStats.topBots.length > 0 && (
        <Card title="Bot Traffic" subtitle="Search engine and social media crawlers">
          <SimpleTable
            items={botStats.topBots as unknown as Array<Record<string, unknown>>}
            columns={[
              { key: "bot", label: "Bot" },
              { key: "hits", label: "Hits", align: "right", format: (v) => formatNumber(v as number) },
            ]}
          />
        </Card>
      )}
    </div>
  );

  return AdminLayout({
    title: "Analytics",
    description: "View site analytics and user journeys",
    currentPath,
    children: content,
    ctx: params.ctx,
    devMode: params.devMode,
  });
}
