import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Insurance FHIR software. FHIR Compliant with the new CMS FHIR rule",
  description: "Aidbox FHIR server helps health plans comply with the CMS Interoperability and Patient Access rule",
};

// Feature card data
const features = [
  {
    icon: "/assets/images/payers/feature-integrations.webp",
    title: "Integration capabilities",
    description: "Built-in adapters for X12 EDI, HL7 v2 feeds, and mapping language for custom integrations facilitate aggregation and translation of data.",
  },
  {
    icon: "/assets/images/payers/feature-fhir-server.webp",
    title: "HL7 FHIR API",
    description: "RESTful HL7 FHIR API v4.0.1 and SMART-on-FHIR specification support allow compliant and secure access to data.",
  },
  {
    icon: "/assets/images/payers/feature-fhir-portal.webp",
    title: "FHIR Storage",
    description: "Scalable storage for FHIR data on top of PostgreSQL with JSONB provides excellent performance for all your use cases.",
  },
  {
    icon: "/assets/images/payers/feature-access-control.webp",
    title: "Access control",
    description: 'OAuth 2.0 & OpenID Connect auth <a href="/fhir-server">server</a> and access policies ensure security and allow single sign-on with the existing member portal.',
  },
  {
    icon: "/assets/images/payers/feature-monitoring.webp",
    title: "Monitoring & Audit",
    description: "Automated Kubernetes infrastructure offers monitoring dashboards, audit log, and point-in-time recovery while keeping deployment and maintenance easy.",
  },
  {
    icon: "/assets/images/payers/feature-fhir-portal.webp",
    title: "FHIR Portal",
    description: "FHIR portal for members, app vendors, and administrators allows intuitive management of application ecosystem and data access.",
  },
  {
    icon: "/assets/images/payers/feature-fhir-portal.webp",
    title: "MPI module",
    description: '<a href="/articles/master-patient-index-and-record-linkage">MPI</a> module ensures that all the data coming from different sources is associated with the right patient.',
  },
  {
    icon: "/assets/images/payers/feature-monitoring.webp",
    title: "Terminology Server",
    description: "Built-in ICD-10, SNOMED, RxNorm, LOINC, and US NPI terminologies validate the quality of data that is coming in.",
  },
  {
    icon: "/assets/images/payers/feature-dev-platform.webp",
    title: "Development platform",
    description: "Aidbox is a development platform with a rich set of API that helps create an ecosystem of FHIR applications. Bring 3rd party apps and build yours.",
  },
];

// Case study data by tab
const caseStudies = {
  "data-platforms": [
    {
      logo: "/assets/images/payers/logo-innovaccer.avif",
      title: "Innovaccer is developing a data platform for value-based care, using FHIR for storing healthcare data.",
      description: 'They work with large volumes of data and need a <a href="/fhir-server" class="payers-link">FHIR backend</a> that can handle FHIR data with good performance at scale. They chose Aidbox after completing a POC (Proof of Concept) project where they loaded 10 TB of FHIR data into Aidbox and optimized it to handle 120 FHIR queries running under 100 ms each.',
      extra: "Aidbox was running on AWS Aurora with 8, 16, and 32 CPU configurations, demonstrating up to 5,000 requests per second.",
      link: "/casestudies/innovaccer",
    },
    {
      logo: "/assets/images/payers/logo-rhapsody.avif",
      title: "Rhapsody provides healthcare API gateway for HL7 v2 to FHIR.",
      description: "They integrated Aidbox as their FHIR server component to provide complete FHIR interoperability solutions.",
      link: "/casestudies/rhapsody",
    },
  ],
  ehr: [
    {
      logo: "/assets/images/payers/logo-narus.png",
      title: "Narus Health launched their EHR platform in 6 months.",
      description: "They scaled to 300 clients and were later acquired by Lucent Health, demonstrating the value of building on Aidbox.",
      link: "/casestudies/narus",
    },
    {
      logo: "/assets/images/payers/logo-bestnotes.avif",
      title: "BestNotes provides behavioral health EHR to 2,000 practices.",
      description: "Aidbox powers their FHIR-based infrastructure for patient data management and interoperability.",
      link: "/casestudies/bestnotes",
    },
    {
      logo: "/assets/images/payers/logo-solutio.avif",
      title: "Solutio is a German dental EHR serving 4,000 practices.",
      description: "They use Aidbox for FHIR compliance and data management across their dental practice network.",
      link: "/casestudies/solutio",
    },
  ],
  cds: [
    {
      logo: "/assets/images/payers/logo-prenosis.avif",
      title: "Prenosis develops AI-powered clinical decision support.",
      description: "Their sepsis prediction system runs on Aidbox FHIR infrastructure for real-time clinical analytics.",
      link: "/casestudies/prenosis",
    },
    {
      logo: "/assets/images/payers/logo-medflow.avif",
      title: "Medflow offers CDS solutions for healthcare providers.",
      description: "They leverage Aidbox for FHIR-native clinical workflows and decision support integration.",
      link: "/casestudies/medflow",
    },
  ],
  telehealth: [
    {
      logo: "/assets/images/payers/logo-willow.avif",
      title: "Willow provides telehealth and remote patient monitoring.",
      description: "They built their platform on Aidbox to enable seamless FHIR data exchange with provider systems.",
      link: "/casestudies/willow",
    },
  ],
  phr: [
    {
      logo: "/assets/images/payers/logo-patients.avif",
      title: "Patients Know Best enables patient-controlled health records.",
      description: "Their PHR platform uses Aidbox for FHIR-based patient data management and sharing.",
      link: "/casestudies/patients-know-best",
    },
  ],
};

// Tab configuration
const tabs = [
  { id: "data-platforms", label: "Data platforms", icon: "/assets/images/payers/tab-icon-data-platforms.svg" },
  { id: "ehr", label: "EHR", icon: "/assets/images/payers/tab-icon-ehr.svg" },
  { id: "cds", label: "CDS", icon: "/assets/images/payers/tab-icon-cds.svg" },
  { id: "telehealth", label: "Telehealth", icon: "/assets/images/payers/tab-icon-telehealth.svg" },
  { id: "phr", label: "PHR", icon: "/assets/images/payers/tab-icon-phr.svg" },
];

// Client logos
const clients = [
  { src: "/assets/images/payers/client-narus.webp", alt: "Narus" },
  { src: "/assets/images/payers/client-metroderm.webp", alt: "Metroderm" },
  { src: "/assets/images/payers/client-uhn.webp", alt: "UHN" },
  { src: "/assets/images/payers/client-bodylogic.webp", alt: "BodyLogic" },
  { src: "/assets/images/payers/client-ynhh.webp", alt: "YNHH" },
  { src: "/assets/images/payers/client-bestnotes.webp", alt: "BestNotes" },
];

// Step list for Journey section
const steps = [
  "Deployment of Aidbox Platform to the infrastructure of your choice",
  "Integration of Aidbox with existing data sources/data flows",
  "Configuration of OAuth 2.0 Authorization Flow",
  'Configuration of single sign-on for <a href="/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not" class="payers-link">FHIR</a> and member portals',
  "Publishing API documentation for App Vendors",
];

function FeatureCard({ feature }: { feature: typeof features[0] }): string {
  return (
    <div className="payers-feature-card">
      <div className="payers-feature-icon">
        <img src={feature.icon} alt={feature.title} />
      </div>
      <h3 className="payers-feature-title">{feature.title}</h3>
      <div className="payers-feature-divider"></div>
      <p className="payers-feature-desc" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
    </div>
  );
}

function CaseStudyCard({ study }: { study: typeof caseStudies["data-platforms"][0] }): string {
  return (
    <div className="payers-case-card">
      <div className="payers-case-logo">
        <img src={study.logo} alt="" />
        <div className="payers-case-play">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="payers-case-content">
        <h4 className="payers-case-title">{study.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: study.description }}></p>
        {study.extra && <p>{study.extra}</p>}
        <a href={study.link} className="payers-link">Full story</a>
      </div>
    </div>
  );
}

export default function PayersPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="payers-hero">
        <div className="container">
          <div className="payers-hero-grid">
            <div className="payers-hero-content">
              <span className="payers-hero-tag">WHITEPAPER</span>
              <h1>Let's bring FHIR to your Health Plan</h1>
              <p>
                Aidbox <a href="/fhir-server" className="payers-hero-link">FHIR server</a> helps health plans to comply with the CMS Interoperability and Patient Access rule without stress <strong>in 3 to 6 months</strong>.
              </p>
            </div>
            <div className="payers-hero-form">
              <form action="/api/contact" method="POST">
                <input type="hidden" name="form_name" value="payers-request" />
                <div className="payers-form-group">
                  <input type="text" name="name" placeholder="Name" required className="payers-form-input" />
                </div>
                <div className="payers-form-group">
                  <input type="email" name="email" placeholder="Email" required className="payers-form-input" />
                </div>
                <div className="payers-form-group">
                  <input type="tel" name="phone" placeholder="Phone" className="payers-form-input" />
                </div>
                <button type="submit" className="btn btn-primary payers-form-btn">REQUEST A DEMO</button>
                <div className="payers-recaptcha">
                  {/* reCAPTCHA placeholder */}
                  <div className="payers-recaptcha-placeholder">
                    <span>reCAPTCHA</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Shift to FHIR Section */}
      <section className="payers-shift section">
        <div className="container">
          <h2 className="payers-section-title">A shift to the FHIR ecosystem</h2>

          <div className="payers-shift-diagram">
            <div className="payers-diagram-challenge">
              <img src="/assets/images/payers/diagram-challenge.webp" alt="Challenge: Multiple data sources" />
            </div>
            <div className="payers-diagram-arrow">
              <span>›››</span>
            </div>
            <div className="payers-diagram-solution">
              <img src="/assets/images/payers/diagram-solution.webp" alt="Solution: Aidbox FHIR" />
            </div>
          </div>

          <div className="payers-cards-grid">
            <div className="payers-challenge-card">
              <h3>The Challenge</h3>
              <div className="payers-card-divider"></div>
              <p>
                You have to share a provider directory, drug formulary, claims, encounter, and clinical data with 3rd party apps over HL7 FHIR API. It's not a simple task when this data is stored in different formats across multiple systems.
              </p>
              <ul className="payers-list payers-list--warning">
                <li>
                  <img src="/assets/images/payers/icon-alert.webp" alt="" className="payers-list-icon" />
                  <span>Many sources of data in different formats</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-alert.webp" alt="" className="payers-list-icon" />
                  <span>Lack of expertise in HL7 FHIR and CARIN, DaVinci, US Core</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-alert.webp" alt="" className="payers-list-icon" />
                  <span>Unfamiliar authorization flow</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-alert.webp" alt="" className="payers-list-icon" />
                  <span>Limited time for implementation</span>
                </li>
              </ul>
            </div>

            <div className="payers-solution-card">
              <h3>The Solution</h3>
              <div className="payers-card-divider"></div>
              <p>
                Aidbox <a href="/fhir-server" className="payers-link">FHIR Platform</a> allows you to achieve FHIR compliance timely and without stress. The platform aggregates all required data with the help of built-in adapters to a single FHIR repository and provides a secure HL7 FHIR API for SMART on FHIR Apps.
              </p>
              <ul className="payers-list payers-list--success">
                <li>
                  <img src="/assets/images/payers/icon-check.webp" alt="" className="payers-list-icon" />
                  <span>Aidbox FHIR Platform with secure HL7 FHIR API v4.0.1</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-check.webp" alt="" className="payers-list-icon" />
                  <span>Support of OAuth 2.0, OpenID Connect and SMART on FHIR</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-check.webp" alt="" className="payers-list-icon" />
                  <span>FHIR Portal for Members, App vendors, and your Admins</span>
                </li>
                <li>
                  <img src="/assets/images/payers/icon-check.webp" alt="" className="payers-list-icon" />
                  <span>Automated Infrastructure with monitoring and audit log</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="payers-features section">
        <div className="container">
          <h2 className="payers-section-title">Key features</h2>
          <div className="payers-features-grid">
            {features.map((feature) => (
              <FeatureCard feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Your FHIR Ecosystem Section */}
      <section className="payers-ecosystem section-alt">
        <div className="container">
          <h2 className="payers-section-title">Your FHIR ecosystem</h2>

          <div className="payers-ecosystem-grid">
            <div className="payers-ecosystem-content">
              <h3>Journey with Aidbox</h3>
              <p>
                To help you meet the new CMS policies, we assembled the Aidbox <a href="/fhir-server" className="payers-link">FHIR server</a> for Health Plans. It can be deployed side by side with your existing solutions and integrates into existing data flows. Aidbox aggregates all the data required to be made available through the FHIR API. We provide dedicated FHIR experts who help to deploy, integrate, and configure Aidbox to accommodate your data sources, authorization and member portal technologies, branding, and other specific requirements.
              </p>

              <h4 className="payers-steps-title">STEP-BY-STEP GUIDE</h4>
              <ul className="payers-steps-list">
                {steps.map((step) => (
                  <li>
                    <img src="/assets/images/payers/icon-check.webp" alt="" className="payers-list-icon" />
                    <span dangerouslySetInnerHTML={{ __html: step }}></span>
                  </li>
                ))}
              </ul>

              <a href="#hp-request-form" className="btn btn-outline payers-whitepaper-btn">GET WHITE PAPER</a>
            </div>

            <div className="payers-ecosystem-diagram">
              <img src="/assets/images/payers/diagram-fhir-platform.webp" alt="FHIR Platform Architecture" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="payers-case-studies">
        <div className="container">
          <h2 className="payers-section-title">Case Studies</h2>

          <div className="payers-tabs" data-signals="{activeTab: 'data-platforms', slideIndex: 0}">
            <div className="payers-tabs-nav">
              {tabs.map((tab) => (
                <button
                  className="payers-tab-btn"
                  data-class={`{'payers-tab-btn--active': $activeTab === '${tab.id}'}`}
                  data-on-click={`$activeTab = '${tab.id}'; $slideIndex = 0`}
                >
                  <div className="payers-tab-icon">
                    <img src={tab.icon} alt="" />
                  </div>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            {Object.entries(caseStudies).map(([tabId, studies]) => (
              <div
                className="payers-tab-panel"
                data-show={`$activeTab === '${tabId}'`}
                style={tabId !== "data-platforms" ? { display: "none" } : {}}
              >
                <div className="payers-case-slider">
                  {studies.map((study, index) => (
                    <div
                      className="payers-case-slide"
                      data-show={`$slideIndex === ${index}`}
                      style={index !== 0 ? { display: "none" } : {}}
                    >
                      <CaseStudyCard study={study} />
                    </div>
                  ))}
                </div>

                <div className="payers-slider-nav">
                  <button
                    className="payers-slider-prev"
                    data-on-click={`$slideIndex = ($slideIndex - 1 + ${studies.length}) % ${studies.length}`}
                  >
                    ‹ Previous story
                  </button>
                  <a href="/aidbox#run" className="btn btn-primary">Try Aidbox for free</a>
                  <button
                    className="payers-slider-next"
                    data-on-click={`$slideIndex = ($slideIndex + 1) % ${studies.length}`}
                  >
                    Next story ›
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="payers-clients section">
        <div className="container">
          <h2 className="payers-section-title">Clients that trust the Aidbox Platform</h2>
          <div className="payers-clients-grid">
            {clients.map((client) => (
              <div className="payers-client-logo">
                <img src={client.src} alt={client.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="payers-contact section" id="hp-request-form">
        <div className="container">
          <div className="payers-contact-wrapper">
            <h2>Start a conversation with us</h2>
            <p className="payers-contact-subtitle">Please fill out a form and we will send you our white paper and schedule a demo</p>

            <form action="/api/contact" method="POST" className="payers-contact-form">
              <input type="hidden" name="form_name" value="payers-whitepaper" />

              <div className="payers-contact-field">
                <label htmlFor="contact-name">NAME</label>
                <input type="text" id="contact-name" name="name" required />
              </div>

              <div className="payers-contact-field">
                <label htmlFor="contact-email">EMAIL</label>
                <input type="email" id="contact-email" name="email" required />
              </div>

              <div className="payers-contact-field">
                <label htmlFor="contact-phone">PHONE</label>
                <input type="tel" id="contact-phone" name="phone" />
              </div>

              <div className="payers-recaptcha">
                <div className="payers-recaptcha-placeholder">
                  <span>reCAPTCHA</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary payers-contact-btn">REQUEST A DEMO & WHITE PAPER</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
