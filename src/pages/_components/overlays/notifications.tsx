/**
 * Notification Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Notification, InlineNotification, ToastContainer } from "../../../components/ui/Notification";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Notifications",
  description: "Toast and inline notification components",
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
      <div class="bg-gray-100 p-6 rounded-lg">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

export default function NotificationsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Notification Component</h1>
        <p class="mt-2 text-gray-600">
          Toast notifications and inline alerts for feedback messages.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Notification, InlineNotification, ToastContainer } from "../components/ui/Notification";
        </code>
      </div>

      ${Section({
        title: "Simple Notifications",
        description: "Basic toast notifications with icon and close button.",
        children: `
          ${Example({
            label: "Success",
            children: `<div class="max-w-sm mx-auto">${Notification({ type: "success", title: "Successfully saved!", description: "Your changes have been saved." })}</div>`,
            code: `<Notification type="success" title="Successfully saved!" description="Your changes have been saved." />`,
          })}
          ${Example({
            label: "Error",
            children: `<div class="max-w-sm mx-auto">${Notification({ type: "error", title: "Error occurred", description: "There was a problem with your request." })}</div>`,
            code: `<Notification type="error" title="Error occurred" description="There was a problem with your request." />`,
          })}
          ${Example({
            label: "Warning",
            children: `<div class="max-w-sm mx-auto">${Notification({ type: "warning", title: "Warning", description: "Your session is about to expire." })}</div>`,
            code: `<Notification type="warning" title="Warning" description="Your session is about to expire." />`,
          })}
          ${Example({
            label: "Info",
            children: `<div class="max-w-sm mx-auto">${Notification({ type: "info", title: "New update available", description: "A new version is ready to install." })}</div>`,
            code: `<Notification type="info" title="New update available" description="A new version is ready to install." />`,
          })}
        `,
      })}

      ${Section({
        title: "Condensed Variant",
        description: "Compact notification without description.",
        children: Example({
          label: "Condensed notifications",
          children: `
            <div class="max-w-sm mx-auto space-y-4">
              ${Notification({ type: "success", title: "Saved!", variant: "condensed" })}
              ${Notification({ type: "error", title: "Failed to save", variant: "condensed" })}
            </div>
          `,
          code: `<Notification type="success" title="Saved!" variant="condensed" />
<Notification type="error" title="Failed to save" variant="condensed" />`,
        }),
      })}

      ${Section({
        title: "With Actions",
        description: "Notifications with action buttons.",
        children: Example({
          label: "Action buttons",
          children: `<div class="max-w-sm mx-auto">${Notification({
            type: "info",
            title: "New message received",
            description: "You have a new message from John Doe.",
            variant: "with-actions",
            actions: [
              { label: "View", primary: true, href: "#" },
              { label: "Dismiss", onClick: "$dismiss = true" },
            ],
          })}</div>`,
          code: `<Notification
  type="info"
  title="New message received"
  description="You have a new message from John Doe."
  variant="with-actions"
  actions={[
    { label: "View", primary: true, href: "#" },
    { label: "Dismiss", onClick: "$dismiss = true" },
  ]}
/>`,
        }),
      })}

      ${Section({
        title: "With Avatar",
        description: "Notification with user avatar instead of icon.",
        children: Example({
          label: "Avatar notification",
          children: `<div class="max-w-sm mx-auto">${Notification({
            title: "Emilia Gates commented",
            description: "Great work on the new feature!",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          })}</div>`,
          code: `<Notification
  title="Emilia Gates commented"
  description="Great work on the new feature!"
  avatar="https://..."
/>`,
        }),
      })}

      ${Section({
        title: "Non-Dismissible",
        description: "Notification without close button.",
        children: Example({
          label: "No dismiss button",
          children: `<div class="max-w-sm mx-auto">${Notification({
            type: "info",
            title: "Processing...",
            description: "Please wait while we process your request.",
            dismissible: false,
          })}</div>`,
          code: `<Notification
  type="info"
  title="Processing..."
  description="Please wait while we process your request."
  dismissible={false}
/>`,
        }),
      })}

      ${Section({
        title: "Inline Notifications",
        description: "Inline alerts that blend with page content.",
        children: `
          ${Example({
            label: "All types",
            children: `
              <div class="space-y-4 max-w-xl mx-auto">
                ${InlineNotification({ type: "success", title: "Order completed", description: "Your order #12345 has been shipped." })}
                ${InlineNotification({ type: "error", title: "Payment failed", description: "Your card was declined. Please try another payment method." })}
                ${InlineNotification({ type: "warning", title: "Low stock", description: "Only 3 items remaining in your cart." })}
                ${InlineNotification({ type: "info", title: "Tip", description: "You can use keyboard shortcuts to navigate faster." })}
              </div>
            `,
            code: `<InlineNotification type="success" title="Order completed" />
<InlineNotification type="error" title="Payment failed" />
<InlineNotification type="warning" title="Low stock" />
<InlineNotification type="info" title="Tip" />`,
          })}
          ${Example({
            label: "Dismissible inline",
            children: `<div class="max-w-xl mx-auto">${InlineNotification({
              type: "info",
              title: "New feature available",
              description: "Try our new dashboard layout.",
              dismissible: true,
              onDismiss: "$show = false",
            })}</div>`,
            code: `<InlineNotification
  type="info"
  title="New feature available"
  description="Try our new dashboard layout."
  dismissible
  onDismiss="$show = false"
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Toast Container",
        description: "Wrapper component for positioning notifications.",
        children: Example({
          label: "Usage pattern",
          children: `
            <div class="bg-gray-200 rounded-lg p-4 h-48 relative overflow-hidden">
              <p class="text-sm text-gray-500 text-center">Container positions notifications at corners</p>
              <div class="absolute top-4 right-4 max-w-[200px]">
                ${Notification({ type: "success", title: "Saved!", variant: "condensed", className: "text-xs" })}
              </div>
            </div>
          `,
          code: `<ToastContainer position="top-right">
  <Notification type="success" title="Saved!" />
</ToastContainer>

// Positions: "top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">type</td><td class="px-4 py-3">"success" | "error" | "warning" | "info"</td><td class="px-4 py-3">"info"</td><td class="px-4 py-3">Notification type</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Title text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">description</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Description text</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">dismissible</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Show close button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">onDismiss</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Datastar expression for dismiss</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"simple" | "condensed" | "with-actions"</td><td class="px-4 py-3">"simple"</td><td class="px-4 py-3">Visual variant</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">avatar</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Avatar image URL</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Notifications",
    currentPath: "/_components/overlays/notifications",
    children: content,
    devMode,
  });
}
