import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Aidbox Downloads | Bring FHIR into Healthcare Solution",
  description: "Brochures, reports, certificates, and architectural diagrams to kickstart your use of the Aidbox FHIR Platform.",
};

type DownloadCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const downloadCards: DownloadCard[] = [
  {
    title: "SDC (Structured Data Capture) Guide",
    description: "Learn how SDC transforms healthcare data collection through intelligent and standardized forms.",
    image: "/assets/images/downloads/brochure-sdc-guide.png",
    href: "/downloads/sdc-guide",
  },
  {
    title: "Aidbox FHIR Platform Performance Report",
    description: "Learn how Aidbox handles data import, search, and export operations in various healthcare scenarios.",
    image: "/assets/images/downloads/brochure-performance-report.png",
    href: "/downloads/aidbox-performance-report",
  },
  {
    title: "EHR Development Toolkit Brochure",
    description: "Build Your EHRs with the Aidbox EHR Toolkit. Customizable Modules and an EHR Implementation Project Plan.",
    image: "/assets/images/downloads/brochure-ehr-toolkit.png",
    href: "/downloads/ehr-development-toolkit-brochure",
  },
  {
    title: "Aidbox for Startups Toolkit Brochure",
    description: "Discover the turnkey development toolkit to design your healthcare solution for the future.",
    image: "/assets/images/downloads/brochure-startups-toolkit.png",
    href: "/downloads/aidbox-for-startups-toolkit-brochure",
  },
  {
    title: "Healthcare Data Platform Toolkit Brochure",
    description: "Discover a unified space for your team to seamlessly aggregate, store, manage, and analyze FHIR data.",
    image: "/assets/images/downloads/brochure-data-platform.png",
    href: "/downloads/healthcare-data-platform-toolkit-brochure",
  },
  {
    title: "Aidbox + Cloudticity Solution Brief",
    description: "Accelerate FHIR adoption by up to 70% and reduce your infrastructure management responsibilities by 80%.",
    image: "/assets/images/downloads/brochure-cloudticity.png",
    href: "/downloads/aidbox-cloudticity-solution-brief",
  },
  {
    title: "Standardized HL7 FHIR API for EHRs Cheatsheet",
    description: "Ensure compliance with the 21st Century Cures Act with this essential cheatsheet.",
    image: "/assets/images/downloads/brochure-onc-cheatsheet.png",
    href: "/downloads/standardized-hl7-fhir-api-for-ehrs-cheatsheet",
  },
];

function DownloadCardComponent({ card }: { card: DownloadCard }): string {
  return (
    <div className="download-card">
      <div className="download-card-image">
        <img src={card.image} alt={card.title} />
      </div>
      <h3 className="download-card-title">{card.title}</h3>
      <p className="download-card-desc">{card.description}</p>
      <a href={card.href} className="download-btn">Download now</a>
    </div>
  );
}

export default function DownloadsPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="downloads-hero">
        <div className="container">
          <div className="downloads-hero-content">
            <h1>Download Resources for FHIR Implementation</h1>
            <p>Brochures, reports, certificates, and architectural diagrams to kickstart your use of the Aidbox FHIR Platform.</p>
            <div className="downloads-hero-actions">
              <a href="/contacts" className="download-btn">Talk to an expert</a>
              <a href="/fhir-server" className="downloads-link">
                Explore Aidbox
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brochure Section */}
      <section className="downloads-featured">
        <div className="container">
          <div className="downloads-featured-card">
            <div className="downloads-featured-image">
              <img src="/assets/images/downloads/brochure-aidbox-platform.png" alt="Aidbox FHIR Platform Brochure" />
            </div>
            <div className="downloads-featured-content">
              <h3>Aidbox FHIR Platform Brochure</h3>
              <p>
                <a href="/aidbox" className="text-link">Aidbox FHIR server</a> is a developer-friendly, adaptable platform that saves months in development time on your FHIR-first healthcare solutions.
              </p>
              <p>
                It offers a comprehensive suite of features including robust data storage, authentication, API services, and analytics.
              </p>
              <p>
                Download the brochure to learn how Aidbox can help you build interoperable apps, and effectively manage vast amounts of <a href="/articles/fhir-what-is-great" className="text-link">FHIR</a> data securely and efficiently.
              </p>
              <a href="/downloads/aidbox-brochure" className="download-btn">Download now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Grid Section */}
      <section className="downloads-grid-section">
        <div className="container">
          <div className="downloads-grid">
            {downloadCards.map((card) => (
              <DownloadCardComponent card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Healthcare Video Section */}
      <section className="downloads-ai-section">
        <div className="container">
          <div className="downloads-ai-card">
            <div className="downloads-ai-image">
              <div className="downloads-ai-badge">
                <img src="/assets/images/downloads/brochure-ai-healthcare.png" alt="Aidbox for AI in healthcare" />
              </div>
            </div>
            <div className="downloads-ai-content">
              <h3>Aidbox for AI in healthcare</h3>
              <p>Learn how SDC transforms healthcare data collection through intelligent and standardized forms.</p>
              <a href="https://www.health-samurai.io/sdc-conference" className="download-btn">Watch now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Subscribe Section - This is page-specific, not the global footer */}
      <section className="downloads-footer">
        <div className="container">
          <div className="downloads-subscribe">
            <form className="downloads-subscribe-form">
              <input
                type="email"
                placeholder="Business Email address"
                className="downloads-email-input"
                required
              />
              <button type="submit" className="downloads-subscribe-btn">Subscribe to Blog</button>
            </form>
          </div>
          <div className="downloads-footer-divider"></div>
          <div className="downloads-footer-links">
            <div className="downloads-footer-col">
              <h4>RESOURCES</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="https://docs.aidbox.app">Documentation</a></li>
                <li><a href="/news">Release Notes</a></li>
                <li><a href="/services">Aidbox for developers</a></li>
                <li><a href="/fhir-api">Aidbox for EHR vendors</a></li>
                <li><a href="/payers">Aidbox for Health Plans</a></li>
                <li><a href="/telemedicine">Aidbox for Telemedicine</a></li>
              </ul>
            </div>
            <div className="downloads-footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/contacts">About Us</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/fhir-meetups">FHIR Meetups</a></li>
              </ul>
            </div>
          </div>
          <div className="downloads-footer-bottom">
            <img src="/assets/images/downloads/health-samurai-footer-logo.webp" alt="Health Samurai" className="downloads-footer-logo" />
            <div className="downloads-footer-legal">
              <a href="/legal/privacy-policy">Privacy Policy</a>
              <a href="/legal/cookie-policy">Cookie Policy</a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
