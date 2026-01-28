import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/sections/Hero";
import { ContactForm } from "../components/sections/ContactForm";
import { Button } from "../components/ui/Button";

export const metadata = {
  title: "Fhirbase - Database for FHIR",
  description: "Open source toolkit for storing and working with FHIR data, built on top of PostgreSQL.",
};

// Companies using Fhirbase
const usedByLogos = [
  { name: "Aidbox", logo: "/assets/images/logos/aidbox.svg" },
  { name: "Narus Health", logo: "/assets/images/logos/clients/narus-health.webp" },
];

// Key features/components
const features = [
  {
    icon: "/assets/images/icons/fhirbase/fhir-schema.svg",
    title: "FHIR Schema",
    description: "Database schema on top of PostgreSQL based on HL7 FHIR",
  },
  {
    icon: "/assets/images/icons/fhirbase/import.svg",
    title: "Import FHIR data",
    description: "Efficient import of your FHIR data with Bulk API, Synthea, Bundles, etc.",
  },
  {
    icon: "/assets/images/icons/fhirbase/crud.svg",
    title: "CRUD Operations",
    description: "Conventional API as Stored Procedures for basic CRUD operations and History",
  },
  {
    icon: "/assets/images/icons/fhirbase/connectors.svg",
    title: "Connectors",
    description: "Fhirbase connector libraries for your programming language",
  },
];

// Quickstart steps for standard install
const standardSteps = [
  { step: "1", title: "Install PostgreSQL", description: "Set up PostgreSQL 13+ on your system" },
  { step: "2", title: "Download Fhirbase", description: "Get the binary for your platform" },
  { step: "3", title: "Create Database", description: "Create a new PostgreSQL database" },
  { step: "4", title: "Initialize Schema", description: "Run fhirbase init to set up FHIR schema" },
  { step: "5", title: "Load Resources", description: "Import your FHIR data" },
  { step: "6", title: "Start Web UI", description: "Launch the web interface" },
];

// Quickstart steps for Docker
const dockerSteps = [
  { step: "1", title: "Install Docker", description: "Get Docker from docker.com" },
  { step: "2", title: "Pull Image", description: "docker pull healthsamurai/fhirbase" },
  { step: "3", title: "Run Container", description: "docker run -p 3000:3000 healthsamurai/fhirbase" },
  { step: "4", title: "Access", description: "Open localhost:3000 in your browser" },
];

// Download platforms
const downloads = [
  { platform: "Linux (64-bit)", file: "fhirbase-linux-amd64" },
  { platform: "Linux (32-bit)", file: "fhirbase-linux-386" },
  { platform: "MacOS (64-bit)", file: "fhirbase-darwin-amd64" },
  { platform: "Windows (64-bit)", file: "fhirbase-windows-amd64.exe" },
  { platform: "Windows (32-bit)", file: "fhirbase-windows-386.exe" },
  { platform: "Docker Hub", file: "docker pull healthsamurai/fhirbase", isDocker: true },
];

// Connector languages
const connectors = [
  { name: "NodeJS", icon: "/assets/images/icons/fhirbase/nodejs.svg", href: "https://github.com/fhirbase/fhirbase-node" },
  { name: "Python", icon: "/assets/images/icons/fhirbase/python.svg", href: "https://github.com/fhirbase/fhirbase-py" },
  { name: "Go", icon: "/assets/images/icons/fhirbase/go.svg", href: "https://github.com/fhirbase/fhirbase-go" },
  { name: "Java", icon: "/assets/images/icons/fhirbase/java.svg", href: "https://github.com/fhirbase/fhirbase-java" },
  { name: "C#", icon: "/assets/images/icons/fhirbase/csharp.svg", href: "https://github.com/fhirbase/fhirbase-csharp" },
  { name: "Clojure", icon: "/assets/images/icons/fhirbase/clojure.svg", href: "https://github.com/fhirbase/fhirbase-clj" },
];

// Resources
const resources = [
  {
    icon: "/assets/images/icons/fhirbase/community.svg",
    title: "Fhirbase Community",
    description: "Join our Telegram community for discussions and support",
    href: "https://t.me/fhirbase",
    cta: "Join Telegram",
  },
  {
    icon: "/assets/images/icons/fhirbase/docs.svg",
    title: "Docs & Tutorials",
    description: "Learn how to use Fhirbase with our documentation",
    href: "https://docs.fhirbase.com",
    cta: "Read Docs",
  },
  {
    icon: "/assets/images/icons/fhirbase/blog.svg",
    title: "Fhirbase Dojo Blog",
    description: "Articles, tutorials, and best practices",
    href: "/blog",
    cta: "View Blog",
  },
];

function UsedBySection(): string {
  return (
    <section className="fhirbase-used-by">
      <div className="container">
        <div className="used-by-label">Used by</div>
        <div className="used-by-logos">
          {usedByLogos.map((company) => (
            <div className="used-by-logo">
              <img src={company.logo} alt={company.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection(): string {
  return (
    <section className="fhirbase-features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickstartSection(): string {
  return (
    <section className="fhirbase-quickstart">
      <div className="container">
        <h2 className="section-title">Quickstart</h2>
        <div className="quickstart-tabs" data-signals="{quickstartTab: 'standard'}">
          <div className="quickstart-tab-buttons">
            <button
              className="quickstart-tab-btn"
              data-class="{active: $quickstartTab === 'standard'}"
              data-on-click="$quickstartTab = 'standard'"
            >
              Standard Install
            </button>
            <button
              className="quickstart-tab-btn"
              data-class="{active: $quickstartTab === 'docker'}"
              data-on-click="$quickstartTab = 'docker'"
            >
              Docker
            </button>
          </div>
          <div className="quickstart-content">
            <div className="quickstart-panel" data-show="$quickstartTab === 'standard'">
              <div className="quickstart-steps">
                {standardSteps.map((step) => (
                  <div className="quickstart-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="quickstart-panel" data-show="$quickstartTab === 'docker'" style="display: none">
              <div className="quickstart-steps quickstart-steps--docker">
                {dockerSteps.map((step) => (
                  <div className="quickstart-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p className={step.step === "2" || step.step === "3" ? "code" : ""}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadsSection(): string {
  return (
    <section className="fhirbase-downloads">
      <div className="container">
        <h2 className="section-title">Download</h2>
        <p className="section-subtitle">Get Fhirbase for your platform</p>
        <div className="downloads-grid">
          {downloads.map((dl) => (
            <a
              href={dl.isDocker ? "https://hub.docker.com/r/healthsamurai/fhirbase" : `https://github.com/fhirbase/fhirbase/releases/latest/download/${dl.file}`}
              className={`download-card${dl.isDocker ? ' download-card--docker' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="download-platform">{dl.platform}</span>
              {!dl.isDocker && <span className="download-icon">↓</span>}
              {dl.isDocker && <span className="download-icon">🐳</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AidboxPromoSection(): string {
  return (
    <section className="fhirbase-aidbox-promo">
      <div className="container">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Need a full-blown FHIR platform?</h2>
            <p>Aidbox drastically reduces time and effort to build healthcare solutions. It provides all the features of Fhirbase plus REST API, authentication, access control, and much more.</p>
            <Button href="/fhir-server" variant="primary">Learn about Aidbox</Button>
          </div>
          <div className="promo-image">
            <img src="/assets/images/logos/aidbox.svg" alt="Aidbox" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection(): string {
  return (
    <section className="fhirbase-resources">
      <div className="container">
        <h2 className="section-title">Learn and Build</h2>
        <div className="resources-grid">
          {resources.map((resource) => (
            <a href={resource.href} className="resource-card" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              <div className="resource-icon">
                <img src={resource.icon} alt={resource.title} />
              </div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-desc">{resource.description}</p>
              <span className="resource-cta">{resource.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectorsSection(): string {
  return (
    <section className="fhirbase-connectors">
      <div className="container">
        <h2 className="section-title">Fhirbase Connectors</h2>
        <p className="section-subtitle">Use Fhirbase with your favorite programming language</p>
        <div className="connectors-grid">
          {connectors.map((connector) => (
            <a href={connector.href} className="connector-card" target="_blank" rel="noopener noreferrer">
              <div className="connector-icon">
                <img src={connector.icon} alt={connector.name} />
              </div>
              <span className="connector-name">{connector.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FhirDatabasePage(): string {
  return (
    <Fragment>
      <Hero
        tag="Open Source"
        title="Database for FHIR"
        description="Open source toolkit for storing and working with FHIR data, built on top of PostgreSQL."
        primaryCta={{ label: "Get started", href: "https://github.com/fhirbase/fhirbase" }}
        secondaryCta={{ label: "Download", href: "#downloads" }}
        variant="product"
      />

      <UsedBySection />

      <FeaturesSection />

      <QuickstartSection />

      <DownloadsSection />

      <AidboxPromoSection />

      <ResourcesSection />

      <ConnectorsSection />

      <ContactForm />
    </Fragment>
  );
}
