import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "MPI — Master Patient Index | Aidbox Docs",
  description: "This page introduces the Aidbox MPI module, its core capabilities, and guides for deployment, configuration, matching, and merge/unmerge operations.",
};

// SVG Icons
const ChevronIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4L5 6L7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ChevronRightIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L6 5L4 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CopyIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const MenuIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="3" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="13" r="1.5" fill="currentColor"/></svg>`;
const ArrowRightIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Sidebar navigation structure for MPI module
const sidebarNav = [
  { label: "Getting Started", href: "#", hasChildren: true },
  { label: "Features", href: "#", hasChildren: false },
  { label: "Architecture", href: "#", hasChildren: false },
  { label: "Tutorials", href: "#", hasChildren: true },
  { label: "Overview", href: "#", hasChildren: true },
  { label: "Configuration", href: "#", hasChildren: true },
  { label: "API", href: "#", hasChildren: true },
  {
    category: "MODULES",
    items: [
      { label: "e-Prescribing", href: "#", hasChildren: true },
      {
        label: "MPI — Master Patient Index",
        href: "/docs/aidbox/modules/mpi",
        active: true,
        expanded: true,
        children: [
          { label: "Get started", href: "/docs/aidbox/modules/mpi/get-started" },
          { label: "Find duplicates: $match", href: "/docs/aidbox/modules/mpi/find-duplicates" },
          { label: "Merging and Unmerging Records: $merge and $unmerge", href: "/docs/aidbox/modules/mpi/merging-and-unmerging-records-usdmerge-and-usdunmerge" },
          { label: "Matching Model Explanation", href: "/docs/aidbox/modules/mpi/matching-model-explanation" },
          { label: "Mathematical Details", href: "/docs/aidbox/modules/mpi/mathematical-details" },
        ],
      },
      { label: "Integration Toolkit", href: "#", hasChildren: true },
      { label: "Forms Builder", href: "#", hasChildren: true },
    ],
  },
  {
    category: "FILE STORAGE",
    items: [
      { label: "File Storage overview", href: "#" },
      { label: "AWS S3", href: "#" },
      { label: "GCP Cloud Storage", href: "#" },
      { label: "Azure Blob Storage", href: "#" },
    ],
  },
  { label: "Database", href: "#", hasChildren: true },
  { label: "Deployment and maintenance", href: "#", hasChildren: true },
  { label: "Developer experience", href: "#", hasChildren: true },
  { label: "Solutions", href: "#", hasChildren: true },
  { label: "Reference", href: "#", hasChildren: true },
  { label: "Deprecated", href: "#", hasChildren: true },
];

// Table of Contents
const tocItems = [
  { id: "mpi-capabilities-overview", label: "MPI Capabilities Overview" },
  { id: "technical-capabilities", label: "Technical Capabilities", indent: true },
  { id: "data-safety", label: "Data Safety, Transparency and Consistency", indent: true },
  { id: "core-feature-set", label: "Core Feature set", indent: true },
  { id: "run-mpi-kubernetes", label: "Run MPI with Kubernetes" },
  { id: "configure-mpi", label: "Configure MPI module" },
  { id: "find-duplicates", label: "Find Duplicates" },
  { id: "merge-unmerge", label: "Merge and Unmerge Records" },
  { id: "how-it-works", label: "How It Works" },
];

// Render sidebar category section
function renderSidebarCategory(category: { category: string; items: any[] }): string {
  return `
    <div class="docs-sidebar-category">
      <div class="docs-sidebar-category-header">${category.category}</div>
      <div class="docs-sidebar-category-items">
        ${category.items.map((item) => {
          if (item.expanded && item.children) {
            return `
              <div class="docs-sidebar-item-group">
                <a href="${item.href}" class="docs-sidebar-link ${item.active ? 'docs-sidebar-link--active' : ''}">
                  <span class="docs-sidebar-chevron docs-sidebar-chevron--expanded">${ChevronRightIcon}</span>
                  <span>${item.label}</span>
                </a>
                <div class="docs-sidebar-children">
                  ${item.children.map((child: { label: string; href: string }) => `
                    <a href="${child.href}" class="docs-sidebar-link docs-sidebar-link--child">
                      <span>${child.label}</span>
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }
          return `
            <a href="${item.href}" class="docs-sidebar-link ${item.active ? 'docs-sidebar-link--active' : ''}">
              <span>${item.label}</span>
              ${item.hasChildren ? `<span class="docs-sidebar-arrow">${ChevronRightIcon}</span>` : ''}
            </a>
          `;
        }).join('')}
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

// Link card component
function LinkCard({ title, href }: { title: string; href: string }): string {
  return `
    <a href="${href}" class="docs-link-card">
      <span class="docs-link-card-title">${title}</span>
      <span class="docs-link-card-arrow">${ArrowRightIcon}</span>
    </a>
  `;
}

export default function MPIPage(): string {
  return (
    <Fragment>
      <div className="docs-page">
        {/* Header specific to docs */}
        <header className="docs-header">
          <div className="docs-header-inner">
            <a href="/docs/aidbox" className="docs-logo">
              <img
                src="/assets/images/docs-aidbox-modules-other-modules-mpi/aidbox-logo.jpg"
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
                <span className="docs-breadcrumb-tag">Modules</span>
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
              <h1 className="docs-h1">MPI — Master Patient Index</h1>
              <p className="docs-description docs-description--bordered">
                This page introduces the Aidbox MPI module, its core capabilities, and guides for deployment, configuration, matching, and merge/unmerge operations.
              </p>

              {/* Intro Content */}
              <div className="docs-section">
                <p>
                  <strong>Master Patient Index (MPI)</strong> is a module in Aidbox that ensures <strong>accurate patient identification</strong> by detecting and removing duplicate records. It helps maintain consistent and reliable data across healthcare systems.
                </p>
                <p>
                  <strong>MPI enables:</strong>
                </p>
                <ul className="docs-list">
                  <li>accurate <a href="#" className="docs-link">matching</a> of patient records across different systems and facilities,</li>
                  <li><a href="#" className="docs-link">merging</a> of duplicate records into a single record,</li>
                  <li><a href="#" className="docs-link">unmerging</a> of incorrectly linked records,</li>
                  <li>maintaining the <strong>integrity</strong> of clinical data and treatment history.</li>
                </ul>
                <p>
                  Using MPI <strong>reduces the risk</strong> of lost or duplicated medical data, treatment errors, and issues with data exchange. This is especially critical in complex ecosystems with many sources — such as clinics, labs, and telemedicine platforms.
                </p>
                <p>
                  The MPI module utilizes <strong>probabilistic</strong> (score-based or Fellegi-Sunter) method. It is more flexible and can provide better results than rule-based approaches, but at the cost of simplicity.
                </p>
              </div>

              {/* MPI Capabilities Overview Section */}
              <section id="mpi-capabilities-overview" className="docs-section">
                <h2 className="docs-h2">MPI Capabilities Overview</h2>

                <h3 id="technical-capabilities" className="docs-h3">Technical Capabilities</h3>
                <ul className="docs-list">
                  <li>FHIR R4 support</li>
                  <li>Seamless integration with the Aidbox platform</li>
                  <li>API-first architecture with a user-friendly web-based UI</li>
                  <li>Notifications for external systems via webhooks (non-FHIR format)</li>
                  <li>Unlimited scalability — supports any number of patient records</li>
                  <li>Can be deployed in the cloud or on-premises</li>
                </ul>

                <h3 id="data-safety" className="docs-h3">Data Safety, Transparency and Consistency</h3>
                <ul className="docs-list">
                  <li>Role-based access control</li>
                  <li>Full traceability of all operations, user actions and API calls</li>
                  <li>Supports compliance with security and regulatory standards</li>
                </ul>

                <h3 id="core-feature-set" className="docs-h3">Core Feature set</h3>
                <ul className="docs-list">
                  <li>Search for patients</li>
                  <li>Flexible patient matching using a probabilistic algorithm
                    <ul className="docs-list docs-list--nested">
                      <li>Fully configurable for specific data and use-cases</li>
                      <li>Handles typos and incomplete data</li>
                    </ul>
                  </li>
                  <li>Manual record merging with unique merge strategy combining golden record and survivor record approaches</li>
                  <li>Unmerge capability</li>
                  <li>Ability to mark record pairs as non-duplicates to exclude them from future match results</li>
                </ul>
              </section>

              {/* Run MPI with Kubernetes Section */}
              <section id="run-mpi-kubernetes" className="docs-section">
                <h2 className="docs-h2">Run MPI with Kubernetes</h2>
                <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Run MDM locally", href: "/docs/aidbox/modules/mpi/get-started/run-mdm-locally" }) }} />
              </section>

              {/* Configure MPI module Section */}
              <section id="configure-mpi" className="docs-section">
                <h2 className="docs-h2">Configure MPI module</h2>
                <p>
                  Configure Aidbox MPI module to use your matching model
                </p>
                <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Configure MPI module", href: "/docs/aidbox/modules/mpi/get-started/configure-mpi-module" }) }} />
              </section>

              {/* Find Duplicates Section */}
              <section id="find-duplicates" className="docs-section">
                <h2 className="docs-h2">Find Duplicates</h2>
                <p>
                  Use <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: "$match" }) }} /> operation to find duplicates
                </p>
              </section>

              {/* Merge and Unmerge Records Section */}
              <section id="merge-unmerge" className="docs-section">
                <h2 className="docs-h2">Merge and Unmerge Records</h2>
                <p>
                  Use <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: "$merge" }) }} /> and <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: "$unmerge" }) }} /> operations to manage duplicate patient records
                </p>
                <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Merging and Unmerging Records: $merge and $unmerge", href: "/docs/aidbox/modules/mpi/merging-and-unmerging-records-usdmerge-and-usdunmerge" }) }} />
              </section>

              {/* How It Works Section */}
              <section id="how-it-works" className="docs-section">
                <h2 className="docs-h2">How It Works</h2>
                <p>
                  Learn more about:
                </p>
                <ol className="docs-list docs-list--ordered">
                  <li>
                    How our matching model works
                    <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Matching Model Explanation", href: "/docs/aidbox/modules/mpi/matching-model-explanation" }) }} />
                  </li>
                  <li>
                    How record merge and unmerge operations work
                    <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Merging and Unmerging Records: $merge and $unmerge", href: "/docs/aidbox/modules/mpi/merging-and-unmerging-records-usdmerge-and-usdunmerge" }) }} />
                  </li>
                  <li>
                    Mathematics behind probabilistic matching
                    <div dangerouslySetInnerHTML={{ __html: LinkCard({ title: "Mathematical Details", href: "/docs/aidbox/modules/mpi/mathematical-details" }) }} />
                  </li>
                </ol>
              </section>

              {/* Prev/Next Navigation */}
              <nav className="docs-prev-next">
                <a href="/docs/aidbox/modules/eprescription/frequently-asked-questions" className="docs-prev-next-link docs-prev-next-link--prev">
                  <span className="docs-prev-next-label">Previous</span>
                  <span className="docs-prev-next-title">Frequently Asked Questions</span>
                </a>
                <a href="/docs/aidbox/modules/mpi/get-started" className="docs-prev-next-link docs-prev-next-link--next">
                  <span className="docs-prev-next-label">Next</span>
                  <span className="docs-prev-next-title">Get started</span>
                </a>
              </nav>

              {/* Last Updated */}
              <div className="docs-last-updated">
                Last updated: 2 months ago
              </div>
            </article>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="docs-toc">
            <button className="docs-feedback-btn">Send feedback</button>
            <nav className="docs-toc-nav">
              {tocItems.map((item) => (
                <a href={`#${item.id}`} className={`docs-toc-link ${item.indent ? 'docs-toc-link--indent' : ''}`}>{item.label}</a>
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
