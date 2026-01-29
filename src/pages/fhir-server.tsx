// Generated from Webflow export - using original Webflow classes
// Page: /fhir-server (Aidbox)
// Generated: 2026-01-29T14:42:40.628Z

import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "FHIR Server for Healthcare Apps and Analytics. Aidbox FHIR Server",
  description: "Build healthcare solutions from CDRs to EHRs using a FHIR server, PostgreSQL, and our SDK. Free for development. Scale to terabytes with a flat monthly fee of $1,900.",
};

// Data extracted from Webflow
const features = [
  {
    title: "FHIR Database",
    tags: ["PostgreSQL", "JSONB", "Indexes", "Custom resources", "SQL on FHIR"],
    description: "Manage FHIR data with the power of PostgreSQL — fully under your control. Aidbox stores resources transparently as JSONB, enabling you to query, join, and aggregate by any element, with full support for transactional operations, reporting, and seamless migrations.",
  },
  {
    title: "API",
    tags: ["FHIR", "SQL", "GraphQL"],
    description: "Multiple APIs — FHIR, SQL, GraphQL, Bulk, and Subscription — to work efficiently with FHIR data for maximum flexibility and performance.",
  },
  {
    title: "Artifact Registry",
    tags: ["IGs", "Profiles", "Search params"],
    description: "Multiple FHIR versions: STU3, R4, R5, and R6. 500+ ready-to-use IGs: IPS, national (US, DE, CA, etc.), domain (mCode, Da Vinci, etc.), custom IGs.",
  },
  {
    title: "Access Control",
    tags: ["OAuth 2.0", "SMART", "RBAC/ABAC"],
    description: "Enterprise-grade security with OAuth 2.0, multitenancy, flexible user management, granular access policies, and complete audit trails.",
  },
  {
    title: "Terminology",
    tags: ["CodeSystems", "ValueSets"],
    description: "Validate codes and perform fast lookups in ICD-10, SNOMED, LOINC. Use custom code systems and value sets.",
  },
  {
    title: "Developer Experience",
    tags: ["Python", "C#", "JS", "Codegen"],
    description: "TypeScript, C#, and Python SDKs for easy Aidbox integration and rapid app development. SDK generator for custom toolkits tailored to your stack.",
  },
  {
    title: "UI",
    tags: ["FHIR Viewer", "Search params"],
    description: "Intuitive UI to work with FHIR data, manage users, clients, access policies, and configure system settings.",
  },
];

const useCaseTabs = [
  {
    id: "cdr",
    label: "CDRs & Data Platforms",
    cases: [
      {
        company: "Innovaccer",
        type: "Healthcare Data Platform",
        description: "Innovaccer embeds Health Samurai's Aidbox FHIR engine into its Best-in-KLAS data platform, harmonizing EHR data from 1,800+ hospitals to boost interoperability and coordinated care."
      },
      {
        company: "Sonic Healthcare USA",
        type: "Laboratories",
        description: "Sonic Healthcare USA partners with Health Samurai to deploy Aidbox FHIR as a centralized Master Patient Index, ensuring precise identity matching, seamless data sharing, and a future-proof infrastructure across its nationwide lab network."
      }
    ]
  },
  {
    id: "cds",
    label: "CDS Modules",
    cases: [
      {
        company: "Clinical Decision Support",
        type: "Healthcare Analytics",
        description: "Build intelligent clinical decision support systems powered by FHIR data, enabling real-time alerts, recommendations, and evidence-based care pathways."
      }
    ]
  },
  {
    id: "portal",
    label: "Portals & PHRs",
    cases: [
      {
        company: "Patient Portals",
        type: "Patient Engagement",
        description: "Create patient-facing applications with secure access to health records, appointment scheduling, and care team communication using FHIR APIs."
      }
    ]
  },
  {
    id: "ehr",
    label: "EHR",
    cases: [
      {
        company: "Electronic Health Records",
        type: "Clinical Workflows",
        description: "Build modern EHR systems with Aidbox as the FHIR-native backend, supporting clinical workflows, documentation, and care coordination."
      }
    ]
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }): string {
  return (
    <div className="what-is__card">
      <div className="what-is__ttl">{feature.title}</div>
      <div className="what-is__tags">
        {feature.tags.map((tag) => (
          <div className="what-is__tag rounded-full">{tag}</div>
        ))}
      </div>
      <p className="what-is__p">{feature.description}</p>
    </div>
  );
}

export default function FhirServerPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <p className="headline-hero">
            <span className="span-red">&gt;_</span> What is Aidbox?
          </p>
          <h1 className="h1-style-56 aligne-center">FHIR server and database</h1>
          <p className="paragraph-12-aidbox-copy">
            Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK.
            Free for development. Scale to terabytes with a flat monthly fee of $1,900
          </p>
          <div className="hero-cta">
            <a href="https://aidbox.app/ui/portal#/signup" className="n21_primary_action">
              Try for free
            </a>
            <a href="https://docs.aidbox.app" className="btn-secondary">
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* What is Aidbox Section */}
      <section className="what-is-section">
        <div className="container">
          <div className="heading__h2">What is Aidbox</div>
          <div className="what-is__grid">
            {features.map((feature) => FeatureCard({ feature }))}
          </div>
          <div className="section-cta">
            <a href="https://docs.aidbox.app/features" className="hand-card-link">
              TECHNICAL FEATURES →
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="container">
          <div className="p-26 t-32">See how Aidbox powers the system you want to build</div>
          <div className="tabs" data-signals="{activeTab: 'cdr'}">
            <div className="tabs-list">
              {useCaseTabs.map((tab) => (
                <button
                  className="tabs-trigger"
                  data-class={`{active: $activeTab == '${tab.id}'}`}
                  data-on-click={`$activeTab = '${tab.id}'`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tabs-panels">
              {useCaseTabs.map((tab) => (
                <div
                  className="tabs-panel"
                  data-show={`$activeTab == '${tab.id}'`}
                  style={tab.id !== 'cdr' ? { display: 'none' } : {}}
                >
                  <div className="use-case-content">
                    {tab.cases.map((caseItem) => (
                      <div className="use-case-card">
                        <div className="use-case-header">
                          <div className="use-case-company">{caseItem.company}</div>
                          <div className="use-case-type">{caseItem.type}</div>
                        </div>
                        <p className="use-case-description">{caseItem.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="deploy-section">
        <div className="container">
          <div className="heading__h2">Deploy Aidbox your way</div>
          <p className="deploy__txt">Run server in the cloud, on-premise, or let us handle it for you.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-ttl">
            Aidbox FHIR Platform: Unified FHIR Server and Database for high-performance healthcare applications
          </h2>
          <div className="faq-accordion" data-signals="{faqOpen: {}}">
            <div className="faq-item">
              <button
                className="st-faq-question-text"
                data-on-click="$faqOpen.intro = !$faqOpen.intro"
              >
                Introduction to Aidbox
              </button>
              <div className="st-faq-answer-desc" data-show="$faqOpen.intro" style={{ display: 'none' }}>
                Aidbox is a FHIR-first platform combining a FHIR server and a purpose-built FHIR database under one system.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="heading__h2">Contact Us</div>
          <p className="light">Ready to get started? Let's talk about your project.</p>
          <a href="/contacts" className="n21_primary_action">Get in Touch</a>
        </div>
      </section>
    </Fragment>
  );
}
