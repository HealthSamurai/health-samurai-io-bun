/**
 * Toggle Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Toggle, ToggleSimple, ToggleGroup, ToggleField } from "../../../components/ui/Toggle";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Toggles",
  description: "Toggle switch component examples",
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

export default function TogglesDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Toggle Component</h1>
        <p class="mt-2 text-gray-600">
          Toggle switches for boolean settings. Uses native checkbox with custom styling.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Toggle, ToggleSimple, ToggleGroup, ToggleField } from "../components/ui/Toggle";
        </code>
      </div>

      ${Section({
        title: "Basic Toggle",
        description: "Simple toggle with label.",
        children: Example({
          label: "Default toggle",
          children: `
            <div class="space-y-4">
              ${Toggle({ name: "notifications", label: "Enable notifications" })}
              ${Toggle({ name: "darkMode", label: "Dark mode", checked: true })}
            </div>
          `,
          code: `<Toggle name="notifications" label="Enable notifications" />
<Toggle name="darkMode" label="Dark mode" checked />`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large toggles.",
        children: Example({
          label: "Toggle sizes",
          children: `
            <div class="flex items-center gap-8">
              ${Toggle({ name: "size-sm", label: "Small", size: "sm" })}
              ${Toggle({ name: "size-md", label: "Medium", size: "md" })}
              ${Toggle({ name: "size-lg", label: "Large", size: "lg" })}
            </div>
          `,
          code: `<Toggle name="size-sm" label="Small" size="sm" />
<Toggle name="size-md" label="Medium" size="md" />
<Toggle name="size-lg" label="Large" size="lg" />`,
        }),
      })}

      ${Section({
        title: "Variants",
        description: "Different visual styles.",
        children: `
          ${Example({
            label: "Default variant",
            children: Toggle({ name: "var-default", label: "Default style", checked: true }),
            code: `<Toggle name="notifications" label="Default style" variant="default" />`,
          })}
          ${Example({
            label: "Short variant",
            children: Toggle({ name: "var-short", label: "Short style", variant: "short", checked: true }),
            code: `<Toggle name="notifications" label="Short style" variant="short" />`,
          })}
          ${Example({
            label: "With icon variant",
            children: Toggle({ name: "var-icon", label: "With icons (X and checkmark)", variant: "with-icon", checked: true }),
            code: `<Toggle name="notifications" label="With icons" variant="with-icon" />`,
          })}
        `,
      })}

      ${Section({
        title: "With Description",
        description: "Toggle with additional context.",
        children: Example({
          label: "Descriptive toggle",
          children: `
            <div class="space-y-6">
              ${Toggle({
                name: "emails",
                label: "Email notifications",
                description: "Receive emails when someone mentions you in a comment.",
              })}
              ${Toggle({
                name: "sms",
                label: "SMS notifications",
                description: "Get text messages for urgent updates only.",
                checked: true,
              })}
            </div>
          `,
          code: `<Toggle
  name="emails"
  label="Email notifications"
  description="Receive emails when someone mentions you in a comment."
/>`,
        }),
      })}

      ${Section({
        title: "Label Position",
        description: "Place label on the left or right.",
        children: Example({
          label: "Left and right labels",
          children: `
            <div class="space-y-4">
              ${Toggle({ name: "label-right", label: "Label on right (default)", labelPosition: "right", checked: true })}
              ${Toggle({ name: "label-left", label: "Label on left", labelPosition: "left", checked: true })}
            </div>
          `,
          code: `<Toggle name="setting" label="Label on right" labelPosition="right" />
<Toggle name="setting" label="Label on left" labelPosition="left" />`,
        }),
      })}

      ${Section({
        title: "Disabled State",
        description: "Toggles that cannot be changed.",
        children: Example({
          label: "Disabled toggles",
          children: `
            <div class="space-y-4">
              ${Toggle({ name: "disabled-off", label: "Disabled (off)", disabled: true })}
              ${Toggle({ name: "disabled-on", label: "Disabled (on)", disabled: true, checked: true })}
            </div>
          `,
          code: `<Toggle name="setting" label="Disabled" disabled />
<Toggle name="setting" label="Disabled on" disabled checked />`,
        }),
      })}

      ${Section({
        title: "Simple Toggle",
        description: "Toggle without visible label (for tables, etc.).",
        children: Example({
          label: "Label-less toggles",
          children: `
            <div class="flex items-center gap-4">
              ${ToggleSimple({ name: "simple1" })}
              ${ToggleSimple({ name: "simple2", checked: true })}
              ${ToggleSimple({ name: "simple3", size: "sm" })}
            </div>
          `,
          code: `// Label is screen-reader only
<ToggleSimple name="active" />
<ToggleSimple name="enabled" checked />`,
        }),
      })}

      ${Section({
        title: "Toggle Group",
        description: "Multiple related toggles.",
        children: Example({
          label: "Settings group",
          children: ToggleGroup({
            toggles: [
              { name: "push", label: "Push notifications", description: "Send push notifications to your device." },
              { name: "email", label: "Email notifications", description: "Receive email updates about activity.", checked: true },
              { name: "sms", label: "SMS notifications", description: "Get text messages for urgent items." },
            ],
          }),
          code: `<ToggleGroup
  toggles={[
    { name: "push", label: "Push notifications", description: "..." },
    { name: "email", label: "Email notifications", description: "...", checked: true },
    { name: "sms", label: "SMS notifications", description: "..." },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Toggle Field",
        description: "With help text and error states (form integration).",
        children: Example({
          label: "Form field toggles",
          children: `
            <div class="space-y-6">
              ${ToggleField({
                name: "marketing",
                label: "Marketing emails",
                helpText: "You can unsubscribe at any time.",
              })}
              ${ToggleField({
                name: "terms",
                label: "I agree to the terms",
                error: "You must accept the terms to continue.",
              })}
            </div>
          `,
          code: `<ToggleField
  name="marketing"
  label="Marketing emails"
  helpText="You can unsubscribe at any time."
/>

<ToggleField
  name="terms"
  label="I agree to the terms"
  error="You must accept the terms to continue."
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
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input name attribute</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Toggle label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Additional description</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">checked</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Initial state</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Disabled state</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Toggle size</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"default" | "short" | "with-icon"</td><td class="px-4 py-3">"default"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">labelPosition</td><td class="px-4 py-3">"left" | "right"</td><td class="px-4 py-3">"right"</td><td class="px-4 py-3">Label placement</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Toggles",
    currentPath: "/_components/ui/toggles",
    children: content,
    devMode,
  });
}
