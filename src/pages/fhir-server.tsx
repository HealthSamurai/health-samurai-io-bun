import { Hero } from "../components/sections/Hero";
import { ContactForm } from "../components/sections/ContactForm";
import { Pricing, aidboxPricingTiers, aidboxSupportPlans, aidboxSupportCta } from "../components/sections/Pricing";
import { Button } from "../components/ui/Button";
import { Tabs } from "../components/ui/Tabs";
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "FHIR Server",
  description: "Aidbox FHIR Server - Build healthcare solutions with FHIR, PostgreSQL, and our SDK",
};

type Feature = {
  icon: string;
  title: string;
  tags: string[];
  description: string;
  href: string;
};

const features: Feature[] = [
  {
    icon: "/assets/images/icons/database.svg",
    title: "FHIR Database",
    tags: ["PostgreSQL", "JSONB", "Indexes", "Custom resources", "SQL on FHIR"],
    description: "Manage FHIR data with the power of PostgreSQL — fully under your control. Aidbox stores resources transparently as JSONB, enabling you to query, join, and aggregate by any element, with full support for transactional operations, reporting, and seamless migrations.",
    href: "https://docs.aidbox.app/database",
  },
  {
    icon: "/assets/images/icons/api.svg",
    title: "API",
    tags: ["FHIR", "SQL", "GraphQL"],
    description: "Multiple APIs — FHIR, SQL, GraphQL, Bulk, and Subscription — to work efficiently with FHIR data for maximum flexibility and performance.",
    href: "https://docs.aidbox.app/api",
  },
  {
    icon: "/assets/images/icons/artifact-registry.svg",
    title: "Artifact Registry",
    tags: ["IGs", "Profiles", "Search params"],
    description: "Multiple FHIR versions: STU3, R4, R5, and R6. 500+ ready-to-use IGs: IPS, national (US, DE, CA, etc.), domain (mCode, Da Vinci, etc.), custom IGs.",
    href: "https://docs.aidbox.app/profiling",
  },
  {
    icon: "/assets/images/icons/auth.svg",
    title: "Access Control",
    tags: ["OAuth 2.0", "SMART", "RBAC/ABAC"],
    description: "Enterprise-grade security with OAuth 2.0, multitenancy, flexible user management, granular access policies, and complete audit trails.",
    href: "https://docs.aidbox.app/security",
  },
  {
    icon: "/assets/images/icons/terminology.svg",
    title: "Terminology",
    tags: ["CodeSystems", "ValueSets"],
    description: "Validate codes and perform fast lookups in ICD-10, SNOMED, LOINC. Use custom code systems and value sets.",
    href: "https://docs.aidbox.app/terminology",
  },
  {
    icon: "/assets/images/icons/sdk.svg",
    title: "Developer Experience",
    tags: ["Python", "C#", "JS", "Codegen"],
    description: "TypeScript, C#, and Python SDKs for easy Aidbox integration and rapid app development. SDK generator for custom toolkits tailored to your stack.",
    href: "https://docs.aidbox.app/sdk",
  },
  {
    icon: "/assets/images/icons/ui.svg",
    title: "UI",
    tags: ["FHIR Viewer", "Search params"],
    description: "Intuitive UI to work with FHIR data, manage users, clients, access policies, and configure system settings.",
    href: "https://docs.aidbox.app/ui",
  },
];

const useCaseTabs = [
  { id: "cdr", label: "CDRs & Data Platforms" },
  { id: "cds", label: "CDS Modules" },
  { id: "portal", label: "Portals & PHRs" },
  { id: "ehr", label: "EHR" },
];

const useCaseData: Record<string, { image: string; imageAlt: string; stories: Array<{ company: string; type?: string; logo?: string; description: string }> }> = {
  cdr: {
    image: "/assets/images/icons/cdr-diagram.svg",
    imageAlt: "FHIR Server for CDR",
    stories: [
      {
        company: "Innovaccer",
        type: "Healthcare Data Platform",
        logo: "/assets/images/logos/clients/innovaccer.svg",
        description: "Innovaccer embeds Health Samurai's Aidbox FHIR engine into its Best-in-KLAS data platform, harmonizing EHR data from 1,800+ hospitals to boost interoperability and coordinated care.",
      },
      {
        company: "Sonic Healthcare USA",
        type: "Laboratories",
        logo: "/assets/images/case-studies/sonic-healthcare.svg",
        description: "Sonic Healthcare USA partners with Health Samurai to deploy Aidbox FHIR as a centralized Master Patient Index, ensuring precise identity matching, seamless data sharing, and a future-proof infrastructure across its nationwide lab network.",
      },
    ],
  },
  cds: {
    image: "/assets/images/icons/cds-diagram.svg",
    imageAlt: "FHIR Server for CDS",
    stories: [
      {
        company: "Prenosis",
        type: "AI Diagnostic",
        logo: "/assets/images/logos/clients/prenosis.png",
        description: "Aidbox FHIR backend powers Immunix™, the first FDA-cleared AI/ML tool for sepsis prediction, enabling real-time data processing, and seamless integration with Epic EHR.",
      },
      {
        company: "Keebler",
        description: "Aidbox powers Keebler Health's AI-native risk management automation, enabling real-time FHIR data processing, seamless EMR integration, and accurate detection of undocumented conditions for value-based care.",
      },
    ],
  },
  portal: {
    image: "/assets/images/icons/phr-diagram.svg",
    imageAlt: "FHIR Server for PHR and Portals",
    stories: [
      {
        company: "Patients Know Best",
        logo: "/assets/images/logos/clients/patients-know-best.webp",
        description: "Patients Know Best adopts Aidbox FHIR and Form Builder, enhancing its 17 million-record PHR platform and UK interoperability.",
      },
    ],
  },
  ehr: {
    image: "/assets/images/icons/ehr-diagram.svg",
    imageAlt: "FHIR Server for EHR",
    stories: [
      {
        company: "Firenote",
        logo: "/assets/images/logos/clients/firenote.png",
        description: "Firenote builds its hospice EMR on Aidbox FHIR, launching twice as fast with a two-engineer team and now powering clinical charting, care plans, e-Rx, scheduling, and billing for 100+ clients.",
      },
      {
        company: "BestNotes",
        logo: "/assets/images/logos/clients/bestnotes.webp",
        description: "Aidbox's multi-tenant FHIR engine powers BestNotes' behavioral-health EHR, modernizing it into a cloud-native SaaS with custom templates, full regulatory compliance, and automated workflows.",
      },
    ],
  },
};

const sampleProjects = [
  {
    icon: "/assets/images/icons/database.svg",
    title: "Integration Pipeline",
    description: "Python framework for integrating Aidbox with external systems.",
    tag: "CDRs & Data Platforms",
    github: "https://github.com/Aidbox/integration-pipeline/tree/main",
  },
  {
    icon: "/assets/images/icons/api.svg",
    title: "FHIR Analytics",
    description: "FHIR data analytics in Aidbox using SQL-on-FHIR.",
    tag: "Data Analytics",
    github: "https://github.com/Aidbox/examples/tree/main/aidbox-integrations/fhir-analytics",
  },
  {
    icon: "/assets/images/icons/ui.svg",
    title: "Open-source EMR",
    description: "FHIR-based EMR demo app built with Aidbox.",
    tag: "EMR & Clinical Apps",
    github: "https://github.com/Aidbox/examples/tree/main/aidbox-integrations/BedaEmr",
  },
];

type Addon = {
  title: string;
  description: string;
  href: string | null;
  image?: string;
};

const addons: Addon[] = [
  {
    title: "Aidbox Forms",
    description: "Design, customize, and deploy no-code clinical forms with FHIR support and mobile-friendly UI.",
    href: "/medical-form",
    image: "/assets/images/addons/forms-screenshot.png",
  },
  {
    title: "Aidbox MPI",
    description: "Intelligent patient identity management ensures data integrity and a unified view across care systems.",
    href: "https://docs.aidbox.app/modules/mpi",
  },
  {
    title: "Aidbox eRx",
    description: "Enable fast, standards-based e-prescribing with Surescripts, RxNorm, and FHIR-NCPDP support.",
    href: "/e-prescription-module",
  },
  {
    title: "Aidbox Billing",
    description: "Streamline healthcare billing with rules engine, claims tools, and X12 EDI messaging support.",
    href: null,
  },
  {
    title: "Termbox",
    description: "Access curated, up-to-date FHIR terminologies via our ready-to-use, production-grade SaaS server.",
    href: "https://docs.aidbox.app/terminology",
  },
];

const testimonials = [
  {
    quote: "4medica is committed to delivering the most advanced solutions to our clients. Aidbox's performance, scalability, and powerful analytics, combined with Health Samurai's outstanding support, are enabling us to do just that.",
    name: "Gregg Church",
    title: "President",
    company: "4medica",
    logo: "/assets/images/logos/clients/4medica.png",
  },
  {
    quote: "By integrating Aidbox, Health Samurai's FHIR-based solution, Patients Know Best makes it easier for developers to build apps on the PKB platform. More patients will have more data more quickly, and clinicians will deliver better care more safely.",
    name: "Mate Varga",
    title: "CTO",
    company: "Patients Know Best",
    logo: "/assets/images/logos/clients/patients-know-best.webp",
  },
  {
    quote: "After two decades in healthcare technology and nearly a decade of working with FHIR, I've used and evaluated numerous FHIR servers. Aidbox stands out as a best-of-breed solution, offering a combination of cost-effectiveness, robust features, and exceptional support.",
    name: "Brian Bray",
    title: "VP Technology",
    company: "Prenosis",
    logo: "/assets/images/logos/clients/prenosis.webp",
  },
];

function FeatureCard({ feature, isWide }: { feature: Feature; isWide: boolean }): string {
  return (
    <a href={feature.href} className={`aidbox-feature-card${isWide ? ' aidbox-feature-card--wide' : ''}`}>
      <div className="aidbox-feature-header">
        <img src={feature.icon} alt={feature.title} className="aidbox-feature-icon" />
        <span className="aidbox-feature-title">{feature.title}</span>
      </div>
      <div className="aidbox-feature-body">
        <div className="aidbox-feature-tags">
          {feature.tags.map((tag) => (
            <span className="aidbox-tag">{tag}</span>
          ))}
        </div>
        <p className="aidbox-feature-desc">{feature.description}</p>
      </div>
    </a>
  );
}

function SampleProjectCard({ project }: { project: typeof sampleProjects[0] }): string {
  return (
    <div className="sample-project-card">
      <div className="sample-project-icon">
        <img src={project.icon} alt={project.title} />
      </div>
      <h4 className="sample-project-title">{project.title}</h4>
      <p className="sample-project-desc">{project.description}</p>
      <div className="sample-project-footer">
        <span className="sample-project-tag">{project.tag}</span>
        <a href={project.github} className="sample-project-link" target="_blank" rel="noopener noreferrer">Github →</a>
      </div>
    </div>
  );
}

function AddonCard({ addon, featured }: { addon: Addon; featured?: boolean }): string {
  return (
    <div className={`addon-card${featured ? ' addon-card--featured' : ''}`}>
      <h4 className="addon-title">{addon.title}</h4>
      {featured && addon.image && (
        <div className="addon-image">
          <img src={addon.image} alt={addon.title} />
        </div>
      )}
      <p className="addon-desc">{addon.description}</p>
      {addon.href && <a href={addon.href} className="addon-link">More →</a>}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }): string {
  return (
    <div
      className="testimonial-card"
      data-show={`$testimonialIndex === ${index}`}
    >
      <div className="testimonial-logo">
        <img src={testimonial.logo} alt={testimonial.company} />
      </div>
      <div className="testimonial-quote">
        <p>{testimonial.quote}</p>
      </div>
      <div className="testimonial-author">
        <p className="testimonial-name">{testimonial.name}</p>
        <p className="testimonial-title">{testimonial.title} at {testimonial.company}</p>
      </div>
    </div>
  );
}

function UseCasePanelContent({ data }: { data: typeof useCaseData[string] }): string {
  return (
    <div className="use-case-panel-content">
      <div className="use-case-image">
        <img src={data.image} alt={data.imageAlt} />
      </div>
      <div className="use-case-stories">
        {data.stories.map((story) => (
          <div className="use-case-story">
            <div className="story-header">
              <div className="story-info">
                <span className="story-company">{story.company}</span>
                {story.type && <span className="story-type">{story.type}</span>}
              </div>
              {story.logo && (
                <img src={story.logo} alt={story.company} className="story-logo" />
              )}
            </div>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FhirServerPage(): string {
  return (
    <Fragment>
      <Hero
        tag="What is Aidbox?"
        title="FHIR server and database"
        description="Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK. Free for development. Scale to terabytes with a flat monthly fee of $1,900"
        primaryCta={{ label: "Try for free", href: "https://aidbox.app/ui/portal#/signup" }}
        secondaryCta={{ label: "Read Docs", href: "https://docs.aidbox.app" }}
        video="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F6825c9b1aa9dc8fada2e3a28_v2%20creator%20720p60%20placebo%2019-transcode.mp4"
        variant="product"
      />

      {/* Client Logos Bar */}
      <section className="client-logos-bar">
        <div className="container">
          <div className="client-logos">
            <img src="/assets/images/logos/clients/client-1.png" alt="Sandata" />
            <img src="/assets/images/logos/clients/firenote.png" alt="Firenote" />
            <img src="/assets/images/logos/clients/deep6-ai.png" alt="Deep6 AI" />
            <img src="/assets/images/logos/clients/solutio.webp" alt="Solutio" />
            <img src="/assets/images/logos/clients/client-6.png" alt="BodyLogicMD" />
            <img src="/assets/images/logos/clients/novellia.png" alt="Novellia" />
            <img src="/assets/images/logos/clients/healthie.webp" alt="Healthie" />
            <img src="/assets/images/logos/clients/lucet.webp" alt="Lucet" />
          </div>
        </div>
      </section>

      {/* What is Aidbox Section */}
      <section className="aidbox-features-section">
        <div className="container">
          <div className="aidbox-features-header">
            <span className="section-label">What is Aidbox</span>
          </div>
          <div className="aidbox-features-grid">
            {features.map((f, i) => (
              <FeatureCard feature={f} isWide={i === 0} />
            ))}
          </div>
          <div className="aidbox-features-footer">
            <a href="https://docs.aidbox.app/features" className="technical-features-link">technical features →</a>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs Section */}
      <section className="use-cases-section" id="use-cases">
        <div className="container">
          <div className="section-label">See how Aidbox powers the system you want to build</div>
          <Tabs
            className="use-cases-tabs-wrapper"
            tabs={useCaseTabs.map((uc) => ({
              id: uc.id,
              label: uc.label,
              content: UseCasePanelContent({ data: useCaseData[uc.id]! }),
            }))}
          />
        </div>
      </section>

      {/* Sample Projects Section */}
      <section className="sample-projects-section">
        <div className="container">
          <div className="section-label">Get hands-on with sample projects built on Aidbox</div>
          <div className="sample-projects-grid">
            {sampleProjects.map((project) => (
              <SampleProjectCard project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="deploy-section">
        <div className="container">
          <div className="deploy-header">
            <h2>Deploy Aidbox your way</h2>
            <p>Run server in the cloud, on-premise, or let us handle it for you.</p>
          </div>
          <div className="deploy-content">
            <div className="deploy-options">
              <div className="deploy-option">
                <img src="/assets/images/icons/cloud-lock.svg" alt="Managed Cloud" className="deploy-option-icon" />
                <h4>Managed Cloud</h4>
                <p>We host and maintain everything for you</p>
              </div>
              <div className="deploy-option">
                <img src="/assets/images/icons/cloud-platform.svg" alt="Cloud Platform" className="deploy-option-icon" />
                <h4>Cloud Platform</h4>
                <p>Deploy on AWS, Azure, GCP, or Alibaba</p>
              </div>
              <div className="deploy-option">
                <img src="/assets/images/icons/server-box.svg" alt="On-Premise" className="deploy-option-icon" />
                <h4>On-Premise</h4>
                <p>Install in your own data center with full control</p>
              </div>
            </div>
            <div className="deploy-image">
              <img src="/assets/images/hero/deploy-diagram.svg" alt="Deploy Aidbox" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing
        tiers={aidboxPricingTiers}
        supportPlans={aidboxSupportPlans}
        supportCta={aidboxSupportCta}
      />

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="container">
          <div className="addons-header">
            <h2>Aidbox add-ons</h2>
            <p>Expand your Aidbox functionality with optional modules</p>
          </div>
          <div className="addons-grid">
            <div className="addons-row addons-row--top">
              <AddonCard addon={addons[0]!} featured={true} />
              <div className="addons-stack">
                <AddonCard addon={addons[1]!} />
                <AddonCard addon={addons[2]!} />
              </div>
            </div>
            <div className="addons-row addons-row--bottom">
              <AddonCard addon={addons[3]!} />
              <AddonCard addon={addons[4]!} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-label">What our customers say about us</div>
          <div className="testimonials-carousel" data-signals={`{testimonialIndex: 0, testimonialCount: ${testimonials.length}}`}>
            <button
              className="testimonial-nav testimonial-nav--prev"
              data-on-click="$testimonialIndex = ($testimonialIndex - 1 + $testimonialCount) % $testimonialCount"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="testimonials-slides">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} index={index} />
              ))}
            </div>
            <button
              className="testimonial-nav testimonial-nav--next"
              data-on-click="$testimonialIndex = ($testimonialIndex + 1) % $testimonialCount"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <h2>Join the Aidbox Community</h2>
            <p>Connect with FHIR engineers, product leaders, and digital health innovators building the future of healthcare.</p>
            <div className="community-avatars">
              <img src="/assets/images/hero/community-avatars.png" alt="Aidbox Community Members" />
            </div>
            <p className="community-benefits">Ask questions, share breakthroughs, and exchange best practices. Get real-time help from the Aidbox team and fellow builders.</p>
            <Button href="https://connect.health-samurai.io/" variant="primary">Join the Community</Button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Aidbox FHIR Platform: Unified FHIR Server and Database for high-performance healthcare applications</h2>
          <div className="faq-accordion" data-signals="{faqOpen: {intro: true, different: false, performance: false, conclusion: false}}">
            <div className="faq-item">
              <button
                className="faq-trigger"
                data-on-click="$faqOpen.intro = !$faqOpen.intro"
                data-class="{'faq-trigger--active': $faqOpen.intro}"
              >
                <span>Introduction to Aidbox</span>
                <span className="faq-icon" data-class="{'faq-icon--open': $faqOpen.intro}">+</span>
              </button>
              <div className="faq-content" data-show="$faqOpen.intro">
                <p>
                  Aidbox is a <strong>FHIR-first platform</strong> combining a FHIR server and a purpose-built FHIR database under one system. Built on PostgreSQL with custom extensions, Aidbox delivers:
                </p>
                <ul>
                  <li><strong>High-throughput ingestion</strong> (up to 20,000+ resources/second)</li>
                  <li><strong>Low-latency search</strong> across millions of FHIR records</li>
                  <li><strong>Fast data export</strong> for analytics, migrations, or external system integrations</li>
                  <li><strong>Full control over indexing and data structure</strong>, letting you tailor performance optimizations and workflows to your exact needs</li>
                </ul>
                <p>
                  Unlike many solutions that abstract away the backend, Aidbox lets you <strong>access and manipulate your data directly</strong> — you can build custom business logic, implement advanced workflows, or tie into existing systems on your terms.
                </p>
                <p>
                  <strong>Health Samurai</strong> has implemented and supported <strong>dozens of high-load systems</strong> in production — spanning hospitals, labs, startups, healthcare software solution providers, and major payers — confirming the platform's performance and reliability.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-trigger"
                data-on-click="$faqOpen.different = !$faqOpen.different"
                data-class="{'faq-trigger--active': $faqOpen.different}"
              >
                <span>What makes Aidbox different</span>
                <span className="faq-icon" data-class="{'faq-icon--open': $faqOpen.different}">+</span>
              </button>
              <div className="faq-content" data-show="$faqOpen.different" style="display: none">
                <p><strong>1. FHIR-Native Database</strong></p>
                <p>Aidbox doesn't just provide a FHIR API; it includes a <strong>FHIR-optimized database</strong> built on PostgreSQL with custom extensions. By combining the API and database in one platform, Aidbox ensures <strong>low latency</strong>, <strong>fewer moving parts</strong>, and <strong>less overhead</strong> than solutions that rely on multiple external services.</p>

                <p><strong>2. High-Performance Data Processing</strong></p>
                <p>Aidbox easily handles <strong>thousands of operations per second</strong>, even when working with millions of resources. This includes fast reads and writes, so you can load patient data, run analytics, or power clinical apps without delay.</p>

                <p><strong>3. Flexible Infrastructure</strong></p>
                <p>Because Aidbox FHIR server is distributed as a <strong>lightweight Docker container</strong> that only needs PostgreSQL, you avoid the hassle of complex multi-service setups. It's deployable on-premises, in the cloud, or in hybrid environments, all while reducing maintenance and potential points of failure.</p>

                <p><strong>4. Customizable Indexing & Data Model</strong></p>
                <p>Aidbox's PostgreSQL foundation means you can define your own indexing strategies, modify search behavior, and shape the data model to match your specific project needs, rather than working around a one-size-fits-all approach.</p>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-trigger"
                data-on-click="$faqOpen.performance = !$faqOpen.performance"
                data-class="{'faq-trigger--active': $faqOpen.performance}"
              >
                <span>Performance Highlights</span>
                <span className="faq-icon" data-class="{'faq-icon--open': $faqOpen.performance}">+</span>
              </button>
              <div className="faq-content" data-show="$faqOpen.performance" style="display: none">
                <p><strong>1. High-volume data ingestion</strong></p>
                <p>We tested Aidbox with <strong>23 million</strong> and then <strong>100 million</strong> resources via the /fhir/$import endpoint.</p>
                <ul>
                  <li><strong>Single Import (23M Resources)</strong>: ~4.3 GB zipped (~17.9 GB unzipped), completed in ~65 minutes, ~6,000 resources/second</li>
                  <li><strong>Concurrent Import (100M Resources)</strong>: 4 concurrent requests, 10 parallel workers each, ~180 GB in the database post-import, <strong>~20,000+ resources/second</strong> peak throughput</li>
                </ul>

                <p><strong>2. Fast bulk export</strong></p>
                <p>When exporting <strong>100 million</strong> resources via /fhir/$export: <strong>202.8 GB</strong> of data, <strong>1 hour 47 minutes</strong> total time, <strong>15,500 resources/second</strong> (32.3 MB/s)</p>

                <p><strong>3. High-concurrency CRUD operations</strong></p>
                <p>Even under <strong>300 parallel threads</strong>, Aidbox achieves:</p>
                <ul>
                  <li><strong>Create</strong>: Up to <strong>2,800 RPS</strong> (Observations)</li>
                  <li><strong>Read</strong>: Up to <strong>3,500 RPS</strong> (Patients)</li>
                  <li><strong>Update</strong>: <strong>~1,900 RPS</strong> (Encounters)</li>
                  <li><strong>Delete</strong>: Over <strong>3,900 RPS</strong> (ExplanationOfBenefit)</li>
                </ul>

                <p><strong>4. Efficient transactions for mid-sized loads</strong></p>
                <p>Testing FHIR transactions (bundles of 10, 50, 100, 300 resources) showed: <strong>~3,500 resources/second</strong> throughput with optimal concurrency at <strong>1–2 threads per CPU core</strong></p>

                <p><strong>5. Optimized search with indexing at scale</strong></p>
                <p>Search performance was validated across resources like Patient, Encounter, Claim, and Observation, with up to <strong>5 million</strong> records:</p>
                <ul>
                  <li><strong>Patient Search</strong>: ~2,081 RPS (search by name & sort by family)</li>
                  <li><strong>Encounter Search</strong>: ~3,125 RPS (by patient & date)</li>
                  <li><strong>Observation Search</strong>: ~2,042 RPS (by patient & date)</li>
                </ul>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-trigger"
                data-on-click="$faqOpen.conclusion = !$faqOpen.conclusion"
                data-class="{'faq-trigger--active': $faqOpen.conclusion}"
              >
                <span>Conclusion</span>
                <span className="faq-icon" data-class="{'faq-icon--open': $faqOpen.conclusion}">+</span>
              </button>
              <div className="faq-content" data-show="$faqOpen.conclusion" style="display: none">
                <p><strong>Aidbox FHIR server</strong> offers <strong>speed, control, and reliability</strong> in one streamlined package. The result is a solution that can scale from tens of millions to <strong>billions of FHIR resources</strong>, delivering:</p>

                <p><strong>Outstanding performance on minimal hardware</strong></p>
                <p>Even an 8 vCPU, 8 GB RAM setup can yield results <strong>10x faster</strong> than popular open-source FHIR servers.</p>

                <p><strong>1. Streamlined operations</strong></p>
                <p>Aidbox's containerized distribution requires only PostgreSQL, minimizing deployment and maintenance.</p>

                <p><strong>2. Reliability under heavy load</strong></p>
                <p>High concurrency and large transaction bundles don't hamper Aidbox's responsiveness or stability.</p>

                <p><strong>3. Scalable Bulk Import & Export</strong></p>
                <p>Process large FHIR datasets—from millions to billions—end-to-end, quickly and without added complexity.</p>

                <p>If you're looking for a powerful, FHIR-compliant platform that simplifies infrastructure, accelerates performance, and keeps data fully accessible, Aidbox is ready to meet your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </Fragment>
  );
}
