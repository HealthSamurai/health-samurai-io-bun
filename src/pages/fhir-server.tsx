import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { Trusted } from "../components/Trusted";
import type { TrustedLogo } from "../components/Trusted";
import { Bento } from "../components/Bento";
import type { BentoItem } from "../components/Bento";
import { UseCases, aidboxUseCases } from "../components/UseCases";
import { SampleProjects, aidboxSampleProjects } from "../components/SampleProjects";
import { Deployment, aidboxDeploymentOptions } from "../components/Deployment";
import { Pricing } from "../components/Pricing";
import type { PricingTier } from "../components/Pricing";
import { SupportPlans, supportPlans } from "../components/SupportPlans";
import { Testimonials, aidboxTestimonials } from "../components/Testimonials";
import { JoinCommunity } from "../components/JoinCommunity";
import { FAQ, aidboxFAQ } from "../components/FAQ";
import { ContactForm } from "../components/ContactForm";
import { GetStartedModal } from "../components/GetStartedModal";

const product = getProduct("aidbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

const trustedLogos: TrustedLogo[] = [
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/64ba99d2e3fe0c7e42265e5d_innovaccer-logo-black.svg",
    alt: "Innovaccer Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6602b888409299ed4eef694b_Frame%20427319224%20(1).webp",
    alt: "Coda Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811f756ed6ce3acce94256a_Duodecim_idFuVC2K5H_1.png",
    alt: "Duodecim Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4a2c54d0ea864cb16_Logo_PatientsCo%20HiRes%20(1)%202.webp",
    alt: "Patients Know Best Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811ffa3bd8873ca1d79e495_firenote-logo-reverse%202.png",
    alt: "Firenote Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4d9547ec7a6917d3c_Healthie-logo%201.webp",
    alt: "Healthie Company logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb49aaba578b2bb7cf9_naruslucent-removebg-preview%201.webp",
    alt: "Lucent Health Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65426115ed1b936bef809059_prenosis-logo-color%202.webp",
    alt: "Prenosis Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb477c566d9cea62f52_BestNotes_Logo-to-use_1-768x168%201.webp",
    alt: "Bestnotes Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6542824da3496e9497e73349_Frame%20427319190(2).webp",
    alt: "Lucet Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png",
    alt: "novellia Logo",
  },
];

const aidboxFeatures: BentoItem[] = [
  {
    title: "FHIR Database",
    description:
      "Manage FHIR data with the power of PostgreSQL — fully under your control. Aidbox stores resources transparently as JSONB, enabling you to query, join, and aggregate by any element, with full support for transactional operations, reporting, and seamless migrations.",
    href: "/docs/aidbox/database/overview",
    iconSrc: "/assets/aidbox/features/database.svg",
    tags: ["PostgreSQL", "JSONB", "Indexes", "Custom resources", "SQL on FHIR"],
  },
  {
    title: "API",
    description:
      "Multiple APIs — FHIR, SQL, GraphQL, Bulk, and Subscription — to work efficiently with FHIR data for maximum flexibility and performance.",
    href: "/docs/aidbox/api/api-overview",
    iconSrc: "/assets/aidbox/features/api.svg",
    tags: ["FHIR", "SQL", "GraphQL"],
  },
  {
    title: "Artifact Registry",
    description:
      "Multiple FHIR versions: STU3, R4, R5, and R6. 500+ ready-to-use IGs: IPS, national (US, DE, CA, etc.), domain (mCode, Da Vinci, etc.), custom IGs.",
    href: "/docs/aidbox/artifact-registry/artifact-registry-overview",
    iconSrc: "/assets/aidbox/features/artifact-registry.svg",
    tags: ["IGs", "Profiles", "Search params"],
  },
  {
    title: "Access Control",
    description:
      "Enterprise-grade security with OAuth 2.0, multitenancy, flexible user management, granular access policies, and complete audit trails.",
    href: "/docs/aidbox/access-control/access-control",
    iconSrc: "/assets/aidbox/features/access-control.svg",
    tags: ["OAuth 2.0", "SMART", "RBAC/ABAC"],
  },
  {
    title: "Terminology",
    description:
      "Validate codes and perform fast lookups in ICD-10, SNOMED, LOINC. Use custom code systems and value sets.",
    href: "/docs/aidbox/terminology-module/overview",
    iconSrc: "/assets/aidbox/features/terminology.svg",
    tags: ["CodeSystems", "ValueSets"],
  },
  {
    title: "Developer Experience",
    description:
      "TypeScript, C#, and Python SDKs for easy Aidbox integration and rapid app development. SDK generator for custom toolkits tailored to your stack.",
    href: "/docs/aidbox/developer-experience/developer-experience-overview",
    iconSrc: "/assets/aidbox/features/sdk.svg",
    tags: ["Python", "C#", "JS", "Codegen"],
  },
  {
    title: "UI",
    description:
      "Intuitive UI to work with FHIR data, manage users, clients, access policies, and configure system settings.",
    href: "/docs/aidbox/overview/aidbox-ui",
    iconSrc: "/assets/aidbox/features/ui.svg",
    tags: ["FHIR Viewer", "Search params"],
  },
];

const pricingTiers: PricingTier[] = [
  {
    id: "dev",
    name: "Aidbox Dev",
    description: "Free for prototyping, testing and development. Not for use with Protected Health Information (PHI).",
    priceMonthly: "$0",
    priceAnnually: "$0",
    href: "https://aidbox.app/ui/portal",
    icon: "/assets/aidbox/pricing/dev.svg",
    cta: "Try now",
    features: [],
  },
  {
    id: "core",
    name: "Aidbox Core",
    description: "Pay per unique database. Basic support is included. Ask about startup or bulk discounts.",
    priceMonthly: "$1,900",
    priceAnnually: "$19,000",
    href: "/contacts",
    icon: "/assets/aidbox/pricing/core.svg",
    cta: "Contact Us",
    featured: true,
    features: [],
  },
  {
    id: "enterprise",
    name: "Aidbox Enterprise",
    description: "Enterprise plan for large-scale production workloads. Built for multi-tenant architectures, high availability, and advanced data pipelines.",
    priceMonthly: "Talk to Sales",
    priceAnnually: "Talk to Sales",
    href: "/contacts",
    icon: "/assets/aidbox/pricing/enterprise.svg",
    cta: "Contact Us",
    features: [],
  },
];

export default function FhirServerPage(): string {
  const modalId = "get-started-modal";
  
  return (
    <Fragment>
      <Hero
        title="FHIR server and database"
        description="Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK. Free for development. Scale to terabytes with a flat monthly fee of $1,900."
        primaryCta={{ label: "TRY FOR FREE", modalId }}
        secondaryCta={{ label: "Documentation", href: "/docs" }}
        video={{
          src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F6825c9b1aa9dc8fada2e3a28_v2%20creator%20720p60%20placebo%2019-transcode.mp4",
          poster: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67375cd7b2a0b99a0a21b98c_ui-console-hero-p-1600.avif"
        }}
      />
      <Trusted
        logos={trustedLogos}
        tagline="Trusted by leading healthcare organizations worldwide."
        ctaText="Read customer stories"
        ctaHref="/casestudies"
      />
      <Bento
        title="What is Aidbox"
        items={aidboxFeatures}
      />
      <div class="bg-gray-50 pb-24">
        <div class="flex justify-center">
          <a
            href="/docs/aidbox/features"
            class="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            TECHNICAL FEATURES
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <UseCases
        title="See how Aidbox FHIR server powers the system you want to build"
        cases={aidboxUseCases}
      />
      <SampleProjects
        title="Get hands-on with sample projects built on Aidbox FHIR server"
        projects={aidboxSampleProjects}
      />
      <Deployment
        title="Deploy Aidbox your way"
        subtitle="Run server in the cloud, on-premise, or let us handle it for you."
        options={aidboxDeploymentOptions}
        diagramSrc="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686fa07bf31b7be70f15a633_Group%2035626.svg"
      />
      <Pricing
        title="Pricing"
        subtitle="Flat pricing with no hidden fees."
        tiers={pricingTiers}
      />
      <SupportPlans plans={supportPlans} />
      <Testimonials testimonials={aidboxTestimonials} />
      <JoinCommunity />
      <FAQ 
        title="Aidbox FHIR Platform: Unified FHIR Server and Database for high-performance healthcare applications"
        items={aidboxFAQ}
      />
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you get started with our FHIR platform."
        page="/fhir-server"
      />
      <GetStartedModal id={modalId} />
    </Fragment>
  );
}
