import { Button } from "../ui/Button";

type Service = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

const services: Service[] = [
  {
    title: "Hire our engineers",
    description:
      "Our engineers are FHIR experts! Hire us to build cloud EHR systems, care coordination systems, patient-facing mobile applications, data analytics products, and HL7 v2/CCD/FHIR integration platforms.",
    cta: { label: "Hire us >", href: "/services" },
  },
  {
    title: "ONC-certified FHIR® API Module",
    description:
      "Enrich your EHR with a pluggable Aidbox FHIR® API module and grant patients and population services seamless and secure access to health information. Supports all major FHIR versions.",
    cta: { label: "Get a demo >", href: "/fhir-api" },
  },
];

export function Services(): string {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button href={service.cta.href} variant="outline">{service.cta.label}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
