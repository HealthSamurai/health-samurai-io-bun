/**
 * Notification/Toast Component
 * Display feedback messages to users
 *
 * @example
 * // Success notification
 * <Notification type="success" title="Successfully saved!" />
 *
 * // With description
 * <Notification type="info" title="New message" description="You have 3 unread messages" />
 *
 * // With actions
 * <Notification
 *   type="warning"
 *   title="Update available"
 *   actions={[{ label: "Update", onClick: "update()" }]}
 * />
 */

export type NotificationType = "success" | "error" | "warning" | "info";

export type NotificationAction = {
  label: string;
  href?: string;
  onClick?: string;
  primary?: boolean;
};

export type NotificationProps = {
  /** Notification type */
  type?: NotificationType;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Show close button */
  dismissible?: boolean;
  /** Datastar expression to call on dismiss */
  onDismiss?: string;
  /** Action buttons */
  actions?: NotificationAction[];
  /** Avatar image URL */
  avatar?: string;
  /** Visual variant */
  variant?: "simple" | "condensed" | "with-actions";
  /** Additional CSS classes */
  className?: string;
};

// Type icons
const typeIcons: Record<NotificationType, { svg: string; color: string }> = {
  success: {
    svg: `<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />`,
    color: "text-green-400",
  },
  error: {
    svg: `<path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />`,
    color: "text-red-400",
  },
  warning: {
    svg: `<path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />`,
    color: "text-yellow-400",
  },
  info: {
    svg: `<path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" stroke-linecap="round" stroke-linejoin="round" />`,
    color: "text-blue-400",
  },
};

// Close icon
const closeIcon = `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
</svg>`;

export function Notification({
  type = "info",
  title,
  description,
  dismissible = true,
  onDismiss,
  actions,
  avatar,
  variant = "simple",
  className = "",
}: NotificationProps): string {
  const typeConfig = typeIcons[type];

  const dismissButton = dismissible ? `
    <div class="ml-4 flex shrink-0">
      <button type="button" ${onDismiss ? `data-on:click="${onDismiss}"` : ""} class="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <span class="sr-only">Close</span>
        ${closeIcon}
      </button>
    </div>
  ` : "";

  const icon = avatar
    ? `<img class="size-10 rounded-full" src="${avatar}" alt="" />`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 ${typeConfig.color}">${typeConfig.svg}</svg>`;

  if (variant === "condensed") {
    return `
      <div class="rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 ${className}">
        <div class="flex items-center">
          <div class="flex-shrink-0">${icon}</div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">${title}</p>
          </div>
          ${dismissButton}
        </div>
      </div>
    `;
  }

  if (variant === "with-actions" && actions && actions.length > 0) {
    return `
      <div class="rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 ${className}">
        <div class="flex items-start">
          <div class="flex-shrink-0">${icon}</div>
          <div class="ml-3 w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">${title}</p>
            ${description ? `<p class="mt-1 text-sm text-gray-500">${description}</p>` : ""}
            <div class="mt-3 flex gap-3">
              ${actions.map(action => {
                const classes = action.primary
                  ? "rounded-md bg-primary px-2 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  : "rounded-md bg-white px-2 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
                if (action.href) {
                  return `<a href="${action.href}" class="${classes}">${action.label}</a>`;
                }
                return `<button type="button" ${action.onClick ? `data-on:click="${action.onClick}"` : ""} class="${classes}">${action.label}</button>`;
              }).join("")}
            </div>
          </div>
          ${dismissButton}
        </div>
      </div>
    `;
  }

  // Simple variant (default)
  return `
    <div class="rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 ${className}">
      <div class="flex items-start">
        <div class="flex-shrink-0">${icon}</div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">${title}</p>
          ${description ? `<p class="mt-1 text-sm text-gray-500">${description}</p>` : ""}
        </div>
        ${dismissButton}
      </div>
    </div>
  `;
}

// Toast container for positioning notifications
export function ToastContainer({
  children,
  position = "top-right",
  className = "",
}: {
  children: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
  className?: string;
}): string {
  const positions = {
    "top-right": "top-0 right-0 items-end",
    "top-left": "top-0 left-0 items-start",
    "bottom-right": "bottom-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
  };

  return `
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex px-4 py-6 ${positions[position]} ${className}">
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end pointer-events-auto max-w-sm">
        ${children}
      </div>
    </div>
  `;
}

// Inline notification (not fixed positioned)
export function InlineNotification({
  type = "info",
  title,
  description,
  dismissible = false,
  onDismiss,
  className = "",
}: Omit<NotificationProps, "variant" | "actions" | "avatar">): string {
  const typeConfig = typeIcons[type];

  const bgColors: Record<NotificationType, string> = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    warning: "bg-yellow-50 border-yellow-200",
    info: "bg-blue-50 border-blue-200",
  };

  const textColors: Record<NotificationType, string> = {
    success: "text-green-800",
    error: "text-red-800",
    warning: "text-yellow-800",
    info: "text-blue-800",
  };

  const iconColors: Record<NotificationType, string> = {
    success: "text-green-400",
    error: "text-red-400",
    warning: "text-yellow-400",
    info: "text-blue-400",
  };

  return `
    <div class="rounded-md ${bgColors[type]} border p-4 ${className}">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5 ${iconColors[type]}">${typeConfig.svg}</svg>
        </div>
        <div class="ml-3 flex-1">
          <p class="text-sm font-medium ${textColors[type]}">${title}</p>
          ${description ? `<p class="mt-1 text-sm ${textColors[type]} opacity-80">${description}</p>` : ""}
        </div>
        ${dismissible ? `
          <div class="ml-auto pl-3">
            <button type="button" ${onDismiss ? `data-on:click="${onDismiss}"` : ""} class="-m-1.5 inline-flex rounded-md p-1.5 ${iconColors[type]} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <span class="sr-only">Dismiss</span>
              ${closeIcon}
            </button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}
