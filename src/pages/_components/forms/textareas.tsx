/**
 * Textarea Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Textarea, TextareaWithActions, TextareaFloatingLabel, InlineTextarea, TextareaWithToolbar } from "../../../components/ui/Textarea";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Textareas",
  description: "Multi-line text input fields",
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
        <div class="max-w-lg">
          ${children}
        </div>
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function TextareasDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Textareas</h1>
        <p class="mt-2 text-gray-600">
          Multi-line text input fields with various styles and features.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Textarea, TextareaWithActions, TextareaWithToolbar } from "../components/ui/Textarea";
        </code>
      </div>

      ${Section({
        title: "Simple Textarea",
        description: "Basic multi-line text input.",
        children: Example({
          label: "Default",
          children: Textarea({
            name: "message",
            label: "Message",
            placeholder: "Enter your message...",
          }),
          code: `<Textarea
  name="message"
  label="Message"
  placeholder="Enter your message..."
/>`,
        }),
      })}

      ${Section({
        title: "With Help Text",
        description: "Additional guidance below the textarea.",
        children: Example({
          label: "Help text",
          children: Textarea({
            name: "bio",
            label: "Bio",
            placeholder: "Tell us about yourself",
            helpText: "Write a few sentences about yourself. This will be displayed on your profile.",
          }),
          code: `<Textarea
  name="bio"
  label="Bio"
  placeholder="Tell us about yourself"
  helpText="Write a few sentences about yourself."
/>`,
        }),
      })}

      ${Section({
        title: "With Error",
        description: "Textarea with validation error.",
        children: Example({
          label: "Error state",
          children: Textarea({
            name: "description",
            label: "Description",
            placeholder: "Describe your project",
            error: "Description is required and must be at least 50 characters.",
            required: true,
          }),
          code: `<Textarea
  name="description"
  label="Description"
  error="Description is required and must be at least 50 characters."
  required
/>`,
        }),
      })}

      ${Section({
        title: "Character Count",
        description: "Show remaining characters with maxLength.",
        children: Example({
          label: "With character counter",
          children: Textarea({
            name: "tweet",
            label: "Tweet",
            placeholder: "What's happening?",
            maxLength: 280,
            showCount: true,
            rows: 3,
          }),
          code: `<Textarea
  name="tweet"
  label="Tweet"
  placeholder="What's happening?"
  maxLength={280}
  showCount
  rows={3}
/>`,
        }),
      })}

      ${Section({
        title: "Disabled & Readonly",
        description: "Non-editable textarea states.",
        children: `
          ${Example({
            label: "Disabled",
            children: Textarea({
              name: "disabled-textarea",
              label: "Disabled",
              value: "This textarea is disabled",
              disabled: true,
            }),
            code: `<Textarea name="..." label="Disabled" disabled />`,
          })}
          ${Example({
            label: "Readonly",
            children: Textarea({
              name: "readonly-textarea",
              label: "Readonly",
              value: "This content cannot be edited but can be selected and copied.",
              readonly: true,
            }),
            code: `<Textarea name="..." label="Readonly" readonly />`,
          })}
        `,
      })}

      ${Section({
        title: "Sizes",
        description: "Small, medium, and large textareas.",
        children: `
          ${Example({
            label: "Small",
            children: Textarea({
              name: "size-sm",
              label: "Small",
              placeholder: "Small textarea",
              size: "sm",
              rows: 2,
            }),
            code: `<Textarea size="sm" rows={2} ... />`,
          })}
          ${Example({
            label: "Large",
            children: Textarea({
              name: "size-lg",
              label: "Large",
              placeholder: "Large textarea",
              size: "lg",
              rows: 4,
            }),
            code: `<Textarea size="lg" rows={4} ... />`,
          })}
        `,
      })}

      ${Section({
        title: "Variants",
        description: "Different visual styles.",
        children: `
          ${Example({
            label: "Filled",
            children: Textarea({
              name: "filled",
              label: "Filled variant",
              placeholder: "Filled background style",
              variant: "filled",
            }),
            code: `<Textarea variant="filled" ... />`,
          })}
          ${Example({
            label: "Borderless",
            children: Textarea({
              name: "borderless",
              label: "Borderless variant",
              placeholder: "No border, minimal style",
              variant: "borderless",
            }),
            code: `<Textarea variant="borderless" ... />`,
          })}
        `,
      })}

      ${Section({
        title: "With Actions",
        description: "Textarea with submit button and attachment option.",
        children: Example({
          label: "Comment box",
          children: TextareaWithActions({
            name: "comment",
            label: "Add a comment",
            placeholder: "Write your comment...",
            submitLabel: "Post",
          }),
          code: `<TextareaWithActions
  name="comment"
  label="Add a comment"
  placeholder="Write your comment..."
  submitLabel="Post"
/>`,
        }),
      })}

      ${Section({
        title: "Floating Label",
        description: "Label animates up when focused or filled.",
        children: Example({
          label: "Floating label",
          children: TextareaFloatingLabel({
            name: "feedback",
            label: "Your feedback",
            rows: 4,
          }),
          code: `<TextareaFloatingLabel
  name="feedback"
  label="Your feedback"
  rows={4}
/>`,
        }),
      })}

      ${Section({
        title: "With Toolbar",
        description: "Rich text style textarea with formatting buttons.",
        children: Example({
          label: "Toolbar",
          children: TextareaWithToolbar({
            name: "content",
            label: "Content",
            placeholder: "Write your content here...",
            helpText: "You can use basic formatting like bold and italic.",
          }),
          code: `<TextareaWithToolbar
  name="content"
  label="Content"
  placeholder="Write your content here..."
  helpText="You can use basic formatting like bold and italic."
/>`,
        }),
      })}

      ${Section({
        title: "Inline Textarea",
        description: "Minimal textarea without label.",
        children: Example({
          label: "Inline",
          children: InlineTextarea({
            name: "note",
            placeholder: "Add a quick note...",
            rows: 2,
          }),
          code: `<InlineTextarea
  name="note"
  placeholder="Add a quick note..."
  rows={2}
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
              <tr><td class="px-4 py-3 font-mono text-primary">label</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Label text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">placeholder</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Placeholder text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">value</td><td class="px-4 py-3">string</td><td class="px-4 py-3">""</td><td class="px-4 py-3">Initial value</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">helpText</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Help text below textarea</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">error</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Error message</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">required</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Mark as required</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">disabled</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Disable input</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">readonly</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Make read-only</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">rows</td><td class="px-4 py-3">number</td><td class="px-4 py-3">4</td><td class="px-4 py-3">Visible rows</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">maxLength</td><td class="px-4 py-3">number</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Maximum characters</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showCount</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show character count</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Size variant</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"default" | "filled" | "borderless"</td><td class="px-4 py-3">"default"</td><td class="px-4 py-3">Visual style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onChange</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Datastar change handler</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Textareas",
    currentPath: "/_components/forms/textareas",
    children: content,
    devMode,
  });
}
