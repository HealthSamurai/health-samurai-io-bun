import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Services",
  description: "FHIR-first software development for healthcare. Dedicated teams, FHIR platform, domain expertise, and agile approach.",
};

const featureCards = [
  {
    title: "Dedicated Teams",
    description: "Achieve rapid results with our full-stack teams dedicated to your project.",
  },
  {
    title: "FHIR Platform",
    description: "Reduce time-to-market with our pre-built Aidbox FHIR backend and cloud infrastructure.",
  },
  {
    title: "Domain Expertise",
    description: "Benefit from 15+ years of experience in health IT, software development, and HL7 FHIR.",
  },
  {
    title: "Agile & Lean",
    description: "Reach your goals through short iterations that incrementally develop the product.",
  },
];

const services = [
  { title: "Full-stack Development", icon: "/assets/services/fullstack.svg" },
  { title: "System Design", icon: "/assets/services/system-design.svg" },
  { title: "FHIR Data Modeling", icon: "/assets/services/fhir-modeling.svg" },
  { title: "Integrations", icon: "/assets/services/integrations.svg" },
  { title: "Cloud Infrastructure", icon: "/assets/services/cloud.svg" },
  { title: "ONC/CMS Compliance", icon: "/assets/services/onc-cms.svg" },
  { title: "HIPAA/GDPR Compliance", icon: "/assets/services/hipaa-gdpr.svg" },
  { title: "UI/UX Design", icon: "/assets/services/ui-ux.svg" },
];

const portfolio = [
  {
    title: "Care Coordination",
    description: "Developing a care coordination platform for self-insured companies managed by Lucent Health.",
    tag: "care coordination platform",
    image: "/assets/services/portfolio-care.jpg",
    href: "https://lucenthealth.com/",
  },
  {
    title: "Hospice EHR",
    description: "Developing a FHIR-native, specialized EHR system used by over 100 hospices across the US.",
    tag: "specialized EHR",
    image: "/assets/services/portfolio-hospice.jpg",
    href: "https://firenote.health/",
  },
  {
    title: "Billing Module",
    description: "Creating an automated billing module for the Sandata Agency Management Platform tailored to US home care agencies.",
    tag: "automated billing module",
    image: "/assets/services/portfolio-billing.jpg",
    href: "https://www.sandata.com/",
  },
  {
    title: "Dermatology EHR",
    description: "Developing EHR modules including billing, registration, and self-payment for a Dermatology Clinic in New York.",
    tag: "EHR modules",
    image: "/assets/services/portfolio-derm.jpg",
    href: "https://metrodermatology.net/",
  },
];

const cultureTabs = [
  {
    id: "teams",
    label: "Teams",
    title: "Small & Strong",
    description: "We craft our teams with full-stack developers who can handle everything from design and development to deployment and maintenance across all layers. A typical team has 3-7 pros, including one PO/BA and 2-6 full-stack engineers.",
    image: "/assets/services/culture-team.webp",
    tags: ["full-stack developers"],
  },
  {
    id: "process",
    label: "Process",
    title: "Iterative & Incremental",
    description: "We kick things off with a proof-of-concept project that lays down the basic scenario. From there, we evolve it into an MVP and then scale it up to a production-ready solution, all through quick, 1-week iterations.",
    image: "/assets/services/culture-scrum.webp",
    tags: ["proof-of-concept project", "1-week iterations"],
  },
  {
    id: "culture",
    label: "Culture",
    title: "Feedback & Automations",
    description: "With proven engineering practices such as CI/CD automation, TDD, pair programming, and design sessions, our teams move towards their goals at high speed without sacrificing quality. We continuously improve our domain knowledge and development culture.",
    image: "/assets/services/culture-feedback.webp",
    tags: ["CI/CD automation", "TDD", "pair programming"],
  },
  {
    id: "dev",
    label: "Developments",
    title: "Platform & Open Source",
    description: "We build projects on our Aidbox FHIR Server, which dramatically reduces initial development efforts. We start and contribute significantly to valuable open-source projects, including: sql-on-fhir, fhirbase, hl7proxy, jute.clj, retest, suitkin, etc.",
    image: "/assets/services/culture-platform.webp",
    tags: ["Aidbox FHIR Server"],
  },
];

const blogPosts = [
  {
    title: "FHIR FUSE: FHIR in a Unix Way",
    href: "/blog/fhir-fuse-fhir-in-a-unix-way",
    image: "/assets/services/blog-fhir-fuse.png",
  },
  {
    title: "Managing Multi-Clinic Data and Real-time Synchronization with OrgBAC and Subscriptions",
    href: "/blog/managing-multi-clinic-data-and-real-time-synchronization-with-orgbac-and-subscriptions",
    image: "/assets/services/blog-multi-clinic.png",
  },
  {
    title: "From Paper Form to FHIR",
    href: "/blog/from-paper-form-to-fhir",
    image: "/assets/services/blog-paper-form.png",
  },
];

function HeroSection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero row: title left, image right */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm font-mono text-gray-700 mb-6">
              <span class="text-primary">&gt;_</span> Services
            </div>
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              FHIR-first<br />software development<br /><span class="text-primary">for healthcare</span>
            </h1>
          </div>
          <div class="lg:col-span-5">
            <img
              src="/assets/services/services-hero.webp"
              alt="FHIR experts"
              class="w-full max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>

        {/* Feature cards row - first card highlighted with light blue bg */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, i) => (
            <div class={`rounded-2xl p-6 ${i === 0 ? 'bg-[#f4f8fb]' : ''}`}>
              <h3 class="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p class="mt-2 text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p class="mt-4 text-lg text-gray-600">
            We are proud to partner with clients of all stages and sizes in the Health IT sector.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map(project => (
            <div class="bg-[#f4f8fb] rounded-2xl p-6 hover:shadow-md transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                class="w-20 h-20 object-contain mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p class="mt-2 text-gray-600" dangerouslySetInnerHTML={{
                __html: project.description.replace(
                  project.tag,
                  `<span class="text-primary font-medium">${project.tag}</span>`
                )
              }} />
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Visit site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Services diagram image */}
          <div>
            <img
              src="/assets/services/services-diagram.webp"
              alt="FHIR Services"
              class="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Right: Title, description, services grid, button */}
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted technology partner for FHIR projects
            </h2>
            <p class="mt-6 text-lg text-gray-600">
              Collaborate with our small, cross-functional teams of business-focused domain experts.
            </p>

            {/* Services grid 2x4 */}
            <div class="mt-8 grid grid-cols-2 gap-4">
              {services.map(service => (
                <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src={service.icon} alt={service.title} class="size-10" />
                  <span class="text-sm font-medium text-gray-900">{service.title}</span>
                </div>
              ))}
            </div>

            <div class="mt-8">
              <a
                href="#contact"
                class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Hire a team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CultureSection(): string {
  const defaultTab = cultureTabs[0].id;

  return (
    <section class="bg-[#f4f8fb] py-24 sm:py-32" data-signals={`{cultureTab: '${defaultTab}'}`}>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Approach & Culture</h2>
          <p class="mt-4 text-lg text-gray-600">
            We follow the Lean Principle of <span class="text-primary font-medium">"do more with less"</span> and this shapes our culture.
          </p>
        </div>

        {/* Tabs */}
        <div class="flex justify-center gap-2 mb-12">
          {cultureTabs.map(tab => (
            <button
              data-on:click={`$cultureTab = '${tab.id}'`}
              data-class={`{'bg-white text-gray-900 shadow-sm': $cultureTab == '${tab.id}', 'bg-transparent text-gray-600 hover:text-gray-900': $cultureTab != '${tab.id}'}`}
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {cultureTabs.map(tab => (
          <div
            data-show={`$cultureTab == '${tab.id}'`}
            style={tab.id !== defaultTab ? "display: none" : ""}
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src={tab.image}
                alt={tab.title}
                class="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{tab.title}</h3>
              <p class="mt-4 text-gray-600 leading-relaxed">
                {tab.description}
              </p>
              {tab.tags && (
                <div class="mt-6 flex flex-wrap gap-2">
                  {tab.tags.map(tag => (
                    <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogSection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">Our Blog</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <a
              href={post.href}
              class="block bg-[#f4f8fb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div class="aspect-video bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span class="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Read more →
                </span>
              </div>
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
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <CultureSection />
      <BlogSection />
      <div id="contact">
        <ContactForm
          title="Got a FHIR project?"
          description="Complete the form and one of our FHIR experts will contact you via email to schedule a call within one business day."
          page="/services"
        />
      </div>
    </Fragment>
  );
}
