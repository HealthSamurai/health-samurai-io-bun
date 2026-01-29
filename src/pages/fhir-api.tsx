import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Aidbox ONC-certified FHIR API tools for EHRs",
  description: "We ensure that your EHR solutions are compliant and certified with the latest regulations. We guide your compliance processes with tools, resources and on-demand expertise.",
};

// Testimonials data
const testimonials = [
  {
    name: "Hans Benson",
    title: "Sr. Product Manager, Interoperability",
    company: "Navigating Cancer",
    quote: "We just passed g10 certification with Drummond. Thank you Health Samurai team for all of your help and hard work getting your solution working and set up for us!",
    avatar: "/assets/images/fhir-api/testimonial-hans-benson.svg",
  },
  {
    name: "Tulasidhar Chatakonda",
    title: "Team Lead",
    company: "DOX EMR",
    quote: "DOX EMR was done with G10 in 20 min - Aidbox team provided support, helpful questions for the test, and set up Aidbox Portal and Aidbox Sandbox servers for creating tenants, patients, users, and other necessary components.",
    avatar: "/assets/images/fhir-api/testimonial-dox-emr.svg",
  },
  {
    name: "Todd Stuart",
    title: "Sr. Director Data Science/Management/Engineering",
    company: "New Directions Behavioural Health",
    quote: "We evaluated different FHIR servers for a high priority project at NDBH. We decided to use Aidbox due to its scalability, reliability, and ease of use. We appreciate the prompt and top-notch support Health Samurai provides to our team.",
    avatar: "/assets/images/fhir-api/testimonial-todd.svg",
  },
  {
    name: "Rob Stokes",
    title: "VP, Information Technology",
    company: "Narus Health / Lucent Health",
    quote: "Aidbox provides us with a data layer, terminology server, document storage and some other features, allowing us to focus on developing our business logic. Their team has been able to help us solve our business problems using FHIR.",
    avatar: "/assets/images/fhir-api/testimonial-rob-stokes.svg",
  },
  {
    name: "Dalia V Elizalde",
    title: "Pertexa Customer Success Team",
    company: "PertexaHealthTech",
    quote: "We really appreciate the assistance provided by Aidbox throughout the G10 certification process. Their team guided us step-by-step and shared valuable insights and best practices that helped us better understand FHIR and its implementation.",
    avatar: "/assets/images/fhir-api/testimonial-dalia.svg",
  },
];

// Client logos
const clientLogos = [
  { src: "/assets/images/fhir-api/logo-best-notes.webp", alt: "Best Notes" },
  { src: "/assets/images/fhir-api/logo-physicians-lab.png", alt: "Physicians Lab" },
  { src: "/assets/images/fhir-api/logo-village-care.webp", alt: "Village Care" },
  { src: "/assets/images/fhir-api/logo-new-directions.webp", alt: "New Directions" },
  { src: "/assets/images/fhir-api/logo-seqster.svg", alt: "Seqster" },
  { src: "/assets/images/fhir-api/logo-unified-health.svg", alt: "Unified Health" },
  { src: "/assets/images/fhir-api/logo-yale.webp", alt: "Yale" },
  { src: "/assets/images/fhir-api/logo-bodylogic.webp", alt: "Body Logic" },
  { src: "/assets/images/fhir-api/logo-metroderm.webp", alt: "MetroDerm" },
];

// Benefits/steps data
const benefitSteps = [
  {
    title: "Aidbox FHIR® API automated deployment",
    description: "Fast and simple deployment of the Aidbox API module supports GCP, AWS, Azure and on-prem automated deployment based on Kubernetes technologies.",
  },
  {
    title: "Seamless integration with your systems",
    description: "Aidbox connects to your EHR through the existing C-CDA API and retrieves data by request (lazy upload). Aidbox also supports HL7v2, custom ETL and direct DB connection. It also provides built-in Auth server that can work as primary or slave, a patient portal, a developer's (vendor) portal, a sandbox for testing third-party apps, a built-in terminology server, an audit log, etc.",
  },
  {
    title: "Step-by-step certification guidance",
    description: "No need to spend time on development and certification. Get your compliant API built by domain experts on time with no pitfalls. We provide tools and resources, 24/7 support, step-by-step guides and set of instructions.",
  },
  {
    title: "Production-ready certified system",
    description: "The API module is deployed into your existing IT ecosystem or as a separate environment. We ensure your final solutions are compliant and certified with the latest regulations.",
  },
];

// API Tools data
const apiTools = [
  {
    sectionRef: "§ 170.315(g)(10)",
    sectionLink: "https://www.healthit.gov/test-method/standardized-api-patient-and-population-services",
    title: "FHIR API",
    description: "Standardized API for patient and population services. Share structured patient data through the secure FHIR API based on US Core IG and USCDI.",
    bullets: [
      "Data request authentication with SMART on FHIR. Connect or use the built-in Auth Server with Aidbox API module for consistent auth flow with OAuth 2.0 & SMART App Launch.",
      "Managing patient consent for third-party apps through the existing portal or the built-in Patient Portal.",
      "HL7 to FHIR, C-CDA, Bulk API to upload existing data to Aidbox API module.",
    ],
    links: [
      { label: "Cheat sheet", href: "/aidbox/resources/standardized-api-for-ehr-cheatsheet" },
      { label: "Video", href: "/events/webinar-june-2022" },
    ],
  },
  {
    sectionRef: "§ 170.315(g)(9), § 170.315(g)(6)",
    sectionLink: "https://www.healthit.gov/test-method/application-access-all-data-request",
    title: "C-CDA API",
    description: "The API to securely respond with C-CDA document to requests for patient data associated with a specific date or date range.",
    bullets: [
      "Generates valid C-CDA Release 2.1 CCD files",
      "Supports all USCDI v1 data elements",
      "Fully customizable solution that can be adapted to your data model",
      "We already converted criterion sample data to FHIR, so you don't have to.",
    ],
  },
  {
    sectionRef: "§ 170.315(g)(7)",
    sectionLink: "https://www.healthit.gov/test-method/application-access-patient-selection",
    title: "Search API",
    description: "API to uniquely identify a patient and return an ID or other token that can be used by an application to execute requests for that patient's data subsequently.",
    bullets: [
      "Aidbox patient search API complies with FHIR search specs.",
      "Patient is identified using a unique token.",
      "Patient can also be searched using external identifiers, e.g., SSN, driver's license, and other government-issued IDs.",
    ],
  },
  {
    sectionRef: "§ 170.315(b)(10)",
    sectionLink: "https://www.healthit.gov/test-method/electronic-health-information-export",
    title: "Export API",
    description: "Enable a user to create an export file(s) with all stored single or group patient electronic health information.",
    bullets: [
      "Patient-level exports patient and its associated resources. Allow a user to create an export file(s) with all of a single patient's electronic health information stored.",
      "Group-level exports patients and their associated resources belonging to a particular group.",
      "Exports FHIR data using NDJSON format.",
      "Uploads data to AWS, GCP, and Azure Cloud.",
      "Supports filtering by date or specific resource types.",
    ],
  },
];

// Certification criteria
const certificationCriteria = [
  "§ 170.315(d)(1)",
  "§ 170.315(d)(9)",
  "§ 170.315(d)(10)",
  "§ 170.315(d)(12)",
  "§ 170.315(d)(13)",
  "§ 170.315(g)(4)",
  "§ 170.315(g)(5)",
  "§ 170.315(g)(6)",
  "§ 170.315(g)(7)",
  "§ 170.315(g)(9)",
  "§ 170.315(g)(10)",
  "§ 170.315(b)(10)",
];

// RWT Documents
const rwtDocuments = [
  { year: "2023", type: "plan", label: "2023 – Real World Testing (RWT) plan", href: "#" },
  { year: "2023", type: "results", label: "2023 – Real World Testing (RWT) results report", href: "#" },
  { year: "2024", type: "plan", label: "2024 – Real World Testing (RWT) plan", href: "#" },
  { year: "2024", type: "results", label: "2024 – Real World Testing (RWT) results report", href: "#" },
  { year: "2025", type: "plan", label: "2025 – Real World Testing (RWT) plan", href: "#" },
];

// Cost & Fee table data
const costFeeItems = [
  { product: "Aidbox FHIR API module version 1.0 - License", required: true, type: "recurring" },
  { product: "Professional Support Plan", required: false, type: "recurring" },
  { product: "Infrastructure fee", required: false, type: "recurring" },
  { product: "Hosting & Maintenance from Health Samurai", required: false, type: "one-time fee & recurring" },
  { product: "Integration project", required: false, type: "fixed price" },
];

function TestimonialSlide({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }): string {
  return (
    <div
      className="fhir-api-testimonial-slide"
      data-show={`$activeSlide === ${index}`}
      style={index !== 0 ? { display: "none" } : {}}
    >
      <div className="fhir-api-testimonial-card">
        <div className="fhir-api-testimonial-header">
          <img src={testimonial.avatar} alt={testimonial.name} className="fhir-api-testimonial-avatar" />
          <div className="fhir-api-testimonial-info">
            <span className="fhir-api-testimonial-name">{testimonial.name}</span>
            <span className="fhir-api-testimonial-title">{testimonial.title}</span>
            <span className="fhir-api-testimonial-company">{testimonial.company}</span>
          </div>
        </div>
        <blockquote className="fhir-api-testimonial-quote">
          {testimonial.quote}
        </blockquote>
      </div>
    </div>
  );
}

function ApiToolCard({ tool }: { tool: typeof apiTools[0] }): string {
  return (
    <div className="fhir-api-tool-card">
      <a href={tool.sectionLink} target="_blank" rel="noopener noreferrer" className="fhir-api-tool-section">
        {tool.sectionRef}
      </a>
      <h3 className="fhir-api-tool-title">{tool.title}</h3>
      <div className="fhir-api-tool-divider"></div>
      <p className="fhir-api-tool-desc">{tool.description}</p>
      <ul className="fhir-api-tool-bullets">
        {tool.bullets.map((bullet) => (
          <li>
            <span className="fhir-api-bullet-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#ea4a35" fill-opacity="0.1"/>
                <path d="M7 10L9.5 12.5L13 7.5" stroke="#ea4a35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {tool.links && (
        <div className="fhir-api-tool-links">
          {tool.links.map((link) => (
            <a href={link.href}>{link.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FhirApiPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="fhir-api-hero">
        <div className="container">
          <div className="fhir-api-hero-content">
            <div className="fhir-api-hero-text">
              <h1>
                Meet compliance with ONC-certified<span className="fhir-api-asterisk">*</span> API tools
              </h1>
              <p className="fhir-api-hero-desc">
                We ensure that your EHR solutions are compliant and certified with the latest regulations.
                We guide your compliance processes with tools, resources and on-demand expertise.
              </p>
              <div className="fhir-api-hero-ctas">
                <a href="#api-contact-us-section" className="fhir-api-btn-primary">
                  Talk to an expert
                </a>
                <a href="https://cmpl.aidbox.app/documentation" className="fhir-api-btn-docs" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: "8px" }}>
                    <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M7 6H13M7 10H13M7 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  API Documentation &gt;
                </a>
              </div>
            </div>
            <div className="fhir-api-hero-image">
              <img src="/assets/images/fhir-api/hero-api-tools.webp" alt="Aidbox ONC-certified API tools" />
            </div>
          </div>
          <div className="fhir-api-cert-note">
            <p>
              * - Aidbox FHIR API Module version 1.0 is certified by Drummond Group on January 01, 2023.{" "}
              <a href="#api-certification-details">Certification Details</a>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fhir-api-benefits">
        <div className="container">
          <h2 className="fhir-api-section-title">Simple way to get certified API layer</h2>
          <div className="fhir-api-benefits-grid">
            {benefitSteps.map((step, index) => (
              <Fragment>
                <div className="fhir-api-benefit-step">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < benefitSteps.length - 1 && (
                  <div className="fhir-api-benefit-arrow">
                    <img src="/assets/images/fhir-api/benefit-arrow.webp" alt="" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="fhir-api-benefits-cta">
            <a href="#api-contact-us-section">Our record is 3 days – dare to beat it?</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fhir-api-testimonials">
        <div className="container">
          <div className="fhir-api-testimonials-layout">
            <div className="fhir-api-testimonials-carousel" data-signals={`{activeSlide: 0, totalSlides: ${testimonials.length}}`}>
              <div className="fhir-api-testimonials-slides">
                {testimonials.map((testimonial, index) => (
                  <TestimonialSlide testimonial={testimonial} index={index} />
                ))}
              </div>
              <button
                className="fhir-api-carousel-next"
                data-on-click="$activeSlide = ($activeSlide + 1) % $totalSlides"
                aria-label="Next testimonial"
              >
                <img src="/assets/images/fhir-api/icon-slider-arrow.svg" alt="" />
              </button>
              <div className="fhir-api-carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    className="fhir-api-carousel-dot"
                    data-class={`{'fhir-api-carousel-dot--active': $activeSlide === ${index}}`}
                    data-on-click={`$activeSlide = ${index}`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="fhir-api-aidbox-service">
              <h2>Aidbox as a service</h2>
              <p>
                Leading companies rely on Aidbox as a crucial component of their EHR systems.
                With a superior FHIR backend and highly adaptable modules, Aidbox guarantees data security,
                interoperability, and compliance with various regulations such as HIPAA and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="fhir-api-clients">
        <div className="container">
          <div className="fhir-api-clients-grid">
            {clientLogos.map((logo) => (
              <div className="fhir-api-client-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Tools Section */}
      <section className="fhir-api-tools">
        <div className="container">
          <h2 className="fhir-api-section-title">Certified API tools to meet EHR needs</h2>
          <p className="fhir-api-tools-desc">
            Improve your EHR interoperability using the pluggable Aidbox FHIR® API module and stay compliant with
            the 21st Century Cures Act requirements.
          </p>
          <div className="fhir-api-tools-grid">
            {apiTools.map((tool) => (
              <ApiToolCard tool={tool} />
            ))}
          </div>
          <div className="fhir-api-tools-cta">
            <a href="https://cmpl.aidbox.app/documentation" target="_blank" rel="noopener noreferrer" className="fhir-api-btn-primary">
              See our API documentation
            </a>
          </div>
        </div>
      </section>

      {/* Certification Details Section */}
      <section className="fhir-api-certification" id="api-certification-details">
        <div className="container">
          <h2 className="fhir-api-section-title">Certification Details</h2>
          <div className="fhir-api-certification-content">
            <div className="fhir-api-certificate-image">
              <img src="/assets/images/fhir-api/certification-certificate.svg" alt="Compliance Certificate" />
            </div>
            <div className="fhir-api-certification-details">
              <div className="fhir-api-cert-info">
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">HIT Vendor:</span>
                  <span className="fhir-api-cert-value">Health Samurai, Inc</span>
                </div>
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">Date Certified:</span>
                  <span className="fhir-api-cert-value">January 01, 2023</span>
                </div>
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">Product and Version:</span>
                  <span className="fhir-api-cert-value">Aidbox FHIR API module version 1.0</span>
                </div>
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">Certificate Number:</span>
                  <span className="fhir-api-cert-value">15.99.04.3119.AI01.01.01.0.230101</span>
                </div>
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">CHPL Product Number:</span>
                  <span className="fhir-api-cert-value">
                    <a href="https://chpl.healthit.gov/#/listing/11204" target="_blank" rel="noopener noreferrer">
                      15.99.04.3119.AIDB.01.01.0.230101
                    </a>
                  </span>
                </div>
                <div className="fhir-api-cert-row">
                  <span className="fhir-api-cert-label">Criteria:</span>
                  <span className="fhir-api-cert-value fhir-api-criteria-list">
                    {certificationCriteria.map((c) => (
                      <span>{c}</span>
                    ))}
                  </span>
                </div>
              </div>
              <p className="fhir-api-cert-disclaimer">
                This Health IT Module is compliant with the ONC Certification Criteria for Health IT and has been certified
                by an ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of Health and
                Human Services. This certification does not represent an endorsement by the U.S. Department of Health and Human Services.
              </p>
            </div>
          </div>

          {/* RWT Subsection */}
          <div className="fhir-api-rwt">
            <h3>Real World Testing (RWT)</h3>
            <p>
              Please refer to the Real World Testing (RWT) documentation below for details on the testing approach,
              standards updates, measures, measure justification, care setting(s), expected outcomes, and schedule of key milestones.
            </p>
            <ul className="fhir-api-rwt-list">
              {rwtDocuments.map((doc) => (
                <li>
                  <a href={doc.href}>
                    <img src="/assets/images/fhir-api/icon-arrow-right.svg" alt="" className="fhir-api-rwt-icon" />
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost & Fee Section */}
      <section className="fhir-api-cost">
        <div className="container">
          <h2 className="fhir-api-section-title">Cost & Fee Information</h2>
          <div className="fhir-api-cost-table">
            <div className="fhir-api-cost-header">
              <span>Products & Services</span>
              <span>Types of Costs</span>
            </div>
            {costFeeItems.map((item) => (
              <div className="fhir-api-cost-row">
                <span>
                  {item.product}
                  {item.required ? (
                    <span className="fhir-api-required"> - required</span>
                  ) : (
                    <span className="fhir-api-optional"> (optional)</span>
                  )}
                </span>
                <span>{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fhir-api-contact" id="api-contact-us-section">
        <div className="container">
          <div className="fhir-api-contact-layout">
            <div className="fhir-api-contact-text">
              <h2>Contact us</h2>
              <p>Have a specific request?<br />Get in touch and we'll set up a call</p>
            </div>
            <div className="fhir-api-contact-form-wrapper">
              <form className="fhir-api-contact-form" action="/api/contact" method="POST">
                <input type="hidden" name="form_name" value="Aidbox API Module" />
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                  className="fhir-api-input"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                  className="fhir-api-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="fhir-api-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="fhir-api-input"
                />
                <textarea
                  name="description"
                  placeholder="Tell us about your project or challenges you're facing."
                  className="fhir-api-textarea"
                ></textarea>
                <div className="fhir-api-recaptcha">
                  {/* reCAPTCHA placeholder */}
                  <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                </div>
                <button type="submit" className="fhir-api-btn-submit">
                  Contact us
                </button>
                <p className="fhir-api-form-footer">
                  By submitting the form you agree to{" "}
                  <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
                  <a href="/legal/cookie-policy">Cookie Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
