import { Fragment } from "../../lib/jsx-runtime";

type PricingTier = {
  name: string;
  price: number;
  currency?: string;
  deadline?: string;
  features?: string[];
  highlighted?: boolean;
  soldOut?: boolean;
};

type PricingSectionProps = {
  pricing: PricingTier[];
  title?: string;
  contact?: string;
};

function PricingCard({ tier }: { tier: PricingTier }): string {
  const currency = tier.currency || "EUR";
  const currencySymbol = currency === "EUR" ? "€" : currency === "USD" ? "$" : currency;

  return (
    <div class={`relative p-6 rounded-xl border-2 ${tier.highlighted ? "border-primary bg-primary/5" : "border-gray-200 bg-white"} ${tier.soldOut ? "opacity-75" : ""}`}>
      {tier.highlighted && !tier.soldOut && (
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
          Best Value
        </span>
      )}
      {tier.soldOut && (
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
          SOLD OUT
        </span>
      )}
      <div class="text-lg font-semibold text-gray-900 mb-2">{tier.name}</div>
      <div class="flex items-baseline gap-1 mb-4">
        <span class={`text-3xl font-bold ${tier.soldOut ? "text-gray-400 line-through" : "text-gray-900"}`}>{tier.price.toLocaleString()} {currency}</span>
      </div>
      {tier.deadline && (
        <p class="text-sm text-gray-600 mb-4">
          <svg class="inline size-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {tier.deadline}
        </p>
      )}
      {tier.features && tier.features.length > 0 && (
        <ul class="space-y-2">
          {tier.features.map(feature => (
            <li class="flex items-start gap-2 text-sm text-gray-600">
              <svg class="size-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PricingSection({ pricing, title = "Pricing", contact }: PricingSectionProps): string {
  if (!pricing || pricing.length === 0) return "";

  return (
    <section class="py-12 px-6 bg-gray-50">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg class="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          {title}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map(tier => PricingCard({ tier }))}
        </div>
        {contact && (
          <div class="mt-8 text-center">
            <p class="text-gray-600">
              Questions? Contact us at{" "}
              <a href={`mailto:${contact}`} class="text-primary hover:text-primary-dark font-medium">
                {contact}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
