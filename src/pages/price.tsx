import { Fragment } from "../lib/jsx-runtime";
import { Pricing } from "../components/Pricing";
import type { PricingTier } from "../components/Pricing";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Pricing",
  description: "Aidbox pricing plans - choose the right plan for your healthcare application.",
};

const tiers: PricingTier[] = [
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

export default function PricePage(): string {
  return (
    <Fragment>
      <Pricing
        title="Pricing"
        subtitle="Simple, transparent pricing"
        description="Choose the plan that fits your needs. Start free and scale as you grow."
        tiers={tiers}
      />

      <ContactForm
        title="Need a custom plan?"
        description="Contact us to discuss enterprise pricing, volume discounts, or special requirements."
        page="/price"
      />
    </Fragment>
  );
}
