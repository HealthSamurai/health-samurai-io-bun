import type { Context, SessionUser } from "../context";

type NavItem = {
  name: string;
  href: string;
  icon: string;
};

const navigation: NavItem[] = [
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: `<path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" stroke-linecap="round" stroke-linejoin="round" />`,
  },
  {
    name: "Forms",
    href: "/admin/forms",
    icon: `<path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" stroke-linecap="round" stroke-linejoin="round" />`,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: `<path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" stroke-linecap="round" stroke-linejoin="round" />`,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: `<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke-linecap="round" stroke-linejoin="round" />`,
  },
];

function NavIcon({ icon, isActive }: { icon: string; isActive: boolean }): string {
  const colorClass = isActive
    ? "text-primary"
    : "text-gray-400 group-hover:text-primary";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 shrink-0 ${colorClass}">${icon}</svg>`;
}

function NavLink({ item, currentPath }: { item: NavItem; currentPath: string }): string {
  const isActive = currentPath === item.href || currentPath.startsWith(item.href + "?");
  const linkClass = isActive
    ? "bg-gray-50 text-primary"
    : "text-gray-700 hover:bg-gray-50 hover:text-primary";

  return (
    <li>
      <a href={item.href} class={`group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold ${linkClass}`}>
        {NavIcon({ icon: item.icon, isActive })}
        {item.name}
      </a>
    </li>
  );
}

function UserProfile({ user }: { user: SessionUser }): string {
  const avatarUrl = user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}&background=c9362b&color=fff`;

  return (
    <div class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900">
      <img src={avatarUrl} alt="" class="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5" />
      <div class="flex-1 min-w-0">
        <div class="truncate">{user.username}</div>
        <div class="text-xs text-gray-500 truncate">{user.email}</div>
      </div>
      <form method="POST" action="/api/logout">
        <button type="submit" class="text-gray-400 hover:text-gray-600" title="Sign out">
          <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
        </button>
      </form>
    </div>
  );
}

function MobileUserProfile({ user }: { user: SessionUser }): string {
  const avatarUrl = user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}&background=c9362b&color=fff`;

  return (
    <a href="/admin/settings">
      <span class="sr-only">Your profile</span>
      <img src={avatarUrl} alt="" class="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5" />
    </a>
  );
}

function Sidebar({ currentPath, user }: { currentPath: string; user: SessionUser }): string {
  return (
    <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div class="flex h-16 shrink-0 items-center">
        <a href="/">
          <img
            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
            alt="Health Samurai"
            class="h-8 w-auto"
          />
        </a>
        <span class="ml-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Admin</span>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              {navigation.map((item) => NavLink({ item, currentPath }))}
            </ul>
          </li>
          <li>
            <div class="text-xs/6 font-semibold text-gray-400">Quick Links</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <a href="/" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary">
                  <span class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-primary group-hover:text-primary">
                    <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                  <span class="truncate">View Site</span>
                </a>
              </li>
              <li>
                <a href="/blog" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary">
                  <span class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-primary group-hover:text-primary">B</span>
                  <span class="truncate">Blog</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            {UserProfile({ user })}
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MobileSidebar({ currentPath, user }: { currentPath: string; user: SessionUser }): string {
  return (
    <div
      data-show="$sidebarOpen"
      class="relative z-50 lg:hidden"
      style="display: none"
    >
      {/* Backdrop */}
      <div
        data-show="$sidebarOpen"
        class="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear"
        data-on:click="$sidebarOpen = false"
      ></div>

      <div class="fixed inset-0 flex">
        {/* Sidebar panel */}
        <div
          data-show="$sidebarOpen"
          class="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out"
        >
          {/* Close button */}
          <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
            <button
              type="button"
              class="-m-2.5 p-2.5"
              data-on:click="$sidebarOpen = false"
            >
              <span class="sr-only">Close sidebar</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          {/* Sidebar content */}
          <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
            <div class="flex h-16 shrink-0 items-center">
              <a href="/">
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
                  alt="Health Samurai"
                  class="h-8 w-auto"
                />
              </a>
              <span class="ml-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Admin</span>
            </div>
            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                    {navigation.map((item) => NavLink({ item, currentPath }))}
                  </ul>
                </li>
                <li>
                  <div class="text-xs/6 font-semibold text-gray-400">Quick Links</div>
                  <ul role="list" class="-mx-2 mt-2 space-y-1">
                    <li>
                      <a href="/" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary">
                        <span class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-primary group-hover:text-primary">
                          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </span>
                        <span class="truncate">View Site</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary">
                        <span class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-primary group-hover:text-primary">B</span>
                        <span class="truncate">Blog</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeader({ title, user }: { title: string; user: SessionUser }): string {
  return (
    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900"
        data-on:click="$sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="flex-1 text-sm/6 font-semibold text-gray-900">{title}</div>
      {MobileUserProfile({ user })}
    </div>
  );
}

export type AdminLayoutProps = {
  title: string;
  description?: string;
  currentPath: string;
  children: string;
  ctx?: Context;
  devMode?: boolean;
};

/**
 * Admin layout with sidebar navigation
 * Shares same base structure as Layout (head, fonts, scripts)
 */
export function AdminLayout({ title, description, currentPath, children, ctx, devMode }: AdminLayoutProps): string {
  const fullTitle = `${title} | Admin | Health Samurai`;
  const metaDescription = description || "Health Samurai Admin";

  // User must exist for admin pages (enforced by server middleware)
  const user = ctx?.user;
  if (!user) {
    return "<html><body>Unauthorized</body></html>";
  }

  return (
    <html lang="en" class="h-full bg-gray-50">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <title>{fullTitle}</title>

        {/* Preconnects for performance - same as main Layout */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://unpkg.com" />

        {/* Fonts - same as main Layout */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Tailwind CSS - same as main Layout */}
        <link rel="stylesheet" href="/styles/main.css" />

        {/* htmx - same as main Layout */}
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>

        {/* Datastar - same as main Layout */}
        <script type="module" src="https://cdn.jsdelivr.net/gh/starfederation/datastar@1.0.0-RC.7/bundles/datastar.js"></script>

        {/* Favicon - same as main Layout */}
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png" />
        <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon.png" />
      </head>
      <body class="h-full" data-signals="{sidebarOpen: false}">
        {/* Mobile sidebar */}
        {MobileSidebar({ currentPath, user })}

        {/* Static sidebar for desktop */}
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {Sidebar({ currentPath, user })}
        </div>

        {/* Mobile header */}
        {MobileHeader({ title, user })}

        {/* Main content */}
        <main class="lg:pl-72">
          <div class="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
        </main>

        {/* Dev mode hot reload - same as main Layout */}
        {devMode && (
          <script>{`let _id;setInterval(async()=>{const r=await fetch("/__ping").catch(()=>null);const n=await r?.text();if(_id&&n&&_id!==n)location.reload();if(n)_id=n},1000)`}</script>
        )}
      </body>
    </html>
  );
}
