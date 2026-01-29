import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Aidbox Pricing",
  description: "Flat pricing with no hidden fees. Pick your Aidbox plan - startup, regional, and volume discounts available.",
};

// Check icon for table cells
const CheckIcon = () => (
  <img
    src="/assets/images/price/check-icon.png"
    alt="Included"
    className="price-check-icon"
  />
);

// Dash for unavailable features
const DashIcon = () => <span className="price-dash">-</span>;

// License pricing data
const licenseFeatures = [
  { name: "FHIR Database", dev: true, base: true, enterprise: true },
  { name: "REST API, SQL & GraphQL", dev: true, base: true, enterprise: true },
  { name: "FHIR IGs and Custom Resources", dev: true, base: true, enterprise: true },
  { name: "User management & Access Control", dev: true, base: true, enterprise: true },
  { name: "Integration toolkit (HL7 v2, C-CDA, X12)", dev: true, base: true, enterprise: true },
  { name: "Access to SaaS Termbox", dev: true, base: true, enterprise: true },
  { name: "Audit log", dev: true, base: true, enterprise: true },
  { name: "SQL on FHIR engine", dev: true, base: true, enterprise: true },
  { name: "Aidbox administrative UI", dev: true, base: true, enterprise: true },
  { name: "SMART on FHIR", dev: true, base: true, enterprise: true },
  { name: "Subscriptions", dev: true, base: true, enterprise: true },
  { name: "Partitioning", dev: true, base: false, enterprise: true },
  { name: "Smart search parameters", dev: true, base: false, enterprise: true },
  { name: "CDC Connectors (Clickhouse, BigQuery, etc.)", dev: true, base: false, enterprise: true },
  { name: "Read replica", dev: true, base: false, enterprise: true },
  { name: "Multi-tenancy", dev: true, base: false, enterprise: true },
  { name: "Protected health information allowed (HIPAA compliant)", dev: false, base: true, enterprise: true },
];

// Support features data
const supportFeatures = [
  { name: "Onboarding Video Call", basic: true, professional: true, enterprise: true },
  { name: "Private Chat & Bug Fixing", basic: true, professional: true, enterprise: true },
  { name: "FHIR Guidance & New Terminologies", basic: false, professional: true, enterprise: true },
  { name: "On-demand Video Calls", basic: "-", professional: "12/year", enterprise: "1/week" },
  { name: "24/7 Support & Consultations", basic: false, professional: false, enterprise: true },
  { name: "Response Times (Q&A / Blocking issues resolution)", basic: "3 days/1 day", professional: "2 days/8 hours", enterprise: "1 day/4 hours" },
];

// Optional modules data
const optionalModules = [
  {
    name: "Aidbox Forms",
    description: "A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms.",
    price: { yearly: "$12,000/year", monthly: "$1,200/month" },
  },
  {
    name: "Aidbox MPI",
    description: "A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations.",
    price: { yearly: "From $15,000/year", monthly: "From $1,500/month" },
  },
  {
    name: "Termbox (self-hosted)",
    description: "A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm.",
    price: { yearly: "Contact us", monthly: "Contact us" },
  },
  {
    name: "Aidbox eRx",
    description: "A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification",
    price: { yearly: "From $25,000/year", monthly: "From $2,500/month" },
  },
  {
    name: "SMARTbox",
    description: "ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management.",
    price: { yearly: "$19,000/year", monthly: "$1,900/month" },
  },
  {
    name: "C-CDA Converter",
    description: "A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents.",
    price: { yearly: "$8,000/year", monthly: "$800/month" },
  },
  {
    name: "Aidbox Billing",
    description: "A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging.",
    price: { yearly: "Contact us", monthly: "Contact us" },
  },
];

// Professional services data
const professionalServices = [
  { name: "Automated Aidbox Deployment", price: "From $2,900 (one-time)" },
  { name: "Aidbox Instance Maintenance", price: "From $5,000/yearly" },
  { name: "Aidbox Performance Optimization", price: "From $10,000/yearly" },
  { name: "Aidbox Training", price: "$6,000 (5-day session)" },
  { name: "Integration/Profiling Works", price: "Contact us" },
];

function HeroSection(): string {
  return (
    <section className="price-hero">
      <div className="container">
        <span className="price-tag">$_ Flat pricing with no hidden fees</span>
        <h1>Pick Your Aidbox Plan</h1>
        <p className="price-hero-description">
          Startup, regional, and volume discounts are available — reach out to learn more and find the plan that works best for you.
        </p>
      </div>
    </section>
  );
}

function PeriodToggle({ signalName, defaultValue = "yearly" }: { signalName: string; defaultValue?: string }): string {
  return (
    <div className="price-toggle">
      <button
        className="price-toggle-btn"
        data-class={`{'active': $${signalName} === 'yearly'}`}
        data-on-click={`$${signalName} = 'yearly'`}
      >
        Yearly
      </button>
      <button
        className="price-toggle-btn"
        data-class={`{'active': $${signalName} === 'monthly'}`}
        data-on-click={`$${signalName} = 'monthly'`}
      >
        Monthly
      </button>
    </div>
  );
}

function LicensePricingTable(): string {
  return (
    <section className="price-table-section" data-signals="{licensePeriod: 'monthly'}">
      <div className="container">
        <h2 className="price-section-title">Aidbox License Pricing</h2>
        <PeriodToggle signalName="licensePeriod" defaultValue="monthly" />

        <div className="price-table-card">
          <table className="price-table">
            <thead>
              <tr>
                <th className="price-feature-col">Feature</th>
                <th className="price-plan-col">Aidbox Dev</th>
                <th className="price-plan-col">Aidbox Base</th>
                <th className="price-plan-col">Aidbox Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {licenseFeatures.map((feature) => (
                <tr>
                  <td className="price-feature-name">{feature.name}</td>
                  <td className="price-feature-value">
                    {feature.dev ? <CheckIcon /> : <DashIcon />}
                  </td>
                  <td className="price-feature-value">
                    {feature.base ? <CheckIcon /> : <DashIcon />}
                  </td>
                  <td className="price-feature-value">
                    {feature.enterprise ? <CheckIcon /> : <DashIcon />}
                  </td>
                </tr>
              ))}
              <tr className="price-support-row">
                <td className="price-feature-name">Support included</td>
                <td className="price-feature-value"><DashIcon /></td>
                <td className="price-feature-value price-text-value">Basic</td>
                <td className="price-feature-value price-text-value">Basic</td>
              </tr>
              <tr className="price-row">
                <td className="price-feature-name price-bold">Price</td>
                <td className="price-feature-value">
                  <span className="price-amount">$0</span>
                </td>
                <td className="price-feature-value">
                  <span className="price-amount" data-show="$licensePeriod === 'yearly'">from $19,000/year</span>
                  <span className="price-amount" data-show="$licensePeriod === 'monthly'" style="display: none">from $1,900/month</span>
                </td>
                <td className="price-feature-value">
                  <a href="/contacts" className="price-contact-link">Contact us</a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="price-table-cta">
            <div className="price-cta-col">
              <a href="https://aidbox.app/ui/portal#/signup" className="btn btn-primary">Try now</a>
            </div>
            <div className="price-cta-col">
              <a href="/contacts" className="btn btn-outline-primary">Schedule a demo</a>
            </div>
            <div className="price-cta-col">
              <a href="/contacts" className="btn btn-outline-primary">Schedule a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportOptionsTable(): string {
  return (
    <section className="price-table-section" data-signals="{supportPeriod: 'yearly'}">
      <div className="container">
        <h2 className="price-section-title">Support Options</h2>
        <PeriodToggle signalName="supportPeriod" />

        <div className="price-table-card">
          <table className="price-table">
            <thead>
              <tr>
                <th className="price-feature-col">Feature</th>
                <th className="price-plan-col">Basic</th>
                <th className="price-plan-col">Professional</th>
                <th className="price-plan-col">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {supportFeatures.map((feature) => (
                <tr>
                  <td className="price-feature-name">{feature.name}</td>
                  <td className="price-feature-value">
                    {feature.basic === true ? <CheckIcon /> :
                     feature.basic === false ? <DashIcon /> :
                     <span className="price-text-value">{feature.basic}</span>}
                  </td>
                  <td className="price-feature-value">
                    {feature.professional === true ? <CheckIcon /> :
                     feature.professional === false ? <DashIcon /> :
                     <span className="price-text-value">{feature.professional}</span>}
                  </td>
                  <td className="price-feature-value">
                    {feature.enterprise === true ? <CheckIcon /> :
                     feature.enterprise === false ? <DashIcon /> :
                     <span className="price-text-value">{feature.enterprise}</span>}
                  </td>
                </tr>
              ))}
              <tr className="price-row">
                <td className="price-feature-name price-bold">Price</td>
                <td className="price-feature-value">
                  <span className="price-amount">$0</span>
                </td>
                <td className="price-feature-value">
                  <span className="price-amount">$25,000/year</span>
                </td>
                <td className="price-feature-value">
                  <a href="/contacts" className="price-contact-link">Contact us</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function OptionalModulesTable(): string {
  return (
    <section className="price-table-section" data-signals="{modulesPeriod: 'yearly'}">
      <div className="container">
        <h2 className="price-section-title">Optional Modules</h2>
        <PeriodToggle signalName="modulesPeriod" />

        <div className="price-table-card">
          <table className="price-table price-modules-table">
            <thead>
              <tr>
                <th className="price-module-name-col">Module</th>
                <th className="price-module-desc-col">Description</th>
                <th className="price-module-price-col">Price</th>
              </tr>
            </thead>
            <tbody>
              {optionalModules.map((module) => (
                <tr>
                  <td className="price-module-name">{module.name}</td>
                  <td className="price-module-description">{module.description}</td>
                  <td className="price-module-price">
                    <span data-show="$modulesPeriod === 'yearly'">{module.price.yearly}</span>
                    <span data-show="$modulesPeriod === 'monthly'" style="display: none">{module.price.monthly}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProfessionalServicesTable(): string {
  return (
    <section className="price-table-section">
      <div className="container">
        <h2 className="price-section-title">Professional Services</h2>

        <div className="price-table-card">
          <table className="price-table price-services-table">
            <thead>
              <tr>
                <th className="price-service-desc-col">Description</th>
                <th className="price-service-price-col">Price</th>
              </tr>
            </thead>
            <tbody>
              {professionalServices.map((service) => (
                <tr>
                  <td className="price-service-name">{service.name}</td>
                  <td className="price-service-price">
                    {service.price === "Contact us" ? (
                      <a href="/contacts" className="price-contact-link">Contact us</a>
                    ) : (
                      service.price
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ContactSection(): string {
  return (
    <section className="price-contact-section">
      <div className="container">
        <div className="price-contact-inner">
          <h2>Contact us</h2>
          <p className="price-contact-subtitle">Have a specific request? Get in touch and we'll set up a call</p>

          <form className="price-contact-form" hx-post="/api/contact" hx-swap="outerHTML">
            <div className="price-form-row">
              <div className="price-form-group">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="price-form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="fullName" className="price-form-label">FULL NAME</label>
              </div>
              <div className="price-form-group">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="price-form-input"
                  placeholder=" "
                />
                <label htmlFor="company" className="price-form-label">COMPANY</label>
              </div>
            </div>

            <div className="price-form-row">
              <div className="price-form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="price-form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="price-form-label">BUSINESS EMAIL</label>
              </div>
              <div className="price-form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="price-form-input"
                  placeholder=" "
                />
                <label htmlFor="phone" className="price-form-label">PHONE</label>
              </div>
            </div>

            <div className="price-form-group price-form-group-full">
              <textarea
                id="message"
                name="message"
                className="price-form-input price-form-textarea"
                placeholder=" "
                rows={4}
              />
              <label htmlFor="message" className="price-form-label">DESCRIBE YOUR TOPIC</label>
            </div>

            <div className="price-form-recaptcha">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>

            <button type="submit" className="btn btn-primary price-submit-btn">SEND REQUEST</button>

            <p className="price-privacy-text">
              By submitting the form you agree to our{" "}
              <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/legal/cookie-policy">Cookie Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ComplianceBadges(): string {
  return (
    <section className="price-compliance-section">
      <div className="container">
        <div className="price-compliance-badges">
          <img src="/assets/images/price/hipaa-logo.png" alt="HIPAA Compliant" />
          <img src="/assets/images/price/iso-27001-2022.svg" alt="ISO/IEC 27001:2022 Certified" />
        </div>
      </div>
    </section>
  );
}

export default function PricePage(): string {
  return (
    <Fragment>
      <HeroSection />
      <LicensePricingTable />
      <SupportOptionsTable />
      <OptionalModulesTable />
      <ProfessionalServicesTable />
      <ContactSection />
      <ComplianceBadges />
    </Fragment>
  );
}
