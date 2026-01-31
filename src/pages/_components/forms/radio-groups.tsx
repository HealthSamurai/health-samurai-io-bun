/**
 * Radio Group Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { RadioGroup, InlineRadioGroup, ColorRadioGroup } from "../../../components/ui/RadioGroup";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Radio Groups",
  description: "Radio button groups for single-choice selection",
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

const notificationOptions = [
  { value: "all", label: "Everything", description: "Get notified about all activity" },
  { value: "mentions", label: "Mentions only", description: "Only get notified when mentioned" },
  { value: "none", label: "Nothing", description: "Turn off all notifications" },
];

const planOptions = [
  { value: "startup", label: "Startup", description: "Up to 5 team members", extra: "$15/mo" },
  { value: "business", label: "Business", description: "Up to 25 team members", extra: "$49/mo" },
  { value: "enterprise", label: "Enterprise", description: "Unlimited team members", extra: "$99/mo" },
];

const sizeOptions = [
  { value: "xxs", label: "XXS" },
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

const colorOptions = [
  { value: "white", label: "White", color: "#ffffff" },
  { value: "gray", label: "Gray", color: "#6b7280" },
  { value: "black", label: "Black", color: "#000000" },
  { value: "red", label: "Red", color: "#ef4444" },
  { value: "blue", label: "Blue", color: "#3b82f6" },
];

export default function RadioGroupsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Radio Groups</h1>
        <p class="mt-2 text-gray-600">
          Radio button groups for single-choice selection with various styles.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { RadioGroup, InlineRadioGroup, ColorRadioGroup } from "../components/ui/RadioGroup";
        </code>
      </div>

      ${Section({
        title: "Simple Radio Group",
        description: "Basic vertical radio buttons.",
        children: Example({
          label: "Default",
          children: RadioGroup({
            name: "notifications",
            label: "Notifications",
            helpText: "How would you like to receive notifications?",
            options: [
              { value: "all", label: "Everything" },
              { value: "mentions", label: "Mentions only" },
              { value: "none", label: "Nothing" },
            ],
            value: "all",
          }),
          code: `<RadioGroup
  name="notifications"
  label="Notifications"
  helpText="How would you like to receive notifications?"
  value="all"
  options={[
    { value: "all", label: "Everything" },
    { value: "mentions", label: "Mentions only" },
    { value: "none", label: "Nothing" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "List with Descriptions",
        description: "Radio options with secondary description text.",
        children: Example({
          label: "With descriptions",
          children: RadioGroup({
            name: "notifications-list",
            label: "Email notifications",
            variant: "list",
            options: notificationOptions,
            value: "mentions",
          }),
          code: `<RadioGroup
  name="notifications"
  label="Email notifications"
  variant="list"
  value="mentions"
  options={[
    { value: "all", label: "Everything", description: "Get notified about all activity" },
    { value: "mentions", label: "Mentions only", description: "Only when mentioned" },
    { value: "none", label: "Nothing", description: "Turn off all notifications" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Card Style",
        description: "Large clickable cards for important choices.",
        children: Example({
          label: "Cards",
          children: RadioGroup({
            name: "plan-cards",
            label: "Select a plan",
            variant: "cards",
            options: planOptions,
            value: "business",
          }),
          code: `<RadioGroup
  name="plan"
  label="Select a plan"
  variant="cards"
  value="business"
  options={[
    { value: "startup", label: "Startup", description: "Up to 5 team members", extra: "$15/mo" },
    { value: "business", label: "Business", description: "Up to 25 team members", extra: "$49/mo" },
    { value: "enterprise", label: "Enterprise", description: "Unlimited team members", extra: "$99/mo" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Horizontal Cards",
        description: "Cards laid out horizontally.",
        children: Example({
          label: "Horizontal layout",
          children: RadioGroup({
            name: "plan-horizontal",
            label: "Choose your plan",
            variant: "cards-horizontal",
            options: [
              { value: "basic", label: "Basic", description: "For individuals" },
              { value: "pro", label: "Pro", description: "For small teams" },
              { value: "team", label: "Team", description: "For organizations" },
            ],
            value: "pro",
          }),
          code: `<RadioGroup
  name="plan"
  label="Choose your plan"
  variant="cards-horizontal"
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "Small Cards (Size Selector)",
        description: "Compact cards for options like sizes or quick choices.",
        children: Example({
          label: "Size selector",
          children: RadioGroup({
            name: "size",
            label: "Size",
            variant: "small-cards",
            options: sizeOptions,
            value: "m",
          }),
          code: `<RadioGroup
  name="size"
  label="Size"
  variant="small-cards"
  value="m"
  options={[
    { value: "xxs", label: "XXS" },
    { value: "xs", label: "XS" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Stacked Panels",
        description: "Vertically stacked panels with connected borders.",
        children: Example({
          label: "Stacked",
          children: RadioGroup({
            name: "plan-stacked",
            label: "Pricing plans",
            variant: "stacked",
            options: planOptions,
            value: "business",
          }),
          code: `<RadioGroup
  name="plan"
  label="Pricing plans"
  variant="stacked"
  value="business"
  options={[
    { value: "startup", label: "Startup", description: "...", extra: "$15/mo" },
    { value: "business", label: "Business", description: "...", extra: "$49/mo" },
    { value: "enterprise", label: "Enterprise", description: "...", extra: "$99/mo" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Inline Radio Group",
        description: "Horizontal layout for compact spaces.",
        children: Example({
          label: "Inline",
          children: InlineRadioGroup({
            name: "side",
            options: [
              { value: "left", label: "Left" },
              { value: "center", label: "Center" },
              { value: "right", label: "Right" },
            ],
            value: "center",
          }),
          code: `<InlineRadioGroup
  name="side"
  value="center"
  options={[
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Color Picker",
        description: "Color swatches as radio options.",
        children: Example({
          label: "Color selection",
          children: ColorRadioGroup({
            name: "color",
            label: "Choose a color",
            colors: colorOptions,
            value: "blue",
          }),
          code: `<ColorRadioGroup
  name="color"
  label="Choose a color"
  value="blue"
  colors={[
    { value: "white", label: "White", color: "#ffffff" },
    { value: "gray", label: "Gray", color: "#6b7280" },
    { value: "black", label: "Black", color: "#000000" },
    { value: "red", label: "Red", color: "#ef4444" },
    { value: "blue", label: "Blue", color: "#3b82f6" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "With Error",
        description: "Radio group with validation error.",
        children: Example({
          label: "Error state",
          children: RadioGroup({
            name: "required-plan",
            label: "Select a plan",
            options: [
              { value: "free", label: "Free" },
              { value: "pro", label: "Pro" },
            ],
            error: "Please select a plan to continue.",
            required: true,
          }),
          code: `<RadioGroup
  name="plan"
  label="Select a plan"
  error="Please select a plan to continue."
  required
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "With Disabled Options",
        description: "Some options can be disabled.",
        children: Example({
          label: "Disabled option",
          children: RadioGroup({
            name: "plan-disabled",
            label: "Select a plan",
            variant: "list",
            options: [
              { value: "free", label: "Free", description: "Limited features" },
              { value: "pro", label: "Pro", description: "All features included" },
              { value: "enterprise", label: "Enterprise", description: "Contact sales", disabled: true },
            ],
            value: "pro",
          }),
          code: `<RadioGroup
  name="plan"
  label="Select a plan"
  variant="list"
  options={[
    { value: "free", label: "Free", description: "..." },
    { value: "pro", label: "Pro", description: "..." },
    { value: "enterprise", label: "Enterprise", description: "...", disabled: true },
  ]}
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
              <tr><td class="px-4 py-3 font-mono text-primary">options</td><td class="px-4 py-3">RadioOption[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of radio options</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Currently selected value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Group label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">helpText</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Help text below label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">error</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Error message</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">required</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Mark as required</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "list" | "cards" | "cards-horizontal" | "small-cards" | "stacked"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onChange</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Datastar change handler</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">RadioOption</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Option value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Display label</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Secondary description</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Disable the option</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">extra</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Extra info (price, etc)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Radio Groups",
    currentPath: "/_components/forms/radio-groups",
    children: content,
    devMode,
  });
}
