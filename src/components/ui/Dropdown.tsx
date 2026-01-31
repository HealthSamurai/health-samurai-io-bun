/**
 * Dropdown Component
 * Based on Tailwind Plus UI dropdowns
 *
 * @example
 * // Basic dropdown
 * <Dropdown trigger="Options">
 *   <DropdownItem href="/settings">Settings</DropdownItem>
 *   <DropdownItem href="/logout">Sign out</DropdownItem>
 * </Dropdown>
 *
 * // With icons
 * <Dropdown trigger="Actions">
 *   <DropdownItem icon={DropdownIcons.edit}>Edit</DropdownItem>
 *   <DropdownDivider />
 *   <DropdownItem icon={DropdownIcons.delete} danger>Delete</DropdownItem>
 * </Dropdown>
 */

export type DropdownPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export type DropdownProps = {
  /** Dropdown ID for targeting */
  id: string;
  /** Trigger button text or content */
  trigger: string;
  /** Menu items content */
  children: string;
  /** Dropdown position */
  position?: DropdownPosition;
  /** Custom trigger button classes */
  triggerClassName?: string;
  /** Menu width */
  width?: "auto" | "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
};

export type DropdownItemProps = {
  /** Item text */
  children: string;
  /** Link href (makes item a link) */
  href?: string;
  /** Icon SVG string */
  icon?: string;
  /** Danger/destructive style */
  danger?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler (JS string) */
  onClick?: string;
};

// Common icons for dropdown items
export const DropdownIcons = {
  edit: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" /><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" /></svg>`,
  duplicate: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" /><path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" /></svg>`,
  archive: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" /><path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" clip-rule="evenodd" /></svg>`,
  share: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" /></svg>`,
  delete: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" /></svg>`,
  settings: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M8.34 1.804A1 1 0 0 1 9.32 1h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.295a1 1 0 0 1 .804.98v1.36a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.295 1.473a1 1 0 0 1-.98.804H9.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.295A1 1 0 0 1 1 10.68V9.32a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 5.38 3.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" /></svg>`,
  logout: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z" clip-rule="evenodd" /></svg>`,
  user: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" /></svg>`,
};

// Menu widths
const widths: Record<string, string> = {
  auto: "w-auto min-w-[10rem]",
  sm: "w-40",
  md: "w-56",
  lg: "w-72",
};

export function Dropdown({
  id,
  trigger,
  children,
  position = "bottom-end",
  triggerClassName = "",
  width = "md",
  className = "",
}: DropdownProps): string {
  const signalId = `dropdown_${id}`;

  const positionClasses: Record<DropdownPosition, string> = {
    "bottom-start": "top-full left-0 mt-2",
    "bottom-end": "top-full right-0 mt-2",
    "top-start": "bottom-full left-0 mb-2",
    "top-end": "bottom-full right-0 mb-2",
  };

  const defaultTriggerClass = "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  return `
    <div class="relative inline-block text-left ${className}" data-signals="{${signalId}: false}">
      <button
        type="button"
        class="${triggerClassName || defaultTriggerClass}"
        data-on:click="$${signalId} = !$${signalId}"
        aria-expanded="false"
        aria-haspopup="true"
      >
        ${trigger}
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
          <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>

      <div
        class="absolute ${positionClasses[position]} z-10 ${widths[width]} origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition-all duration-100"
        data-show="$${signalId}"
        data-class="{opacity-100: $${signalId}, 'scale-100': $${signalId}, opacity-0: !$${signalId}, 'scale-95': !$${signalId}}"
        style="display: none"
        data-on:click__outside="$${signalId} = false"
        role="menu"
        aria-orientation="vertical"
        tabindex="-1"
      >
        ${children}
      </div>
    </div>
  `;
}

// Dropdown menu item
export function DropdownItem({
  children,
  href,
  icon,
  danger = false,
  disabled = false,
  onClick,
}: DropdownItemProps): string {
  const baseClasses = "flex items-center px-4 py-2 text-sm";
  const colorClasses = danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const iconHtml = icon ? `<span class="mr-3 ${danger ? "text-red-500" : "text-gray-400"}">${icon}</span>` : "";

  const content = `${iconHtml}${children}`;

  if (href && !disabled) {
    return `<a href="${href}" class="${baseClasses} ${colorClasses} ${disabledClasses}" role="menuitem">${content}</a>`;
  }

  return `<button type="button" ${onClick ? `onclick="${onClick}"` : ""} ${disabled ? "disabled" : ""} class="w-full text-left ${baseClasses} ${colorClasses} ${disabledClasses}" role="menuitem">${content}</button>`;
}

// Menu section divider
export function DropdownDivider(): string {
  return `<div class="border-t border-gray-100 my-1"></div>`;
}

// Menu section (group with optional label)
export function DropdownSection({ label, children }: { label?: string; children: string }): string {
  return `
    <div class="py-1" role="none">
      ${label ? `<p class="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">${label}</p>` : ""}
      ${children}
    </div>
  `;
}

// Dropdown with header (user profile style)
export function DropdownWithHeader({
  id,
  header,
  trigger,
  children,
  position = "bottom-end",
  width = "md",
  className = "",
}: Omit<DropdownProps, "trigger"> & {
  header: string;
  trigger: string;
}): string {
  return Dropdown({
    id,
    trigger,
    position,
    width,
    className,
    children: `
      <div class="px-4 py-3 border-b border-gray-100">
        ${header}
      </div>
      ${children}
    `,
  });
}
