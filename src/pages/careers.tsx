import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Careers",
  description: "Join Health Samurai and help build the future of healthcare interoperability with FHIR.",
};

const benefits = [
  {
    title: "Remote First",
    description: "Work from anywhere in the world. We're a distributed team across multiple time zones.",
  },
  {
    title: "Cutting-Edge Tech",
    description: "Work with FHIR, Clojure, PostgreSQL, and modern cloud technologies.",
  },
  {
    title: "Healthcare Impact",
    description: "Your work directly improves healthcare systems and patient outcomes worldwide.",
  },
  {
    title: "Learning & Growth",
    description: "Conference budgets, learning resources, and opportunities to contribute to open source.",
  },
];

export default function CareersPage(): string {
  return (
    <Fragment>
      <Hero
        title="Join Our Team"
        description="Help us build the future of healthcare interoperability. We're always looking for talented people who are passionate about FHIR and healthcare technology."
        primaryCta={{ label: "View Openings", href: "#openings" }}
        secondaryCta={{ label: "Our Culture", href: "#culture" }}
      />

      <section id="culture" class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Health Samurai?</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              We're building tools that make healthcare data interoperable. Here's what we offer.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {benefits.map(benefit => (
                <div class="rounded-2xl border border-gray-200 p-8">
                  <h3 class="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p class="mt-4 text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="openings" class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Positions</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              We're always looking for talented people. Check out our current openings.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl">
            <p class="text-center text-gray-500">No open positions at the moment. Send us your resume anyway!</p>
          </div>
        </div>
      </section>

      <ContactForm
        title="Interested in joining?"
        description="Send us your resume and tell us about yourself. We're always happy to hear from talented people."
        page="/careers"
      />
    </Fragment>
  );
}
