import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { Trusted } from "../components/Trusted";
import type { TrustedLogo } from "../components/Trusted";
import { Bento } from "../components/Bento";
import type { BentoItem } from "../components/Bento";
import { UseCases, aidboxUseCases } from "../components/UseCases";
import { Pricing } from "../components/Pricing";
import type { PricingTier } from "../components/Pricing";
import { ContactForm } from "../components/ContactForm";

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
    href: "https://docs.aidbox.app/storage-1/aidboxdb-image",
    iconSrc: "/assets/aidbox/features/database.svg",
    tags: ["PostgreSQL", "JSONB", "Indexes", "Custom resources", "SQL on FHIR"],
  },
  {
    title: "API",
    description:
      "Multiple APIs — FHIR, SQL, GraphQL, Bulk, and Subscription — to work efficiently with FHIR data for maximum flexibility and performance.",
    href: "https://docs.aidbox.app/api-1",
    iconSrc: "/assets/aidbox/features/api.svg",
    tags: ["FHIR", "SQL", "GraphQL"],
  },
  {
    title: "Artifact Registry",
    description:
      "Multiple FHIR versions: STU3, R4, R5, and R6. 500+ ready-to-use IGs: IPS, national (US, DE, CA, etc.), domain (mCode, Da Vinci, etc.), custom IGs.",
    href: "https://docs.aidbox.app/profiling-and-validation/profiling-with-zen-lang",
    iconSrc: "/assets/aidbox/features/artifact-registry.svg",
    tags: ["IGs", "Profiles", "Search params"],
  },
  {
    title: "Access Control",
    description:
      "Enterprise-grade security with OAuth 2.0, multitenancy, flexible user management, granular access policies, and complete audit trails.",
    href: "https://docs.aidbox.app/security-and-access-control-1",
    iconSrc: "/assets/aidbox/features/access-control.svg",
    tags: ["OAuth 2.0", "SMART", "RBAC/ABAC"],
  },
  {
    title: "Terminology",
    description:
      "Validate codes and perform fast lookups in ICD-10, SNOMED, LOINC. Use custom code systems and value sets.",
    href: "https://docs.aidbox.app/terminology",
    iconSrc: "/assets/aidbox/features/terminology.svg",
    tags: ["CodeSystems", "ValueSets"],
  },
  {
    title: "Developer Experience",
    description:
      "TypeScript, C#, and Python SDKs for easy Aidbox integration and rapid app development. SDK generator for custom toolkits tailored to your stack.",
    href: "https://docs.aidbox.app/app-development-guides",
    iconSrc: "/assets/aidbox/features/sdk.svg",
    tags: ["Python", "C#", "JS", "Codegen"],
  },
  {
    title: "UI",
    description:
      "Intuitive UI to work with FHIR data, manage users, clients, access policies, and configure system settings.",
    href: "https://docs.aidbox.app/overview/aidbox-ui",
    iconSrc: "/assets/aidbox/features/ui.svg",
    tags: ["FHIR Viewer", "Search params"],
  },
];

const pricingTiers: PricingTier[] = [
  {
    id: "developer",
    name: "Developer",
    description: "Perfect for development and testing your FHIR applications.",
    priceMonthly: "$0",
    priceAnnually: "$0",
    href: "https://aidbox.app",
    features: [
      "Single Aidbox instance",
      "Up to 10,000 resources",
      "Community support",
      "Access to documentation",
      "Local development",
    ],
  },
  {
    id: "team",
    name: "Team",
    description: "For teams building production healthcare applications.",
    priceMonthly: "$499",
    priceAnnually: "$4,990",
    href: "/contacts",
    featured: true,
    features: [
      "Multiple Aidbox instances",
      "Unlimited resources",
      "Priority email support",
      "SMART on FHIR support",
      "Custom terminologies",
      "Audit logging",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Dedicated support and infrastructure for large organizations.",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    href: "/contacts",
    features: [
      "Unlimited instances",
      "Unlimited resources",
      "Dedicated support",
      "SLA guarantees",
      "On-premise deployment",
      "Custom integrations",
      "Compliance assistance",
    ],
  },
];

export default function AidboxPage(): string {
  return (
    <Fragment>
      <Hero
        title="FHIR server and database"
        description="Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK. Free for development. Scale to terabytes with a flat monthly fee of $1,900."
        primaryCta={{ label: "Get Started", href: "https://docs.aidbox.app/getting-started" }}
        secondaryCta={{ label: "Documentation", href: "https://docs.aidbox.app" }}
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
      <Pricing
        title="Pricing"
        subtitle="Simple, transparent pricing"
        description="Choose the plan that fits your needs. Start free and scale as you grow."
        tiers={pricingTiers}
      />
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you get started with our FHIR platform."
        page="/aidbox"
      />
    </Fragment>
  );
}
