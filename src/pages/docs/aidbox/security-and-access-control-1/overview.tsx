export const metadata = {
  title: "Overview | Aidbox Docs",
  description: "Comprehensive access control for healthcare applications with identity management, authentication, authorization, and audit logging.",
  fullPage: true, // Skip global Layout wrapper - this page has its own layout
};

// SVG Icons
const ChevronIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4L5 6L7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ChevronRightIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L6 5L4 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CopyIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const MenuIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="3" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="13" r="1.5" fill="currentColor"/></svg>`;
const ArrowLeftIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ArrowRightIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const HamburgerIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const SearchIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M14 14L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

// Sidebar navigation structure
const sidebarNav = [
  { label: "Settings", href: "#" },
  { label: "Configure Aidbox and Multibox", href: "#" },
  { label: "Init Bundle", href: "#" },
  {
    category: "API",
    items: [
      { label: "API Overview", href: "#" },
      { label: "REST API", href: "#", hasChildren: true },
      { label: "Bulk API", href: "#", hasChildren: true },
      { label: "Batch/Transaction", href: "#" },
      { label: "GraphQL API", href: "#" },
      { label: "Other APIs", href: "#", hasChildren: true },
    ],
  },
  {
    category: "ACCESS CONTROL",
    items: [
      { label: "Overview", href: "/docs/aidbox/security-and-access-control-1/overview", active: true },
      { label: "Identity Management", href: "#", hasChildren: true },
      { label: "Authentication", href: "#", hasChildren: true },
      { label: "Authorization", href: "#", hasChildren: true },
      { label: "Audit and Logging", href: "#" },
    ],
  },
  {
    category: "ARTIFACT REGISTRY",
    items: [
      { label: "Artifact Registry overview", href: "#" },
      { label: "StructureDefinition", href: "#" },
      { label: "SearchParameter", href: "#", external: true },
      { label: "CodeSystem", href: "#" },
      { label: "ValueSet", href: "#" },
      { label: "ConceptMap", href: "#" },
    ],
  },
  {
    category: "TERMINOLOGY MODULE",
    items: [
      { label: "Terminology Overview", href: "#" },
    ],
  },
];

// Render sidebar category section
function renderSidebarCategory(category: { category: string; items: any[] }): string {
  return `
    <div class="docs-sidebar-category">
      <div class="docs-sidebar-category-header">${category.category}</div>
      <div class="docs-sidebar-category-items">
        ${category.items.map((item) => `
          <a href="${item.href}" class="docs-sidebar-link ${item.active ? 'docs-sidebar-link--active' : ''}">
            <span>${item.label}</span>
            ${item.hasChildren ? `<span class="docs-sidebar-arrow">${ChevronRightIcon}</span>` : ''}
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// Render simple sidebar item
function renderSidebarItem(item: { label: string; href: string; hasChildren?: boolean }): string {
  return `
    <a href="${item.href}" class="docs-sidebar-link">
      <span>${item.label}</span>
      ${item.hasChildren ? `<span class="docs-sidebar-arrow">${ChevronRightIcon}</span>` : ''}
    </a>
  `;
}

export default function AccessControlOverviewPage(): string {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

        {/* Tailwind CSS */}
        <link rel="stylesheet" href="/styles/main.css" />

        {/* Datastar */}
        <script type="module" src="/assets/js/datastar.js"></script>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/images/logos/aidbox-mini.svg" />
      </head>
      <body>
        <div className="docs-page">
        {/* Header specific to docs */}
        <header className="docs-header">
          <div className="docs-header-inner">
            {/* Mobile hamburger menu - hidden on desktop */}
            <button className="docs-mobile-menu-btn" aria-label="Open navigation menu">
              <span dangerouslySetInnerHTML={{ __html: HamburgerIcon }} />
            </button>

            <a href="/docs/aidbox" className="docs-logo">
              <img
                src="/assets/images/docs-aidbox-security-and-access-control-1-overview/aidbox-logo.jpg"
                alt="Aidbox Docs"
                className="docs-logo-img"
              />
              <span className="docs-logo-text">Aidbox Docs</span>
            </a>

            <nav className="docs-nav">
              <div className="docs-nav-item">
                <button className="docs-nav-btn">
                  Product
                  <span dangerouslySetInnerHTML={{ __html: ChevronIcon }} />
                </button>
              </div>
              <a href="/docs/aidbox/getting-started/run-aidbox-locally" className="docs-nav-link">Run Aidbox locally</a>
              <a href="/docs/aidbox/getting-started/run-aidbox-in-sandbox" className="docs-nav-link">Run Aidbox in Sandbox</a>
              <a href="/docs/aidbox/examples" className="docs-nav-link">Examples</a>
            </nav>

            <div className="docs-header-actions">
              <div className="docs-search">
                <span className="docs-search-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="docs-search-text">Ask or search...</span>
                <span className="docs-search-shortcut">Ctrl K</span>
              </div>

              <a href="https://aidbox.app/ui/portal#/signin" className="docs-login-btn">Login</a>

              {/* Mobile search icon - hidden on desktop */}
              <button className="docs-mobile-search-btn" aria-label="Search">
                <span dangerouslySetInnerHTML={{ __html: SearchIcon }} />
              </button>

              {/* Mobile more button - hidden on desktop */}
              <button className="docs-mobile-more-btn" aria-label="More options">
                <span dangerouslySetInnerHTML={{ __html: MenuIcon }} />
              </button>
            </div>
          </div>
        </header>

        <div className="docs-layout">
          {/* Left Sidebar */}
          <aside className="docs-sidebar">
            <nav className="docs-sidebar-nav" dangerouslySetInnerHTML={{
              __html: sidebarNav.map((item) => {
                if ('category' in item) {
                  return renderSidebarCategory(item as { category: string; items: any[] });
                }
                return renderSidebarItem(item as { label: string; href: string; hasChildren?: boolean });
              }).join('')
            }} />
          </aside>

          {/* Main Content */}
          <main className="docs-main">
            {/* Breadcrumb */}
            <div className="docs-breadcrumb">
              <div className="docs-breadcrumb-path">
                <span className="docs-breadcrumb-tag">Access Control</span>
              </div>
              <div className="docs-breadcrumb-actions">
                <button className="docs-action-btn">
                  <span dangerouslySetInnerHTML={{ __html: CopyIcon }} />
                  Copy Page
                </button>
                <button className="docs-action-btn">
                  <span dangerouslySetInnerHTML={{ __html: MenuIcon }} />
                </button>
              </div>
            </div>

            {/* Article */}
            <article className="docs-article">
              <h1 className="docs-h1">Overview</h1>
              <p className="docs-description docs-description--bordered">
                Comprehensive access control for healthcare applications with identity management, authentication, authorization, and audit logging.
              </p>

              {/* Intro Content */}
              <div className="docs-section">
                <p>
                  Aidbox offers everything you need for secure identity, authentication, and auditing.
                </p>

                <ul className="docs-list">
                  <li>
                    <a href="/docs/aidbox/access-control/identity-management" className="docs-link">Identity Management</a> - Use Aidbox's built-in provider or plug in Google, Okta, or any OIDC-compliant service
                  </li>
                  <li>
                    <a href="/docs/aidbox/access-control/authentication" className="docs-link">Authentication</a> - Supports Basic, OAuth 2.0 & OpenID Connect flows, JWT-based auth and Single Sign-On through external OAuth 2.0 providers.
                  </li>
                  <li>
                    <a href="/docs/aidbox/access-control/authorization" className="docs-link">Authorization</a> - Control access with Access Policies, SMART scopes Access Control frameworks, Security Labels framework and Scoped APIs (Patient API, Organization API, Compartments API).
                  </li>
                  <li>
                    <a href="/docs/aidbox/access-control/audit-and-logging" className="docs-link">Audit & Logging</a> - Track activity with FHIR BALP (Basic Audit Logging Profile) for Audit Events and OpenTelemetry for structured logging.
                  </li>
                </ul>
              </div>

              {/* Tutorials Section */}
              <div className="docs-section">
                <p>
                  Want to try it out? Check out our tutorials:
                </p>

                <ul className="docs-list">
                  <li>
                    <a href="/docs/aidbox/tutorials/security-access-control-tutorials/managing-admin-access-to-the-aidbox-ui-using-okta-groups" className="docs-link">Managing Admin Access to the Aidbox UI Using Okta Groups</a>
                  </li>
                  <li>
                    <a href="/docs/aidbox/access-control/authorization/smart-on-fhir/example-smart-app-launch-using-aidbox-and-keycloak" className="docs-link">SMART App Launch using Aidbox and Keycloak</a>
                  </li>
                  <li>
                    <a href="/docs/aidbox/tutorials/security-access-control-tutorials/how-to-configure-audit-log" className="docs-link">How to configure Audit Log</a>
                  </li>
                </ul>
              </div>

              {/* Prev/Next Navigation */}
              <nav className="docs-prev-next">
                <a href="/docs/aidbox/api/batch-upsert" className="docs-prev-next-link docs-prev-next-link--prev">
                  <span className="docs-prev-next-arrow" dangerouslySetInnerHTML={{ __html: ArrowLeftIcon }} />
                  <div className="docs-prev-next-content">
                    <span className="docs-prev-next-label">Previous</span>
                    <span className="docs-prev-next-title">Batch Upsert</span>
                  </div>
                </a>
                <a href="/docs/aidbox/access-control/identity-management" className="docs-prev-next-link docs-prev-next-link--next">
                  <div className="docs-prev-next-content">
                    <span className="docs-prev-next-label">Next</span>
                    <span className="docs-prev-next-title">Identity Management</span>
                  </div>
                  <span className="docs-prev-next-arrow" dangerouslySetInnerHTML={{ __html: ArrowRightIcon }} />
                </a>
              </nav>

              {/* Last Updated */}
              <div className="docs-last-updated">
                Last updated: 1 month ago
              </div>
            </article>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="docs-toc">
            <button className="docs-feedback-btn">Send feedback</button>
            {/* No TOC items for this simple page */}
            <div className="docs-theme-switcher-bottom">
              <button className="docs-theme-btn docs-theme-btn--active" title="Light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 2V3M8 13V14M2 8H3M13 8H14M4 4L4.5 4.5M11.5 11.5L12 12M4 12L4.5 11.5M11.5 4.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="docs-theme-btn" title="System">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 14H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="docs-theme-btn" title="Dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10A6 6 0 1 1 6 3a5 5 0 0 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="docs-footer">
          <div className="docs-footer-inner">
            <a href="https://www.health-samurai.io/" className="docs-footer-link">© Health Samurai</a>
            <div className="docs-footer-social">
              <a href="https://www.linkedin.com/company/health-samurai" className="docs-footer-icon" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 2H3.5C2.67 2 2 2.67 2 3.5V16.5C2 17.33 2.67 18 3.5 18H16.5C17.33 18 18 17.33 18 16.5V3.5C18 2.67 17.33 2 16.5 2ZM6.75 15.5H4.5V8H6.75V15.5ZM5.62 7.03C4.89 7.03 4.31 6.44 4.31 5.72C4.31 5 4.89 4.41 5.62 4.41C6.34 4.41 6.93 5 6.93 5.72C6.93 6.44 6.35 7.03 5.62 7.03ZM15.5 15.5H13.25V11.88C13.25 11.05 13.23 9.99 12.09 9.99C10.93 9.99 10.75 10.88 10.75 11.82V15.5H8.5V8H10.66V8.97H10.69C10.98 8.42 11.68 7.83 12.73 7.83C15.01 7.83 15.5 9.34 15.5 11.31V15.5Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@HealthSamurai" className="docs-footer-icon" title="YouTube">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.77 6.52C17.61 5.93 17.14 5.47 16.56 5.31C15.49 5 10 5 10 5C10 5 4.51 5 3.44 5.31C2.86 5.47 2.39 5.93 2.23 6.52C1.92 7.58 1.92 9.78 1.92 9.78C1.92 9.78 1.92 11.97 2.23 13.04C2.39 13.63 2.86 14.09 3.44 14.25C4.51 14.56 10 14.56 10 14.56C10 14.56 15.49 14.56 16.56 14.25C17.14 14.09 17.61 13.63 17.77 13.04C18.08 11.97 18.08 9.78 18.08 9.78C18.08 9.78 18.08 7.58 17.77 6.52ZM8.27 12.02V7.53L12.5 9.78L8.27 12.02Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <span className="docs-footer-sep">•</span>
            <a href="https://www.health-samurai.io/contacts" className="docs-footer-link">Contact us</a>
            <span className="docs-footer-sep">•</span>
            <a href="https://github.com/HealthSamurai/documentation" className="docs-footer-link">Docs source (980941d)</a>
            <span className="docs-footer-sep">•</span>
            <button className="docs-footer-btn">Cookie Settings</button>
            <div className="docs-footer-theme">
              <button className="docs-theme-btn docs-theme-btn--active" title="Light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 2V3M8 13V14M2 8H3M13 8H14M4 4L4.5 4.5M11.5 11.5L12 12M4 12L4.5 11.5M11.5 4.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="docs-theme-btn" title="System">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 14H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="docs-theme-btn" title="Dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10A6 6 0 1 1 6 3a5 5 0 0 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}
