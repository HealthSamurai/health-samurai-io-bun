// Hero section with main Aidbox header

import { Component } from "../../lib/component";
import { Button } from "../../components/ui/Button";

export function HeroSection(): string {
  return (
    <Component name="pages/index/HeroSection" className="mt-16 bg-white">
      <div data-name="hero-backdrop" className="relative isolate overflow-hidden bg-linear-to-b from-primary-light/30">
        <div data-name="hero-container" className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:px-8 lg:pt-32 lg:pb-40">

          <div data-name="hero-content" className="max-w-xl">
            <div data-name="hero-badge" className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-mono text-primary ring-1 ring-primary/20">
              <span className="font-bold">&gt;_</span>
              <span>Hello, Aidbox</span>
            </div>

            <h1 data-name="hero-title" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              FHIR Platform
            </h1>

            <p data-name="hero-description" className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Full-blown FHIR server that drastically reduces time and effort
              for your Health IT solution development.
            </p>

            <div data-name="hero-actions" className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/fhir-server#contact" variant="primary" size="xl">
                Book a Demo
              </Button>
              <Button href="/fhir-server" variant="secondary" size="xl">
                Learn more →
              </Button>
            </div>
          </div>

          <div data-name="hero-media" className="mt-16 sm:mt-20 lg:mt-0">
            <div className="relative">
              <div
                data-name="hero-media-backdrop"
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5"
              ></div>

              <div data-name="code-window" className="overflow-hidden rounded-xl bg-gray-900 shadow-2xl ring-1 ring-white/10">
                <div data-name="code-window-header" className="flex items-center gap-2 border-b border-white/10 bg-gray-800/60 px-4 py-3">
                  <div data-name="window-controls" className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div data-name="window-tabs" className="flex text-sm font-medium text-gray-400">
                    <div data-name="tab-active" className="border-b-2 border-primary px-3 py-1 text-white">Patient.json</div>
                    <div data-name="tab" className="px-3 py-1">Observation.json</div>
                  </div>
                </div>

                <div data-name="code-content" className="p-6">
                  <pre className="text-sm leading-relaxed text-gray-300 font-mono">
{`{
  "resourceType": "Patient",
  "id": "example",
  "name": [{
    "use": "official",
    "family": "Smith",
    "given": ["John"]
  }],
  "birthDate": "1990-01-15",
  "gender": "male"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-name="hero-gradient-fade" aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-white"></div>
      </div>
    </Component>
  );
}
