import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Healthcare Data Platform Toolkit - Aidbox",
  description: "Aggregate, store, manage, and analyze FHIR data in a secure, compliant, and performant way — all with Aidbox.",
};

const IMG_BASE = "/assets/images/healthcare-data-platform-toolkit-aidbox";

// Customer logos for "Trusted by" section
const customerLogos = [
  { name: "Innovaccer", src: `${IMG_BASE}/logo-innovaccer.webp` },
  { name: "Coda Platform", src: `${IMG_BASE}/logo-coda.webp` },
  { name: "AveHealth", src: `${IMG_BASE}/logo-avehealth.webp` },
  { name: "Project Ronin", src: `${IMG_BASE}/logo-ronin.webp` },
  { name: "Sunnybrook", src: `${IMG_BASE}/logo-sunnybrook.webp` },
  { name: "ToiLabs", src: `${IMG_BASE}/logo-toilabs.webp` },
];

// Benefits cards
const benefits = [
  {
    icon: `${IMG_BASE}/icon-compliance.svg`,
    title: "Boost compliance",
    description: "Support customer conformance with the latest FHIR-related industry regulations and keep competitive",
  },
  {
    icon: `${IMG_BASE}/icon-insights.svg`,
    title: "Unlock insights",
    description: "Make better decisions based on longitudinal patient records, improve outcomes and reduce costs",
  },
  {
    icon: `${IMG_BASE}/icon-build-faster.svg`,
    title: "Build faster",
    description: "Build your own FHIR applications on top or integrate external apps into your system faster",
  },
];

// Hub checklist items
const hubChecklist = [
  {
    title: "Consolidate data",
    description: "from diverse systems and sources into a unified format, eliminating data silos",
  },
  {
    title: "Store, organize",
    middle: " and ",
    title2: "maintain high data quality",
    description: " within the scalable FHIR data platform",
  },
  {
    title: "Efficiently and securely",
    description: " use the same data for both transactional and analytical workloads",
  },
];

// Features tabs data
const featuresTabs = {
  acquire: [
    { title: "EHR adapters", description: "Bridge the gap between disparate EHR systems and standardize data formats" },
    { title: "HIN adapters", description: "Enrich your clinical data from multiple HINs, such as Kno2 and Health Gorilla" },
    { title: "FHIR API / Aidbox API", description: "Use standardized FHIR APIs to ingest data" },
    { title: "Bulk API", description: "Import large amounts of data in a single operation" },
    { title: "C-CDA <> FHIR converter", description: "Convert in both directions without the need for complex configuration" },
    { title: "HL7 v2 to FHIR converter", description: "Convert data from HL7 v2 to FHIR to enhance data consistency" },
    { title: "X12 to FHIR converter", description: "Transform X12 healthcare billing and claims data into the modern format" },
    { title: "JSON to FHIR converter", description: "Align your data with a widely accepted and standardized format" },
  ],
  manage: [
    { title: "FHIR data model", description: "Use FHIR as a robust and consistent data model" },
    { title: "SQL on FHIR", description: "Query and manipulate FHIR data using standard SQL interfaces" },
    { title: "FHIR & Custom profiles", description: "Use profiling and ensure that your FHIR resources are valid" },
    { title: "Terminologies", description: "Use built-in SNOMED CT, LOINC, ICT-10, or import your own CodeSystems" },
    { title: "FHIR IGs", description: "Import pre-packaged US Core, CARIN BB, Da Vinci Project or use your own" },
    { title: "Master Data Management", description: "Efficiently manage your data and eliminate duplicates with the MDM" },
    { title: "Audit log", description: "Track all activities & changes within a system and ensure security compliance" },
    { title: "Multitenancy", description: "Prevent unauthorized access to sensitive data with isolated tenants" },
    { title: "HIPAA safeguards", description: "Stay on track with technical and administrative HIPAA safeguards using built-in components" },
  ],
  share: [
    { title: "FHIR API / Aidbox API", description: "Retrieve and update data using standardized FHIR APIs" },
    { title: "Bulk API", description: "Export massive FHIR data in a single operation" },
    { title: "SQL API", description: "Get direct access to the data in your database" },
    { title: "GraphQL API", description: "Query data from different sources and get exactly what you need with a single query" },
    { title: "Subscription API", description: "Notify external and internal systems on specific data changes in real-time" },
    { title: "Custom API", description: "Define your custom endpoints and implement custom operations" },
    { title: "Auth server", description: "Authenticate and authorize users with built-in OAuth 2.0, OpenID Connect and SMART App Launch" },
    { title: "Access control", description: "Use built-in access control engines, such as JSON Schema/SQL/Matcho DSL" },
    { title: "BI tools", description: "Create data views and visualize data in BI tools of your choice, such as PowerBI, Tableau, Metabase" },
    { title: "Data warehouses", description: "Transform and deliver data to a data warehouse of your choice, such as Databricks, Snowflake" },
    { title: "S3-compatible buckets", description: "Store data in S3-compatible buckets with pre-signed URLs and automate delivery with Workflow Engine" },
  ],
};

// Deployment options
const deploymentOptions = [
  {
    icon: `${IMG_BASE}/icon-fully-managed.webp`,
    title: "Fully managed",
    description: "Choose your preferred cloud for a fully managed solution and a peace of mind",
    cta: { text: "Contact us", href: "#dp-talk-to-expert" },
  },
  {
    icon: `${IMG_BASE}/icon-self-hosted.webp`,
    title: "Self-hosted",
    description: "Ensure the data security by deploying Aidbox within your VPC or on-premises",
    cta: { text: "Get a license", href: "https://aidbox.app" },
  },
  {
    icon: `${IMG_BASE}/icon-saas.webp`,
    title: "Aidbox as a Service",
    description: "Get started with Aidbox right away, and dive into your data without any delays",
    cta: { text: "Start a free trial", href: "https://aidbox.app" },
  },
];

// Customer stories for carousel
const customerStories = [
  {
    logo: `${IMG_BASE}/logo-innovaccer-stories.webp`,
    company: "Innovaccer",
    description: "Innovaccer uses Aidbox to <strong>bring FHIR</strong> to its #1 healthcare data and analytics platform for value-based care. Innovaccer's platform has helped its customers use FHIR to unify health records for more than 54M people, enabling care delivery transformation for more than 96,000 clinicians.",
  },
  {
    logo: `${IMG_BASE}/logo-coda-stories.webp`,
    company: "Coda Platform",
    description: "CODA selects Aidbox to build a comprehensive suite for <strong>distributed analysis of FHIR and DICOM data</strong>. It enables ingestion, storage, analysis, and visualization of healthcare data distributed across multiple hospital institutions.",
  },
  {
    logo: `${IMG_BASE}/logo-ronin-stories.webp`,
    company: "Project Ronin",
    description: "Project Ronin hires Aidbox as a FHIR data platform for its cutting-edge cancer intelligence software, providing clinicians with real-time data to identify the best treatment plan and improve quality of life for patients",
  },
  {
    logo: `${IMG_BASE}/logo-avehealth-stories.webp`,
    company: "AveHealth",
    description: "AveHealth uses Aidbox to build a modern FHIR-enabled data management platform. The platform allows creating of longitudinal \"unified patient records\" across the patient journey and provides seamless integration to health applications.",
  },
  {
    logo: `${IMG_BASE}/logo-toilabs-stories.webp`,
    company: "Toi Labs",
    description: "Toi Labs selects Aidbox to develop their cutting edge TrueLoo® technology that brings healthcare to the home. It passively monitors wellness parameters and seeks to reliably track trends and insights.",
  },
  {
    logo: `${IMG_BASE}/logo-sunnybrook-stories.webp`,
    company: "Sunnybrook",
    description: "Sunnybrook Health Sciences Centre supplements its existing non-integrated structures with Aidbox as an on-premise standardized data store for historical data analytics and research.",
  },
];

// Helper component for feature items
function FeatureItem({ title, description }: { title: string; description: string }): string {
  return (
    <div className="dp-feature-item">
      <h4 className="dp-feature-item-title">{title}</h4>
      <p className="dp-feature-item-desc">{description}</p>
    </div>
  );
}

// Helper component for customer story card
function CustomerStoryCard({ story }: { story: typeof customerStories[0] }): string {
  return (
    <div className="dp-story-card">
      <div className="dp-story-logo">
        <img src={story.logo} alt={story.company} />
      </div>
      <p className="dp-story-text" dangerouslySetInnerHTML={{ __html: story.description }} />
    </div>
  );
}

export default function HealthcareDataPlatformToolkitAidbox(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="dp-hero">
        <div className="container">
          <div className="dp-hero-grid">
            <div className="dp-hero-content">
              <h1 className="dp-hero-title">
                Healthcare Data <span className="dp-text-accent">Platform Toolkit</span>
              </h1>
              <p className="dp-hero-desc">
                Aggregate, store, manage, and analyze FHIR data in a secure, compliant, and performant way — all with Aidbox.
              </p>
              <div className="dp-hero-features">
                <div className="dp-hero-feature">
                  <img src={`${IMG_BASE}/icon-check-circle.svg`} alt="" className="dp-check-icon" />
                  <span>Data acquisition</span>
                </div>
                <div className="dp-hero-feature">
                  <img src={`${IMG_BASE}/icon-check-circle.svg`} alt="" className="dp-check-icon" />
                  <span>FHIR data storage</span>
                </div>
                <div className="dp-hero-feature">
                  <img src={`${IMG_BASE}/icon-check-circle.svg`} alt="" className="dp-check-icon" />
                  <span>Data quality</span>
                </div>
                <div className="dp-hero-feature">
                  <img src={`${IMG_BASE}/icon-check-circle.svg`} alt="" className="dp-check-icon" />
                  <span>APIs &amp; Integrations</span>
                </div>
              </div>
              <div className="dp-hero-buttons">
                <a href="#dp-talk-to-expert" className="dp-btn dp-btn-primary">Talk to an expert</a>
                <a href="https://aidbox.app/" className="dp-btn dp-btn-secondary" target="_blank" rel="noopener noreferrer">
                  Start a free trial
                  <img src={`${IMG_BASE}/icon-arrow-right.svg`} alt="" className="dp-btn-arrow" />
                </a>
              </div>
            </div>
            <div className="dp-hero-image">
              <img src={`${IMG_BASE}/hero-toolbox.webp`} alt="Aidbox toolbox illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="dp-trusted-by">
        <div className="container">
          <div className="dp-trusted-content">
            <span className="dp-trusted-label">
              <strong>trusted by</strong> DATA-DRIVEN COMPANIES
            </span>
            <div className="dp-trusted-logos">
              {customerLogos.map((logo) => (
                <img src={logo.src} alt={logo.name} className="dp-trusted-logo" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="dp-benefits">
        <div className="container">
          <div className="dp-benefits-header">
            <h2 className="dp-benefits-title">
              <span className="dp-text-accent">Future-proof</span> your healthcare solutions
            </h2>
            <p className="dp-benefits-moto">
              Fuel your existing healthcare ecosystem with FHIR data to stay ahead of the curve.
            </p>
          </div>
          <div className="dp-benefits-grid">
            {benefits.map((benefit) => (
              <div className="dp-benefit-card">
                <img src={benefit.icon} alt="" className="dp-benefit-icon" />
                <h3 className="dp-benefit-title">{benefit.title}</h3>
                <p className="dp-benefit-desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub / One Platform Section */}
      <section className="dp-hub">
        <div className="container">
          <div className="dp-hub-grid">
            <div className="dp-hub-content">
              <h2 className="dp-hub-title">
                <span className="dp-text-accent">One platform</span> for your FHIR data
              </h2>
              <p className="dp-hub-desc">
                Complement your current ecosystem with Aidbox and work with FHIR data effectively when needed.
              </p>
              <ul className="dp-hub-checklist">
                <li className="dp-hub-check-item">
                  <img src={`${IMG_BASE}/icon-check.svg`} alt="" className="dp-hub-check-icon" />
                  <span>
                    <strong>Consolidate data</strong> from diverse systems and sources into a unified format, eliminating data silos
                  </span>
                </li>
                <li className="dp-hub-check-item">
                  <img src={`${IMG_BASE}/icon-check.svg`} alt="" className="dp-hub-check-icon" />
                  <span>
                    <strong>Store, organize</strong> and <strong>maintain high data quality</strong> within the scalable FHIR data platform
                  </span>
                </li>
                <li className="dp-hub-check-item">
                  <img src={`${IMG_BASE}/icon-check.svg`} alt="" className="dp-hub-check-icon" />
                  <span>
                    <strong>Efficiently and securely</strong> use the same data for both transactional and analytical workloads
                  </span>
                </li>
              </ul>
            </div>
            <div className="dp-hub-image" data-signals="{lightboxOpen: false}">
              <img
                src={`${IMG_BASE}/platform-architecture.webp`}
                alt="Platform architecture diagram"
                className="dp-hub-diagram"
                data-on-click="$lightboxOpen = true"
              />
              {/* Lightbox */}
              <div className="dp-lightbox" data-show="$lightboxOpen" style="display: none">
                <div className="dp-lightbox-overlay" data-on-click="$lightboxOpen = false" />
                <div className="dp-lightbox-content">
                  <button className="dp-lightbox-close" data-on-click="$lightboxOpen = false">&times;</button>
                  <img src={`${IMG_BASE}/platform-architecture.webp`} alt="Platform architecture diagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="dp-features">
        <div className="container">
          <div className="dp-features-header">
            <h2 className="dp-features-title">
              <span className="dp-text-accent">Ready-to-use building blocks</span>
              <br />
              <span className="dp-text-accent">for your FHIR ecosystem</span>
            </h2>
            <p className="dp-features-desc">
              Whether you need to aggregate data from legacy systems or enhance your existing data infrastructure, Aidbox is here to assist you every step of the way.
            </p>
          </div>
          <div className="dp-tabs" data-signals="{activeFeatureTab: 'acquire'}">
            <div className="dp-tabs-nav">
              <button
                className="dp-tab-btn"
                data-class="{'dp-tab-btn--active': $activeFeatureTab === 'acquire'}"
                data-on-click="$activeFeatureTab = 'acquire'"
              >
                Acquire
              </button>
              <button
                className="dp-tab-btn"
                data-class="{'dp-tab-btn--active': $activeFeatureTab === 'manage'}"
                data-on-click="$activeFeatureTab = 'manage'"
              >
                Manage
              </button>
              <button
                className="dp-tab-btn"
                data-class="{'dp-tab-btn--active': $activeFeatureTab === 'share'}"
                data-on-click="$activeFeatureTab = 'share'"
              >
                Share
              </button>
            </div>
            <div className="dp-tabs-content">
              {/* Acquire Tab */}
              <div className="dp-tab-panel" data-show="$activeFeatureTab === 'acquire'">
                <div className="dp-features-grid">
                  {featuresTabs.acquire.map((feature) => (
                    <FeatureItem title={feature.title} description={feature.description} />
                  ))}
                </div>
              </div>
              {/* Manage Tab */}
              <div className="dp-tab-panel" data-show="$activeFeatureTab === 'manage'" style="display: none">
                <div className="dp-features-grid">
                  {featuresTabs.manage.map((feature) => (
                    <FeatureItem title={feature.title} description={feature.description} />
                  ))}
                </div>
              </div>
              {/* Share Tab */}
              <div className="dp-tab-panel" data-show="$activeFeatureTab === 'share'" style="display: none">
                <div className="dp-features-grid">
                  {featuresTabs.share.map((feature) => (
                    <FeatureItem title={feature.title} description={feature.description} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance CTA Section */}
      <section className="dp-performance">
        <div className="container">
          <div className="dp-performance-content">
            <h3 className="dp-performance-title">
              Explore how Aidbox effortlessly handles 16 TB of synthetic data
            </h3>
            <p className="dp-performance-desc">
              Designed to process large volumes of data, Aidbox can scale up to the evolving demands of your business.
            </p>
            <div className="dp-performance-buttons">
              <a href="#dp-talk-to-expert" className="dp-btn dp-btn-primary">Talk to an expert</a>
              <a href="https://aidbox.app/" className="dp-btn dp-btn-secondary" target="_blank" rel="noopener noreferrer">
                Start a free trial
                <img src={`${IMG_BASE}/icon-arrow-right.svg`} alt="" className="dp-btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="dp-deployment">
        <div className="container">
          <div className="dp-deployment-header">
            <h2 className="dp-deployment-title">
              <span className="dp-text-accent">Select from</span>
              <br />
              <span className="dp-text-accent">flexible deployment options</span>
            </h2>
            <p className="dp-deployment-desc">
              Deploy Aidbox in clouds, like GCP, AWS or Azure, or on-premises to meet even the strictest of data security requirements.
            </p>
          </div>
          <div className="dp-deployment-grid">
            {deploymentOptions.map((option) => (
              <div className="dp-deployment-card">
                <img src={option.icon} alt="" className="dp-deployment-icon" />
                <h3 className="dp-deployment-card-title">{option.title}</h3>
                <p className="dp-deployment-card-desc">{option.description}</p>
                <a href={option.cta.href} className="dp-deployment-link">
                  {option.cta.text}
                  <img src={`${IMG_BASE}/icon-arrow-right-red.svg`} alt="" className="dp-link-arrow" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="dp-brochure">
        <div className="container">
          <div className="dp-brochure-grid">
            <div className="dp-brochure-content">
              <h3 className="dp-brochure-title">Explore Aidbox</h3>
              <p className="dp-brochure-desc">
                Download the Aidbox Product Brief to have all the info by hand.
              </p>
              <form className="dp-brochure-form" action="/api/subscribe" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="email@business.com"
                  required
                  className="dp-brochure-input"
                />
                <button type="submit" className="dp-btn dp-btn-primary">Download</button>
              </form>
            </div>
            <div className="dp-brochure-image">
              <img src={`${IMG_BASE}/brochure-download.webp`} alt="Aidbox Product Brief" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories Carousel Section */}
      <section className="dp-stories">
        <div className="container">
          <h2 className="dp-stories-title">Meet our customers and get inspired</h2>
          <div className="dp-carousel" data-signals="{currentSlide: 0, totalSlides: 3}">
            <button
              className="dp-carousel-nav dp-carousel-nav--prev"
              data-on-click="$currentSlide = ($currentSlide - 1 + $totalSlides) % $totalSlides"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="dp-carousel-track">
              {/* Slide 1 */}
              <div className="dp-carousel-slide" data-show="$currentSlide === 0">
                <CustomerStoryCard story={customerStories[0]!} />
                <CustomerStoryCard story={customerStories[1]!} />
              </div>
              {/* Slide 2 */}
              <div className="dp-carousel-slide" data-show="$currentSlide === 1" style="display: none">
                <CustomerStoryCard story={customerStories[2]!} />
                <CustomerStoryCard story={customerStories[3]!} />
              </div>
              {/* Slide 3 */}
              <div className="dp-carousel-slide" data-show="$currentSlide === 2" style="display: none">
                <CustomerStoryCard story={customerStories[4]!} />
                <CustomerStoryCard story={customerStories[5]!} />
              </div>
            </div>
            <button
              className="dp-carousel-nav dp-carousel-nav--next"
              data-on-click="$currentSlide = ($currentSlide + 1) % $totalSlides"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div className="dp-carousel-dots">
              <button
                className="dp-carousel-dot"
                data-class="{'dp-carousel-dot--active': $currentSlide === 0}"
                data-on-click="$currentSlide = 0"
                aria-label="Go to slide 1"
              />
              <button
                className="dp-carousel-dot"
                data-class="{'dp-carousel-dot--active': $currentSlide === 1}"
                data-on-click="$currentSlide = 1"
                aria-label="Go to slide 2"
              />
              <button
                className="dp-carousel-dot"
                data-class="{'dp-carousel-dot--active': $currentSlide === 2}"
                data-on-click="$currentSlide = 2"
                aria-label="Go to slide 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="dp-contact" id="dp-talk-to-expert">
        <div className="container">
          <div className="dp-contact-grid">
            <div className="dp-contact-content">
              <h3 className="dp-contact-title">Talk to an Aidbox expert</h3>
              <p className="dp-contact-desc">
                Get started with the Aidbox developer-friendly FHIR data platform. Because your developers deserve better.
              </p>
              <form className="dp-contact-form" action="/api/contact" method="POST">
                <div className="dp-form-group">
                  <label htmlFor="fullname" className="dp-form-label">Full Name</label>
                  <input type="text" id="fullname" name="fullname" required className="dp-form-input" />
                </div>
                <div className="dp-form-group">
                  <label htmlFor="email" className="dp-form-label">Business Email address</label>
                  <input type="email" id="email" name="email" placeholder="email@business.com" required className="dp-form-input" />
                </div>
                <div className="dp-form-group">
                  <label htmlFor="message" className="dp-form-label">Request description</label>
                  <textarea id="message" name="message" placeholder="Please tell us more detail about your enquiry" className="dp-form-input dp-form-textarea" />
                </div>
                <button type="submit" className="dp-btn dp-btn-primary dp-btn-submit">Submit</button>
                <p className="dp-privacy-note">
                  By submitting the form you agree to <a href="/legal/privacy-policy">Privacy Policy</a> and <a href="/legal/cookie-policy">Cookie Policy</a>.
                </p>
              </form>
            </div>
            <div className="dp-contact-illustration">
              {/* Illustration area - could add an image here if available */}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer / Awards Section */}
      <section className="dp-awards">
        <div className="container">
          <div className="dp-awards-content">
            <img src={`${IMG_BASE}/footer-hipaa-logo.png`} alt="HIPAA Certification" className="dp-award-badge" />
            <img src={`${IMG_BASE}/footer-iso-logo.svg`} alt="ISO 27001:2022 Certification" className="dp-award-badge" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
