/**
 * Avatar Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Avatar, AvatarWithBadge, AvatarGroup, AvatarWithText } from "../../../components/ui/Avatar";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Avatars",
  description: "Avatar component examples",
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

const sampleAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const sampleAvatar2 = "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const sampleAvatar3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80";

export default function AvatarsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Avatar Component</h1>
        <p class="mt-2 text-gray-600">
          User avatar with different sizes, shapes, status indicators, and grouping options.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Avatar, AvatarWithBadge, AvatarGroup, AvatarWithText } from "../components/ui/Avatar";
        </code>
      </div>

      ${Section({
        title: "Sizes",
        description: "Avatars come in six sizes: xs, sm, md, lg, xl, and 2xl.",
        children: Example({
          label: "All sizes",
          children: `
            <div class="flex items-end gap-4">
              ${Avatar({ src: sampleAvatar, alt: "User", size: "xs" })}
              ${Avatar({ src: sampleAvatar, alt: "User", size: "sm" })}
              ${Avatar({ src: sampleAvatar, alt: "User", size: "md" })}
              ${Avatar({ src: sampleAvatar, alt: "User", size: "lg" })}
              ${Avatar({ src: sampleAvatar, alt: "User", size: "xl" })}
              ${Avatar({ src: sampleAvatar, alt: "User", size: "2xl" })}
            </div>
          `,
          code: `<Avatar src="/avatar.jpg" size="xs" />
<Avatar src="/avatar.jpg" size="sm" />
<Avatar src="/avatar.jpg" size="md" />  // default
<Avatar src="/avatar.jpg" size="lg" />
<Avatar src="/avatar.jpg" size="xl" />
<Avatar src="/avatar.jpg" size="2xl" />`,
        }),
      })}

      ${Section({
        title: "Shapes",
        description: "Circle or rounded square avatars.",
        children: Example({
          label: "Circle and rounded",
          children: `
            <div class="flex items-center gap-6">
              <div class="text-center">
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", shape: "circle" })}
                <p class="mt-2 text-xs text-gray-500">Circle</p>
              </div>
              <div class="text-center">
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", shape: "rounded" })}
                <p class="mt-2 text-xs text-gray-500">Rounded</p>
              </div>
            </div>
          `,
          code: `<Avatar src="/avatar.jpg" shape="circle" />  // default
<Avatar src="/avatar.jpg" shape="rounded" />`,
        }),
      })}

      ${Section({
        title: "Initials",
        description: "Display initials when no image is available.",
        children: Example({
          label: "With initials",
          children: `
            <div class="flex items-end gap-4">
              ${Avatar({ initials: "JD", size: "xs" })}
              ${Avatar({ initials: "JD", size: "sm" })}
              ${Avatar({ initials: "JD", size: "md" })}
              ${Avatar({ initials: "JD", size: "lg" })}
              ${Avatar({ initials: "JD", size: "xl" })}
              ${Avatar({ initials: "JD", size: "2xl" })}
            </div>
          `,
          code: `<Avatar initials="JD" size="md" />`,
        }),
      })}

      ${Section({
        title: "Placeholder",
        description: "Default placeholder icon when no image or initials provided.",
        children: Example({
          label: "Placeholder avatars",
          children: `
            <div class="flex items-end gap-4">
              ${Avatar({ size: "sm" })}
              ${Avatar({ size: "md" })}
              ${Avatar({ size: "lg" })}
            </div>
          `,
          code: `<Avatar />  // Shows placeholder icon`,
        }),
      })}

      ${Section({
        title: "Status Indicators",
        description: "Show online status with colored indicators.",
        children: `
          ${Example({
            label: "Bottom status (default)",
            children: `
              <div class="flex items-center gap-4">
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "online" })}
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "offline" })}
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "busy" })}
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "away" })}
              </div>
              <div class="mt-2 flex gap-4 text-xs text-gray-500">
                <span class="w-12 text-center">Online</span>
                <span class="w-12 text-center">Offline</span>
                <span class="w-12 text-center">Busy</span>
                <span class="w-12 text-center">Away</span>
              </div>
            `,
            code: `<Avatar src="/avatar.jpg" status="online" />
<Avatar src="/avatar.jpg" status="offline" />
<Avatar src="/avatar.jpg" status="busy" />
<Avatar src="/avatar.jpg" status="away" />`,
          })}
          ${Example({
            label: "Top status position",
            children: `
              <div class="flex items-center gap-4">
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "online", statusPosition: "top" })}
                ${Avatar({ src: sampleAvatar, alt: "User", size: "lg", status: "busy", statusPosition: "top" })}
              </div>
            `,
            code: `<Avatar src="/avatar.jpg" status="online" statusPosition="top" />`,
          })}
        `,
      })}

      ${Section({
        title: "With Badge",
        description: "Show notification count or other badges.",
        children: Example({
          label: "Badge avatars",
          children: `
            <div class="flex items-center gap-6">
              ${AvatarWithBadge({ src: sampleAvatar, alt: "User", size: "lg", badgeContent: "3", badgeColor: "red" })}
              ${AvatarWithBadge({ src: sampleAvatar, alt: "User", size: "lg", badgeContent: "99+", badgeColor: "blue" })}
              ${AvatarWithBadge({ initials: "JD", size: "lg", badgeContent: "5", badgeColor: "green" })}
            </div>
          `,
          code: `<AvatarWithBadge src="/avatar.jpg" badgeContent="3" badgeColor="red" />
<AvatarWithBadge src="/avatar.jpg" badgeContent="99+" badgeColor="blue" />
<AvatarWithBadge initials="JD" badgeContent="5" badgeColor="green" />`,
        }),
      })}

      ${Section({
        title: "Avatar Group",
        description: "Stack multiple avatars with overlap.",
        children: `
          ${Example({
            label: "Stacked avatars",
            children: `
              ${AvatarGroup({
                children: `
                  ${Avatar({ src: sampleAvatar, alt: "User 1", size: "md", className: "ring-2 ring-white" })}
                  ${Avatar({ src: sampleAvatar2, alt: "User 2", size: "md", className: "ring-2 ring-white" })}
                  ${Avatar({ src: sampleAvatar3, alt: "User 3", size: "md", className: "ring-2 ring-white" })}
                `,
              })}
            `,
            code: `<AvatarGroup>
  <Avatar src="/avatar1.jpg" className="ring-2 ring-white" />
  <Avatar src="/avatar2.jpg" className="ring-2 ring-white" />
  <Avatar src="/avatar3.jpg" className="ring-2 ring-white" />
</AvatarGroup>`,
          })}
          ${Example({
            label: "With overflow indicator",
            children: `
              ${AvatarGroup({
                max: 5,
                children: `
                  ${Avatar({ src: sampleAvatar, alt: "User 1", size: "md", className: "ring-2 ring-white" })}
                  ${Avatar({ src: sampleAvatar2, alt: "User 2", size: "md", className: "ring-2 ring-white" })}
                  ${Avatar({ src: sampleAvatar3, alt: "User 3", size: "md", className: "ring-2 ring-white" })}
                `,
              })}
            `,
            code: `<AvatarGroup max={5}>
  <Avatar src="/avatar1.jpg" />
  <Avatar src="/avatar2.jpg" />
  <Avatar src="/avatar3.jpg" />
</AvatarGroup>`,
          })}
        `,
      })}

      ${Section({
        title: "Avatar with Text",
        description: "Avatar paired with name and description.",
        children: Example({
          label: "With name and role",
          children: `
            <div class="space-y-4">
              ${AvatarWithText({ src: sampleAvatar, name: "Tom Cook", description: "tom@example.com", size: "md" })}
              ${AvatarWithText({ src: sampleAvatar2, name: "Whitney Francis", description: "Product Designer", size: "lg", status: "online" })}
              ${AvatarWithText({ initials: "JD", name: "John Doe", description: "Engineering Lead", size: "lg" })}
            </div>
          `,
          code: `<AvatarWithText
  src="/avatar.jpg"
  name="Tom Cook"
  description="tom@example.com"
/>

<AvatarWithText
  src="/avatar.jpg"
  name="Whitney Francis"
  description="Product Designer"
  size="lg"
  status="online"
/>`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">src</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Image URL</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">alt</td><td class="px-4 py-3">string</td><td class="px-4 py-3">""</td><td class="px-4 py-3">Image alt text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">initials</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Initials when no image</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"xs" | "sm" | "md" | "lg" | "xl" | "2xl"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Avatar size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">shape</td><td class="px-4 py-3">"circle" | "rounded"</td><td class="px-4 py-3">"circle"</td><td class="px-4 py-3">Avatar shape</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">status</td><td class="px-4 py-3">"online" | "offline" | "busy" | "away"</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Status indicator</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">statusPosition</td><td class="px-4 py-3">"top" | "bottom"</td><td class="px-4 py-3">"bottom"</td><td class="px-4 py-3">Status position</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Avatars",
    currentPath: "/_components/ui/avatars",
    children: content,
    devMode,
  });
}
