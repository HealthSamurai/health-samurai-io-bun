/**
 * Button Group Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { ButtonGroup, IconButtonGroup, ButtonGroupWithDropdown, StatButtonGroup } from "../../../components/ui/ButtonGroup";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Button Groups",
  description: "Group related buttons together",
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
      <div class="bg-white p-6 rounded-lg border border-gray-200 flex flex-wrap gap-4 items-center">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function ButtonGroupsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Button Groups</h1>
        <p class="mt-2 text-gray-600">
          Group related buttons together with consistent styling.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { ButtonGroup, IconButtonGroup, ButtonGroupWithDropdown, StatButtonGroup } from "../components/ui/ButtonGroup";
        </code>
      </div>

      ${Section({
        title: "Basic Button Group",
        description: "Simple group of text buttons.",
        children: Example({
          label: "Default",
          children: ButtonGroup({
            buttons: [
              { label: "Years" },
              { label: "Months" },
              { label: "Days" },
            ],
          }),
          code: `<ButtonGroup buttons={[
  { label: "Years" },
  { label: "Months" },
  { label: "Days" },
]} />`,
        }),
      })}

      ${Section({
        title: "With Icons",
        description: "Buttons with icons and labels.",
        children: Example({
          label: "Icon buttons",
          children: `
            ${ButtonGroup({
              buttons: [
                { label: "Edit", icon: "pencil" },
                { label: "Delete", icon: "trash" },
                { label: "Add", icon: "plus" },
              ],
            })}
          `,
          code: `<ButtonGroup buttons={[
  { label: "Edit", icon: "pencil" },
  { label: "Delete", icon: "trash" },
  { label: "Add", icon: "plus" },
]} />`,
        }),
      })}

      ${Section({
        title: "Icon Only",
        description: "Compact button group with only icons.",
        children: Example({
          label: "Icon-only buttons",
          children: `
            ${IconButtonGroup({
              buttons: [
                { icon: "chevron-left", label: "Previous" },
                { icon: "chevron-right", label: "Next" },
              ],
            })}
            <div class="w-4"></div>
            ${IconButtonGroup({
              buttons: [
                { icon: "plus", label: "Add" },
                { icon: "minus", label: "Remove" },
                { icon: "check", label: "Confirm" },
              ],
            })}
          `,
          code: `<IconButtonGroup buttons={[
  { icon: "chevron-left", label: "Previous" },
  { icon: "chevron-right", label: "Next" },
]} />`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large button groups.",
        children: `
          ${Example({
            label: "Small",
            children: ButtonGroup({
              size: "sm",
              buttons: [
                { label: "Save" },
                { label: "Cancel" },
              ],
            }),
            code: `<ButtonGroup size="sm" buttons={[...]} />`,
          })}
          ${Example({
            label: "Medium (default)",
            children: ButtonGroup({
              size: "md",
              buttons: [
                { label: "Save" },
                { label: "Cancel" },
              ],
            }),
            code: `<ButtonGroup size="md" buttons={[...]} />`,
          })}
          ${Example({
            label: "Large",
            children: ButtonGroup({
              size: "lg",
              buttons: [
                { label: "Save" },
                { label: "Cancel" },
              ],
            }),
            code: `<ButtonGroup size="lg" buttons={[...]} />`,
          })}
        `,
      })}

      ${Section({
        title: "Primary Variant",
        description: "Button group with primary color styling.",
        children: Example({
          label: "Primary buttons",
          children: ButtonGroup({
            variant: "primary",
            buttons: [
              { label: "Day" },
              { label: "Week" },
              { label: "Month" },
              { label: "Year" },
            ],
          }),
          code: `<ButtonGroup variant="primary" buttons={[
  { label: "Day" },
  { label: "Week" },
  { label: "Month" },
  { label: "Year" },
]} />`,
        }),
      })}

      ${Section({
        title: "Active State",
        description: "Highlight the currently selected button.",
        children: Example({
          label: "With active button",
          children: ButtonGroup({
            buttons: [
              { label: "Day" },
              { label: "Week", active: true },
              { label: "Month" },
              { label: "Year" },
            ],
          }),
          code: `<ButtonGroup buttons={[
  { label: "Day" },
  { label: "Week", active: true },
  { label: "Month" },
  { label: "Year" },
]} />`,
        }),
      })}

      ${Section({
        title: "With Dropdown",
        description: "Primary action with additional options in a dropdown.",
        children: Example({
          label: "Split button with dropdown",
          children: ButtonGroupWithDropdown({
            primaryButton: { label: "Save", onClick: "console.log('save')" },
            dropdownItems: [
              { label: "Save as draft", onClick: "console.log('draft')" },
              { label: "Save and publish", onClick: "console.log('publish')" },
              { label: "Export as PDF", onClick: "console.log('export')" },
            ],
          }),
          code: `<ButtonGroupWithDropdown
  primaryButton={{ label: "Save", onClick: "..." }}
  dropdownItems={[
    { label: "Save as draft", onClick: "..." },
    { label: "Save and publish", onClick: "..." },
    { label: "Export as PDF", onClick: "..." },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "With Stats",
        description: "Button group with count badges.",
        children: Example({
          label: "Stat buttons",
          children: StatButtonGroup({
            buttons: [
              { label: "All", count: 52, active: true },
              { label: "Published", count: 38 },
              { label: "Drafts", count: 14 },
            ],
          }),
          code: `<StatButtonGroup buttons={[
  { label: "All", count: 52, active: true },
  { label: "Published", count: 38 },
  { label: "Drafts", count: 14 },
]} />`,
        }),
      })}

      ${Section({
        title: "Disabled Buttons",
        description: "Individual buttons can be disabled.",
        children: Example({
          label: "With disabled button",
          children: ButtonGroup({
            buttons: [
              { label: "Previous", disabled: true },
              { label: "Current" },
              { label: "Next" },
            ],
          }),
          code: `<ButtonGroup buttons={[
  { label: "Previous", disabled: true },
  { label: "Current" },
  { label: "Next" },
]} />`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">buttons</td><td class="px-4 py-3">ButtonGroupItem[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of button configs</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Button size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"default" | "primary"</td><td class="px-4 py-3">"default"</td><td class="px-4 py-3">Visual style</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">ButtonGroupItem</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Button text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">"pencil" | "trash" | "plus" | ...</td><td class="px-4 py-3">Optional icon</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">href</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Link URL</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onClick</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Datastar click handler</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">active</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Highlight as selected</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Disable the button</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Button Groups",
    currentPath: "/_components/forms/button-groups",
    children: content,
    devMode,
  });
}
