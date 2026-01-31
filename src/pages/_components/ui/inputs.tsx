/**
 * Input Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Input, Textarea, Select, InputIcons } from "../../../components/ui/Input";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Inputs",
  description: "Form input components",
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
      <div class="max-w-md bg-white p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function InputsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Input Components</h1>
        <p class="mt-2 text-gray-600">
          Form inputs, textareas, and select dropdowns with labels, validation, and icons.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Input, Textarea, Select, InputIcons } from "../components/ui/Input";
        </code>
      </div>

      ${Section({
        title: "Basic Input",
        description: "Simple text input with label.",
        children: Example({
          label: "Default input",
          children: Input({
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "you@example.com",
          }),
          code: `<Input
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
/>`,
        }),
      })}

      ${Section({
        title: "With Help Text",
        description: "Additional context below the input.",
        children: Example({
          label: "Help text",
          children: Input({
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "you@example.com",
            helpText: "We'll never share your email with anyone else.",
          }),
          code: `<Input
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
  helpText="We'll never share your email with anyone else."
/>`,
        }),
      })}

      ${Section({
        title: "With Error",
        description: "Validation error state.",
        children: Example({
          label: "Error state",
          children: Input({
            label: "Email",
            name: "email",
            type: "email",
            value: "invalid-email",
            error: "Please enter a valid email address.",
          }),
          code: `<Input
  label="Email"
  name="email"
  type="email"
  value="invalid-email"
  error="Please enter a valid email address."
/>`,
        }),
      })}

      ${Section({
        title: "Required Field",
        description: "Mark fields as required.",
        children: Example({
          label: "Required input",
          children: Input({
            label: "Full Name",
            name: "name",
            placeholder: "John Doe",
            required: true,
          }),
          code: `<Input
  label="Full Name"
  name="name"
  placeholder="John Doe"
  required
/>`,
        }),
      })}

      ${Section({
        title: "Corner Hint",
        description: "Optional label in the corner.",
        children: Example({
          label: "With corner hint",
          children: Input({
            label: "Phone Number",
            name: "phone",
            type: "tel",
            placeholder: "+1 (555) 000-0000",
            cornerHint: "Optional",
          }),
          code: `<Input
  label="Phone Number"
  name="phone"
  type="tel"
  placeholder="+1 (555) 000-0000"
  cornerHint="Optional"
/>`,
        }),
      })}

      ${Section({
        title: "With Icons",
        description: "Leading or trailing icons.",
        children: `
          ${Example({
            label: "Leading icon",
            children: Input({
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "you@example.com",
              leadingIcon: InputIcons.email,
            }),
            code: `<Input
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
  leadingIcon={InputIcons.email}
/>`,
          })}
          ${Example({
            label: "Search input",
            children: Input({
              label: "Search",
              name: "search",
              type: "search",
              placeholder: "Search...",
              leadingIcon: InputIcons.search,
              hideLabel: true,
            }),
            code: `<Input
  label="Search"
  name="search"
  type="search"
  placeholder="Search..."
  leadingIcon={InputIcons.search}
  hideLabel
/>`,
          })}
        `,
      })}

      ${Section({
        title: "With Addons",
        description: "Text addons for URLs, currency, etc.",
        children: `
          ${Example({
            label: "Leading addon",
            children: Input({
              label: "Website",
              name: "website",
              type: "url",
              placeholder: "www.example.com",
              leadingAddon: "https://",
            }),
            code: `<Input
  label="Website"
  name="website"
  type="url"
  placeholder="www.example.com"
  leadingAddon="https://"
/>`,
          })}
          ${Example({
            label: "Trailing addon",
            children: Input({
              label: "Price",
              name: "price",
              type: "number",
              placeholder: "0.00",
              trailingAddon: "USD",
            }),
            code: `<Input
  label="Price"
  name="price"
  type="number"
  placeholder="0.00"
  trailingAddon="USD"
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Disabled State",
        description: "Disabled inputs cannot be edited.",
        children: Example({
          label: "Disabled input",
          children: Input({
            label: "Email",
            name: "email",
            type: "email",
            value: "readonly@example.com",
            disabled: true,
          }),
          code: `<Input
  label="Email"
  name="email"
  type="email"
  value="readonly@example.com"
  disabled
/>`,
        }),
      })}

      ${Section({
        title: "Textarea",
        description: "Multi-line text input.",
        children: `
          ${Example({
            label: "Basic textarea",
            children: Textarea({
              label: "Message",
              name: "message",
              placeholder: "Write your message here...",
              rows: 4,
            }),
            code: `<Textarea
  label="Message"
  name="message"
  placeholder="Write your message here..."
  rows={4}
/>`,
          })}
          ${Example({
            label: "Textarea with error",
            children: Textarea({
              label: "Bio",
              name: "bio",
              value: "Hi",
              error: "Bio must be at least 20 characters.",
              rows: 3,
            }),
            code: `<Textarea
  label="Bio"
  name="bio"
  value="Hi"
  error="Bio must be at least 20 characters."
  rows={3}
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Select",
        description: "Dropdown selection.",
        children: `
          ${Example({
            label: "Basic select",
            children: Select({
              label: "Country",
              name: "country",
              placeholder: "Select a country",
              options: [
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ],
            }),
            code: `<Select
  label="Country"
  name="country"
  placeholder="Select a country"
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
  ]}
/>`,
          })}
          ${Example({
            label: "Select with error",
            children: Select({
              label: "Plan",
              name: "plan",
              options: [
                { value: "free", label: "Free" },
                { value: "pro", label: "Pro" },
                { value: "enterprise", label: "Enterprise" },
              ],
              error: "Please select a plan to continue.",
            }),
            code: `<Select
  label="Plan"
  name="plan"
  options={[...]}
  error="Please select a plan to continue."
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Input Types",
        description: "Different input types for various data.",
        children: `
          <div class="max-w-md bg-white p-6 rounded-lg border border-gray-200 space-y-4">
            ${Input({ label: "Password", name: "password", type: "password", placeholder: "Enter password" })}
            ${Input({ label: "Number", name: "quantity", type: "number", placeholder: "0" })}
            ${Input({ label: "Date", name: "date", type: "date" })}
            ${Input({ label: "Phone", name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" })}
          </div>
          ${CodeBlock({ code: `<Input label="Password" name="password" type="password" />
<Input label="Number" name="quantity" type="number" />
<Input label="Date" name="date" type="date" />
<Input label="Phone" name="phone" type="tel" />` })}
        `,
      })}

      <!-- Available Icons -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Available Icons</h2>
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.email}</div>
            <span class="text-xs text-gray-600">email</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.user}</div>
            <span class="text-xs text-gray-600">user</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.search}</div>
            <span class="text-xs text-gray-600">search</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.phone}</div>
            <span class="text-xs text-gray-600">phone</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.lock}</div>
            <span class="text-xs text-gray-600">lock</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div class="size-6 text-gray-700">${InputIcons.calendar}</div>
            <span class="text-xs text-gray-600">calendar</span>
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
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">name</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Input name attribute</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">type</td><td class="px-4 py-3">"text" | "email" | "password" | ...</td><td class="px-4 py-3">"text"</td><td class="px-4 py-3">Input type</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">placeholder</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Placeholder text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Current value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">helpText</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Help text below input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">error</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Error message</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">cornerHint</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Corner hint (e.g., "Optional")</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">leadingIcon</td><td class="px-4 py-3">string (SVG)</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Icon before input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">leadingAddon</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Text addon before input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">trailingAddon</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Text addon after input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Disable input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">required</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Mark as required</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">hideLabel</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Visually hide label</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Inputs",
    currentPath: "/_components/ui/inputs",
    children: content,
    devMode,
  });
}
