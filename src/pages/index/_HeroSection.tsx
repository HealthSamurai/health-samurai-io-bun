// Hero section with gradient blobs and code window

import { Component } from "../../lib/component";
import { Button } from "../../components/ui/Button";

export function HeroSection(): string {
  return (
    <Component name="pages/index/HeroSection" className="hero">
      {/* Top gradient blob */}
      <div aria-hidden="true" class="hero-blob hero-blob-top">
        <div class="hero-blob-shape hero-blob-shape-left"></div>
      </div>

      <div class="hero-container">
        <div class="hero-grid">
          {/* Content */}
          <div class="hero-content">
            <div class="hero-badge">
              <span class="font-bold">&gt;_</span>
              <span>Hello, Aidbox</span>
            </div>

            <h1 class="hero-title">FHIR Platform</h1>

            <p class="hero-description">
              Full-blown FHIR server that drastically reduces time and effort
              for your Health IT solution development.
            </p>

            <div class="hero-actions">
              <Button href="/fhir-server#contact" variant="primary" size="xl">
                Book a Demo
              </Button>
              <Button href="/fhir-server" variant="secondary" size="xl">
                Learn more →
              </Button>
            </div>
          </div>

          {/* Code window */}
          <div class="hero-media">
            <div class="hero-code-window">
              <div class="hero-code-header">
                <div class="hero-code-controls">
                  <div class="hero-code-dot bg-red-500/80"></div>
                  <div class="hero-code-dot bg-yellow-500/80"></div>
                  <div class="hero-code-dot bg-green-500/80"></div>
                </div>
                <div class="hero-code-tabs">
                  <div class="hero-code-tab-active">Patient.json</div>
                  <div class="hero-code-tab">Observation.json</div>
                </div>
              </div>

              <div class="hero-code-content">
                <pre class="hero-code-pre">
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

      {/* Bottom gradient blob */}
      <div aria-hidden="true" class="hero-blob hero-blob-bottom">
        <div class="hero-blob-shape hero-blob-shape-right"></div>
      </div>
    </Component>
  );
}
