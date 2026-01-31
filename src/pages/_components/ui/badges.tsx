/**
 * Badge Component Demo
 * Shows all Badge variants, colors, and features
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Badge, StatusBadge, BadgeGroup } from "../../../components/ui/Badge";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Badges",
  description: "Badge component examples",
  fullPage: true,
};

function Section({ title, description, children }: { title: string; description?: string; children: string }): string {
  return `
    <div class="mb-12">
      <h2 class="text-lg font-semibold text-gray-900 mb-2">${title}</h2>
      ${description ? `<p class="text-sm text-gray-600 mb-4">${description}</p>` : ""}
      <div class="p-6 bg-white border border-gray-200 rounded-lg">
        ${children}
      </div>
    </div>
  `;
}

function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, lang)}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="flex flex-wrap items-center gap-3 mb-2">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function BadgesDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Badge Component</h1>
        <p class="mt-2 text-gray-600">
          Compact labels for status, categories, counts, and more.
        </p>
      </div>

      <!-- Import -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Badge, StatusBadge, BadgeGroup } from "../components/ui/Badge";
        </code>
      </div>

      ${Section({
        title: "Colors",
        description: "9 color options for different purposes.",
        children: Example({
          label: "All colors",
          children: `
            <div class="flex flex-wrap gap-2">
              ${Badge({ color: "gray", children: "Gray" })}
              ${Badge({ color: "red", children: "Red" })}
              ${Badge({ color: "yellow", children: "Yellow" })}
              ${Badge({ color: "green", children: "Green" })}
              ${Badge({ color: "blue", children: "Blue" })}
              ${Badge({ color: "indigo", children: "Indigo" })}
              ${Badge({ color: "purple", children: "Purple" })}
              ${Badge({ color: "pink", children: "Pink" })}
              ${Badge({ color: "primary", children: "Primary" })}
            </div>
          `,
          code: `<Badge color="gray">Gray</Badge>
<Badge color="red">Red</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="green">Green</Badge>
<Badge color="blue">Blue</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
<Badge color="primary">Primary</Badge>`,
        }),
      })}

      ${Section({
        title: "Variants",
        description: "Flat (default) and outline styles.",
        children: `
          ${Example({
            label: "Flat (default)",
            children: `
              <div class="flex flex-wrap gap-2">
                ${Badge({ color: "green", children: "Success" })}
                ${Badge({ color: "red", children: "Error" })}
                ${Badge({ color: "blue", children: "Info" })}
              </div>
            `,
            code: `<Badge color="green">Success</Badge>
<Badge color="red">Error</Badge>
<Badge color="blue">Info</Badge>`,
          })}
          ${Example({
            label: "Outline",
            children: `
              <div class="flex flex-wrap gap-2">
                ${Badge({ variant: "outline", color: "green", children: "Success" })}
                ${Badge({ variant: "outline", color: "red", children: "Error" })}
                ${Badge({ variant: "outline", color: "blue", children: "Info" })}
              </div>
            `,
            code: `<Badge variant="outline" color="green">Success</Badge>
<Badge variant="outline" color="red">Error</Badge>
<Badge variant="outline" color="blue">Info</Badge>`,
          })}
        `,
      })}

      ${Section({
        title: "Sizes",
        description: "Small and medium sizes.",
        children: Example({
          label: "sm and md",
          children: `
            <div class="flex flex-wrap items-center gap-3">
              ${Badge({ size: "sm", children: "Small" })}
              ${Badge({ size: "md", children: "Medium" })}
              ${Badge({ size: "sm", color: "green", children: "Small green" })}
              ${Badge({ size: "md", color: "green", children: "Medium green" })}
            </div>
          `,
          code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="sm" color="green">Small green</Badge>
<Badge size="md" color="green">Medium green</Badge>`,
        }),
      })}

      ${Section({
        title: "With Dot",
        description: "Status indicator dot for showing live status.",
        children: Example({
          label: "Badges with status dots",
          children: `
            <div class="flex flex-wrap gap-2">
              ${Badge({ dot: true, color: "green", children: "Online" })}
              ${Badge({ dot: true, color: "red", children: "Offline" })}
              ${Badge({ dot: true, color: "yellow", children: "Away" })}
              ${Badge({ dot: true, color: "gray", children: "Unknown" })}
              ${Badge({ dot: true, variant: "outline", color: "green", children: "Active" })}
            </div>
          `,
          code: `<Badge dot color="green">Online</Badge>
<Badge dot color="red">Offline</Badge>
<Badge dot color="yellow">Away</Badge>
<Badge dot color="gray">Unknown</Badge>
<Badge dot variant="outline" color="green">Active</Badge>`,
        }),
      })}

      ${Section({
        title: "Pill Shape",
        description: "Fully rounded badges.",
        children: Example({
          label: "Pill badges",
          children: `
            <div class="flex flex-wrap gap-2">
              ${Badge({ pill: true, children: "Default" })}
              ${Badge({ pill: true, color: "green", children: "Success" })}
              ${Badge({ pill: true, color: "blue", children: "Info" })}
              ${Badge({ pill: true, dot: true, color: "green", children: "Online" })}
            </div>
          `,
          code: `<Badge pill>Default</Badge>
<Badge pill color="green">Success</Badge>
<Badge pill color="blue">Info</Badge>
<Badge pill dot color="green">Online</Badge>`,
        }),
      })}

      ${Section({
        title: "Removable",
        description: "Badges with remove button for tags and filters.",
        children: Example({
          label: "With remove button",
          children: `
            <div class="flex flex-wrap gap-2">
              ${Badge({ removable: true, children: "Tag" })}
              ${Badge({ removable: true, color: "blue", children: "React" })}
              ${Badge({ removable: true, color: "green", children: "TypeScript" })}
              ${Badge({ removable: true, color: "purple", children: "Tailwind" })}
              ${Badge({ removable: true, pill: true, color: "indigo", children: "Pill" })}
            </div>
          `,
          code: `<Badge removable>Tag</Badge>
<Badge removable color="blue">React</Badge>
<Badge removable color="green">TypeScript</Badge>
<Badge removable color="purple">Tailwind</Badge>
<Badge removable pill color="indigo">Pill</Badge>`,
        }),
      })}

      ${Section({
        title: "Status Badges",
        description: "Convenience component for common status indicators.",
        children: Example({
          label: "StatusBadge helper",
          children: `
            <div class="flex flex-wrap gap-2">
              ${StatusBadge({ status: "online" })}
              ${StatusBadge({ status: "offline" })}
              ${StatusBadge({ status: "away" })}
              ${StatusBadge({ status: "busy" })}
              ${StatusBadge({ status: "success" })}
              ${StatusBadge({ status: "warning" })}
              ${StatusBadge({ status: "error" })}
            </div>
          `,
          code: `<StatusBadge status="online" />
<StatusBadge status="offline" />
<StatusBadge status="away" />
<StatusBadge status="busy" />
<StatusBadge status="success" />
<StatusBadge status="warning" />
<StatusBadge status="error" />`,
        }),
      })}

      ${Section({
        title: "Use Cases",
        description: "Common patterns for using badges.",
        children: `
          ${Example({
            label: "Category tags",
            children: `
              <div class="flex flex-wrap gap-2">
                ${Badge({ color: "blue", children: "FHIR" })}
                ${Badge({ color: "green", children: "Healthcare" })}
                ${Badge({ color: "purple", children: "API" })}
                ${Badge({ color: "indigo", children: "Tutorial" })}
              </div>
            `,
            code: `<Badge color="blue">FHIR</Badge>
<Badge color="green">Healthcare</Badge>
<Badge color="purple">API</Badge>
<Badge color="indigo">Tutorial</Badge>`,
          })}
          ${Example({
            label: "Count badges",
            children: `
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-700">Messages ${Badge({ color: "red", pill: true, size: "sm", children: "3" })}</span>
                <span class="text-sm text-gray-700">Notifications ${Badge({ color: "blue", pill: true, size: "sm", children: "12" })}</span>
                <span class="text-sm text-gray-700">Updates ${Badge({ color: "green", pill: true, size: "sm", children: "99+" })}</span>
              </div>
            `,
            code: `Messages <Badge color="red" pill size="sm">3</Badge>
Notifications <Badge color="blue" pill size="sm">12</Badge>
Updates <Badge color="green" pill size="sm">99+</Badge>`,
          })}
          ${Example({
            label: "User status",
            children: `
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-full bg-gray-200"></div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">John Doe</div>
                    ${StatusBadge({ status: "online", size: "sm" })}
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-full bg-gray-200"></div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">Jane Smith</div>
                    ${StatusBadge({ status: "away", size: "sm" })}
                  </div>
                </div>
              </div>
            `,
            code: `<StatusBadge status="online" size="sm" />
<StatusBadge status="away" size="sm" />`,
          })}
        `,
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
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Badge text content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">color</td><td class="px-4 py-3">"gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | "primary"</td><td class="px-4 py-3">"gray"</td><td class="px-4 py-3">Color theme</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"flat" | "outline"</td><td class="px-4 py-3">"flat"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Badge size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">dot</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show status dot</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">pill</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Fully rounded shape</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">removable</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show remove button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onRemove</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">JS expression for remove click</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">className</td><td class="px-4 py-3">string</td><td class="px-4 py-3">""</td><td class="px-4 py-3">Additional CSS classes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Badges",
    currentPath: "/_components/ui/badges",
    children: content,
    devMode,
  });
}
