/**
 * Deployment section
 * "Deploy Aidbox your way"
 */

type DeploymentOption = {
  icon: string;
  title: string;
  description: string;
};

export type DeploymentProps = {
  title: string;
  subtitle: string;
  options: DeploymentOption[];
  diagramSrc?: string;
};

function DeploymentCard({ option }: { option: DeploymentOption }): string {
  return `
    <div class="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200">
      <img
        src="${option.icon}"
        alt="${option.title}"
        class="w-11 h-11"
        loading="lazy"
      />
      <div class="text-xl font-semibold text-gray-900">${option.title}</div>
      <p class="text-gray-600 text-base">${option.description}</p>
    </div>
  `;
}

export function Deployment({ title, subtitle, options, diagramSrc }: DeploymentProps): string {
  return `
    <section class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto text-center mb-16">
          <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            ${title}
          </div>
          <p class="text-lg text-gray-600">
            ${subtitle}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            ${options.map((option) => DeploymentCard({ option })).join("")}
          </div>

          ${diagramSrc ? `
            <div class="flex items-center justify-center">
              <img
                src="${diagramSrc}"
                alt="Aidbox deployment architecture"
                class="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          ` : ""}
        </div>
      </div>
    </section>
  `;
}

// Pre-configured data for Aidbox deployment options
export const aidboxDeploymentOptions: DeploymentOption[] = [
  {
    icon: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e8235a3a841ff0ca34dca_tabler_cloud-lock.svg",
    title: "Managed Cloud",
    description: "We host and maintain everything for you",
  },
  {
    icon: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e823631fe2d402be7fbca_hugeicons_laptop-cloud.svg",
    title: "Cloud Platform",
    description: "Deploy on AWS, Azure, GCP, or Alibaba",
  },
  {
    icon: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686e82368145af9cd456809c_arcticons_serverbox.svg",
    title: "On-Premise",
    description: "Install in your own data center with full control",
  },
];
