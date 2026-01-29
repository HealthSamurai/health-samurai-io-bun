import { navigation, type NavItem, type NavCategory } from "../data/navigation";

function NavDropdownSimple({ children }: { children: Array<{ label: string; href: string }> }): string {
  return (
    <div className="flex gap-12">
      <div className="min-w-[180px] flex flex-col gap-3">
        {children.map((child) => (
          <a href={child.href} className="text-[15px] text-[#333333] hover:text-primary">
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function NavDropdownWithCategories({ categories, cta }: { categories: NavCategory[]; cta?: NavItem["cta"] }): string {
  return (
    <div className="flex gap-10">
      <div className="flex gap-12 flex-1">
        {categories.map((cat) => (
          <div className="min-w-[180px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#999999] mb-4">
              {cat.category}
            </div>
            {cat.items.map((item) => (
              <a href={item.href} className="flex flex-col gap-1 py-2 text-[#333333] hover:text-primary">
                <span className="text-[15px] font-semibold">{item.label}</span>
                {item.description && <span className="text-[12px] text-[#666666]">{item.description}</span>}
              </a>
            ))}
          </div>
        ))}
      </div>
      {cta && (
        <a href={cta.href} className="bg-white border border-[#eee] rounded-lg p-4 min-w-[260px] hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <img src={cta.icon} alt="" className="h-10 w-10" />
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-semibold text-[#333333]">{cta.title}</span>
              <span className="text-[12px] text-[#666666]">{cta.description}</span>
            </div>
          </div>
          <svg className="mt-3 h-4 w-4 text-[#333333]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
}

function NavItemButton({ item, index }: { item: NavItem; index: number }): string {
  const hasDropdown = item.children || item.categories;
  const dropdownId = `nav-${index}`;

  if (hasDropdown) {
    // Close all other dropdowns when clicking this one
    const closeOthers = navigation
      .map((_, i) => i !== index ? `$nav-${i} = false` : null)
      .filter(Boolean)
      .join("; ");

    return (
      <button
        className="flex items-center gap-2 px-5 py-[21px] text-[15px] font-normal text-[#333333] hover:text-primary"
        data-on-click={`${closeOthers}; $${dropdownId} = !$${dropdownId}`}
        data-class={`{'text-primary': $${dropdownId}}`}
      >
        {item.label}
        <svg
          className="h-[10px] w-[10px] opacity-50 transition-transform duration-200"
          data-class={`{'rotate-180': $${dropdownId}}`}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    );
  }

  return (
    <a href={item.href} className="flex items-center gap-2 px-5 py-[21px] text-[15px] font-normal text-[#333333] hover:text-primary">
      {item.label}
    </a>
  );
}

function MegaMenu({ item, index }: { item: NavItem; index: number }): string {
  const hasDropdown = item.children || item.categories;
  if (!hasDropdown) return "";

  const dropdownId = `nav-${index}`;
  // Close this dropdown when clicking inside it (on a link)
  const closeOnClick = `$${dropdownId} = false`;

  return (
    <div
      className="absolute left-0 right-0 bg-[#f8f9fb] border-t border-[#eee]"
      data-show={`$${dropdownId}`}
      style="display: none"
      data-on-click={closeOnClick}
    >
      <div className="max-w-[1300px] mx-auto px-8 py-8">
        {item.categories ? (
          <NavDropdownWithCategories categories={item.categories} cta={item.cta} />
        ) : (
          <NavDropdownSimple children={item.children!} />
        )}
      </div>
    </div>
  );
}

export function Header(): string {
  // Initialize all dropdown states
  const dropdownStates = navigation
    .map((_, i) => `'nav-${i}': false`)
    .join(", ");

  // Close all dropdowns
  const closeAll = navigation
    .map((_, i) => `$nav-${i} = false`)
    .join("; ");

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b border-[#eee] shadow-[rgba(53,59,80,0.1)_0px_0px_2px_0px]" data-signals={`{${dropdownStates}, mobileMenuOpen: false}`}>
      <div className="mx-auto flex items-center justify-between max-w-[1300px] h-[57px] sm:h-[65px] px-8">
        <a href="/" className="flex items-center">
          <img src="/assets/images/logos/health-samurai.webp" alt="Health Samurai Logo" className="h-8 sm:h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center">
          {navigation.map((item, index) => (
            <NavItemButton item={item} index={index} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="https://aidbox.app/ui/portal#/signup" className="text-[15px] font-semibold text-[#333333] hover:text-primary">Sign up for free</a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-[5px]"
          aria-label="Toggle menu"
          data-on-click="$mobileMenuOpen = !$mobileMenuOpen"
          data-class="{'opacity-60': $mobileMenuOpen}"
        >
          <span className="block h-[2px] w-6 bg-[#333333]"></span>
          <span className="block h-[2px] w-6 bg-[#333333]"></span>
          <span className="block h-[2px] w-6 bg-[#333333]"></span>
        </button>
      </div>

      {/* Mega Menus - rendered outside header-inner for full-width */}
      {navigation.map((item, index) => (
        <MegaMenu item={item} index={index} />
      ))}

      {/* Mobile Menu */}
      <div className="lg:hidden border-t border-[#eee] bg-white" data-show="$mobileMenuOpen" style="display: none">
        {navigation.map((item) => (
          item.href ? (
            <a href={item.href} className="block px-8 py-4 text-[15px] text-[#333333] hover:text-primary">{item.label}</a>
          ) : (
            <div className="px-8 py-3">
              <div className="text-[12px] font-semibold uppercase tracking-[0.5px] text-[#999999] mb-2">{item.label}</div>
              {item.children?.map((child) => (
                <a href={child.href} className="block py-2 text-[14px] text-[#333333] hover:text-primary">{child.label}</a>
              ))}
              {item.categories?.map((cat) => (
                cat.items.map((subItem) => (
                  <a href={subItem.href} className="block py-2 text-[14px] text-[#333333] hover:text-primary">{subItem.label}</a>
                ))
              ))}
            </div>
          )
        ))}
        <a href="https://aidbox.app/ui/portal#/signup" className="block px-8 py-4 text-[15px] font-semibold text-[#333333] hover:text-primary">Sign up for free</a>
      </div>
    </header>
  );
}
