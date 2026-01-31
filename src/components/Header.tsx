import { navigation, type NavItem } from "../data/navigation";

// Product icons for dropdown
const productIcons: Record<string, string> = {
  Aidbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
  Smartbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>`,
  Formbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>`,
  Auditbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
  Termbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
  MDMbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  "E-prescription": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`,
  Edibox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-gray-600 group-hover:text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
};

// Bottom action icons
const actionIcons = {
  pricing: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 flex-none text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.732 6.232a2.5 2.5 0 0 1 3.536 0 .75.75 0 1 0 1.06-1.06A4 4 0 0 0 6.5 8v.165c0 .364.034.728.1 1.085h-.35a.75.75 0 0 0 0 1.5H6.5V12h-.75a.75.75 0 0 0 0 1.5H7.5V15a.75.75 0 1 0 1.5 0v-1.5h2V15a.75.75 0 1 0 1.5 0v-1.5h.75a.75.75 0 0 0 0-1.5H12.5v-1.25h.75a.75.75 0 0 0 0-1.5h-.35c.066-.357.1-.72.1-1.085V8a4 4 0 0 0-4-4 .75.75 0 0 0 0 1.5 2.5 2.5 0 0 1 1.732.732Z" clip-rule="evenodd" /></svg>`,
  contact: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 flex-none text-gray-400"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`,
  docs: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 flex-none text-gray-400"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v4A1.5 1.5 0 0 0 2.5 10h6A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-6Zm11 2A1.5 1.5 0 0 0 12 6.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5h-4Zm-10 7A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 9.5 12h-6Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`,
};

const icons = {
  chevron: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 flex-none text-gray-400"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>`,
};

const config = {
  logo: {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp",
    alt: "Health Samurai",
    href: "/",
  },
  cta: {
    label: "Login",
    href: "https://aidbox.app/ui/portal#/signin",
  },
};

const toMenuId = (label: string, prefix = "") =>
  `${prefix}${label.toLowerCase().replace(/\s+/g, "-")}`;

// Get products from navigation
const products = navigation.find(n => n.label === "Products")?.children || [];

export function Header(): string {
  return (
    <header class="relative isolate z-10 bg-white" data-signals="{openMenu: '', mobileOpen: false}">
      <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div class="flex lg:flex-1">
          <a href={config.logo.href} class="-m-1.5 p-1.5">
            <span class="sr-only">{config.logo.alt}</span>
            <img src={config.logo.src} alt={config.logo.alt} class="h-10 w-auto" />
          </a>
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
          {/* Products dropdown */}
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
              data-on:click="$openMenu = $openMenu === 'products' ? '' : 'products'"
            >
              Products
              <span
                class="transition-transform duration-200"
                data-class:rotate-180="$openMenu === 'products'"
                dangerouslySetInnerHTML={{ __html: icons.chevron }}
              />
            </button>
          </div>

          {/* Simple links */}
          {navigation.filter(n => n.href).map((item) => (
            <a href={item.href} class="text-sm/6 font-semibold text-gray-900 hover:text-primary">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={config.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
          >
            {config.cta.label}
          </a>
        </div>
      </nav>

      {/* Products Dropdown Panel - Full width */}
      <div
        class="absolute left-0 top-full w-full bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-200"
        data-show="$openMenu === 'products'"
        style={{ display: "none" }}
      >
        <div class="relative bg-white">
          <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {products.map((product) => (
              <div class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <span dangerouslySetInnerHTML={{ __html: productIcons[product.label] || productIcons.Aidbox }} />
                </div>
                <a href={product.href} class="mt-6 block font-semibold text-gray-900">
                  {product.label}
                  <span class="absolute inset-0"></span>
                </a>
                {product.description && (
                  <p class="mt-1 text-gray-600">{product.description}</p>
                )}
              </div>
            ))}
          </div>
          {/* Bottom action bar */}
          <div class="bg-gray-50">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                <a href="/price" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <span dangerouslySetInnerHTML={{ __html: actionIcons.pricing }} />
                  View pricing
                </a>
                <a href="/contacts" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <span dangerouslySetInnerHTML={{ __html: actionIcons.contact }} />
                  Contact sales
                </a>
                <a href="https://docs.aidbox.app" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <span dangerouslySetInnerHTML={{ __html: actionIcons.docs }} />
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close */}
      <div
        class="fixed inset-0 z-[-1]"
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
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
        data-show="$mobileOpen"
        style={{ display: "none" }}
      >
        <div class="flex items-center justify-between">
          <a href={config.logo.href} class="-m-1.5 p-1.5">
            <span class="sr-only">{config.logo.alt}</span>
            <img src={config.logo.src} alt={config.logo.alt} class="h-10 w-auto" />
          </a>
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
              {/* Products accordion */}
              <div class="-mx-3">
                <button
                  type="button"
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  data-on:click="$openMenu = $openMenu === 'mobile-products' ? '' : 'mobile-products'"
                >
                  Products
                  <span
                    class="transition-transform duration-200"
                    data-class:rotate-180="$openMenu === 'mobile-products'"
                    dangerouslySetInnerHTML={{ __html: icons.chevron }}
                  />
                </button>
                <div
                  class="mt-2 space-y-2"
                  data-show="$openMenu === 'mobile-products'"
                  style={{ display: "none" }}
                >
                  {products.map((product) => (
                    <a
                      href={product.href}
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {product.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Simple links */}
              {navigation.filter(n => n.href).map((item) => (
                <a
                  href={item.href}
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
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
