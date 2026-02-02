/**
 * FilterSection component - Topic filtering with tag pills
 * Figma Node: 616:5641
 *
 * Displays header with red accent line and selectable tag pills
 * Uses links for server-side navigation instead of client-side callbacks
 */

interface FilterSectionProps {
  tags: string[];
  selectedTags: string[];
  baseUrl?: string;
}

export function FilterSection({ tags, selectedTags, baseUrl = "/blog" }: FilterSectionProps): string {
  const getTagUrl = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    const tagsQuery = newTags.length > 0 ? `&tags=${newTags.join(",")}` : "";
    return `${baseUrl}?tab=by-topic${tagsQuery}#filter-section`;
  };

  return (
    <div id="filter-section" class="mb-8">
      {/* Tag pills as links */}
      <div class="flex flex-wrap gap-3">
        {tags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          const url = getTagUrl(tag);

          // Base classes
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
            "no-underline",
          ].join(" ");

          // Text classes
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
          const stateClasses = isSelected
            ? "bg-neutral-50 border-brand-500"
            : "hover:bg-neutral-50";

          const combinedClasses = `${baseClasses} ${stateClasses}`;

          return (
            <a href={url} class={combinedClasses}>
              <span class={textClasses}>{tag}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
