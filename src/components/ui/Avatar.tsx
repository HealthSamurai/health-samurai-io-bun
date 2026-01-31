/**
 * Avatar Component
 * Based on Tailwind Plus UI avatars
 *
 * @example
 * // Basic avatar
 * <Avatar src="/avatar.jpg" alt="John Doe" />
 *
 * // With initials fallback
 * <Avatar initials="JD" />
 *
 * // With status indicator
 * <Avatar src="/avatar.jpg" status="online" />
 *
 * // Different sizes
 * <Avatar src="/avatar.jpg" size="lg" />
 *
 * // Avatar group
 * <AvatarGroup>
 *   <Avatar src="/1.jpg" />
 *   <Avatar src="/2.jpg" />
 * </AvatarGroup>
 */

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarShape = "circle" | "rounded";
export type AvatarStatus = "online" | "offline" | "busy" | "away";

export type AvatarProps = {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Initials to display when no image */
  initials?: string;
  /** Avatar size */
  size?: AvatarSize;
  /** Avatar shape */
  shape?: AvatarShape;
  /** Status indicator */
  status?: AvatarStatus;
  /** Status position */
  statusPosition?: "top" | "bottom";
  /** Additional CSS classes */
  className?: string;
};

// Size configurations
const sizes: Record<AvatarSize, { container: string; initials: string; status: string; statusOffset: string }> = {
  xs: { container: "size-6", initials: "text-xs", status: "size-1.5", statusOffset: "" },
  sm: { container: "size-8", initials: "text-sm", status: "size-2", statusOffset: "" },
  md: { container: "size-10", initials: "text-sm", status: "size-2.5", statusOffset: "" },
  lg: { container: "size-12", initials: "text-base", status: "size-3", statusOffset: "" },
  xl: { container: "size-14", initials: "text-lg", status: "size-3.5", statusOffset: "" },
  "2xl": { container: "size-16", initials: "text-xl", status: "size-4", statusOffset: "" },
};

// Status colors
const statusColors: Record<AvatarStatus, string> = {
  online: "bg-green-400",
  offline: "bg-gray-300",
  busy: "bg-red-400",
  away: "bg-yellow-400",
};

export function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom",
  className = "",
}: AvatarProps): string {
  const sizeConfig = sizes[size];
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-md";

  // Status indicator
  let statusHtml = "";
  if (status) {
    const positionClass = statusPosition === "top" ? "top-0 right-0" : "right-0 bottom-0";
    statusHtml = `<span class="absolute ${positionClass} block ${sizeConfig.status} rounded-full ${statusColors[status]} ring-2 ring-white"></span>`;
  }

  // Avatar content
  let avatarContent: string;
  if (src) {
    avatarContent = `<img src="${src}" alt="${alt}" class="${sizeConfig.container} ${shapeClass} outline -outline-offset-1 outline-black/5" />`;
  } else if (initials) {
    avatarContent = `
      <span class="inline-flex ${sizeConfig.container} items-center justify-center ${shapeClass} bg-gray-500">
        <span class="${sizeConfig.initials} font-medium text-white">${initials}</span>
      </span>
    `;
  } else {
    // Placeholder icon
    avatarContent = `
      <span class="inline-block ${sizeConfig.container} overflow-hidden ${shapeClass} bg-gray-100">
        <svg viewBox="0 0 24 24" fill="currentColor" class="size-full text-gray-300">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"/>
        </svg>
      </span>
    `;
  }

  // Wrap with status indicator if needed
  if (status) {
    return `<span class="relative inline-block ${className}">${avatarContent}${statusHtml}</span>`;
  }

  return src
    ? `<span class="inline-block ${className}">${avatarContent}</span>`
    : avatarContent.includes("inline-flex") || avatarContent.includes("inline-block")
    ? avatarContent
    : `<span class="inline-block ${className}">${avatarContent}</span>`;
}

// Avatar with notification badge
export function AvatarWithBadge({
  src,
  alt = "",
  initials,
  size = "md",
  shape = "circle",
  badgeContent,
  badgeColor = "red",
  className = "",
}: Omit<AvatarProps, "status" | "statusPosition"> & {
  badgeContent?: string;
  badgeColor?: "red" | "blue" | "green" | "yellow" | "gray";
}): string {
  const sizeConfig = sizes[size];
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-md";

  const badgeColors: Record<string, string> = {
    red: "bg-red-500 text-white",
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    gray: "bg-gray-500 text-white",
  };

  const avatarContent = src
    ? `<img src="${src}" alt="${alt}" class="${sizeConfig.container} ${shapeClass} outline -outline-offset-1 outline-black/5" />`
    : initials
    ? `<span class="inline-flex ${sizeConfig.container} items-center justify-center ${shapeClass} bg-gray-500"><span class="${sizeConfig.initials} font-medium text-white">${initials}</span></span>`
    : `<span class="inline-block ${sizeConfig.container} overflow-hidden ${shapeClass} bg-gray-100"><svg viewBox="0 0 24 24" fill="currentColor" class="size-full text-gray-300"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"/></svg></span>`;

  const badgeHtml = badgeContent
    ? `<span class="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-xs font-bold ${badgeColors[badgeColor]} rounded-full ring-2 ring-white">${badgeContent}</span>`
    : "";

  return `<span class="relative inline-block ${className}">${avatarContent}${badgeHtml}</span>`;
}

// Avatar Group (stacked avatars)
export function AvatarGroup({
  children,
  max,
  size = "md",
  className = "",
}: {
  children: string | string[];
  max?: number;
  size?: AvatarSize;
  className?: string;
}): string {
  const sizeConfig = sizes[size];

  // Calculate remaining count (simple implementation)
  const content = Array.isArray(children) ? children.join("") : children;

  const moreIndicator =
    max && max > 0
      ? `<span class="inline-flex ${sizeConfig.container} items-center justify-center rounded-full bg-gray-100 ring-2 ring-white"><span class="${sizeConfig.initials} font-medium text-gray-500">+${max}</span></span>`
      : "";

  return `
    <div class="flex -space-x-2 overflow-hidden ${className}">
      ${content}
      ${moreIndicator}
    </div>
  `;
}

// Avatar with text (name and description)
export function AvatarWithText({
  src,
  alt = "",
  initials,
  size = "md",
  shape = "circle",
  status,
  name,
  description,
  className = "",
}: AvatarProps & {
  name: string;
  description?: string;
}): string {
  const avatarHtml = Avatar({ src, alt, initials, size, shape, status });

  return `
    <div class="flex items-center gap-3 ${className}">
      ${avatarHtml}
      <div class="min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate">${name}</p>
        ${description ? `<p class="text-sm text-gray-500 truncate">${description}</p>` : ""}
      </div>
    </div>
  `;
}
