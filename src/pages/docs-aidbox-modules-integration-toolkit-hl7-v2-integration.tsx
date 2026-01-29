import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "HL7 v2 integration | Aidbox Docs",
  description: "This page describes HL7v2-IN module which provides API to ingest and process HL7 v2 messages.",
};

// SVG Icons
const ChevronIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4L5 6L7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ExternalLinkIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 1.5L5.5 6.5M10.5 1.5H7M10.5 1.5V5M10 7V9.5C10 10.0523 9.55228 10.5 9 10.5H2.5C1.94772 10.5 1.5 10.0523 1.5 9.5V3C1.5 2.44772 1.94772 2 2.5 2H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const InfoIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#3b82f6" stroke-width="1.5"/><path d="M10 9V14M10 6.5V7" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const WarningIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L18 17H2L10 3Z" stroke="#f97316" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8V12M10 14.5V15" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const CopyIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const MenuIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="13" cy="8" r="1.5" fill="currentColor"/></svg>`;

// Sidebar navigation structure
const sidebarNav = [
  { label: "Getting Started", href: "#", expanded: false },
  { label: "Features", href: "#", expanded: false },
  { label: "Architecture", href: "#", expanded: false },
  { label: "Tutorials", href: "#", expanded: false },
  { label: "Overview", href: "#", expanded: false },
  { label: "Configuration", href: "#", expanded: false },
  { label: "API", href: "#", expanded: false },
  { label: "Access Control", href: "#", expanded: false },
  { label: "Artifact Registry", href: "#", expanded: false },
  { label: "Terminology Module", href: "#", expanded: false },
  { label: "Database", href: "#", expanded: false },
  {
    label: "Modules",
    expanded: true,
    children: [
      { label: "Profiling and validation", href: "#" },
      { label: "Observability", href: "#" },
      { label: "Subscriptions", href: "#" },
      { label: "Aidbox Forms", href: "#" },
      { label: "SQL on FHIR", href: "#" },
      {
        label: "Integration Toolkit",
        expanded: true,
        children: [
          { label: "C-CDA / FHIR Converter", href: "#" },
          {
            label: "HL7 v2 integration",
            href: "#",
            active: true,
            children: [
              { label: "HL7 v2 integration with Aidbox project", href: "#" },
              { label: "Mappings with lisp/mapping", href: "#" },
            ],
          },
          { label: "X12 message converter", href: "#" },
          { label: "Analytics", href: "#" },
          { label: "Mappings", href: "#" },
          { label: "Email providers integration", href: "#" },
        ],
      },
      { label: "ePrescription", href: "#" },
      { label: "MPI — Master Patient Index", href: "#" },
      { label: "SMARTbox | FHIR API for EHRs", href: "#" },
      { label: "Other Modules", href: "#" },
    ],
  },
  { label: "File storage", href: "#", expanded: false },
  { label: "Deployment and maintenance", href: "#", expanded: false },
  { label: "Developer experience", href: "#", expanded: false },
  { label: "Solutions", href: "#", expanded: false },
  { label: "Reference", href: "#", expanded: false },
  { label: "Deprecated", href: "#", expanded: false },
];

// Table of Contents
const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "mapper-module", label: "Mapper module" },
  { id: "creating-hl7v2config", label: "Creating a Hl7v2Config Resource" },
  { id: "submitting-ui", label: "Submitting a Message with Aidbox UI" },
  { id: "submitting-api", label: "Submitting a Message with the REST API" },
  { id: "testing-messages", label: "Testing Messages Without Persistence" },
  { id: "capturing-mllp", label: "Capturing a MLLP Traffic" },
  { id: "hapi-testpanel", label: "Using HAPI TestPanel to send messages with MLLP" },
  { id: "z-segments", label: "User-defined segments (Z-segments)" },
  { id: "z-segments-example", label: "Example" },
  { id: "advanced-mappings", label: "Advanced mappings" },
];

// Render sidebar item recursively
function renderSidebarItem(item: any, depth = 0): string {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.active;
  const paddingLeft = 16 + depth * 12;

  if (hasChildren) {
    return `
      <div class="docs-sidebar-item">
        <div class="docs-sidebar-link ${isActive ? 'docs-sidebar-link--active' : ''}" style="padding-left: ${paddingLeft}px">
          <span class="docs-sidebar-chevron ${item.expanded ? 'docs-sidebar-chevron--expanded' : ''}">${ChevronIcon}</span>
          <span>${item.label}</span>
        </div>
        <div class="docs-sidebar-children ${item.expanded ? '' : 'docs-sidebar-children--collapsed'}">
          ${item.children.map((child: any) => renderSidebarItem(child, depth + 1)).join('')}
        </div>
      </div>
    `;
  }

  return `
    <a href="${item.href || '#'}" class="docs-sidebar-link ${isActive ? 'docs-sidebar-link--active' : ''}" style="padding-left: ${paddingLeft}px">
      <span>${item.label}</span>
    </a>
  `;
}

// Code block component
function CodeBlock({ language, code }: { language: string; code: string }): string {
  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `
    <div class="docs-code-block">
      <div class="docs-code-header">
        <span class="docs-code-lang">${language}</span>
        <button class="docs-code-copy" title="Copy code">
          ${CopyIcon}
        </button>
      </div>
      <pre class="docs-code-pre"><code class="docs-code-content">${escapedCode}</code></pre>
    </div>
  `;
}

// Info box component
function InfoBox({ children }: { children: string }): string {
  return `
    <div class="docs-hint docs-hint--info">
      <div class="docs-hint-icon">${InfoIcon}</div>
      <div class="docs-hint-content">${children}</div>
    </div>
  `;
}

// Warning box component
function WarningBox({ children }: { children: string }): string {
  return `
    <div class="docs-hint docs-hint--warning">
      <div class="docs-hint-icon">${WarningIcon}</div>
      <div class="docs-hint-content">${children}</div>
    </div>
  `;
}

// Inline code component
function InlineCode({ text }: { text: string }): string {
  return `<code class="docs-inline-code">${text}</code>`;
}

export default function Hl7v2IntegrationPage(): string {
  return (
    <Fragment>
      <div className="docs-page">
        {/* Header specific to docs */}
        <header className="docs-header">
          <div className="docs-header-inner">
            <a href="#" className="docs-logo">
              <img
                src="/assets/images/docs-aidbox-modules-integration-toolkit-hl7-v2-integration/aidbox-logo.jpg"
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
              <a href="#" className="docs-nav-link">Run Aidbox locally</a>
              <a href="#" className="docs-nav-link">Run Aidbox in Sandbox</a>
              <a href="#" className="docs-nav-link">Examples</a>
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
                <span className="docs-search-shortcut">Ctrl+K</span>
              </div>

              <a href="#" className="docs-login-btn">Login</a>

              <div className="docs-theme-switcher">
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
          </div>
        </header>

        <div className="docs-layout">
          {/* Left Sidebar */}
          <aside className="docs-sidebar">
            <nav className="docs-sidebar-nav" dangerouslySetInnerHTML={{
              __html: sidebarNav.map(item => renderSidebarItem(item)).join('')
            }} />
          </aside>

          {/* Main Content */}
          <main className="docs-main">
            {/* Breadcrumb */}
            <div className="docs-breadcrumb">
              <div className="docs-breadcrumb-path">
                <span>Modules</span>
                <span className="docs-breadcrumb-sep">/</span>
                <span>Integration Toolkit</span>
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
              <h1 className="docs-h1">HL7 v2 integration</h1>
              <p className="docs-description">
                This page describes HL7v2-IN module which provides API to ingest and process HL7 v2 messages.
              </p>

              {/* YouTube Video */}
              <div className="docs-video">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/iSDX4UZpYO4"
                  title="Setup HL7 v2 to FHIR integration in 15 minutes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Introduction */}
              <section id="introduction" className="docs-section">
                <h2 className="docs-h2">Introduction</h2>
                <p>
                  HL7 v2 is a widely-used healthcare integration standard for exchanging clinical and administrative data between systems.
                  Aidbox provides a module called <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'Hl7v2-in' }) }} /> that allows you to receive,
                  parse, validate, and transform HL7 v2 messages into FHIR resources.
                </p>
                <p>
                  The module introduces two resource types:
                </p>
                <ul className="docs-list">
                  <li><span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'Hl7v2Config' }) }} /> — configuration for parsing and mapping</li>
                  <li><span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'Hl7v2Message' }) }} /> — stores received messages with parsed content</li>
                </ul>
              </section>

              {/* Mapper Module */}
              <section id="mapper-module" className="docs-section">
                <h3 className="docs-h3">Mapper module</h3>
                <p>
                  The HL7v2-IN module uses the <a href="#" className="docs-link">Mapper module <span dangerouslySetInnerHTML={{ __html: ExternalLinkIcon }} /></a> to
                  transform parsed HL7 v2 messages into FHIR resources. You define mappings that specify how HL7 v2 segments and fields map to FHIR resource attributes.
                </p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `PUT /Mapping/test
content-type: text/yaml

resourceType: Mapping
id: test
body:
  resourceType: Bundle
  type: transaction
  entry:
    - resource:
        resourceType: Patient
        id: $ msg.PID.field-3.component-1
        name:
          - family: $ msg.PID.field-5.component-1
            given:
              - $ msg.PID.field-5.component-2`
                }) }} />

                <div dangerouslySetInnerHTML={{ __html: InfoBox({
                  children: '<p>The Mapping resource returns a FHIR Transaction Bundle that is automatically executed against the Aidbox database.</p>'
                }) }} />
              </section>

              {/* Creating Hl7v2Config */}
              <section id="creating-hl7v2config" className="docs-section">
                <h3 className="docs-h3">Creating a Hl7v2Config Resource</h3>
                <p>
                  Before processing HL7 v2 messages, you need to create an <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'Hl7v2Config' }) }} /> resource
                  that defines parsing and mapping settings.
                </p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `PUT /Hl7v2Config/default
content-type: text/yaml

resourceType: Hl7v2Config
id: default
mapping:
  resourceType: Mapping
  id: hl7v2-to-fhir
isStrict: false
sortTopLevelExtensions: true`
                }) }} />

                <h4 className="docs-h4">Strict and Non-strict Parsing</h4>
                <p>
                  The <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'isStrict' }) }} /> attribute controls how the parser handles unknown segments and fields:
                </p>
                <ul className="docs-list">
                  <li><strong>Strict mode (true)</strong>: Unknown segments cause parsing errors</li>
                  <li><strong>Non-strict mode (false)</strong>: Unknown segments are preserved but not validated</li>
                </ul>

                <h4 className="docs-h4">Mapping Entrypoint</h4>
                <p>
                  The <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'mapping' }) }} /> attribute references the Mapping resource to use for transformation.
                  You can also use the <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$include' }) }} /> directive to compose mappings from multiple sources.
                </p>
                <p>
                  <strong>Sort for mixed ordered custom segments</strong>
                </p>
                <p>
                  The <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'sortTopLevelExtensions' }) }} /> attribute ensures that custom Z-segments
                  are properly sorted when they appear in mixed order within the message.
                </p>
              </section>

              {/* Submitting with Aidbox UI */}
              <section id="submitting-ui" className="docs-section">
                <h3 className="docs-h3">Submitting a Message with Aidbox UI</h3>
                <p>
                  You can submit HL7 v2 messages through the Aidbox UI for testing and development:
                </p>
                <ol className="docs-list docs-list--ordered">
                  <li>Navigate to the HL7 v2 Messages section in the Aidbox UI</li>
                  <li>Click "New Message" to open the submission dialog</li>
                  <li>Paste your HL7 v2 message content</li>
                  <li>Select the Hl7v2Config to use for processing</li>
                  <li>Click "Submit" to process the message</li>
                </ol>

                <figure className="docs-figure">
                  <img
                    src="/assets/images/docs-aidbox-modules-integration-toolkit-hl7-v2-integration/hl7v2-message-submission.png"
                    alt="HL7 v2 message submission interface"
                    className="docs-image"
                  />
                </figure>

                <p>Here is an example ADT^A01 message:</p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'hl7',
                  code: `MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20230615120000||ADT^A01|MSG00001|P|2.5
EVN|A01|20230615120000
PID|1||PAT001^^^HOSPITAL^MR||DOE^JOHN^M||19800115|M|||123 MAIN ST^^ANYTOWN^CA^12345||555-1234|||S|||123-45-6789
PV1|1|I|ICU^101^A^HOSPITAL||||1234^SMITH^JAMES^A^^^MD|||MED||||||||V00001|||||||||||||||||||||||||20230615120000`
                }) }} />

                <figure className="docs-figure">
                  <img
                    src="/assets/images/docs-aidbox-modules-integration-toolkit-hl7-v2-integration/hl7v2-config-selection.png"
                    alt="HL7 v2 configuration selection dialog"
                    className="docs-image"
                  />
                </figure>

                <figure className="docs-figure">
                  <img
                    src="/assets/images/docs-aidbox-modules-integration-toolkit-hl7-v2-integration/hl7v2-message-details.png"
                    alt="HL7 v2 message details showing status and parsed structure"
                    className="docs-image"
                  />
                </figure>
              </section>

              {/* Submitting with REST API */}
              <section id="submitting-api" className="docs-section">
                <h3 className="docs-h3">Submitting a Message with the REST API</h3>
                <p>
                  For programmatic integration, use the REST API to submit HL7 v2 messages:
                </p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `POST /Hl7v2Message
content-type: text/yaml

resourceType: Hl7v2Message
status: received
src: |
  MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20230615120000||ADT^A01|MSG00001|P|2.5
  EVN|A01|20230615120000
  PID|1||PAT001^^^HOSPITAL^MR||DOE^JOHN^M||19800115|M
config:
  resourceType: Hl7v2Config
  id: default`
                }) }} />

                <div dangerouslySetInnerHTML={{ __html: WarningBox({
                  children: '<p>The message <strong>status</strong> must be set to <code class="docs-inline-code">received</code> to trigger automatic processing. Messages with other statuses are stored but not processed.</p>'
                }) }} />

                <p>The response includes several important fields:</p>
                <ul className="docs-list">
                  <li><strong>status</strong> — <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'processed' }) }} /> if successful, <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: 'error' }) }} /> if failed</li>
                  <li><strong>parsed</strong> — structured representation of the parsed HL7 v2 message</li>
                  <li><strong>outcome</strong> — the resulting Transaction Bundle or error information</li>
                </ul>
              </section>

              {/* Testing Messages */}
              <section id="testing-messages" className="docs-section">
                <h3 className="docs-h3">Testing Messages Without Persistence</h3>
                <p>
                  For testing purposes, you can use the <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '$execute-only' }) }} /> operation
                  to process a message without persisting it or the resulting FHIR resources:
                </p>
                <ul className="docs-list">
                  <li>Validate message parsing and mapping logic</li>
                  <li>Debug transformation rules</li>
                  <li>Test before deploying to production</li>
                  <li>Avoid creating test data in your database</li>
                </ul>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `POST /Hl7v2Message/$execute-only
content-type: text/yaml

resourceType: Hl7v2Message
src: |
  MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20230615120000||ADT^A01|MSG00001|P|2.5
  PID|1||PAT001^^^HOSPITAL^MR||DOE^JOHN^M||19800115|M
config:
  resourceType: Hl7v2Config
  id: default`
                }) }} />

                <p>Note that the following are <strong>NOT</strong> persisted:</p>
                <ul className="docs-list">
                  <li>The Hl7v2Message resource itself</li>
                  <li>Any FHIR resources from the Transaction Bundle</li>
                </ul>
              </section>

              {/* Capturing MLLP Traffic */}
              <section id="capturing-mllp" className="docs-section">
                <h3 className="docs-h3">Capturing a MLLP Traffic</h3>
                <p>
                  For integration with systems that send HL7 v2 messages via <a href="#" className="docs-link">MLLP protocol <span dangerouslySetInnerHTML={{ __html: ExternalLinkIcon }} /></a>,
                  you can use <a href="#" className="docs-link">hl7proxy <span dangerouslySetInnerHTML={{ __html: ExternalLinkIcon }} /></a> — an open-source tool that
                  bridges MLLP connections to HTTP endpoints.
                </p>
                <p>
                  First, create an AccessPolicy and Client for hl7proxy:
                </p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `POST /
content-type: text/yaml

type: transaction
entry:
  - resource:
      resourceType: Client
      id: hl7proxy-client
      secret: your-secret-here
      grant_types:
        - basic
    request:
      method: PUT
      url: /Client/hl7proxy-client
  - resource:
      resourceType: AccessPolicy
      id: hl7proxy-policy
      engine: allow
      link:
        - resourceType: Client
          id: hl7proxy-client
    request:
      method: PUT
      url: /AccessPolicy/hl7proxy-policy`
                }) }} />

                <p>Then run hl7proxy:</p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'bash',
                  code: `# Using Docker
docker run -p 2575:2575 \\
  -e AIDBOX_URL=https://your-aidbox-instance.com \\
  -e AIDBOX_CLIENT=hl7proxy-client \\
  -e AIDBOX_SECRET=your-secret-here \\
  healthsamurai/hl7proxy:latest

# Using binary
./hl7proxy --port 2575 \\
  --aidbox-url https://your-aidbox-instance.com \\
  --client hl7proxy-client \\
  --secret your-secret-here`
                }) }} />

                <p>To test, you can send a base64-encoded message:</p>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'bash',
                  code: `echo "TVNIfF5+XCZ8U0VORElOR19BUFB8..." | base64 -d | nc localhost 2575`
                }) }} />
              </section>

              {/* HAPI TestPanel */}
              <section id="hapi-testpanel" className="docs-section">
                <h3 className="docs-h3">Using HAPI TestPanel to send messages with MLLP</h3>
                <p>
                  <a href="#" className="docs-link">HAPI TestPanel <span dangerouslySetInnerHTML={{ __html: ExternalLinkIcon }} /></a> is a useful GUI tool
                  for testing HL7 v2 messaging. You can configure it to connect to hl7proxy and send test messages interactively.
                </p>
              </section>

              {/* Z-segments */}
              <section id="z-segments" className="docs-section">
                <h2 className="docs-h2">User-defined segments (Z-segments)</h2>
                <p>
                  HL7 v2 allows custom segments (Z-segments) for organization-specific data. You can define these in your Hl7v2Config:
                </p>
                <ul className="docs-list">
                  <li><strong>msh</strong> — the message header pattern to match (e.g., ADT^A01)</li>
                  <li><strong>segment</strong> — the segment identifier (e.g., ZPI)</li>
                  <li><strong>quantifier</strong> — cardinality: <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '?' }) }} /> (0..1), <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '*' }) }} /> (0..*), <span dangerouslySetInnerHTML={{ __html: InlineCode({ text: '+' }) }} /> (1..*), or none (1..1)</li>
                </ul>
                <p>Field properties:</p>
                <ul className="docs-list">
                  <li><strong>name</strong> — descriptive name for the field</li>
                  <li><strong>key</strong> — the key used in parsed output</li>
                  <li><strong>type</strong> — data type (ST, NM, CX, etc.)</li>
                </ul>

                <h3 id="z-segments-example" className="docs-h3">Example</h3>

                <div dangerouslySetInnerHTML={{ __html: CodeBlock({
                  language: 'yaml',
                  code: `PUT /Hl7v2Config/custom-segments
content-type: text/yaml

resourceType: Hl7v2Config
id: custom-segments
mapping:
  resourceType: Mapping
  id: hl7v2-with-z-segments
isStrict: false
extensions:
  - msh: ADT^A01
    segment: ZPI
    quantifier: "?"
    fields:
      - name: Custom Patient ID
        key: customId
        type: CX
      - name: Custom Notes
        key: notes
        type: ST
      - name: Priority Score
        key: priority
        type: NM`
                }) }} />
              </section>

              {/* Advanced Mappings */}
              <section id="advanced-mappings" className="docs-section">
                <h2 className="docs-h2">Advanced mappings</h2>
                <p>
                  For complex transformation logic, see the <a href="#" className="docs-link">Mappings with Lisp <span dangerouslySetInnerHTML={{ __html: ExternalLinkIcon }} /></a> documentation.
                </p>
              </section>

              {/* Prev/Next Navigation */}
              <nav className="docs-prev-next">
                <a href="#" className="docs-prev-next-link docs-prev-next-link--prev">
                  <span className="docs-prev-next-label">Previous</span>
                  <span className="docs-prev-next-title">How to customize conversion rules</span>
                </a>
                <a href="#" className="docs-prev-next-link docs-prev-next-link--next">
                  <span className="docs-prev-next-label">Next</span>
                  <span className="docs-prev-next-title">HL7 v2 integration with Aidbox project</span>
                </a>
              </nav>

              {/* Last Updated */}
              <div className="docs-last-updated">
                Last updated: 5 days ago
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
          </aside>
        </div>

        {/* Footer */}
        <footer className="docs-footer">
          <div className="docs-footer-inner">
            <a href="#" className="docs-footer-link">© Health Samurai</a>
            <div className="docs-footer-social">
              <a href="#" className="docs-footer-icon" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 2H3.5C2.67 2 2 2.67 2 3.5V16.5C2 17.33 2.67 18 3.5 18H16.5C17.33 18 18 17.33 18 16.5V3.5C18 2.67 17.33 2 16.5 2ZM6.75 15.5H4.5V8H6.75V15.5ZM5.62 7.03C4.89 7.03 4.31 6.44 4.31 5.72C4.31 5 4.89 4.41 5.62 4.41C6.34 4.41 6.93 5 6.93 5.72C6.93 6.44 6.35 7.03 5.62 7.03ZM15.5 15.5H13.25V11.88C13.25 11.05 13.23 9.99 12.09 9.99C10.93 9.99 10.75 10.88 10.75 11.82V15.5H8.5V8H10.66V8.97H10.69C10.98 8.42 11.68 7.83 12.73 7.83C15.01 7.83 15.5 9.34 15.5 11.31V15.5Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="docs-footer-icon" title="YouTube">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.77 6.52C17.61 5.93 17.14 5.47 16.56 5.31C15.49 5 10 5 10 5C10 5 4.51 5 3.44 5.31C2.86 5.47 2.39 5.93 2.23 6.52C1.92 7.58 1.92 9.78 1.92 9.78C1.92 9.78 1.92 11.97 2.23 13.04C2.39 13.63 2.86 14.09 3.44 14.25C4.51 14.56 10 14.56 10 14.56C10 14.56 15.49 14.56 16.56 14.25C17.14 14.09 17.61 13.63 17.77 13.04C18.08 11.97 18.08 9.78 18.08 9.78C18.08 9.78 18.08 7.58 17.77 6.52ZM8.27 12.02V7.53L12.5 9.78L8.27 12.02Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <a href="#" className="docs-footer-link">Contact us</a>
            <a href="#" className="docs-footer-link">Docs source (980941d)</a>
            <button className="docs-footer-btn">Cookie Settings</button>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
