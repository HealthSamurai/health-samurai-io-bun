/**
 * Input Component
 * Based on Tailwind Plus UI input groups
 *
 * @example
 * // Basic input
 * <Input label="Email" name="email" type="email" placeholder="you@example.com" />
 *
 * // With help text
 * <Input label="Email" name="email" helpText="We'll never share your email." />
 *
 * // With error
 * <Input label="Email" name="email" error="Invalid email address" />
 *
 * // With leading icon
 * <Input label="Email" name="email" leadingIcon={EmailIcon} />
 *
 * // With addon
 * <Input label="Website" name="url" leadingAddon="https://" />
 * <Input label="Price" name="price" trailingAddon="USD" />
 *
 * // Disabled
 * <Input label="Email" name="email" disabled value="readonly@example.com" />
 */

export type InputProps = {
  /** Input label */
  label: string;
  /** Input name attribute */
  name: string;
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date";
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Help text below input */
  helpText?: string;
  /** Error message (shows error state) */
  error?: string;
  /** Corner hint text (e.g., "Optional") */
  cornerHint?: string;
  /** Leading icon SVG string */
  leadingIcon?: string;
  /** Trailing icon SVG string */
  trailingIcon?: string;
  /** Text addon before input */
  leadingAddon?: string;
  /** Text addon after input */
  trailingAddon?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Required field */
  required?: boolean;
  /** Hide label visually (still accessible) */
  hideLabel?: boolean;
  /** Auto-complete attribute */
  autocomplete?: string;
  /** Additional input classes */
  className?: string;
  /** Input ID (defaults to name) */
  id?: string;
};

// Error icon SVG
const errorIcon = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>`;

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  helpText,
  error,
  cornerHint,
  leadingIcon,
  trailingIcon,
  leadingAddon,
  trailingAddon,
  disabled = false,
  required = false,
  hideLabel = false,
  autocomplete,
  className = "",
  id,
}: InputProps): string {
  const inputId = id || name;
  const hasError = !!error;
  const hasLeadingIcon = !!leadingIcon;
  const hasTrailingIcon = !!trailingIcon || hasError;
  const hasLeadingAddon = !!leadingAddon;
  const hasTrailingAddon = !!trailingAddon;

  // Base input classes
  const baseInputClasses = "block w-full rounded-md bg-white text-base sm:text-sm/6";

  // State-dependent classes
  const stateClasses = hasError
    ? "text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
    : "text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary";

  const disabledClasses = disabled
    ? "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200"
    : "";

  // Padding based on icons/addons
  let paddingClasses = "px-3 py-1.5";
  if (hasLeadingIcon) paddingClasses = "pl-10 pr-3 py-1.5";
  if (hasTrailingIcon || hasError) paddingClasses = "pl-3 pr-10 py-1.5";
  if (hasLeadingIcon && (hasTrailingIcon || hasError)) paddingClasses = "pl-10 pr-10 py-1.5";
  if (hasLeadingAddon) paddingClasses = "pl-3 pr-3 py-1.5 rounded-l-none";
  if (hasTrailingAddon) paddingClasses = "pl-3 pr-3 py-1.5 rounded-r-none";

  const inputClasses = [baseInputClasses, stateClasses, disabledClasses, paddingClasses, className].filter(Boolean).join(" ");

  // Build attributes
  const attrs: string[] = [
    `type="${type}"`,
    `name="${name}"`,
    `id="${inputId}"`,
    `class="${inputClasses}"`,
  ];
  if (placeholder) attrs.push(`placeholder="${placeholder}"`);
  if (value !== undefined) attrs.push(`value="${value}"`);
  if (disabled) attrs.push("disabled");
  if (required) attrs.push("required");
  if (autocomplete) attrs.push(`autocomplete="${autocomplete}"`);
  if (hasError) {
    attrs.push('aria-invalid="true"');
    attrs.push(`aria-describedby="${inputId}-error"`);
  } else if (helpText) {
    attrs.push(`aria-describedby="${inputId}-description"`);
  }

  // Build label
  const labelClasses = hideLabel ? "sr-only" : "block text-sm/6 font-medium text-gray-900";
  const labelHtml = `<label for="${inputId}" class="${labelClasses}">${label}${required ? '<span class="text-red-500 ml-1">*</span>' : ''}</label>`;

  // Build corner hint
  const cornerHintHtml = cornerHint
    ? `<span class="text-sm/6 text-gray-500">${cornerHint}</span>`
    : "";

  // Build header (label + corner hint)
  const headerHtml = cornerHint
    ? `<div class="flex justify-between">${labelHtml}${cornerHintHtml}</div>`
    : labelHtml;

  // Build input with icons/addons
  let inputHtml = "";

  if (hasLeadingAddon || hasTrailingAddon) {
    // Input with addons
    inputHtml = `
      <div class="mt-2 flex rounded-md shadow-sm">
        ${hasLeadingAddon ? `<span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">${leadingAddon}</span>` : ""}
        <input ${attrs.join(" ")} />
        ${hasTrailingAddon ? `<span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">${trailingAddon}</span>` : ""}
      </div>
    `;
  } else if (hasLeadingIcon || hasTrailingIcon || hasError) {
    // Input with icons
    const styledLeadingIcon = leadingIcon
      ? leadingIcon.replace(/<svg/, '<svg class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"')
      : "";

    const styledTrailingIcon = trailingIcon
      ? trailingIcon.replace(/<svg/, '<svg class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"')
      : "";

    inputHtml = `
      <div class="mt-2 grid grid-cols-1">
        ${styledLeadingIcon}
        <input ${attrs.join(" ")} />
        ${hasError ? errorIcon : styledTrailingIcon}
      </div>
    `;
  } else {
    // Simple input
    inputHtml = `
      <div class="mt-2">
        <input ${attrs.join(" ")} />
      </div>
    `;
  }

  // Build help text / error message
  let messageHtml = "";
  if (hasError) {
    messageHtml = `<p id="${inputId}-error" class="mt-2 text-sm text-red-600">${error}</p>`;
  } else if (helpText) {
    messageHtml = `<p id="${inputId}-description" class="mt-2 text-sm text-gray-500">${helpText}</p>`;
  }

  return `<div>${headerHtml}${inputHtml}${messageHtml}</div>`;
}

// Textarea component
export type TextareaProps = Omit<InputProps, "type" | "leadingIcon" | "trailingIcon" | "leadingAddon" | "trailingAddon"> & {
  rows?: number;
};

export function Textarea({
  label,
  name,
  placeholder,
  value,
  helpText,
  error,
  cornerHint,
  disabled = false,
  required = false,
  hideLabel = false,
  className = "",
  id,
  rows = 4,
}: TextareaProps): string {
  const inputId = id || name;
  const hasError = !!error;

  // Base classes
  const baseClasses = "block w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6";
  const stateClasses = hasError
    ? "text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
    : "text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary";
  const disabledClasses = disabled
    ? "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200"
    : "";

  const textareaClasses = [baseClasses, stateClasses, disabledClasses, className].filter(Boolean).join(" ");

  // Build attributes
  const attrs: string[] = [
    `name="${name}"`,
    `id="${inputId}"`,
    `rows="${rows}"`,
    `class="${textareaClasses}"`,
  ];
  if (placeholder) attrs.push(`placeholder="${placeholder}"`);
  if (disabled) attrs.push("disabled");
  if (required) attrs.push("required");
  if (hasError) {
    attrs.push('aria-invalid="true"');
    attrs.push(`aria-describedby="${inputId}-error"`);
  } else if (helpText) {
    attrs.push(`aria-describedby="${inputId}-description"`);
  }

  // Build label
  const labelClasses = hideLabel ? "sr-only" : "block text-sm/6 font-medium text-gray-900";
  const labelHtml = `<label for="${inputId}" class="${labelClasses}">${label}${required ? '<span class="text-red-500 ml-1">*</span>' : ''}</label>`;

  // Build corner hint
  const cornerHintHtml = cornerHint
    ? `<span class="text-sm/6 text-gray-500">${cornerHint}</span>`
    : "";

  const headerHtml = cornerHint
    ? `<div class="flex justify-between">${labelHtml}${cornerHintHtml}</div>`
    : labelHtml;

  // Build textarea
  const textareaHtml = `
    <div class="mt-2">
      <textarea ${attrs.join(" ")}>${value || ""}</textarea>
    </div>
  `;

  // Build message
  let messageHtml = "";
  if (hasError) {
    messageHtml = `<p id="${inputId}-error" class="mt-2 text-sm text-red-600">${error}</p>`;
  } else if (helpText) {
    messageHtml = `<p id="${inputId}-description" class="mt-2 text-sm text-gray-500">${helpText}</p>`;
  }

  return `<div>${headerHtml}${textareaHtml}${messageHtml}</div>`;
}

// Select component
export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  label: string;
  name: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  helpText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  hideLabel?: boolean;
  className?: string;
  id?: string;
};

export function Select({
  label,
  name,
  options,
  value,
  placeholder,
  helpText,
  error,
  disabled = false,
  required = false,
  hideLabel = false,
  className = "",
  id,
}: SelectProps): string {
  const inputId = id || name;
  const hasError = !!error;

  const baseClasses = "block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base sm:text-sm/6";
  const stateClasses = hasError
    ? "text-red-900 outline-1 -outline-offset-1 outline-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
    : "text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary";
  const disabledClasses = disabled
    ? "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
    : "";

  const selectClasses = [baseClasses, stateClasses, disabledClasses, className].filter(Boolean).join(" ");

  // Build label
  const labelClasses = hideLabel ? "sr-only" : "block text-sm/6 font-medium text-gray-900";
  const labelHtml = `<label for="${inputId}" class="${labelClasses}">${label}${required ? '<span class="text-red-500 ml-1">*</span>' : ''}</label>`;

  // Build options
  const optionsHtml = options.map(opt => {
    const selected = opt.value === value ? " selected" : "";
    const optDisabled = opt.disabled ? " disabled" : "";
    return `<option value="${opt.value}"${selected}${optDisabled}>${opt.label}</option>`;
  }).join("");

  const placeholderOption = placeholder
    ? `<option value="" disabled${!value ? " selected" : ""}>${placeholder}</option>`
    : "";

  // Build select
  const attrs = [
    `name="${name}"`,
    `id="${inputId}"`,
    `class="${selectClasses}"`,
    disabled ? "disabled" : "",
    required ? "required" : "",
  ].filter(Boolean).join(" ");

  const selectHtml = `
    <div class="mt-2 grid grid-cols-1">
      <select ${attrs}>
        ${placeholderOption}${optionsHtml}
      </select>
      <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </div>
  `;

  // Build message
  let messageHtml = "";
  if (hasError) {
    messageHtml = `<p class="mt-2 text-sm text-red-600">${error}</p>`;
  } else if (helpText) {
    messageHtml = `<p class="mt-2 text-sm text-gray-500">${helpText}</p>`;
  }

  return `<div>${labelHtml}${selectHtml}${messageHtml}</div>`;
}

// Common input icons
export const InputIcons = {
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"/><path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd"/></svg>`,
};
