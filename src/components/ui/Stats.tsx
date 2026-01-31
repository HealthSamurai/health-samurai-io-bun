/**
 * Stats Component
 * Display key metrics and KPIs
 *
 * @example
 * // Simple stats
 * <Stats stats={[
 *   { label: "Revenue", value: "$405,091.00" },
 *   { label: "Users", value: "8,234" },
 * ]} />
 *
 * // With change indicator
 * <Stat label="Revenue" value="$405K" change="+4.75%" changeType="increase" />
 *
 * // With icon
 * <Stat label="Users" value="8,234" icon="users" />
 */

export type StatChangeType = "increase" | "decrease" | "neutral";

export type StatProps = {
  /** Metric label */
  label: string;
  /** Metric value */
  value: string;
  /** Optional change percentage */
  change?: string;
  /** Change type for styling */
  changeType?: StatChangeType;
  /** Optional icon name */
  icon?: "users" | "currency" | "chart" | "clock" | "document" | "check";
  /** Optional link */
  href?: string;
  /** Additional CSS classes */
  className?: string;
};

export type StatsProps = {
  /** Array of stats to display */
  stats: StatProps[];
  /** Layout variant */
  variant?: "simple" | "cards" | "divided";
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Additional CSS classes */
  className?: string;
};

// Icon SVGs
const icons: Record<string, string> = {
  users: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>`,
  currency: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>`,
  chart: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>`,
  clock: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>`,
  document: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>`,
  check: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>`,
};

// Trend arrow SVGs
const trendArrows = {
  increase: `<svg class="size-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clip-rule="evenodd" />
  </svg>`,
  decrease: `<svg class="size-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
  </svg>`,
  neutral: `<svg class="size-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
  </svg>`,
};

// Change color classes
const changeColors: Record<StatChangeType, string> = {
  increase: "text-green-600",
  decrease: "text-red-600",
  neutral: "text-gray-500",
};

// Single stat card
export function Stat({
  label,
  value,
  change,
  changeType = "neutral",
  icon,
  href,
  className = "",
}: StatProps): string {
  const content = `
    <div class="flex items-center ${icon ? "gap-4" : ""}">
      ${icon ? `<div class="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">${icons[icon]}</div>` : ""}
      <div>
        <dt class="text-sm font-medium text-gray-500">${label}</dt>
        <dd class="mt-1 flex items-baseline gap-2">
          <span class="text-2xl font-semibold tracking-tight text-gray-900">${value}</span>
          ${change ? `
            <span class="flex items-center gap-0.5 text-sm font-medium ${changeColors[changeType]}">
              ${trendArrows[changeType]}
              ${change}
            </span>
          ` : ""}
        </dd>
      </div>
    </div>
  `;

  if (href) {
    return `<a href="${href}" class="block p-6 rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors ${className}">${content}</a>`;
  }

  return `<div class="p-6 rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5 ${className}">${content}</div>`;
}

// Stats grid
export function Stats({
  stats,
  variant = "cards",
  columns = 4,
  className = "",
}: StatsProps): string {
  const colClasses: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  if (variant === "simple") {
    // Simple inline stats
    return `
      <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 ${colClasses[columns]} ${className}">
        ${stats.map(stat => `
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
            <dt class="text-sm/6 font-medium text-gray-500">${stat.label}</dt>
            ${stat.change ? `<dd class="text-xs font-medium ${changeColors[stat.changeType ?? "neutral"]}">${stat.change}</dd>` : ""}
            <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">${stat.value}</dd>
          </div>
        `).join("")}
      </dl>
    `;
  }

  if (variant === "divided") {
    // Stats with dividers
    return `
      <dl class="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-${columns} md:divide-x md:divide-y-0 ${className}">
        ${stats.map(stat => `
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500">${stat.label}</dt>
            <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
              <span class="text-2xl font-semibold tracking-tight text-gray-900">${stat.value}</span>
              ${stat.change ? `
                <span class="inline-flex items-center gap-0.5 rounded-full px-2.5 py-0.5 text-sm font-medium ${stat.changeType === "increase" ? "bg-green-100 text-green-800" : stat.changeType === "decrease" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}">
                  ${trendArrows[stat.changeType ?? "neutral"]}
                  ${stat.change}
                </span>
              ` : ""}
            </dd>
          </div>
        `).join("")}
      </dl>
    `;
  }

  // Cards variant (default)
  return `
    <div class="grid grid-cols-1 gap-6 ${colClasses[columns]} ${className}">
      ${stats.map(stat => Stat(stat)).join("")}
    </div>
  `;
}

// Single large stat for hero sections
export function StatHero({
  label,
  value,
  description,
  className = "",
}: {
  label: string;
  value: string;
  description?: string;
  className?: string;
}): string {
  return `
    <div class="text-center ${className}">
      <dt class="text-sm font-medium text-gray-500">${label}</dt>
      <dd class="mt-2 text-5xl font-bold tracking-tight text-gray-900">${value}</dd>
      ${description ? `<dd class="mt-2 text-sm text-gray-500">${description}</dd>` : ""}
    </div>
  `;
}

// Inline stat for compact displays
export function StatInline({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}): string {
  return `
    <div class="flex items-center gap-2 ${className}">
      <span class="text-sm text-gray-500">${label}:</span>
      <span class="text-sm font-medium text-gray-900">${value}</span>
    </div>
  `;
}
