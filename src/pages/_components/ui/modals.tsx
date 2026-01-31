/**
 * Modal Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Modal, ModalTrigger, ConfirmDialog, SuccessDialog } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Modals",
  description: "Modal dialog component examples",
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

export default function ModalsDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Modal Component</h1>
        <p class="mt-2 text-gray-600">
          Dialog modals for confirmations, alerts, forms, and other overlaid content.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Modal, ModalTrigger, ConfirmDialog, SuccessDialog } from "../components/ui/Modal";
        </code>
      </div>

      ${Section({
        title: "Basic Modal",
        description: "Simple modal with title and content.",
        children: Example({
          label: "Default modal",
          children: `
            ${ModalTrigger({ modalId: "basic-modal", children: Button({ children: "Open Modal" }), className: "" })}
            ${Modal({
              id: "basic-modal",
              title: "Modal Title",
              children: `<p>This is a basic modal with some content. You can put any content here including forms, images, or other components.</p>`,
              primaryAction: { label: "Confirm" },
              secondaryAction: { label: "Cancel" },
            })}
          `,
          code: `<ModalTrigger modalId="basic-modal">
  <Button>Open Modal</Button>
</ModalTrigger>

<Modal
  id="basic-modal"
  title="Modal Title"
  primaryAction={{ label: "Confirm" }}
  secondaryAction={{ label: "Cancel" }}
>
  <p>Modal content here...</p>
</Modal>`,
        }),
      })}

      ${Section({
        title: "Success Modal",
        description: "Centered modal with success icon.",
        children: Example({
          label: "Payment success",
          children: `
            ${ModalTrigger({ modalId: "success-modal", children: Button({ variant: "primary", children: "Show Success" }), className: "" })}
            ${Modal({
              id: "success-modal",
              title: "Payment successful",
              icon: "success",
              variant: "centered",
              children: `<p>Your payment has been processed successfully. A confirmation email has been sent to your inbox.</p>`,
              primaryAction: { label: "Go to Dashboard" },
            })}
          `,
          code: `<Modal
  id="success-modal"
  title="Payment successful"
  icon="success"
  variant="centered"
  primaryAction={{ label: "Go to Dashboard" }}
>
  <p>Your payment has been processed successfully.</p>
</Modal>`,
        }),
      })}

      ${Section({
        title: "Alert / Confirmation Modal",
        description: "Left-aligned modal for confirmations and warnings.",
        children: `
          ${Example({
            label: "Delete confirmation",
            children: `
              ${ModalTrigger({ modalId: "delete-modal", children: Button({ variant: "danger", children: "Delete Account" }), className: "" })}
              ${Modal({
                id: "delete-modal",
                title: "Delete account",
                icon: "warning",
                variant: "alert",
                children: `<p>Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.</p>`,
                primaryAction: { label: "Delete", variant: "danger" },
                secondaryAction: { label: "Cancel" },
              })}
            `,
            code: `<Modal
  id="delete-modal"
  title="Delete account"
  icon="warning"
  variant="alert"
  primaryAction={{ label: "Delete", variant: "danger" }}
  secondaryAction={{ label: "Cancel" }}
>
  <p>Are you sure you want to delete your account?</p>
</Modal>`,
          })}
          ${Example({
            label: "Error alert",
            children: `
              ${ModalTrigger({ modalId: "error-modal", children: Button({ variant: "secondary", children: "Show Error" }), className: "" })}
              ${Modal({
                id: "error-modal",
                title: "Something went wrong",
                icon: "error",
                variant: "alert",
                children: `<p>We couldn't process your request. Please try again later or contact support if the problem persists.</p>`,
                primaryAction: { label: "Try Again" },
                secondaryAction: { label: "Cancel" },
              })}
            `,
            code: `<Modal
  id="error-modal"
  title="Something went wrong"
  icon="error"
  variant="alert"
  primaryAction={{ label: "Try Again" }}
  secondaryAction={{ label: "Cancel" }}
>
  <p>We couldn't process your request.</p>
</Modal>`,
          })}
        `,
      })}

      ${Section({
        title: "Shortcut Components",
        description: "Convenience components for common modal types.",
        children: `
          ${Example({
            label: "ConfirmDialog",
            children: `
              ${ModalTrigger({ modalId: "confirm-dialog", children: Button({ children: "Confirm Action" }), className: "" })}
              ${ConfirmDialog({
                id: "confirm-dialog",
                title: "Confirm changes",
                message: "Are you sure you want to save these changes? This will update your profile immediately.",
                confirmLabel: "Save Changes",
                cancelLabel: "Cancel",
                variant: "primary",
              })}
            `,
            code: `<ConfirmDialog
  id="confirm-dialog"
  title="Confirm changes"
  message="Are you sure you want to save these changes?"
  confirmLabel="Save Changes"
  cancelLabel="Cancel"
  variant="primary"  // or "danger"
/>`,
          })}
          ${Example({
            label: "SuccessDialog",
            children: `
              ${ModalTrigger({ modalId: "success-dialog", children: Button({ variant: "primary", children: "Complete Action" }), className: "" })}
              ${SuccessDialog({
                id: "success-dialog",
                title: "Successfully saved!",
                message: "Your changes have been saved. You can continue editing or close this dialog.",
                buttonLabel: "Got it",
              })}
            `,
            code: `<SuccessDialog
  id="success-dialog"
  title="Successfully saved!"
  message="Your changes have been saved."
  buttonLabel="Got it"
/>`,
          })}
        `,
      })}

      ${Section({
        title: "Modal Sizes",
        description: "Different modal widths for various content needs.",
        children: `
          ${Example({
            label: "Small, Medium, Large",
            children: `
              <div class="flex flex-wrap gap-3">
                ${ModalTrigger({ modalId: "modal-sm", children: Button({ size: "sm", children: "Small" }), className: "" })}
                ${ModalTrigger({ modalId: "modal-md", children: Button({ size: "sm", children: "Medium" }), className: "" })}
                ${ModalTrigger({ modalId: "modal-lg", children: Button({ size: "sm", children: "Large" }), className: "" })}
                ${ModalTrigger({ modalId: "modal-xl", children: Button({ size: "sm", children: "XL" }), className: "" })}
              </div>
              ${Modal({ id: "modal-sm", title: "Small Modal", size: "sm", children: `<p>This is a small modal (max-w-sm).</p>`, primaryAction: { label: "Close" } })}
              ${Modal({ id: "modal-md", title: "Medium Modal", size: "md", children: `<p>This is a medium modal (max-w-lg). This is the default size.</p>`, primaryAction: { label: "Close" } })}
              ${Modal({ id: "modal-lg", title: "Large Modal", size: "lg", children: `<p>This is a large modal (max-w-xl). Good for forms and more content.</p>`, primaryAction: { label: "Close" } })}
              ${Modal({ id: "modal-xl", title: "Extra Large Modal", size: "xl", children: `<p>This is an extra large modal (max-w-2xl). Best for complex content.</p>`, primaryAction: { label: "Close" } })}
            `,
            code: `<Modal id="modal-sm" size="sm" title="Small Modal">...</Modal>
<Modal id="modal-md" size="md" title="Medium Modal">...</Modal>
<Modal id="modal-lg" size="lg" title="Large Modal">...</Modal>
<Modal id="modal-xl" size="xl" title="Extra Large Modal">...</Modal>`,
          })}
        `,
      })}

      ${Section({
        title: "With Close Button",
        description: "Add an X button in the top-right corner.",
        children: Example({
          label: "Dismissible modal",
          children: `
            ${ModalTrigger({ modalId: "dismissible-modal", children: Button({ children: "Open Modal" }), className: "" })}
            ${Modal({
              id: "dismissible-modal",
              title: "Dismissible Modal",
              showCloseButton: true,
              children: `
                <p>This modal has a close button in the corner. Click the X or the button below to close.</p>
              `,
              primaryAction: { label: "Done" },
            })}
          `,
          code: `<Modal
  id="dismissible-modal"
  title="Dismissible Modal"
  showCloseButton={true}
  primaryAction={{ label: "Done" }}
>
  <p>Modal content...</p>
</Modal>`,
        }),
      })}

      ${Section({
        title: "Icon Types",
        description: "Available icon types for different modal purposes.",
        children: Example({
          label: "All icon types",
          children: `
            <div class="flex flex-wrap gap-3">
              ${ModalTrigger({ modalId: "icon-success", children: Button({ size: "sm", children: "Success" }), className: "" })}
              ${ModalTrigger({ modalId: "icon-warning", children: Button({ size: "sm", children: "Warning" }), className: "" })}
              ${ModalTrigger({ modalId: "icon-error", children: Button({ size: "sm", children: "Error" }), className: "" })}
              ${ModalTrigger({ modalId: "icon-info", children: Button({ size: "sm", children: "Info" }), className: "" })}
              ${ModalTrigger({ modalId: "icon-question", children: Button({ size: "sm", children: "Question" }), className: "" })}
            </div>
            ${Modal({ id: "icon-success", title: "Success", icon: "success", variant: "centered", children: `<p>Operation completed successfully.</p>`, primaryAction: { label: "OK" } })}
            ${Modal({ id: "icon-warning", title: "Warning", icon: "warning", variant: "alert", children: `<p>Please review before continuing.</p>`, primaryAction: { label: "Continue" }, secondaryAction: { label: "Cancel" } })}
            ${Modal({ id: "icon-error", title: "Error", icon: "error", variant: "alert", children: `<p>Something went wrong.</p>`, primaryAction: { label: "Retry" } })}
            ${Modal({ id: "icon-info", title: "Information", icon: "info", variant: "centered", children: `<p>Here's some helpful information.</p>`, primaryAction: { label: "Got it" } })}
            ${Modal({ id: "icon-question", title: "Question", icon: "question", variant: "alert", children: `<p>Do you need help with this?</p>`, primaryAction: { label: "Yes" }, secondaryAction: { label: "No" } })}
          `,
          code: `// Available icons:
icon="success"   // Green checkmark
icon="warning"   // Yellow warning triangle
icon="error"     // Red error circle
icon="info"      // Blue info circle
icon="question"  // Gray question mark`,
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
              <tr><td class="px-4 py-3 font-mono text-primary">id</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Unique modal ID</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Modal title</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Modal content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">size</td><td class="px-4 py-3">"sm" | "md" | "lg" | "xl" | "full"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Modal width</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">icon</td><td class="px-4 py-3">"success" | "warning" | "error" | "info" | "question"</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Icon type</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">variant</td><td class="px-4 py-3">"default" | "alert" | "centered"</td><td class="px-4 py-3">"default"</td><td class="px-4 py-3">Layout style</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">primaryAction</td><td class="px-4 py-3">{ label, variant?, onClick? }</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Primary button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">secondaryAction</td><td class="px-4 py-3">{ label, onClick? }</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Secondary button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showCloseButton</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">false</td><td class="px-4 py-3">Show X button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">footer</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Custom footer HTML</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Usage Notes -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Usage Notes</h2>
        <div class="prose prose-sm max-w-none">
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Modals use the native <code>&lt;dialog&gt;</code> element with <code>showModal()</code> and <code>close()</code> methods</li>
            <li>Use <code>ModalTrigger</code> for simple button triggers, or call <code>document.getElementById('modal-id').showModal()</code> directly</li>
            <li>For form submissions inside modals, you can use htmx or handle with JavaScript</li>
            <li>The backdrop click automatically closes the modal (native dialog behavior)</li>
            <li>Escape key closes the modal (native dialog behavior)</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Modals",
    currentPath: "/_components/ui/modals",
    children: content,
    devMode,
  });
}
