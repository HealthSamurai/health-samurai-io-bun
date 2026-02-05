/**
 * Modal/Dialog Component
 * Based on Tailwind Plus UI modal dialogs
 *
 * @example
 * // Basic modal
 * <Modal id="my-modal" title="Modal Title">
 *   <p>Modal content here</p>
 * </Modal>
 *
 * // With icon
 * <Modal id="success-modal" icon="success" title="Payment successful">
 *   <p>Your payment has been processed.</p>
 * </Modal>
 *
 * // Alert/Confirmation modal
 * <Modal id="confirm-modal" icon="warning" title="Delete account?" variant="alert">
 *   <p>This action cannot be undone.</p>
 * </Modal>
 */

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";
export type ModalIcon = "success" | "warning" | "error" | "info" | "question";
export type ModalVariant = "default" | "alert" | "centered";

export type ModalProps = {
  /** Unique modal ID */
  id: string;
  /** Modal title */
  title: string;
  /** Modal content */
  children: string;
  /** Modal size */
  size?: ModalSize;
  /** Icon type */
  icon?: ModalIcon;
  /** Layout variant */
  variant?: ModalVariant;
  /** Primary action button */
  primaryAction?: {
    label: string;
    variant?: "primary" | "danger";
    onClick?: string;
  };
  /** Secondary action button */
  secondaryAction?: {
    label: string;
    onClick?: string;
  };
  /** Show close button in corner */
  showCloseButton?: boolean;
  /** Custom footer content */
  footer?: string;
  /** Additional CSS classes */
  className?: string;
};

// Size configurations
const sizes: Record<ModalSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-xl",
  xl: "sm:max-w-2xl",
  full: "sm:max-w-4xl",
};

// Icon configurations
const iconConfigs: Record<ModalIcon, { bg: string; color: string; svg: string }> = {
  success: {
    bg: "bg-green-100",
    color: "text-green-600",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="m4.5 12.75 6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  warning: {
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  error: {
    bg: "bg-red-100",
    color: "text-red-600",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  info: {
    bg: "bg-blue-100",
    color: "text-blue-600",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
  question: {
    bg: "bg-gray-100",
    color: "text-gray-600",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  },
};

export function Modal({
  id,
  title,
  children,
  size = "md",
  icon,
  variant = "default",
  primaryAction,
  secondaryAction,
  showCloseButton = false,
  footer,
  className = "",
}: ModalProps): string {
  const sizeClass = sizes[size];

  // Icon HTML
  let iconHtml = "";
  if (icon) {
    const iconConfig = iconConfigs[icon];
    const iconSizeClass = variant === "alert" ? "sm:mx-0 sm:size-10" : "";
    iconHtml = `
      <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${iconConfig.bg} ${iconSizeClass}">
        <span class="${iconConfig.color}">${iconConfig.svg}</span>
      </div>
    `;
  }

  // Close button
  const closeButtonHtml = showCloseButton
    ? `
    <button type="button" onclick="document.getElementById('${id}').close()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
      <span class="sr-only">Close</span>
      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  `
    : "";

  // Build content based on variant
  let contentHtml: string;

  if (variant === "centered") {
    contentHtml = `
      <div>
        ${iconHtml}
        <div class="mt-3 text-center sm:mt-5">
          <div id="${id}-title" class="text-base font-semibold text-gray-900">${title}</div>
          <div class="mt-2">
            <div class="text-sm text-gray-500">${children}</div>
          </div>
        </div>
      </div>
    `;
  } else if (variant === "alert") {
    contentHtml = `
      <div class="sm:flex sm:items-start">
        ${iconHtml}
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div id="${id}-title" class="text-base font-semibold text-gray-900">${title}</div>
          <div class="mt-2">
            <div class="text-sm text-gray-500">${children}</div>
          </div>
        </div>
      </div>
    `;
  } else {
    contentHtml = `
      ${iconHtml ? `<div class="mb-4">${iconHtml}</div>` : ""}
      <div id="${id}-title" class="text-base font-semibold text-gray-900">${title}</div>
      <div class="mt-2">
        <div class="text-sm text-gray-500">${children}</div>
      </div>
    `;
  }

  // Footer / Actions
  let footerHtml = "";
  if (footer) {
    footerHtml = `<div class="mt-5 sm:mt-6">${footer}</div>`;
  } else if (primaryAction || secondaryAction) {
    const primaryClass = primaryAction?.variant === "danger" ? "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600" : "bg-primary hover:bg-primary-dark focus-visible:outline-primary";

    const primaryHtml = primaryAction
      ? `<button type="button" onclick="${primaryAction.onClick || `document.getElementById('${id}').close()`}" class="inline-flex w-full justify-center rounded-md ${primaryClass} px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2 sm:ml-3 sm:w-auto">${primaryAction.label}</button>`
      : "";

    const secondaryHtml = secondaryAction
      ? `<button type="button" onclick="${secondaryAction.onClick || `document.getElementById('${id}').close()`}" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0 sm:w-auto">${secondaryAction.label}</button>`
      : "";

    if (variant === "centered") {
      footerHtml =
        primaryAction && secondaryAction
          ? `<div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">${primaryHtml}${secondaryHtml}</div>`
          : `<div class="mt-5 sm:mt-6">${primaryHtml || secondaryHtml}</div>`;
    } else {
      footerHtml = `<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">${primaryHtml}${secondaryHtml}</div>`;
    }
  }

  return `
    <dialog id="${id}" aria-labelledby="${id}-title" class="fixed inset-0 z-50 size-auto max-h-none max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-gray-500/75 ${className}">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full ${sizeClass} sm:p-6">
          ${closeButtonHtml}
          ${contentHtml}
          ${footerHtml}
        </div>
      </div>
    </dialog>
  `;
}

// Modal trigger button
export function ModalTrigger({
  modalId,
  children,
  className = "",
}: {
  modalId: string;
  children: string;
  className?: string;
}): string {
  return `<button type="button" onclick="document.getElementById('${modalId}').showModal()" class="${className}">${children}</button>`;
}

// Quick confirmation dialog
export function ConfirmDialog({
  id,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "danger",
  onConfirm,
}: {
  id: string;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "primary";
  onConfirm?: string;
}): string {
  return Modal({
    id,
    title,
    icon: variant === "danger" ? "warning" : "question",
    variant: "alert",
    children: `<p>${message}</p>`,
    primaryAction: {
      label: confirmLabel,
      variant: variant === "danger" ? "danger" : "primary",
      onClick: onConfirm,
    },
    secondaryAction: {
      label: cancelLabel,
    },
  });
}

// Quick success dialog
export function SuccessDialog({
  id,
  title,
  message,
  buttonLabel = "Got it",
}: {
  id: string;
  title: string;
  message: string;
  buttonLabel?: string;
}): string {
  return Modal({
    id,
    title,
    icon: "success",
    variant: "centered",
    children: `<p>${message}</p>`,
    primaryAction: {
      label: buttonLabel,
    },
  });
}
