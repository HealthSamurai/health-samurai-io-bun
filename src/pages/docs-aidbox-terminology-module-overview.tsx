import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Terminology Overview | Aidbox Docs",
  description: "Overview of FHIR terminology concepts and Aidbox's terminology server implementation",
};

// SVG Icons
const ChevronIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4L5 6L7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ChevronRightIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L6 5L4 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ExternalLinkIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 1.5L5.5 6.5M10.5 1.5H7M10.5 1.5V5M10 7V9.5C10 10.0523 9.55228 10.5 9 10.5H2.5C1.94772 10.5 1.5 10.0523 1.5 9.5V3C1.5 2.44772 1.94772 2 2.5 2H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CopyIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const MenuIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="3" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="13" r="1.5" fill="currentColor"/></svg>`;

// Sidebar navigation structure (focused on Terminology Module)
const sidebarNav = [
  { label: "Getting Started", href: "#", hasChildren: true },
  { label: "Features", href: "#", hasChildren: false },
  { label: "Architecture", href: "#", hasChildren: false },
  { label: "Tutorials", href: "#", hasChildren: true },
  { label: "Overview", href: "#", hasChildren: true },
  { label: "Configuration", href: "#", hasChildren: true },
  { label: "API", href: "#", hasChildren: true },
  {
    category: "ACCESS CONTROL",
    items: [
      { label: "Overview", href: "#" },
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
      { label: "Terminology Overview", href: "/docs/aidbox/terminology-module/overview", active: true },
      { label: "FHIR Terminology", href: "#", hasChildren: true },
      { label: "Aidbox Terminology Module", href: "#", hasChildren: true },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { label: "Database overview", href: "#" },
      { label: "PostgreSQL Requirements", href: "#" },
      { label: "Database schema", href: "#" },
    ],
  },
  { label: "Modules", href: "#", hasChildren: true },
  { label: "File storage", href: "#", hasChildren: true },
  { label: "Deployment and maintenance", href: "#", hasChildren: true },
  { label: "Developer experience", href: "#", hasChildren: true },
  { label: "Solutions", href: "#", hasChildren: true },
  { label: "Reference", href: "#", hasChildren: true },
  { label: "Deprecated", href: "#", hasChildren: true },
];

// Table of Contents
const tocItems = [
  { id: "fhir-terminology", label: "FHIR Terminology" },
  { id: "aidbox-terminology-module", label: "Aidbox Terminology Module" },
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
            ${item.external ? `<span class="docs-sidebar-external">${ExternalLinkIcon}</span>` : ''}
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

// Inline code component
function InlineCode({ text }: { text: string }): string {
  return `<code class="docs-inline-code">${text}</code>`;
}

export default function TerminologyOverviewPage(): string {
  return (
    <Fragment>
      <div className="docs-page">
        {/* Header specific to docs */}
        <header className="docs-header">
          <div className="docs-header-inner">
            <a href="/docs/aidbox" className="docs-logo">
              <img
                src="/assets/images/docs-aidbox-terminology-module-overview/aidbox-logo.jpg"
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
            </div>
          </div>
        </header>

        <div className="docs-layout">
          {/* Left Sidebar */}
          <aside className="docs-sidebar">
            <nav className="docs-sidebar-nav">
              {sidebarNav.map((item) => {
                if ('category' in item) {
                  return renderSidebarCategory(item as { category: string; items: any[] });
                }
                return renderSidebarItem(item as { label: string; href: string; hasChildren?: boolean });
              }).join('')}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="docs-main">
            {/* Breadcrumb */}
            <div className="docs-breadcrumb">
              <div className="docs-breadcrumb-path">
                <span className="docs-breadcrumb-tag">Terminology Module</span>
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
              <h1 className="docs-h1">Terminology Overview</h1>
              <p className="docs-description docs-description--bordered">
                Overview of FHIR terminology concepts and Aidbox's terminology server implementation
              </p>

              {/* Intro Content */}
              <div className="docs-section">
                <p>
                  Healthcare systems need to share data reliably across different organizations, vendors, and countries. The challenge? Every system uses different codes for the same concepts. One hospital might code "heart attack" as "MI", another as "STEMI,CARDIO,ACC", and a third might use a completely different internal system. Poor terminology management leads to data silos, integration nightmares, and ultimately, compromised patient care.
                </p>
                <p>
                  FHIR terminology solves this problem by providing standardized ways to represent and validate coded healthcare data. Aidbox implements a comprehensive FHIR terminology server natively integrated into the platform, delivering compliant and performant terminology operations.
                </p>
              </div>

              {/* FHIR Terminology Section */}
              <section id="fhir-terminology" className="docs-section">
                <h2 className="docs-h2">FHIR Terminology</h2>
                <p>
                  FHIR builds terminology around core resource types and data structures that work together to organize and validate coded data.
                </p>
                <p>
                  <strong>Coded values</strong> in FHIR use specialized data types for different scenarios. Simple <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'code' }) }} /> elements work for fixed vocabularies. <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'Coding' }) }} /> structures specify both the system and code for precise identification, and <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'CodeableConcept' }) }} /> allows multiple codings to represent the same concept across different systems simultaneously.
                </p>
                <p>
                  <strong>CodeSystems</strong> define the actual codes and their meanings. Think of SNOMED CT with its comprehensive clinical terminology, or LOINC with standardized laboratory/observation codes. Each CodeSystem establishes what specific codes mean within their domain.
                </p>
                <p>
                  <strong>ValueSets</strong> curate collections of codes from one or more CodeSystems for specific contexts. While LOINC contains thousands of laboratory codes, a ValueSet might select just the subset relevant for "routine blood chemistry panels."
                </p>
                <p>
                  <strong>ConceptMaps</strong> define relationships and translations between codes from different CodeSystems. When you need to map your internal "HTC" code to SNOMED CT's "183041000119109 Hypertensive disorder", ConceptMaps provide the structured translation rules.
                </p>
                <p className="docs-see-also">
                  See also: <a href="/docs/aidbox/terminology-module/fhir-terminology" className="docs-link">FHIR Terminology Concepts</a>
                </p>
              </section>

              {/* Aidbox Terminology Module Section */}
              <section id="aidbox-terminology-module" className="docs-section">
                <h2 className="docs-h2">Aidbox Terminology Module</h2>
                <p>
                  Aidbox implements a flexible terminology server that adapts to different organizational needs through three operational modes:
                </p>
                <p>
                  <strong>Local mode</strong> uses only CodeSystems, ValueSets, and ConceptMaps stored in Aidbox's FHIR Artifact Registry, providing complete control over terminology content but requiring explicit loading of all needed resources.
                </p>
                <p>
                  <strong>Hybrid mode</strong> combines local storage with external server fallback, balancing performance with comprehensive coverage by using local resources when available and querying external servers when needed.
                </p>
                <p>
                  <strong>Remote (legacy) mode</strong> routes all terminology requests to external terminology servers, useful for organizations relying on established external services or transitioning their terminology infrastructure.
                </p>
                <p>
                  The module supports all standard FHIR terminology operations — <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$validate-code' }) }} />, <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$expand' }) }} />, <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$lookup' }) }} />, <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$translate' }) }} /> — with access to local and external content depending on your configuration.
                </p>
                <p className="docs-see-also">
                  See also: <a href="/docs/aidbox/terminology-module/aidbox-terminology-module" className="docs-link">Aidbox Terminology Module</a>
                </p>
              </section>

              {/* Prev/Next Navigation */}
              <nav className="docs-prev-next">
                <a href="/docs/aidbox/artifact-registry/conceptmap" className="docs-prev-next-link docs-prev-next-link--prev">
                  <span className="docs-prev-next-label">Previous</span>
                  <span className="docs-prev-next-title">ConceptMap</span>
                </a>
                <a href="/docs/aidbox/terminology-module/fhir-terminology" className="docs-prev-next-link docs-prev-next-link--next">
                  <span className="docs-prev-next-label">Next</span>
                  <span className="docs-prev-next-title">FHIR Terminology</span>
                </a>
              </nav>

              {/* Last Updated */}
              <div className="docs-last-updated">
                Last updated: 5 months ago
              </div>
            </article>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="docs-toc">
            <button className="docs-feedback-btn">Send feedback</button>
            <nav className="docs-toc-nav">
              {tocItems.map((item) => (
                <a href={`#${item.id}`} className="docs-toc-link">{item.label}</a>
              ))}
            </nav>
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
    </Fragment>
  );
}
