/**
 * Button Component Demo
 * Shows all Button variants, sizes, and features
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Button, ButtonGroup, GroupButton, ButtonIcons } from "../../../components/ui/Button";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Buttons",
  description: "Button component examples",
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

export default function ButtonsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Button Component</h1>
        <p class="mt-2 text-gray-600">
          Flexible button component with multiple variants, sizes, and states.
        </p>
      </div>

      <!-- Import -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Button, ButtonGroup, ButtonIcons } from "../components/ui/Button";
        </code>
      </div>

      ${Section({
        title: "Variants",
        description: "Different visual styles for various use cases.",
        children: Example({
          label: "Primary, Secondary, Soft, Ghost, Danger",
          children: `
            <div class="flex flex-wrap gap-3">
              ${Button({ variant: "primary", children: "Primary" })}
              ${Button({ variant: "secondary", children: "Secondary" })}
              ${Button({ variant: "soft", children: "Soft" })}
              ${Button({ variant: "ghost", children: "Ghost" })}
              ${Button({ variant: "danger", children: "Danger" })}
            </div>
          `,
          code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="soft">Soft</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Five size options from extra small to extra large.",
        children: Example({
          label: "xs, sm, md, lg, xl",
          children: `
            <div class="flex flex-wrap items-center gap-3">
              ${Button({ size: "xs", children: "Extra Small" })}
              ${Button({ size: "sm", children: "Small" })}
              ${Button({ size: "md", children: "Medium" })}
              ${Button({ size: "lg", children: "Large" })}
              ${Button({ size: "xl", children: "Extra Large" })}
            </div>
          `,
          code: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`,
        }),
      })}

      ${Section({
        title: "With Icons",
        description: "Buttons can include icons on either side.",
        children: `
          ${Example({
            label: "Leading Icon",
            children: `
              <div class="flex flex-wrap gap-3">
                ${Button({ icon: ButtonIcons.plus, children: "Add Item" })}
                ${Button({ variant: "secondary", icon: ButtonIcons.download, children: "Download" })}
                ${Button({ variant: "soft", icon: ButtonIcons.edit, children: "Edit" })}
              </div>
            `,
            code: `<Button icon={ButtonIcons.plus}>Add Item</Button>
<Button variant="secondary" icon={ButtonIcons.download}>Download</Button>
<Button variant="soft" icon={ButtonIcons.edit}>Edit</Button>`,
          })}
          ${Example({
            label: "Trailing Icon",
            children: `
              <div class="flex flex-wrap gap-3">
                ${Button({ icon: ButtonIcons.arrowRight, iconPosition: "right", children: "Continue" })}
                ${Button({ variant: "secondary", icon: ButtonIcons.chevronRight, iconPosition: "right", children: "Next" })}
              </div>
            `,
            code: `<Button icon={ButtonIcons.arrowRight} iconPosition="right">Continue</Button>
<Button variant="secondary" icon={ButtonIcons.chevronRight} iconPosition="right">Next</Button>`,
          })}
        `,
      })}

      ${Section({
        title: "Icon Only",
        description: "Compact circular buttons with just an icon.",
        children: Example({
          label: "Various sizes and variants",
          children: `
            <div class="flex flex-wrap items-center gap-3">
              ${Button({ icon: ButtonIcons.plus, iconOnly: true, size: "sm", "aria-label": "Add" })}
              ${Button({ icon: ButtonIcons.plus, iconOnly: true, size: "md", "aria-label": "Add" })}
              ${Button({ icon: ButtonIcons.plus, iconOnly: true, size: "lg", "aria-label": "Add" })}
              ${Button({ icon: ButtonIcons.edit, iconOnly: true, variant: "secondary", "aria-label": "Edit" })}
              ${Button({ icon: ButtonIcons.trash, iconOnly: true, variant: "danger", "aria-label": "Delete" })}
              ${Button({ icon: ButtonIcons.close, iconOnly: true, variant: "ghost", "aria-label": "Close" })}
            </div>
          `,
          code: `<Button icon={ButtonIcons.plus} iconOnly size="sm" aria-label="Add" />
<Button icon={ButtonIcons.plus} iconOnly size="md" aria-label="Add" />
<Button icon={ButtonIcons.plus} iconOnly size="lg" aria-label="Add" />
<Button icon={ButtonIcons.edit} iconOnly variant="secondary" aria-label="Edit" />
<Button icon={ButtonIcons.trash} iconOnly variant="danger" aria-label="Delete" />
<Button icon={ButtonIcons.close} iconOnly variant="ghost" aria-label="Close" />`,
        }),
      })}

      ${Section({
        title: "Rounded (Pill)",
        description: "Fully rounded buttons for a softer look.",
        children: Example({
          label: "Rounded variants",
          children: `
            <div class="flex flex-wrap items-center gap-3">
              ${Button({ rounded: true, children: "Rounded" })}
              ${Button({ rounded: true, variant: "secondary", children: "Rounded" })}
              ${Button({ rounded: true, variant: "soft", children: "Rounded" })}
              ${Button({ rounded: true, icon: ButtonIcons.plus, iconOnly: true, "aria-label": "Add" })}
            </div>
          `,
          code: `<Button rounded>Rounded</Button>
<Button rounded variant="secondary">Rounded</Button>
<Button rounded variant="soft">Rounded</Button>
<Button rounded icon={ButtonIcons.plus} iconOnly aria-label="Add" />`,
        }),
      })}

      ${Section({
        title: "States",
        description: "Disabled and loading states.",
        children: `
          ${Example({
            label: "Disabled",
            children: `
              <div class="flex flex-wrap gap-3">
                ${Button({ disabled: true, children: "Disabled" })}
                ${Button({ disabled: true, variant: "secondary", children: "Disabled" })}
              </div>
            `,
            code: `<Button disabled>Disabled</Button>
<Button disabled variant="secondary">Disabled</Button>`,
          })}
          ${Example({
            label: "Loading",
            children: `
              <div class="flex flex-wrap gap-3">
                ${Button({ loading: true, children: "Saving..." })}
                ${Button({ loading: true, variant: "secondary", children: "Loading..." })}
              </div>
            `,
            code: `<Button loading>Saving...</Button>
<Button loading variant="secondary">Loading...</Button>`,
          })}
        `,
      })}

      ${Section({
        title: "As Link",
        description: "Render as anchor tag when href is provided.",
        children: Example({
          label: "Link buttons",
          children: `
            <div class="flex flex-wrap gap-3">
              ${Button({ href: "/signup", children: "Sign Up" })}
              ${Button({ href: "/docs", variant: "secondary", children: "Documentation" })}
              ${Button({ href: "/demo", variant: "soft", icon: ButtonIcons.arrowRight, iconPosition: "right", children: "Try Demo" })}
            </div>
          `,
          code: `<Button href="/signup">Sign Up</Button>
<Button href="/docs" variant="secondary">Documentation</Button>
<Button href="/demo" variant="soft" icon={ButtonIcons.arrowRight} iconPosition="right">Try Demo</Button>`,
        }),
      })}

      ${Section({
        title: "Full Width",
        description: "Buttons that span the full container width.",
        children: Example({
          label: "Full width buttons",
          children: `
            <div class="max-w-sm space-y-3">
              ${Button({ fullWidth: true, children: "Full Width Primary" })}
              ${Button({ fullWidth: true, variant: "secondary", children: "Full Width Secondary" })}
            </div>
          `,
          code: `<Button fullWidth>Full Width Primary</Button>
<Button fullWidth variant="secondary">Full Width Secondary</Button>`,
        }),
      })}

      ${Section({
        title: "Button Groups",
        description: "Group related buttons together.",
        children: Example({
          label: "Grouped buttons",
          children: `
            <div class="space-y-4">
              ${ButtonGroup({
                children: `
                  ${GroupButton({ children: "Years", first: true })}
                  ${GroupButton({ children: "Months" })}
                  ${GroupButton({ children: "Days", last: true })}
                `,
              })}
              ${ButtonGroup({
                children: `
                  ${GroupButton({ icon: ButtonIcons.chevronLeft, first: true, children: "Previous" })}
                  ${GroupButton({ icon: ButtonIcons.chevronRight, iconPosition: "right", last: true, children: "Next" })}
                `,
              })}
            </div>
          `,
          code: `<ButtonGroup>
  <GroupButton first>Years</GroupButton>
  <GroupButton>Months</GroupButton>
  <GroupButton last>Days</GroupButton>
</ButtonGroup>

<ButtonGroup>
  <GroupButton icon={ButtonIcons.chevronLeft} first>Previous</GroupButton>
  <GroupButton icon={ButtonIcons.chevronRight} iconPosition="right" last>Next</GroupButton>
</ButtonGroup>`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Button text content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"primary" | "secondary" | "soft" | "ghost" | "danger"</td><td class="px-4 py-3">"primary"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"xs" | "sm" | "md" | "lg" | "xl"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Button size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">href</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Renders as link</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">string (SVG)</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Icon SVG string</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">iconPosition</td><td class="px-4 py-3">"left" | "right"</td><td class="px-4 py-3">"left"</td><td class="px-4 py-3">Icon placement</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">iconOnly</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Circular icon button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">rounded</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Pill-shaped button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">fullWidth</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Full container width</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">loading</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show loading spinner</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Disable button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">className</td><td class="px-4 py-3">string</td><td class="px-4 py-3">""</td><td class="px-4 py-3">Additional CSS classes</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Available Icons -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Available Icons</h2>
        <p class="text-sm text-gray-600 mb-4">Import from ButtonIcons or use your own SVG strings.</p>
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.plus}</div>
            <span class="text-xs text-gray-600">plus</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.check}</div>
            <span class="text-xs text-gray-600">check</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.chevronRight}</div>
            <span class="text-xs text-gray-600">chevronRight</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.chevronLeft}</div>
            <span class="text-xs text-gray-600">chevronLeft</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.arrowRight}</div>
            <span class="text-xs text-gray-600">arrowRight</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.download}</div>
            <span class="text-xs text-gray-600">download</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.trash}</div>
            <span class="text-xs text-gray-600">trash</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.edit}</div>
            <span class="text-xs text-gray-600">edit</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${ButtonIcons.close}</div>
            <span class="text-xs text-gray-600">close</span>
          </div>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Buttons",
    currentPath: "/_components/ui/buttons",
    children: content,
    devMode,
  });
}
