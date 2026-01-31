import {
  logo,
  cta,
  icons,
  products,
  dropdownActions,
  navLinks,
  aboutLinks,
} from "../data/header";

export function Header(): string {
  return (
    <header class="relative isolate z-10 bg-white" data-signals="{productsOpen: false, aboutOpen: false, mobileOpen: false}">
      <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div class="flex lg:flex-1">
          <a href={logo.href} class="-m-1.5 p-1.5">
            <span class="sr-only">{logo.alt}</span>
            <img src={logo.src} alt={logo.alt} class="h-10 w-auto" />
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

        {/* Desktop navigation */}
        <div class="hidden lg:flex lg:gap-x-12">
          {/* Products dropdown */}
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            data-on:click="$productsOpen = !$productsOpen; $aboutOpen = false"
          >
            Products
            <span
              class="flex-none text-gray-400 transition-transform duration-200"
              data-class:rotate-180="$productsOpen"
              dangerouslySetInnerHTML={{ __html: icons.chevron }}
            />
          </button>

          {/* Simple links */}
          {navLinks.map((link) => (
            <a href={link.href} class="text-sm/6 font-semibold text-gray-900 hover:text-primary">
              {link.label}
            </a>
          ))}

          {/* About dropdown */}
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            data-on:click="$aboutOpen = !$aboutOpen; $productsOpen = false"
          >
            About
            <span
              class="flex-none text-gray-400 transition-transform duration-200"
              data-class:rotate-180="$aboutOpen"
              dangerouslySetInnerHTML={{ __html: icons.chevron }}
            />
          </button>
        </div>

        {/* CTA */}
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={cta.href} class="text-sm/6 font-semibold text-gray-900">
            {cta.label} <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: "&rarr;" }} />
          </a>
        </div>
      </nav>

      {/* Products dropdown panel */}
      <div
        class="absolute left-0 top-full w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-200"
        data-show="$productsOpen"
        style={{ display: "none" }}
      >
        <div class="relative bg-white">
          <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {products.map((product) => (
              <div class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <span dangerouslySetInnerHTML={{ __html: product.icon }} />
                </div>
                <a href={product.href} class="mt-6 block font-semibold text-gray-900">
                  {product.label}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom actions */}
          <div class="bg-gray-50">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                {dropdownActions.map((action) => (
                  <a
                    href={action.href}
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <span dangerouslySetInnerHTML={{ __html: action.icon }} />
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About dropdown panel */}
      <div
        class="absolute left-0 top-full w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-200"
        data-show="$aboutOpen"
        style={{ display: "none" }}
      >
        <div class="relative bg-white">
          <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {aboutLinks.map((item) => (
              <div class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                <a href={item.href} class="mt-6 block font-semibold text-gray-900">
                  {item.label}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      <div
        class="fixed inset-0 z-[-1]"
        data-show="$productsOpen || $aboutOpen"
        data-on:click="$productsOpen = false; $aboutOpen = false"
        style={{ display: "none" }}
      />

      {/* Mobile menu overlay */}
      <div
        class="fixed inset-0 z-40 bg-gray-900/80 lg:hidden"
        data-show="$mobileOpen"
        data-on:click="$mobileOpen = false"
        style={{ display: "none" }}
      />

      {/* Mobile menu panel */}
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
        data-show="$mobileOpen"
        style={{ display: "none" }}
      >
        <div class="flex items-center justify-between">
          <a href={logo.href} class="-m-1.5 p-1.5">
            <span class="sr-only">{logo.alt}</span>
            <img src={logo.src} alt={logo.alt} class="h-10 w-auto" />
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
                  data-on:click="$productsOpen = !$productsOpen"
                >
                  Products
                  <span
                    class="flex-none transition-transform duration-200"
                    data-class:rotate-180="$productsOpen"
                    dangerouslySetInnerHTML={{ __html: icons.chevron }}
                  />
                </button>
                <div
                  class="mt-2 space-y-2"
                  data-show="$productsOpen"
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
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}

              {/* About accordion */}
              <div class="-mx-3">
                <button
                  type="button"
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  data-on:click="$aboutOpen = !$aboutOpen"
                >
                  About
                  <span
                    class="flex-none transition-transform duration-200"
                    data-class:rotate-180="$aboutOpen"
                    dangerouslySetInnerHTML={{ __html: icons.chevron }}
                  />
                </button>
                <div
                  class="mt-2 space-y-2"
                  data-show="$aboutOpen"
                  style={{ display: "none" }}
                >
                  {aboutLinks.map((item) => (
                    <a
                      href={item.href}
                      class="group flex items-center gap-x-3 rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <span class="flex size-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div class="py-6">
              <a
                href={cta.href}
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
