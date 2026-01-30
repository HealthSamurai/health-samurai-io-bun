// Services section with "Hire our engineers" and "ONC-certified FHIR API Module"

import { Component } from "../../lib/component";

export function ServicesSection(): string {
  return (
    <Component name="pages/index/ServicesSection" className="my-6 mb-16">
      <div class="container">
        <h2 class="text-4xl md:text-5xl font-black leading-tight mb-6">
          Services
        </h2>

        <div class="flex flex-col md:flex-row">
          {/* Hire our engineers */}
          <div class="flex-1 bg-white rounded-l-lg p-8 md:p-12">
            <h3 class="text-2xl font-black leading-tight mb-4">
              Hire our engineers
            </h3>
            <p class="text-base leading-8 text-gray-700 mb-4">
              Our engineers are FHIR experts! Hire us to build cloud EHR
              systems, care coordination systems, patient-facing mobile
              applications, data analytics products, and HL7 v2/CCD/FHIR
              integration platforms. With the Aidbox we can ensure high
              performance and scalability for your healthcare solutions,
              leveraging its flexible architecture to meet diverse data needs
              and integration requirements.
            </p>
            <a
              href="/services"
              class="inline-flex items-center text-red-600 uppercase font-medium text-base hover:text-red-700 transition-colors mt-4"
            >
              Hire us &gt;
            </a>
          </div>

          {/* ONC-certified FHIR API Module */}
          <div class="flex-1 bg-gray-50 rounded-r-lg p-8 md:p-12">
            <h3 class="text-2xl font-black leading-tight mb-4">
              ONC-certified <span class="text-red-600">*</span> FHIR® API Module
            </h3>
            <p class="text-base leading-8 text-gray-700 mb-4">
              Enrich your EHR with a <strong>pluggable</strong> Aidbox FHIR®
              API module and grant patients and population services seamless and
              secure access to health information. The Aidbox supports all major
              FHIR versions, ensuring data consistency and integrity. Its
              cloud-native architecture allows for scalable deployment, making
              it an ideal solution for modern healthcare applications.
            </p>
            <a
              href="/fhir-api"
              class="inline-flex items-center text-red-600 uppercase font-medium text-base hover:text-red-700 transition-colors mt-4"
            >
              Get a demo &gt;
            </a>
          </div>
        </div>
      </div>
    </Component>
  );
}
