/**
 * Tabs Component
 * Based on Tailwind Plus UI tabs
 *
 * @example
 * // Basic tabs
 * <Tabs tabs={[
 *   { id: "tab1", label: "Account" },
 *   { id: "tab2", label: "Settings" },
 * ]} activeTab="tab1" />
 *
 * // With icons
 * <Tabs tabs={[
 *   { id: "tab1", label: "Account", icon: TabIcons.user },
 * ]} />
 *
 * // Pill style
 * <Tabs variant="pills" tabs={[...]} />
 *
 * // Full width
 * <Tabs fullWidth tabs={[...]} />
 */

export type TabItem = {
  /** Unique tab identifier */
  id: string;
  /** Tab label text */
  label: string;
  /** Optional icon (SVG string) */
  icon?: string;
  /** Tab href (for link-based tabs) */
  href?: string;
  /** Badge content */
  badge?: string | number;
  /** Disabled state */
  disabled?: boolean;
};

export type TabsVariant = "underline" | "pills" | "pills-gray" | "pills-brand";
export type TabsSize = "sm" | "md";

export type TabsProps = {
  /** Tab items */
  tabs: TabItem[];
  /** Currently active tab ID */
  activeTab: string;
  /** Visual variant */
  variant?: TabsVariant;
  /** Tab size */
  size?: TabsSize;
  /** Full width tabs */
  fullWidth?: boolean;
  /** Hide on mobile (show select instead) */
  responsiveSelect?: boolean;
  /** ID prefix for Datastar signals */
  signalId?: string;
  /** Additional CSS classes */
  className?: string;
};

// Common icons for tabs
export const TabIcons = {
  user: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" /></svg>`,
  building: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" clip-rule="evenodd" /></svg>`,
  users: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" /></svg>`,
  creditCard: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" clip-rule="evenodd" /></svg>`,
  cog: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M8.34 1.804A1 1 0 0 1 9.32 1h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.295a1 1 0 0 1 .804.98v1.36a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.295 1.473a1 1 0 0 1-.98.804H9.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.295A1 1 0 0 1 1 10.68V9.32a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 5.38 3.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" /></svg>`,
  bell: `<svg viewBox="0 0 20 20" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z" clip-rule="evenodd" /></svg>`,
};

// Variant configurations
const variantStyles = {
  underline: {
    container: "border-b border-gray-200",
    nav: "-mb-px flex space-x-8",
    tab: {
      base: "border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap",
      active: "border-primary text-primary",
      inactive: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
      icon: {
        active: "text-primary",
        inactive: "text-gray-400 group-hover:text-gray-500",
      },
    },
  },
  pills: {
    container: "",
    nav: "flex space-x-4",
    tab: {
      base: "rounded-md px-3 py-2 text-sm font-medium",
      active: "bg-gray-100 text-gray-700",
      inactive: "text-gray-500 hover:text-gray-700",
      icon: {
        active: "text-gray-500",
        inactive: "text-gray-400 group-hover:text-gray-500",
      },
    },
  },
  "pills-gray": {
    container: "",
    nav: "flex space-x-4",
    tab: {
      base: "rounded-md px-3 py-2 text-sm font-medium",
      active: "bg-gray-200 text-gray-800",
      inactive: "text-gray-600 hover:text-gray-800",
      icon: {
        active: "text-gray-600",
        inactive: "text-gray-400 group-hover:text-gray-500",
      },
    },
  },
  "pills-brand": {
    container: "",
    nav: "flex space-x-4",
    tab: {
      base: "rounded-md px-3 py-2 text-sm font-medium",
      active: "bg-primary-light text-primary",
      inactive: "text-gray-500 hover:text-gray-700",
      icon: {
        active: "text-primary",
        inactive: "text-gray-400 group-hover:text-gray-500",
      },
    },
  },
};

export function Tabs({
  tabs,
  activeTab,
  variant = "underline",
  size = "md",
  fullWidth = false,
  responsiveSelect = true,
  signalId,
  className = "",
}: TabsProps): string {
  const styles = variantStyles[variant];

  // Mobile select dropdown
  const selectHtml = responsiveSelect
    ? `
    <div class="grid grid-cols-1 sm:hidden">
      <select
        aria-label="Select a tab"
        class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
        ${signalId ? `data-bind:${signalId}` : ""}
      >
        ${tabs.map((tab) => `<option value="${tab.id}" ${tab.id === activeTab ? "selected" : ""} ${tab.disabled ? "disabled" : ""}>${tab.label}</option>`).join("")}
      </select>
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500">
        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
      </svg>
    </div>
  `
    : "";

  // Desktop tabs
  const tabsHtml = tabs
    .map((tab) => {
      const isActive = tab.id === activeTab;
      const tabClasses = [styles.tab.base, isActive ? styles.tab.active : styles.tab.inactive].join(" ");

      const iconHtml = tab.icon
        ? `<span class="mr-2 -ml-0.5 ${isActive ? styles.tab.icon.active : styles.tab.icon.inactive}">${tab.icon}</span>`
        : "";

      const badgeHtml = tab.badge
        ? `<span class="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">${tab.badge}</span>`
        : "";

      const datastarAttrs = signalId ? `data-on:click="$${signalId} = '${tab.id}'" data-class="{${styles.tab.active.split(" ").map((c) => `'${c}': $${signalId} == '${tab.id}'`).join(", ")}, ${styles.tab.inactive.split(" ").map((c) => `'${c}': $${signalId} != '${tab.id}'`).join(", ")}}"` : "";

      if (tab.href) {
        return `<a href="${tab.href}" ${isActive ? 'aria-current="page"' : ""} class="${tab.icon ? "group inline-flex items-center " : ""}${tabClasses}" ${tab.disabled ? "aria-disabled=\"true\" tabindex=\"-1\"" : ""} ${datastarAttrs}>${iconHtml}<span>${tab.label}</span>${badgeHtml}</a>`;
      }

      return `<button type="button" ${isActive ? 'aria-current="page"' : ""} class="${tab.icon ? "group inline-flex items-center " : ""}${tabClasses}" ${tab.disabled ? "disabled" : ""} ${datastarAttrs}>${iconHtml}<span>${tab.label}</span>${badgeHtml}</button>`;
    })
    .join("");

  const navClasses = [styles.nav, fullWidth ? "justify-between" : ""].filter(Boolean).join(" ");

  return `
    <div class="${className}">
      ${selectHtml}
      <div class="${responsiveSelect ? "hidden sm:block" : ""}">
        <div class="${styles.container}">
          <nav aria-label="Tabs" class="${navClasses}">
            ${tabsHtml}
          </nav>
        </div>
      </div>
    </div>
  `;
}

// Tab panels container (for client-side tab switching)
export function TabPanels({
  panels,
  activePanel,
  signalId,
  className = "",
}: {
  panels: { id: string; content: string }[];
  activePanel: string;
  signalId?: string;
  className?: string;
}): string {
  return panels
    .map((panel) => {
      const isActive = panel.id === activePanel;
      const showAttr = signalId ? `data-show="$${signalId} == '${panel.id}'"` : "";
      const hiddenStyle = !isActive ? 'style="display: none"' : "";

      return `<div id="panel-${panel.id}" ${showAttr} ${hiddenStyle} class="${className}">${panel.content}</div>`;
    })
    .join("");
}

// Interactive tabs with content (combines Tabs + TabPanels with Datastar)
export function TabsWithContent({
  tabs,
  defaultTab,
  variant = "underline",
  className = "",
  panelClassName = "",
}: {
  tabs: (TabItem & { content: string })[];
  defaultTab?: string;
  variant?: TabsVariant;
  className?: string;
  panelClassName?: string;
}): string {
  const signalId = `tab_${Math.random().toString(36).substr(2, 9)}`;
  const activeTab = defaultTab || tabs[0]?.id || "";

  const tabItems = tabs.map(({ content, ...tab }) => tab);
  const panels = tabs.map((tab) => ({ id: tab.id, content: tab.content }));

  return `
    <div data-signals="{${signalId}: '${activeTab}'}" class="${className}">
      ${Tabs({ tabs: tabItems, activeTab, variant, signalId })}
      <div class="mt-4">
        ${TabPanels({ panels, activePanel: activeTab, signalId, className: panelClassName })}
      </div>
    </div>
  `;
}
