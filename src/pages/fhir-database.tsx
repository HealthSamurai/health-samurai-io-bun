import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Fhirbase - FHIR Database",
  description: "Fhirbase is an open source toolkit for storing and working with FHIR data, built on top of PostgreSQL.",
};

const IMG_BASE = "/assets/images/fhir-database";

const subNavLinks = [
  { label: "OVERVIEW", href: "#fhirbase-overview-section" },
  { label: "DOCS", href: "https://fhirbase.aidbox.app/" },
  { label: "COMMUNITY", href: "https://t.me/aidbox" },
  { label: "DEMO", href: "https://fbdemo.aidbox.app/" },
  { label: "DOWNLOAD", href: "/fhirbase-downloads" },
];

const usedByLogos = [
  { name: "Aidbox", src: `${IMG_BASE}/logo-aidbox.svg` },
  { name: "Narus Health", src: `${IMG_BASE}/logo-narus.png` },
  { name: "NantHealth", src: `${IMG_BASE}/logo-nanthealth.png` },
  { name: "Netrika", src: `${IMG_BASE}/logo-netrika.png` },
  { name: "Miaz", src: `${IMG_BASE}/logo-miaz.png` },
];

const featureCards = [
  {
    icon: `${IMG_BASE}/icon-schema.png`,
    title: "FHIR Schema",
    description: "Database schema on top of PostgreSQL based on HL7 FHIR.",
  },
  {
    icon: `${IMG_BASE}/icon-import.png`,
    title: "Import FHIR data",
    description: "Efficient import of your FHIR data with Bulk API, Synthea, Bundles, etc.",
  },
  {
    icon: `${IMG_BASE}/icon-procedures.png`,
    title: "CRUD Operations",
    description: "Conventional API as Stored Procedures for basic CRUD operations and History.",
  },
  {
    icon: `${IMG_BASE}/icon-connectors.png`,
    title: "Connectors",
    description: "Fhirbase connector libraries for your programming language.",
  },
];

const standardSteps = [
  {
    num: 1,
    title: "Install",
    titleBold: "PostgreSQL",
    content: `<a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer">Official Installation Guide for PostgreSQL</a>`,
    isLink: true,
  },
  {
    num: 2,
    title: "Download",
    titleBold: "Fhirbase",
    content: `<a href="/fhirbase-downloads">Download page for Fhirbase</a>`,
    isLink: true,
  },
  {
    num: 3,
    title: "Create",
    titleBold: "Database",
    content: "$ psql -c 'CREATE DATABASE fhirbase;'",
    isCode: true,
  },
  {
    num: 4,
    title: "Initialize",
    titleBold: "FHIR-schema",
    content: "$ fhirbase -d fhirbase --fhir=3.3.0 init",
    isCode: true,
  },
  {
    num: 5,
    title: "Load",
    titleBold: "FHIR resources",
    content: "$ fhirbase -d fhirbase --fhir=3.3.0 load http://bulk-api-server.com/fhir/Patient/$export",
    isCode: true,
  },
  {
    num: 6,
    title: "Start",
    titleBold: "Fhirbase Web UI",
    content: "$ fhirbase -d fhirbase web",
    isCode: true,
  },
];

const dockerSteps = [
  {
    num: 1,
    title: "Install",
    titleBold: "Docker",
    content: `<a href="https://docs.docker.com/install/" target="_blank" rel="noopener noreferrer">Please follow Official Docker installation guide</a>`,
    isLink: true,
  },
  {
    num: 2,
    title: "Download",
    titleBold: "Image",
    content: "$ docker pull fhirbase/fhirbase:latest",
    isCode: true,
  },
  {
    num: 3,
    title: "Docker",
    titleBold: "Run",
    content: "$ docker run --rm -p 3000:3000 fhirbase/fhirbase:latest",
    isCode: true,
  },
  {
    num: 4,
    title: "Open",
    titleBold: "localhost:3000",
    content: "Web server was started on port 3000, point your browser to the http://localhost:3000",
    isText: true,
  },
];

const downloadCards = [
  {
    os: "Linux",
    icon: `${IMG_BASE}/icon-linux.svg`,
    links: [
      { label: "32-bit", href: "https://github.com/fhirbase/fhirbase/releases/download/v0.0.6/fhirbase-linux-386" },
      { label: "64-bit", href: "https://github.com/fhirbase/fhirbase/releases/download/v0.0.6/fhirbase-linux-amd64" },
    ],
  },
  {
    os: "MacOS",
    icon: `${IMG_BASE}/icon-apple.svg`,
    links: [
      { label: "64-bit", href: "https://github.com/fhirbase/fhirbase/releases/download/v0.0.6/fhirbase-darwin-amd64" },
    ],
  },
  {
    os: "Windows",
    icon: `${IMG_BASE}/icon-windows.svg`,
    links: [
      { label: "32-bit", href: "https://github.com/fhirbase/fhirbase/releases/download/v0.0.6/fhirbase-windows-386.exe" },
      { label: "64-bit", href: "https://github.com/fhirbase/fhirbase/releases/download/v0.0.6/fhirbase-windows-amd64.exe" },
    ],
  },
  {
    os: "Docker",
    icon: `${IMG_BASE}/icon-docker.svg`,
    isDocker: true,
    dockerHubLink: "https://hub.docker.com/r/fhirbase/fhirbase/",
    dockerCommand: "docker pull fhirbase/fhirbase:latest",
  },
];

const learnCards = [
  {
    image: `${IMG_BASE}/img-community.png`,
    title: "Fhirbase Community",
    description: "Join the Fhirbase community and ask questions to developers, give your feedback and suggest improvements.",
    href: "https://t.me/aidbox",
  },
  {
    image: `${IMG_BASE}/img-docs.png`,
    title: "Docs & Tutorials",
    description: "Full documentation for understanding how to get the most out of Fhirbase and other resources on handling FHIR data.",
    href: "https://fhirbase.aidbox.app/",
  },
  {
    title: "The FHIRbase Dojo (Blog)",
    description: "The place to learn about how to use FHIR for healthcare data storage and analytics.",
    href: "https://medium.com/fhirbase-dojo",
  },
];

const connectors = [
  { icon: `${IMG_BASE}/icon-nodejs.png`, name: "NodeJS", href: "https://fhirbase.aidbox.app/integrations" },
  { icon: `${IMG_BASE}/icon-python.jpg`, name: "Python", href: "https://fhirbase.aidbox.app/integrations" },
  { icon: `${IMG_BASE}/icon-golang.png`, name: "Go", href: "https://fhirbase.aidbox.app/integrations" },
  { icon: `${IMG_BASE}/icon-java.jpg`, name: "Java", href: "https://fhirbase.aidbox.app/integrations" },
  { icon: `${IMG_BASE}/icon-csharp.png`, name: "C#", href: "https://fhirbase.aidbox.app/integrations" },
  { icon: `${IMG_BASE}/icon-clojure.jpg`, name: "Clojure", href: "https://fhirbase.aidbox.app/integrations" },
];

function ProductSubNav(): string {
  return (
    <div className="fhirbase-subnav">
      <div className="container">
        <div className="fhirbase-subnav-content">
          <a href="/fhir-database" className="fhirbase-logo-link">
            <img src={`${IMG_BASE}/logo-fhirbase.svg`} alt="Fhirbase" className="fhirbase-logo" />
          </a>
          <nav className="fhirbase-nav">
            {subNavLinks.map((link) => (
              <a href={link.href} className="fhirbase-nav-link">{link.label}</a>
            ))}
            <a href="http://github.com/fhirbase/fhirbase" className="fhirbase-nav-link fhirbase-nav-github" target="_blank" rel="noopener noreferrer">
              GITHUB
              <img src={`${IMG_BASE}/icon-github.png`} alt="GitHub" className="github-icon" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

function HeroSection(): string {
  return (
    <section className="fhirbase-hero">
      <div className="container">
        <div className="fhirbase-hero-content">
          <div className="fhirbase-hero-text">
            <span className="fhirbase-tag">// Open Source</span>
            <h1>Database for FHIR<sup>®</sup></h1>
            <p className="fhirbase-hero-desc">
              Fhirbase is an open source toolkit for storing and working with FHIR data, built on top of PostgreSQL.
            </p>
            <div className="fhirbase-hero-buttons">
              <a href="https://fhirbase.aidbox.app/getting-started" className="btn btn-primary">GET STARTED</a>
              <a href="/fhirbase-downloads" className="btn btn-secondary">DOWNLOAD</a>
            </div>
          </div>
          <div className="fhirbase-hero-used-by">
            <h4 className="used-by-title">USED BY</h4>
            <div className="used-by-logos">
              {usedByLogos.map((logo) => (
                <div className="used-by-logo">
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection(): string {
  return (
    <section className="fhirbase-overview" id="fhirbase-overview-section">
      <div className="container">
        <h2 className="fhirbase-section-title">Overview</h2>
        <p className="fhirbase-section-desc">
          Fhirbase is an open source toolkit for storing and working with FHIR data.
        </p>
        <div className="fhirbase-overview-diagram">
          <img src={`${IMG_BASE}/overview-structure.jpg`} alt="Fhirbase Structure" />
        </div>
        <div className="fhirbase-features-grid">
          {featureCards.map((card) => (
            <div className="fhirbase-feature-card">
              <div className="fhirbase-feature-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className="fhirbase-feature-title">{card.title}</h3>
              <p className="fhirbase-feature-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type QuickstartStepType = {
  num: number;
  title: string;
  titleBold: string;
  content: string;
  isLink?: boolean;
  isCode?: boolean;
  isText?: boolean;
};

function QuickstartStep({ step }: { step: QuickstartStepType }): string {
  return (
    <div className="quickstart-step">
      <div className="quickstart-step-number">{step.num}</div>
      <div className="quickstart-step-content">
        <h4>
          <strong>{step.title}</strong> {step.titleBold}
        </h4>
        {step.isCode ? (
          <div className="quickstart-code">{step.content}</div>
        ) : step.isLink ? (
          <div className="quickstart-link" dangerouslySetInnerHTML={{ __html: step.content }} />
        ) : (
          <p>{step.content}</p>
        )}
      </div>
    </div>
  );
}

function QuickstartSection(): string {
  return (
    <section className="fhirbase-quickstart-section">
      <div className="container">
        <h2 className="fhirbase-section-title">Quickstart</h2>
        <p className="fhirbase-section-desc">
          Fhirbase is an open source toolkit released under the{" "}
          <a href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noopener noreferrer">MIT License</a>.
        </p>

        <div className="quickstart-content">
          <div className="quickstart-steps">
            {standardSteps.map((step) => (
              <QuickstartStep step={step} />
            ))}
          </div>
        </div>

        <h3 className="fhirbase-docker-title">Fhirbase in Docker</h3>
        <p className="fhirbase-docker-desc">
          Please proceed to{" "}
          <a href="https://fhirbase.aidbox.app/getting-started" target="_blank" rel="noopener noreferrer">Getting Started tutorial</a>{" "}
          for more info.
        </p>

        <div className="quickstart-content quickstart-docker">
          <div className="quickstart-steps quickstart-steps-docker">
            {dockerSteps.map((step) => (
              <QuickstartStep step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadSection(): string {
  return (
    <section className="fhirbase-download-section">
      <div className="container">
        <h2 className="fhirbase-section-title">Download Fhirbase</h2>

        <div className="download-grid">
          {downloadCards.map((card) => (
            <div className={`download-card ${card.isDocker ? 'download-card-docker' : ''}`}>
              <div className="download-card-header">
                <img src={card.icon} alt={card.os} className="download-os-icon" />
                <span className="download-os-name">{card.os}</span>
              </div>
              <div className="download-card-links">
                {card.isDocker ? (
                  <Fragment>
                    <a href={card.dockerHubLink} className="download-link" target="_blank" rel="noopener noreferrer">Docker Hub</a>
                    <span className="download-or">or</span>
                    <code className="download-docker-cmd">{card.dockerCommand}</code>
                  </Fragment>
                ) : (
                  card.links?.map((link) => (
                    <a href={link.href} className="download-link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AidboxPromoSection(): string {
  return (
    <section className="fhirbase-aidbox-promo-section">
      <div className="container">
        <div className="aidbox-promo-content">
          <div className="aidbox-promo-text">
            <span className="aidbox-promo-tag">{">_"} Hello, Aidbox</span>
            <h2>FHIR Platform</h2>
            <p>
              Full-blown platform that drastically reduces time and effort for your Health IT solution development.
            </p>
            <a href="https://www.health-samurai.io/aidbox" className="btn btn-primary">LEARN MORE</a>
          </div>
          <div className="aidbox-promo-logo">
            <img src={`${IMG_BASE}/logo-aidbox-cta.svg`} alt="Aidbox" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscribeSection(): string {
  return (
    <section className="fhirbase-subscribe-section">
      <div className="container">
        <div className="subscribe-card">
          <div className="subscribe-text">
            <h3>Never miss a thing</h3>
            <p>Subscribe for more content!</p>
          </div>
          <form className="subscribe-form" action="/api/subscribe" method="POST">
            <div className="subscribe-field">
              <label htmlFor="subscribe-name">Name</label>
              <input type="text" id="subscribe-name" name="name" />
            </div>
            <div className="subscribe-field">
              <label htmlFor="subscribe-email">Email</label>
              <input type="email" id="subscribe-email" name="email" required />
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhatIsFhirbaseSection(): string {
  return (
    <section className="fhirbase-what-is">
      <div className="container">
        <div className="what-is-content">
          <p className="what-is-intro">
            <strong>What is Fhirbase and why you might want to use it.</strong>
          </p>
          <p>
            Data is the heart of any healthcare system, and thus should it be properly modelled and managed reliably. Open source{" "}
            <a href="https://hl7.org/fhir/" target="_blank" rel="noopener noreferrer">FHIR</a> standard provides you an robust data model covering most important healthcare domains.{" "}
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> is a battle-proven open source relational database which supports storing of JSON documents while preserving{" "}
            <a href="https://en.wikipedia.org/wiki/ACID" target="_blank" rel="noopener noreferrer">ACID guarantees</a> and the richness of the SQL language. Combination of these two technologies is a perfect foundation to build your system on.
          </p>
          <p>
            Fhirbase is a collection of tools built around PostgreSQL. It includes a command-line application and a PostgreSQL extension. Fhirbase will help you to get started quickly with FHIR storage, prepare and load sample data, and perform basic operations.
          </p>

          <p className="history-title">
            <strong>History of Fhirbase</strong>
          </p>
          <p>
            We started working on Fhirbase in 2014, when Health Samurai was founded. At first we developed it in pure{" "}
            <a href="https://en.wikipedia.org/wiki/PL/pgSQL" target="_blank" rel="noopener noreferrer">PL/PgSQL language</a>, then{" "}
            <a href="https://github.com/fhirbase/fhirbase-plv8" target="_blank" rel="noopener noreferrer">rewrote it in JavaScript</a> for the sake of code-reuse.
          </p>
          <p>
            We used Fhirbase in several real-world projects and learned a lot from this experience. It became obvious that Fhirbase should provide three distinct things:
          </p>
          <ul className="fhirbase-list">
            <li>-Database Schema & utils to store and query FHIR information in PostgreSQL</li>
            <li>-FHIR metadata storage and manipulation</li>
            <li>-FHIR operations implementation</li>
          </ul>
          <p>
            -Current version of Fhirbase is focused on the first one, with an emphasis on good performance and simplicity.
          </p>
        </div>
      </div>
    </section>
  );
}

function LearnAndBuildSection(): string {
  return (
    <section className="fhirbase-learn-section">
      <div className="container">
        <p className="learn-intro">Find all the resources and answers you need to start developing modern healthcare apps.</p>
        <h2 className="fhirbase-section-title">Learn and Build</h2>

        <div className="learn-cards">
          <a href={learnCards[0]!.href} className="learn-card learn-card-large" target="_blank" rel="noopener noreferrer">
            <div className="learn-card-image">
              <img src={learnCards[0]!.image} alt={learnCards[0]!.title} />
            </div>
            <h3>{learnCards[0]!.title}</h3>
            <p>{learnCards[0]!.description}</p>
          </a>
          <div className="learn-cards-right">
            <a href={learnCards[1]!.href} className="learn-card" target="_blank" rel="noopener noreferrer">
              <div className="learn-card-image">
                <img src={learnCards[1]!.image} alt={learnCards[1]!.title} />
              </div>
              <h3>{learnCards[1]!.title}</h3>
              <p>{learnCards[1]!.description}</p>
            </a>
            <a href={learnCards[2]!.href} className="learn-card learn-card-no-image" target="_blank" rel="noopener noreferrer">
              <h3>{learnCards[2]!.title}</h3>
              <p>{learnCards[2]!.description}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectorsSection(): string {
  return (
    <section className="fhirbase-connectors-section">
      <div className="container">
        <h2 className="fhirbase-section-title">Fhirbase Connectors</h2>
        <p className="fhirbase-section-desc">
          You can integrate Fhirbase with your preferred technology. Don't see your technology?{" "}
          <a href="mailto:hello@health-samurai.io" className="request-link">Send us a request</a>!
        </p>

        <div className="connectors-grid">
          {connectors.map((connector) => (
            <a href={connector.href} className="connector-item" target="_blank" rel="noopener noreferrer">
              <img src={connector.icon} alt={connector.name} className="connector-icon" />
              <span className="connector-name">{connector.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection(): string {
  return (
    <section className="fhirbase-final-cta">
      <div className="container">
        <div className="final-cta-content">
          <img src={`${IMG_BASE}/logo-fhirbase.svg`} alt="Fhirbase" className="final-cta-logo" />
          <p>Try FHIRbase now! The easiest way to start is to use a docker image.</p>
          <div className="final-cta-buttons">
            <a href="/fhirbase-downloads" className="btn btn-secondary">DOWNLOAD</a>
            <a href="https://fhirbase.aidbox.app/getting-started" className="btn btn-primary">GET STARTED</a>
            <a href="https://fbdemo.aidbox.app/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">TRY ONLINE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FhirbaseFooter(): string {
  const productsLinks = [
    { label: "FHIR Server", href: "/fhir-server" },
    { label: "Fhirbase", href: "/fhir-database", active: true },
    { label: "For Developers", href: "/services" },
    { label: "For Health Plans", href: "/payers" },
    { label: "Case Studies", href: "/casestudies" },
    { label: "Open Source", href: "/opensource" },
    { label: "FHIR Meetups", href: "/fhir-meetups" },
  ];

  const companyLinks = [
    { label: "Health Samurai", href: "/" },
    { label: "About Us", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contacts" },
  ];

  return (
    <footer className="fhirbase-footer">
      <div className="container">
        <div className="fhirbase-footer-content">
          <div className="fhirbase-footer-col">
            {productsLinks.map((link) => (
              <a href={link.href} className={`fhirbase-footer-link ${link.active ? 'active' : ''}`}>{link.label}</a>
            ))}
          </div>
          <div className="fhirbase-footer-col">
            {companyLinks.map((link) => (
              <a href={link.href} className="fhirbase-footer-link">{link.label}</a>
            ))}
          </div>
          <div className="fhirbase-footer-col fhirbase-footer-contact">
            <strong>Health Samurai</strong>
            <span>1891 N Gaffey St Ste O,</span>
            <span>San Pedro, CA 90731</span>
            <a href="tel:+18187311279" className="fhirbase-footer-link">+1 (818) 731-1279</a>
            <a href="mailto:hello@health-samurai.io" className="fhirbase-footer-link">hello@health-samurai.io</a>
          </div>
        </div>
        <div className="fhirbase-footer-logo">
          <img src={`${IMG_BASE}/logo-footer.svg`} alt="Health Samurai" />
        </div>
      </div>
    </footer>
  );
}

export default function FhirDatabasePage(): string {
  return (
    <Fragment>
      <ProductSubNav />
      <HeroSection />
      <OverviewSection />
      <QuickstartSection />
      <DownloadSection />
      <AidboxPromoSection />
      <SubscribeSection />
      <WhatIsFhirbaseSection />
      <LearnAndBuildSection />
      <ConnectorsSection />
      <FinalCtaSection />
      <FhirbaseFooter />
    </Fragment>
  );
}
