import { navigation, type NavItem } from "../data/navigation";

// SVG Icons
const icons = {
  chevron: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 flex-none text-gray-400"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
};

// Config
const config = {
  logo: {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp",
    alt: "Health Samurai",
    href: "/",
  },
  cta: {
    label: "Sign up for free",
    href: "https://aidbox.app/ui/portal#/signup",
  },
};

// Utility: Convert label to menu ID
const toMenuId = (label: string, prefix = "") =>
  `${prefix}${label.toLowerCase().replace(/\s+/g, "-")}`;

// Render: Desktop nav link
function renderDesktopLink(item: NavItem): string {
  return (
    <a href={item.href} class="text-sm/6 font-semibold text-gray-900 hover:text-primary">
      {item.label}
    </a>
  );
}

// Render: Desktop dropdown
function renderDesktopDropdown(item: NavItem): string {
  const menuId = toMenuId(item.label);

  return (
    <div class="relative">
      <button
        type="button"
        class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
        data-on:click={`$openMenu = $openMenu === '${menuId}' ? '' : '${menuId}'`}
      >
        {item.label}
        <span
          class="transition-transform duration-200"
          data-class:rotate-180={`$openMenu === '${menuId}'`}
          dangerouslySetInnerHTML={{ __html: icons.chevron }}
        />
      </button>

      <div
        class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 px-4"
        data-show={`$openMenu === '${menuId}'`}
        style={{ display: "none" }}
      >
        <div class="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            {item.children?.map((link) => (
              <div class="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <span dangerouslySetInnerHTML={{ __html: icons.database }} />
                </div>
                <div class="flex-auto">
                  <a href={link.href} class="block font-semibold text-gray-900">
                    {link.label}
                    <span class="absolute inset-0"></span>
                  </a>
                  {link.description && (
                    <p class="mt-1 text-gray-600">{link.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Render: Desktop menu item (link or dropdown)
function renderDesktopMenuItem(item: NavItem): string {
  return item.href ? renderDesktopLink(item) : renderDesktopDropdown(item);
}

// Render: Mobile nav link
function renderMobileLink(item: NavItem): string {
  return (
    <a
      href={item.href}
      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    >
      {item.label}
    </a>
  );
}

// Render: Mobile dropdown
function renderMobileDropdown(item: NavItem): string {
  const menuId = toMenuId(item.label, "mobile-");

  return (
    <div class="-mx-3">
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
        data-on:click={`$openMenu = $openMenu === '${menuId}' ? '' : '${menuId}'`}
      >
        {item.label}
        <span
          class="transition-transform duration-200"
          data-class:rotate-180={`$openMenu === '${menuId}'`}
          dangerouslySetInnerHTML={{ __html: icons.chevron }}
        />
      </button>
      <div
        class="mt-2 space-y-2"
        data-show={`$openMenu === '${menuId}'`}
        style={{ display: "none" }}
      >
        {item.children?.map((link) => (
          <a
            href={link.href}
            class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// Render: Mobile menu item (link or dropdown)
function renderMobileMenuItem(item: NavItem): string {
  return item.href ? renderMobileLink(item) : renderMobileDropdown(item);
}

// Render: Logo
function renderLogo(): string {
  return (
    <a href={config.logo.href} class="-m-1.5 p-1.5">
      <span class="sr-only">{config.logo.alt}</span>
      <img src={config.logo.src} alt={config.logo.alt} class="h-10 w-auto" />
    </a>
  );
}

// Render: CTA Button
function renderCTA(className = ""): string {
  return (
    <a
      href={config.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      class={`rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark ${className}`}
    >
      {config.cta.label}
    </a>
  );
}

// Main Header component
export function Header(): string {
  return (
    <header class="relative isolate z-10 bg-white" data-signals="{openMenu: '', mobileOpen: false}">
      <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div class="flex lg:flex-1">
          {renderLogo()}
        </div>

        {/* Mobile menu button */}
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            data-on:click="$mobileOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <span dangerouslySetInnerHTML={{ __html: icons.menu }} />
          </button>
        </div>

        {/* Desktop menu */}
        <div class="hidden lg:flex lg:gap-x-12">
          {navigation.map(renderDesktopMenuItem)}
        </div>

        {/* CTA */}
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          {renderCTA()}
        </div>
      </nav>

      {/* Click outside to close desktop menu */}
      <div
        class="fixed inset-0 z-0"
        data-show="$openMenu !== ''"
        data-on:click="$openMenu = ''"
        style={{ display: "none" }}
      ></div>

      {/* Mobile menu overlay */}
      <div
        class="fixed inset-0 z-40 bg-gray-900/80 lg:hidden"
        data-show="$mobileOpen"
        data-on:click="$mobileOpen = false"
        style={{ display: "none" }}
      ></div>

      {/* Mobile menu panel */}
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
        data-show="$mobileOpen"
        style={{ display: "none" }}
      >
        <div class="flex items-center justify-between">
          {renderLogo()}
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            data-on:click="$mobileOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <span dangerouslySetInnerHTML={{ __html: icons.close }} />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              {navigation.map(renderMobileMenuItem)}
            </div>
            <div class="py-6">
              <a
                href={config.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {config.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
