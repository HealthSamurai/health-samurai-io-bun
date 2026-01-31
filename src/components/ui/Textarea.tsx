/**
 * Textarea Component
 * Multi-line text input fields
 *
 * @example
 * // Simple textarea
 * <Textarea name="message" label="Message" />
 *
 * // With character count
 * <Textarea name="bio" label="Bio" maxLength={200} showCount />
 */

export type TextareaProps = {
  /** Input name */
  name: string;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Initial value */
  value?: string;
  /** Help text */
  helpText?: string;
  /** Error message */
  error?: string;
  /** Is required */
  required?: boolean;
  /** Is disabled */
  disabled?: boolean;
  /** Is readonly */
  readonly?: boolean;
  /** Number of visible rows */
  rows?: number;
  /** Maximum character length */
  maxLength?: number;
  /** Show character count */
  showCount?: boolean;
  /** Auto-resize height */
  autoResize?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Visual variant */
  variant?: "default" | "filled" | "borderless";
  /** Change handler (Datastar expression) */
  onChange?: string;
  /** Additional CSS classes */
  className?: string;
};

// Size classes
const sizes = {
  sm: { textarea: "py-1.5 px-2.5 text-sm", label: "text-sm" },
  md: { textarea: "py-2 px-3 text-sm", label: "text-sm" },
  lg: { textarea: "py-3 px-4 text-base", label: "text-base" },
} as const;

// Variant styles
const variants = {
  default: "bg-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary",
  filled: "bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white",
  borderless: "border-0 bg-transparent focus:ring-0 resize-none",
} as const;

export function Textarea({
  name,
  label,
  placeholder,
  value = "",
  helpText,
  error,
  required = false,
  disabled = false,
  readonly = false,
  rows = 4,
  maxLength,
  showCount = false,
  size = "md",
  variant = "default",
  onChange,
  className = "",
}: TextareaProps): string {
  const sizeConfig = sizes[size];
  const variantClasses = variants[variant];

  const textareaClasses = `
    block w-full rounded-md border-0
    ${sizeConfig.textarea}
    text-gray-900 shadow-sm
    ${error ? "ring-red-300 focus:ring-red-500" : variantClasses}
    placeholder:text-gray-400
    ${disabled ? "bg-gray-50 text-gray-500 cursor-not-allowed" : ""}
    ${readonly ? "bg-gray-50" : ""}
    sm:leading-6
  `.trim().replace(/\s+/g, " ");

  const countSignal = showCount ? `${name}Count` : null;

  return `
    <div class="${className}" ${showCount ? `data-signals="{${countSignal}: ${value.length}}"` : ""}>
      ${label ? `
        <label for="${name}" class="block ${sizeConfig.label} font-medium text-gray-900 mb-1.5">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </label>
      ` : ""}
      <div class="relative">
        <textarea
          id="${name}"
          name="${name}"
          rows="${rows}"
          ${placeholder ? `placeholder="${placeholder}"` : ""}
          ${required ? "required" : ""}
          ${disabled ? "disabled" : ""}
          ${readonly ? "readonly" : ""}
          ${maxLength ? `maxlength="${maxLength}"` : ""}
          ${onChange ? `data-on:input="${onChange}"` : ""}
          ${showCount ? `data-on:input="$${countSignal} = evt.target.value.length"` : ""}
          class="${textareaClasses}">${value}</textarea>
        ${showCount && maxLength ? `
          <div class="absolute bottom-2 right-2 text-xs text-gray-400">
            <span data-text="$${countSignal}">${value.length}</span>/${maxLength}
          </div>
        ` : ""}
      </div>
      ${helpText && !error ? `<p class="mt-1.5 text-sm text-gray-500">${helpText}</p>` : ""}
      ${error ? `<p class="mt-1.5 text-sm text-red-600">${error}</p>` : ""}
    </div>
  `;
}

// Textarea with action buttons (like comment box)
export function TextareaWithActions({
  name,
  label,
  placeholder = "Add your comment...",
  value = "",
  rows = 3,
  submitLabel = "Submit",
  onSubmit,
  disabled = false,
  className = "",
}: {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  submitLabel?: string;
  onSubmit?: string;
  disabled?: boolean;
  className?: string;
}): string {
  return `
    <div class="${className}">
      ${label ? `<label for="${name}" class="block text-sm font-medium text-gray-900 mb-1.5">${label}</label>` : ""}
      <div class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <textarea
          id="${name}"
          name="${name}"
          rows="${rows}"
          placeholder="${placeholder}"
          ${disabled ? "disabled" : ""}
          class="block w-full resize-none border-0 py-3 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">${value}</textarea>
        <div class="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-3 py-2">
          <div class="flex items-center gap-x-2">
            <button type="button" class="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <span class="sr-only">Attach file</span>
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button
            type="${onSubmit ? 'button' : 'submit'}"
            ${onSubmit ? `data-on:click="${onSubmit}"` : ""}
            ${disabled ? "disabled" : ""}
            class="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed">
            ${submitLabel}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Textarea with label inside (floating label effect)
export function TextareaFloatingLabel({
  name,
  label,
  value = "",
  rows = 4,
  required = false,
  disabled = false,
  error,
  onChange,
  className = "",
}: {
  name: string;
  label: string;
  value?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: string;
  className?: string;
}): string {
  const signalName = `${name}Value`;
  const hasValue = value.length > 0;

  return `
    <div class="relative ${className}" data-signals="{${signalName}: '${value}'}">
      <textarea
        id="${name}"
        name="${name}"
        rows="${rows}"
        ${required ? "required" : ""}
        ${disabled ? "disabled" : ""}
        ${onChange ? `data-on:input="${onChange}"` : ""}
        data-on:input="$${signalName} = evt.target.value"
        class="peer block w-full rounded-md border-0 py-4 px-3 pt-6 text-gray-900 shadow-sm ring-1 ring-inset ${error ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-primary'} focus:ring-2 placeholder:text-transparent sm:text-sm sm:leading-6"
        placeholder="${label}">${value}</textarea>
      <label
        for="${name}"
        class="absolute left-3 top-1.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs ${error ? 'peer-focus:text-red-500' : 'peer-focus:text-primary'}">
        ${label}${required ? '*' : ''}
      </label>
      ${error ? `<p class="mt-1.5 text-sm text-red-600">${error}</p>` : ""}
    </div>
  `;
}

// Simple inline textarea (minimal chrome)
export function InlineTextarea({
  name,
  placeholder = "Enter text...",
  value = "",
  rows = 2,
  onChange,
  className = "",
}: {
  name: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: string;
  className?: string;
}): string {
  return `
    <textarea
      id="${name}"
      name="${name}"
      rows="${rows}"
      placeholder="${placeholder}"
      ${onChange ? `data-on:input="${onChange}"` : ""}
      class="block w-full resize-none rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${className}">${value}</textarea>
  `;
}

// Textarea with toolbar (rich text style)
export function TextareaWithToolbar({
  name,
  label,
  placeholder = "Write something...",
  value = "",
  rows = 6,
  helpText,
  required = false,
  onChange,
  className = "",
}: {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  helpText?: string;
  required?: boolean;
  onChange?: string;
  className?: string;
}): string {
  return `
    <div class="${className}">
      ${label ? `
        <label for="${name}" class="block text-sm font-medium text-gray-900 mb-1.5">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </label>
      ` : ""}
      <div class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <!-- Toolbar -->
        <div class="border-b border-gray-200 bg-gray-50 px-3 py-2">
          <div class="flex items-center gap-x-1">
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700" title="Bold">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h4.5a3.25 3.25 0 0 0 1.49-6.14A3.25 3.25 0 0 0 7.75 5.5h-3.5Zm4.5 5h-3v2.5h3a1.75 1.75 0 1 0 0-3.5Zm-1-3.5h-2v2.5h2a1.25 1.25 0 1 0 0-2.5Z" clip-rule="evenodd" />
              </svg>
            </button>
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700" title="Italic">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M8 2.75A.75.75 0 0 1 8.75 2h6.5a.75.75 0 0 1 0 1.5h-2.57l-4.36 13h2.13a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.57l4.36-13H8.75A.75.75 0 0 1 8 2.75Z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="mx-1 h-4 w-px bg-gray-300"></div>
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700" title="Bullet list">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.5-1.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 6a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 6a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
              </svg>
            </button>
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700" title="Numbered list">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M3 3.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm4.5.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10ZM3 8.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm4.5.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10ZM3 13.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V14a.75.75 0 0 1 .75-.75Zm4.5.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="mx-1 h-4 w-px bg-gray-300"></div>
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700" title="Link">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Textarea -->
        <textarea
          id="${name}"
          name="${name}"
          rows="${rows}"
          placeholder="${placeholder}"
          ${required ? "required" : ""}
          ${onChange ? `data-on:input="${onChange}"` : ""}
          class="block w-full resize-none border-0 py-3 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">${value}</textarea>
      </div>
      ${helpText ? `<p class="mt-1.5 text-sm text-gray-500">${helpText}</p>` : ""}
    </div>
  `;
}
