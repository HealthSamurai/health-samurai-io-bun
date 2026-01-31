/**
 * Checkbox Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Checkbox, CheckboxRight, CheckboxGroup, Toggle, ToggleWithIcon } from "../../../components/ui/Checkbox";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Checkboxes",
  description: "Checkbox inputs and toggle switches",
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

export default function CheckboxesDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Checkboxes</h1>
        <p class="mt-2 text-gray-600">
          Checkbox inputs, checkbox groups, and toggle switches.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Checkbox, CheckboxGroup, Toggle, ToggleWithIcon } from "../components/ui/Checkbox";
        </code>
      </div>

      ${Section({
        title: "Simple Checkbox",
        description: "Basic checkbox with label.",
        children: Example({
          label: "Default",
          children: Checkbox({
            name: "terms",
            label: "I agree to the terms and conditions",
          }),
          code: `<Checkbox name="terms" label="I agree to the terms and conditions" />`,
        }),
      })}

      ${Section({
        title: "With Description",
        description: "Checkbox with secondary description text.",
        children: Example({
          label: "With description",
          children: Checkbox({
            name: "notifications",
            label: "Email notifications",
            description: "Get notified when someone mentions you or replies to your comment.",
          }),
          code: `<Checkbox
  name="notifications"
  label="Email notifications"
  description="Get notified when someone mentions you or replies to your comment."
/>`,
        }),
      })}

      ${Section({
        title: "Checked State",
        description: "Pre-checked checkbox.",
        children: Example({
          label: "Checked",
          children: Checkbox({
            name: "remember",
            label: "Remember me",
            checked: true,
          }),
          code: `<Checkbox name="remember" label="Remember me" checked />`,
        }),
      })}

      ${Section({
        title: "Disabled",
        description: "Disabled checkbox state.",
        children: `
          ${Example({
            label: "Disabled unchecked",
            children: Checkbox({
              name: "disabled1",
              label: "This option is disabled",
              disabled: true,
            }),
            code: `<Checkbox name="option" label="This option is disabled" disabled />`,
          })}
          ${Example({
            label: "Disabled checked",
            children: Checkbox({
              name: "disabled2",
              label: "This option is disabled but checked",
              disabled: true,
              checked: true,
            }),
            code: `<Checkbox name="option" label="..." disabled checked />`,
          })}
        `,
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large checkboxes.",
        children: `
          ${Example({
            label: "Small",
            children: Checkbox({ name: "size-sm", label: "Small checkbox", size: "sm" }),
            code: `<Checkbox size="sm" ... />`,
          })}
          ${Example({
            label: "Medium (default)",
            children: Checkbox({ name: "size-md", label: "Medium checkbox", size: "md" }),
            code: `<Checkbox size="md" ... />`,
          })}
          ${Example({
            label: "Large",
            children: Checkbox({ name: "size-lg", label: "Large checkbox", size: "lg" }),
            code: `<Checkbox size="lg" ... />`,
          })}
        `,
      })}

      ${Section({
        title: "Checkbox on Right",
        description: "Label on left, checkbox on right.",
        children: Example({
          label: "Right-aligned checkbox",
          children: `
            <div class="max-w-sm space-y-4">
              ${CheckboxRight({
                name: "push-all",
                label: "Push everything",
                description: "Get notified about all activity",
              })}
              ${CheckboxRight({
                name: "push-email",
                label: "Email only",
                description: "Notifications via email",
                checked: true,
              })}
            </div>
          `,
          code: `<CheckboxRight
  name="push-all"
  label="Push everything"
  description="Get notified about all activity"
/>`,
        }),
      })}

      ${Section({
        title: "Checkbox Group",
        description: "Group of related checkboxes.",
        children: Example({
          label: "Simple group",
          children: CheckboxGroup({
            name: "features",
            label: "Features",
            helpText: "Select the features you want to enable.",
            options: [
              { value: "comments", label: "Comments", description: "Allow users to comment on posts" },
              { value: "reactions", label: "Reactions", description: "Allow emoji reactions", checked: true },
              { value: "sharing", label: "Sharing", description: "Enable social sharing" },
            ],
          }),
          code: `<CheckboxGroup
  name="features"
  label="Features"
  helpText="Select the features you want to enable."
  options={[
    { value: "comments", label: "Comments", description: "Allow users to comment" },
    { value: "reactions", label: "Reactions", description: "Allow emoji reactions", checked: true },
    { value: "sharing", label: "Sharing", description: "Enable social sharing" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "List Variant",
        description: "Checkbox group with divider lines.",
        children: Example({
          label: "List style",
          children: CheckboxGroup({
            name: "notifications-list",
            label: "Notification settings",
            variant: "list",
            options: [
              { value: "email", label: "Email", description: "Get notified by email" },
              { value: "sms", label: "SMS", description: "Get notified by text message", checked: true },
              { value: "push", label: "Push notifications", description: "Mobile app notifications" },
            ],
          }),
          code: `<CheckboxGroup
  name="notifications"
  label="Notification settings"
  variant="list"
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "Card Variant",
        description: "Checkbox options as clickable cards.",
        children: Example({
          label: "Card style",
          children: CheckboxGroup({
            name: "addons",
            label: "Add-ons",
            variant: "cards",
            options: [
              { value: "storage", label: "Extra storage", description: "Add 100GB of cloud storage" },
              { value: "support", label: "Priority support", description: "24/7 premium support", checked: true },
              { value: "backup", label: "Daily backups", description: "Automatic daily data backups" },
            ],
          }),
          code: `<CheckboxGroup
  name="addons"
  label="Add-ons"
  variant="cards"
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "Inline Variant",
        description: "Horizontal checkbox layout.",
        children: Example({
          label: "Inline checkboxes",
          children: CheckboxGroup({
            name: "days",
            label: "Available days",
            variant: "inline",
            options: [
              { value: "mon", label: "Mon" },
              { value: "tue", label: "Tue", checked: true },
              { value: "wed", label: "Wed", checked: true },
              { value: "thu", label: "Thu" },
              { value: "fri", label: "Fri", checked: true },
            ],
          }),
          code: `<CheckboxGroup
  name="days"
  label="Available days"
  variant="inline"
  options={[
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue", checked: true },
    ...
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Toggle Switch",
        description: "On/off toggle switch (styled as switch instead of checkbox).",
        children: `
          ${Example({
            label: "Basic toggle",
            children: `<div class="max-w-sm">${Toggle({
              name: "airplane-mode",
              label: "Airplane Mode",
            })}</div>`,
            code: `<Toggle name="airplane-mode" label="Airplane Mode" />`,
          })}
          ${Example({
            label: "Checked toggle",
            children: `<div class="max-w-sm">${Toggle({
              name: "wifi",
              label: "Wi-Fi",
              checked: true,
            })}</div>`,
            code: `<Toggle name="wifi" label="Wi-Fi" checked />`,
          })}
          ${Example({
            label: "With description",
            children: `<div class="max-w-sm">${Toggle({
              name: "auto-update",
              label: "Automatic updates",
              description: "Keep your app up to date automatically",
              checked: true,
            })}</div>`,
            code: `<Toggle
  name="auto-update"
  label="Automatic updates"
  description="Keep your app up to date automatically"
  checked
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Toggle Sizes",
        description: "Different toggle sizes.",
        children: Example({
          label: "Small, medium, large",
          children: `
            <div class="space-y-4">
              ${Toggle({ name: "toggle-sm", label: "Small toggle", size: "sm" })}
              ${Toggle({ name: "toggle-md", label: "Medium toggle", size: "md" })}
              ${Toggle({ name: "toggle-lg", label: "Large toggle", size: "lg" })}
            </div>
          `,
          code: `<Toggle size="sm" ... />
<Toggle size="md" ... />
<Toggle size="lg" ... />`,
        }),
      })}

      ${Section({
        title: "Toggle with Icons",
        description: "Toggle switch with check/X icons.",
        children: Example({
          label: "Icon toggle",
          children: `<div class="max-w-sm">${ToggleWithIcon({
            name: "dark-mode",
            label: "Dark mode",
            description: "Use dark theme for the interface",
          })}</div>`,
          code: `<ToggleWithIcon
  name="dark-mode"
  label="Dark mode"
  description="Use dark theme for the interface"
/>`,
        }),
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>
        <h3 class="text-md font-semibold text-gray-900 mb-3">Checkbox</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input name</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Description text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">checked</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Is checked</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Is disabled</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Size variant</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onChange</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Datastar change handler</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">CheckboxGroup</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Group name</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">options</td><td class="px-4 py-3">CheckboxGroupOption[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of options</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Group label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "list" | "cards" | "inline"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">Toggle</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input name</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Description text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">checked</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Is on</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Is disabled</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Size variant</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Checkboxes",
    currentPath: "/_components/forms/checkboxes",
    children: content,
    devMode,
  });
}
