import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "E-Prescription — a module for managing electronic prescriptions",
  description: "Build a compliant, scalable eRx solution in days with Aidbox. FHIR-native, certification-ready, and built for seamless Surescripts integration.",
};

const imagePath = "/assets/images/e-prescription-module";

const clientLogos = [
  { src: `${imagePath}/logo-client-01.png`, alt: "AI" },
  { src: `${imagePath}/logo-client-02.png`, alt: "Solutio" },
  { src: `${imagePath}/logo-client-03.png`, alt: "BodyLogicMD" },
  { src: `${imagePath}/logo-client-04.png`, alt: "Innovaccer" },
  { src: `${imagePath}/logo-client-05.png`, alt: "BestNotes" },
  { src: `${imagePath}/logo-client-06.png`, alt: "Patients Know Best" },
  { src: `${imagePath}/logo-client-07.png`, alt: "Lucent Health" },
  { src: `${imagePath}/logo-client-08.png`, alt: "Client 8" },
  { src: `${imagePath}/logo-client-09.png`, alt: "Client 9" },
  { src: `${imagePath}/logo-client-10.png`, alt: "Client 10" },
  { src: `${imagePath}/logo-client-11.png`, alt: "Client 11" },
  { src: `${imagePath}/logo-client-12.png`, alt: "Client 12" },
];

const features = [
  {
    icon: `${imagePath}/feature-icon-1.svg`,
    title: "FHIR-native",
    description: "Direct mappings to FHIR — no manual configuration needed",
  },
  {
    icon: `${imagePath}/feature-icon-2.svg`,
    title: "NCPDP-compliant",
    description: "Fully compliant with NCPDP standard for e-prescriptions",
  },
  {
    icon: `${imagePath}/feature-icon-3.svg`,
    title: "Quick Aidbox integration",
    description: "Seamless integration with Aidbox platform",
  },
  {
    icon: `${imagePath}/feature-icon-4.svg`,
    title: "Certification ready",
    description: "Certification ready, help through the process",
  },
];

const benefits = [
  {
    icon: `${imagePath}/feature-icon-5.svg`,
    title: "We've already passed certification",
    description: "We've helped clients complete all necessary checks and certifications — we know the processes",
  },
  {
    icon: `${imagePath}/feature-icon-6.svg`,
    title: "All mappings and data structures are ready",
    description: "No need to dive into data format details — we've already prepared and validated everything",
  },
  {
    icon: `${imagePath}/feature-icon-7.svg`,
    title: "Your team can start as early as tomorrow",
    description: "Simple integration and detailed documentation make it easy to get started quickly",
  },
];

const roadmapItems = {
  backlog: [
    {
      title: "Scholz DB Integration",
      description: "Alternative source for DDI and medication data",
    },
    {
      title: "Track medication dispense",
      description: "Add support for Surescripts RxFill",
    },
    {
      title: "Medication history",
      description: "Integration with Surescripts Medication History for ambulatory",
    },
  ],
  inProgress: [
    {
      title: "EPCS support",
      description: "Add support for DEA-compliant electronic prescribing of controlled substances",
    },
  ],
  released: [
    {
      title: "Renew prescription",
      description: "Support for Surescripts RxRenewal",
    },
    {
      title: "Change prescription",
      description: "Support for Surescripts RxChange",
    },
  ],
};

const technologies = [
  { icon: `${imagePath}/tech-icon-aidbox.svg`, label: "Aidbox" },
  { icon: `${imagePath}/tech-icon-fhir.svg`, label: "FHIR" },
  { icon: `${imagePath}/tech-icon-ncpdp.svg`, label: "NCPDP" },
  { icon: `${imagePath}/tech-icon-rest-api.svg`, label: "REST API" },
];

export default function EPrescriptionModule(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="erx-hero">
        <div className="container">
          <div className="erx-hero-grid">
            <div className="erx-hero-content">
              <div className="erx-hero-tag">
                <span className="erx-tag-prompt">{">_"}</span>
                <span className="erx-tag-text">Built on FHIR & Surescripts-ready</span>
              </div>
              <h1 className="erx-hero-title">
                Launch your{" "}
                <span className="erx-highlight">e-prescription</span>{" "}
                module fast
              </h1>
              <p className="erx-hero-desc">
                Build a compliant, scalable eRx solution in days with Aidbox. FHIR-native, certification-ready, and built for seamless Surescripts integration.
              </p>
              <div className="erx-hero-buttons">
                <a href="/contacts" className="erx-btn-primary">Book a Call</a>
                <a href="https://docs.aidbox.app/modules/eprescription" className="erx-btn-secondary" target="_blank" rel="noopener noreferrer">Docs</a>
              </div>
            </div>
            <div className="erx-hero-illustration">
              <img src={`${imagePath}/hero-illustration.svg`} alt="E-prescription illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="erx-clients">
        <div className="erx-clients-track">
          <div className="erx-clients-scroll">
            {clientLogos.map((logo) => (
              <img src={logo.src} alt={logo.alt} className="erx-client-logo" />
            ))}
            {clientLogos.map((logo) => (
              <img src={logo.src} alt={logo.alt} className="erx-client-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="erx-features">
        <div className="container">
          <div className="erx-features-header">
            <h3 className="erx-features-title">
              <span className="erx-features-title-bold">Aidbox E-Prescription —</span>{" "}
              a module for managing electronic prescriptions
            </h3>
            <p className="erx-features-subtitle">
              Modern solution for healthcare organizations compliant with strict industry standards
            </p>
          </div>
          <div className="erx-features-grid">
            {features.map((feature) => (
              <div className="erx-feature-card">
                <img src={feature.icon} alt={feature.title} className="erx-feature-icon" />
                <h4 className="erx-feature-title">{feature.title}</h4>
                <p className="erx-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Is It Easier Section */}
      <section className="erx-why-easier">
        <div className="container">
          <h2 className="erx-section-title">Why is it easier with us?</h2>
          <p className="erx-section-subtitle">
            Doing it yourself is time-consuming and expensive. With us, it's fast and certified.
          </p>
          <div className="erx-benefits-grid">
            {benefits.map((benefit) => (
              <div className="erx-benefit-card">
                <img src={benefit.icon} alt={benefit.title} className="erx-benefit-icon" />
                <h4 className="erx-benefit-title">{benefit.title}</h4>
                <p className="erx-benefit-desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Together / Roadmap Section */}
      <section className="erx-roadmap">
        <div className="container">
          <h2 className="erx-section-title">Growing together with our clients</h2>
          <p className="erx-section-subtitle">
            Doing it yourself is time-consuming and expensive. With us, it's fast and certified.
          </p>
          <div className="erx-roadmap-grid">
            {/* Backlog Column */}
            <div className="erx-roadmap-column">
              <span className="erx-roadmap-tag erx-roadmap-tag--backlog">Backlog</span>
              <div className="erx-roadmap-cards">
                {roadmapItems.backlog.map((item) => (
                  <div className="erx-roadmap-card">
                    <h5 className="erx-roadmap-card-title">{item.title}</h5>
                    <p className="erx-roadmap-card-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* In Progress Column */}
            <div className="erx-roadmap-column">
              <span className="erx-roadmap-tag erx-roadmap-tag--in-progress">In Progress</span>
              <div className="erx-roadmap-cards">
                {roadmapItems.inProgress.map((item) => (
                  <div className="erx-roadmap-card">
                    <h5 className="erx-roadmap-card-title">{item.title}</h5>
                    <p className="erx-roadmap-card-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Released Column */}
            <div className="erx-roadmap-column">
              <span className="erx-roadmap-tag erx-roadmap-tag--released">Released</span>
              <div className="erx-roadmap-cards">
                {roadmapItems.released.map((item) => (
                  <div className="erx-roadmap-card">
                    <h5 className="erx-roadmap-card-title">{item.title}</h5>
                    <p className="erx-roadmap-card-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request Form Section */}
      <section className="erx-feature-request">
        <div className="container">
          <div className="erx-feature-request-content">
            <h4 className="erx-feature-request-title">Tell us what you're missing</h4>
            <p className="erx-feature-request-subtitle">and we'll figure out how to build that feature together</p>
            <form className="erx-feature-form" action="/api/feature-request" method="POST">
              <textarea
                name="feature"
                className="erx-form-textarea"
                placeholder="Describe features you want"
                required
              ></textarea>
              <input
                type="email"
                name="email"
                className="erx-form-input"
                placeholder="Email"
                required
              />
              <div className="erx-form-recaptcha">
                {/* Placeholder for reCAPTCHA */}
                <div className="erx-recaptcha-placeholder">
                  <div className="erx-recaptcha-checkbox"></div>
                  <span>I'm not a robot</span>
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="erx-recaptcha-logo" />
                </div>
              </div>
              <button type="submit" className="erx-form-submit">Add to backlog</button>
            </form>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="erx-technologies">
        <div className="container">
          <h2 className="erx-tech-title">Technologies</h2>
          <p className="erx-tech-subtitle">under the hood</p>
          <div className="erx-tech-grid">
            {technologies.map((tech) => (
              <div className="erx-tech-item">
                <div className="erx-tech-icon-wrapper">
                  <img src={tech.icon} alt={tech.label} className="erx-tech-icon" />
                </div>
                <span className="erx-tech-label">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="erx-how-it-works">
        <div className="container">
          <h2 className="erx-section-title">How it works</h2>
          <div className="erx-diagram">
            <img src={`${imagePath}/how-it-works-diagram.png`} alt="How E-Prescription works" />
          </div>
          <div className="erx-surescripts-badge">
            <img src={`${imagePath}/footer-surescripts.png`} alt="Surescripts" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
