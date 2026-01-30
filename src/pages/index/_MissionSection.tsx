// Mission section with company description

import { Component } from "../../lib/component";

export function MissionSection(): string {
  return (
    <Component name="pages/index/MissionSection" className="py-8">
      <div class="container">
        <div class="max-w-4xl">
          <p class="text-base leading-8 text-gray-700 mb-4">
            At Health Samurai, we aim to transform care delivery with exceptional
            software. We believe that an open, connected healthcare application
            ecosystem will drive higher quality care and lower costs. To help make
            this happen, we provide a comprehensive{" "}
            <a href="/fhir-server" class="text-red-600 hover:underline">FHIR server</a> to EHR and EMR systems,
            universities for educational purposes, startups, telemedicine
            platforms, and data platforms. Our Analytics on FHIR further enhances
            data handling capabilities.
          </p>
          <p class="text-base leading-8 text-gray-700 mb-4">
            Since its inception, we have been part of the FHIR movement and
            leverage the Aidbox to empower our clients with the right tools and
            data. This allows for the creation of life-changing technologies and
            ensures healthcare data is managed correctly. By equipping people with
            these resources, we believe amazing things will happen.
          </p>
          <p class="text-base leading-8 text-gray-700">
            That's how we believe we can change healthcare for good, and we're
            committed to making our vision a reality daily. Our{" "}
            <a href="/fhir-server" class="text-red-600 hover:underline">FHIR server</a> supports diverse healthcare
            needs, ensuring seamless integration and interoperability across
            various platforms and applications.
          </p>
        </div>
      </div>
    </Component>
  );
}
