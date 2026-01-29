import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "EHR Toolkit",
  description: "The All-in-One Toolkit for EHR Development with Aidbox",
  hideFooter: true,
};

// Tab data
const toolkitTabs = [
  {
    id: "fhir",
    icon: "/assets/images/ehr-toolkit/icon-toolkit-fhir.svg",
    title: "FHIR Backend",
    description: "Manage and work with data securely through different APIs such as HL7 FHIR, GraphQL, SQL on FHIR and more",
  },
  {
    id: "integration",
    icon: "/assets/images/ehr-toolkit/icon-toolkit-integration.svg",
    title: "Integration tools",
    description: "Make your EHR interoperable and communicate more easily with LIS, RIS, pharmacy systems and other solutions",
  },
  {
    id: "modules",
    icon: "/assets/images/ehr-toolkit/icon-toolkit-modules.svg",
    title: "Modules",
    description: "Build your EHR smoothly with pre-build Aidbox modules, customize them, and develop your own in the same way",
  },
];

// Tab 1: FHIR Backend features
const fhirFeatures = [
  {
    title: "FHIR-Native Database",
    description: "Get a structured FHIR data model to avoid mistakes, and extend it with custom FHIR resources for specific cases",
  },
  {
    title: "Archive & Restore API",
    description: "Archive unnecessary FHIR data to cloud storage services like AWS S3, Azure or GCP, and restore it when needed with a configurable Archive & Restore API",
  },
  {
    title: "File Storage Integration",
    description: "Store unstructured data in cloud storage services like GCP, AWS S3 or Azure, while storing your metadata in FHIR resources",
  },
  {
    title: "Access Control",
    description: "Control access to medical data with an RBAC-based approach & handle user and clients permissions directly in the Aidbox UI",
  },
  {
    title: "HL7® FHIR® & other APIs",
    description: "Ensure data interoperability using RESTful FHIR & other APIs on top of Aidbox; track changes or execute automated scenarios with Reactive API",
  },
  {
    title: "Bulk API",
    description: "Import & export massive FHIR data for an initial population of your EHR or export data for analytical or exchange needs",
  },
  {
    title: "Workflow Engine",
    description: "Automate various scenarios for administrative and clinical tasks with a built-in workflow engine, and describe it end-to-end with DSL",
    badge: "In Progress",
  },
];

// Tab 2: Integration features
const integrationFeatures = [
  {
    title: "C-CDA / FHIR Converter",
    description: "Aggregate C-CDA data from any source and share your FHIR data with external systems using the bidirectional C-CDA/FHIR Converter without the need for complex configuration",
  },
  {
    title: "HL7 v2 / FHIR Converter",
    description: "Integrate with various systems that communicate through HL7 v2 messages, plug the converter into an existing ETL pipeline or create your own",
    badge: "In Progress",
  },
  {
    title: "X12 / FHIR Converter",
    description: "Integrate with external billing solutions and clearinghouses using the bidirectional X12/FHIR Converter",
    badge: "In Progress",
  },
];

// Tab 3: Module features
const moduleFeatures = [
  {
    title: "Form Builder",
    description: "Design intelligent & styled forms with pre-filled historical data & calculated fields to capture user data in a unified and well-structured format",
  },
  {
    title: "Auth Server",
    description: "Authenticate users and control access with the built-in Auth Server, or connect your EHR solution with an external identity like Okta, Keycloak, Azure AD, etc.",
  },
  {
    title: "Master Patient Index",
    description: "Deal with patient record duplicates with a pre-build ML model and improve it with your specific dataset",
  },
  {
    title: "SDKs",
    description: "Speed up the development of your web, mobile apps, and backend extension with a handy SDK and sample apps on top of the Aidbox backend",
  },
  {
    title: "Terminology Module",
    description: "Handle various terminologies and vocabularies like ICD-10, RxNorm, SNOMED, LOINC and more in one place for coding your EHR data",
  },
  {
    title: "Billing Module",
    description: "Build your billing solution using the Aidbox Billing Module, starting with a billing backbone preset with default claims management",
    badge: "In Progress",
  },
];

// Trusted by logos
const trustedLogos = [
  { src: "/assets/images/ehr-toolkit/logo-charted-health.svg", alt: "Charted Health" },
  { src: "/assets/images/ehr-toolkit/logo-one-clinic.svg", alt: "ONE Clinic" },
  { src: "/assets/images/ehr-toolkit/logo-pkb.svg", alt: "Patients Know Best" },
  { src: "/assets/images/ehr-toolkit/logo-best-notes.svg", alt: "BestNotes" },
  { src: "/assets/images/ehr-toolkit/logo-healthie.svg", alt: "Healthie" },
];

// Testimonials data
const testimonials = [
  {
    id: 0,
    name: "Hans Benson",
    title: "Sr. Product Manager, Interoperability",
    company: "Navigating Cancer",
    quote: "We just passed g10 certification with Drummond. Thank you Health Samurai team for all of your help and hard work getting your solution working and set up for us!",
    photo: "/assets/images/ehr-toolkit/photo-hans-benson.svg",
  },
  {
    id: 1,
    name: "Tulasidhar Chatakonda",
    title: "Team Lead",
    company: "DOX EMR",
    quote: "DOX EMR was done with G10 in 20 min - Aidbox team provided support, helpful questions for the test, and set up Aidbox Portal and Aidbox Sandbox servers for creating tenants, patients, users, and other necessary components.",
    photo: "/assets/images/ehr-toolkit/photo-dox-emr.svg",
  },
  {
    id: 2,
    name: "Todd Stuart",
    title: "Sr. Director Data Science/Management/Engineering",
    company: "New Directions Behavioural Health",
    quote: "We evaluated different FHIR servers for a high priority project at NDBH. We decided to use Aidbox due to its scalability, reliability, and ease of use. We appreciate the prompt and top-notch support Health Samurai provides to our team.",
    photo: "/assets/images/ehr-toolkit/photo-todd-stuart.svg",
  },
  {
    id: 3,
    name: "Rob Stokes",
    title: "VP, Information Technology",
    company: "Narus Health / Lucent Health",
    quote: "Aidbox provides us with a data layer, terminology server, document storage and some other features, allowing us to focus on developing our business logic. Their team has been able to help us solve our business problems using FHIR.",
    photo: "/assets/images/ehr-toolkit/photo-rob-stokes.svg",
  },
  {
    id: 4,
    name: "Dalia V Elizalde",
    title: "Pertexa Customer Success Team",
    company: "PertexaHealthTech",
    quote: "We really appreciate the assistance provided by Aidbox throughout the G10 certification process. Their team guided us step-by-step and shared valuable insights and best practices that helped us better understand FHIR and its implementation.",
    photo: "/assets/images/ehr-toolkit/photo-dalia-elizalde.svg",
  },
];

// Certified partners logos
const certifiedLogos = [
  { src: "/assets/images/ehr-toolkit/logo-navigating-cancer.svg", alt: "Navigating Cancer" },
  { src: "/assets/images/ehr-toolkit/logo-healthie.svg", alt: "Healthie" },
  { src: "/assets/images/ehr-toolkit/logo-rxnt.svg", alt: "RXNT" },
  { src: "/assets/images/ehr-toolkit/logo-next-services.svg", alt: "Next Services" },
  { src: "/assets/images/ehr-toolkit/logo-core.svg", alt: "Core" },
  { src: "/assets/images/ehr-toolkit/logo-dox-emr.svg", alt: "DOX EMR" },
];

function FeatureCard({ title, description, badge, stickIcon }: { title: string; description: string; badge?: string; stickIcon: string }): string {
  return (
    <div className="ehr-feature-card">
      <div className="ehr-feature-header">
        <img src={stickIcon} alt="" className="ehr-feature-stick" />
        <h4 className="ehr-feature-title">{title}</h4>
        {badge && <span className="ehr-feature-badge">{badge}</span>}
      </div>
      <p className="ehr-feature-desc">{description}</p>
    </div>
  );
}

function SurveyCard({ arrowIcon }: { arrowIcon: string }): string {
  return (
    <div className="ehr-survey-card">
      <h4 className="ehr-survey-title">Did we miss something?</h4>
      <p className="ehr-survey-desc">Share what other features you would like to see in Aidbox</p>
      <a href="https://forms.gle/5SE2k27JgD2fp1Wh9" className="ehr-survey-link" target="_blank" rel="noopener noreferrer">
        Fill the survey
        <img src={arrowIcon} alt="" className="ehr-survey-arrow" />
      </a>
    </div>
  );
}

export default function EhrToolkitPage(): string {
  return (
    <Fragment>
      {/* Sub-Navigation Bar */}
      <nav className="ehr-subnav" role="navigation">
        <div className="ehr-subnav-content">
          <a href="#" className="ehr-subnav-logo">
            <img src="/assets/images/ehr-toolkit/logo-aidbox.svg" alt="Aidbox" />
          </a>
          <div className="ehr-subnav-links">
            <a href="#ehr-toolkit-wrapper" className="ehr-subnav-link">Overview</a>
            <a href="#ehr-brochure-wrapper" className="ehr-subnav-link">EHR Brochure</a>
            <a href="#ehr-g10-section" className="ehr-subnav-link">ONC Certification</a>
          </div>
          <a href="https://aidbox.app/ui/portal#/signup" className="ehr-subnav-btn">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ehr-hero">
        <div className="container">
          <h1 className="ehr-hero-title">
            The All-in-One Toolkit for<br />
            EHR Development
          </h1>
          <p className="ehr-hero-desc">
            Develop custom EHRs with the Aidbox EHR toolkit, or enrich your existing EHRs with pluggable and configurable modules like Form Builder, <a href="/articles/master-patient-index-and-record-linkage" className="ehr-hero-link">MPI</a>, and the standardized <strong>FHIR API</strong>
          </p>
          <div className="ehr-hero-actions">
            <a href="#ehr-cta-wrapper" className="btn btn-primary btn-lg ehr-hero-btn">Book a demo</a>
            <a href="https://aidbox.app/ui/portal#/signup" className="ehr-hero-signup">
              Sign up
              <img src="/assets/images/ehr-toolkit/icon-arrow-right.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="ehr-hero-bg">
          <img src="/assets/images/ehr-toolkit/bg-hexagons.webp" alt="" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="ehr-trusted">
        <div className="container">
          <p className="ehr-trusted-label">TRUSTED BY MANY EHR VENDORS</p>
          <div className="ehr-trusted-logos">
            {trustedLogos.map((logo) => (
              <img src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Aidbox EHR Toolkit Section */}
      <section className="ehr-toolkit-section" id="ehr-toolkit-wrapper">
        <div className="container">
          <h2 className="ehr-toolkit-heading">
            Explore <span className="text-primary">Aidbox</span> EHR Toolkit
          </h2>

          {/* Tabs */}
          <div className="ehr-tabs" data-signals="{ehrTab: 'fhir'}">
            <div className="ehr-tabs-list">
              {toolkitTabs.map((tab) => (
                <button
                  className="ehr-tab"
                  data-class={`{'ehr-tab--active': $ehrTab === '${tab.id}'}`}
                  data-on-click={`$ehrTab = '${tab.id}'`}
                >
                  <div className="ehr-tab-content">
                    <h4 className="ehr-tab-title">{tab.title}</h4>
                    <p className="ehr-tab-desc">{tab.description}</p>
                  </div>
                  <img src={tab.icon} alt="" className="ehr-tab-icon" />
                </button>
              ))}
            </div>

            {/* Tab Panel: FHIR Backend */}
            <div className="ehr-tab-panel" data-show="$ehrTab === 'fhir'">
              <div className="ehr-features-grid">
                {fhirFeatures.map((feature) => (
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    badge={feature.badge}
                    stickIcon="/assets/images/ehr-toolkit/icon-stick-red.svg"
                  />
                ))}
                <SurveyCard arrowIcon="/assets/images/ehr-toolkit/icon-arrow-red.svg" />
              </div>
            </div>

            {/* Tab Panel: Integration tools */}
            <div className="ehr-tab-panel" data-show="$ehrTab === 'integration'" style="display: none">
              <div className="ehr-features-grid">
                {integrationFeatures.map((feature) => (
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    badge={feature.badge}
                    stickIcon="/assets/images/ehr-toolkit/icon-stick-integration.svg"
                  />
                ))}
                <SurveyCard arrowIcon="/assets/images/ehr-toolkit/icon-arrow-integration.svg" />
              </div>
            </div>

            {/* Tab Panel: Modules */}
            <div className="ehr-tab-panel" data-show="$ehrTab === 'modules'" style="display: none">
              <div className="ehr-features-grid">
                {moduleFeatures.map((feature) => (
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    badge={feature.badge}
                    stickIcon="/assets/images/ehr-toolkit/icon-stick-modules.svg"
                  />
                ))}
                <SurveyCard arrowIcon="/assets/images/ehr-toolkit/icon-arrow-modules.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EHR Brochure Section */}
      <section className="ehr-brochure-section" id="ehr-brochure-wrapper">
        <div className="container">
          <div className="ehr-brochure-card">
            <div className="ehr-brochure-preview">
              <img src="/assets/images/ehr-toolkit/brochure-preview.svg" alt="EHR Development Toolkit Brochure" />
            </div>
            <div className="ehr-brochure-content">
              <div className="ehr-brochure-header">
                <h2 className="ehr-brochure-title">Need more details?</h2>
                <img src="/assets/images/ehr-toolkit/icon-download.svg" alt="" className="ehr-brochure-icon" />
              </div>
              <p className="ehr-brochure-desc">
                Download our EHR brochure and discover how Aidbox can save you up to 70% of your time when kickstarting your EHR development
              </p>
              <a href="/downloads/ehr-development-toolkit-brochure" className="btn btn-primary ehr-brochure-btn">Download</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="ehr-testimonials-section">
        <div className="container">
          <div className="ehr-testimonials-wrapper" data-signals="{testimonialIdx: 0}">
            {/* Carousel */}
            <div className="ehr-carousel">
              {testimonials.map((t, idx) => (
                <div
                  className="ehr-testimonial"
                  data-show={`$testimonialIdx === ${idx}`}
                  style={idx === 0 ? undefined : "display: none"}
                >
                  <div className="ehr-testimonial-header">
                    <img src={t.photo} alt={t.name} className="ehr-testimonial-photo" />
                    <div className="ehr-testimonial-info">
                      <span className="ehr-testimonial-name">{t.name}</span>
                      <span className="ehr-testimonial-title">{t.title}</span>
                      <span className="ehr-testimonial-company">{t.company}</span>
                    </div>
                  </div>
                  <div className="ehr-testimonial-body">
                    <button
                      className="ehr-carousel-next"
                      data-on-click="$testimonialIdx = ($testimonialIdx + 1) % 5"
                      aria-label="Next testimonial"
                    >
                      <img src="/assets/images/ehr-toolkit/icon-slider-arrow.svg" alt="" />
                    </button>
                    <p className="ehr-testimonial-quote">{t.quote}</p>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="ehr-carousel-dots">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <button
                    className="ehr-carousel-dot"
                    data-class={`{'ehr-carousel-dot--active': $testimonialIdx === ${idx}}`}
                    data-on-click={`$testimonialIdx = ${idx}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Aidbox as a service */}
            <div className="ehr-aidbox-service">
              <h1 className="ehr-aidbox-service-title"><strong>Aidbox as a service</strong></h1>
              <p className="ehr-aidbox-service-text">
                Leading companies rely on <a href="/fhir-server" className="text-primary">Aidbox FHIR Server</a> as a crucial component of their EHR systems.
              </p>
              <p className="ehr-aidbox-service-text">
                With a superior FHIR backend and highly adaptable modules, Aidbox guarantees data security, interoperability, and compliance with various regulations such as HIPAA and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ehr-cta-section" id="ehr-cta-wrapper">
        <div className="container">
          <h2 className="ehr-cta-heading">
            Let's get <span className="text-primary">started</span>
          </h2>
          <div className="ehr-cta-cards">
            <div className="ehr-cta-card ehr-cta-card--primary">
              <div className="ehr-cta-card-header">
                <h4 className="ehr-cta-card-title">Get in touch</h4>
                <a href="#ehr-cta-wrapper" className="btn btn-primary">Book a demo</a>
              </div>
              <p className="ehr-cta-card-desc">Let's discuss your specific case in detail and build Aidbox around your needs</p>
            </div>
            <div className="ehr-cta-card">
              <div className="ehr-cta-card-header">
                <h4 className="ehr-cta-card-title">Try now</h4>
                <a href="https://aidbox.app/ui/portal#/signup" className="ehr-cta-link">
                  Sign up
                  <img src="/assets/images/ehr-toolkit/icon-arrow-right-small.svg" alt="" />
                </a>
              </div>
              <p className="ehr-cta-card-desc">
                Get instant access to developer sandbox and evaluate Aidbox <a href="/fhir-server" className="text-primary">FHIR server</a> yourself
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONC Certification Section */}
      <section className="ehr-onc-section" id="ehr-g10-section">
        <div className="ehr-onc-container">
          <div className="ehr-onc-wrapper">
            <div className="ehr-onc-content">
              <h2 className="ehr-onc-title">
                Get your EHR ONC-certified with Aidbox <span className="text-primary">FHIR API</span>
              </h2>
              <p className="ehr-onc-desc">
                Provide patients and population services with seamless and secure access to health information.
              </p>
              <p className="ehr-onc-desc">
                All certified EHRs need to provide a read-only HL7 FHIR API to meet the requirements mentioned in §170.315(g)(10) in the 2015 Edition Cures Update.
              </p>
              <div className="ehr-onc-actions">
                <a href="#ehr-cta-wrapper" className="btn btn-primary">Book a demo</a>
                <a href="/fhir-api" className="ehr-onc-link">
                  Learn more
                  <img src="/assets/images/ehr-toolkit/icon-arrow-right-small.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="ehr-onc-image">
              <img src="/assets/images/ehr-toolkit/certificate.svg" alt="ONC Certification" />
            </div>
          </div>

          {/* Certified Partners - inside ONC section */}
          <div className="ehr-certified-wrapper">
            <h6 className="ehr-certified-label">SUCCESSFULLY CERTIFIED WITH US</h6>
            <div className="ehr-certified-logos">
              {certifiedLogos.map((logo) => (
                <img src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Footer with Subscribe Form */}
      <footer className="ehr-footer">
        <div className="ehr-footer-container">
          {/* Subscribe Form */}
          <form
            className="ehr-footer-subscribe"
            action="https://health-samurai.us19.list-manage.com/subscribe/post?u=1c57d4d1b1aaffde230e81f34&amp;id=0197cbafab"
            method="post"
            target="_blank"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Business Email address"
              required
              className="ehr-footer-input"
            />
            <button type="submit" className="ehr-footer-submit">Subscribe to Blog</button>
          </form>

          {/* Footer Links */}
          <div className="ehr-footer-links">
            <div className="ehr-footer-column">
              <span className="ehr-footer-column-title">resources</span>
              <a href="/blog" className="ehr-footer-link">Blog</a>
              <a href="https://docs.aidbox.app" className="ehr-footer-link">Documentation</a>
              <a href="https://docs.aidbox.app/overview/release-notes" className="ehr-footer-link">Release Notes</a>
              <a href="/services" className="ehr-footer-link">Aidbox for developers</a>
              <a href="/fhir-api" className="ehr-footer-link">FHIR API for EHR</a>
              <a href="/payers" className="ehr-footer-link">Aidbox for Health Plans</a>
              <a href="/telemedicine" className="ehr-footer-link">Aidbox for Telemedicine</a>
            </div>
            <div className="ehr-footer-column">
              <span className="ehr-footer-column-title">company</span>
              <a href="/company" className="ehr-footer-link">About Us</a>
              <a href="/news" className="ehr-footer-link">News</a>
              <a href="/careers" className="ehr-footer-link">Careers</a>
              <a href="/fhir-meetups" className="ehr-footer-link">FHIR Meetups</a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="ehr-footer-bottom">
            <a href="/" className="ehr-footer-logo">
              <img src="/assets/images/logos/health-samurai-footer.svg" alt="Health Samurai Logo" />
            </a>
            <div className="ehr-footer-legal">
              <a href="/legal/privacy-policy" className="ehr-footer-legal-link">Privacy Policy</a>
              <a href="/legal/cookie-policy" className="ehr-footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
