import { navigation, type NavItem } from "../data/navigation";

function NavDropdown({ item }: { item: NavItem }): string {
  if (!item.children) return "";

  return (
    <div className="nav-dropdown">
      {item.children.map((child) => (
        <a href={child.href} className="nav-dropdown-item">
          <span className="nav-dropdown-title">{child.label}</span>
        </a>
      ))}
    </div>
  );
}

function NavItemComponent({ item }: { item: NavItem }): string {
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="nav-item">
        <button className="nav-link">
          {item.label}
          <svg className="nav-link-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <NavDropdown item={item} />
      </div>
    );
  }

  return (
    <div className="nav-item">
      <a href={item.href} className="nav-link">{item.label}</a>
    </div>
  );
}

export function Header(): string {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-logo">
          <img src="/assets/images/logos/health-samurai.webp" alt="Health Samurai Logo" height={32} />
        </a>

        <nav className="nav">
          {navigation.map((item) => (
            <NavItemComponent item={item} />
          ))}
        </nav>

        <div className="header-cta">
          <a href="https://aidbox.app/ui/portal#/signup" className="btn-signup">Sign up for free</a>
        </div>

        <button className="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
