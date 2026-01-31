import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Services",
  description: "Professional services from Health Samurai - FHIR consulting, custom development, integration, and training.",
};

const services = [
  {
    title: "FHIR Consulting",
    description: "Expert guidance on FHIR implementation, data modeling, and healthcare interoperability strategy.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`,
  },
  {
    title: "Custom Development",
    description: "Build custom healthcare applications, integrations, and workflows on top of the Aidbox platform.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
  },
  {
    title: "System Integration",
    description: "Connect your existing systems with FHIR APIs - EHRs, labs, pharmacies, payers, and more.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
  },
  {
    title: "Training & Workshops",
    description: "Hands-on training for your team on FHIR, Aidbox, and healthcare data standards.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
  {
    title: "Compliance & Certification",
    description: "Get help with ONC certification, HIPAA compliance, and regulatory requirements.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring, and maintenance for your Aidbox deployments.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-8 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>`,
  },
];

export default function ServicesPage(): string {
  return (
    <Fragment>
      <Hero
        title="Professional Services"
        description="Expert help to accelerate your healthcare interoperability projects. From strategy to implementation."
        primaryCta={{ label: "Contact Us", href: "#contact" }}
        secondaryCta={{ label: "View Services", href: "#services" }}
      />

      <section id="services" class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Our team of FHIR experts can help you at every stage of your project.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map(service => (
                <div class="flex flex-col">
                  <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                    {service.title}
                  </dt>
                  <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p class="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Work With Us</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              We've helped hundreds of healthcare organizations implement FHIR successfully.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">Deep FHIR Expertise</h3>
                <p class="mt-4 text-gray-600">Our team includes HL7 FHIR contributors and experts with years of implementation experience.</p>
              </div>
              <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">Proven Track Record</h3>
                <p class="mt-4 text-gray-600">We've delivered successful projects for startups, enterprises, and government organizations.</p>
              </div>
              <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">End-to-End Support</h3>
                <p class="mt-4 text-gray-600">From initial architecture to production deployment and ongoing maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactForm
          title="Let's discuss your project"
          description="Tell us about your healthcare interoperability needs and we'll get back to you with how we can help."
          page="/services"
        />
      </div>
    </Fragment>
  );
}
