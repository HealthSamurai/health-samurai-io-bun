/**
 * Card Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Card, CardWithAction, CardGrid, StatCard } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Cards",
  description: "Card component examples",
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
      <div class="bg-gray-100 p-6 rounded-lg">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function CardsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Card Component</h1>
        <p class="mt-2 text-gray-600">
          Flexible container component for grouping related content.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Card, CardWithAction, CardGrid, StatCard } from "../components/ui/Card";
        </code>
      </div>

      ${Section({
        title: "Basic Card",
        description: "Simple card with just content.",
        children: Example({
          label: "Default card",
          children: `
            <div class="max-w-md">
              ${Card({ children: `
                <p class="text-gray-700">This is a basic card with some content. Cards are great for grouping related information together.</p>
              ` })}
            </div>
          `,
          code: `<Card>
  <p>This is a basic card with some content.</p>
</Card>`,
        }),
      })}

      ${Section({
        title: "With Header",
        description: "Card with a title header.",
        children: Example({
          label: "Header card",
          children: `
            <div class="max-w-md">
              ${Card({
                header: "Account Settings",
                children: `<p class="text-gray-700">Manage your account preferences and security settings.</p>`,
              })}
            </div>
          `,
          code: `<Card header="Account Settings">
  <p>Manage your account preferences and security settings.</p>
</Card>`,
        }),
      })}

      ${Section({
        title: "With Header and Footer",
        description: "Card with both header and footer sections.",
        children: Example({
          label: "Full card",
          children: `
            <div class="max-w-md">
              ${Card({
                header: "Delete Account",
                children: `<p class="text-gray-700">Once you delete your account, there is no going back. Please be certain.</p>`,
                footer: `<div class="flex justify-end gap-3">${Button({ variant: "secondary", children: "Cancel" })}${Button({ variant: "danger", children: "Delete" })}</div>`,
              })}
            </div>
          `,
          code: `<Card
  header="Delete Account"
  footer={
    <div class="flex justify-end gap-3">
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </div>
  }
>
  <p>Once you delete your account, there is no going back.</p>
</Card>`,
        }),
      })}

      ${Section({
        title: "With Header Action",
        description: "Card with action button in the header.",
        children: Example({
          label: "Header with action",
          children: `
            <div class="max-w-md">
              ${CardWithAction({
                header: "Team Members",
                action: Button({ size: "sm", children: "Add member" }),
                children: `
                  <ul class="divide-y divide-gray-200">
                    <li class="py-3 flex items-center justify-between">
                      <span class="text-sm text-gray-900">John Doe</span>
                      ${Badge({ color: "green", size: "sm", children: "Admin" })}
                    </li>
                    <li class="py-3 flex items-center justify-between">
                      <span class="text-sm text-gray-900">Jane Smith</span>
                      ${Badge({ color: "gray", size: "sm", children: "Member" })}
                    </li>
                  </ul>
                `,
              })}
            </div>
          `,
          code: `<CardWithAction
  header="Team Members"
  action={<Button size="sm">Add member</Button>}
>
  <ul class="divide-y divide-gray-200">
    <li class="py-3">John Doe <Badge color="green">Admin</Badge></li>
    <li class="py-3">Jane Smith <Badge>Member</Badge></li>
  </ul>
</CardWithAction>`,
        }),
      })}

      ${Section({
        title: "Gray Footer",
        description: "Card with a gray background footer.",
        children: Example({
          label: "Gray footer",
          children: `
            <div class="max-w-md">
              ${Card({
                header: "Plan Details",
                grayFooter: true,
                children: `
                  <div class="text-sm text-gray-700">
                    <p><strong>Current Plan:</strong> Pro</p>
                    <p class="mt-1"><strong>Next billing:</strong> Feb 15, 2026</p>
                  </div>
                `,
                footer: `<a href="#" class="text-sm font-medium text-primary hover:text-primary-dark">Upgrade plan &rarr;</a>`,
              })}
            </div>
          `,
          code: `<Card header="Plan Details" grayFooter footer={<a href="#">Upgrade plan</a>}>
  <p><strong>Current Plan:</strong> Pro</p>
  <p><strong>Next billing:</strong> Feb 15, 2026</p>
</Card>`,
        }),
      })}

      ${Section({
        title: "Card Variants",
        description: "Different visual styles.",
        children: `
          ${Example({
            label: "Default, Outline, Well",
            children: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${Card({ children: `<p class="text-sm text-gray-700">Default card with shadow</p>` })}
                ${Card({ variant: "outline", children: `<p class="text-sm text-gray-700">Outline card (no shadow)</p>` })}
                ${Card({ variant: "well", grayBody: true, children: `<p class="text-sm text-gray-700">Well card (inset style)</p>` })}
              </div>
            `,
            code: `<Card>Default card with shadow</Card>
<Card variant="outline">Outline card (no shadow)</Card>
<Card variant="well" grayBody>Well card (inset style)</Card>`,
          })}
        `,
      })}

      ${Section({
        title: "Padding Sizes",
        description: "Different padding options.",
        children: Example({
          label: "sm, md, lg padding",
          children: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              ${Card({ padding: "sm", children: `<p class="text-sm text-gray-700">Small padding</p>` })}
              ${Card({ padding: "md", children: `<p class="text-sm text-gray-700">Medium padding (default)</p>` })}
              ${Card({ padding: "lg", children: `<p class="text-sm text-gray-700">Large padding</p>` })}
            </div>
          `,
          code: `<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>`,
        }),
      })}

      ${Section({
        title: "Hoverable Cards",
        description: "Cards that respond to hover.",
        children: Example({
          label: "Clickable cards",
          children: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              ${Card({
                hoverable: true,
                href: "#",
                children: `
                  <h4 class="font-medium text-gray-900">Documentation</h4>
                  <p class="mt-1 text-sm text-gray-500">Learn how to get started</p>
                `,
              })}
              ${Card({
                hoverable: true,
                href: "#",
                children: `
                  <h4 class="font-medium text-gray-900">API Reference</h4>
                  <p class="mt-1 text-sm text-gray-500">Detailed API documentation</p>
                `,
              })}
              ${Card({
                hoverable: true,
                href: "#",
                children: `
                  <h4 class="font-medium text-gray-900">Examples</h4>
                  <p class="mt-1 text-sm text-gray-500">Code samples and demos</p>
                `,
              })}
            </div>
          `,
          code: `<Card hoverable href="/docs">
  <h4>Documentation</h4>
  <p>Learn how to get started</p>
</Card>`,
        }),
      })}

      ${Section({
        title: "Stat Cards",
        description: "Cards for displaying statistics.",
        children: Example({
          label: "Stats with change indicators",
          children: `
            ${CardGrid({
              cols: 3,
              children: `
                ${StatCard({ label: "Total Revenue", value: "$45,231", change: "12%", changeType: "increase" })}
                ${StatCard({ label: "Active Users", value: "2,345", change: "3.2%", changeType: "decrease" })}
                ${StatCard({ label: "Conversion Rate", value: "3.6%", change: "0.5%", changeType: "neutral" })}
              `,
            })}
          `,
          code: `<CardGrid cols={3}>
  <StatCard label="Total Revenue" value="$45,231" change="12%" changeType="increase" />
  <StatCard label="Active Users" value="2,345" change="3.2%" changeType="decrease" />
  <StatCard label="Conversion Rate" value="3.6%" change="0.5%" changeType="neutral" />
</CardGrid>`,
        }),
      })}

      ${Section({
        title: "Card Grid",
        description: "Responsive grid layout for cards.",
        children: Example({
          label: "2, 3, 4 column grids",
          children: `
            ${CardGrid({
              cols: 4,
              children: `
                ${Card({ children: `<div class="text-center py-4"><span class="text-2xl">1</span></div>` })}
                ${Card({ children: `<div class="text-center py-4"><span class="text-2xl">2</span></div>` })}
                ${Card({ children: `<div class="text-center py-4"><span class="text-2xl">3</span></div>` })}
                ${Card({ children: `<div class="text-center py-4"><span class="text-2xl">4</span></div>` })}
              `,
            })}
          `,
          code: `<CardGrid cols={4}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
</CardGrid>`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Card body content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">header</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Simple text header</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">headerContent</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Custom header HTML</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">footer</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Footer content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">grayFooter</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Gray footer background</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">grayBody</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Gray body background</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">padding</td><td class="px-4 py-3">"none" | "sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Padding size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">shadow</td><td class="px-4 py-3">"none" | "sm" | "md" | "lg"</td><td class="px-4 py-3">"sm"</td><td class="px-4 py-3">Shadow size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"default" | "well" | "outline"</td><td class="px-4 py-3">"default"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">hoverable</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Hover effect</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">href</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Makes card clickable link</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Cards",
    currentPath: "/_components/ui/cards",
    children: content,
    devMode,
  });
}
