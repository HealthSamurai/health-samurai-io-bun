import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { Trusted, TrustedLogo } from "../components/Trusted";
import { Pricing, PricingTier } from "../components/Pricing";
import { ContactForm } from "../components/ContactForm";

const product = getProduct("aidbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

const trustedLogos: TrustedLogo[] = [
  { src: "/assets/aidbox/4medica.svg", alt: "4Medica" },
  { src: "/assets/aidbox/innovaccer.svg", alt: "Innovaccer" },
  { src: "/assets/aidbox/prenosis.svg", alt: "Prenosis" },
  { src: "/assets/aidbox/pkb.svg", alt: "Patients Know Best" },
  { src: "/assets/aidbox/sonic.svg", alt: "Sonic Healthcare" },
  { src: "/assets/aidbox/narus.svg", alt: "Narus Health" },
  { src: "/assets/aidbox/deep6ai.svg", alt: "Deep 6 AI" },
  { src: "/assets/aidbox/healthie.svg", alt: "Healthie" },
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
        title={product.label}
        description={product.description}
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
