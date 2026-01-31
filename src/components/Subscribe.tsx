/**
 * Newsletter subscription component
 * Based on Tailwind UI digest-subscribe template
 */

export type SubscribeProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  formAction?: string;
};

export function Subscribe({
  title = "Want product updates? Sign up for our newsletter.",
  description = "We care about your data. Read our",
  buttonText = "Subscribe",
  formAction = "/api/subscribe",
}: SubscribeProps): string {
  return (
    <div class="bg-white py-16 sm:py-24">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 class="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl xl:flex-auto">
            {title}
          </h2>
          <form action={formAction} method="POST" class="w-full max-w-md">
            <div class="flex gap-x-4">
              <label for="subscribe-email" class="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                autocomplete="email"
                class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 border border-white/10"
              />
              <button
                type="submit"
                class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {buttonText}
              </button>
            </div>
            <p class="mt-4 text-sm/6 text-gray-300">
              {description}{" "}
              <a
                href="/privacy"
                class="font-semibold whitespace-nowrap text-white hover:text-gray-100"
              >
                privacy policy
              </a>
              .
            </p>
          </form>
          {/* Background gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2"
          >
            <circle
              r="512"
              cx="512"
              cy="512"
              fill="url(#subscribe-gradient)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient
                id="subscribe-gradient"
                r="1"
                cx="0"
                cy="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#c9362b" />
                <stop offset="1" stop-color="#c9362b" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
