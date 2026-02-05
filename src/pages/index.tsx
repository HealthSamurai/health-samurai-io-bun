import { Fragment } from "../lib/jsx-runtime";
import { products } from "../data/products";
import { company } from "../data/company";
import { Bento } from "../components/Bento";
import type { BentoItem } from "../components/Bento";
import { ContactForm } from "../components/ContactForm";
import { Trusted } from "../components/Trusted";
import type { TrustedLogo } from "../components/Trusted";

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

const stories = [
  {
    name: "Prenosis",
    href: "https://www.health-samurai.io/case-study/prenosis-develops-immunix-for-precision-medicine-with-aidbox",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/677c08fe2fbefa57cee94009_Prenosis_logo_328_49.png",
    logoAlt: "Prenosis logo",
    summary:
      "How an artificial intelligence company, enabling precision medicine in acute care, built and launched the first FDA-authorized AI/ML sepsis diagnosis and prediction tool using the Aidbox FHIR platform.",
    keyResults: [
      "Obtained FDA marketing authorization as a Software as Medical Device (SaMD)",
      "Cut development time by 50%",
      "Integrated with 3 major hospitals using Epic EHR",
      "75K+ patients, 200K+ encounters, and 6M+ observations processed",
      "5,000+ plasma samples managed and calculated ImmunoScores for nearly 1,200 study participants",
    ],
    tags: [
      "AI diagnostic tool",
      "Dataset",
      "FHIR API",
      "Sepsis ImmunoScore™",
      "HL7 FHIR",
      "AI/ML tool",
    ],
  },
  {
    name: "Narus Health",
    href: "https://www.health-samurai.io/case-study/narushealth",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d15cbbc892a21c9ded6efa_naruslucent-removebg-preview%201.png",
    logoAlt: "Narus Health logo",
    summary:
      "How Narus Health, a Lucent Health company, has developed an integrated care management platform on top of the Aidbox FHIR backend, supporting patient care while enhancing outcomes and the recovery process.",
    tags: [
      "Care Management System",
      "Care Plan",
      "HL7 FHIR",
      "Billing",
      "IGAO",
    ],
  },
  {
    name: "Deep 6 AI",
    href: "https://www.health-samurai.io/case-study/how-deep-6-ai-enhanced-ai-pipeline-performance-for-clinical-trial-recruitment-with-aidbox",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d1516b8c4a7141698cd721_f32fb6af-d4cf-440c-bf46-b0b3c48e9532-1559840009994%201.png",
    logoAlt: "Deep 6 AI logo",
    summary:
      "How a leader in precision research software enhanced its AI pipeline for clinical trial recruitment with the Aidbox FHIR server.",
    keyResults: [
      "Initial data load times reduced by 50%",
      "90% reduction in data validation errors",
      "Real-time visibility into data processing status",
    ],
    tags: [
      "AI/NLP platform",
      "PostgreSQL FHIR Storage Standardized FHIR APIs",
      "Subscriptions",
      "Real-Time and Dashboards",
    ],
  },
  {
    name: "4medica",
    href: "https://www.health-samurai.io/case-study/4medica-modernizes-clinical-data-infrastructure-with-aidbox",
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67c7225871fabab5d9c6070c_4medica-logo.png",
    logoAlt: "4medica logo",
    summary:
      "How a leader in healthcare data management modernizes clinical data infrastructure with Aidbox, powering next-generation healthcare solutions.",
    keyResults: [
      "4-week migration time",
      "70% performance boost",
      "Upgrade from FHIR STU3 to R4",
      "Native SQL capabilities for advanced analytics and reporting",
    ],
    tags: [
      "Clinical Viewer",
      "Patient Portal",
      "HL7 FHIR",
      "US Core 3.1.1",
      "Bulk API",
      "FHIR Storage",
      "Profiling",
      "SaaS",
    ],
  },
];

const trustedLogos: TrustedLogo[] = [
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/64ba99d2e3fe0c7e42265e5d_innovaccer-logo-black.svg",
    alt: "Innovaccer Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6602b888409299ed4eef694b_Frame%20427319224%20(1).webp",
    alt: "Coda Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811f756ed6ce3acce94256a_Duodecim_idFuVC2K5H_1.png",
    alt: "Duodecim Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4a2c54d0ea864cb16_Logo_PatientsCo%20HiRes%20(1)%202.webp",
    alt: "Patients Know Best Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6811ffa3bd8873ca1d79e495_firenote-logo-reverse%202.png",
    alt: "Firenote Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb4d9547ec7a6917d3c_Healthie-logo%201.webp",
    alt: "Healthie Company logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb49aaba578b2bb7cf9_naruslucent-removebg-preview%201.webp",
    alt: "Lucent Health Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65426115ed1b936bef809059_prenosis-logo-color%202.webp",
    alt: "Prenosis Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/65425eb477c566d9cea62f52_BestNotes_Logo-to-use_1-768x168%201.webp",
    alt: "Bestnotes Company Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6542824da3496e9497e73349_Frame%20427319190(2).webp",
    alt: "Lucet Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png",
    alt: "novellia Logo",
  },
];

export default function HomePage(): string {
  return (
    <Fragment>
      {/* Products Bento Grid */}
      <Bento
        heading="Let's implement your ideas on FHIR"
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

      {/* Mission Text */}
      <div class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-6 lg:px-8">
          <div class="space-y-6 text-lg text-gray-600">
            <p>
              At Health Samurai, we aim to transform care delivery with
              exceptional software. We believe that an open, connected
              healthcare application ecosystem will drive higher quality care
              and lower costs. To help make this happen, we provide a
              comprehensive{" "}
              <a href="/fhir-server" class="text-primary hover:text-primary-dark">
                FHIR server
              </a>{" "}
              to EHR and EMR systems, universities for educational purposes,
              startups, telemedicine platforms, and data platforms. Our
              Analytics on FHIR further enhances data handling capabilities.
            </p>
            <p>
              Since its inception, we have been part of the FHIR movement and
              leverage the Aidbox to empower our clients with the right tools
              and data. This allows for the creation of life-changing
              technologies and ensures healthcare data is managed correctly. By
              equipping people with these resources, we believe amazing things
              will happen.
            </p>
            <p>
              That’s how we believe we can change healthcare for good, and
              we’re committed to making our vision a reality daily. Our{" "}
              <a href="/fhir-server" class="text-primary hover:text-primary-dark">
                FHIR server
              </a>{" "}
              supports diverse healthcare needs, ensuring seamless integration
              and interoperability across various platforms and applications.
            </p>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our stories
            </div>
            <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {stories.map((story) => (
                <a
                  href={story.href}
                  target="_blank"
                  rel="nofollow"
                  class="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={story.logo}
                    alt={story.logoAlt}
                    class="h-12 w-auto max-w-[200px] object-contain"
                    loading="lazy"
                  />
                  <div class="mt-6 text-2xl font-semibold text-gray-900">
                    {story.name}
                  </div>
                  <p class="mt-4 text-base text-gray-600">{story.summary}</p>
                  {story.keyResults ? (
                    <div class="mt-4">
                      <p class="text-sm font-semibold text-gray-900">
                        Key results:
                      </p>
                      <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                        {story.keyResults.map((result) => (
                          <li>{result}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div class="mt-6 flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted logos */}
      <Trusted
        logos={trustedLogos}
        tagline="Trusted by healthcare innovators worldwide."
        ctaText="Read customer stories"
        ctaHref="/casestudies"
      />

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
