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
    title: "ONC-certified* FHIR® API Module",
    description:
      "Enrich your EHR with a pluggable Aidbox FHIR® API module and grant patients and population services seamless and secure access to health information. Supports all major FHIR versions.",
    cta: { label: "Get a demo >", href: "/fhir-api" },
  },
];

export function Services(): string {
  return (
    <section className="mt-6 mb-[60px]">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="mb-6">
          <h2 className="text-[48px] leading-[60px] font-black text-[rgb(53,59,80)]">Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div className="rounded-lg border border-[#f2f2f2] bg-white px-12 pt-10 pb-8">
              <h3 className="text-[18px] leading-6 font-semibold text-[#333333] mb-2">{service.title}</h3>
              <p className="text-[16px] leading-[28px] text-[#333333] mb-6">{service.description}</p>
              <Button href={service.cta.href} variant="link">{service.cta.label}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
