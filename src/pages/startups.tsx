import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Navigate Health Tech Innovation: Develop Your Healthcare Startup with Aidbox | FHIR api development",
  description: "Aidbox helps digital health startups speed up development and reduce time to market",
};

// Data for advantages section
const advantages = [
  {
    icon: "/assets/images/startups/icon-advantage-1.svg",
    title: "Build Faster",
    description: "Focus on business logic instead of technical tasks",
  },
  {
    icon: "/assets/images/startups/icon-advantage-2.svg",
    title: "Save budget",
    description: "Slash your backend budget by 70-90% with Aidbox",
  },
  {
    icon: "/assets/images/startups/icon-advantage-3.svg",
    title: "Integrate Seamlessly",
    description: "Unify data into a single, standardized source of truth",
  },
  {
    icon: "/assets/images/startups/icon-advantage-4.svg",
    title: "Scale with Ease",
    description: "Build a solution with Aidbox that grows with your business",
  },
  {
    icon: "/assets/images/startups/icon-advantage-5.svg",
    title: "Comply with regulations",
    description: "Navigate info-blocking and security regulations effortlessly",
  },
];

// Data for features section
const features = [
  {
    icon: "/assets/images/startups/icon-database.svg",
    title: "FHIR backend",
    description: "Develop web and mobile applications on top of the developer-friendly backend based on HL7 FHIR.",
  },
  {
    icon: "/assets/images/startups/icon-integration.svg",
    title: "Integration Toolkit",
    description: "Integrate your solution with different sources like EHRs and HIEs through C-CDA, HL7 v2, and X12 feeds.",
  },
  {
    icon: "/assets/images/startups/icon-database-operations.svg",
    title: "Customization Features",
    description: "Combine the existing Aidbox modules with your own within the Aidbox ecosystem to match your business goals.",
  },
  {
    icon: "/assets/images/startups/icon-lock.svg",
    title: "Access Control",
    description: "Configure granular access to the <a href='https://www.health-samurai.io/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not' class='startups-link'>FHIR</a> data with a flexible access control module based on DSL, JSON Schema, and SQL.",
  },
  {
    icon: "/assets/images/startups/icon-database-resource.svg",
    title: "SDKs and App Samples",
    description: "Develop apps with the handy SDKs and a wide variety of code samples based on best practices.",
  },
  {
    icon: "/assets/images/startups/icon-cloud-deploy.svg",
    title: "Flexible deployment",
    description: "Integrate FHIR into your existing ecosystem without overhead. Use Aidbox in clouds, on-premises or as a managed solution.",
  },
];

// Data for FAQ section
const faqs = [
  {
    id: "faq0",
    question: "What's inside of Aidbox?",
    answer: `<p>Aidbox is a developer-friendly backend platform for HealthTech that helps you use FHIR-native architecture in your healthcare apps.</p>
<p>Aidbox features include:</p>
<ul>
<li>Storage for healthcare data</li>
<li>Auth server for SMART-on-FHIR apps</li>
<li>Security layer for access control</li>
<li>Terminology server for CodeSystems and ValueSets</li>
<li>APIs: FHIR, GraphQL, SQL</li>
<li>Integration modules: C-CDA, HL7 v2, X12</li>
<li>Data validation</li>
<li>HIPAA-ready features</li>
</ul>`,
  },
  {
    id: "faq1",
    question: "Does Aidbox support new features, if I need to?",
    answer: `<p>Yes! Our Enterprise support tier delivers enhancements within the next quarter. We work closely with customers to understand their needs and prioritize features accordingly.</p>`,
  },
  {
    id: "faq2",
    question: "How much does Aidbox cost?",
    answer: `<p>Aidbox offers a free 14-day trial, then you choose a payment plan that fits your needs.</p>
<p>We offer:</p>
<ul>
<li>Volume discounts: 15% off for 2+ licenses</li>
<li>Annual discounts: 15% per year with annual billing</li>
</ul>
<p>Check our <a href="/price" class="startups-link">pricing page</a> for detailed information.</p>`,
  },
  {
    id: "faq3",
    question: "How I can handle Aidbox, if I'm not an engineer?",
    answer: `<p>Aidbox aims to empower non-technical users through comprehensive resources and expert collaboration. Our documentation, tutorials, and support team can help you get started even without deep technical expertise.</p>`,
  },
  {
    id: "faq4",
    question: "What tech stack can I use to develop with Aidbox?",
    answer: `<p>Aidbox is tech-agnostic! You can use any programming language:</p>
<ul>
<li>JavaScript / TypeScript</li>
<li>Python</li>
<li>Clojure</li>
<li>Java</li>
<li>Ruby</li>
<li>C# / .NET</li>
<li>And more...</li>
</ul>
<p>We provide APIs and SDKs for seamless integration with your preferred stack.</p>`,
  },
  {
    id: "faq5",
    question: "Can I get a multi-tenant Aidbox?",
    answer: `<p>Yes! We offer two options for multi-tenancy:</p>
<ul>
<li><strong>Multibox</strong>: Logical multi-tenant solution where each tenant has isolated data</li>
<li><strong>Aidbox API Constructor/Access Policies</strong>: Fine-grained access control for multi-tenant scenarios</li>
</ul>
<p>Contact our sales team to discuss which option best fits your needs.</p>`,
  },
];

// Client logos for trusted by section
const clientLogos = [
  { src: "/assets/images/startups/logo-lucent.webp", alt: "Lucent Health" },
  { src: "/assets/images/startups/logo-newdirection.webp", alt: "New Directions" },
  { src: "/assets/images/startups/logo-pkb.webp", alt: "PKB" },
  { src: "/assets/images/startups/logo-bestnotes.webp", alt: "BestNotes" },
  { src: "/assets/images/startups/logo-villagecare.webp", alt: "VillageCare" },
  { src: "/assets/images/startups/logo-ronin.webp", alt: "Ronin" },
  { src: "/assets/images/startups/logo-yale.webp", alt: "Yale" },
];

// Arrow icon SVG
const arrowIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// FAQ arrow icon (chevron right)
const faqArrowIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default function StartupsPage(): string {
  // Build FAQ signals object
  const faqSignals = faqs.reduce((acc, faq, i) => {
    acc[faq.id] = i === 0; // First FAQ open by default
    return acc;
  }, {} as Record<string, boolean>);

  return (
    <Fragment>
      {/* Hero Section */}
      <section className="startups-hero">
        <div className="container">
          <div className="startups-hero-content">
            <div className="startups-hero-text">
              <span className="startups-tag">{">_"} Hello, Aidbox</span>
              <h1>Design your Healthcare App for the Future with Aidbox</h1>
              <p>
                Aidbox helps digital health startups speed up development and reduce time to market.
                Simply delegate technical tasks to the{" "}
                <a href="https://www.health-samurai.io/aidbox" className="startups-link">Aidbox FHIR server</a>{" "}
                and focus on your unique features.
              </p>
              <div className="startups-hero-cta">
                <a href="#st-request-demo-section" className="startups-btn-primary">
                  Request a demo
                </a>
                <a href="https://aidbox.app/" className="startups-btn-text" target="_blank" rel="noopener noreferrer">
                  Try now
                  <span dangerouslySetInnerHTML={{ __html: arrowIcon }} />
                </a>
              </div>
            </div>
            <div className="startups-hero-image">
              <img src="/assets/images/startups/hero-bg.webp" alt="Aidbox Healthcare Data Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="startups-trusted">
        <div className="container">
          <div className="startups-trusted-content">
            <div className="startups-trusted-text">
              <strong>trusted by</strong> hundreds of dev teams
            </div>
            <div className="startups-trusted-logos">
              {clientLogos.map((logo) => (
                <img src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="startups-advantages">
        <div className="container">
          <h2>Drive Health Tech Innovation and Gain Advantages</h2>
          <div className="startups-advantages-grid">
            {advantages.map((advantage) => (
              <div className="startups-advantage-card">
                <img src={advantage.icon} alt={advantage.title} className="startups-advantage-icon" />
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="startups-features">
        <div className="container">
          <h2>Achieving Health Data Interoperability with Aidbox Features</h2>
          <div className="startups-features-grid">
            {features.map((feature) => (
              <div className="startups-feature-card">
                <img src={feature.icon} alt={feature.title} className="startups-feature-icon" />
                <h3>{feature.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: feature.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure CTA Section */}
      <section className="startups-brochure">
        <div className="container">
          <div className="startups-brochure-content">
            <div className="startups-brochure-text">
              <div className="startups-brochure-title">Learn more about Aidbox</div>
              <p className="startups-brochure-description">
                Download the Aidbox Product Brief to have all the info by hand
              </p>
              <form className="startups-brochure-form" action="/api/subscribe" method="POST">
                <input type="hidden" name="form_name" value="Aidbox for Startups Brochure" />
                <input
                  type="email"
                  name="email"
                  placeholder="email@business.com"
                  required
                  className="startups-brochure-input"
                />
                <button type="submit" className="startups-brochure-btn">
                  Download
                </button>
              </form>
            </div>
            <div className="startups-brochure-image">
              <img src="/assets/images/startups/banner-brochure.webp" alt="Aidbox Product Brief" />
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Options Section */}
      <section className="startups-hosting">
        <div className="container">
          <div className="startups-hosting-content">
            <div className="startups-hosting-text">
              <h2>
                <span className="startups-hosting-title-bold">Start in minutes</span>
                <br />
                <span className="startups-hosting-title-light">and choose the right</span>
                <br />
                <span className="startups-hosting-title-light">hosting option</span>
              </h2>
              <p>
                Aidbox Cloud provides a production-ready infrastructure on GCP, AWS and Azure.
                Try it for free and decide how it works for you.
              </p>
            </div>
            <div className="startups-hosting-cards">
              <a href="https://aidbox.app/ui/portal#/signup" className="startups-hosting-card" target="_blank" rel="noopener noreferrer">
                <div className="startups-hosting-card-header">
                  <span className="startups-hosting-prefix">#! Aidbox</span>
                </div>
                <h3>Cloud</h3>
                <p>Perfect for a fast and easy start.</p>
                <div className="startups-hosting-card-cta">
                  Sign Up
                  <span dangerouslySetInnerHTML={{ __html: arrowIcon }} />
                </div>
              </a>
              <a href="#st-request-demo-section" className="startups-hosting-card">
                <div className="startups-hosting-card-header">
                  <span className="startups-hosting-prefix">#! Aidbox</span>
                </div>
                <h3>Self-hosted</h3>
                <p>Perfect for self-hosted solutions.</p>
                <div className="startups-hosting-card-cta">
                  Contact Sales
                  <span dangerouslySetInnerHTML={{ __html: arrowIcon }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="startups-faq">
        <div className="container">
          <h2>FAQs</h2>
          <div className="startups-faq-list" data-signals={JSON.stringify(faqSignals)}>
            {faqs.map((faq, index) => (
              <div className="startups-faq-item">
                <button
                  className="startups-faq-trigger"
                  data-on-click={`$${faq.id} = !$${faq.id}`}
                  data-class={`{'startups-faq-trigger--active': $${faq.id}}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className="startups-faq-icon"
                    data-class={`{'startups-faq-icon--open': $${faq.id}}`}
                    dangerouslySetInnerHTML={{ __html: faqArrowIcon }}
                  />
                </button>
                <div
                  className="startups-faq-content"
                  data-show={`$${faq.id}`}
                  style={index === 0 ? {} : { display: "none" }}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="startups-demo" id="st-request-demo-section">
        <div className="container">
          <h2>Request a Demo</h2>
          <form className="startups-demo-form" action="/api/contact" method="POST">
            <input type="hidden" name="form_name" value="Aidbox for Startups" />
            <div className="startups-form-group">
              <label className="startups-form-label">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder=""
                required
                className="startups-form-input"
              />
            </div>
            <div className="startups-form-group">
              <label className="startups-form-label">Business Email</label>
              <input
                type="email"
                name="email"
                placeholder=""
                required
                className="startups-form-input"
              />
            </div>
            <div className="startups-form-group">
              <label className="startups-form-label">Request description</label>
              <textarea
                name="message"
                placeholder="Example Text"
                rows={4}
                className="startups-form-input startups-form-textarea"
              />
            </div>
            <button type="submit" className="startups-demo-submit">
              Submit
            </button>
            <p className="startups-demo-privacy">
              By submitting the form you agree to{" "}
              <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/legal/cookie-policy">Cookie Policy</a>.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
