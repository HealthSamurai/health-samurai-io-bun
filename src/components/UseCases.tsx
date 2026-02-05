/**
 * Use Cases section with tabs
 * "See how Aidbox powers the system you want to build"
 */

type CaseStudyCard = {
  title: string;
  logo: string;
  logoWidth?: number;
  tags: string[];
  description: string;
};

type UseCase = {
  id: string;
  label: string;
  image: string;
  cards: CaseStudyCard[];
};

export type UseCasesProps = {
  title: string;
  cases: UseCase[];
};

function CaseCard({ card }: { card: CaseStudyCard }): string {
  return `
    <div class="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200">
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold text-gray-900">${card.title}</div>
          <img
            src="${card.logo}"
            alt="${card.title}"
            class="h-8 object-contain"
            style="max-width: ${card.logoWidth || 120}px"
            loading="lazy"
          />
        </div>
        <div class="flex flex-wrap gap-2">
          ${card.tags.map((tag) => `<span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">${tag}</span>`).join("")}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed">${card.description}</p>
      </div>
    </div>
  `;
}

export function UseCases({ title, cases }: UseCasesProps): string {
  const defaultTab = cases[0]?.id || "";

  return `
    <section class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ${title}
          </h2>
        </div>

        <div data-signals="{useCaseTab: '${defaultTab}'}">
          <!-- Tab buttons -->
          <div class="border-b border-gray-200 mb-12">
            <nav class="flex justify-center -mb-px space-x-8">
              ${cases
                .map(
                  (useCase) => `
                <button
                  type="button"
                  data-on:click="$useCaseTab = '${useCase.id}'"
                  data-class="{
                    'border-primary text-primary': $useCaseTab == '${useCase.id}',
                    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': $useCaseTab != '${useCase.id}'
                  }"
                  class="border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap transition-colors"
                >
                  ${useCase.label}
                </button>
              `
                )
                .join("")}
            </nav>
          </div>

          <!-- Tab panels -->
          ${cases
            .map(
              (useCase, index) => `
            <div
              data-show="$useCaseTab == '${useCase.id}'"
              ${index !== 0 ? 'style="display: none"' : ""}
              class="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-16 items-start justify-center"
            >
              <!-- Diagram -->
              <div class="flex items-center justify-center w-[550px]">
                <img
                  src="${useCase.image}"
                  alt="${useCase.label}"
                  class="w-full"
                  loading="lazy"
                />
              </div>

              <!-- Case study cards -->
              <div class="bg-white flex flex-col gap-6 p-10 rounded-lg w-[550px] min-h-[500px] justify-center">
                ${useCase.cards.map((card) => CaseCard({ card })).join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

// Pre-configured data for Aidbox use cases
export const aidboxUseCases: UseCase[] = [
  {
    id: "cdr",
    label: "CDRs & Data Platforms",
    image: "/assets/aidbox/use-cases/cdr.svg",
    cards: [
      {
        title: "Innovaccer",
        logo: "/assets/aidbox/use-cases/innovaccer.webp",
        logoWidth: 140,
        tags: ["Healthcare Data Platform"],
        description:
          "Innovaccer embeds Health Samurai's Aidbox FHIR engine into its Best-in-KLAS data platform, harmonizing EHR data from 1,800+ hospitals to boost interoperability and coordinated care.",
      },
      {
        title: "Sonic Healthcare USA",
        logo: "/assets/aidbox/use-cases/sonic.svg",
        logoWidth: 140,
        tags: ["Laboratories"],
        description:
          "Sonic Healthcare USA partners with Health Samurai to deploy Aidbox FHIR as a centralized Master Patient Index, ensuring precise identity matching, seamless data sharing, and a future-proof infrastructure across its nationwide lab network.",
      },
    ],
  },
  {
    id: "cds",
    label: "CDS Modules",
    image: "/assets/aidbox/use-cases/cds.svg",
    cards: [
      {
        title: "Prenosis",
        logo: "/assets/aidbox/use-cases/prenosis.webp",
        logoWidth: 140,
        tags: ["AI Diagnostic"],
        description:
          "Aidbox FHIR backend powers Immunix™, the first FDA-cleared AI/ML tool for sepsis prediction, enabling real-time data processing, and seamless integration with Epic EHR.",
      },
      {
        title: "Keebler",
        logo: "/assets/aidbox/use-cases/keebler.png",
        logoWidth: 50,
        tags: ["Value-Based Care", "Risk Management Automation"],
        description:
          "Aidbox powers Keebler Health's AI-native risk management automation, enabling real-time FHIR data processing, seamless EMR integration, and accurate detection of undocumented conditions for value-based care.",
      },
    ],
  },
  {
    id: "phr",
    label: "Portals & PHRs",
    image: "/assets/aidbox/use-cases/phr.svg",
    cards: [
      {
        title: "Patients Know Best",
        logo: "/assets/aidbox/use-cases/pkb.png",
        logoWidth: 100,
        tags: ["Personal Health Record", "NHS"],
        description:
          "Patients Know Best adopts Aidbox FHIR and Form Builder, enhancing its 17 million-record PHR platform and UK interoperability.",
      },
    ],
  },
  {
    id: "ehr",
    label: "EHR",
    image: "/assets/aidbox/use-cases/ehr.svg",
    cards: [
      {
        title: "Firenote",
        logo: "/assets/aidbox/use-cases/firenote.png",
        logoWidth: 80,
        tags: ["Hospice EMR"],
        description:
          "Firenote builds its hospice EMR on Aidbox FHIR, launching twice as fast with a two-engineer team and now powering clinical charting, care plans, e-Rx, scheduling, and billing for 100+ clients.",
      },
      {
        title: "BestNotes",
        logo: "/assets/aidbox/use-cases/bestnotes.png",
        logoWidth: 120,
        tags: ["HIPAA", "CARF"],
        description:
          "Aidbox's multi-tenant FHIR engine powers BestNotes' behavioral-health EHR, modernizing it into a cloud-native SaaS with custom templates, full regulatory compliance, and automated workflows.",
      },
    ],
  },
];
