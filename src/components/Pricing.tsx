export type PricingTier = {
  id: string;
  name: string;
  description: string;
  priceMonthly: string;
  priceAnnually: string;
  href: string;
  featured?: boolean;
  features: string[];
  icon?: string;
  cta?: string;
};

export type PricingProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  tiers: PricingTier[];
};

const checkIcon = `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-primary"><path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`;

export function Pricing({
  title = "Pricing",
  subtitle = "Pricing that grows with you",
  description,
  tiers,
}: PricingProps): string {
  return (
    <div class="bg-white py-24 sm:py-32" data-signals="{annual: true}">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base/7 font-semibold text-primary">{title}</h2>
          <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            {subtitle}
          </p>
        </div>
        {description && (
          <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            {description}
          </p>
        )}

        {/* Toggle */}
        <div class="mt-16 flex justify-center">
          <div class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200">
            <button
              type="button"
              class="rounded-full px-4 py-1.5 transition-colors"
              data-class="{'bg-primary text-white': $annual, 'text-gray-500': !$annual}"
              data-on:click="$annual = true"
              data-track="click"
              data-track-label="Yearly"
              data-track-category="pricing"
              data-track-billing="annual"
            >
              Yearly
            </button>
            <button
              type="button"
              class="rounded-full px-4 py-1.5 transition-colors"
              data-class="{'bg-primary text-white': !$annual, 'text-gray-500': $annual}"
              data-on:click="$annual = false"
              data-track="click"
              data-track-label="Monthly"
              data-track-category="pricing"
              data-track-billing="monthly"
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Tiers */}
        <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              class={`rounded-3xl p-8 xl:p-10 ${
                tier.featured
                  ? "ring-2 ring-primary"
                  : "ring-1 ring-gray-200"
              }`}
            >
              {tier.icon && (
                <div class="mb-6">
                  <img src={tier.icon} alt={tier.name} class="h-16 w-auto" loading="lazy" />
                </div>
              )}
              <div class="flex items-center justify-between gap-x-4">
                <h3
                  class={`text-lg/8 font-semibold ${
                    tier.featured ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p class="rounded-full bg-primary/10 px-2.5 py-1 text-xs/5 font-semibold text-primary">
                    Most popular
                  </p>
                )}
              </div>
              <p class="mt-4 text-sm/6 text-gray-600">{tier.description}</p>

              {/* Annual price */}
              <p class="mt-6 flex items-baseline gap-x-1" data-show="$annual">
                <span class="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.priceAnnually}
                </span>
                <span class="text-sm/6 font-semibold text-gray-600">/year</span>
              </p>

              {/* Monthly price */}
              <p class="mt-6 flex items-baseline gap-x-1" data-show="!$annual" style={{ display: "none" }}>
                <span class="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.priceMonthly}
                </span>
                <span class="text-sm/6 font-semibold text-gray-600">/month</span>
              </p>

              <a
                href={tier.href}
                class={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  tier.featured
                    ? "bg-primary text-white shadow-sm hover:bg-primary-dark"
                    : "text-primary ring-1 ring-inset ring-primary/20 hover:ring-primary/40"
                }`}
                data-track="click"
                data-track-label={`${tier.cta || "Get started"} - ${tier.name}`}
                data-track-category="pricing"
                data-track-tier={tier.id}
              >
                {tier.cta || "Get started"}
              </a>

              <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li class="flex gap-x-3">
                    <span>{checkIcon}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
