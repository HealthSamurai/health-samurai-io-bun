/**
 * Bento grid component for showcasing products/features
 * Based on Tailwind UI bento template
 */

export type BentoItem = {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  image?: string;
  icon?: string;
  iconSrc?: string;
  tags?: string[];
};

export type BentoProps = {
  heading?: string;
  tagline?: string;
  title: string;
  items: BentoItem[];
};

function BentoCard({
  item,
  className = "",
  roundedClass = "",
}: {
  item: BentoItem;
  className?: string;
  roundedClass?: string;
}): string {
  // Check if the link is external (starts with http:// or https://)
  const isExternalLink = item.href.startsWith("http://") || item.href.startsWith("https://");

  return (
    <a
      href={item.href}
      class={`group relative block ${className} transition-all duration-200`}
      rel={isExternalLink ? "nofollow" : undefined}
      target={isExternalLink ? "_blank" : undefined}
    >
      <div
        class={`relative flex h-full flex-col rounded-lg bg-gray-100 p-6 transition-colors duration-200 group-hover:bg-[rgba(234,74,53,0.1)] ${roundedClass}`}
      >
        {/* Arrow - hidden by default, shown on hover */}
        <div class="absolute top-8 right-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0078125" y="0.0839844" width="33.9411" height="33.9411" rx="16.9706" fill="white" />
            <path d="M8.49309 17.0544L25.4637 17.0544M25.4637 17.0544L19.8068 22.7113M25.4637 17.0544L19.8068 11.3976" stroke="#EA4A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        {/* Icon header - icon above title */}
        <div class="mb-4">
          <div class="mb-3">
            {item.iconSrc && (
              <img src={item.iconSrc} alt={item.title} class="w-20 h-20" />
            )}
            {item.icon && !item.iconSrc && (
              <span class="w-20 h-20 text-primary flex items-center justify-center">
                {item.icon}
              </span>
            )}
          </div>
          <div class="text-lg font-semibold tracking-tight text-gray-950">
            {item.title}
          </div>
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div class="mb-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p class="text-sm/6 text-gray-600 flex-1">
          {item.description}
        </p>
      </div>
    </a>
  );
}

export function Bento({ heading, tagline, title, items }: BentoProps): string {
  // 4-column layout: first item double width, rest single
  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = items.slice(0, 8);

  return (
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {heading && (
          <h1 class="text-center text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-16">
            {heading}
          </h1>
        )}
        {tagline && (
          <div class="text-base/7 font-semibold text-primary text-center">{tagline}</div>
        )}
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl text-center">
          {title}
        </p>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* First row: first item double width + 2 single */}
          {first && (
            <BentoCard
              item={first}
              className="sm:col-span-2"
              roundedClass="max-lg:rounded-t-4xl lg:rounded-tl-4xl"
            />
          )}
          {second && (
            <BentoCard
              item={second}
              className=""
              roundedClass=""
            />
          )}
          {third && (
            <BentoCard
              item={third}
              className=""
              roundedClass="lg:rounded-tr-4xl"
            />
          )}

          {/* Second row: 4 single cards */}
          {fourth && (
            <BentoCard
              item={fourth}
              className=""
              roundedClass="lg:rounded-bl-4xl"
            />
          )}
          {fifth && (
            <BentoCard item={fifth} className="" roundedClass="" />
          )}
          {sixth && (
            <BentoCard item={sixth} className="" roundedClass="" />
          )}
          {seventh && (
            <BentoCard
              item={seventh}
              className=""
              roundedClass="max-lg:rounded-b-4xl lg:rounded-br-4xl"
            />
          )}
        </div>

        {/* Show remaining items as simple cards if more than 7 */}
        {items.length > 7 && (
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.slice(7).map((item) => (
              <a
                href={item.href}
                class="group relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow"
              >
                <div class="flex items-center gap-4">
                  {item.iconSrc && (
                    <img src={item.iconSrc} alt={item.title} class="size-8" />
                  )}
                  {item.icon && !item.iconSrc && (
                    <span class="text-primary">{item.icon}</span>
                  )}
                  <div>
                    <div class="font-semibold text-gray-950 group-hover:text-primary">
                      {item.title}
                    </div>
                    <p class="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
