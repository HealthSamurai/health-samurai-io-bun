/**
 * Layout for components showcase pages
 * Displays Tailwind Plus UI blocks with navigation sidebar
 */

type CategoryGroup = {
  name: string;
  categories: { name: string; slug: string }[];
};

const componentGroups: CategoryGroup[] = [
  {
    name: "UI Components",
    categories: [
      { name: "Buttons", slug: "ui/buttons" },
      { name: "Badges", slug: "ui/badges" },
      { name: "Alerts", slug: "ui/alerts" },
      { name: "Cards", slug: "ui/cards" },
      { name: "Inputs", slug: "ui/inputs" },
      { name: "Avatars", slug: "ui/avatars" },
      { name: "Tabs", slug: "ui/tabs" },
      { name: "Modals", slug: "ui/modals" },
      { name: "Dropdowns", slug: "ui/dropdowns" },
      { name: "Toggles", slug: "ui/toggles" },
      { name: "Spinners", slug: "ui/spinners" },
    ],
  },
  {
    name: "Application Shells",
    categories: [
      { name: "Stacked", slug: "application-shells/stacked" },
      { name: "Sidebar", slug: "application-shells/sidebar" },
      { name: "Multi-Column", slug: "application-shells/multi-column" },
    ],
  },
  {
    name: "Headings",
    categories: [
      { name: "Page Headings", slug: "headings/page-headings" },
      { name: "Card Headings", slug: "headings/card-headings" },
      { name: "Section Headings", slug: "headings/section-headings" },
    ],
  },
  {
    name: "Data Display",
    categories: [
      { name: "Description Lists", slug: "data-display/description-lists" },
      { name: "Stats", slug: "data-display/stats" },
      { name: "Calendars", slug: "data-display/calendars" },
    ],
  },
  {
    name: "Lists",
    categories: [
      { name: "Stacked Lists", slug: "lists/stacked-lists" },
      { name: "Tables", slug: "lists/tables" },
      { name: "Grid Lists", slug: "lists/grid-lists" },
      { name: "Feeds", slug: "lists/feeds" },
    ],
  },
  {
    name: "Forms",
    categories: [
      { name: "Form Layouts", slug: "forms/form-layouts" },
      { name: "Input Groups", slug: "forms/input-groups" },
      { name: "Select Menus", slug: "forms/select-menus" },
      { name: "Sign-in Forms", slug: "forms/sign-in-forms" },
      { name: "Textareas", slug: "forms/textareas" },
      { name: "Radio Groups", slug: "forms/radio-groups" },
      { name: "Checkboxes", slug: "forms/checkboxes" },
      { name: "Toggles", slug: "forms/toggles" },
      { name: "Action Panels", slug: "forms/action-panels" },
      { name: "Comboboxes", slug: "forms/comboboxes" },
    ],
  },
  {
    name: "Feedback",
    categories: [
      { name: "Alerts", slug: "feedback/alerts" },
      { name: "Empty States", slug: "feedback/empty-states" },
    ],
  },
  {
    name: "Navigation",
    categories: [
      { name: "Navbars", slug: "navigation/navbars" },
      { name: "Pagination", slug: "navigation/pagination" },
      { name: "Tabs", slug: "navigation/tabs" },
      { name: "Vertical Navigation", slug: "navigation/vertical-navigation" },
      { name: "Sidebar Navigation", slug: "navigation/sidebar-navigation" },
      { name: "Breadcrumbs", slug: "navigation/breadcrumbs" },
      { name: "Progress Bars", slug: "navigation/progress-bars" },
      { name: "Command Palettes", slug: "navigation/command-palettes" },
    ],
  },
  {
    name: "Overlays",
    categories: [
      { name: "Modal Dialogs", slug: "overlays/modal-dialogs" },
      { name: "Drawers", slug: "overlays/drawers" },
      { name: "Notifications", slug: "overlays/notifications" },
    ],
  },
  {
    name: "Elements",
    categories: [
      { name: "Avatars", slug: "elements/avatars" },
      { name: "Badges", slug: "elements/badges" },
      { name: "Dropdowns", slug: "elements/dropdowns" },
      { name: "Buttons", slug: "elements/buttons" },
      { name: "Button Groups", slug: "elements/button-groups" },
    ],
  },
  {
    name: "Layout",
    categories: [
      { name: "Containers", slug: "layout/containers" },
      { name: "Cards", slug: "layout/cards" },
      { name: "List Containers", slug: "layout/list-containers" },
      { name: "Media Objects", slug: "layout/media-objects" },
      { name: "Dividers", slug: "layout/dividers" },
    ],
  },
  {
    name: "Page Examples",
    categories: [
      { name: "Home Screens", slug: "page-examples/home-screens" },
      { name: "Detail Screens", slug: "page-examples/detail-screens" },
      { name: "Settings Screens", slug: "page-examples/settings-screens" },
    ],
  },
];

function Sidebar({ currentPath }: { currentPath: string }): string {
  return (
    <nav class="flex flex-col gap-y-8 px-4 py-6">
      <a href="/_components" class="flex items-center gap-2 text-lg font-semibold text-gray-900">
        <svg class="size-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
        Components
      </a>
      {componentGroups.map((group) => (
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            {group.name}
          </h3>
          <ul class="space-y-1">
            {group.categories.map((cat) => {
              const href = `/_components/${cat.slug}`;
              const isActive = currentPath === href;
              return (
                <li>
                  <a
                    href={href}
                    class={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {cat.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export type ComponentsLayoutProps = {
  title: string;
  currentPath: string;
  children: string;
  devMode?: boolean;
};

export function ComponentsLayout({ title, currentPath, children, devMode }: ComponentsLayoutProps): string {
  const fullTitle = `${title} | Tailwind UI Components`;

  return (
    <html lang="en" class="h-full bg-white">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>{fullTitle}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/main.css" />
        <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@1.0.0-RC.7/bundles/datastar.js"></script>
      </head>
      <body class="h-full">
        <div class="flex min-h-full">
          {/* Sidebar */}
          <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r border-gray-200 bg-white overflow-y-auto">
            {Sidebar({ currentPath })}
          </div>

          {/* Main content */}
          <main class="flex-1 lg:pl-64">
            <div class="px-8 py-6">
              <div dangerouslySetInnerHTML={{ __html: children }} />
            </div>
          </main>
        </div>

        {devMode && (
          <script dangerouslySetInnerHTML={{ __html: `let _id;setInterval(async()=>{const r=await fetch("/__ping").catch(()=>null);const n=await r?.text();if(_id&&n&&_id!==n)location.reload();if(n)_id=n},1000)` }} />
        )}
      </body>
    </html>
  );
}

export { componentGroups };
