/**
 * Dropdown Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Dropdown, DropdownItem, DropdownDivider, DropdownSection, DropdownIcons } from "../../../components/ui/Dropdown";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Dropdowns",
  description: "Dropdown menu component examples",
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
      <div class="bg-white p-6 rounded-lg border border-gray-200 min-h-[200px]">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function DropdownsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Dropdown Component</h1>
        <p class="mt-2 text-gray-600">
          Dropdown menus for actions and navigation. Uses Datastar for interactivity.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Dropdown, DropdownItem, DropdownDivider, DropdownSection, DropdownIcons } from "../components/ui/Dropdown";
        </code>
      </div>

      ${Section({
        title: "Basic Dropdown",
        description: "Simple dropdown with menu items.",
        children: Example({
          label: "Default dropdown",
          children: Dropdown({
            id: "basic",
            trigger: "Options",
            children: `
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Account settings", href: "#" })}
                  ${DropdownItem({ children: "Support", href: "#" })}
                  ${DropdownItem({ children: "License", href: "#" })}
                `,
              })}
            `,
          }),
          code: `<Dropdown id="basic" trigger="Options">
  <DropdownSection>
    <DropdownItem href="/settings">Account settings</DropdownItem>
    <DropdownItem href="/support">Support</DropdownItem>
    <DropdownItem href="/license">License</DropdownItem>
  </DropdownSection>
</Dropdown>`,
        }),
      })}

      ${Section({
        title: "With Dividers",
        description: "Separate groups of actions with dividers.",
        children: Example({
          label: "Grouped items",
          children: Dropdown({
            id: "dividers",
            trigger: "Actions",
            children: `
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Edit", href: "#" })}
                  ${DropdownItem({ children: "Duplicate", href: "#" })}
                `,
              })}
              ${DropdownDivider()}
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Archive", href: "#" })}
                  ${DropdownItem({ children: "Move", href: "#" })}
                `,
              })}
              ${DropdownDivider()}
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Delete", href: "#", danger: true })}
                `,
              })}
            `,
          }),
          code: `<Dropdown id="actions" trigger="Actions">
  <DropdownSection>
    <DropdownItem href="#">Edit</DropdownItem>
    <DropdownItem href="#">Duplicate</DropdownItem>
  </DropdownSection>
  <DropdownDivider />
  <DropdownSection>
    <DropdownItem href="#">Archive</DropdownItem>
    <DropdownItem href="#">Move</DropdownItem>
  </DropdownSection>
  <DropdownDivider />
  <DropdownSection>
    <DropdownItem href="#" danger>Delete</DropdownItem>
  </DropdownSection>
</Dropdown>`,
        }),
      })}

      ${Section({
        title: "With Icons",
        description: "Add icons to dropdown items.",
        children: Example({
          label: "Icons dropdown",
          children: Dropdown({
            id: "icons",
            trigger: "Options",
            children: `
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Edit", icon: DropdownIcons.edit, href: "#" })}
                  ${DropdownItem({ children: "Duplicate", icon: DropdownIcons.duplicate, href: "#" })}
                `,
              })}
              ${DropdownDivider()}
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Archive", icon: DropdownIcons.archive, href: "#" })}
                  ${DropdownItem({ children: "Share", icon: DropdownIcons.share, href: "#" })}
                `,
              })}
              ${DropdownDivider()}
              ${DropdownSection({
                children: `
                  ${DropdownItem({ children: "Delete", icon: DropdownIcons.delete, danger: true })}
                `,
              })}
            `,
          }),
          code: `<Dropdown id="icons" trigger="Options">
  <DropdownSection>
    <DropdownItem icon={DropdownIcons.edit} href="#">Edit</DropdownItem>
    <DropdownItem icon={DropdownIcons.duplicate} href="#">Duplicate</DropdownItem>
  </DropdownSection>
  <DropdownDivider />
  <DropdownSection>
    <DropdownItem icon={DropdownIcons.archive} href="#">Archive</DropdownItem>
    <DropdownItem icon={DropdownIcons.share} href="#">Share</DropdownItem>
  </DropdownSection>
  <DropdownDivider />
  <DropdownSection>
    <DropdownItem icon={DropdownIcons.delete} danger>Delete</DropdownItem>
  </DropdownSection>
</Dropdown>`,
        }),
      })}

      ${Section({
        title: "Dropdown Positions",
        description: "Position the menu relative to the trigger.",
        children: Example({
          label: "Different positions",
          children: `
            <div class="flex gap-4 flex-wrap">
              ${Dropdown({
                id: "pos-bottom-end",
                trigger: "Bottom End",
                position: "bottom-end",
                children: `${DropdownSection({ children: `${DropdownItem({ children: "Item 1" })}${DropdownItem({ children: "Item 2" })}` })}`,
              })}
              ${Dropdown({
                id: "pos-bottom-start",
                trigger: "Bottom Start",
                position: "bottom-start",
                children: `${DropdownSection({ children: `${DropdownItem({ children: "Item 1" })}${DropdownItem({ children: "Item 2" })}` })}`,
              })}
            </div>
          `,
          code: `<Dropdown id="menu" trigger="Bottom End" position="bottom-end">
  ...
</Dropdown>

<Dropdown id="menu" trigger="Bottom Start" position="bottom-start">
  ...
</Dropdown>`,
        }),
      })}

      ${Section({
        title: "Menu Widths",
        description: "Control the width of the dropdown menu.",
        children: Example({
          label: "Width options",
          children: `
            <div class="flex gap-4 flex-wrap">
              ${Dropdown({
                id: "width-sm",
                trigger: "Small",
                width: "sm",
                children: `${DropdownSection({ children: `${DropdownItem({ children: "Short item" })}` })}`,
              })}
              ${Dropdown({
                id: "width-md",
                trigger: "Medium",
                width: "md",
                children: `${DropdownSection({ children: `${DropdownItem({ children: "Medium item text here" })}` })}`,
              })}
              ${Dropdown({
                id: "width-lg",
                trigger: "Large",
                width: "lg",
                children: `${DropdownSection({ children: `${DropdownItem({ children: "This is a longer item with more text content" })}` })}`,
              })}
            </div>
          `,
          code: `<Dropdown width="sm">...</Dropdown>
<Dropdown width="md">...</Dropdown>  // default
<Dropdown width="lg">...</Dropdown>`,
        }),
      })}

      <!-- Available Icons -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Available Icons</h2>
        <div class="grid grid-cols-4 sm:grid-cols-8 gap-4">
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.edit}</div>
            <span class="text-xs text-gray-600">edit</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.duplicate}</div>
            <span class="text-xs text-gray-600">duplicate</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.archive}</div>
            <span class="text-xs text-gray-600">archive</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.share}</div>
            <span class="text-xs text-gray-600">share</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.delete}</div>
            <span class="text-xs text-gray-600">delete</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.settings}</div>
            <span class="text-xs text-gray-600">settings</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.logout}</div>
            <span class="text-xs text-gray-600">logout</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-5 text-gray-700">${DropdownIcons.user}</div>
            <span class="text-xs text-gray-600">user</span>
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
              <tr><td class="px-4 py-3 font-mono text-primary">id</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Unique dropdown ID</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">trigger</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Trigger button text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Menu content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">position</td><td class="px-4 py-3">"bottom-start" | "bottom-end" | "top-start" | "top-end"</td><td class="px-4 py-3">"bottom-end"</td><td class="px-4 py-3">Menu position</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">width</td><td class="px-4 py-3">"auto" | "sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Menu width</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Dropdowns",
    currentPath: "/_components/ui/dropdowns",
    children: content,
    devMode,
  });
}
