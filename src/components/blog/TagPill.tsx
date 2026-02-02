/**
 * TagPill component - Reusable tag/filter pill
 * Figma Node: 616:5522 (tag pill elements)
 *
 * Used in BlogHero for popular tags and FilterSection for topic filters
 */

interface TagPillProps {
  label: string;
  selected?: boolean;
  href?: string;
}

export function TagPill({ label, selected = false, href }: TagPillProps): string {
  // Base classes matching Figma specs
  const baseClasses = [
    "bg-white",
    "border",
    "border-neutral-300",
    "border-solid",
    "flex",
    "gap-[8px]",
    "items-center",
    "justify-center",
    "px-[10px]",
    "py-[6px]",
    "rounded-[48px]",
    "shrink-0",
    "transition-colors",
  ].join(" ");

  // Text classes matching Figma specs
  const textClasses = [
    "font-sans",
    "font-normal",
    "text-neutral-900",
    "text-[14px]",
    "leading-[20px]",
    "tracking-[0px]",
    "whitespace-nowrap",
  ].join(" ");

  // State-dependent classes
  const stateClasses = selected
    ? "bg-neutral-50 border-brand-500"
    : "hover:bg-neutral-50";

  const combinedClasses = `${baseClasses} ${stateClasses}`;

  // Render as link if href provided
  if (href) {
    return (
      <a
        href={href}
        class={combinedClasses}
      >
        <span class={textClasses}>{label}</span>
      </a>
    );
  }

  // Render as div otherwise
  return (
    <div class={combinedClasses}>
      <span class={textClasses}>{label}</span>
    </div>
  );
}
