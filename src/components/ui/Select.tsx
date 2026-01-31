/**
 * Select Menu Component
 * Custom styled select/dropdown menus
 *
 * @example
 * // Simple select
 * <Select
 *   name="country"
 *   options={[
 *     { value: "us", label: "United States" },
 *     { value: "ca", label: "Canada" },
 *   ]}
 * />
 *
 * // With label and placeholder
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   name="country"
 *   options={...}
 * />
 */

export type SelectOption = {
  /** Option value */
  value: string;
  /** Display label */
  label: string;
  /** Option is disabled */
  disabled?: boolean;
  /** Optional description */
  description?: string;
  /** Optional avatar/image URL */
  avatar?: string;
};

export type SelectProps = {
  /** Input name */
  name: string;
  /** Select options */
  options: SelectOption[];
  /** Currently selected value */
  value?: string;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Help text */
  helpText?: string;
  /** Error message */
  error?: string;
  /** Is required */
  required?: boolean;
  /** Is disabled */
  disabled?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Visual variant */
  variant?: "simple" | "with-avatar" | "with-description";
  /** Change handler (Datastar expression) */
  onChange?: string;
  /** Additional CSS classes */
  className?: string;
};

// Size classes
const sizes = {
  sm: { select: "py-1.5 pl-2 pr-8 text-sm", icon: "size-4", avatar: "size-4" },
  md: { select: "py-2 pl-3 pr-10 text-sm", icon: "size-5", avatar: "size-5" },
  lg: { select: "py-2.5 pl-4 pr-12 text-base", icon: "size-5", avatar: "size-6" },
} as const;

export function Select({
  name,
  options,
  value,
  label,
  placeholder,
  helpText,
  error,
  required = false,
  disabled = false,
  size = "md",
  onChange,
  className = "",
}: SelectProps): string {
  const sizeConfig = sizes[size];

  const selectClasses = `
    block w-full appearance-none rounded-md border-0
    ${sizeConfig.select}
    text-gray-900 shadow-sm
    ring-1 ring-inset ${error ? "ring-red-300" : "ring-gray-300"}
    ${error ? "focus:ring-red-500" : "focus:ring-primary"}
    focus:ring-2 focus:ring-inset
    ${disabled ? "bg-gray-50 text-gray-500 cursor-not-allowed" : "bg-white"}
    sm:leading-6
  `.trim().replace(/\s+/g, " ");

  return `
    <div class="${className}">
      ${label ? `
        <label for="${name}" class="block text-sm font-medium text-gray-900 mb-1.5">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </label>
      ` : ""}
      <div class="relative">
        <select
          id="${name}"
          name="${name}"
          ${value ? `value="${value}"` : ""}
          ${required ? "required" : ""}
          ${disabled ? "disabled" : ""}
          ${onChange ? `data-on:change="${onChange}"` : ""}
          class="${selectClasses}">
          ${placeholder ? `<option value="" disabled ${!value ? "selected" : ""}>${placeholder}</option>` : ""}
          ${options.map(opt => `
            <option value="${opt.value}" ${opt.disabled ? "disabled" : ""} ${opt.value === value ? "selected" : ""}>
              ${opt.label}
            </option>
          `).join("")}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg viewBox="0 0 20 20" fill="currentColor" class="${sizeConfig.icon} text-gray-400" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      ${helpText && !error ? `<p class="mt-1.5 text-sm text-gray-500">${helpText}</p>` : ""}
      ${error ? `<p class="mt-1.5 text-sm text-red-600">${error}</p>` : ""}
    </div>
  `;
}

// Custom dropdown select with Datastar (more control over styling)
export function CustomSelect({
  name,
  options,
  value,
  label,
  placeholder = "Select option",
  helpText,
  error,
  required = false,
  disabled = false,
  size = "md",
  variant = "simple",
  onChange,
  className = "",
}: SelectProps): string {
  const sizeConfig = sizes[size];
  const signalName = `${name}Open`;
  const selectedSignal = `${name}Selected`;

  const selectedOption = options.find(opt => opt.value === value);

  const buttonClasses = `
    relative w-full cursor-pointer rounded-md
    ${sizeConfig.select}
    text-left shadow-sm
    ring-1 ring-inset ${error ? "ring-red-300" : "ring-gray-300"}
    ${error ? "focus:ring-red-500" : "focus:ring-primary"}
    focus:outline-none focus:ring-2
    ${disabled ? "bg-gray-50 text-gray-500 cursor-not-allowed" : "bg-white"}
  `.trim().replace(/\s+/g, " ");

  const renderOption = (opt: SelectOption, isSelected: boolean) => {
    if (variant === "with-avatar" && opt.avatar) {
      return `
        <div class="flex items-center">
          <img src="${opt.avatar}" alt="" class="${sizeConfig.avatar} shrink-0 rounded-full" />
          <span class="ml-3 block truncate ${isSelected ? "font-semibold" : ""}">${opt.label}</span>
        </div>
      `;
    }
    if (variant === "with-description" && opt.description) {
      return `
        <div class="flex flex-col">
          <span class="block truncate ${isSelected ? "font-semibold" : ""}">${opt.label}</span>
          <span class="block truncate text-gray-500 text-xs">${opt.description}</span>
        </div>
      `;
    }
    return `<span class="block truncate ${isSelected ? "font-semibold" : ""}">${opt.label}</span>`;
  };

  return `
    <div class="${className}" data-signals="{${signalName}: false, ${selectedSignal}: '${value || ''}'}">
      ${label ? `
        <label class="block text-sm font-medium text-gray-900 mb-1.5">
          ${label}${required ? '<span class="text-red-500 ml-0.5">*</span>' : ""}
        </label>
      ` : ""}
      <div class="relative">
        <button
          type="button"
          ${disabled ? "disabled" : ""}
          data-on:click="${disabled ? '' : `$${signalName} = !$${signalName}`}"
          class="${buttonClasses}"
          aria-haspopup="listbox"
          data-attr:aria-expanded="$${signalName}">
          ${selectedOption
            ? renderOption(selectedOption, false)
            : `<span class="block truncate text-gray-400">${placeholder}</span>`
          }
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg viewBox="0 0 20 20" fill="currentColor" class="${sizeConfig.icon} text-gray-400" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <input type="hidden" name="${name}" data-bind:value="$${selectedSignal}" />

        <ul
          data-show="$${signalName}"
          data-on:click__outside="$${signalName} = false"
          style="display: none"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox">
          ${options.map(opt => `
            <li
              ${opt.disabled ? '' : `data-on:click="$${selectedSignal} = '${opt.value}'; $${signalName} = false${onChange ? `; ${onChange}` : ''}"`}
              class="relative cursor-${opt.disabled ? 'not-allowed' : 'pointer'} select-none py-2 pl-3 pr-9 ${opt.disabled ? 'text-gray-400' : 'text-gray-900 hover:bg-primary hover:text-white'}"
              role="option">
              ${renderOption(opt, opt.value === value)}
              ${opt.value === value ? `
                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="${sizeConfig.icon}">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                </span>
              ` : ""}
            </li>
          `).join("")}
        </ul>
      </div>
      ${helpText && !error ? `<p class="mt-1.5 text-sm text-gray-500">${helpText}</p>` : ""}
      ${error ? `<p class="mt-1.5 text-sm text-red-600">${error}</p>` : ""}
    </div>
  `;
}

// Simple inline select (no label, minimal styling)
export function InlineSelect({
  name,
  options,
  value,
  size = "md",
  onChange,
  className = "",
}: {
  name: string;
  options: SelectOption[];
  value?: string;
  size?: "sm" | "md" | "lg";
  onChange?: string;
  className?: string;
}): string {
  const sizeConfig = sizes[size];

  return `
    <select
      name="${name}"
      ${onChange ? `data-on:change="${onChange}"` : ""}
      class="rounded-md border-0 ${sizeConfig.select} text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary ${className}">
      ${options.map(opt => `
        <option value="${opt.value}" ${opt.value === value ? "selected" : ""} ${opt.disabled ? "disabled" : ""}>
          ${opt.label}
        </option>
      `).join("")}
    </select>
  `;
}

// Select with leading icon
export function SelectWithIcon({
  name,
  options,
  value,
  icon,
  label,
  onChange,
  className = "",
}: {
  name: string;
  options: SelectOption[];
  value?: string;
  icon: string;
  label?: string;
  onChange?: string;
  className?: string;
}): string {
  return `
    <div class="${className}">
      ${label ? `<label for="${name}" class="block text-sm font-medium text-gray-900 mb-1.5">${label}</label>` : ""}
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 text-gray-400" aria-hidden="true">
            ${icon}
          </svg>
        </div>
        <select
          id="${name}"
          name="${name}"
          ${onChange ? `data-on:change="${onChange}"` : ""}
          class="block w-full rounded-md border-0 py-2 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
          ${options.map(opt => `
            <option value="${opt.value}" ${opt.value === value ? "selected" : ""}>
              ${opt.label}
            </option>
          `).join("")}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 text-gray-400" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  `;
}
