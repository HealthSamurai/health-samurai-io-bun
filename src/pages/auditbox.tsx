import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Auditbox",
  description: "A FHIR-native Audit Record Repository to consolidate healthcare audit logs from multiple sources and answer compliance or security questions in seconds — not weeks.",
};

// Feature cards data for "What's in the box" section
const featureCards = [
  {
    icon: "/assets/images/auditbox/icon-consolidation.svg",
    title: "Standards-Based Audit Consolidation",
    description: "Centralize FHIR AuditEvent from your services in one standards-based repository — a single source of truth with consistent schema and lifecycle policies.",
  },
  {
    icon: "/assets/images/auditbox/icon-integration.svg",
    title: "Quick FHIR ecosystem integration",
    description: "Integrate via standard FHIR APIs and AuditEvent resources to reduce mapping and boilerplate",
  },
  {
    icon: "/assets/images/auditbox/icon-audit-trails.svg",
    title: "Complete audit trails",
    description: "Capture who, what, when, where, and how for every access or change — aligned with ASTM E2147, HIPAA, and GDPR.",
  },
  {
    icon: "/assets/images/auditbox/icon-storage.svg",
    title: "Cost-effective log storage",
    description: "Optimize storage costs while retaining full compliance so that long-term regulatory retention doesn't overload expensive SIEM or database resources.",
  },
  {
    icon: "/assets/images/auditbox/icon-investigations.svg",
    title: "Fast investigations",
    description: "Quickly trace user activity with a standardized API and intuitive UI so you can perform audits, reviews, and root-cause analysis without sifting through raw system logs.",
  },
];

// AuditEvent breakdown categories
const auditEventCategories = [
  {
    tag: "who",
    items: [
      {
        icon: "/assets/images/auditbox/ico-who.svg",
        title: "Agents (Actors and Roles)",
        description: "Identifies every person, system, or device involved, including their roles (e.g., clinician, system, device).",
      },
      {
        icon: "/assets/images/auditbox/ico-source.svg",
        title: "Source (Site & Observer)",
        description: "The system or component that detected and reported the event.",
      },
    ],
  },
  {
    tag: "where",
    items: [
      {
        icon: "/assets/images/auditbox/ico-location.svg",
        title: "Location",
        description: "Actual place of the event (e.g., clinic room, device location).",
      },
    ],
  },
  {
    tag: "what",
    items: [
      {
        icon: "/assets/images/auditbox/ico-action.svg",
        title: "Type & Action",
        description: "What happened (e.g., record accessed, updated, deleted)",
      },
      {
        icon: "/assets/images/auditbox/ico-entity.svg",
        title: "Entities (Objects & Details)",
        description: "Which data or resources were affected, with rich context and security labels.",
      },
    ],
  },
  {
    tag: "when",
    items: [
      {
        icon: "/assets/images/auditbox/ico-time.svg",
        title: "Time & Outcome",
        description: "When it happened and whether it succeeded or failed.",
      },
    ],
  },
  {
    tag: "why",
    items: [
      {
        icon: "/assets/images/auditbox/ico-authorization.svg",
        title: "Authorization",
        description: "Capture the specific reason each actor (person, system, or device) participated in it",
      },
    ],
  },
];

// Benefits accordion data
const benefitsAccordion = [
  {
    id: 0,
    title: "Stop the audit log chaos",
    content: "Automatically ingest FHIR-native logs from your FHIR services to eliminate fragmented audit trails.",
    shape: "/assets/images/auditbox/shape-tab-1.svg",
  },
  {
    id: 1,
    title: "Confidence in compliance from deployment",
    content: "Instantly align with HIPAA §164.312(b), GDPR Article 30, ONC §170.315(d)(2)/(d)(3), and ASTM E2147-18 requirements using pre-configured compliance templates that eliminate guesswork.",
    shape: "/assets/images/auditbox/shape-tab-2.svg",
  },
  {
    id: 2,
    title: "Detect breaches and resolve incidents swiftly",
    content: "Search by user, resource, timestamp, or action using advanced query capabilities that pinpoint security incidents instantly, enabling rapid response and confident remediation.",
    shape: "/assets/images/auditbox/shape-tab-3.svg",
  },
  {
    id: 3,
    title: "Ensure your legal standing is robust",
    content: "Append-only indexing and tamper-evidence options (where available) designed for long-term preservation and regulatory scrutiny.",
    shape: "/assets/images/auditbox/shape-tab-4.svg",
  },
  {
    id: 4,
    title: "Maximize your security investments",
    content: "Forward enriched, structured audit logs to Splunk, Microsoft Sentinel, or Snowflake to amplify threat detection, accelerate incident response, and enhance your SOC's effectiveness.",
    shape: "/assets/images/auditbox/shape-tab-5.svg",
  },
];

// Sample AuditEvent JSON
const sampleAuditEventJson = `{
  "resourceType": "AuditEvent",
  "type": {
    "system": "http://dicom.nema.org/...",
    "code": "110114",
    "display": "User Authentication"
  },
  "subtype": [{
    "system": "http://dicom.nema.org/...",
    "code": "110122",
    "display": "Login"
  }],
  "action": "E",
  "recorded": "2024-04-18T15:32:00Z",
  "outcome": "0",
  "agent": [{
    "type": {...},
    "who": {
      "reference": "Practitioner/123"
    },
    "requestor": true,
    "location": {
      "reference": "Location/456"
    },
    "policy": [
      "http://hl7.org/fhir/uv/ipa/StructureDefinition/..."
    ]
  }],
  "source": {
    "observer": {
      "reference": "Device/789"
    },
    "type": [{...}]
  },
  "entity": [{
    "what": {
      "reference": "Patient/abc"
    },
    "type": {...},
    "role": {...},
    "securityLabel": [{...}]
  }]
}`;

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }): string {
  return (
    <div className="auditbox-feature-card">
      <img src={icon} alt="" className="auditbox-feature-icon" />
      <h3 className="auditbox-feature-title">{title}</h3>
      <p className="auditbox-feature-desc">{description}</p>
    </div>
  );
}

function AuditEventCategory({ tag, items }: { tag: string; items: Array<{ icon: string; title: string; description: string }> }): string {
  return (
    <div className="audit-event-category">
      <span className="audit-event-tag">{tag}</span>
      <div className="audit-event-items">
        {items.map((item) => (
          <div className="audit-event-item">
            <img src={item.icon} alt="" className="audit-event-item-icon" />
            <div className="audit-event-item-content">
              <h4 className="audit-event-item-title">{item.title}</h4>
              <p className="audit-event-item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AuditboxPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="auditbox-hero">
        <div className="container">
          <div className="auditbox-hero-grid">
            <div className="auditbox-hero-content">
              <h1 className="auditbox-hero-title">Auditbox</h1>
              <p className="auditbox-hero-subtitle">One vault for every audit trail</p>
              <p className="auditbox-hero-description">
                A FHIR-native Audit Record Repository to consolidate healthcare audit logs from multiple sources and answer compliance or security questions in seconds — not weeks.
              </p>
              <a href="#contact-us" className="btn btn-primary">Get early access</a>
            </div>
            <div className="auditbox-hero-image">
              <img src="/assets/images/auditbox/hero-illustration.svg" alt="Auditbox - Audit log consolidation" />
            </div>
          </div>
        </div>
      </section>

      {/* What's in the box Section */}
      <section className="auditbox-features">
        <div className="container">
          <h2 className="auditbox-section-title">What's in the box?</h2>
          <div className="auditbox-features-grid">
            {featureCards.map((card) => (
              <FeatureCard icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="auditbox-architecture">
        <div className="container">
          <h2 className="auditbox-section-title">Architecture</h2>
          <div className="auditbox-architecture-diagram">
            <img src="/assets/images/auditbox/architecture-diagram.png" alt="Auditbox Architecture - FHIR Sources to Auditbox to SIEM/Analytics" />
          </div>
        </div>
      </section>

      {/* FHIR AuditEvent Breakdown Section */}
      <section className="auditbox-audit-event">
        <div className="container">
          <h2 className="auditbox-audit-event-title">
            Standards-based <span className="highlight">FHIR Audit Event</span> as the data model foundation
          </h2>
          <div className="auditbox-audit-event-grid">
            <div className="auditbox-code-block">
              <pre><code>{sampleAuditEventJson}</code></pre>
              <button
                className="auditbox-copy-btn"
                data-on-click="navigator.clipboard.writeText(document.querySelector('.auditbox-code-block code').textContent)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy Full JSON
              </button>
            </div>
            <div className="auditbox-categories">
              {auditEventCategories.map((cat) => (
                <AuditEventCategory tag={cat.tag} items={cat.items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Accordion Section */}
      <section className="auditbox-benefits">
        <div className="container">
          <h2 className="auditbox-section-title">Designed for Healthcare Security & Audit Needs</h2>
          <div
            className="auditbox-benefits-grid"
            data-signals="{activeAccordion: 0}"
          >
            <div className="auditbox-accordion">
              {benefitsAccordion.map((item) => (
                <div
                  className="auditbox-accordion-item"
                  data-class={`{'auditbox-accordion-item--active': $activeAccordion === ${item.id}}`}
                >
                  <button
                    className="auditbox-accordion-trigger"
                    data-on-click={`$activeAccordion = $activeAccordion === ${item.id} ? -1 : ${item.id}`}
                  >
                    <span className="auditbox-accordion-title">{item.title}</span>
                    <img
                      src="/assets/images/auditbox/arrow-dropdown.svg"
                      alt=""
                      className="auditbox-accordion-arrow"
                      data-class={`{'auditbox-accordion-arrow--open': $activeAccordion === ${item.id}}`}
                    />
                  </button>
                  <div
                    className="auditbox-accordion-content"
                    data-show={`$activeAccordion === ${item.id}`}
                    style={item.id === 0 ? {} : { display: 'none' }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="auditbox-benefits-illustration">
              {benefitsAccordion.map((item) => (
                <img
                  src={item.shape}
                  alt=""
                  className="auditbox-shape"
                  data-show={`$activeAccordion === ${item.id}`}
                  style={item.id === 0 ? {} : { display: 'none' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="auditbox-form-section" id="contact-us">
        <div className="container">
          <div className="auditbox-form-wrapper">
            <h2 className="auditbox-form-title">Get Early Access</h2>
            <p className="auditbox-form-subtitle">we'll get in touch</p>
            <form className="auditbox-form" action="/api/contact" method="POST">
              <input type="hidden" name="source" value="auditbox" />
              <div className="auditbox-form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Business email"
                  required
                  className="auditbox-input"
                />
              </div>
              <div className="auditbox-form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Robert Mason Jr."
                  required
                  className="auditbox-input"
                />
              </div>
              <div className="auditbox-form-field">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                  className="auditbox-input"
                />
              </div>
              <div className="auditbox-form-recaptcha">
                {/* reCAPTCHA placeholder */}
                <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
              </div>
              <button type="submit" className="auditbox-submit-btn">SUBMIT</button>
              <p className="auditbox-form-disclaimer">
                BY SUBMITTING THE FORM YOU AGREE TO{" "}
                <a href="/privacy-policy">PRIVACY POLICY</a> AND{" "}
                <a href="/cookie-policy">COOKIE POLICY</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Awards Section */}
      <section className="auditbox-awards">
        <div className="container">
          <div className="auditbox-awards-logos">
            <img src="/assets/images/auditbox/logo-hipaa.png" alt="HIPAA Compliant" className="auditbox-award-logo" />
            <a href="https://health-samurai.io/news/health-samurai-achieves-iso27001-certification" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/auditbox/logo-iso.svg" alt="ISO/IEC 27001:2022 Certified" className="auditbox-award-logo" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
