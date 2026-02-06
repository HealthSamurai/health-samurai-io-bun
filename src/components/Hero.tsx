type HeroProps = {
  title: string;
  description: string;
  productName?: {
    prefix: string;
    suffix: string;
  };
  primaryCta?: {
    label: string;
    href?: string;
    modalId?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
    poster?: string;
  };
};

export function Hero({ title, description, productName, primaryCta, secondaryCta, image, video }: HeroProps): string {
  return (
    <div class="bg-white">
      <div class="relative isolate pt-14">
        {/* Top gradient blob */}
        <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-light to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div class={productName ? "pt-10 pb-24 sm:pt-14 sm:pb-32 lg:pb-40" : "py-24 sm:py-32 lg:pb-40"}>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              {productName && (
                <p class="text-lg font-extrabold tracking-wide uppercase mb-6">
                  <span class="text-primary">{productName.prefix}</span>
                  <span class="text-gray-900">{productName.suffix}</span>
                </p>
              )}
              <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                {title}
              </h1>
              <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {description}
              </p>
              {(primaryCta || secondaryCta) && (
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  {primaryCta && (
                    primaryCta.modalId ? (
                      <button
                        type="button"
                        onclick={`document.getElementById('${primaryCta.modalId}').showModal()`}
                        class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {primaryCta.label}
                      </button>
                    ) : (
                      <a
                        href={primaryCta.href}
                        class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {primaryCta.label}
                      </a>
                    )
                  )}
                  {secondaryCta && (
                    <a href={secondaryCta.href} class="text-sm/6 font-semibold text-gray-900">
                      {secondaryCta.label} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {(image || video) && (
              <div class="mt-16 sm:mt-24 flex justify-center">
                <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 w-[60%]">
                  {video ? (
                    <video
                      src={video.src}
                      poster={video.poster}
                      autoplay
                      loop
                      muted
                      playsinline
                      class="rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                    />
                  ) : image ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      width="1216"
                      height="684"
                      loading="lazy"
                      decoding="async"
                      class="rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 w-full h-auto"
                    />
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom gradient blob */}
        <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-light to-primary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
