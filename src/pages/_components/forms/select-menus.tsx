/**
 * Select Menu Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Select, CustomSelect, InlineSelect } from "../../../components/ui/Select";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Select Menus",
  description: "Custom styled select and dropdown menus",
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
        <div class="max-w-xs">
          ${children}
        </div>
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

const people = [
  { value: "wade", label: "Wade Cooper", avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=48&h=48&fit=crop" },
  { value: "arlene", label: "Arlene McCoy", avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=48&h=48&fit=crop" },
  { value: "devon", label: "Devon Webb", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop" },
  { value: "tom", label: "Tom Cook", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop" },
];

const plans = [
  { value: "startup", label: "Startup", description: "Best for small teams up to 10 people" },
  { value: "business", label: "Business", description: "Perfect for growing companies" },
  { value: "enterprise", label: "Enterprise", description: "Dedicated support and custom solutions" },
];

export default function SelectMenusDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Select Menus</h1>
        <p class="mt-2 text-gray-600">
          Custom styled select and dropdown menu components.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Select, CustomSelect, InlineSelect } from "../components/ui/Select";
        </code>
      </div>

      ${Section({
        title: "Simple Native Select",
        description: "Standard HTML select with custom styling.",
        children: Example({
          label: "Basic select",
          children: Select({
            name: "country",
            label: "Country",
            options: countries,
            placeholder: "Select a country",
          }),
          code: `<Select
  name="country"
  label="Country"
  placeholder="Select a country"
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    ...
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "With Selected Value",
        description: "Pre-selected option.",
        children: Example({
          label: "Pre-selected",
          children: Select({
            name: "country2",
            label: "Country",
            options: countries,
            value: "ca",
          }),
          code: `<Select
  name="country"
  label="Country"
  value="ca"
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "With Help Text",
        description: "Additional context below the select.",
        children: Example({
          label: "Help text",
          children: Select({
            name: "location",
            label: "Location",
            options: countries,
            helpText: "Select your primary business location.",
            placeholder: "Select location",
          }),
          code: `<Select
  name="location"
  label="Location"
  helpText="Select your primary business location."
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "With Error",
        description: "Select with validation error.",
        children: Example({
          label: "Error state",
          children: Select({
            name: "required-country",
            label: "Country",
            options: countries,
            placeholder: "Select a country",
            error: "Please select a country to continue.",
            required: true,
          }),
          code: `<Select
  name="country"
  label="Country"
  error="Please select a country to continue."
  required
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "Disabled",
        description: "Select in disabled state.",
        children: Example({
          label: "Disabled select",
          children: Select({
            name: "disabled-country",
            label: "Country",
            options: countries,
            value: "us",
            disabled: true,
          }),
          code: `<Select
  name="country"
  label="Country"
  value="us"
  disabled
  options={[...]}
/>`,
        }),
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large select variants.",
        children: `
          ${Example({
            label: "Small",
            children: Select({
              name: "size-sm",
              label: "Size Small",
              options: countries,
              size: "sm",
              placeholder: "Select...",
            }),
            code: `<Select size="sm" ... />`,
          })}
          ${Example({
            label: "Large",
            children: Select({
              name: "size-lg",
              label: "Size Large",
              options: countries,
              size: "lg",
              placeholder: "Select...",
            }),
            code: `<Select size="lg" ... />`,
          })}
        `,
      })}

      ${Section({
        title: "Custom Select with Avatars",
        description: "Custom dropdown with avatar images using Datastar.",
        children: Example({
          label: "With avatars",
          children: CustomSelect({
            name: "assignee",
            label: "Assigned to",
            options: people,
            variant: "with-avatar",
            placeholder: "Select team member",
          }),
          code: `<CustomSelect
  name="assignee"
  label="Assigned to"
  variant="with-avatar"
  options={[
    { value: "wade", label: "Wade Cooper", avatar: "..." },
    { value: "arlene", label: "Arlene McCoy", avatar: "..." },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Custom Select with Descriptions",
        description: "Options with secondary description text.",
        children: Example({
          label: "With descriptions",
          children: CustomSelect({
            name: "plan",
            label: "Plan",
            options: plans,
            variant: "with-description",
            placeholder: "Select a plan",
          }),
          code: `<CustomSelect
  name="plan"
  label="Plan"
  variant="with-description"
  options={[
    { value: "startup", label: "Startup", description: "Best for small teams" },
    { value: "business", label: "Business", description: "For growing companies" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Inline Select",
        description: "Minimal select without label, for inline use.",
        children: `
          <div class="mb-8 last:mb-0">
            <h3 class="text-sm font-medium text-gray-700 mb-3">Inline usage</h3>
            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                Show
                ${InlineSelect({
                  name: "perPage",
                  options: [
                    { value: "10", label: "10" },
                    { value: "25", label: "25" },
                    { value: "50", label: "50" },
                    { value: "100", label: "100" },
                  ],
                  value: "25",
                  size: "sm",
                })}
                entries per page
              </div>
            </div>
            ${CodeBlock({ code: `<InlineSelect
  name="perPage"
  size="sm"
  value="25"
  options={[
    { value: "10", label: "10" },
    { value: "25", label: "25" },
    ...
  ]}
/>` })}
          </div>
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
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input name attribute</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">options</td><td class="px-4 py-3">SelectOption[]</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Array of options</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Currently selected value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">placeholder</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Placeholder text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">helpText</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Help text below select</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">error</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Error message</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">required</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Mark as required</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Disable the select</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Size variant</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onChange</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Datastar change handler</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-md font-semibold text-gray-900 mt-6 mb-3">SelectOption</h3>
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
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">Disable the option</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Secondary description (CustomSelect)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">avatar</td><td class="px-4 py-3">string</td><td class="px-4 py-3">Avatar URL (CustomSelect)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Select Menus",
    currentPath: "/_components/forms/select-menus",
    children: content,
    devMode,
  });
}
