/**
 * Checkbox Component
 * Checkbox inputs with various styles
 *
 * @example
 * // Simple checkbox
 * <Checkbox name="terms" label="I agree to the terms" />
 *
 * // Checkbox group
 * <CheckboxGroup
 *   name="features"
 *   label="Features"
 *   options={[
 *     { value: "email", label: "Email notifications" },
 *     { value: "sms", label: "SMS notifications" },
 *   ]}
 * />
 */

export type CheckboxProps = {
  /** Input name */
  name: string;
  /** Label text */
  label: string;
  /** Description text */
  description?: string;
  /** Checkbox value */
  value?: string;
  /** Is checked */
  checked?: boolean;
  /** Is required */
  required?: boolean;
  /** Is disabled */
  disabled?: boolean;
  /** Is indeterminate */
  indeterminate?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Change handler (Datastar expression) */
  onChange?: string;
  /** Additional CSS classes */
  className?: string;
};

// Size classes
const sizes = {
  sm: { checkbox: "size-3.5", text: "text-sm" },
  md: { checkbox: "size-4", text: "text-sm" },
  lg: { checkbox: "size-5", text: "text-base" },
} as const;

export function Checkbox({
  name,
  label,
  description,
  value,
  checked = false,
  required = false,
  disabled = false,
  size = "md",
  onChange,
  className = "",
}: CheckboxProps): string {
  const sizeConfig = sizes[size];

  const checkboxClasses = `
    ${sizeConfig.checkbox} rounded border-gray-300 text-primary
    focus:ring-primary focus:ring-offset-0
    disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400
  `.trim().replace(/\s+/g, " ");

  return `
    <div class="flex items-start gap-x-3 ${className}">
      <div class="flex h-6 items-center">
        <input
          type="checkbox"
          id="${name}"
          name="${name}"
          ${value ? `value="${value}"` : ""}
          ${checked ? "checked" : ""}
          ${required ? "required" : ""}
          ${disabled ? "disabled" : ""}
          ${onChange ? `data-on:change="${onChange}"` : ""}
          class="${checkboxClasses}" />
      </div>
      <div class="leading-6">
        <label for="${name}" class="${sizeConfig.text} font-medium text-gray-900 ${disabled ? 'opacity-50' : ''}">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </label>
        ${description ? `<p class="${sizeConfig.text} text-gray-500">${description}</p>` : ""}
      </div>
    </div>
  `;
}

// Checkbox on the right side
export function CheckboxRight({
  name,
  label,
  description,
  value,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}: Omit<CheckboxProps, "size" | "required">): string {
  return `
    <div class="flex items-start justify-between gap-x-3 ${className}">
      <div class="leading-6">
        <label for="${name}" class="text-sm font-medium text-gray-900 ${disabled ? 'opacity-50' : ''}">${label}</label>
        ${description ? `<p class="text-sm text-gray-500">${description}</p>` : ""}
      </div>
      <div class="flex h-6 items-center">
        <input
          type="checkbox"
          id="${name}"
          name="${name}"
          ${value ? `value="${value}"` : ""}
          ${checked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
          ${onChange ? `data-on:change="${onChange}"` : ""}
          class="size-4 rounded border-gray-300 text-primary focus:ring-primary" />
      </div>
    </div>
  `;
}

// Checkbox group
export type CheckboxGroupOption = {
  value: string;
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
};

export type CheckboxGroupProps = {
  /** Group name */
  name: string;
  /** Group label */
  label?: string;
  /** Help text */
  helpText?: string;
  /** Error message */
  error?: string;
  /** Checkbox options */
  options: CheckboxGroupOption[];
  /** Is required */
  required?: boolean;
  /** Visual variant */
  variant?: "simple" | "list" | "cards" | "inline";
  /** Change handler (Datastar expression) */
  onChange?: string;
  /** Additional CSS classes */
  className?: string;
};

export function CheckboxGroup({
  name,
  label,
  helpText,
  error,
  options,
  required = false,
  variant = "simple",
  onChange,
  className = "",
}: CheckboxGroupProps): string {
  if (variant === "list") {
    return CheckboxList({ name, label, helpText, error, options, required, onChange, className });
  }

  if (variant === "cards") {
    return CheckboxCards({ name, label, helpText, error, options, required, onChange, className });
  }

  if (variant === "inline") {
    return InlineCheckboxGroup({ name, label, options, onChange, className });
  }

  // Simple variant
  return `
    <fieldset class="${className}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-3 space-y-3">
        ${options.map(opt => `
          <div class="flex items-start gap-x-3">
            <div class="flex h-6 items-center">
              <input
                type="checkbox"
                id="${name}-${opt.value}"
                name="${name}"
                value="${opt.value}"
                ${opt.checked ? "checked" : ""}
                ${opt.disabled ? "disabled" : ""}
                ${onChange ? `data-on:change="${onChange}"` : ""}
                class="size-4 rounded border-gray-300 text-primary focus:ring-primary disabled:border-gray-200 disabled:bg-gray-100" />
            </div>
            <div class="leading-6">
              <label for="${name}-${opt.value}" class="text-sm font-medium text-gray-900 ${opt.disabled ? 'opacity-50' : ''}">
                ${opt.label}
              </label>
              ${opt.description ? `<p class="text-sm text-gray-500">${opt.description}</p>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Checkbox list with dividers
function CheckboxList({
  name,
  label,
  helpText,
  error,
  options,
  required = false,
  onChange,
  className = "",
}: Omit<CheckboxGroupProps, "variant">): string {
  return `
    <fieldset class="${className}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        ${options.map(opt => `
          <div class="flex items-center justify-between py-4 ${opt.disabled ? 'opacity-50' : ''}">
            <div class="min-w-0 flex-1">
              <label for="${name}-${opt.value}" class="text-sm font-medium text-gray-900">${opt.label}</label>
              ${opt.description ? `<p class="text-sm text-gray-500">${opt.description}</p>` : ""}
            </div>
            <div class="ml-4 flex items-center">
              <input
                type="checkbox"
                id="${name}-${opt.value}"
                name="${name}"
                value="${opt.value}"
                ${opt.checked ? "checked" : ""}
                ${opt.disabled ? "disabled" : ""}
                ${onChange ? `data-on:change="${onChange}"` : ""}
                class="size-4 rounded border-gray-300 text-primary focus:ring-primary" />
            </div>
          </div>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Checkbox cards
function CheckboxCards({
  name,
  label,
  helpText,
  error,
  options,
  required = false,
  onChange,
  className = "",
}: Omit<CheckboxGroupProps, "variant">): string {
  return `
    <fieldset class="${className}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 space-y-4">
        ${options.map(opt => `
          <label
            for="${name}-${opt.value}"
            class="relative flex cursor-pointer rounded-lg border ${opt.checked ? 'border-primary ring-2 ring-primary' : 'border-gray-300'} bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-primary ${opt.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400'}">
            <input
              type="checkbox"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.checked ? "checked" : ""}
              ${opt.disabled ? "disabled" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              class="sr-only" />
            <span class="flex flex-1">
              <span class="flex flex-col">
                <span class="block text-sm font-medium text-gray-900">${opt.label}</span>
                ${opt.description ? `<span class="mt-1 text-sm text-gray-500">${opt.description}</span>` : ""}
              </span>
            </span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary ${opt.checked ? '' : 'invisible'}">
              <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
            </svg>
          </label>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Inline checkbox group
function InlineCheckboxGroup({
  name,
  label,
  options,
  onChange,
  className = "",
}: Pick<CheckboxGroupProps, "name" | "label" | "options" | "onChange" | "className">): string {
  return `
    <fieldset class="${className}">
      ${label ? `<legend class="text-sm font-semibold text-gray-900 mb-3">${label}</legend>` : ""}
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
        ${options.map(opt => `
          <div class="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.checked ? "checked" : ""}
              ${opt.disabled ? "disabled" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              class="size-4 rounded border-gray-300 text-primary focus:ring-primary disabled:opacity-50" />
            <label for="${name}-${opt.value}" class="text-sm font-medium text-gray-900 ${opt.disabled ? 'opacity-50' : ''}">
              ${opt.label}
            </label>
          </div>
        `).join("")}
      </div>
    </fieldset>
  `;
}

// Toggle/Switch style checkbox
export function Toggle({
  name,
  label,
  description,
  checked = false,
  disabled = false,
  size = "md",
  onChange,
  className = "",
}: {
  name: string;
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: string;
  className?: string;
}): string {
  const toggleSizes = {
    sm: { track: "w-8 h-4", thumb: "size-3", translate: "translate-x-4" },
    md: { track: "w-11 h-6", thumb: "size-5", translate: "translate-x-5" },
    lg: { track: "w-14 h-7", thumb: "size-6", translate: "translate-x-7" },
  } as const;

  const sizeConfig = toggleSizes[size];
  const signalName = `${name}Checked`;

  return `
    <div class="flex items-center ${label || description ? 'justify-between' : ''} ${className}" data-signals="{${signalName}: ${checked}}">
      ${(label || description) ? `
        <span class="flex flex-col">
          ${label ? `<span class="text-sm font-medium text-gray-900">${label}</span>` : ""}
          ${description ? `<span class="text-sm text-gray-500">${description}</span>` : ""}
        </span>
      ` : ""}
      <button
        type="button"
        role="switch"
        data-attr:aria-checked="$${signalName}"
        ${disabled ? "disabled" : `data-on:click="$${signalName} = !$${signalName}${onChange ? `; ${onChange}` : ''}"`}
        class="relative inline-flex ${sizeConfig.track} shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}"
        data-class="{
          'bg-primary': $${signalName},
          'bg-gray-200': !$${signalName}
        }">
        <span class="sr-only">${label || 'Toggle'}</span>
        <span
          aria-hidden="true"
          class="pointer-events-none inline-block ${sizeConfig.thumb} transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          data-class="{
            '${sizeConfig.translate}': $${signalName},
            'translate-x-0': !$${signalName}
          }"></span>
      </button>
      <input type="hidden" name="${name}" data-attr:value="$${signalName} ? 'on' : ''" />
    </div>
  `;
}

// Toggle with icon
export function ToggleWithIcon({
  name,
  label,
  description,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}: {
  name: string;
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: string;
  className?: string;
}): string {
  const signalName = `${name}Checked`;

  return `
    <div class="flex items-center ${label || description ? 'justify-between' : ''} ${className}" data-signals="{${signalName}: ${checked}}">
      ${(label || description) ? `
        <span class="flex flex-col">
          ${label ? `<span class="text-sm font-medium text-gray-900">${label}</span>` : ""}
          ${description ? `<span class="text-sm text-gray-500">${description}</span>` : ""}
        </span>
      ` : ""}
      <button
        type="button"
        role="switch"
        data-attr:aria-checked="$${signalName}"
        ${disabled ? "disabled" : `data-on:click="$${signalName} = !$${signalName}${onChange ? `; ${onChange}` : ''}"`}
        class="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}"
        data-class="{
          'bg-primary': $${signalName},
          'bg-gray-200': !$${signalName}
        }">
        <span class="sr-only">${label || 'Toggle'}</span>
        <span
          class="pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          data-class="{
            'translate-x-5': $${signalName},
            'translate-x-0': !$${signalName}
          }">
          <span
            class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            aria-hidden="true"
            data-class="{
              'opacity-0 duration-100 ease-out': $${signalName},
              'opacity-100 duration-200 ease-in': !$${signalName}
            }">
            <svg class="size-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span
            class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            aria-hidden="true"
            data-class="{
              'opacity-100 duration-200 ease-in': $${signalName},
              'opacity-0 duration-100 ease-out': !$${signalName}
            }">
            <svg class="size-3 text-primary" fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </button>
      <input type="hidden" name="${name}" data-attr:value="$${signalName} ? 'on' : ''" />
    </div>
  `;
}
