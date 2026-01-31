/**
 * Stats Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Stats, Stat, StatHero, StatInline } from "../../../components/ui/Stats";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Stats",
  description: "Statistics and KPI display components",
  fullPage: true,
};

function Section({ title, description, children }: { title: string; description?: string; children: string }): string {
  return `
    <div class="mb-12">
      <h2 class="text-lg font-semibold text-gray-900 mb-2">${title}</h2>
      ${description ? `<p class="text-sm text-gray-600 mb-4">${description}</p>` : ""}
      <div class="space-y-4">
        ${children}
      </div>
    </div>
  `;
}

function CodeBlock({ code }: { code: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, "tsx")}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function StatsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Stats Component</h1>
        <p class="mt-2 text-gray-600">
          Display key metrics, KPIs, and statistics in various formats.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Stats, Stat, StatHero, StatInline } from "../components/ui/Stats";
        </code>
      </div>

      ${Section({
        title: "Simple Stats Grid",
        description: "Inline stats with optional change indicators.",
        children: Example({
          label: "Simple variant",
          children: Stats({
            variant: "simple",
            stats: [
              { label: "Revenue", value: "$405,091.00", change: "+4.75%", changeType: "increase" },
              { label: "Overdue invoices", value: "$12,787.00", change: "+54.02%", changeType: "decrease" },
              { label: "Outstanding invoices", value: "$245,988.00", change: "-1.39%", changeType: "neutral" },
              { label: "Expenses", value: "$30,156.00", change: "+10.18%", changeType: "decrease" },
            ],
          }),
          code: `<Stats
  variant="simple"
  stats={[
    { label: "Revenue", value: "$405,091.00", change: "+4.75%", changeType: "increase" },
    { label: "Overdue invoices", value: "$12,787.00", change: "+54.02%", changeType: "decrease" },
    { label: "Outstanding invoices", value: "$245,988.00", change: "-1.39%", changeType: "neutral" },
    { label: "Expenses", value: "$30,156.00", change: "+10.18%", changeType: "decrease" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Card Stats",
        description: "Stats displayed in individual cards with icons.",
        children: Example({
          label: "Cards variant with icons",
          children: Stats({
            variant: "cards",
            columns: 4,
            stats: [
              { label: "Total Users", value: "8,234", change: "+12%", changeType: "increase", icon: "users" },
              { label: "Revenue", value: "$45.2K", change: "+8.1%", changeType: "increase", icon: "currency" },
              { label: "Active Projects", value: "24", icon: "chart" },
              { label: "Avg. Response", value: "1.2h", change: "-18%", changeType: "increase", icon: "clock" },
            ],
          }),
          code: `<Stats
  variant="cards"
  columns={4}
  stats={[
    { label: "Total Users", value: "8,234", change: "+12%", changeType: "increase", icon: "users" },
    { label: "Revenue", value: "$45.2K", change: "+8.1%", changeType: "increase", icon: "currency" },
    { label: "Active Projects", value: "24", icon: "chart" },
    { label: "Avg. Response", value: "1.2h", change: "-18%", changeType: "increase", icon: "clock" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Divided Stats",
        description: "Stats with shared borders for compact display.",
        children: Example({
          label: "Divided variant",
          children: Stats({
            variant: "divided",
            columns: 3,
            stats: [
              { label: "Total Subscribers", value: "71,897", change: "+122", changeType: "increase" },
              { label: "Avg. Open Rate", value: "58.16%", change: "+5.4%", changeType: "increase" },
              { label: "Avg. Click Rate", value: "24.57%", change: "-3.2%", changeType: "decrease" },
            ],
          }),
          code: `<Stats
  variant="divided"
  columns={3}
  stats={[
    { label: "Total Subscribers", value: "71,897", change: "+122", changeType: "increase" },
    { label: "Avg. Open Rate", value: "58.16%", change: "+5.4%", changeType: "increase" },
    { label: "Avg. Click Rate", value: "24.57%", change: "-3.2%", changeType: "decrease" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Single Stat",
        description: "Individual stat component for custom layouts.",
        children: Example({
          label: "Single stat card",
          children: `
            <div class="max-w-xs">
              ${Stat({
                label: "Monthly Revenue",
                value: "$45,231.89",
                change: "+20.1%",
                changeType: "increase",
                icon: "currency",
              })}
            </div>
          `,
          code: `<Stat
  label="Monthly Revenue"
  value="$45,231.89"
  change="+20.1%"
  changeType="increase"
  icon="currency"
/>`,
        }),
      })}

      ${Section({
        title: "Hero Stat",
        description: "Large centered stat for hero sections.",
        children: Example({
          label: "Hero stat",
          children: `
            <div class="py-8">
              ${StatHero({
                label: "Transactions every 24 hours",
                value: "44 million",
                description: "With 99.99% uptime",
              })}
            </div>
          `,
          code: `<StatHero
  label="Transactions every 24 hours"
  value="44 million"
  description="With 99.99% uptime"
/>`,
        }),
      })}

      ${Section({
        title: "Inline Stats",
        description: "Compact inline stats for tight spaces.",
        children: Example({
          label: "Inline stats",
          children: `
            <div class="flex flex-wrap gap-6">
              ${StatInline({ label: "Views", value: "2,453" })}
              ${StatInline({ label: "Likes", value: "892" })}
              ${StatInline({ label: "Comments", value: "47" })}
              ${StatInline({ label: "Shares", value: "156" })}
            </div>
          `,
          code: `<StatInline label="Views" value="2,453" />
<StatInline label="Likes" value="892" />
<StatInline label="Comments" value="47" />`,
        }),
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">stats</td><td class="px-4 py-3">StatProps[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of stats to display</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "cards" | "divided"</td><td class="px-4 py-3">"cards"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">columns</td><td class="px-4 py-3">2 | 3 | 4</td><td class="px-4 py-3">4</td><td class="px-4 py-3">Number of columns</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">StatProps</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Metric label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Metric value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">change</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Change percentage</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">changeType</td><td class="px-4 py-3">"increase" | "decrease" | "neutral"</td><td class="px-4 py-3">Change styling</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">"users" | "currency" | "chart" | "clock" | "document" | "check"</td><td class="px-4 py-3">Icon name</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Stats",
    currentPath: "/_components/data-display/stats",
    children: content,
    devMode,
  });
}
