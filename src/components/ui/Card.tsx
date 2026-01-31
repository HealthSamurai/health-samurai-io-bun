/**
 * Card Component
 * Based on Tailwind Plus UI cards
 *
 * @example
 * // Basic card
 * <Card>Content here</Card>
 *
 * // With header
 * <Card header="Settings">Card content</Card>
 *
 * // With header and footer
 * <Card header="Profile" footer={<Button>Save</Button>}>
 *   Form content here
 * </Card>
 *
 * // With custom header content
 * <Card headerContent={<div>Custom header</div>}>Content</Card>
 *
 * // Different padding
 * <Card padding="lg">More spacious</Card>
 *
 * // Well style (inset)
 * <Card variant="well">Inset content</Card>
 *
 * // No shadow
 * <Card shadow="none">Flat card</Card>
 */

export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardShadow = "none" | "sm" | "md" | "lg";
export type CardVariant = "default" | "well" | "outline";

export type CardProps = {
  /** Card body content */
  children: string;
  /** Simple text header */
  header?: string;
  /** Custom header content (overrides header prop) */
  headerContent?: string;
  /** Footer content */
  footer?: string;
  /** Gray footer background */
  grayFooter?: boolean;
  /** Gray body background (for well style) */
  grayBody?: boolean;
  /** Card padding size */
  padding?: CardPadding;
  /** Shadow size */
  shadow?: CardShadow;
  /** Card style variant */
  variant?: CardVariant;
  /** Full width on mobile (no rounded corners) */
  fullWidthMobile?: boolean;
  /** Hover effect */
  hoverable?: boolean;
  /** Make entire card clickable */
  href?: string;
  /** Additional CSS classes */
  className?: string;
};

// Padding configurations
const paddings: Record<CardPadding, { header: string; body: string; footer: string }> = {
  none: { header: "", body: "", footer: "" },
  sm: { header: "px-3 py-3", body: "px-3 py-3", footer: "px-3 py-3" },
  md: { header: "px-4 py-5 sm:px-6", body: "px-4 py-5 sm:p-6", footer: "px-4 py-4 sm:px-6" },
  lg: { header: "px-6 py-6", body: "px-6 py-6", footer: "px-6 py-5" },
};

// Shadow configurations
const shadows: Record<CardShadow, string> = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export function Card({
  children,
  header,
  headerContent,
  footer,
  grayFooter = false,
  grayBody = false,
  padding = "md",
  shadow = "sm",
  variant = "default",
  fullWidthMobile = false,
  hoverable = false,
  href,
  className = "",
}: CardProps): string {
  const hasHeader = header || headerContent;
  const hasFooter = !!footer;
  const hasDividers = hasHeader || hasFooter;

  // Build container classes
  const containerClasses: string[] = [
    "overflow-hidden bg-white",
    fullWidthMobile ? "sm:rounded-lg" : "rounded-lg",
    shadows[shadow],
    hasDividers ? "divide-y divide-gray-200" : "",
    variant === "well" ? "ring-1 ring-gray-200" : "",
    variant === "outline" ? "ring-1 ring-gray-200 shadow-none" : "",
    hoverable ? "transition-shadow hover:shadow-md" : "",
    className,
  ].filter(Boolean);

  const paddingConfig = paddings[padding];

  // Build header
  let headerHtml = "";
  if (headerContent) {
    headerHtml = `<div class="${paddingConfig.header}">${headerContent}</div>`;
  } else if (header) {
    headerHtml = `
      <div class="${paddingConfig.header}">
        <h3 class="text-base font-semibold text-gray-900">${header}</h3>
      </div>
    `;
  }

  // Build body
  const bodyClasses = [
    paddingConfig.body,
    grayBody ? "bg-gray-50" : "",
  ].filter(Boolean).join(" ");
  const bodyHtml = `<div class="${bodyClasses}">${children}</div>`;

  // Build footer
  let footerHtml = "";
  if (footer) {
    const footerClasses = [
      paddingConfig.footer,
      grayFooter ? "bg-gray-50" : "",
    ].filter(Boolean).join(" ");
    footerHtml = `<div class="${footerClasses}">${footer}</div>`;
  }

  const cardContent = headerHtml + bodyHtml + footerHtml;

  // Wrap in link if href provided
  if (href) {
    return `<a href="${href}" class="block ${containerClasses.join(" ")}">${cardContent}</a>`;
  }

  return `<div class="${containerClasses.join(" ")}">${cardContent}</div>`;
}

// Card with just a header action
export function CardWithAction({
  header,
  action,
  children,
  ...props
}: Omit<CardProps, "header" | "headerContent"> & {
  header: string;
  action: string;
}): string {
  const headerContent = `
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold text-gray-900">${header}</h3>
      <div class="shrink-0">${action}</div>
    </div>
  `;
  return Card({ ...props, headerContent, children });
}

// Simple card section divider
export function CardDivider(): string {
  return `<div class="border-t border-gray-200"></div>`;
}

// Card grid container
export function CardGrid({
  children,
  cols = 3,
  className = "",
}: {
  children: string;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}): string {
  const colClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };
  return `<div class="grid ${colClasses[cols]} gap-6 ${className}">${children}</div>`;
}

// Stats card
export function StatCard({
  label,
  value,
  change,
  changeType = "neutral",
  icon,
}: {
  label: string;
  value: string;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  icon?: string;
}): string {
  const changeColors = {
    increase: "text-green-600",
    decrease: "text-red-600",
    neutral: "text-gray-500",
  };

  const changeIcons = {
    increase: `<svg class="size-4 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clip-rule="evenodd"/></svg>`,
    decrease: `<svg class="size-4 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd"/></svg>`,
    neutral: "",
  };

  return Card({
    padding: "md",
    children: `
      <div class="flex items-center">
        ${icon ? `<div class="shrink-0 rounded-md bg-primary/10 p-3 text-primary">${icon}</div>` : ""}
        <div class="${icon ? "ml-5" : ""} w-0 flex-1">
          <dl>
            <dt class="truncate text-sm font-medium text-gray-500">${label}</dt>
            <dd class="flex items-baseline">
              <div class="text-2xl font-semibold text-gray-900">${value}</div>
              ${change ? `
                <div class="ml-2 flex items-baseline text-sm font-semibold ${changeColors[changeType]}">
                  ${changeIcons[changeType]}
                  <span class="ml-0.5">${change}</span>
                </div>
              ` : ""}
            </dd>
          </dl>
        </div>
      </div>
    `,
  });
}
