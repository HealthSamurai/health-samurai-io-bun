/**
 * Radio Group Component
 * Radio button groups for single-choice selection
 *
 * @example
 * // Simple radio group
 * <RadioGroup
 *   name="plan"
 *   options={[
 *     { value: "startup", label: "Startup" },
 *     { value: "business", label: "Business" },
 *     { value: "enterprise", label: "Enterprise" },
 *   ]}
 * />
 *
 * // Card style
 * <RadioGroup
 *   variant="cards"
 *   name="plan"
 *   options={[
 *     { value: "startup", label: "Startup", description: "For small teams" },
 *     { value: "business", label: "Business", description: "For growing companies" },
 *   ]}
 * />
 */

export type RadioOption = {
  /** Option value */
  value: string;
  /** Display label */
  label: string;
  /** Description text */
  description?: string;
  /** Is option disabled */
  disabled?: boolean;
  /** Extra info (like price) */
  extra?: string;
};

export type RadioGroupProps = {
  /** Input name */
  name: string;
  /** Radio options */
  options: RadioOption[];
  /** Currently selected value */
  value?: string;
  /** Group label */
  label?: string;
  /** Help text */
  helpText?: string;
  /** Error message */
  error?: string;
  /** Is required */
  required?: boolean;
  /** Visual variant */
  variant?: "simple" | "list" | "cards" | "cards-horizontal" | "small-cards" | "stacked";
  /** Change handler (Datastar expression) */
  onChange?: string;
  /** Additional CSS classes */
  className?: string;
};

export function RadioGroup({
  name,
  options,
  value,
  label,
  helpText,
  error,
  required = false,
  variant = "simple",
  onChange,
  className = "",
}: RadioGroupProps): string {
  const signalName = `${name}Value`;

  if (variant === "cards" || variant === "cards-horizontal") {
    return RadioCards({ name, options, value, label, helpText, error, required, horizontal: variant === "cards-horizontal", onChange, className });
  }

  if (variant === "small-cards") {
    return SmallRadioCards({ name, options, value, label, helpText, error, required, onChange, className });
  }

  if (variant === "stacked") {
    return StackedRadio({ name, options, value, label, helpText, error, required, onChange, className });
  }

  if (variant === "list") {
    return RadioList({ name, options, value, label, helpText, error, required, onChange, className });
  }

  // Simple variant (default)
  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-3 space-y-3">
        ${options.map(opt => `
          <div class="flex items-center gap-x-3">
            <input
              type="radio"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.value === value ? "checked" : ""}
              ${opt.disabled ? "disabled" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              data-on:change="$${signalName} = '${opt.value}'"
              class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
            <label for="${name}-${opt.value}" class="block text-sm font-medium text-gray-900 ${opt.disabled ? 'opacity-50' : ''}">
              ${opt.label}
            </label>
          </div>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Radio list with descriptions
function RadioList({
  name,
  options,
  value,
  label,
  helpText,
  error,
  required = false,
  onChange,
  className = "",
}: Omit<RadioGroupProps, "variant">): string {
  const signalName = `${name}Value`;

  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        ${options.map(opt => `
          <div class="flex items-center justify-between py-4 ${opt.disabled ? 'opacity-50' : ''}">
            <div class="flex min-w-0 flex-1 gap-x-4">
              <input
                type="radio"
                id="${name}-${opt.value}"
                name="${name}"
                value="${opt.value}"
                ${opt.value === value ? "checked" : ""}
                ${opt.disabled ? "disabled" : ""}
                ${onChange ? `data-on:change="${onChange}"` : ""}
                data-on:change="$${signalName} = '${opt.value}'"
                class="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100" />
              <div class="min-w-0 flex-1">
                <label for="${name}-${opt.value}" class="text-sm font-medium text-gray-900">${opt.label}</label>
                ${opt.description ? `<p class="mt-1 text-sm text-gray-500">${opt.description}</p>` : ""}
              </div>
            </div>
            ${opt.extra ? `<span class="ml-4 text-sm font-medium text-gray-900">${opt.extra}</span>` : ""}
          </div>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Radio cards (larger clickable cards)
function RadioCards({
  name,
  options,
  value,
  label,
  helpText,
  error,
  required = false,
  horizontal = false,
  onChange,
  className = "",
}: Omit<RadioGroupProps, "variant"> & { horizontal?: boolean }): string {
  const signalName = `${name}Value`;

  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 ${horizontal ? 'flex flex-wrap gap-4' : 'space-y-4'}">
        ${options.map(opt => `
          <label
            for="${name}-${opt.value}"
            class="relative flex ${horizontal ? 'flex-1 min-w-[200px]' : ''} cursor-pointer rounded-lg border ${opt.value === value ? 'border-primary ring-2 ring-primary' : 'border-gray-300'} bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-primary ${opt.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-400'}">
            <input
              type="radio"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.value === value ? "checked" : ""}
              ${opt.disabled ? "disabled" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              data-on:change="$${signalName} = '${opt.value}'"
              class="sr-only" />
            <span class="flex flex-1">
              <span class="flex flex-col">
                <span class="block text-sm font-medium text-gray-900">${opt.label}</span>
                ${opt.description ? `<span class="mt-1 flex items-center text-sm text-gray-500">${opt.description}</span>` : ""}
                ${opt.extra ? `<span class="mt-4 text-sm font-medium text-gray-900">${opt.extra}</span>` : ""}
              </span>
            </span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary ${opt.value === value ? '' : 'invisible'}">
              <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
            </svg>
          </label>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Small radio cards (compact version)
function SmallRadioCards({
  name,
  options,
  value,
  label,
  helpText,
  error,
  required = false,
  onChange,
  className = "",
}: Omit<RadioGroupProps, "variant">): string {
  const signalName = `${name}Value`;

  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
        ${options.map(opt => `
          <label
            for="${name}-${opt.value}"
            class="flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-semibold uppercase ${opt.value === value ? 'bg-primary text-white ring-2 ring-primary' : 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50'} ${opt.disabled ? 'opacity-50 cursor-not-allowed' : ''}">
            <input
              type="radio"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.value === value ? "checked" : ""}
              ${opt.disabled ? "disabled" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              data-on:change="$${signalName} = '${opt.value}'"
              class="sr-only" />
            ${opt.label}
          </label>
        `).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Stacked radio (with panel styling)
function StackedRadio({
  name,
  options,
  value,
  label,
  helpText,
  error,
  required = false,
  onChange,
  className = "",
}: Omit<RadioGroupProps, "variant">): string {
  const signalName = `${name}Value`;

  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `
        <legend class="text-sm font-semibold text-gray-900">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </legend>
      ` : ""}
      ${helpText ? `<p class="mt-1 text-sm text-gray-500">${helpText}</p>` : ""}
      <div class="mt-4 -space-y-px rounded-md bg-white">
        ${options.map((opt, i) => {
          const isFirst = i === 0;
          const isLast = i === options.length - 1;
          const roundedClass = isFirst ? "rounded-t-md" : isLast ? "rounded-b-md" : "";

          return `
            <label
              for="${name}-${opt.value}"
              class="relative flex cursor-pointer border p-4 focus-within:ring-2 focus-within:ring-primary ${roundedClass} ${opt.value === value ? 'z-10 border-primary bg-primary-light' : 'border-gray-200'} ${opt.disabled ? 'opacity-50 cursor-not-allowed' : ''}">
              <input
                type="radio"
                id="${name}-${opt.value}"
                name="${name}"
                value="${opt.value}"
                ${opt.value === value ? "checked" : ""}
                ${opt.disabled ? "disabled" : ""}
                ${onChange ? `data-on:change="${onChange}"` : ""}
                data-on:change="$${signalName} = '${opt.value}'"
                class="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&:not(:checked)]:before:hidden" />
              <span class="ml-3 flex flex-col">
                <span class="block text-sm font-medium ${opt.value === value ? 'text-primary-dark' : 'text-gray-900'}">${opt.label}</span>
                ${opt.description ? `<span class="block text-sm ${opt.value === value ? 'text-primary' : 'text-gray-500'}">${opt.description}</span>` : ""}
              </span>
              ${opt.extra ? `<span class="ml-auto text-sm font-medium ${opt.value === value ? 'text-primary-dark' : 'text-gray-900'}">${opt.extra}</span>` : ""}
            </label>
          `;
        }).join("")}
      </div>
      ${error ? `<p class="mt-2 text-sm text-red-600">${error}</p>` : ""}
    </fieldset>
  `;
}

// Inline radio group (horizontal, no wrapper)
export function InlineRadioGroup({
  name,
  options,
  value,
  onChange,
  className = "",
}: {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: string;
  className?: string;
}): string {
  const signalName = `${name}Value`;

  return `
    <div class="flex items-center gap-x-6 ${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${options.map(opt => `
        <div class="flex items-center gap-x-2">
          <input
            type="radio"
            id="${name}-${opt.value}"
            name="${name}"
            value="${opt.value}"
            ${opt.value === value ? "checked" : ""}
            ${opt.disabled ? "disabled" : ""}
            ${onChange ? `data-on:change="${onChange}"` : ""}
            data-on:change="$${signalName} = '${opt.value}'"
            class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&:not(:checked)]:before:hidden" />
          <label for="${name}-${opt.value}" class="text-sm font-medium text-gray-900 ${opt.disabled ? 'opacity-50' : ''}">
            ${opt.label}
          </label>
        </div>
      `).join("")}
    </div>
  `;
}

// Color picker radio group
export function ColorRadioGroup({
  name,
  colors,
  value,
  label,
  onChange,
  className = "",
}: {
  name: string;
  colors: Array<{ value: string; label: string; color: string }>;
  value?: string;
  label?: string;
  onChange?: string;
  className?: string;
}): string {
  const signalName = `${name}Value`;

  return `
    <fieldset class="${className}" data-signals="{${signalName}: '${value || ''}'}">
      ${label ? `<legend class="text-sm font-medium text-gray-900">${label}</legend>` : ""}
      <div class="${label ? 'mt-4' : ''} flex items-center gap-x-3">
        ${colors.map(opt => `
          <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${opt.value === value ? 'ring-2 ring-primary ring-offset-2' : ''}">
            <input
              type="radio"
              id="${name}-${opt.value}"
              name="${name}"
              value="${opt.value}"
              ${opt.value === value ? "checked" : ""}
              ${onChange ? `data-on:change="${onChange}"` : ""}
              data-on:change="$${signalName} = '${opt.value}'"
              class="sr-only" />
            <span aria-hidden="true" class="size-8 rounded-full border border-black/10" style="background-color: ${opt.color}"></span>
            <span class="sr-only">${opt.label}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}
