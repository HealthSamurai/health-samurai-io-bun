import { AdminLayout } from "../../components/AdminLayout";
import type { Context } from "../../context";
import {
  getDashboardStats,
  getTopPages,
  getTopReferrers,
  getUserFlow,
  getAverageSessionDuration,
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

// Table component for top pages
function TopPagesTable({ pages }: { pages: Array<{ path: string; views: number; uniqueVisitors: number }> }): string {
  if (pages.length === 0) {
    return <p class="text-gray-500 text-sm">No page views yet</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
            <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
            <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {pages.map((page) => (
            <tr>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                <a href={page.path} class="text-primary hover:underline">{page.path}</a>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{formatNumber(page.views)}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{formatNumber(page.uniqueVisitors)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Table component for referrers
function ReferrersTable({ referrers }: { referrers: Array<{ referrer: string; visits: number }> }): string {
  if (referrers.length === 0) {
    return <p class="text-gray-500 text-sm">No referrer data yet</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
            <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {referrers.map((ref) => {
            let hostname = "Direct / None";
            if (ref.referrer !== "Direct") {
              try {
                hostname = new URL(ref.referrer).hostname;
              } catch {
                hostname = ref.referrer;
              }
            }
            return (
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 truncate max-w-xs">
                  {ref.referrer === "Direct" ? (
                    <span class="text-gray-500">{hostname}</span>
                  ) : (
                    <span title={ref.referrer}>{hostname}</span>
                  )}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{formatNumber(ref.visits)}</td>
              </tr>
            );
          })}
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
  // Get period from URL params (default to today)
  const period = params.period || "today";
  const { start, end, label } = getDateRange(period);
  const currentPath = params.path || "/admin/analytics";

  // Fetch all data in parallel
  const [stats, topPages, referrers, userFlow, avgDuration] = await Promise.all([
    getDashboardStats(start, end),
    getTopPages(start, end, 10),
    getTopReferrers(start, end, 10),
    getUserFlow(start, end, 15),
    getAverageSessionDuration(start, end),
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Page Views"
          value={formatNumber(stats.totalPageViews)}
        />
        <StatCard
          label="Unique Visitors"
          value={formatNumber(stats.uniqueVisitors)}
        />
        <StatCard
          label="Logged-in Users"
          value={formatNumber(stats.uniqueUsers)}
        />
        <StatCard
          label="Bounce Rate"
          value={`${stats.bounceRate}%`}
          subtext={`Avg. session: ${formatDuration(avgDuration)}`}
        />
      </div>

      {/* Two Column Layout */}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Pages */}
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Top Pages</h2>
          </div>
          <div class="p-4">
            <TopPagesTable pages={topPages} />
          </div>
        </div>

        {/* Top Referrers */}
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Traffic Sources</h2>
          </div>
          <div class="p-4">
            <ReferrersTable referrers={referrers} />
          </div>
        </div>
      </div>

      {/* User Flow */}
      <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">User Journey</h2>
          <p class="text-sm text-gray-500 mt-1">How visitors navigate between pages</p>
        </div>
        <div class="p-4">
          <UserFlowTable flows={userFlow} />
        </div>
      </div>
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
