/**
 * Components showcase index page
 * Lists all Tailwind Plus UI block categories
 */
import { ComponentsLayout, componentGroups } from "../../components/ComponentsLayout";

export const metadata = {
  title: "Components",
  description: "Tailwind Plus UI Components Library",
  fullPage: true,
};

function CategoryCard({ name, slug, count }: { name: string; slug: string; count: number }): string {
  return (
    <a
      href={`/_components/${slug}`}
      class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:border-primary/50 hover:shadow-md transition-all"
    >
      <div class="flex-1">
        <h3 class="text-base font-semibold text-gray-900 group-hover:text-primary">
          {name}
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {count} component{count !== 1 ? "s" : ""}
        </p>
      </div>
      <div class="mt-4 flex items-center text-sm font-medium text-primary">
        View components
        <svg class="ml-1 size-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

// Component counts per category (approximate based on scraped data)
const componentCounts: Record<string, number> = {
  "application-shells/stacked": 9,
  "application-shells/sidebar": 8,
  "application-shells/multi-column": 6,
  "headings/page-headings": 9,
  "headings/card-headings": 6,
  "headings/section-headings": 10,
  "data-display/description-lists": 6,
  "data-display/stats": 5,
  "data-display/calendars": 8,
  "lists/stacked-lists": 15,
  "lists/tables": 19,
  "lists/grid-lists": 7,
  "lists/feeds": 3,
  "forms/form-layouts": 4,
  "forms/input-groups": 21,
  "forms/select-menus": 7,
  "forms/sign-in-forms": 4,
  "forms/textareas": 5,
  "forms/radio-groups": 12,
  "forms/checkboxes": 4,
  "forms/toggles": 5,
  "forms/action-panels": 8,
  "forms/comboboxes": 4,
  "feedback/alerts": 6,
  "feedback/empty-states": 6,
  "navigation/navbars": 11,
  "navigation/pagination": 3,
  "navigation/tabs": 9,
  "navigation/vertical-navigation": 6,
  "navigation/sidebar-navigation": 5,
  "navigation/breadcrumbs": 4,
  "navigation/progress-bars": 8,
  "navigation/command-palettes": 8,
  "overlays/modal-dialogs": 6,
  "overlays/drawers": 12,
  "overlays/notifications": 6,
  "elements/avatars": 11,
  "elements/badges": 16,
  "elements/dropdowns": 5,
  "elements/buttons": 8,
  "elements/button-groups": 5,
  "layout/containers": 5,
  "layout/cards": 10,
  "layout/list-containers": 7,
  "layout/media-objects": 8,
  "layout/dividers": 8,
  "page-examples/home-screens": 2,
  "page-examples/detail-screens": 2,
  "page-examples/settings-screens": 2,
};

export default function ComponentsIndex(): string {
  const totalComponents = Object.values(componentCounts).reduce((a, b) => a + b, 0);

  const content = (
    <div>
      {/* Header */}
      <div class="mb-10">
        <h1 class="text-3xl font-bold text-gray-900">Tailwind UI Components</h1>
        <p class="mt-2 text-lg text-gray-600">
          {totalComponents}+ professionally designed, fully responsive UI components
        </p>
      </div>

      {/* Category groups */}
      {componentGroups.map((group) => (
        <div class="mb-12">
          <h2 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            {group.name}
            <span class="text-sm font-normal text-gray-500">
              ({group.categories.reduce((sum, cat) => sum + (componentCounts[cat.slug] || 0), 0)} components)
            </span>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {group.categories.map((cat) =>
              CategoryCard({
                name: cat.name,
                slug: cat.slug,
                count: componentCounts[cat.slug] || 0,
              })
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return ComponentsLayout({
    title: "Components",
    currentPath: "/_components",
    children: content,
  });
}
