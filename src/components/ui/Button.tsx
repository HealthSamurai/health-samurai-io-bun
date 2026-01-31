/**
 * Button Component
 * Based on Tailwind Plus UI buttons
 *
 * @example
 * // Basic usage
 * <Button>Click me</Button>
 *
 * // With variant and size
 * <Button variant="secondary" size="lg">Large Secondary</Button>
 *
 * // With icon
 * <Button icon={PlusIcon}>Add Item</Button>
 * <Button icon={PlusIcon} iconPosition="right">Add Item</Button>
 *
 * // Icon only (circular)
 * <Button icon={PlusIcon} iconOnly aria-label="Add" />
 *
 * // As link
 * <Button href="/signup">Sign Up</Button>
 *
 * // Full width
 * <Button fullWidth>Submit</Button>
 *
 * // Loading state
 * <Button loading>Saving...</Button>
 *
 * // Disabled
 * <Button disabled>Unavailable</Button>
 */

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "primary" | "secondary" | "soft" | "ghost" | "danger";

export type ButtonProps = {
  /** Button content */
  children?: string;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Render as link instead of button */
  href?: string;
  /** Button type attribute */
  type?: "button" | "submit" | "reset";
  /** Icon SVG string (rendered before text by default) */
  icon?: string;
  /** Position of the icon */
  iconPosition?: "left" | "right";
  /** Render as icon-only circular button */
  iconOnly?: boolean;
  /** Make button full width */
  fullWidth?: boolean;
  /** Show loading spinner */
  loading?: boolean;
  /** Disable the button */
  disabled?: boolean;
  /** Use pill/rounded style */
  rounded?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label (required for iconOnly) */
  "aria-label"?: string;
  /** Form target for submit buttons */
  form?: string;
  /** Name attribute */
  name?: string;
  /** Value attribute */
  value?: string;
};

// Size configurations
const sizes: Record<ButtonSize, { padding: string; text: string; rounded: string; iconSize: string; gap: string }> = {
  xs: { padding: "px-2 py-1", text: "text-xs", rounded: "rounded-sm", iconSize: "size-3.5", gap: "gap-x-1" },
  sm: { padding: "px-2 py-1", text: "text-sm", rounded: "rounded-sm", iconSize: "size-4", gap: "gap-x-1" },
  md: { padding: "px-2.5 py-1.5", text: "text-sm", rounded: "rounded-md", iconSize: "size-4", gap: "gap-x-1.5" },
  lg: { padding: "px-3 py-2", text: "text-sm", rounded: "rounded-md", iconSize: "size-5", gap: "gap-x-1.5" },
  xl: { padding: "px-3.5 py-2.5", text: "text-sm", rounded: "rounded-md", iconSize: "size-5", gap: "gap-x-2" },
};

// Icon-only size configurations (circular buttons)
const iconOnlySizes: Record<ButtonSize, { padding: string; iconSize: string }> = {
  xs: { padding: "p-1", iconSize: "size-4" },
  sm: { padding: "p-1.5", iconSize: "size-4" },
  md: { padding: "p-1.5", iconSize: "size-5" },
  lg: { padding: "p-2", iconSize: "size-5" },
  xl: { padding: "p-2.5", iconSize: "size-6" },
};

// Variant styles
const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  secondary: "bg-white text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  soft: "bg-primary-light text-primary shadow-xs hover:bg-primary/20",
  ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  danger: "bg-red-600 text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
};

// Loading spinner SVG
const loadingSpinner = `<svg class="animate-spin -ml-1 mr-2 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>`;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  icon,
  iconPosition = "left",
  iconOnly = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  rounded = false,
  className = "",
  form,
  name,
  value,
  ...props
}: ButtonProps): string {
  const ariaLabel = props["aria-label"];

  // Build class list
  const classes: string[] = [
    "inline-flex items-center justify-center font-semibold transition-colors",
    variants[variant],
  ];

  // Size classes
  if (iconOnly) {
    const iconSize = iconOnlySizes[size];
    classes.push(iconSize.padding);
    classes.push(rounded ? "rounded-full" : sizes[size].rounded);
  } else {
    const sizeConfig = sizes[size];
    classes.push(sizeConfig.padding, sizeConfig.text, sizeConfig.gap);
    classes.push(rounded ? "rounded-full" : sizeConfig.rounded);
  }

  // Full width
  if (fullWidth) {
    classes.push("w-full");
  }

  // Disabled state
  if (disabled || loading) {
    classes.push("opacity-50 cursor-not-allowed pointer-events-none");
  }

  // Custom classes
  if (className) {
    classes.push(className);
  }

  const classString = classes.join(" ");

  // Build icon with proper size class
  const iconSizeClass = iconOnly ? iconOnlySizes[size].iconSize : sizes[size].iconSize;
  const styledIcon = icon
    ? icon.replace(/<svg/, `<svg class="${iconSizeClass}${iconPosition === "left" && !iconOnly ? " -ml-0.5" : ""}${iconPosition === "right" && !iconOnly ? " -mr-0.5" : ""}"`)
    : "";

  // Build content
  let content = "";
  if (loading) {
    content = loadingSpinner + (children || "");
  } else if (iconOnly && icon) {
    content = styledIcon;
  } else if (icon && iconPosition === "left") {
    content = styledIcon + (children || "");
  } else if (icon && iconPosition === "right") {
    content = (children || "") + styledIcon;
  } else {
    content = children || "";
  }

  // Build attributes
  const attrs: string[] = [`class="${classString}"`];

  if (ariaLabel) {
    attrs.push(`aria-label="${ariaLabel}"`);
  }

  if (disabled) {
    attrs.push("disabled");
    attrs.push('aria-disabled="true"');
  }

  // Render as link or button
  if (href && !disabled) {
    return `<a href="${href}" ${attrs.join(" ")}>${content}</a>`;
  }

  attrs.push(`type="${type}"`);
  if (form) attrs.push(`form="${form}"`);
  if (name) attrs.push(`name="${name}"`);
  if (value) attrs.push(`value="${value}"`);

  return `<button ${attrs.join(" ")}>${content}</button>`;
}

// Common icon SVGs for convenience
export const ButtonIcons = {
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>`,
  chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"/><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.519.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"/><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/></svg>`,
};

// Button Group component
export type ButtonGroupProps = {
  children: string;
  className?: string;
};

export function ButtonGroup({ children, className = "" }: ButtonGroupProps): string {
  return `<span class="isolate inline-flex rounded-md shadow-xs ${className}">${children}</span>`;
}

// Styled button for use inside ButtonGroup
export function GroupButton({
  children,
  variant = "secondary",
  icon,
  iconPosition = "left",
  first = false,
  last = false,
  className = "",
  ...props
}: ButtonProps & { first?: boolean; last?: boolean }): string {
  const roundedClass = first
    ? "rounded-l-md"
    : last
    ? "-ml-px rounded-r-md"
    : "-ml-px";

  const baseClasses = "relative inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-10";
  const variantClasses = variant === "primary"
    ? "bg-primary text-white hover:bg-primary-dark"
    : "bg-white text-gray-900 hover:bg-gray-50";

  const iconSizeClass = "size-4";
  const styledIcon = icon
    ? icon.replace(/<svg/, `<svg class="${iconSizeClass}${iconPosition === "left" ? " -ml-0.5 mr-1.5" : " ml-1.5 -mr-0.5"}"`)
    : "";

  let content = children || "";
  if (icon && iconPosition === "left") {
    content = styledIcon + content;
  } else if (icon && iconPosition === "right") {
    content = content + styledIcon;
  }

  return `<button type="button" class="${baseClasses} ${variantClasses} ${roundedClass} ${className}">${content}</button>`;
}
