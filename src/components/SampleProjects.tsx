/**
 * Sample Projects section
 * "Get hands-on with sample projects built on Aidbox"
 */

type SampleProject = {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  href: string;
};

export type SampleProjectsProps = {
  title: string;
  projects: SampleProject[];
};

function ProjectCard({ project }: { project: SampleProject }): string {
  return `
    <a
      href="${project.href}"
      target="_blank"
      rel="nofollow"
      class="group relative block transition-all duration-200"
    >
      <div class="relative flex h-full flex-col rounded-lg bg-gray-100 p-6 transition-colors duration-200 group-hover:bg-[rgba(234,74,53,0.1)]">
        <div class="absolute top-6 right-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0078125" y="0.0839844" width="33.9411" height="33.9411" rx="16.9706" fill="white" />
            <path d="M8.49309 17.0544L25.4637 17.0544M25.4637 17.0544L19.8068 22.7113M25.4637 17.0544L19.8068 11.3976" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div class="mb-4">
          <div class="mb-3">
            <img
              src="${project.icon}"
              alt="${project.title}"
              class="w-12 h-12"
              loading="lazy"
            />
          </div>
          <h3 class="text-lg font-semibold tracking-tight text-gray-950">${project.title}</h3>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          ${project.description}
        </p>

        <div class="flex flex-wrap gap-2">
          ${project.tags.map((tag) => `<span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">${tag}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

export function SampleProjects({ title, projects }: SampleProjectsProps): string {
  return `
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ${title}
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${projects.map((project) => ProjectCard({ project })).join("")}
        </div>
      </div>
    </section>
  `;
}

// Pre-configured data for Aidbox sample projects
export const aidboxSampleProjects: SampleProject[] = [
  {
    title: "HL7v2 Integration",
    description: "Bidirectional HL7v2 ↔ FHIR conversion with web UI. Supports ADT, ORU, and BAR messages with MLLP server and code mapping.",
    icon: "/assets/aidbox/samples/hl7v2.svg",
    tags: ["HL7v2", "Integration"],
    href: "https://github.com/Aidbox/aidbox-hl7v2-example",
  },
  {
    title: "Integration Pipeline",
    description: "Python framework for integrating Aidbox with external systems.",
    icon: "/assets/aidbox/samples/integration-pipeline.svg",
    tags: ["CDRs & Data Platforms"],
    href: "https://github.com/Aidbox/integration-pipeline/tree/main",
  },
  {
    title: "FHIR Analytics",
    description: "FHIR data analytics in Aidbox using SQL-on-FHIR.",
    icon: "/assets/aidbox/samples/fhir-analytics.svg",
    tags: ["Data Analytics"],
    href: "https://github.com/Aidbox/examples/tree/main/aidbox-integrations/fhir-analytics",
  },
  {
    title: "Open-source EMR",
    description: "FHIR-based EMR demo app built with Aidbox.",
    icon: "/assets/aidbox/samples/emr.svg",
    tags: ["EMR & Clinical Apps"],
    href: "https://github.com/Aidbox/examples/tree/main/aidbox-integrations/BedaEmr",
  },
];
