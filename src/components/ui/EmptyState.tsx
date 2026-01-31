/**
 * Empty State Component
 * Display when there's no data or content
 *
 * @example
 * // Simple empty state
 * <EmptyState
 *   icon="folder"
 *   title="No projects"
 *   description="Get started by creating a new project."
 *   action={{ label: "New Project", href: "/projects/new" }}
 * />
 *
 * // With dashed border
 * <EmptyState variant="dashed" title="No files" description="Upload a file" />
 */

export type EmptyStateIcon = "folder" | "document" | "photo" | "users" | "inbox" | "search" | "chart" | "calendar" | "plus";

export type EmptyStateAction = {
  /** Button label */
  label: string;
  /** Button href or onClick expression */
  href?: string;
  /** Datastar onClick expression */
  onClick?: string;
  /** Primary action (styled as primary button) */
  primary?: boolean;
};

export type EmptyStateProps = {
  /** Icon to display */
  icon?: EmptyStateIcon;
  /** Custom icon SVG */
  customIcon?: string;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Primary action button */
  action?: EmptyStateAction;
  /** Secondary action button */
  secondaryAction?: EmptyStateAction;
  /** Visual variant */
  variant?: "simple" | "dashed" | "card";
  /** Size */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
};

// Icon SVGs
const icons: Record<EmptyStateIcon, string> = {
  folder: `<path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />`,
  document: `<path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  photo: `<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  users: `<path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  inbox: `<path d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  search: `<path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  chart: `<path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  calendar: `<path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
  plus: `<path d="M12 4.5v15m7.5-7.5h-15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
};

// Plus icon for buttons
const plusIcon = `<svg viewBox="0 0 20 20" fill="currentColor" class="mr-1.5 -ml-0.5 size-5">
  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
</svg>`;

// Size configurations
const sizes = {
  sm: { icon: "size-8", title: "text-sm", description: "text-xs", button: "px-2.5 py-1.5 text-xs" },
  md: { icon: "size-12", title: "text-sm", description: "text-sm", button: "px-3 py-2 text-sm" },
  lg: { icon: "size-16", title: "text-base", description: "text-sm", button: "px-4 py-2.5 text-sm" },
};

function renderButton(action: EmptyStateAction, size: "sm" | "md" | "lg", isPrimary: boolean): string {
  const baseClasses = `inline-flex items-center rounded-md font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${sizes[size].button}`;
  const primaryClasses = "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary";
  const secondaryClasses = "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  const classes = isPrimary ? `${baseClasses} ${primaryClasses}` : `${baseClasses} ${secondaryClasses}`;

  if (action.href) {
    return `<a href="${action.href}" class="${classes}">${isPrimary ? plusIcon : ""}${action.label}</a>`;
  }
  if (action.onClick) {
    return `<button type="button" data-on:click="${action.onClick}" class="${classes}">${isPrimary ? plusIcon : ""}${action.label}</button>`;
  }
  return `<button type="button" class="${classes}">${isPrimary ? plusIcon : ""}${action.label}</button>`;
}

export function EmptyState({
  icon = "folder",
  customIcon,
  title,
  description,
  action,
  secondaryAction,
  variant = "simple",
  size = "md",
  className = "",
}: EmptyStateProps): string {
  const sizeConfig = sizes[size];

  const iconSvg = customIcon ?? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" class="mx-auto ${sizeConfig.icon} text-gray-400">${icons[icon]}</svg>`;

  const content = `
    ${iconSvg}
    <h3 class="mt-2 ${sizeConfig.title} font-semibold text-gray-900">${title}</h3>
    ${description ? `<p class="mt-1 ${sizeConfig.description} text-gray-500">${description}</p>` : ""}
    ${action || secondaryAction ? `
      <div class="mt-6 flex items-center justify-center gap-3">
        ${action ? renderButton(action, size, action.primary !== false) : ""}
        ${secondaryAction ? renderButton(secondaryAction, size, false) : ""}
      </div>
    ` : ""}
  `;

  if (variant === "dashed") {
    return `
      <div class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 ${className}">
        ${content}
      </div>
    `;
  }

  if (variant === "card") {
    return `
      <div class="rounded-lg bg-white p-12 text-center shadow ring-1 ring-gray-900/5 ${className}">
        ${content}
      </div>
    `;
  }

  // Simple variant
  return `
    <div class="text-center ${className}">
      ${content}
    </div>
  `;
}

// Empty state for search results
export function EmptySearchResults({
  query,
  suggestions,
  onClear,
  className = "",
}: {
  query: string;
  suggestions?: string[];
  onClear?: string;
  className?: string;
}): string {
  return `
    <div class="text-center py-12 ${className}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" class="mx-auto size-12 text-gray-400">
        ${icons.search}
      </svg>
      <h3 class="mt-2 text-sm font-semibold text-gray-900">No results found</h3>
      <p class="mt-1 text-sm text-gray-500">No results for "${query}". Try a different search term.</p>
      ${suggestions && suggestions.length > 0 ? `
        <div class="mt-4">
          <p class="text-xs text-gray-500 mb-2">Try searching for:</p>
          <div class="flex flex-wrap justify-center gap-2">
            ${suggestions.map(s => `<span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">${s}</span>`).join("")}
          </div>
        </div>
      ` : ""}
      ${onClear ? `
        <div class="mt-6">
          <button type="button" data-on:click="${onClear}" class="text-sm font-medium text-primary hover:text-primary-dark">
            Clear search
          </button>
        </div>
      ` : ""}
    </div>
  `;
}

// Empty state for lists/tables
export function EmptyList({
  title = "No items",
  description = "Get started by adding your first item.",
  actionLabel = "Add item",
  actionHref,
  actionOnClick,
  className = "",
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  actionOnClick?: string;
  className?: string;
}): string {
  return EmptyState({
    icon: "inbox",
    title,
    description,
    action: actionHref || actionOnClick ? {
      label: actionLabel,
      href: actionHref,
      onClick: actionOnClick,
    } : undefined,
    className,
  });
}
