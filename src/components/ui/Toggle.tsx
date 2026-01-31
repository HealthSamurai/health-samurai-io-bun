/**
 * Toggle/Switch Component
 * Based on Tailwind Plus UI toggles
 *
 * @example
 * // Basic toggle
 * <Toggle name="notifications" label="Enable notifications" />
 *
 * // Checked by default
 * <Toggle name="darkMode" label="Dark mode" checked />
 *
 * // With description
 * <Toggle
 *   name="emails"
 *   label="Email notifications"
 *   description="Receive emails when someone mentions you."
 * />
 *
 * // Disabled
 * <Toggle name="feature" label="Beta feature" disabled />
 */

export type ToggleSize = "sm" | "md" | "lg";
export type ToggleVariant = "default" | "short" | "with-icon";

export type ToggleProps = {
  /** Input name attribute */
  name: string;
  /** Toggle label */
  label: string;
  /** Toggle description */
  description?: string;
  /** Initial checked state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Toggle size */
  size?: ToggleSize;
  /** Visual variant */
  variant?: ToggleVariant;
  /** Label position */
  labelPosition?: "left" | "right";
  /** Additional CSS classes */
  className?: string;
  /** ID for Datastar signal binding */
  signalId?: string;
};

// Size configurations
const sizes: Record<ToggleSize, { track: string; thumb: string; translate: string }> = {
  sm: { track: "w-8 h-4", thumb: "size-3.5", translate: "translate-x-4" },
  md: { track: "w-11 h-6", thumb: "size-5", translate: "translate-x-5" },
  lg: { track: "w-14 h-7", thumb: "size-6", translate: "translate-x-7" },
};

export function Toggle({
  name,
  label,
  description,
  checked = false,
  disabled = false,
  size = "md",
  variant = "default",
  labelPosition = "right",
  className = "",
  signalId,
}: ToggleProps): string {
  const sizeConfig = sizes[size];
  const id = `toggle-${name}`;

  // Datastar signal binding
  const signalBinding = signalId ? `data-bind:${signalId}` : "";
  const checkedAttr = checked ? "checked" : "";
  const disabledAttr = disabled ? "disabled" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  // Icon variant with X and checkmark
  const iconContent =
    variant === "with-icon"
      ? `
    <span aria-hidden="true" class="absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in group-has-[:checked]:opacity-0 group-has-[:checked]:duration-100 group-has-[:checked]:ease-out">
      <svg viewBox="0 0 12 12" fill="none" class="size-3 text-gray-400">
        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span aria-hidden="true" class="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-has-[:checked]:opacity-100 group-has-[:checked]:duration-200 group-has-[:checked]:ease-in">
      <svg viewBox="0 0 12 12" fill="currentColor" class="size-3 text-primary">
        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
      </svg>
    </span>
  `
      : "";

  // Build toggle element based on variant
  let toggleHtml: string;

  if (variant === "short") {
    toggleHtml = `
      <div class="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-primary has-[:focus-visible]:outline-2 ${disabledClass}">
        <span class="absolute mx-auto h-4 w-9 rounded-full bg-gray-200 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out group-has-[:checked]:bg-primary"></span>
        <span class="absolute left-0 ${sizeConfig.thumb} rounded-full border border-gray-300 bg-white shadow-sm transition-transform duration-200 ease-in-out group-has-[:checked]:${sizeConfig.translate}"></span>
        <input type="checkbox" id="${id}" name="${name}" aria-label="${label}" ${checkedAttr} ${disabledAttr} ${signalBinding} class="absolute inset-0 size-full appearance-none focus:outline-none ${disabledClass}" />
      </div>
    `;
  } else if (variant === "with-icon") {
    toggleHtml = `
      <div class="group relative inline-flex ${sizeConfig.track} shrink-0 rounded-full bg-gray-200 p-0.5 ring-1 ring-inset ring-gray-900/5 outline-offset-2 outline-primary transition-colors duration-200 ease-in-out has-[:checked]:bg-primary has-[:focus-visible]:outline-2 ${disabledClass}">
        <span class="relative ${sizeConfig.thumb} rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:${sizeConfig.translate}">
          ${iconContent}
        </span>
        <input type="checkbox" id="${id}" name="${name}" aria-label="${label}" ${checkedAttr} ${disabledAttr} ${signalBinding} class="absolute inset-0 size-full appearance-none focus:outline-none ${disabledClass}" />
      </div>
    `;
  } else {
    toggleHtml = `
      <div class="group relative inline-flex ${sizeConfig.track} shrink-0 rounded-full bg-gray-200 p-0.5 ring-1 ring-inset ring-gray-900/5 outline-offset-2 outline-primary transition-colors duration-200 ease-in-out has-[:checked]:bg-primary has-[:focus-visible]:outline-2 ${disabledClass}">
        <span class="${sizeConfig.thumb} rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:${sizeConfig.translate}"></span>
        <input type="checkbox" id="${id}" name="${name}" aria-label="${label}" ${checkedAttr} ${disabledAttr} ${signalBinding} class="absolute inset-0 size-full appearance-none focus:outline-none ${disabledClass}" />
      </div>
    `;
  }

  // Build label section
  const labelHtml = description
    ? `
    <div class="${labelPosition === "right" ? "ml-3" : "mr-3"}">
      <label for="${id}" class="text-sm font-medium text-gray-900 ${disabledClass}">${label}</label>
      <p class="text-sm text-gray-500">${description}</p>
    </div>
  `
    : `<label for="${id}" class="${labelPosition === "right" ? "ml-3" : "mr-3"} text-sm font-medium text-gray-900 ${disabledClass}">${label}</label>`;

  // Combine based on label position
  const content = labelPosition === "right" ? `${toggleHtml}${labelHtml}` : `${labelHtml}${toggleHtml}`;

  return `
    <div class="flex items-center ${description ? "items-start" : ""} ${className}">
      ${content}
    </div>
  `;
}

// Simple toggle without label (for use in tables, etc.)
export function ToggleSimple({
  name,
  checked = false,
  disabled = false,
  size = "md",
  variant = "default",
  signalId,
  className = "",
}: Omit<ToggleProps, "label" | "description" | "labelPosition">): string {
  return Toggle({
    name,
    label: name,
    checked,
    disabled,
    size,
    variant,
    signalId,
    className: `[&_label]:sr-only ${className}`,
  });
}

// Toggle group (multiple toggles in a list)
export function ToggleGroup({
  toggles,
  className = "",
}: {
  toggles: ToggleProps[];
  className?: string;
}): string {
  return `
    <div class="space-y-4 ${className}">
      ${toggles.map((toggle) => Toggle(toggle)).join("")}
    </div>
  `;
}

// Toggle with form field wrapper (for consistency with Input component)
export function ToggleField({
  name,
  label,
  description,
  helpText,
  error,
  ...props
}: ToggleProps & { helpText?: string; error?: string }): string {
  const hasError = !!error;

  return `
    <div class="space-y-1">
      ${Toggle({ name, label, description, ...props })}
      ${helpText && !hasError ? `<p class="text-sm text-gray-500 ml-14">${helpText}</p>` : ""}
      ${error ? `<p class="text-sm text-red-600 ml-14">${error}</p>` : ""}
    </div>
  `;
}
