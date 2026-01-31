/**
 * Alert Component Demo
 * Shows all Alert types and configurations
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Alert, InfoAlert, SuccessAlert, WarningAlert, ErrorAlert } from "../../../components/ui/Alert";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Alerts",
  description: "Alert component examples",
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

function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, lang)}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="space-y-3">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function AlertsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Alert Component</h1>
        <p class="mt-2 text-gray-600">
          Contextual feedback messages for user actions and system status.
        </p>
      </div>

      <!-- Import -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Alert, InfoAlert, SuccessAlert, WarningAlert, ErrorAlert } from "../components/ui/Alert";
        </code>
      </div>

      ${Section({
        title: "Alert Types",
        description: "Four types for different purposes: info, success, warning, and error.",
        children: Example({
          label: "All types",
          children: `
            ${Alert({ type: "info", title: "Information", children: "This is an informational message to help guide the user." })}
            ${Alert({ type: "success", title: "Success", children: "Your changes have been saved successfully." })}
            ${Alert({ type: "warning", title: "Warning", children: "Please review your input before continuing." })}
            ${Alert({ type: "error", title: "Error", children: "Something went wrong. Please try again." })}
          `,
          code: `<Alert type="info" title="Information">
  This is an informational message to help guide the user.
</Alert>

<Alert type="success" title="Success">
  Your changes have been saved successfully.
</Alert>

<Alert type="warning" title="Warning">
  Please review your input before continuing.
</Alert>

<Alert type="error" title="Error">
  Something went wrong. Please try again.
</Alert>`,
        }),
      })}

      ${Section({
        title: "Convenience Components",
        description: "Shorthand components for each alert type.",
        children: Example({
          label: "InfoAlert, SuccessAlert, WarningAlert, ErrorAlert",
          children: `
            ${InfoAlert({ title: "Tip", children: "You can use keyboard shortcuts to navigate faster." })}
            ${SuccessAlert({ title: "Deployed", children: "Your application is now live." })}
          `,
          code: `<InfoAlert title="Tip">
  You can use keyboard shortcuts to navigate faster.
</InfoAlert>

<SuccessAlert title="Deployed">
  Your application is now live.
</SuccessAlert>`,
        }),
      })}

      ${Section({
        title: "With List",
        description: "Display multiple items as a bullet list.",
        children: Example({
          label: "Validation errors list",
          children: `
            ${Alert({
              type: "error",
              title: "There were 3 errors with your submission",
              list: [
                "Email address is required",
                "Password must be at least 8 characters",
                "Please accept the terms of service"
              ]
            })}
          `,
          code: `<Alert
  type="error"
  title="There were 3 errors with your submission"
  list={[
    "Email address is required",
    "Password must be at least 8 characters",
    "Please accept the terms of service"
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "Dismissible",
        description: "Allow users to dismiss the alert.",
        children: Example({
          label: "With dismiss button",
          children: `
            ${Alert({ type: "info", title: "New feature available", children: "Check out our new dashboard with improved analytics.", dismissible: true })}
            ${Alert({ type: "success", title: "Profile updated", children: "Your profile information has been saved.", dismissible: true })}
          `,
          code: `<Alert type="info" title="New feature available" dismissible>
  Check out our new dashboard with improved analytics.
</Alert>

<Alert type="success" title="Profile updated" dismissible>
  Your profile information has been saved.
</Alert>`,
        }),
      })}

      ${Section({
        title: "With Actions",
        description: "Include action buttons for quick responses.",
        children: Example({
          label: "Action buttons",
          children: `
            ${Alert({
              type: "success",
              title: "Order completed",
              children: "Your order #12345 has been placed successfully.",
              actions: [
                { label: "View order", href: "/orders/12345" },
                { label: "Continue shopping", href: "/shop" }
              ]
            })}
            ${Alert({
              type: "warning",
              title: "Your trial is ending",
              children: "Your free trial expires in 3 days.",
              actions: [
                { label: "Upgrade now", href: "/upgrade" },
                { label: "Learn more", href: "/pricing" }
              ]
            })}
          `,
          code: `<Alert
  type="success"
  title="Order completed"
  actions={[
    { label: "View order", href: "/orders/12345" },
    { label: "Continue shopping", href: "/shop" }
  ]}
>
  Your order #12345 has been placed successfully.
</Alert>

<Alert
  type="warning"
  title="Your trial is ending"
  actions={[
    { label: "Upgrade now", href: "/upgrade" },
    { label: "Learn more", href: "/pricing" }
  ]}
>
  Your free trial expires in 3 days.
</Alert>`,
        }),
      })}

      ${Section({
        title: "With Accent Border",
        description: "Add a left border accent for extra emphasis.",
        children: Example({
          label: "Accent border style",
          children: `
            ${Alert({ type: "info", title: "Note", children: "This is a note with accent border.", accent: true })}
            ${Alert({ type: "warning", title: "Important", children: "Please read this carefully before proceeding.", accent: true })}
            ${Alert({ type: "error", title: "Critical", children: "Immediate action required.", accent: true })}
          `,
          code: `<Alert type="info" title="Note" accent>
  This is a note with accent border.
</Alert>

<Alert type="warning" title="Important" accent>
  Please read this carefully before proceeding.
</Alert>

<Alert type="error" title="Critical" accent>
  Immediate action required.
</Alert>`,
        }),
      })}

      ${Section({
        title: "Without Title",
        description: "Simple alerts with just a message.",
        children: Example({
          label: "Message only",
          children: `
            ${Alert({ type: "info", children: "A new software update is available. See what's new in version 2.0.4." })}
            ${Alert({ type: "success", children: "Your message has been sent successfully." })}
          `,
          code: `<Alert type="info">
  A new software update is available. See what's new in version 2.0.4.
</Alert>

<Alert type="success">
  Your message has been sent successfully.
</Alert>`,
        }),
      })}

      ${Section({
        title: "Common Use Cases",
        description: "Real-world examples of alert usage.",
        children: `
          ${Example({
            label: "Form validation",
            children: `
              ${Alert({
                type: "error",
                title: "Please fix the following errors:",
                list: ["First name is required", "Email format is invalid", "Password must contain at least one number"],
                accent: true
              })}
            `,
            code: `<Alert
  type="error"
  title="Please fix the following errors:"
  list={["First name is required", "Email format is invalid", "Password must contain at least one number"]}
  accent
/>`,
          })}
          ${Example({
            label: "System notification",
            children: `
              ${Alert({
                type: "info",
                title: "Scheduled maintenance",
                children: "The system will be unavailable on Saturday, Feb 1st from 2:00 AM to 6:00 AM EST.",
                dismissible: true,
                actions: [{ label: "Learn more", href: "/maintenance" }]
              })}
            `,
            code: `<Alert
  type="info"
  title="Scheduled maintenance"
  dismissible
  actions={[{ label: "Learn more", href: "/maintenance" }]}
>
  The system will be unavailable on Saturday, Feb 1st from 2:00 AM to 6:00 AM EST.
</Alert>`,
          })}
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
              <tr><td class="px-4 py-3 font-mono text-primary">type</td><td class="px-4 py-3">"info" | "success" | "warning" | "error"</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Alert severity type</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Alert heading</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Alert message content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">list</td><td class="px-4 py-3">string[]</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Items to show as bullet list</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">dismissible</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show dismiss button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onDismiss</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">JS expression for dismiss</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">actions</td><td class="px-4 py-3">AlertAction[]</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Action buttons</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">accent</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show left border accent</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">className</td><td class="px-4 py-3">string</td><td class="px-4 py-3">""</td><td class="px-4 py-3">Additional CSS classes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Alerts",
    currentPath: "/_components/ui/alerts",
    children: content,
    devMode,
  });
}
