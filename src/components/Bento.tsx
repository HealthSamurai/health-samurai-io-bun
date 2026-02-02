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
  return (
    <div class={`relative ${className}`}>
      <div class={`absolute inset-0 rounded-lg bg-white ${roundedClass}`} />
      <div
        class={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${roundedClass.replace("rounded-", "rounded-[calc(2rem+1px)] lg:rounded-")}`}
      >
        {item.image ? (
          <img src={item.image} alt="" class="h-80 object-cover object-left" />
        ) : (
          <div class="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            {item.iconSrc && (
              <img src={item.iconSrc} alt={item.title} class="size-16" />
            )}
            {item.icon && !item.iconSrc && (
              <span class="size-16 text-primary">
                {item.icon.replace('class="size-6', 'class="size-16')}
              </span>
            )}
          </div>
        )}
        <div class="p-8 pt-4 flex-1 flex flex-col">
          {item.subtitle && (
            <h3 class="text-sm/4 font-semibold text-primary">{item.subtitle}</h3>
          )}
          <p class={`${item.subtitle ? "mt-2" : ""} text-lg font-medium tracking-tight text-gray-950`}>
            {item.title}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div class="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p class="mt-3 max-w-lg text-sm/6 text-gray-600 flex-1">
            {item.description}
          </p>
          <a
            href={item.href}
            class="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div
        class={`pointer-events-none absolute inset-0 rounded-lg shadow-sm ring-1 ring-black/5 ${roundedClass}`}
      />
    </div>
  );
}

export function Bento({ tagline, title, items }: BentoProps): string {
  // 4-column layout: first item double width, rest single
  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = items.slice(0, 8);

  return (
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {tagline && (
          <h2 class="text-base/7 font-semibold text-primary">{tagline}</h2>
        )}
        <p class="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
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
                    <h3 class="font-semibold text-gray-950 group-hover:text-primary">
                      {item.title}
                    </h3>
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
