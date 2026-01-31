/**
 * Spinner/Loading Component
 * Various loading indicators
 *
 * @example
 * // Basic spinner
 * <Spinner />
 *
 * // Different sizes
 * <Spinner size="sm" />
 * <Spinner size="lg" />
 *
 * // With label
 * <Spinner label="Loading..." />
 *
 * // Button with loading state
 * <Button loading>Submit</Button>
 */

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "primary" | "white" | "gray" | "current";

export type SpinnerProps = {
  /** Spinner size */
  size?: SpinnerSize;
  /** Spinner color */
  color?: SpinnerColor;
  /** Loading label text */
  label?: string;
  /** Label position */
  labelPosition?: "right" | "bottom";
  /** Additional CSS classes */
  className?: string;
};

// Size configurations
const sizes: Record<SpinnerSize, { spinner: string; text: string }> = {
  xs: { spinner: "size-3", text: "text-xs" },
  sm: { spinner: "size-4", text: "text-sm" },
  md: { spinner: "size-6", text: "text-sm" },
  lg: { spinner: "size-8", text: "text-base" },
  xl: { spinner: "size-12", text: "text-lg" },
};

// Color configurations
const colors: Record<SpinnerColor, string> = {
  primary: "text-primary",
  white: "text-white",
  gray: "text-gray-400",
  current: "text-current",
};

export function Spinner({
  size = "md",
  color = "primary",
  label,
  labelPosition = "right",
  className = "",
}: SpinnerProps): string {
  const sizeConfig = sizes[size];
  const colorClass = colors[color];

  const spinnerSvg = `
    <svg class="animate-spin ${sizeConfig.spinner} ${colorClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  `;

  if (!label) {
    return `<span class="inline-block ${className}" role="status" aria-label="Loading">${spinnerSvg}</span>`;
  }

  if (labelPosition === "bottom") {
    return `
      <div class="flex flex-col items-center gap-2 ${className}" role="status">
        ${spinnerSvg}
        <span class="${sizeConfig.text} ${color === "white" ? "text-white" : "text-gray-600"}">${label}</span>
      </div>
    `;
  }

  return `
    <div class="inline-flex items-center gap-2 ${className}" role="status">
      ${spinnerSvg}
      <span class="${sizeConfig.text} ${color === "white" ? "text-white" : "text-gray-600"}">${label}</span>
    </div>
  `;
}

// Dots loader (alternative style)
export function DotsLoader({
  size = "md",
  color = "primary",
  className = "",
}: Omit<SpinnerProps, "label" | "labelPosition">): string {
  const dotSizes: Record<SpinnerSize, string> = {
    xs: "size-1",
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-3",
  };

  const colorClass = colors[color];
  const dotSize = dotSizes[size];

  return `
    <div class="flex items-center gap-1 ${className}" role="status" aria-label="Loading">
      <span class="${dotSize} rounded-full ${colorClass} bg-current animate-bounce" style="animation-delay: 0ms"></span>
      <span class="${dotSize} rounded-full ${colorClass} bg-current animate-bounce" style="animation-delay: 150ms"></span>
      <span class="${dotSize} rounded-full ${colorClass} bg-current animate-bounce" style="animation-delay: 300ms"></span>
    </div>
  `;
}

// Pulse loader (subtle alternative)
export function PulseLoader({
  size = "md",
  color = "gray",
  className = "",
}: Omit<SpinnerProps, "label" | "labelPosition">): string {
  const sizeConfig = sizes[size];
  const colorClass = colors[color];

  return `
    <div class="${sizeConfig.spinner} rounded-full ${colorClass} bg-current animate-pulse ${className}" role="status" aria-label="Loading"></div>
  `;
}

// Skeleton loader for content placeholders
export function Skeleton({
  width = "full",
  height = "4",
  rounded = "md",
  className = "",
}: {
  width?: "full" | "3/4" | "1/2" | "1/4" | string;
  height?: "2" | "3" | "4" | "6" | "8" | "10" | "12" | string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
}): string {
  const widthClasses: Record<string, string> = {
    full: "w-full",
    "3/4": "w-3/4",
    "1/2": "w-1/2",
    "1/4": "w-1/4",
  };

  const heightClasses: Record<string, string> = {
    "2": "h-2",
    "3": "h-3",
    "4": "h-4",
    "6": "h-6",
    "8": "h-8",
    "10": "h-10",
    "12": "h-12",
  };

  const roundedClasses: Record<string, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const w = widthClasses[width] || `w-[${width}]`;
  const h = heightClasses[height] || `h-[${height}]`;
  const r = roundedClasses[rounded];

  return `<div class="${w} ${h} ${r} bg-gray-200 animate-pulse ${className}"></div>`;
}

// Card skeleton loader
export function CardSkeleton({ className = "" }: { className?: string }): string {
  return `
    <div class="bg-white rounded-lg shadow-sm p-4 ${className}">
      <div class="animate-pulse space-y-4">
        ${Skeleton({ height: "8", rounded: "lg" })}
        ${Skeleton({ width: "3/4" })}
        ${Skeleton({ width: "1/2" })}
      </div>
    </div>
  `;
}

// Text lines skeleton
export function TextSkeleton({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}): string {
  const lineWidths = ["full", "full", "3/4", "1/2", "full", "3/4"];

  return `
    <div class="space-y-2 ${className}">
      ${Array.from({ length: lines })
        .map((_, i) => Skeleton({ width: lineWidths[i % lineWidths.length] }))
        .join("")}
    </div>
  `;
}

// Full page loading overlay
export function LoadingOverlay({
  label = "Loading...",
  className = "",
}: {
  label?: string;
  className?: string;
}): string {
  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm ${className}">
      ${Spinner({ size: "lg", label, labelPosition: "bottom" })}
    </div>
  `;
}

// Inline loading state (for buttons, etc.)
export function InlineLoading({
  size = "sm",
  color = "current",
}: {
  size?: SpinnerSize;
  color?: SpinnerColor;
}): string {
  return Spinner({ size, color, className: "inline-block" });
}
