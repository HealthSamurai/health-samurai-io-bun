import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/sections/Hero";
import { ContactForm } from "../components/sections/ContactForm";
import { Button } from "../components/ui/Button";

export const metadata = {
  title: "Services - FHIR Software Development",
  description: "Delegate your software development needs to us — experts in designing, building, and maintaining advanced FHIR-based software solutions.",
};

// Key capabilities
const capabilities = [
  {
    icon: "/assets/images/icons/services/team.svg",
    title: "Dedicated Teams",
    description: "Full-stack developers working exclusively on your project with deep healthcare domain expertise.",
  },
  {
    icon: "/assets/images/icons/services/platform.svg",
    title: "FHIR Platform",
    description: "Pre-built Aidbox backend infrastructure that accelerates development and reduces time-to-market.",
  },
  {
    icon: "/assets/images/icons/services/expertise.svg",
    title: "Domain Expertise",
    description: "15+ years in health IT and HL7 FHIR. We know healthcare interoperability inside and out.",
  },
  {
    icon: "/assets/images/icons/services/agile.svg",
    title: "Agile & Lean",
    description: "Short iteration cycles for rapid product development with continuous feedback and delivery.",
  },
];

// Portfolio projects
const portfolio = [
  {
    image: "/assets/images/services/portfolio-lucent.webp",
    title: "Care Coordination Platform",
    client: "Lucent Health",
    description: "Built a comprehensive care coordination platform enabling providers to manage patient journeys across the continuum of care.",
  },
  {
    image: "/assets/images/services/portfolio-hospice.webp",
    title: "Hospice EHR System",
    client: "100+ Facilities",
    description: "Developed a specialized EHR system for hospice care, managing clinical workflows across over 100 facilities.",
  },
  {
    image: "/assets/images/services/portfolio-billing.webp",
    title: "Billing Module",
    client: "Sandata",
    description: "Created an integrated billing module that streamlines revenue cycle management for home health agencies.",
  },
  {
    image: "/assets/images/services/portfolio-derm.webp",
    title: "Dermatology EHR",
    client: "New York Clinic",
    description: "Custom dermatology EHR with image management, treatment planning, and FHIR-based data exchange.",
  },
];

// Services offered
const services = [
  { icon: "/assets/images/icons/services/fullstack.svg", title: "Full-stack Development" },
  { icon: "/assets/images/icons/services/design.svg", title: "System Design" },
  { icon: "/assets/images/icons/services/fhir-modeling.svg", title: "FHIR Data Modeling" },
  { icon: "/assets/images/icons/services/integrations.svg", title: "Integrations" },
  { icon: "/assets/images/icons/services/cloud.svg", title: "Cloud Infrastructure" },
  { icon: "/assets/images/icons/services/onc.svg", title: "ONC/CMS Compliance" },
  { icon: "/assets/images/icons/services/hipaa.svg", title: "HIPAA/GDPR Compliance" },
  { icon: "/assets/images/icons/services/ux.svg", title: "UI/UX Design" },
];

// Approach sections
const approachSections = [
  {
    title: "Teams",
    image: "/assets/images/services/approach-teams.webp",
    description: "Small, cross-functional teams of 3-7 professionals including product owner, tech lead, and full-stack engineers dedicated to your project.",
  },
  {
    title: "Process",
    image: "/assets/images/services/approach-process.webp",
    description: "From proof-of-concept to MVP to production-ready — we move through weekly iterations with continuous delivery and rapid feedback loops.",
  },
  {
    title: "Culture",
    image: "/assets/images/services/approach-culture.webp",
    description: "Proven engineering practices: CI/CD automation, test-driven development, pair programming, and code reviews ensure quality at every step.",
  },
  {
    title: "Platform & Open Source",
    image: "/assets/images/services/approach-opensource.webp",
    description: "Built on Aidbox FHIR Server with contributions to open source projects like sql-on-fhir, fhirbase, and hl7proxy.",
  },
];

// Blog posts
const blogPosts = [
  {
    image: "/assets/images/blog/fhir-fuse.webp",
    title: "FHIR FUSE: FHIR in a Unix Way",
    href: "/blog/fhir-fuse",
  },
  {
    image: "/assets/images/blog/multi-clinic.webp",
    title: "Managing Multi-Clinic Data and Real-time Synchronization",
    href: "/blog/multi-clinic-sync",
  },
  {
    image: "/assets/images/blog/paper-to-fhir.webp",
    title: "From Paper Form to FHIR",
    href: "/blog/paper-form-to-fhir",
  },
];

function CapabilitiesSection(): string {
  return (
    <section className="services-capabilities">
      <div className="container">
        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div className="capability-card">
              <div className="capability-icon">
                <img src={cap.icon} alt={cap.title} loading="lazy" />
              </div>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection(): string {
  return (
    <section className="services-portfolio">
      <div className="container">
        <h2 className="section-heading">Portfolio</h2>
        <div className="portfolio-grid">
          {portfolio.map((project) => (
            <div className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-client">{project.client}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>
                <a href="/casestudies" className="portfolio-link">
                  Read case study <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection(): string {
  return (
    <section className="services-offered">
      <div className="container">
        <div className="services-intro">
          <h2 className="section-heading">Trusted technology partner for FHIR projects</h2>
          <p className="services-intro-text">
            We collaborate with you through small, cross-functional teams to deliver healthcare software that meets your exact requirements.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-item">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} loading="lazy" />
              </div>
              <span className="service-title">{service.title}</span>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Button href="/contacts" variant="primary">Hire a team</Button>
        </div>
      </div>
    </section>
  );
}

function ApproachSection(): string {
  return (
    <section className="services-approach">
      <div className="container">
        <h2 className="section-heading">Our Approach</h2>
        <div className="approach-grid">
          {approachSections.map((section) => (
            <div className="approach-card">
              <div className="approach-image">
                <img src={section.image} alt={section.title} loading="lazy" />
              </div>
              <div className="approach-content">
                <h3 className="approach-title">{section.title}</h3>
                <p className="approach-desc">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection(): string {
  return (
    <section className="services-blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-heading">Our Blog</h2>
          <a href="/blog" className="blog-all-link">
            All posts <span className="arrow">→</span>
          </a>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a href={post.href} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <h3 className="blog-title">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage(): string {
  return (
    <Fragment>
      <Hero
        tag="Services"
        title="FHIR-first software development for healthcare"
        description="Delegate your software development needs to us — experts in designing, building, and maintaining advanced FHIR-based software solutions."
        primaryCta={{ label: "Let's Talk", href: "/contacts" }}
        variant="product"
      />

      <CapabilitiesSection />

      <PortfolioSection />

      <ServicesSection />

      <ApproachSection />

      <BlogSection />

      <section className="services-contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-intro">
              <h2>Got a FHIR project?</h2>
              <p>
                Complete the form and one of our FHIR experts will contact you via email to schedule a call within one business day.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
