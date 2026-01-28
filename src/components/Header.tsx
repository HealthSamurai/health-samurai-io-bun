import { navigation, type NavItem, type NavCategory } from "../data/navigation";

function NavDropdownSimple({ children }: { children: Array<{ label: string; href: string }> }): string {
  return (
    <div className="mega-menu-columns">
      <div className="mega-menu-column">
        {children.map((child) => (
          <a href={child.href} className="mega-menu-link">
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function NavDropdownWithCategories({ categories, cta }: { categories: NavCategory[]; cta?: NavItem["cta"] }): string {
  return (
    <div className="mega-menu-content">
      <div className="mega-menu-columns">
        {categories.map((cat) => (
          <div className="mega-menu-column">
            <div className="mega-menu-category">{cat.category}</div>
            {cat.items.map((item) => (
              <a href={item.href} className="mega-menu-link">
                <span className="mega-menu-link-title">{item.label}</span>
                {item.description && <span className="mega-menu-link-desc">{item.description}</span>}
              </a>
            ))}
          </div>
        ))}
      </div>
      {cta && (
        <a href={cta.href} className="mega-menu-cta">
          <div className="mega-menu-cta-content">
            <img src={cta.icon} alt="" className="mega-menu-cta-icon" />
            <div className="mega-menu-cta-text">
              <span className="mega-menu-cta-title">{cta.title}</span>
              <span className="mega-menu-cta-desc">{cta.description}</span>
            </div>
          </div>
          <svg className="mega-menu-cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        className="nav-link"
        data-on-click={`${closeOthers}; $${dropdownId} = !$${dropdownId}`}
        data-class={`{'nav-link--active': $${dropdownId}}`}
      >
        {item.label}
        <svg className="nav-link-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    );
  }

  return (
    <a href={item.href} className="nav-link">{item.label}</a>
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
      className="mega-menu"
      data-show={`$${dropdownId}`}
      style="display: none"
      data-on-click={closeOnClick}
    >
      <div className="mega-menu-inner">
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
    <header className="header" data-signals={`{${dropdownStates}, mobileMenuOpen: false}`}>
      <div className="header-inner">
        <a href="/" className="header-logo">
          <img src="/assets/images/logos/health-samurai.webp" alt="Health Samurai Logo" height={32} />
        </a>

        <nav className="nav">
          {navigation.map((item, index) => (
            <NavItemButton item={item} index={index} />
          ))}
        </nav>

        <div className="header-cta">
          <a href="https://aidbox.app/ui/portal#/signup" className="btn-signup">Sign up for free</a>
        </div>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          data-on-click="$mobileMenuOpen = !$mobileMenuOpen"
          data-class="{'mobile-menu-btn--active': $mobileMenuOpen}"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mega Menus - rendered outside header-inner for full-width */}
      {navigation.map((item, index) => (
        <MegaMenu item={item} index={index} />
      ))}

      {/* Mobile Menu */}
      <div className="mobile-nav" data-show="$mobileMenuOpen" style="display: none">
        {navigation.map((item) => (
          item.href ? (
            <a href={item.href} className="mobile-nav-link">{item.label}</a>
          ) : (
            <div className="mobile-nav-group">
              <div className="mobile-nav-label">{item.label}</div>
              {item.children?.map((child) => (
                <a href={child.href} className="mobile-nav-link mobile-nav-link--sub">{child.label}</a>
              ))}
              {item.categories?.map((cat) => (
                cat.items.map((subItem) => (
                  <a href={subItem.href} className="mobile-nav-link mobile-nav-link--sub">{subItem.label}</a>
                ))
              ))}
            </div>
          )
        ))}
        <a href="https://aidbox.app/ui/portal#/signup" className="mobile-nav-cta">Sign up for free</a>
      </div>
    </header>
  );
}
