/**
 * Feature grid component for "What is Aidbox" section
 * 7 cards with icons, tags, and descriptions
 */

export type FeatureCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  tags: string[];
};

export type FeatureGridProps = {
  title: string;
  features: FeatureCard[];
  ctaText?: string;
  ctaHref?: string;
};

function FeatureCardItem({ feature }: { feature: FeatureCard }): string {
  return (
    <a
      href={feature.href}
      target="_blank"
      class="group relative flex flex-col bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary/20 transition-all duration-200"
    >
      <div class="flex items-center gap-4 mb-4">
        <img
          src={feature.icon}
          alt={feature.title}
          class="size-12"
          loading="lazy"
        />
        <div class="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {feature.title}
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        {feature.tags.map((tag) => (
          <span class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            {tag}
          </span>
        ))}
      </div>
      <p class="text-sm text-gray-600 leading-relaxed flex-1">
        {feature.description}
      </p>
      <div class="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

export function FeatureGrid({
  title,
  features,
  ctaText,
  ctaHref,
}: FeatureGridProps): string {
  return (
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => FeatureCardItem({ feature }))}
        </div>
        {ctaText && ctaHref && (
          <div class="mt-12 text-center">
            <a
              href={ctaHref}
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              {ctaText} <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
