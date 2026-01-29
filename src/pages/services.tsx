import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "FHIR-first software development for healthcare | Delegate your software development needs to FHIR expert developers",
  description: "Delegate your software development needs to us - experts in designing, building, and maintaining advanced FHIR-based software solutions for healthcare.",
};

// Feature cards data
const featureCards = [
  {
    title: "Dedicated Teams",
    description: "Achieve rapid results with our full-stack teams dedicated to your project.",
    highlighted: true,
  },
  {
    title: "FHIR Platform",
    description: 'Reduce time-to-market with our pre-built Aidbox <a href="/fhir-server" class="svc-link">FHIR backend</a> and cloud infrastructure.',
    highlighted: false,
  },
  {
    title: "Domain Expertise",
    description: "Benefit from 15+ years of experience in health IT, software development, and HL7 FHIR.",
    highlighted: false,
  },
  {
    title: "Agile & Lean",
    description: "Reach your goals through short iterations that incrementally develop the product.",
    highlighted: false,
  },
];

// Portfolio data
const portfolioItems = [
  {
    icon: "/assets/images/services/portfolio-care-coordination.jpg",
    title: "Care Coordination",
    description: 'Developing a <a href="https://lucenthealth.com/" target="_blank" rel="noopener noreferrer" class="svc-link">care coordination platform</a> for self-insured companies managed by Lucent Health.',
    href: "https://lucenthealth.com/",
  },
  {
    icon: "/assets/images/services/portfolio-hospice-ehr.jpg",
    title: "Hospice EHR",
    description: 'Developing a FHIR-native, <a href="https://firenote.health/" target="_blank" rel="noopener noreferrer" class="svc-link">specialized EHR</a> system used by over 100 hospices across the US.',
    href: "https://firenote.health/",
  },
  {
    icon: "/assets/images/services/portfolio-billing-module.jpg",
    title: "Billing Module",
    description: 'Creating an <a href="https://www.sandata.com/" target="_blank" rel="noopener noreferrer" class="svc-link">automated billing module</a> for the Sandata Agency Management Platform tailored to US home care agencies.',
    href: "https://www.sandata.com/",
  },
  {
    icon: "/assets/images/services/portfolio-dermatology-ehr.jpg",
    title: "Dermatology EHR",
    description: 'Developing <a href="https://metrodermatology.net/" target="_blank" rel="noopener noreferrer" class="svc-link">EHR modules</a> including billing, registration, and self-payment for a Dermatology Clinic in New York.',
    href: "https://metrodermatology.net/",
  },
];

// Services grid data
const servicesGrid = [
  { icon: "/assets/images/services/icon-fullstack-development.svg", label: "Full-stack Development" },
  { icon: "/assets/images/services/icon-system-design.svg", label: "System Design" },
  { icon: "/assets/images/services/icon-fhir-data-modeling.svg", label: "FHIR Data Modeling" },
  { icon: "/assets/images/services/icon-integrations.svg", label: "Integrations" },
  { icon: "/assets/images/services/icon-cloud-infrastructure.svg", label: "Cloud Infrastructure" },
  { icon: "/assets/images/services/icon-onc-cms-compliance.svg", label: "ONC/CMS Compliance" },
  { icon: "/assets/images/services/icon-hipaa-gdpr-compliance.svg", label: "HIPAA/GDPR Compliance" },
  { icon: "/assets/images/services/icon-ui-ux-design.svg", label: "UI/UX Design" },
];

// Tabs data for Approach & Culture
const tabsData = [
  {
    id: "teams",
    label: "TEAMS",
    title: "Small & Strong",
    content: "We craft our teams with full-stack developers who can handle everything from design and development to deployment and maintenance across all layers. A typical team has 3-7 pros, including one PO/BA and 2-6 full-stack engineers.",
    image: "/assets/images/services/culture-team.webp",
    imageAlt: "team",
  },
  {
    id: "process",
    label: "PROCESS",
    title: "Iterative & Incremental",
    content: "We kick things off with a proof-of-concept project that lays down the basic scenario. From there, we evolve it into an MVP and then scale it up to a production-ready solution, all through quick, 1-week iterations.",
    image: "/assets/images/services/culture-scrum.webp",
    imageAlt: "scrum",
  },
  {
    id: "culture",
    label: "CULTURE",
    title: "Feedback & Automations",
    content: "With proven engineering practices such as CI/CD automation, TDD, pair programming, and design sessions, our teams move towards their goals at high speed without sacrificing quality. We continuously improve our domain knowledge and development culture.",
    image: "/assets/images/services/culture-culture.webp",
    imageAlt: "culture",
  },
  {
    id: "developments",
    label: "DEVELOPMENTS",
    title: "Platform & Open Source",
    content: 'We build projects on our <a href="/fhir-server" class="svc-link">Aidbox FHIR Server</a>, which dramatically reduces initial development efforts. We start and contribute significantly to valuable open-source projects, including: <a href="https://github.com/FHIR/sql-on-fhir-v2" target="_blank" rel="noopener noreferrer" class="svc-link">sql-on-fhir</a>, <a href="https://github.com/fhirbase/fhirbase" target="_blank" rel="noopener noreferrer" class="svc-link">fhirbase</a>, <a href="https://github.com/HealthSamurai/hl7proxy" target="_blank" rel="noopener noreferrer" class="svc-link">hl7proxy</a>, <a href="https://github.com/HealthSamurai/jute.clj" target="_blank" rel="noopener noreferrer" class="svc-link">jute.clj</a>, <a href="https://github.com/HealthSamurai/retest" target="_blank" rel="noopener noreferrer" class="svc-link">retest</a>, <a href="https://github.com/HealthSamurai/suitkin" target="_blank" rel="noopener noreferrer" class="svc-link">suitkin</a>, etc.',
    image: "/assets/images/services/culture-aidbox.webp",
    imageAlt: "fhir software",
  },
];

// Blog posts data
const blogPosts = [
  {
    image: "/assets/images/services/blog-post-1.png",
    title: "FHIR FUSE: FHIR in a Unix Way",
    description: "What if working with FHIR didn't start with APIs and clients, but with files and folders? This article explores FHIR-FUSE, a filesystem interface for FHIR servers, what it makes easier, and where its limits become clear.",
    href: "/articles/fhir-fuse-fhir-in-a-unix-way",
  },
  {
    image: "/assets/images/services/blog-post-2.png",
    title: "Managing Multi-Clinic Data and Real-time Synchronization with OrgBAC and Subscriptions",
    description: "Managing multiple clinics is hard: every facility needs autonomy, but the network still needs oversight and real-time data flow. OrgBAC and Subscriptions in Aidbox make this easy with automatic isolation and instant event delivery.",
    href: "/articles/managing-multi-clinic-data-and-real-time-synchronization-with-orgbac-and-subscriptions",
  },
  {
    image: "/assets/images/services/blog-post-3.png",
    title: "From Paper Form to FHIR",
    description: "Even with today's advanced medical technology, many healthcare facilities still rely heavily on paper forms for patient information. This ongoing use of paper causes significant challenges.",
    href: "/articles/from-paper-form-to-fhir",
  },
];

// Arrow icon SVG for links
const arrowRightSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default function ServicesPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="container">
          <div className="svc-hero-grid">
            <div className="svc-hero-content">
              <span className="svc-tag">&gt;_ Services</span>
              <h1><strong>FHIR-first</strong> software development for healthcare</h1>
              <p>Delegate your software development needs to us - experts in designing, building, and maintaining advanced FHIR-based software solutions for healthcare.</p>
              <a href="#service-c2a-form" className="btn btn-primary">LET'S TALK</a>
            </div>
            <div className="svc-hero-image">
              <img src="/assets/images/services/hero-development.webp" alt="fhir development" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="svc-features">
        <div className="container">
          <div className="svc-features-grid">
            {featureCards.map((card, idx) => (
              <div className={`svc-feature-card${idx === 0 ? ' svc-feature-card--highlighted' : ''}`}>
                <h3>{card.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: card.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="svc-portfolio">
        <div className="container">
          <div className="svc-portfolio-header">
            <div>
              <h2>Portfolio</h2>
              <p>We are proud to partner with clients of all stages and sizes in the Health IT sector.</p>
            </div>
            <a href="#" className="svc-all-link">
              All projects
              <span dangerouslySetInnerHTML={{ __html: arrowRightSvg }} />
            </a>
          </div>
          <div className="svc-portfolio-grid">
            {portfolioItems.map((item) => (
              <div className="svc-portfolio-card">
                <div className="svc-portfolio-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="svc-portfolio-content">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <a href={item.href} className="svc-portfolio-arrow" target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.title}`}>
                  <img src="/assets/images/services/icon-arrow-right.svg" alt="arrow" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Technology Partner Section */}
      <section className="svc-trusted">
        <div className="container">
          <div className="svc-trusted-grid">
            <div className="svc-trusted-image">
              <img src="/assets/images/services/trusted-partner-diagram.webp" alt="fhir experts" />
            </div>
            <div className="svc-trusted-content">
              <h2>Trusted technology partner for FHIR projects</h2>
              <p>Collaborate with our small, cross-functional teams of business-focused domain experts.</p>
              <div className="svc-services-grid">
                {servicesGrid.map((service) => (
                  <div className="svc-service-item">
                    <div className="svc-service-icon">
                      <img src={service.icon} alt={service.label} />
                    </div>
                    <span>{service.label}</span>
                  </div>
                ))}
              </div>
              <a href="#service-c2a-form" className="btn btn-primary">Hire a team</a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Culture Section with Tabs */}
      <section className="svc-approach">
        <div className="container">
          <div className="svc-approach-header">
            <h2>Approach & Culture</h2>
            <p>We follow the Lean Principle of <a href="#" className="svc-link">"do more with less"</a> and this shapes our culture.</p>
          </div>

          <div className="svc-tabs" data-signals="{activeTab: 'developments'}">
            {/* Tab Navigation */}
            <div className="svc-tabs-nav">
              {tabsData.map((tab) => (
                <button
                  className="svc-tab-btn"
                  data-class={`{'svc-tab-btn--active': $activeTab == '${tab.id}'}`}
                  data-on-click={`$activeTab = '${tab.id}'`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="svc-tabs-panels">
              {tabsData.map((tab, idx) => (
                <div
                  className="svc-tab-panel"
                  data-show={`$activeTab == '${tab.id}'`}
                  style={idx !== 3 ? { display: 'none' } : undefined}
                >
                  <div className="svc-tab-panel-grid">
                    <div className="svc-tab-image">
                      <img src={tab.image} alt={tab.imageAlt} />
                    </div>
                    <div className="svc-tab-content">
                      <h3>{tab.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: tab.content }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="svc-blog">
        <div className="container">
          <div className="svc-blog-header">
            <div>
              <h2>Our Blog</h2>
              <p>Learn more about FHIR software design and development for healthcare.</p>
            </div>
            <a href="/blog" className="svc-all-link">
              All posts
              <span dangerouslySetInnerHTML={{ __html: arrowRightSvg }} />
            </a>
          </div>
          <div className="svc-blog-grid">
            {blogPosts.map((post) => (
              <a href={post.href} className="svc-blog-card">
                <div className="svc-blog-image">
                  <img src={post.image} alt="blog thumbnail" />
                </div>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <span className="svc-blog-arrow">
                  <img src="/assets/images/services/icon-arrow-right.svg" alt="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="svc-contact" id="service-c2a-form">
        <div className="container">
          <div className="svc-contact-grid">
            <div className="svc-contact-form">
              <form action="/api/contact" method="POST">
                <div className="svc-form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="svc-form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="svc-form-group">
                  <label htmlFor="email">Business Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="svc-form-group">
                  <label htmlFor="description">Project Description</label>
                  <textarea id="description" name="description" rows={5} />
                </div>
                <div className="svc-form-recaptcha">
                  {/* reCAPTCHA placeholder - in production use actual reCAPTCHA */}
                  <div className="g-recaptcha" data-sitekey="your-site-key"></div>
                </div>
                <button type="submit" className="btn btn-primary svc-submit-btn">LET'S TALK</button>
              </form>
            </div>
            <div className="svc-contact-info">
              <div className="svc-contact-icon">
                <img src="/assets/images/services/contact-us.webp" alt="hire mpi developers" />
              </div>
              <h2>Got a FHIR project?</h2>
              <p>Complete the form and one of our FHIR experts will contact you via email to schedule a call within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
