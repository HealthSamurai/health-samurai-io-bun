/**
 * Divider Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Divider, VerticalDivider, DividerWithToolbar } from "../../../components/ui/Divider";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Dividers",
  description: "Visual separators for content sections",
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

export default function DividersDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Divider Component</h1>
        <p class="mt-2 text-gray-600">
          Visual separators for dividing content sections.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Divider, VerticalDivider, DividerWithToolbar } from "../components/ui/Divider";
        </code>
      </div>

      ${Section({
        title: "Simple Divider",
        description: "Basic horizontal line.",
        children: Example({
          label: "Default divider",
          children: `
            <p class="text-sm text-gray-600">Content above the divider</p>
            ${Divider({})}
            <p class="text-sm text-gray-600">Content below the divider</p>
          `,
          code: `<Divider />`,
        }),
      })}

      ${Section({
        title: "With Label",
        description: "Divider with centered text label.",
        children: `
          ${Example({
            label: "Centered label",
            children: `
              <div class="py-4">
                ${Divider({ label: "Or continue with" })}
              </div>
            `,
            code: `<Divider label="Or continue with" />`,
          })}
          ${Example({
            label: "Left-aligned label",
            children: `
              <div class="py-4">
                ${Divider({ label: "Section", labelPosition: "left" })}
              </div>
            `,
            code: `<Divider label="Section" labelPosition="left" />`,
          })}
          ${Example({
            label: "Right-aligned label",
            children: `
              <div class="py-4">
                ${Divider({ label: "More", labelPosition: "right" })}
              </div>
            `,
            code: `<Divider label="More" labelPosition="right" />`,
          })}
        `,
      })}

      ${Section({
        title: "With Icon",
        description: "Divider with centered icon.",
        children: Example({
          label: "Icon dividers",
          children: `
            <div class="space-y-8 py-4">
              ${Divider({ icon: "plus" })}
              ${Divider({ icon: "star" })}
              ${Divider({ icon: "heart" })}
            </div>
          `,
          code: `<Divider icon="plus" />
<Divider icon="star" />
<Divider icon="heart" />`,
        }),
      })}

      ${Section({
        title: "With Button",
        description: "Divider with centered action button.",
        children: Example({
          label: "Button divider",
          children: `
            <div class="py-4">
              ${Divider({ button: { label: "Add item", onClick: "addItem()" } })}
            </div>
          `,
          code: `<Divider button={{ label: "Add item", onClick: "addItem()" }} />`,
        }),
      })}

      ${Section({
        title: "With Title",
        description: "Divider with title text and optional action.",
        children: `
          ${Example({
            label: "Title only",
            children: `
              <div class="py-4">
                ${Divider({ title: { text: "Team Members" } })}
              </div>
            `,
            code: `<Divider title={{ text: "Team Members" }} />`,
          })}
          ${Example({
            label: "Title with action",
            children: `
              <div class="py-4">
                ${Divider({
                  title: {
                    text: "Recent Projects",
                    action: { label: "View all", href: "#" },
                  },
                })}
              </div>
            `,
            code: `<Divider title={{
  text: "Recent Projects",
  action: { label: "View all", href: "#" }
}} />`,
          })}
        `,
      })}

      ${Section({
        title: "Border Styles",
        description: "Different line styles.",
        children: Example({
          label: "Solid, dashed, and dotted",
          children: `
            <div class="space-y-8 py-4">
              ${Divider({ label: "Solid", variant: "solid" })}
              ${Divider({ label: "Dashed", variant: "dashed" })}
              ${Divider({ label: "Dotted", variant: "dotted" })}
            </div>
          `,
          code: `<Divider variant="solid" label="Solid" />
<Divider variant="dashed" label="Dashed" />
<Divider variant="dotted" label="Dotted" />`,
        }),
      })}

      ${Section({
        title: "Colors",
        description: "Gray and primary colors.",
        children: Example({
          label: "Color options",
          children: `
            <div class="space-y-8 py-4">
              ${Divider({ label: "Gray", color: "gray" })}
              ${Divider({ label: "Primary", color: "primary" })}
            </div>
          `,
          code: `<Divider color="gray" label="Gray" />
<Divider color="primary" label="Primary" />`,
        }),
      })}

      ${Section({
        title: "Spacing",
        description: "Different vertical spacing sizes.",
        children: Example({
          label: "Spacing sizes",
          children: `
            <div class="bg-gray-50 rounded p-4">
              <p class="text-xs text-gray-500">Small spacing</p>
              ${Divider({ spacing: "sm" })}
              <p class="text-xs text-gray-500">Medium spacing (default)</p>
              ${Divider({ spacing: "md" })}
              <p class="text-xs text-gray-500">Large spacing</p>
              ${Divider({ spacing: "lg" })}
              <p class="text-xs text-gray-500">End</p>
            </div>
          `,
          code: `<Divider spacing="sm" />
<Divider spacing="md" />
<Divider spacing="lg" />`,
        }),
      })}

      ${Section({
        title: "With Toolbar",
        description: "Divider with multiple action buttons.",
        children: Example({
          label: "Toolbar divider",
          children: `
            <div class="py-4">
              ${DividerWithToolbar({
                buttons: [
                  { label: "Edit", icon: "plus" },
                  { label: "Delete" },
                  { label: "Share" },
                ],
              })}
            </div>
          `,
          code: `<DividerWithToolbar buttons={[
  { label: "Edit", icon: "plus" },
  { label: "Delete" },
  { label: "Share" },
]} />`,
        }),
      })}

      ${Section({
        title: "Vertical Divider",
        description: "Vertical separator for inline content.",
        children: Example({
          label: "Vertical dividers",
          children: `
            <div class="flex items-center gap-4 py-4">
              <span class="text-sm text-gray-600">Item 1</span>
              ${VerticalDivider({ height: "md", color: "gray" })}
              <span class="text-sm text-gray-600">Item 2</span>
              ${VerticalDivider({ height: "md", color: "gray" })}
              <span class="text-sm text-gray-600">Item 3</span>
            </div>
          `,
          code: `<div class="flex items-center gap-4">
  <span>Item 1</span>
  <VerticalDivider height="md" />
  <span>Item 2</span>
  <VerticalDivider height="md" />
  <span>Item 3</span>
</div>`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">labelPosition</td><td class="px-4 py-3">"center" | "left" | "right"</td><td class="px-4 py-3">"center"</td><td class="px-4 py-3">Label position</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">"plus" | "arrow-down" | "star" | "heart" | "check"</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Icon name</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">button</td><td class="px-4 py-3">{ label, href?, onClick? }</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Button config</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">{ text, action? }</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Title with optional action</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"solid" | "dashed" | "dotted"</td><td class="px-4 py-3">"solid"</td><td class="px-4 py-3">Border style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">color</td><td class="px-4 py-3">"gray" | "primary"</td><td class="px-4 py-3">"gray"</td><td class="px-4 py-3">Border color</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">spacing</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Vertical spacing</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Dividers",
    currentPath: "/_components/layout/dividers",
    children: content,
    devMode,
  });
}
