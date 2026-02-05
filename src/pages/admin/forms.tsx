import { AdminLayout } from "../../components/AdminLayout";
import type { Context } from "../../context";

export const metadata = {
  title: "Form Submissions",
  description: "View and manage form submissions",
  fullPage: true,
};

type FormSubmission = {
  id: number;
  form_type: string;
  email: string | null;
  name: string | null;
  company: string | null;
  data: Record<string, unknown>;
  ip_address: string | null;
  user_agent: string | null;
  referrer: string | null;
  session_id: string | null;
  user_id: number | null;
  created_at: Date;
  username?: string | null;
};

type PageParams = {
  ctx?: Context;
  type?: string;
};

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString();
}

function FormTypeBadge({ type }: { type: string }): string {
  const colors: Record<string, string> = {
    contact: "bg-blue-100 text-blue-800",
    subscribe: "bg-green-100 text-green-800",
    demo: "bg-purple-100 text-purple-800",
    quote: "bg-yellow-100 text-yellow-800",
  };
  const colorClass = colors[type] || "bg-gray-100 text-gray-800";
  return (
    <span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colorClass}`}>
      {type}
    </span>
  );
}

function SubmissionsTable({ submissions }: { submissions: FormSubmission[] }): string {
  if (submissions.length === 0) {
    return (
      <div class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div class="mt-2 text-sm font-semibold text-gray-900">No submissions</div>
        <p class="mt-1 text-sm text-gray-500">No form submissions yet.</p>
      </div>
    );
  }

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {submissions.map((s) => (
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-4 whitespace-nowrap">
                {FormTypeBadge({ type: s.form_type })}
              </td>
              <td class="px-4 py-4">
                <div class="text-sm font-medium text-gray-900">{s.name || "-"}</div>
                <div class="text-sm text-gray-500">{s.email || "-"}</div>
                {s.data.phone && <div class="text-sm text-gray-400">{String(s.data.phone)}</div>}
              </td>
              <td class="px-4 py-4">
                <div class="text-sm text-gray-900 max-w-xs truncate" title={String(s.data.message || "")}>
                  {s.data.message ? String(s.data.message).substring(0, 100) + (String(s.data.message).length > 100 ? "..." : "") : "-"}
                </div>
                {s.data.page && <div class="text-xs text-gray-400">{String(s.data.page)}</div>}
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                {s.user_id ? (
                  <span class="inline-flex items-center gap-1 text-sm text-green-600">
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                    {s.username || `#${s.user_id}`}
                  </span>
                ) : (
                  <span class="text-sm text-gray-400">Anonymous</span>
                )}
              </td>
              <td class="px-4 py-4">
                {s.referrer ? (
                  <div class="text-xs text-gray-500 max-w-[150px] truncate" title={s.referrer}>
                    {new URL(s.referrer).pathname}
                  </div>
                ) : (
                  <span class="text-gray-400">-</span>
                )}
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {timeAgo(s.created_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

async function getFormSubmissions(ctx: Context, type?: string): Promise<FormSubmission[]> {
  if (type && type !== "all") {
    return await ctx.db`
      SELECT fs.*, u.username
      FROM form_submissions fs
      LEFT JOIN users u ON fs.user_id = u.id
      WHERE fs.form_type = ${type}
      ORDER BY fs.created_at DESC
      LIMIT 100
    `;
  }
  return await ctx.db`
    SELECT fs.*, u.username
    FROM form_submissions fs
    LEFT JOIN users u ON fs.user_id = u.id
    ORDER BY fs.created_at DESC
    LIMIT 100
  `;
}

async function getFormStats(ctx: Context): Promise<{ type: string; count: number }[]> {
  return await ctx.db`
    SELECT form_type as type, COUNT(*)::int as count
    FROM form_submissions
    GROUP BY form_type
    ORDER BY count DESC
  `;
}

export default async function FormsPage({ ctx, type }: PageParams = {}): Promise<string> {
  const user = ctx?.user;

  if (!user) {
    return `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/login?redirect=/admin/forms" /></head><body>Redirecting...</body></html>`;
  }

  if (!ctx) {
    throw new Error("Context is required for admin forms");
  }

  const [submissions, stats] = await Promise.all([
    getFormSubmissions(ctx, type),
    getFormStats(ctx),
  ]);

  const totalCount = stats.reduce((sum, s) => sum + s.count, 0);

  const content = (
    <div class="space-y-6">
      {/* Header */}
      <div class="sm:flex sm:items-center sm:justify-between">
        <div>
          <div class="text-2xl font-bold text-gray-900">Form Submissions</div>
          <p class="mt-1 text-sm text-gray-500">
            {totalCount} total submission{totalCount !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8">
          <a
            href="/admin/forms"
            class={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              !type || type === "all"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            All
            <span class="ml-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {totalCount}
            </span>
          </a>
          {stats.map((s) => (
            <a
              href={`/admin/forms?type=${s.type}`}
              class={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                type === s.type
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {s.type.charAt(0).toUpperCase() + s.type.slice(1)}
              <span class="ml-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                {s.count}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Table */}
      <div class="bg-white shadow rounded-lg overflow-hidden">
        {SubmissionsTable({ submissions })}
      </div>
    </div>
  );

  return AdminLayout({
    title: "Form Submissions",
    description: "View and manage form submissions",
    children: content,
    ctx,
    currentPath: "/admin/forms",
  });
}
