/**
 * Badge Component
 * Based on Tailwind Plus UI badges
 *
 * @example
 * // Basic usage
 * <Badge>Default</Badge>
 *
 * // With color
 * <Badge color="green">Success</Badge>
 * <Badge color="red">Error</Badge>
 *
 * // With dot indicator
 * <Badge dot>Status</Badge>
 * <Badge dot color="green">Online</Badge>
 *
 * // Small size
 * <Badge size="sm">Small</Badge>
 *
 * // Pill shape
 * <Badge pill>Rounded</Badge>
 *
 * // With remove button
 * <Badge removable onRemove="handleRemove()">Removable</Badge>
 */

export type BadgeColor = "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | "primary";
export type BadgeSize = "sm" | "md";
export type BadgeVariant = "flat" | "outline";

export type BadgeProps = {
  /** Badge content */
  children: string;
  /** Color theme */
  color?: BadgeColor;
  /** Visual style */
  variant?: BadgeVariant;
  /** Size */
  size?: BadgeSize;
  /** Show status dot */
  dot?: boolean;
  /** Pill/rounded shape */
  pill?: boolean;
  /** Show remove button */
  removable?: boolean;
  /** Click handler for remove button (JS expression) */
  onRemove?: string;
  /** Additional CSS classes */
  className?: string;
};

// Color configurations for flat variant
const flatColors: Record<BadgeColor, string> = {
  gray: "bg-gray-50 text-gray-600 ring-gray-500/10",
  red: "bg-red-50 text-red-700 ring-red-600/10",
  yellow: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
  green: "bg-green-50 text-green-700 ring-green-600/20",
  blue: "bg-blue-50 text-blue-700 ring-blue-700/10",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
  purple: "bg-purple-50 text-purple-700 ring-purple-700/10",
  pink: "bg-pink-50 text-pink-700 ring-pink-700/10",
  primary: "bg-primary-light text-primary ring-primary/10",
};

// Color configurations for outline variant
const outlineColors: Record<BadgeColor, string> = {
  gray: "text-gray-900 ring-gray-200",
  red: "text-red-700 ring-red-200",
  yellow: "text-yellow-800 ring-yellow-200",
  green: "text-green-700 ring-green-200",
  blue: "text-blue-700 ring-blue-200",
  indigo: "text-indigo-700 ring-indigo-200",
  purple: "text-purple-700 ring-purple-200",
  pink: "text-pink-700 ring-pink-200",
  primary: "text-primary ring-primary/20",
};

// Dot colors
const dotColors: Record<BadgeColor, string> = {
  gray: "fill-gray-500",
  red: "fill-red-500",
  yellow: "fill-yellow-500",
  green: "fill-green-500",
  blue: "fill-blue-500",
  indigo: "fill-indigo-500",
  purple: "fill-purple-500",
  pink: "fill-pink-500",
  primary: "fill-primary",
};

// Size configurations
const sizes: Record<BadgeSize, string> = {
  sm: "px-1.5 py-0.5 text-[0.625rem]",
  md: "px-2 py-1 text-xs",
};

// Dot SVG
const dotSvg = (color: BadgeColor) =>
  `<svg viewBox="0 0 6 6" aria-hidden="true" class="size-1.5 ${dotColors[color]}"><circle r="3" cx="3" cy="3" /></svg>`;

// Remove button SVG
const removeSvg = (color: BadgeColor) => {
  const hoverColors: Record<BadgeColor, string> = {
    gray: "hover:bg-gray-500/20",
    red: "hover:bg-red-600/20",
    yellow: "hover:bg-yellow-600/20",
    green: "hover:bg-green-600/20",
    blue: "hover:bg-blue-700/20",
    indigo: "hover:bg-indigo-700/20",
    purple: "hover:bg-purple-700/20",
    pink: "hover:bg-pink-700/20",
    primary: "hover:bg-primary/20",
  };
  return `<button type="button" class="group relative -mr-1 size-3.5 rounded-sm ${hoverColors[color]}">
    <span class="sr-only">Remove</span>
    <svg viewBox="0 0 14 14" class="size-3.5 stroke-current stroke-[1.5] opacity-50 group-hover:opacity-75">
      <path d="M4 4l6 6m0-6l-6 6" />
    </svg>
  </button>`;
};

export function Badge({
  children,
  color = "gray",
  variant = "flat",
  size = "md",
  dot = false,
  pill = false,
  removable = false,
  onRemove,
  className = "",
}: BadgeProps): string {
  // Build class list
  const classes: string[] = [
    "inline-flex items-center font-medium ring-1 ring-inset",
    sizes[size],
    pill ? "rounded-full" : "rounded-md",
    variant === "flat" ? flatColors[color] : outlineColors[color],
  ];

  // Gap for dot or remove button
  if (dot || removable) {
    classes.push("gap-x-1.5");
  }

  if (className) {
    classes.push(className);
  }

  // Build content
  let content = "";
  if (dot) {
    content += dotSvg(color);
  }
  content += children;
  if (removable) {
    const removeBtn = removeSvg(color);
    content += onRemove
      ? removeBtn.replace("<button", `<button data-on:click="${onRemove}"`)
      : removeBtn;
  }

  return `<span class="${classes.join(" ")}">${content}</span>`;
}

// Convenience function for status badges
export function StatusBadge({
  status,
  children,
  ...props
}: Omit<BadgeProps, "color" | "dot" | "children"> & {
  status: "online" | "offline" | "away" | "busy" | "success" | "warning" | "error";
  children?: string;
}): string {
  const statusConfig: Record<string, { color: BadgeColor; label: string }> = {
    online: { color: "green", label: "Online" },
    offline: { color: "gray", label: "Offline" },
    away: { color: "yellow", label: "Away" },
    busy: { color: "red", label: "Busy" },
    success: { color: "green", label: "Success" },
    warning: { color: "yellow", label: "Warning" },
    error: { color: "red", label: "Error" },
  };

  const config = statusConfig[status] ?? { color: "gray" as BadgeColor, label: status };
  return Badge({
    ...props,
    color: config.color,
    dot: true,
    children: children ?? config.label,
  });
}

// Badge group for displaying multiple badges
export function BadgeGroup({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}): string {
  return `<div class="flex flex-wrap gap-2 ${className}">${children}</div>`;
}
