/**
 * Slideover/Drawer Component
 * Side panel that slides in from the edge of the screen
 *
 * @example
 * // Basic slideover
 * <Slideover
 *   id="settings"
 *   title="Settings"
 *   children="Settings content here"
 * />
 *
 * // Open with: data-on:click="$settingsOpen = true"
 */

export type SlideoverProps = {
  /** Unique ID for the slideover (used for Datastar signals) */
  id: string;
  /** Title text */
  title?: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Content */
  children: string;
  /** Slide in from which side */
  side?: "right" | "left";
  /** Width */
  width?: "sm" | "md" | "lg" | "xl" | "full";
  /** Show overlay backdrop */
  overlay?: boolean;
  /** Close on overlay click */
  closeOnOverlay?: boolean;
  /** Show close button */
  showClose?: boolean;
  /** Footer content */
  footer?: string;
  /** Additional CSS classes */
  className?: string;
};

// Width classes
const widths = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
} as const;

export function Slideover({
  id,
  title,
  subtitle,
  children,
  side = "right",
  width = "md",
  overlay = true,
  closeOnOverlay = true,
  showClose = true,
  footer,
  className = "",
}: SlideoverProps): string {
  const signalName = `${id}Open`;
  const widthClass = widths[width];

  const slideAnimation = side === "right"
    ? { open: "translate-x-0", closed: "translate-x-full" }
    : { open: "translate-x-0", closed: "-translate-x-full" };

  const positionClass = side === "right" ? "right-0" : "left-0";

  return `
    <div
      data-show="$${signalName}"
      style="display: none"
      class="relative z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="${id}-title">

      ${overlay ? `
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-gray-500/75 transition-opacity"
          ${closeOnOverlay ? `data-on:click="$${signalName} = false"` : ""}
          data-class="{
            'opacity-100': $${signalName},
            'opacity-0': !$${signalName}
          }"></div>
      ` : ""}

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 ${positionClass} flex ${width === 'full' ? '' : widthClass}">
            <!-- Panel -->
            <div
              class="pointer-events-auto w-screen ${widthClass} transform transition-transform duration-300 ease-in-out ${className}"
              data-class="{
                '${slideAnimation.open}': $${signalName},
                '${slideAnimation.closed}': !$${signalName}
              }">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <!-- Header -->
                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <div>
                      ${title ? `<h2 id="${id}-title" class="text-base font-semibold text-gray-900">${title}</h2>` : ""}
                      ${subtitle ? `<p class="mt-1 text-sm text-gray-500">${subtitle}</p>` : ""}
                    </div>
                    ${showClose ? `
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          data-on:click="$${signalName} = false"
                          class="relative rounded-md bg-gray-50 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary">
                          <span class="sr-only">Close panel</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ` : ""}
                  </div>
                </div>

                <!-- Content -->
                <div class="relative flex-1 px-4 py-6 sm:px-6">
                  ${children}
                </div>

                ${footer ? `
                  <!-- Footer -->
                  <div class="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
                    ${footer}
                  </div>
                ` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Wide slideover with two columns
export function WideSlideoverWithColumns({
  id,
  title,
  subtitle,
  mainContent,
  sideContent,
  side = "right",
  overlay = true,
  closeOnOverlay = true,
  showClose = true,
  footer,
  className = "",
}: {
  id: string;
  title?: string;
  subtitle?: string;
  mainContent: string;
  sideContent: string;
  side?: "right" | "left";
  overlay?: boolean;
  closeOnOverlay?: boolean;
  showClose?: boolean;
  footer?: string;
  className?: string;
}): string {
  const signalName = `${id}Open`;

  const slideAnimation = side === "right"
    ? { open: "translate-x-0", closed: "translate-x-full" }
    : { open: "translate-x-0", closed: "-translate-x-full" };

  const positionClass = side === "right" ? "right-0" : "left-0";

  return `
    <div
      data-show="$${signalName}"
      style="display: none"
      class="relative z-50"
      role="dialog"
      aria-modal="true">

      ${overlay ? `
        <div
          class="fixed inset-0 bg-gray-500/75 transition-opacity"
          ${closeOnOverlay ? `data-on:click="$${signalName} = false"` : ""}></div>
      ` : ""}

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 ${positionClass} flex max-w-full">
            <div
              class="pointer-events-auto w-screen max-w-4xl transform transition-transform duration-300 ease-in-out ${className}"
              data-class="{
                '${slideAnimation.open}': $${signalName},
                '${slideAnimation.closed}': !$${signalName}
              }">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <!-- Header -->
                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <div>
                      ${title ? `<h2 class="text-lg font-semibold text-gray-900">${title}</h2>` : ""}
                      ${subtitle ? `<p class="mt-1 text-sm text-gray-500">${subtitle}</p>` : ""}
                    </div>
                    ${showClose ? `
                      <button
                        type="button"
                        data-on:click="$${signalName} = false"
                        class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary">
                        <span class="sr-only">Close</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ` : ""}
                  </div>
                </div>

                <!-- Two-column content -->
                <div class="relative flex-1">
                  <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <div class="px-4 py-6 sm:px-6 lg:border-r lg:border-gray-200">
                      ${mainContent}
                    </div>
                    <div class="bg-gray-50 px-4 py-6 sm:px-6">
                      ${sideContent}
                    </div>
                  </div>
                </div>

                ${footer ? `
                  <div class="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
                    ${footer}
                  </div>
                ` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Simple notification slideover (from bottom on mobile, side on desktop)
export function NotificationSlideover({
  id,
  title,
  notifications,
  showClose = true,
  emptyMessage = "No notifications",
}: {
  id: string;
  title?: string;
  notifications: Array<{
    id: string;
    title: string;
    description?: string;
    time?: string;
    read?: boolean;
    avatar?: string;
  }>;
  showClose?: boolean;
  emptyMessage?: string;
}): string {
  const signalName = `${id}Open`;

  return `
    <div
      data-show="$${signalName}"
      style="display: none"
      class="relative z-50"
      role="dialog"
      aria-modal="true">

      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        data-on:click="$${signalName} = false"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div
              class="pointer-events-auto w-screen max-w-sm transform transition-transform duration-300 ease-in-out"
              data-class="{
                'translate-x-0': $${signalName},
                'translate-x-full': !$${signalName}
              }">
              <div class="flex h-full flex-col bg-white shadow-xl">
                <!-- Header -->
                <div class="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                  <h2 class="text-base font-semibold text-gray-900">${title || "Notifications"}</h2>
                  ${showClose ? `
                    <button
                      type="button"
                      data-on:click="$${signalName} = false"
                      class="rounded-md text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Close</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  ` : ""}
                </div>

                <!-- Notifications list -->
                <div class="flex-1 overflow-y-auto">
                  ${notifications.length > 0 ? `
                    <ul class="divide-y divide-gray-200">
                      ${notifications.map(n => `
                        <li class="px-4 py-4 ${n.read ? '' : 'bg-primary-light/50'}">
                          <div class="flex gap-x-3">
                            ${n.avatar
                              ? `<img class="size-8 rounded-full" src="${n.avatar}" alt="" />`
                              : `<div class="size-8 rounded-full bg-gray-200 flex items-center justify-center">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-4 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                  </svg>
                                </div>`
                            }
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900">${n.title}</p>
                              ${n.description ? `<p class="text-sm text-gray-500 truncate">${n.description}</p>` : ""}
                              ${n.time ? `<p class="text-xs text-gray-400 mt-1">${n.time}</p>` : ""}
                            </div>
                            ${!n.read ? `<div class="size-2 rounded-full bg-primary"></div>` : ""}
                          </div>
                        </li>
                      `).join("")}
                    </ul>
                  ` : `
                    <div class="flex flex-col items-center justify-center h-48 text-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-12 text-gray-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                      </svg>
                      <p class="mt-2 text-sm text-gray-500">${emptyMessage}</p>
                    </div>
                  `}
                </div>

                <!-- Footer -->
                <div class="border-t border-gray-200 p-4">
                  <a href="#" class="block text-center text-sm font-medium text-primary hover:text-primary-dark">
                    View all notifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Slideover trigger button helper
export function SlideoverTrigger({
  id,
  children,
  className = "",
}: {
  id: string;
  children: string;
  className?: string;
}): string {
  return `
    <button
      type="button"
      data-on:click="$${id}Open = true"
      class="${className}">
      ${children}
    </button>
  `;
}
