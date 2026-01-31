import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";

export const metadata = {
  title: "Blog",
  description: "Articles, tutorials, and news about FHIR, healthcare interoperability, and Health Samurai products.",
};

export default function BlogPage(): string {
  return (
    <Fragment>
      <Hero
        title="Blog"
        description="Articles, tutorials, and news about FHIR, healthcare interoperability, and our products."
        primaryCta={{ label: "Subscribe", href: "#subscribe" }}
        secondaryCta={{ label: "All Articles", href: "#articles" }}
      />

      <section id="articles" class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Articles</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Stay up to date with the latest in FHIR and healthcare technology.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl">
            <p class="text-center text-gray-500">Blog posts coming soon.</p>
          </div>
        </div>
      </section>

      <section id="subscribe" class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Subscribe to our newsletter</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Get the latest articles and updates delivered to your inbox.
            </p>
            <form action="/api/subscribe" method="POST" class="mt-10 flex gap-x-4 justify-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
              <button
                type="submit"
                class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
