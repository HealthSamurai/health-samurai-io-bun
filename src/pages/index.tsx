import { Fragment } from "../lib/jsx-runtime";
import { products } from "../data/products";
import { company } from "../data/company";
import { Bento } from "../components/Bento";
import type { BentoItem } from "../components/Bento";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Home",
  description: "Health Samurai - FHIR solutions for healthcare",
};

// Convert products to bento items
const bentoItems: BentoItem[] = products.map((p) => ({
  title: p.label,
  subtitle: "Product",
  description: p.description,
  href: p.href,
  icon: p.icon,
}));

export default function HomePage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <div class="relative isolate overflow-hidden bg-white">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <p class="text-base/7 font-semibold text-primary">
              Since {company.founded}
            </p>
            <h1 class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              FHIR-native healthcare platform
            </h1>
            <p class="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
              {company.description}
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="/fhir-server"
                class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore Aidbox
              </a>
              <a
                href="/about"
                class="text-sm/6 font-semibold text-gray-900 hover:text-primary"
              >
                About us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Background gradient */}
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-light opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
      </div>

      {/* Products Bento Grid */}
      <Bento
        tagline="Our Products"
        title="Everything you need to build healthcare applications"
        items={bentoItems}
      />

      {/* Stats Section */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Trusted by healthcare innovators worldwide
              </h2>
              <p class="mt-4 text-lg text-gray-600">
                Join the growing community of healthcare organizations building with FHIR
              </p>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col bg-gray-50 p-8">
                <dt class="text-sm/6 font-semibold text-gray-600">Years of experience</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-primary">
                  {new Date().getFullYear() - company.founded}+
                </dd>
              </div>
              <div class="flex flex-col bg-gray-50 p-8">
                <dt class="text-sm/6 font-semibold text-gray-600">Healthcare clients</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-primary">
                  100+
                </dd>
              </div>
              <div class="flex flex-col bg-gray-50 p-8">
                <dt class="text-sm/6 font-semibold text-gray-600">FHIR resources managed</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-primary">
                  1B+
                </dd>
              </div>
              <div class="flex flex-col bg-gray-50 p-8">
                <dt class="text-sm/6 font-semibold text-gray-600">Countries served</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-primary">
                  30+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div class="bg-gray-50 py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {company.certifications.map((cert) => (
              <div class="flex items-center gap-4">
                <img src={cert.logo} alt={cert.name} class="h-16 w-16 object-contain" width="64" height="64" loading="lazy" />
                <div>
                  <p class="font-semibold text-gray-900">{cert.name}</p>
                  <p class="text-sm text-gray-600">Certified</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm
        title="Get in touch"
        description="Have questions about our FHIR platform? We'd love to hear from you."
        page="/"
      />
    </Fragment>
  );
}
