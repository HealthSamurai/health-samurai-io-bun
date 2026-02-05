import { Fragment } from "../lib/jsx-runtime";
import { products } from "../data/products";

export const metadata = {
  title: "Documentation",
  description: "Documentation and guides for Health Samurai products - Aidbox, Smartbox, Formbox, and more.",
};

const docSections = [
  {
    title: "Getting Started",
    description: "Quick start guides to get you up and running.",
    links: [
      { label: "Introduction to Aidbox", href: "https://docs.aidbox.app/getting-started" },
      { label: "Run Aidbox Locally", href: "https://docs.aidbox.app/getting-started/run-aidbox-locally" },
      { label: "Aidbox Configuration", href: "https://docs.aidbox.app/aidbox-configuration" },
    ],
  },
  {
    title: "FHIR API",
    description: "Learn how to use the FHIR REST API.",
    links: [
      { label: "CRUD Operations", href: "https://docs.aidbox.app/api-1/api/crud-1" },
      { label: "Search", href: "https://docs.aidbox.app/api-1/fhir-api/search-1" },
      { label: "Transactions", href: "https://docs.aidbox.app/api-1/fhir-api/transaction" },
    ],
  },
  {
    title: "Security",
    description: "Authentication, authorization, and access control.",
    links: [
      { label: "Access Control Overview", href: "https://docs.aidbox.app/security-and-access-control/security" },
      { label: "Auth Methods", href: "https://docs.aidbox.app/security-and-access-control/auth" },
      { label: "Access Policies", href: "https://docs.aidbox.app/security-and-access-control/access-control" },
    ],
  },
  {
    title: "Modules",
    description: "Explore Aidbox modules and extensions.",
    links: [
      { label: "Aidbox Forms", href: "https://docs.aidbox.app/modules/aidbox-forms" },
      { label: "Terminology", href: "https://docs.aidbox.app/modules/terminology" },
      { label: "SMART on FHIR", href: "https://docs.aidbox.app/modules/smartbox" },
    ],
  },
];

export default function DocsPage(): string {
  return (
    <Fragment>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <div class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Documentation</div>
            <p class="mt-4 text-lg text-gray-600">
              Everything you need to build with Health Samurai products.
            </p>
            <div class="mt-10">
              <a
                href="https://docs.aidbox.app"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Go to Full Documentation →
              </a>
            </div>
          </div>

          {/* Product Quick Links */}
          <div class="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div class="text-2xl font-bold tracking-tight text-gray-900">Products</div>
            <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map(product => (
                <a
                  href={product.href}
                  class="group relative flex items-center gap-x-4 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <span>{product.icon}</span>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-900">{product.label}</span>
                    <p class="mt-1 text-sm text-gray-600">{product.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Doc Sections */}
          <div class="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {docSections.map(section => (
                <div class="rounded-2xl border border-gray-200 p-8">
                  <div class="text-lg font-semibold text-gray-900">{section.title}</div>
                  <p class="mt-2 text-sm text-gray-600">{section.description}</p>
                  <ul class="mt-6 space-y-3">
                    {section.links.map(link => (
                      <li>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-sm font-medium text-primary hover:text-primary-dark"
                        >
                          {link.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
