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
    <div class="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 flex flex-col h-full">
      <div class="flex items-center gap-4 mb-4">
        <img
          src="${project.icon}"
          alt="${project.title}"
          class="size-12"
          loading="lazy"
        />
        <h3 class="text-lg font-semibold text-gray-900">${project.title}</h3>
      </div>
      <p class="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
        ${project.description}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tags.map((tag) => `<span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">${tag}</span>`).join("")}
      </div>
      <a
        href="${project.href}"
        target="_blank"
        class="text-sm font-semibold text-primary hover:text-primary-dark"
      >
        Github →
      </a>
    </div>
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
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${projects.map((project) => ProjectCard({ project })).join("")}
        </div>
      </div>
    </section>
  `;
}

// Pre-configured data for Aidbox sample projects
export const aidboxSampleProjects: SampleProject[] = [
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
