import { Logo } from "./Logo";
import { TagPill } from "./TagPill";

/**
 * BlogHero component - Hero section with title, search, and tags
 * Figma Node: 616:5519 (title/subtitle), 616:5522 (search/tags container)
 */
export function BlogHero(): string {
  // Icons exported from Figma to public/icons/
  const SEARCH_ICON = "/icons/blog/search.svg";
  const COMMAND_ICON = "/icons/blog/command.svg";

  const popularTags = [
    "FHIR",
    "Events",
    "News",
    "SQL on FHIR",
    "Videos",
    "Forms",
    "Terminology",
    "Compliance",
    "Infrastructure",
    "Framework",
    "Foundation",
    "Network",
    "System",
    "Architecture",
    "Platform",
    "Grid",
  ];

  return (
    <section class="py-16 px-4">
      <div class="max-w-[1200px] mx-auto">
        {/* Logo - Figma Node: 616:5553 */}
        <div class="flex items-center justify-center mb-10">
          {Logo()}
        </div>

        {/* Hero Text - Figma node: 616:5519 */}
        <div class="flex flex-col gap-4 items-center max-w-3xl mx-auto mb-16">
          <h1 class="text-5xl font-bold leading-14 text-neutral-650 tracking-[-0.4px] text-center w-full">
            FHIR Expert Hub
          </h1>
          <p class="text-base font-normal leading-6 text-neutral-900 tracking-[0px] text-center w-full">
            Our experts have a deep understanding of FHIR, and here you will find the most relevant articles
          </p>
          {/* RSS Button */}
          <a
            href="/blog/rss.xml"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-400 text-orange-500 hover:bg-orange-50 font-medium text-sm transition-colors"
            title="Subscribe via RSS"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
            </svg>
            RSS
          </a>
        </div>

        {/* Search Box with Tags - Figma node: 616:5522 */}
        <div class="bg-white border border-neutral-200 rounded-[24px] p-[32px] max-w-[932px] mx-auto shadow-[0px_200px_56px_0px_rgba(56,68,77,0),0px_128px_51px_0px_rgba(56,68,77,0),0px_72px_43px_0px_rgba(56,68,77,0.01),0px_32px_32px_0px_rgba(56,68,77,0.02),0px_8px_18px_0px_rgba(56,68,77,0.03)]">
          {/* Search Input - Height: 54px, padding: 29px from Figma */}
          <div class="bg-neutral-50 border border-neutral-200 rounded-[16px] px-[29px] h-[54px] flex items-center gap-[8px] mb-[24px]">
            <input
              id="search-input"
              type="text"
              placeholder="Search articles..."
              class="flex-1 bg-transparent border-none outline-none text-base font-normal leading-6 text-neutral-650 placeholder:text-neutral-650"
            />
            {/* Search icon from Figma MCP */}
            <img
              src={SEARCH_ICON}
              alt="Search"
              class="w-6 h-6"
            />
            <div class="flex items-center gap-[2px]">
              {/* Command key background */}
              <div class="bg-neutral-200 p-[4px] rounded-[2px]">
                <img
                  src={COMMAND_ICON}
                  alt="Command"
                  class="w-[12px] h-[12px]"
                />
              </div>
              <span class="text-[16px] leading-[24px] text-neutral-500">+K</span>
            </div>
          </div>

          {/* Popular Tags */}
          <div class="flex flex-wrap gap-[12px] justify-center">
            {popularTags.map(tag => (
              TagPill({
                label: tag,
                href: `/blog/topic/${encodeURIComponent(tag)}`,
              })
            ))}
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', function(e) {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault();
              document.getElementById('search-input')?.focus();
            }
          });
        `,
      }} />
    </section>
  );
}
