/**
 * Alert Component
 * Based on Tailwind Plus UI alerts
 *
 * @example
 * // Basic usage
 * <Alert type="info" title="Information">This is an info message.</Alert>
 *
 * // With different types
 * <Alert type="success" title="Success!">Your changes have been saved.</Alert>
 * <Alert type="warning" title="Warning">Please review before continuing.</Alert>
 * <Alert type="error" title="Error">Something went wrong.</Alert>
 *
 * // With list content
 * <Alert type="error" title="Validation errors" list={["Email is required", "Password too short"]} />
 *
 * // Dismissible
 * <Alert type="info" title="Notice" dismissible>You can dismiss this alert.</Alert>
 *
 * // With actions
 * <Alert type="success" title="Saved" actions={[{label: "View", href: "/view"}, {label: "Dismiss"}]}>
 *   Your changes have been saved.
 * </Alert>
 *
 * // With accent border
 * <Alert type="warning" title="Attention" accent>Important message here.</Alert>
 */

export type AlertType = "info" | "success" | "warning" | "error";

export type AlertAction = {
  label: string;
  href?: string;
  onClick?: string;
};

export type AlertProps = {
  /** Alert type/severity */
  type: AlertType;
  /** Alert title (optional but recommended) */
  title?: string;
  /** Alert message content */
  children?: string;
  /** List of items to display as bullet points */
  list?: string[];
  /** Show dismiss button */
  dismissible?: boolean;
  /** Callback when dismissed (JS expression) */
  onDismiss?: string;
  /** Action buttons */
  actions?: AlertAction[];
  /** Show accent border on left */
  accent?: boolean;
  /** Additional CSS classes */
  className?: string;
};

// Type configurations
const typeConfig: Record<AlertType, {
  bg: string;
  iconColor: string;
  titleColor: string;
  textColor: string;
  buttonBg: string;
  buttonHover: string;
  accentBorder: string;
  icon: string;
}> = {
  info: {
    bg: "bg-blue-50",
    iconColor: "text-blue-400",
    titleColor: "text-blue-800",
    textColor: "text-blue-700",
    buttonBg: "bg-blue-50",
    buttonHover: "hover:bg-blue-100",
    accentBorder: "border-l-4 border-blue-400",
    icon: `<path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />`,
  },
  success: {
    bg: "bg-green-50",
    iconColor: "text-green-400",
    titleColor: "text-green-800",
    textColor: "text-green-700",
    buttonBg: "bg-green-50",
    buttonHover: "hover:bg-green-100",
    accentBorder: "border-l-4 border-green-400",
    icon: `<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />`,
  },
  warning: {
    bg: "bg-yellow-50",
    iconColor: "text-yellow-400",
    titleColor: "text-yellow-800",
    textColor: "text-yellow-700",
    buttonBg: "bg-yellow-50",
    buttonHover: "hover:bg-yellow-100",
    accentBorder: "border-l-4 border-yellow-400",
    icon: `<path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />`,
  },
  error: {
    bg: "bg-red-50",
    iconColor: "text-red-400",
    titleColor: "text-red-800",
    textColor: "text-red-700",
    buttonBg: "bg-red-50",
    buttonHover: "hover:bg-red-100",
    accentBorder: "border-l-4 border-red-400",
    icon: `<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />`,
  },
};

export function Alert({
  type,
  title,
  children,
  list,
  dismissible = false,
  onDismiss,
  actions,
  accent = false,
  className = "",
}: AlertProps): string {
  const config = typeConfig[type];

  // Build classes
  const containerClasses = [
    "rounded-md p-4",
    config.bg,
    accent ? config.accentBorder : "",
    className,
  ].filter(Boolean).join(" ");

  // Build icon
  const iconHtml = `
    <div class="shrink-0">
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 ${config.iconColor}">
        ${config.icon}
      </svg>
    </div>
  `;

  // Build dismiss button
  const dismissButton = dismissible ? `
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="inline-flex rounded-md ${config.bg} p-1.5 ${config.iconColor} hover:${config.bg.replace('50', '100')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${type === 'info' ? 'blue' : type === 'success' ? 'green' : type === 'warning' ? 'yellow' : 'red'}-50"
          ${onDismiss ? `data-on:click="${onDismiss}"` : ""}>
          <span class="sr-only">Dismiss</span>
          <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
    </div>
  ` : "";

  // Build title
  const titleHtml = title ? `<div class="text-sm font-medium ${config.titleColor}">${title}</div>` : "";

  // Build content
  let contentHtml = "";
  if (children) {
    contentHtml = `<div class="${title ? "mt-2 " : ""}text-sm ${config.textColor}"><p>${children}</p></div>`;
  }
  if (list && list.length > 0) {
    contentHtml = `
      <div class="${title ? "mt-2 " : ""}text-sm ${config.textColor}">
        <ul role="list" class="list-disc space-y-1 pl-5">
          ${list.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Build actions
  let actionsHtml = "";
  if (actions && actions.length > 0) {
    const buttonClasses = `rounded-md ${config.buttonBg} px-2 py-1.5 text-sm font-medium ${config.titleColor} ${config.buttonHover} focus:outline-none focus:ring-2 focus:ring-offset-2`;
    actionsHtml = `
      <div class="mt-4">
        <div class="-mx-2 -my-1.5 flex">
          ${actions.map((action, i) => {
            const attrs = action.onClick ? `data-on:click="${action.onClick}"` : "";
            if (action.href) {
              return `<a href="${action.href}" class="${i > 0 ? "ml-3 " : ""}${buttonClasses}">${action.label}</a>`;
            }
            return `<button type="button" class="${i > 0 ? "ml-3 " : ""}${buttonClasses}" ${attrs}>${action.label}</button>`;
          }).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="${containerClasses}" role="alert">
      <div class="flex">
        ${iconHtml}
        <div class="ml-3 flex-1">
          ${titleHtml}
          ${contentHtml}
          ${actionsHtml}
        </div>
        ${dismissButton}
      </div>
    </div>
  `;
}

// Convenience alert functions
export const InfoAlert = (props: Omit<AlertProps, "type">) => Alert({ ...props, type: "info" });
export const SuccessAlert = (props: Omit<AlertProps, "type">) => Alert({ ...props, type: "success" });
export const WarningAlert = (props: Omit<AlertProps, "type">) => Alert({ ...props, type: "warning" });
export const ErrorAlert = (props: Omit<AlertProps, "type">) => Alert({ ...props, type: "error" });
