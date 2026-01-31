export type TrustedLogo = {
  src: string;
  alt: string;
};

export type TrustedProps = {
  logos: TrustedLogo[];
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function Trusted({
  logos,
  tagline = "Trusted by healthcare organizations worldwide.",
  ctaText = "Read customer stories",
  ctaHref = "/casestudies",
}: TrustedProps): string {
  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-10">
          Trusted by leading healthcare organizations
        </p>

        {/* Marquee container */}
        <div class="relative overflow-hidden">
          {/* Gradient masks */}
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling logos */}
          <div class="flex animate-marquee">
            {allLogos.map((logo) => (
              <div class="flex-shrink-0 px-8">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="120"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  class="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div class="mt-16 flex justify-center">
          <p class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span class="hidden md:inline">{tagline} </span>
            <a href={ctaHref} class="font-semibold text-primary hover:text-primary-dark">
              <span aria-hidden="true" class="absolute inset-0" />
              {ctaText} <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
