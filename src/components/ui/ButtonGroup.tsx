/**
 * Button Group Component
 * Group related buttons together with consistent styling
 *
 * @example
 * // Basic button group
 * <ButtonGroup buttons={[
 *   { label: "Years" },
 *   { label: "Months" },
 *   { label: "Days" },
 * ]} />
 *
 * // With icons
 * <ButtonGroup buttons={[
 *   { label: "Edit", icon: "pencil" },
 *   { label: "Delete", icon: "trash" },
 * ]} />
 */

export type ButtonGroupItem = {
  /** Button label */
  label?: string;
  /** Icon name */
  icon?: "pencil" | "trash" | "plus" | "minus" | "chevron-left" | "chevron-right" | "check" | "x";
  /** Link URL */
  href?: string;
  /** Click handler (Datastar expression) */
  onClick?: string;
  /** Is button active/selected */
  active?: boolean;
  /** Is button disabled */
  disabled?: boolean;
};

export type ButtonGroupProps = {
  /** Button items */
  buttons: ButtonGroupItem[];
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Visual variant */
  variant?: "default" | "primary" | "icon-only";
  /** Additional CSS classes */
  className?: string;
};

// Icon SVGs
const icons: Record<string, string> = {
  pencil: `<path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />`,
  trash: `<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />`,
  plus: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />`,
  minus: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />`,
  "chevron-left": `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />`,
  "chevron-right": `<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />`,
  check: `<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />`,
  x: `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />`,
};

// Size classes
const sizes = {
  sm: { button: "px-2 py-1 text-xs", icon: "size-4" },
  md: { button: "px-3 py-2 text-sm", icon: "size-5" },
  lg: { button: "px-4 py-2.5 text-base", icon: "size-5" },
} as const;

export function ButtonGroup({
  buttons,
  size = "md",
  variant = "default",
  className = "",
}: ButtonGroupProps): string {
  const sizeConfig = sizes[size];

  const baseClasses = variant === "primary"
    ? "bg-primary text-white ring-1 ring-inset ring-primary hover:bg-primary-dark"
    : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  const activeClasses = variant === "primary"
    ? "bg-primary-dark"
    : "bg-gray-100";

  return `
    <span class="isolate inline-flex rounded-md shadow-sm ${className}">
      ${buttons.map((btn, i) => {
        const isFirst = i === 0;
        const isLast = i === buttons.length - 1;
        const roundedClass = isFirst ? "rounded-l-md" : isLast ? "rounded-r-md" : "";
        const marginClass = !isFirst ? "-ml-px" : "";

        const buttonClasses = `
          relative inline-flex items-center justify-center ${roundedClass} ${marginClass}
          ${sizeConfig.button} font-semibold
          ${btn.active ? activeClasses : baseClasses}
          ${btn.disabled ? "opacity-50 cursor-not-allowed" : ""}
          focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        `.trim().replace(/\s+/g, " ");

        const iconHtml = btn.icon ? `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="${sizeConfig.icon} ${btn.label ? "-ml-0.5 mr-1.5" : ""}">
            ${icons[btn.icon]}
          </svg>
        ` : "";

        const content = `${iconHtml}${btn.label || ""}`;

        if (btn.href) {
          return `<a href="${btn.href}" class="${buttonClasses}">${content}</a>`;
        }

        return `
          <button type="button"
            ${btn.onClick ? `data-on:click="${btn.onClick}"` : ""}
            ${btn.disabled ? "disabled" : ""}
            class="${buttonClasses}">
            ${content}
          </button>
        `;
      }).join("")}
    </span>
  `;
}

// Icon-only button group (e.g., for pagination controls)
export function IconButtonGroup({
  buttons,
  size = "md",
  className = "",
}: {
  buttons: Array<{ icon: ButtonGroupItem["icon"]; onClick?: string; href?: string; disabled?: boolean; label?: string }>;
  size?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const sizeConfig = sizes[size];

  return `
    <span class="isolate inline-flex rounded-md shadow-sm ${className}">
      ${buttons.map((btn, i) => {
        const isFirst = i === 0;
        const isLast = i === buttons.length - 1;
        const roundedClass = isFirst ? "rounded-l-md" : isLast ? "rounded-r-md" : "";
        const marginClass = !isFirst ? "-ml-px" : "";

        const buttonClasses = `
          relative inline-flex items-center justify-center ${roundedClass} ${marginClass}
          ${sizeConfig.button} bg-white text-gray-400
          ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-500
          ${btn.disabled ? "opacity-50 cursor-not-allowed" : ""}
          focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        `.trim().replace(/\s+/g, " ");

        const iconHtml = btn.icon ? `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="${sizeConfig.icon}" aria-hidden="true">
            ${icons[btn.icon]}
          </svg>
          ${btn.label ? `<span class="sr-only">${btn.label}</span>` : ""}
        ` : "";

        if (btn.href) {
          return `<a href="${btn.href}" class="${buttonClasses}">${iconHtml}</a>`;
        }

        return `
          <button type="button"
            ${btn.onClick ? `data-on:click="${btn.onClick}"` : ""}
            ${btn.disabled ? "disabled" : ""}
            class="${buttonClasses}">
            ${iconHtml}
          </button>
        `;
      }).join("")}
    </span>
  `;
}

// Button group with dropdown
export function ButtonGroupWithDropdown({
  primaryButton,
  dropdownItems,
  size = "md",
  className = "",
}: {
  primaryButton: { label: string; href?: string; onClick?: string };
  dropdownItems: Array<{ label: string; href?: string; onClick?: string }>;
  size?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const sizeConfig = sizes[size];
  const dropdownId = `dropdown-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <div class="inline-flex rounded-md shadow-sm ${className}" data-signals="{${dropdownId}Open: false}">
      ${primaryButton.href
        ? `<a href="${primaryButton.href}" class="relative inline-flex items-center rounded-l-md bg-white ${sizeConfig.button} font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">${primaryButton.label}</a>`
        : `<button type="button" ${primaryButton.onClick ? `data-on:click="${primaryButton.onClick}"` : ""} class="relative inline-flex items-center rounded-l-md bg-white ${sizeConfig.button} font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">${primaryButton.label}</button>`
      }
      <div class="relative -ml-px block">
        <button type="button" data-on:click="$${dropdownId}Open = !$${dropdownId}Open" class="relative inline-flex items-center rounded-r-md bg-white ${sizeConfig.button} text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
          <span class="sr-only">Open options</span>
          <svg viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
        <div data-show="$${dropdownId}Open" data-on:click__outside="$${dropdownId}Open = false" style="display: none" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="py-1">
            ${dropdownItems.map(item => {
              if (item.href) {
                return `<a href="${item.href}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">${item.label}</a>`;
              }
              return `<button type="button" ${item.onClick ? `data-on:click="${item.onClick}"` : ""} class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">${item.label}</button>`;
            }).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Stat button group (with counts)
export function StatButtonGroup({
  buttons,
  size = "md",
  className = "",
}: {
  buttons: Array<{ label: string; count: number; href?: string; onClick?: string; active?: boolean }>;
  size?: "sm" | "md" | "lg";
  className?: string;
}): string {
  const sizeConfig = sizes[size];

  return `
    <span class="isolate inline-flex rounded-md shadow-sm ${className}">
      ${buttons.map((btn, i) => {
        const isFirst = i === 0;
        const isLast = i === buttons.length - 1;
        const roundedClass = isFirst ? "rounded-l-md" : isLast ? "rounded-r-md" : "";
        const marginClass = !isFirst ? "-ml-px" : "";

        const buttonClasses = `
          relative inline-flex items-center gap-x-1.5 ${roundedClass} ${marginClass}
          ${sizeConfig.button} font-semibold
          ${btn.active ? "bg-gray-100 text-gray-900" : "bg-white text-gray-900"}
          ring-1 ring-inset ring-gray-300 hover:bg-gray-50
          focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        `.trim().replace(/\s+/g, " ");

        const content = `
          ${btn.label}
          <span class="inline-flex items-center rounded-full ${btn.active ? "bg-primary text-white" : "bg-gray-100 text-gray-600"} px-2 py-0.5 text-xs font-medium">
            ${btn.count}
          </span>
        `;

        if (btn.href) {
          return `<a href="${btn.href}" class="${buttonClasses}">${content}</a>`;
        }

        return `
          <button type="button"
            ${btn.onClick ? `data-on:click="${btn.onClick}"` : ""}
            class="${buttonClasses}">
            ${content}
          </button>
        `;
      }).join("")}
    </span>
  `;
}
