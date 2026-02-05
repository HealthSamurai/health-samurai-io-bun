import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "About",
  description: "About Health Samurai",
};

export default function AboutPage(): string {
  return (
    <Fragment>
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </div>
          <p class="text-lg text-gray-600">
            Health Samurai is a healthcare technology company focused on FHIR interoperability solutions.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
