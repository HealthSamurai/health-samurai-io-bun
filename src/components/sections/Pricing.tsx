import { Button } from "../ui/Button";

// Types
type PricingTier = {
  id: string;
  name: string;
  icon: string;
  price: {
    yearly: string;
    monthly?: string;
  };
  period?: string;
  description: string;
  cta: {
    label: string;
    href: string;
    variant: "primary" | "outline";
  };
};

type SupportPlanType = {
  id: string;
  name: string;
  price: string | { label: string; href: string };
  recommended?: boolean;
  includedText: string;
  features: string[];
};

type PricingProps = {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  supportPlans?: SupportPlanType[];
  supportCta?: {
    text: string;
    label: string;
    href: string;
  };
};

// Sub-components
function PricingCard({ tier, isFirst }: { tier: PricingTier; isFirst?: boolean }): string {
  const isTalkToSales = tier.price.yearly === "Talk to Sales";

  return (
    <div className="pricing-card">
      <div className="pricing-card-icon">
        <img src={tier.icon} alt={tier.name} />
      </div>
      <div className="pricing-card-header">
        <h3 className="pricing-card-name">{tier.name}</h3>
        {isTalkToSales ? (
          <div className="pricing-amount talk-to-sales">{tier.price.yearly}</div>
        ) : (
          <>
            <div className="pricing-amount" data-show="$pricingPeriod === 'yearly'">
              {tier.price.yearly} <span>/year</span>
            </div>
            <div className="pricing-amount" data-show="$pricingPeriod === 'monthly'">
              {tier.price.monthly || tier.price.yearly} <span>/month</span>
            </div>
          </>
        )}
        <p>{tier.description}</p>
      </div>
      <Button href={tier.cta.href} variant={tier.cta.variant}>{tier.cta.label}</Button>
    </div>
  );
}

function SupportPlan({ plan }: { plan: SupportPlanType }): string {
  const priceElement = typeof plan.price === "string"
    ? <span className="support-price">{plan.price}</span>
    : <a href={plan.price.href} className="support-contact">{plan.price.label}</a>;

  return (
    <div className={`support-plan${plan.recommended ? " recommended" : ""}`}>
      <div className="support-plan-header">
        <h4>
          {plan.name}
          {plan.recommended && <span className="recommended-badge">Recommended</span>}
        </h4>
        {priceElement}
      </div>
      <ul className="support-features">
        <li className="support-included">{plan.includedText}</li>
        {plan.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

// Main component
export function Pricing({
  title = "Pricing",
  subtitle = "Flat pricing with no hidden fees.",
  tiers,
  supportPlans,
  supportCta
}: PricingProps): string {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container" data-signals="{pricingPeriod: 'yearly'}">
        <div className="pricing-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="pricing-tabs">
          <button
            className="pricing-tab"
            data-class="{'active': $pricingPeriod === 'yearly'}"
            data-on-click="$pricingPeriod = 'yearly'"
          >
            Yearly
          </button>
          <button
            className="pricing-tab"
            data-class="{'active': $pricingPeriod === 'monthly'}"
            data-on-click="$pricingPeriod = 'monthly'"
          >
            Monthly
          </button>
        </div>
        <div className="pricing-cards">
          {tiers.map((tier, index) => (
            <PricingCard tier={tier} isFirst={index === 0} />
          ))}
        </div>
      </div>

      {supportPlans && supportPlans.length > 0 && (
        <div className="support-plans-section">
          <div className="container">
            <h3 className="support-title">Support Plans</h3>
            <div className="support-plans-grid">
              {supportPlans.map((plan) => (
                <SupportPlan plan={plan} />
              ))}
            </div>
            {supportCta && (
              <div className="support-cta">
                <p>{supportCta.text}</p>
                <Button href={supportCta.href} variant="outline">{supportCta.label}</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// Default data for Aidbox pricing
export const aidboxPricingTiers: PricingTier[] = [
  {
    id: "dev",
    name: "Aidbox Dev",
    icon: "/assets/images/icons/pricing-dev.svg",
    price: { yearly: "$0", monthly: "$0" },
    description: "Free for prototyping, testing and development. Not for use with Protected Health Information (PHI).",
    cta: { label: "Try now", href: "https://aidbox.app/ui/portal#/signup", variant: "outline" },
  },
  {
    id: "core",
    name: "Aidbox Core",
    icon: "/assets/images/icons/pricing-core.svg",
    price: { yearly: "$19,000", monthly: "$1,900" },
    description: "Pay per unique database. Basic support is included. Ask about startup or bulk discounts.",
    cta: { label: "Contact Us", href: "/price", variant: "primary" },
  },
  {
    id: "enterprise",
    name: "Aidbox Enterprise",
    icon: "/assets/images/icons/pricing-enterprise.svg",
    price: { yearly: "Talk to Sales", monthly: "Talk to Sales" },
    description: "Enterprise plan for large-scale production workloads. Built for multi-tenant architectures, high availability, and advanced data pipelines.",
    cta: { label: "Contact Us", href: "/price", variant: "outline" },
  },
];

export const aidboxSupportPlans: SupportPlanType[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    includedText: "Included in Aidbox Development",
    features: [
      "Onboarding call",
      "Private chat with Health Samurai",
      "Bug fixing and Q&A",
      "Blocking issue resolution up to 1 day",
      "Response time up to 3 business days",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$25,000 /year",
    recommended: true,
    includedText: "Everything in Basic, plus:",
    features: [
      "Complex Aidbox and FHIR guidance",
      "BAA & insurance",
      "New terminologies in Termbox on demand",
      "Up to 12 video calls",
      "Blocking issue resolution up to 8 hours",
      "Response time up to 2 business days",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { label: "Contact us", href: "/contacts" },
    includedText: "Everything in Professional, plus:",
    features: [
      "24/7 support & phone number",
      "Weekly technical & architecture reviews",
      "New Aidbox features prioritization",
      "Blocking issue resolution up to 4 hours",
      "Response time up to 1 business day",
    ],
  },
];

export const aidboxSupportCta = {
  text: "Get in touch, we'll dig into your case and propose the best option.",
  label: "See Plans",
  href: "/price",
};
