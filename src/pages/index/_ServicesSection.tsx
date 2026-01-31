// Services section with "Hire our engineers" and "ONC-certified FHIR API Module"

import { Component } from "../../lib/component";
import { Button } from "../../components/ui/Button";

export function ServicesSection(): string {
  return (
    <Component name="pages/index/ServicesSection" className="my-6 mb-16">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-text mb-10">
          Services
        </h2>

        <div class="services-grid">
          {/* Hire our engineers */}
          <div class="services-card">
            <h3>Hire our engineers</h3>
            <p>
              Our engineers are FHIR experts! Hire us to build cloud EHR
              systems, care coordination systems, patient-facing mobile
              applications, data analytics products, and HL7 v2/CCD/FHIR
              integration platforms. With Aidbox we ensure high performance
              and scalability for your healthcare solutions.
            </p>
            <Button href="/services" variant="primary" size="lg">
              Hire us
            </Button>
          </div>

          {/* ONC-certified FHIR API Module */}
          <div class="services-card services-card-alt">
            <h3>
              ONC-certified<span class="text-primary">*</span> FHIR® API Module
            </h3>
            <p>
              Enrich your EHR with a <strong>pluggable</strong> Aidbox
              FHIR® API module and grant patients and population services
              seamless, secure access to health information. Supports all major
              FHIR versions with cloud-native scalability.
            </p>
            <Button href="/fhir-api" variant="outline" size="lg">
              Get a demo
            </Button>
          </div>
        </div>
      </div>
    </Component>
  );
}
