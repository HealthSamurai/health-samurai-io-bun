import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Aidbox Pricing",
  description: "Flat pricing with no hidden fees.",
};

const CheckIcon = `<svg class="inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;

function FeatureRow(props: { feature: string; dev: boolean; base: boolean; enterprise: boolean }): string {
  const icon = (has: boolean) => has ? CheckIcon : `<span class="text-gray-300">-</span>`;
  return `<tr class="border-b border-gray-100">
    <td class="p-4 text-gray-900">${props.feature}</td>
    <td class="p-4 text-center ${props.dev ? 'text-green-600' : ''}">${icon(props.dev)}</td>
    <td class="p-4 text-center ${props.base ? 'text-green-600' : ''} bg-blue-50">${icon(props.base)}</td>
    <td class="p-4 text-center ${props.enterprise ? 'text-green-600' : ''}">${icon(props.enterprise)}</td>
  </tr>`;
}

export default function PricePage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Flat pricing with no hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="bg-gray-50 py-20" data-signals="{period: 'yearly'}">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pick Your Aidbox Plan
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto">
              Startup, regional, and volume discounts are available — reach out to learn more and find the plan that works best for you.
            </p>
          </div>

          {/* Period Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg border border-gray-300 p-1">
              <button
                className="px-8 py-3 rounded-md text-base font-medium transition-all"
                data-class:bg-primary="$period === 'yearly'"
                data-class:text-white="$period === 'yearly'"
                data-class:text-gray-600="$period !== 'yearly'"
                data-on:click="$period = 'yearly'"
              >
                Yearly
              </button>
              <button
                className="px-8 py-3 rounded-md text-base font-medium transition-all"
                data-class:bg-primary="$period === 'monthly'"
                data-class:text-white="$period === 'monthly'"
                data-class:text-gray-600="$period !== 'monthly'"
                data-on:click="$period = 'monthly'"
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-6 text-left font-bold text-base"></th>
                  <th className="p-6 text-center font-bold text-xl">Aidbox Dev</th>
                  <th className="p-6 text-center font-bold text-xl bg-blue-50">Aidbox Base</th>
                  <th className="p-6 text-center font-bold text-xl">Aidbox Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                ${FeatureRow({ feature: "FHIR Database", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "REST API, SQL & GraphQL", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "FHIR IGs and Custom Resources", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "User management & Access Control", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Integration toolkit (HL7 v2, C-CDA, X12)", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Access to SaaS Termbox", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Audit log", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "SQL on FHIR engine", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Aidbox administrative UI", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "SMART on FHIR", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Subscriptions", dev: true, base: true, enterprise: true })}
                ${FeatureRow({ feature: "Partitioning", dev: false, base: false, enterprise: true })}
                ${FeatureRow({ feature: "Smart search parameters", dev: false, base: false, enterprise: true })}
                ${FeatureRow({ feature: "CDC Connectors (Clickhouse, BigQuery, etc.)", dev: false, base: false, enterprise: true })}
                ${FeatureRow({ feature: "Read replica", dev: false, base: false, enterprise: true })}
                ${FeatureRow({ feature: "Multi-tenancy", dev: false, base: false, enterprise: true })}
                ${FeatureRow({ feature: "Protected health information allowed (HIPAA compliant)", dev: false, base: true, enterprise: true })}
                
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4 text-gray-900">Support included</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center bg-blue-50">Basic</td>
                  <td className="p-4 text-center">Basic</td>
                </tr>
                
                <tr className="bg-gray-50">
                  <td className="p-6 font-bold text-lg">Price</td>
                  <td className="p-6 text-center font-bold text-2xl">$0</td>
                  <td className="p-6 text-center font-bold text-2xl bg-blue-50">
                    <span data-show="$period === 'yearly'">from $19,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">from $1,900/month</span>
                  </td>
                  <td className="p-6 text-center font-bold text-2xl">Contact us</td>
                </tr>
                
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <a href="https://aidbox.app" className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                      Try now
                    </a>
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <a href="/contacts" className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
                      Schedule a demo
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="/contacts" className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                      Schedule a demo
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Support Options</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="p-4 text-left font-bold"></th>
                  <th className="p-4 text-center font-bold">Basic</th>
                  <th className="p-4 text-center font-bold">Professional</th>
                  <th className="p-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="p-4">Onboarding Video Call</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Private Chat & Bug Fixing</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                  <td className="p-4 text-center text-green-600">${CheckIcon}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">FHIR Guidance & New Terminologies</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">On-demand Video Calls</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center">12/year</td>
                  <td className="p-4 text-center">1/week</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">24/7 Support & Consultations</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                  <td className="p-4 text-center text-gray-300">-</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Response Times (Q&A / Blocking issues resolution)</td>
                  <td className="p-4 text-center">3 days/1 day</td>
                  <td className="p-4 text-center">2 days/8 hours</td>
                  <td className="p-4 text-center">1 day/4 hours</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-6 font-bold text-lg">Price</td>
                  <td className="p-6 text-center font-bold">$0</td>
                  <td className="p-6 text-center font-bold">
                    <span data-show="$period === 'yearly'">$25,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">$2,500/month</span>
                  </td>
                  <td className="p-6 text-center font-bold">Contact us</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Optional Modules */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Optional Modules</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="p-4 text-left font-bold">Module</th>
                  <th className="p-4 text-left font-bold">Description</th>
                  <th className="p-4 text-right font-bold">Price</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">Aidbox Forms</td>
                  <td className="p-4 text-gray-600">A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms.</td>
                  <td className="p-4 text-right font-bold whitespace-nowrap">
                    <span data-show="$period === 'yearly'">$12,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">$1,200/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">Aidbox MPI</td>
                  <td className="p-4 text-gray-600">A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations.</td>
                  <td className="p-4 text-right font-bold whitespace-nowrap">
                    <span data-show="$period === 'yearly'">From $15,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">From $1,500/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">Termbox (self-hosted)</td>
                  <td className="p-4 text-gray-600">A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm.</td>
                  <td className="p-4 text-right font-bold">Contact us</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">Aidbox eRx</td>
                  <td className="p-4 text-gray-600">A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification</td>
                  <td className="p-4 text-right font-bold whitespace-nowrap">
                    <span data-show="$period === 'yearly'">From $25,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">From $2,500/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">SMARTbox</td>
                  <td className="p-4 text-gray-600">ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management.</td>
                  <td className="p-4 text-right font-bold whitespace-nowrap">
                    <span data-show="$period === 'yearly'">$19,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">$1,900/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">C-CDA Converter</td>
                  <td className="p-4 text-gray-600">A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents.</td>
                  <td className="p-4 text-right font-bold whitespace-nowrap">
                    <span data-show="$period === 'yearly'">$8,000/year</span>
                    <span data-show="$period === 'monthly'" style="display: none">$800/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">Aidbox Billing</td>
                  <td className="p-4 text-gray-600">A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging.</td>
                  <td className="p-4 text-right font-bold">Contact us</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Services</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="p-4 text-left font-bold">Description</th>
                  <th className="p-4 text-right font-bold">Price</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="p-4">Automated Aidbox Deployment</td>
                  <td className="p-4 text-right font-medium">From $2,900 (one-time)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Aidbox Instance Maintenance</td>
                  <td className="p-4 text-right font-medium">
                    <span data-show="$period === 'yearly'">From $5,000/yearly</span>
                    <span data-show="$period === 'monthly'" style="display: none">From $500/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Aidbox Performance Optimization</td>
                  <td className="p-4 text-right font-medium">
                    <span data-show="$period === 'yearly'">From $10,000/yearly</span>
                    <span data-show="$period === 'monthly'" style="display: none">From $1,000/month</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Aidbox Training</td>
                  <td className="p-4 text-right font-medium">$6,000 (5-day session)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Integration/Profiling Works</td>
                  <td className="p-4 text-right font-medium">Contact us</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        title="Contact us"
        description="Have a specific request? Get in touch and we'll set up a call"
        page="/price"
      />

      {/* Get Started CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get Started with Aidbox</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Run Aidbox Locally</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quickly spin up a local Aidbox instance with a single command. Ideal for developers who want a private and persistent setup.
              </p>
              <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto mb-6">
                curl -JO https://aidbox.app/runme && docker compose up
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Launch Aidbox in Sandbox</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore Aidbox in a ready-to-use cloud environment with demo data and UI tools. Perfect for quick evaluations and product exploration.
              </p>
              <a href="https://aidbox.app" className="inline-block w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-center">
                Run in Cloud Sandbox →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
