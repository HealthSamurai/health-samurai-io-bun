import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Home",
  description: "Health Samurai - FHIR solutions for healthcare",
};

export default function HomePage(): string {
  return (
    <Fragment>
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Health Samurai
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Building the future of healthcare interoperability with FHIR.
          </p>
          <p class="text-sm text-primary mb-4">
            Powered by FHIR R4 and R5
          </p>
          <a
            href="/about"
            class="inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Learn more
          </a>
        </div>
      </section>
    </Fragment>
  );
}
