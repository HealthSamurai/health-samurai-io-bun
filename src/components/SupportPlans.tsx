/**
 * Support Plans section
 */

type SupportPlan = {
  name: string;
  price: string;
  priceAnnual?: string;
  recommended?: boolean;
  features: string[];
};

type SupportPlansProps = {
  plans: SupportPlan[];
  ctaText?: string;
  ctaHref?: string;
};

function SupportPlanCard({ plan }: { plan: SupportPlan }): string {
  return `
    <div class="${plan.recommended ? 'border-2 border-primary' : 'border border-gray-200'} rounded-lg p-8 bg-white relative">
      ${plan.recommended ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2"><span class="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Recommended</span></div>' : ''}
      
      <div class="text-2xl font-bold text-gray-900 mb-2">${plan.name}</div>
      <div class="text-3xl font-bold text-primary mb-6">
        ${plan.price}
        ${plan.priceAnnual ? `<span class="text-base font-normal text-gray-600">/year</span>` : ''}
      </div>
      
      <ul class="space-y-3">
        ${plan.features.map(feature => `
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-700">${feature}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

export function SupportPlans({ plans, ctaText = "SEE PLANS", ctaHref = "/price" }: SupportPlansProps): string {
  return `
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support Plans</div>
        </div>
        
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          ${plans.map(plan => SupportPlanCard({ plan })).join('')}
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-8">
            Get in touch, we'll dig into your case and propose the best option.
          </p>
          <a
            href="${ctaHref}"
            class="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            ${ctaText}
          </a>
        </div>
      </div>
    </section>
  `;
}

// Pre-configured support plans data
export const supportPlans: SupportPlan[] = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Included in Aidbox Development",
      "Onboarding call",
      "Private chat with Health Samurai",
      "Bug fixing and Q&A",
      "Blocking issue resolution up to 1 day",
      "Response time up to 3 business days"
    ]
  },
  {
    name: "Professional",
    price: "$25,000",
    priceAnnual: "/year",
    recommended: true,
    features: [
      "Everything in Basic, plus:",
      "Complex Aidbox and FHIR guidance",
      "BAA & insurance",
      "New terminologies in Termbox on demand",
      "Up to 12 video calls",
      "Blocking issue resolution up to 8 hours",
      "Response time up to 2 business days"
    ]
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Everything in Professional, plus:",
      "24/7 support & phone number",
      "Weekly technical & architecture reviews",
      "New Aidbox features prioritization",
      "Blocking issue resolution up to 4 hours",
      "Response time up to 1 business day"
    ]
  }
];
