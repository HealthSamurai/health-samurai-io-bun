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
import { ContactForm } from "../components/ContactForm";
import { GetStartedModal } from "../components/GetStartedModal";

const product = getProduct("aidbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

const trustedLogos: TrustedLogo[] = [
  { src: "/assets/aidbox/trust/solutio.png", alt: "Solutio" },
  { src: "/assets/aidbox/trust/deep6ai.png", alt: "Deep 6 AI" },
  { src: "/assets/aidbox/trust/bodylogicmd.png", alt: "BodyLogicMD" },
  { src: "/assets/aidbox/trust/sandata.png", alt: "Sandata" },
  { src: "/assets/aidbox/trust/villagecare.png", alt: "VillageCare" },
  { src: "/assets/aidbox/trust/firenote.png", alt: "Firenote" },
  { src: "/assets/aidbox/trust/healthie.png", alt: "Healthie" },
  { src: "/assets/aidbox/trust/prenosis.png", alt: "Prenosis" },
  { src: "/assets/aidbox/trust/patients-know-best.png", alt: "Patients Know Best" },
  { src: "/assets/aidbox/trust/lucent-health.png", alt: "Lucent Health" },
  { src: "/assets/aidbox/trust/bestnotes.png", alt: "BestNotes" },
  { src: "/assets/aidbox/trust/innovaccer.png", alt: "Innovaccer" },
  { src: "/assets/aidbox/trust/bupa.png", alt: "Bupa" },
  { src: "/assets/aidbox/trust/duodecim.png", alt: "Duodecim" },
  { src: "/assets/aidbox/trust/novellia.png", alt: "Novellia" },
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
        title="FHIR server and database!"
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
      <UseCases
        title="See how Aidbox powers the system you want to build"
        cases={aidboxUseCases}
      />
      <SampleProjects
        title="Get hands-on with sample projects built on Aidbox"
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
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you get started with our FHIR platform."
        page="/fhir-server"
      />
      <GetStartedModal id={modalId} />
    </Fragment>
  );
}
