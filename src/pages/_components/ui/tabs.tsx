/**
 * Tabs Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Tabs, TabsWithContent, TabIcons } from "../../../components/ui/Tabs";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Tabs",
  description: "Tab navigation component examples",
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
      <div class="bg-white p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

const sampleTabs = [
  { id: "account", label: "My Account" },
  { id: "company", label: "Company" },
  { id: "team", label: "Team Members" },
  { id: "billing", label: "Billing" },
];

const tabsWithIcons = [
  { id: "account", label: "My Account", icon: TabIcons.user },
  { id: "company", label: "Company", icon: TabIcons.building },
  { id: "team", label: "Team Members", icon: TabIcons.users },
  { id: "billing", label: "Billing", icon: TabIcons.creditCard },
];

const tabsWithBadges = [
  { id: "account", label: "My Account" },
  { id: "company", label: "Company" },
  { id: "team", label: "Team Members", badge: "12" },
  { id: "billing", label: "Billing" },
];

export default function TabsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Tabs Component</h1>
        <p class="mt-2 text-gray-600">
          Tab navigation with different styles, icons, and responsive mobile select.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Tabs, TabsWithContent, TabIcons } from "../components/ui/Tabs";
        </code>
      </div>

      ${Section({
        title: "Underline Tabs",
        description: "Default style with bottom border indicator.",
        children: Example({
          label: "Basic underline tabs",
          children: Tabs({
            tabs: sampleTabs,
            activeTab: "team",
            variant: "underline",
          }),
          code: `<Tabs
  tabs={[
    { id: "account", label: "My Account" },
    { id: "company", label: "Company" },
    { id: "team", label: "Team Members" },
    { id: "billing", label: "Billing" },
  ]}
  activeTab="team"
  variant="underline"
/>`,
        }),
      })}

      ${Section({
        title: "With Icons",
        description: "Tabs with leading icons.",
        children: Example({
          label: "Icon tabs",
          children: Tabs({
            tabs: tabsWithIcons,
            activeTab: "team",
            variant: "underline",
          }),
          code: `<Tabs
  tabs={[
    { id: "account", label: "My Account", icon: TabIcons.user },
    { id: "company", label: "Company", icon: TabIcons.building },
    { id: "team", label: "Team Members", icon: TabIcons.users },
    { id: "billing", label: "Billing", icon: TabIcons.creditCard },
  ]}
  activeTab="team"
/>`,
        }),
      })}

      ${Section({
        title: "Pill Tabs",
        description: "Rounded pill-style tabs.",
        children: `
          ${Example({
            label: "Default pills",
            children: Tabs({
              tabs: sampleTabs,
              activeTab: "team",
              variant: "pills",
            }),
            code: `<Tabs tabs={[...]} activeTab="team" variant="pills" />`,
          })}
          ${Example({
            label: "Gray pills",
            children: Tabs({
              tabs: sampleTabs,
              activeTab: "team",
              variant: "pills-gray",
            }),
            code: `<Tabs tabs={[...]} activeTab="team" variant="pills-gray" />`,
          })}
          ${Example({
            label: "Brand color pills",
            children: Tabs({
              tabs: sampleTabs,
              activeTab: "team",
              variant: "pills-brand",
            }),
            code: `<Tabs tabs={[...]} activeTab="team" variant="pills-brand" />`,
          })}
        `,
      })}

      ${Section({
        title: "With Badges",
        description: "Show counts or notifications on tabs.",
        children: Example({
          label: "Tabs with badge",
          children: Tabs({
            tabs: tabsWithBadges,
            activeTab: "team",
            variant: "underline",
          }),
          code: `<Tabs
  tabs={[
    { id: "account", label: "My Account" },
    { id: "company", label: "Company" },
    { id: "team", label: "Team Members", badge: "12" },
    { id: "billing", label: "Billing" },
  ]}
  activeTab="team"
/>`,
        }),
      })}

      ${Section({
        title: "Interactive Tabs with Content",
        description: "Client-side tab switching using Datastar.",
        children: Example({
          label: "Interactive tabs",
          children: TabsWithContent({
            tabs: [
              { id: "overview", label: "Overview", content: `<div class="p-4 bg-gray-50 rounded-lg"><h4 class="font-medium text-gray-900">Overview Content</h4><p class="mt-2 text-sm text-gray-600">This is the overview tab content. Click other tabs to switch.</p></div>` },
              { id: "features", label: "Features", content: `<div class="p-4 bg-gray-50 rounded-lg"><h4 class="font-medium text-gray-900">Features Content</h4><p class="mt-2 text-sm text-gray-600">This tab shows the features. Content switches without page reload.</p></div>` },
              { id: "pricing", label: "Pricing", content: `<div class="p-4 bg-gray-50 rounded-lg"><h4 class="font-medium text-gray-900">Pricing Content</h4><p class="mt-2 text-sm text-gray-600">Pricing information would go here.</p></div>` },
            ],
            defaultTab: "overview",
            variant: "underline",
          }),
          code: `<TabsWithContent
  tabs={[
    { id: "overview", label: "Overview", content: "<div>...</div>" },
    { id: "features", label: "Features", content: "<div>...</div>" },
    { id: "pricing", label: "Pricing", content: "<div>...</div>" },
  ]}
  defaultTab="overview"
  variant="underline"
/>`,
        }),
      })}

      ${Section({
        title: "Link-based Tabs",
        description: "Use href for navigation tabs.",
        children: Example({
          label: "Navigation tabs",
          children: Tabs({
            tabs: [
              { id: "dashboard", label: "Dashboard", href: "/admin/dashboard" },
              { id: "users", label: "Users", href: "/admin/users" },
              { id: "settings", label: "Settings", href: "/admin/settings" },
            ],
            activeTab: "dashboard",
            variant: "pills",
            responsiveSelect: false,
          }),
          code: `<Tabs
  tabs={[
    { id: "dashboard", label: "Dashboard", href: "/admin/dashboard" },
    { id: "users", label: "Users", href: "/admin/users" },
    { id: "settings", label: "Settings", href: "/admin/settings" },
  ]}
  activeTab="dashboard"
  variant="pills"
/>`,
        }),
      })}

      ${Section({
        title: "Responsive Behavior",
        description: "Tabs show as select dropdown on mobile (resize to see).",
        children: Example({
          label: "Responsive tabs",
          children: `
            <p class="text-sm text-gray-500 mb-4">Resize the window to see the mobile dropdown version.</p>
            ${Tabs({
              tabs: sampleTabs,
              activeTab: "team",
              variant: "underline",
              responsiveSelect: true,
            })}
          `,
          code: `<Tabs
  tabs={[...]}
  activeTab="team"
  responsiveSelect={true}  // default: true
/>

// To disable mobile select:
<Tabs tabs={[...]} responsiveSelect={false} />`,
        }),
      })}

      <!-- Available Icons -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Available Icons</h2>
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.user}</div>
            <span class="text-xs text-gray-600">user</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.building}</div>
            <span class="text-xs text-gray-600">building</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.users}</div>
            <span class="text-xs text-gray-600">users</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.creditCard}</div>
            <span class="text-xs text-gray-600">creditCard</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.cog}</div>
            <span class="text-xs text-gray-600">cog</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${TabIcons.bell}</div>
            <span class="text-xs text-gray-600">bell</span>
          </div>
        </div>
      </div>

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
              <tr><td class="px-4 py-3 font-mono text-primary">tabs</td><td class="px-4 py-3">TabItem[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of tab items</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">activeTab</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">ID of active tab</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"underline" | "pills" | "pills-gray" | "pills-brand"</td><td class="px-4 py-3">"underline"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">fullWidth</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Spread tabs across full width</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">responsiveSelect</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Show select on mobile</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-base font-semibold text-gray-900 mt-8 mb-4">TabItem Properties</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">id</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Unique tab identifier</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Tab label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">string</td><td class="px-4 py-3">SVG icon (use TabIcons)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">href</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Link URL for navigation tabs</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">badge</td><td class="px-4 py-3">string | number</td><td class="px-4 py-3">Badge content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Disable the tab</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Tabs",
    currentPath: "/_components/ui/tabs",
    children: content,
    devMode,
  });
}
