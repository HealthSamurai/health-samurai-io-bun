import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";

export const metadata = {
  title: "Team",
  description: "Meet the Health Samurai team - FHIR experts building the future of healthcare interoperability.",
};

export default function TeamPage(): string {
  return (
    <Fragment>
      <Hero
        title="Our Team"
        description="Meet the people behind Health Samurai - FHIR experts, engineers, and healthcare enthusiasts."
        primaryCta={{ label: "Join Us", href: "/careers" }}
        secondaryCta={{ label: "Contact", href: "/contacts" }}
      />

      <section class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Our leadership team brings decades of experience in healthcare technology and FHIR.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl">
            <p class="text-center text-gray-500">Team profiles coming soon.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
