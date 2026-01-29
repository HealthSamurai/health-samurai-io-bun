import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Let's build a customizable telemedicine FHIR platform",
  description: "We help companies create their own telehealth solution. Our cross-functional team takes the backbone solution and modifies it for your specific business needs.",
};

// Hero benefits data
const heroBenefits = [
  {
    icon: "/assets/images/telemedicine/icon-boilerplate.svg",
    title: "Aidbox Telehealth",
    description: "Rapid development on top of the backbone solution with basic end-to-end scenario",
  },
  {
    icon: "/assets/images/telemedicine/icon-backend.svg",
    title: "FHIR Backend",
    description: "Ready-to-use backend based on HL7 FHIR with HIPAA eligible infrastructure",
  },
  {
    icon: "/assets/images/telemedicine/icon-team.svg",
    title: "Skilled Dev Team",
    description: "Our cross-functional team carries out a wide range of activities from design to deployment",
  },
  {
    icon: "/assets/images/telemedicine/icon-process.svg",
    title: "Agile & Lean Process",
    description: "Weekly planning and demo allow you to influence and control development",
  },
];

// Telehealth features
const telehealthFeatures = [
  "Registration workflow",
  "Basic scheduling module",
  "Video calls (Integration with Twilio)",
  "Live Chat",
  "Consult Note tool for Practitioners",
  "Basic Personal Health Records (PHR)",
];

// FHIR Backend features
const fhirBackendFeatures = [
  "FHIR Storage based on PostgreSQL and JSONB",
  "FHIR REST API and API Gateway",
  "Additional APIs: SQL API, GraphQL",
  "Authorization Server: OAuth 2.0 & OpenID Connect",
  "Security & Access Control: Access Policies, SMART IG",
  { text: "FHIR", link: "https://www.health-samurai.io/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not" },
  "Custom resources and FHIR/Aidbox Extensions",
  "HL7 v.2, X12 Adapters",
];

// HIPAA Infrastructure features
const hipaaFeatures = [
  "Development infrastructure: Dev / Staging / Production",
  "Automated CI/CD pipeline: Drone CI / Kustomize for k8S",
  "DB Replication and Backups",
  "Monitoring based on Prometheus & Grafana",
  "Audit Log based on ElasticSearch / Kibana / Grafana",
  "File Storage to link to uploaded files",
];

// Pricing items
const pricingItems = [
  { num: "#1", text: "Team Cost" },
  { num: "#2", text: "Aidbox License fee", note: "*" },
  { num: "#3", text: "Aidbox Support fee", note: "**" },
  { num: "#4", text: "External Platforms fees" },
  { num: "#5", text: "Cloud Infrastructure fee" },
];

// Trusted by logos
const trustedLogos = [
  { src: "/assets/images/telemedicine/logo-narus.webp", alt: "Narus Health" },
  { src: "/assets/images/telemedicine/logo-metroderm.webp", alt: "Metro Dermatology" },
  { src: "/assets/images/telemedicine/logo-uhn.webp", alt: "UHN" },
  { src: "/assets/images/telemedicine/logo-bodylogic.webp", alt: "BodyLogicMD" },
  { src: "/assets/images/telemedicine/logo-ynhh.webp", alt: "Yale New Haven Health" },
  { src: "/assets/images/telemedicine/logo-bestnotes.webp", alt: "BestNotes" },
];

// Case study tabs
const caseStudyTabs = [
  { id: "data-platforms", label: "Data platforms", icon: "/assets/images/telemedicine/icon-data-platforms.svg" },
  { id: "ehr", label: "EHR", icon: "/assets/images/telemedicine/icon-ehr.svg" },
  { id: "cds", label: "CDS", icon: "/assets/images/telemedicine/icon-cds.svg" },
  { id: "telehealth", label: "Telehealth", icon: "/assets/images/telemedicine/icon-telehealth.svg" },
  { id: "phr", label: "PHR", icon: "/assets/images/telemedicine/icon-phr.svg" },
];

// Case study data
const caseStudies: Record<string, { logo: string; title: string; description: string; fullStoryUrl?: string }[]> = {
  "data-platforms": [
    {
      logo: "/assets/images/telemedicine/logo-innovaccer.avif",
      title: "Innovaccer is developing a data platform for value-based care, using FHIR for storing healthcare data.",
      description: "They work with large volumes of data and need a FHIR backend that can handle FHIR data with good performance at scale. They chose Aidbox after completing a POC (Proof of Concept) project where they loaded 10 TB of FHIR data into Aidbox and optimized it to handle 120 FHIR queries running under 100 ms each.\n\nAidbox was running on AWS Aurora with 8, 16, and 32 CPU configurations, demonstrating up to 5,000 requests per second.",
      fullStoryUrl: "/casestudies/innovaccer",
    },
    {
      logo: "/assets/images/telemedicine/logo-rhapsody.avif",
      title: "Rhapsody builds healthcare interoperability solutions for seamless data exchange.",
      description: "They leverage Aidbox FHIR server to power their interoperability platform, enabling healthcare organizations to exchange data securely and efficiently using modern FHIR standards.",
      fullStoryUrl: "/casestudies/rhapsody",
    },
  ],
  "ehr": [
    {
      logo: "/assets/images/telemedicine/logo-narus-casestudy.png",
      title: "Narus Health builds advanced EHR solutions for palliative care.",
      description: "They use Aidbox to power their FHIR-based EHR platform, enabling comprehensive patient care management and seamless data integration across care teams.",
      fullStoryUrl: "/casestudies/narus",
    },
    {
      logo: "/assets/images/telemedicine/logo-bestnotes-casestudy.avif",
      title: "BestNotes provides behavioral health EHR solutions.",
      description: "Aidbox powers their FHIR backend, enabling modern interoperability and comprehensive patient record management for behavioral health providers.",
      fullStoryUrl: "/casestudies/bestnotes",
    },
  ],
  "cds": [
    {
      logo: "/assets/images/telemedicine/logo-prenosis.avif",
      title: "Prenosis develops AI-powered clinical decision support for sepsis prediction.",
      description: "Their FDA-cleared Immunix platform uses Aidbox FHIR backend for real-time data processing and seamless Epic EHR integration, enabling early sepsis detection and improved patient outcomes.",
      fullStoryUrl: "/casestudies/prenosis",
    },
    {
      logo: "/assets/images/telemedicine/logo-solutio.avif",
      title: "Solutio builds radiation oncology CDS solutions.",
      description: "They leverage Aidbox for FHIR-based data management, enabling oncologists to make better treatment decisions with comprehensive patient data at their fingertips.",
      fullStoryUrl: "/casestudies/solutio",
    },
  ],
  "telehealth": [
    {
      logo: "/assets/images/telemedicine/logo-willow.avif",
      title: "Willow provides comprehensive telehealth solutions.",
      description: "They use Aidbox to power their FHIR backend, enabling seamless video consultations, appointment scheduling, and patient record management across their telehealth platform.",
      fullStoryUrl: "/casestudies/willow",
    },
    {
      logo: "/assets/images/telemedicine/logo-medflow.avif",
      title: "Medflow develops practice management and telehealth solutions.",
      description: "Aidbox enables their platform to handle FHIR data efficiently, supporting video visits, e-prescribing, and comprehensive care management.",
      fullStoryUrl: "/casestudies/medflow",
    },
  ],
  "phr": [
    {
      logo: "/assets/images/telemedicine/logo-patients.avif",
      title: "Patients Know Best empowers patients with their health records.",
      description: "With 17 million patient records, they use Aidbox FHIR and Form Builder to enhance their PHR platform and UK interoperability, giving patients control over their health data.",
      fullStoryUrl: "/casestudies/patients-know-best",
    },
  ],
};

function HeroForm(): string {
  return (
    <form className="telemed-hero-form" action="/api/contact" method="POST">
      <div className="telemed-form-row">
        <input type="text" name="name" placeholder="Name" required className="telemed-input" />
        <input type="text" name="company" placeholder="Company" required className="telemed-input" />
      </div>
      <div className="telemed-form-row">
        <input type="email" name="email" placeholder="Business Email" required className="telemed-input" />
        <input type="tel" name="phone" placeholder="Phone" className="telemed-input" />
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your needs or project"
        required
        className="telemed-input telemed-textarea"
      ></textarea>
      <div className="telemed-recaptcha">
        {/* reCAPTCHA placeholder */}
        <div className="recaptcha-placeholder">
          <span>reCAPTCHA</span>
        </div>
      </div>
      <button type="submit" className="telemed-submit-btn">LET'S TALK</button>
    </form>
  );
}

function FeatureList({ features }: { features: (string | { text: string; link: string })[] }): string {
  return (
    <ul className="telemed-feature-list">
      {features.map((feature) => (
        <li>
          <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
          {typeof feature === "string" ? (
            <span>{feature}</span>
          ) : (
            <span>
              <a href={feature.link} className="telemed-link">{feature.text}</a> Terminology Server: ICD-10, LOINC, SNOMED CT
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyPanel({ tabId, stories, isDefault }: { tabId: string; stories: typeof caseStudies["data-platforms"]; isDefault: boolean }): string {
  return (
    <div
      className="telemed-case-panel"
      data-show={`$caseStudyTab === '${tabId}'`}
      style={isDefault ? {} : { display: "none" }}
    >
      <div className="telemed-case-content">
        <div className="telemed-case-logo">
          <img src={stories[0]?.logo} alt="" />
        </div>
        <div className="telemed-case-text">
          <p className="telemed-case-title">{stories[0]?.title}</p>
          <p className="telemed-case-desc">{stories[0]?.description}</p>
          {stories[0]?.fullStoryUrl && (
            <a href={stories[0].fullStoryUrl} className="telemed-full-story">Full story</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TelemedicinePage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="telemed-hero" id="telemed-request-form">
        <div className="container">
          <div className="telemed-hero-grid">
            <div className="telemed-hero-content">
              <a href="#telemed-request-form" className="telemed-badge">AIDBOX TELEHEALTH</a>
              <h1>Let's build a customizable telemedicine FHIR platform</h1>
              <p className="telemed-hero-desc">
                We help companies create their own <strong>telehealth solution</strong>.
                Our cross-functional team takes the <a href="#telemed-solution-components" className="telemed-hero-link">backbone solution</a> and
                modifies it for your specific business needs.
              </p>
            </div>
            <div className="telemed-hero-form-wrapper">
              {HeroForm()}
            </div>
          </div>
          <div className="telemed-benefits">
            {heroBenefits.map((benefit) => (
              <div className="telemed-benefit">
                <img src={benefit.icon} alt={benefit.title} className="telemed-benefit-icon" />
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Implementation Section */}
      <section className="telemed-implementation section-alt">
        <div className="container">
          <h2>Product Implementation</h2>
          <div className="telemed-timeline">
            <img src="/assets/images/telemedicine/timeline.svg" alt="Product Implementation Timeline - 3 to 12 months" />
          </div>
        </div>
      </section>

      {/* Aidbox Telehealth Section */}
      <section className="telemed-apps section" id="telemed-solution-components">
        <div className="container">
          <span className="telemed-section-label">Aidbox Telehealth</span>
          <div className="telemed-two-col">
            <div className="telemed-col-text">
              <h3>Telehealth Apps</h3>
              <p>
                Web (React) and mobile (ReactNative) apps provide a basic end-to-end scenario.
                It allows patients and practitioners to manage appointments, view PHRs, make video-calls and chat.
              </p>
              {FeatureList({ features: telehealthFeatures })}
            </div>
            <div className="telemed-col-image">
              <img src="/assets/images/telemedicine/teledemo.gif" alt="Telehealth App Demo" />
            </div>
          </div>
        </div>
      </section>

      {/* Aidbox FHIR Backend Section */}
      <section className="telemed-backend section">
        <div className="container">
          <div className="telemed-two-col telemed-two-col--reverse">
            <div className="telemed-col-image">
              <img src="/assets/images/telemedicine/aidbox-diagram.svg" alt="Aidbox Architecture Diagram" />
            </div>
            <div className="telemed-col-text">
              <h3>Aidbox FHIR Backend</h3>
              <p>
                Aidbox <a href="https://www.health-samurai.io/aidbox" className="telemed-link">FHIR server</a> is a meta-data driven platform.
                It means that almost everything in Aidbox is represented as data (resources) and you can configure it.
                For example, REST endpoints (operations), resource definitions, profiles, and access policies are resources in Aidbox.
              </p>
              <ul className="telemed-feature-list">
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>FHIR Storage based on PostgreSQL and JSONB</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>FHIR REST API and API Gateway</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>Additional APIs: SQL API, GraphQL</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>Authorization Server: OAuth 2.0 & OpenID Connect</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>Security & Access Control: Access Policies, SMART IG</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span><a href="https://www.health-samurai.io/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not" className="telemed-link">FHIR</a> Terminology Server: ICD-10, LOINC, SNOMED CT</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>Custom resources and FHIR/Aidbox Extensions</span>
                </li>
                <li>
                  <img src="/assets/images/telemedicine/icon-checkmark.svg" alt="" className="checkmark-icon" />
                  <span>HL7 v.2, X12 Adapters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Eligible Infrastructure Section */}
      <section className="telemed-hipaa section">
        <div className="container">
          <div className="telemed-two-col">
            <div className="telemed-col-text">
              <h3>HIPAA Eligible Infrastructure</h3>
              <p>
                Automated cloud infrastructure is built on Kubernetes (k8S) for AWS, Azure & GCP and has
                solutions for backups, monitoring, logging. We use dev, staging, and production environments
                with automated CI/CD pipeline.
              </p>
              {FeatureList({ features: hipaaFeatures })}
            </div>
            <div className="telemed-col-image">
              <img src="/assets/images/telemedicine/infra-diagram.svg" alt="HIPAA Infrastructure Diagram" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Cost Structure Section */}
      <section className="telemed-pricing section">
        <div className="container">
          <h2>Project Cost Structure</h2>
          <div className="telemed-pricing-grid">
            <div className="telemed-pricing-table">
              <div className="telemed-pricing-header">
                <span className="telemed-pricing-num">#</span>
                <span className="telemed-pricing-label">Pricing</span>
              </div>
              {pricingItems.map((item) => (
                <div className="telemed-pricing-row">
                  <span className="telemed-pricing-num">{item.num}</span>
                  <span className="telemed-pricing-text">
                    {item.text}
                    {item.note && <span className="telemed-pricing-note"> {item.note}</span>}
                  </span>
                </div>
              ))}
            </div>
            <div className="telemed-pricing-cta">
              <a href="#telemed-request-form" className="telemed-pricing-btn">GET PRICING</a>
            </div>
          </div>
          <div className="telemed-pricing-notes">
            <p>You don't have to pay for the license and support fee as long as Health Samurai is engaged in a development contract.</p>
            <p><span className="telemed-pricing-note">*</span> - Aidbox License fee / if we don't have an active development contract</p>
            <p><span className="telemed-pricing-note">**</span> - Aidbox Support fee / if we don't have an active development contract</p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="telemed-trusted">
        <div className="container">
          <h2>Trusted by</h2>
          <div className="telemed-trusted-logos">
            {trustedLogos.map((logo) => (
              <img src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="telemed-case-studies section">
        <div className="container">
          <h2>Case Studies</h2>
          <div className="telemed-case-tabs" data-signals="{caseStudyTab: 'data-platforms', storyIndex: 0}">
            <div className="telemed-tabs-nav">
              {caseStudyTabs.map((tab, index) => (
                <button
                  className="telemed-tab-btn"
                  data-class={`{'telemed-tab-active': $caseStudyTab === '${tab.id}'}`}
                  data-on-click={`$caseStudyTab = '${tab.id}'; $storyIndex = 0`}
                >
                  <img src={tab.icon} alt="" className="telemed-tab-icon" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="telemed-case-panels">
              {caseStudyTabs.map((tab, index) => (
                CaseStudyPanel({
                  tabId: tab.id,
                  stories: caseStudies[tab.id] || [],
                  isDefault: index === 0
                })
              ))}
            </div>
            <div className="telemed-case-nav">
              <button className="telemed-nav-btn telemed-nav-prev" data-on-click="$storyIndex = Math.max(0, $storyIndex - 1)">
                <span>←</span> Previous story
              </button>
              <a href="/aidbox#run" className="btn btn-primary">Try Aidbox for free</a>
              <button className="telemed-nav-btn telemed-nav-next" data-on-click="$storyIndex = $storyIndex + 1">
                Next story <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="telemed-contact section">
        <div className="container">
          <div className="telemed-contact-wrapper">
            <h2>Start a conversation with us</h2>
            <p className="telemed-contact-subtitle">Please fill out this form and we'll be in touch shortly</p>
            <form className="telemed-contact-form" action="/api/contact" method="POST">
              <div className="telemed-form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" required className="telemed-input" />
              </div>
              <div className="telemed-form-group">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" required className="telemed-input" />
              </div>
              <div className="telemed-form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input type="tel" id="contact-phone" name="phone" required className="telemed-input" />
              </div>
              <div className="telemed-form-group">
                <label htmlFor="contact-message">Tell us about your needs or project</label>
                <textarea id="contact-message" name="message" required className="telemed-input telemed-textarea"></textarea>
              </div>
              <div className="telemed-recaptcha">
                <div className="recaptcha-placeholder">
                  <span>reCAPTCHA</span>
                </div>
              </div>
              <button type="submit" className="telemed-submit-btn">LET'S TALK</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
