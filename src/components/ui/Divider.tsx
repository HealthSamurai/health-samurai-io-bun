/**
 * Divider Component
 * Visual separator for content sections
 *
 * @example
 * // Simple divider
 * <Divider />
 *
 * // With label
 * <Divider label="Or continue with" />
 *
 * // With icon
 * <Divider icon="plus" />
 *
 * // With button
 * <Divider button={{ label: "Add item", onClick: "addItem()" }} />
 */

export type DividerProps = {
  /** Label text */
  label?: string;
  /** Label position */
  labelPosition?: "center" | "left" | "right";
  /** Icon name */
  icon?: "plus" | "arrow-down" | "star" | "heart" | "check";
  /** Button config */
  button?: {
    label: string;
    href?: string;
    onClick?: string;
  };
  /** Title with optional action */
  title?: {
    text: string;
    action?: {
      label: string;
      href?: string;
      onClick?: string;
    };
  };
  /** Visual variant */
  variant?: "solid" | "dashed" | "dotted";
  /** Color */
  color?: "gray" | "primary";
  /** Spacing size */
  spacing?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
};

// Icon SVGs
const icons: Record<string, string> = {
  plus: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />`,
  "arrow-down": `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0-7.5-7.5M12 21V3" />`,
  star: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.041 10.38a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />`,
  heart: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />`,
  check: `<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />`,
};

// Border styles
const borderStyles: Record<string, string> = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

// Border colors
const borderColors: Record<string, string> = {
  gray: "border-gray-300",
  primary: "border-primary/30",
};

// Spacing sizes
const spacings: Record<string, string> = {
  sm: "my-4",
  md: "my-6",
  lg: "my-8",
};

export function Divider({
  label,
  labelPosition = "center",
  icon,
  button,
  title,
  variant = "solid",
  color = "gray",
  spacing = "md",
  className = "",
}: DividerProps): string {
  const borderClass = `${borderStyles[variant]} ${borderColors[color]}`;

  // Simple divider without content
  if (!label && !icon && !button && !title) {
    return `<div class="border-t ${borderClass} ${spacings[spacing]} ${className}" aria-hidden="true"></div>`;
  }

  // Divider with title and optional action
  if (title) {
    return `
      <div class="relative ${spacings[spacing]} ${className}">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t ${borderClass}"></div>
        </div>
        <div class="relative flex ${title.action ? "justify-between" : "justify-start"}">
          <span class="bg-white pr-3 text-base font-semibold text-gray-900">${title.text}</span>
          ${title.action ? `
            ${title.action.href
              ? `<a href="${title.action.href}" class="bg-white pl-3 text-sm font-medium text-primary hover:text-primary-dark">${title.action.label}</a>`
              : `<button type="button" ${title.action.onClick ? `data-on:click="${title.action.onClick}"` : ""} class="bg-white pl-3 text-sm font-medium text-primary hover:text-primary-dark">${title.action.label}</button>`
            }
          ` : ""}
        </div>
      </div>
    `;
  }

  // Divider with button
  if (button) {
    const buttonContent = `
      <span class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="-ml-1 size-5 text-gray-400">${icons.plus}</svg>
        ${button.label}
      </span>
    `;

    return `
      <div class="relative ${spacings[spacing]} ${className}">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t ${borderClass}"></div>
        </div>
        <div class="relative flex justify-center">
          ${button.href
            ? `<a href="${button.href}">${buttonContent}</a>`
            : `<button type="button" ${button.onClick ? `data-on:click="${button.onClick}"` : ""}>${buttonContent}</button>`
          }
        </div>
      </div>
    `;
  }

  // Divider with icon
  if (icon) {
    return `
      <div class="relative ${spacings[spacing]} ${className}">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t ${borderClass}"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-2 text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5">${icons[icon]}</svg>
          </span>
        </div>
      </div>
    `;
  }

  // Divider with label
  const labelPositionClasses = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end",
  };

  const labelPaddingClasses = {
    center: "px-2",
    left: "pr-2",
    right: "pl-2",
  };

  return `
    <div class="relative ${spacings[spacing]} ${className}">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t ${borderClass}"></div>
      </div>
      <div class="relative flex ${labelPositionClasses[labelPosition]}">
        <span class="bg-white ${labelPaddingClasses[labelPosition]} text-sm text-gray-500">${label}</span>
      </div>
    </div>
  `;
}

// Vertical divider
export function VerticalDivider({
  height = "full",
  color = "gray",
  className = "",
}: {
  height: "full" | "sm" | "md" | "lg";
  color: "gray" | "primary";
  className?: string;
}): string {
  const heights = {
    full: "h-full",
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
  } as const;

  const bgColors = {
    gray: "bg-gray-300",
    primary: "bg-primary/30",
  } as const;

  return `<div class="w-px ${heights[height]} ${bgColors[color]} ${className}"></div>`;
}

// Divider with toolbar (multiple buttons)
export function DividerWithToolbar({
  buttons,
  variant = "solid",
  color = "gray",
  spacing = "md",
  className = "",
}: {
  buttons: Array<{
    label: string;
    icon?: string;
    href?: string;
    onClick?: string;
  }>;
  variant?: "solid" | "dashed" | "dotted";
  color?: "gray" | "primary";
  spacing?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const borderClass = `${borderStyles[variant]} ${borderColors[color]}`;

  return `
    <div class="relative ${spacings[spacing]} ${className}">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t ${borderClass}"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="isolate inline-flex -space-x-px rounded-md shadow-sm">
          ${buttons.map((btn, i) => {
            const isFirst = i === 0;
            const isLast = i === buttons.length - 1;
            const roundedClass = isFirst ? "rounded-l-md" : isLast ? "rounded-r-md" : "";

            const buttonHtml = `
              <span class="relative inline-flex items-center ${roundedClass} bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                ${btn.icon ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="-ml-0.5 mr-1.5 size-5 text-gray-400">${icons[btn.icon] ?? ""}</svg>` : ""}
                ${btn.label}
              </span>
            `;

            if (btn.href) {
              return `<a href="${btn.href}">${buttonHtml}</a>`;
            }
            return `<button type="button" ${btn.onClick ? `data-on:click="${btn.onClick}"` : ""}>${buttonHtml}</button>`;
          }).join("")}
        </span>
      </div>
    </div>
  `;
}
