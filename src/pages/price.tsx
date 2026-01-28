import { Fragment } from "../lib/jsx-runtime";
import { Pricing, aidboxPricingTiers, aidboxSupportPlans, aidboxSupportCta } from "../components/sections/Pricing";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Pricing",
  description: "Aidbox pricing plans - Flat pricing with no hidden fees. Choose the plan that fits your healthcare solution needs.",
};

// Optional modules data
const modules = [
  {
    name: "Aidbox Forms",
    description: "No-code clinical form builder with FHIR Questionnaire support",
    price: { yearly: "$12,000", monthly: "$1,200" },
    href: "/medical-form",
  },
  {
    name: "Aidbox MPI",
    description: "Master Patient Index for patient matching and deduplication",
    price: { yearly: "From $15,000", monthly: "From $1,500" },
    href: "https://docs.aidbox.app/modules/mpi",
  },
  {
    name: "C-CDA Converter",
    description: "Convert C-CDA documents to FHIR resources",
    price: { yearly: "$8,000", monthly: "$800" },
    href: "/c-cda-to-fhir-converter",
  },
  {
    name: "SMARTbox",
    description: "SMART on FHIR application launcher and authorization server",
    price: { yearly: "$19,000", monthly: "$1,900" },
    href: "https://docs.aidbox.app/modules/smartbox",
  },
  {
    name: "Aidbox eRx",
    description: "E-Prescription module with Surescripts integration",
    price: { yearly: "From $25,000", monthly: "From $2,500" },
    href: "/e-prescription-module",
  },
  {
    name: "Termbox",
    description: "Terminology server with pre-loaded code systems",
    price: { yearly: "Contact us", monthly: "Contact us" },
    href: "/terminology",
  },
];

// Professional services data
const services = [
  {
    name: "Automated Deployment",
    description: "CI/CD pipeline setup with Kubernetes and Terraform",
    price: "From $2,900",
    priceType: "one-time",
  },
  {
    name: "Instance Maintenance",
    description: "Monitoring, backups, and infrastructure management",
    price: "From $500/month",
    priceType: "recurring",
  },
  {
    name: "Performance Optimization",
    description: "Query optimization, caching strategies, and scaling advice",
    price: "From $1,000/month",
    priceType: "recurring",
  },
  {
    name: "Training",
    description: "5-day FHIR and Aidbox training session for your team",
    price: "$6,000",
    priceType: "one-time",
  },
];

function ModulesSection(): string {
  return (
    <section className="modules-section">
      <div className="container">
        <div className="modules-header">
          <h2>Optional Modules</h2>
          <p>Expand your Aidbox functionality with additional modules</p>
        </div>
        <div className="modules-grid" data-signals="{modulePeriod: 'yearly'}">
          <div className="modules-toggle">
            <button
              className="modules-toggle-btn"
              data-class="{'active': $modulePeriod === 'yearly'}"
              data-on-click="$modulePeriod = 'yearly'"
            >
              Yearly
            </button>
            <button
              className="modules-toggle-btn"
              data-class="{'active': $modulePeriod === 'monthly'}"
              data-on-click="$modulePeriod = 'monthly'"
            >
              Monthly
            </button>
          </div>
          <div className="modules-list">
            {modules.map((mod) => (
              <a href={mod.href} className="module-card">
                <div className="module-info">
                  <h3 className="module-name">{mod.name}</h3>
                  <p className="module-description">{mod.description}</p>
                </div>
                <div className="module-price">
                  <span data-show="$modulePeriod === 'yearly'">{mod.price.yearly}/year</span>
                  <span data-show="$modulePeriod === 'monthly'" style="display: none">{mod.price.monthly}/month</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection(): string {
  return (
    <section className="services-pricing-section">
      <div className="container">
        <div className="services-pricing-header">
          <h2>Professional Services</h2>
          <p>Expert support to accelerate your healthcare solution development</p>
        </div>
        <div className="services-pricing-grid">
          {services.map((service) => (
            <div className="service-pricing-card">
              <div className="service-pricing-info">
                <h3 className="service-pricing-name">{service.name}</h3>
                <p className="service-pricing-description">{service.description}</p>
              </div>
              <div className="service-pricing-price">
                <span className="service-price-amount">{service.price}</span>
                <span className="service-price-type">{service.priceType}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="services-pricing-cta">
          <p>Need custom integration or consulting services?</p>
          <a href="/contacts" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection(): string {
  return (
    <section className="compliance-section">
      <div className="container">
        <div className="compliance-inner">
          <div className="compliance-text">
            <h2>Enterprise-Grade Security & Compliance</h2>
            <p>
              Aidbox is built with security and compliance at its core. Our platform meets the
              highest standards for healthcare data protection, ensuring your patient data is
              always secure.
            </p>
          </div>
          <div className="compliance-badges">
            <img src="/assets/images/certifications/hipaa.png" alt="HIPAA Compliant" />
            <img src="/assets/images/certifications/iso-27001.svg" alt="ISO 27001:2022 Certified" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricePage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Aidbox Pricing</h1>
          <p className="pricing-hero-subtitle">Flat pricing with no hidden fees</p>
          <p className="pricing-hero-note">
            Startup, regional, and volume discounts are available — <a href="/contacts">reach out to learn more</a>.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <Pricing
        title="Pick Your Aidbox Plan"
        subtitle="Choose the plan that fits your needs"
        tiers={aidboxPricingTiers}
        supportPlans={aidboxSupportPlans}
        supportCta={aidboxSupportCta}
      />

      {/* Optional Modules */}
      <ModulesSection />

      {/* Professional Services */}
      <ServicesSection />

      {/* Compliance */}
      <ComplianceSection />

      {/* Contact Form */}
      <ContactForm />
    </Fragment>
  );
}
