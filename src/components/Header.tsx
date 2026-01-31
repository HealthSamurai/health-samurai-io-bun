import {
  logo,
  cta,
  icons,
  products,
  dropdownActions,
  navLinks,
  aboutLinks,
} from "../data/header";
import { SearchButton, MobileSearchButton, SearchModal } from "./Search";
import { ThemeToggle } from "./ui/ThemeToggle";
import type { Context } from "../context";

type HeaderProps = {
  ctx?: Context;
};

export function Header({ ctx }: HeaderProps = {}): string {
  const user = ctx?.user;
  return (
    <header class="relative isolate z-10 bg-white dark:bg-dark-bg transition-colors" data-signals="{productsOpen: false, aboutOpen: false, mobileOpen: false, searchOpen: false, searchQuery: ''}">
      <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div class="flex lg:flex-1">
          <a href={logo.href} class="-m-1.5 p-1.5">
            <span class="sr-only">{logo.alt}</span>
            <img src={logo.src} alt={logo.alt} class="h-10 w-auto" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div class="flex items-center gap-x-2 lg:hidden">
          <MobileSearchButton />
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-dark-text-light"
            data-on:click="$mobileOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <span>{icons.menu}</span>
          </button>
        </div>

        {/* Desktop navigation */}
        <div class="hidden lg:flex lg:gap-x-12">
          {/* Products dropdown */}
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-dark-text"
            data-on:click="$productsOpen = !$productsOpen; $aboutOpen = false"
          >
            Products
            <span
              class="flex-none text-gray-400 transition-transform duration-200"
              data-class:rotate-180="$productsOpen"
            >
              {icons.chevron}
            </span>
          </button>

          {/* Simple links */}
          {navLinks.map((link) => (
            <a href={link.href} class="text-sm/6 font-semibold text-gray-900 dark:text-dark-text hover:text-primary">
              {link.label}
            </a>
          ))}

          {/* About dropdown */}
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-dark-text"
            data-on:click="$aboutOpen = !$aboutOpen; $productsOpen = false"
          >
            About
            <span
              class="flex-none text-gray-400 transition-transform duration-200"
              data-class:rotate-180="$aboutOpen"
            >
              {icons.chevron}
            </span>
          </button>
        </div>

        {/* Search + Theme + CTA/User */}
        <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
          <SearchButton />
          <ThemeToggle />
          {user ? (
            <div class="relative" data-signals="{userMenuOpen: false}">
              <button
                type="button"
                class="flex items-center gap-x-2 text-sm/6 font-semibold text-gray-900"
                data-on:click="$userMenuOpen = !$userMenuOpen"
              >
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt="" class="size-8 rounded-full bg-gray-50" />
                ) : (
                  <span class="flex size-8 items-center justify-center rounded-full bg-primary text-white text-xs font-medium">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                )}
                <span class="hidden xl:block">{user.username}</span>
                <span
                  class="flex-none text-gray-400 transition-transform duration-200"
                  data-class:rotate-180="$userMenuOpen"
                >
                  {icons.chevron}
                </span>
              </button>
              {/* User dropdown menu */}
              <div
                class="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-900/5"
                data-show="$userMenuOpen"
                style={{ display: "none" }}
              >
                <div class="px-4 py-2 border-b border-gray-100">
                  <p class="text-sm font-medium text-gray-900">{user.username}</p>
                  <p class="text-xs text-gray-500">{user.email}</p>
                </div>
                {user.email.endsWith("@health-samurai.io") && (
                  <a
                    href="/admin/analytics"
                    class="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <svg class="size-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                    Admin
                  </a>
                )}
                <form method="POST" action="/api/logout">
                  <button
                    type="submit"
                    class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Sign out
                  </button>
                </form>
              </div>
              {/* Click outside to close */}
              <div
                class="fixed inset-0 z-[-1]"
                data-show="$userMenuOpen"
                data-on:click="$userMenuOpen = false"
                style={{ display: "none" }}
              />
            </div>
          ) : (
            <a href="/login" class="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>

      {/* Products dropdown panel */}
      <div
        class="absolute left-0 top-full w-full overflow-hidden bg-white dark:bg-dark-bg shadow-lg ring-1 ring-gray-900/5 dark:ring-dark-border transition-all duration-200"
        data-show="$productsOpen"
        style={{ display: "none" }}
      >
        <div class="relative bg-white dark:bg-dark-bg">
          <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {products.map((product) => (
              <div class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50 dark:hover:bg-dark-bg-alt">
                <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 dark:bg-dark-bg-alt group-hover:bg-white dark:group-hover:bg-dark-bg">
                  <span>{product.icon}</span>
                </div>
                <a href={product.href} class="mt-6 block font-semibold text-gray-900 dark:text-dark-text">
                  {product.label}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600 dark:text-dark-text-light">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom actions */}
          <div class="bg-gray-50 dark:bg-dark-bg-alt">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="grid grid-cols-3 divide-x divide-gray-900/5 dark:divide-dark-border border-x border-gray-900/5 dark:border-dark-border">
                {dropdownActions.map((action) => (
                  <a
                    href={action.href}
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg"
                  >
                    <span>{action.icon}</span>
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
        class="absolute left-0 top-full w-full overflow-hidden bg-white dark:bg-dark-bg shadow-lg ring-1 ring-gray-900/5 dark:ring-dark-border transition-all duration-200"
        data-show="$aboutOpen"
        style={{ display: "none" }}
      >
        <div class="relative bg-white dark:bg-dark-bg">
          <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {aboutLinks.map((item) => (
              <div class="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50 dark:hover:bg-dark-bg-alt">
                <div class="flex size-11 items-center justify-center rounded-lg bg-gray-50 dark:bg-dark-bg-alt group-hover:bg-white dark:group-hover:bg-dark-bg">
                  <span>{item.icon}</span>
                </div>
                <a href={item.href} class="mt-6 block font-semibold text-gray-900 dark:text-dark-text">
                  {item.label}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600 dark:text-dark-text-light">{item.description}</p>
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
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-dark-bg p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-dark-border lg:hidden"
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
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-dark-text-light"
            data-on:click="$mobileOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <span>{icons.close}</span>
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-dark-border">
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
                  >
                    {icons.chevron}
                  </span>
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
                  >
                    {icons.chevron}
                  </span>
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
                      <span class="flex size-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div class="py-6">
              {/* Theme toggle for mobile */}
              <button
                type="button"
                onclick="theme.toggle()"
                class="-mx-3 flex w-full items-center gap-x-3 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg-alt"
              >
                {/* Sun icon */}
                <svg class="size-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/* Moon icon */}
                <svg class="size-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span class="dark:hidden">Dark mode</span>
                <span class="hidden dark:inline">Light mode</span>
              </button>

              {user ? (
                <div class="border-t border-gray-200 dark:border-dark-border pt-4 mt-4">
                  <div class="flex items-center gap-x-3 px-3 py-2">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt="" class="size-10 rounded-full bg-gray-50 dark:bg-dark-bg-alt" />
                    ) : (
                      <span class="flex size-10 items-center justify-center rounded-full bg-primary text-white text-sm font-medium">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-dark-text">{user.username}</p>
                      <p class="text-xs text-gray-500 dark:text-dark-text-muted">{user.email}</p>
                    </div>
                  </div>
                  {user.email.endsWith("@health-samurai.io") && (
                    <a
                      href="/admin/analytics"
                      class="-mx-3 flex items-center gap-x-2 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg-alt"
                    >
                      <svg class="size-5 text-gray-400 dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                      </svg>
                      Admin
                    </a>
                  )}
                  <form method="POST" action="/api/logout" class="mt-2">
                    <button
                      type="submit"
                      class="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base/7 font-semibold text-gray-900 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg-alt"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              ) : (
                <a
                  href="/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg-alt mt-4"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search modal */}
      <SearchModal />
    </header>
  );
}
