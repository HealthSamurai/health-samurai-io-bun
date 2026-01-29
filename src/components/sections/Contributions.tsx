import { Presentations } from "./Presentations";

type Contribution = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const contributions: Contribution[] = [
  {
    icon: "/assets/images/misc/healthdevhub-logo.svg",
    title: "HealthDevHub",
    description: "Community platform for healthcare developers to share knowledge and connect",
    href: "https://healthdevhub.io/",
  },
  {
    icon: "/assets/images/misc/fhirbase-logo.svg",
    title: "Fhirbase",
    description: "Open source toolkit for storing and working with FHIR data, built on top of PostgreSQL",
    href: "/fhir-database",
  },
  {
    icon: "/assets/images/misc/fhirjs-logo.svg",
    title: "FHIR.js",
    description: "Open source reference implementation of a FHIR client in JavaScript for Node.js and browsers",
    href: "/opensource",
  },
  {
    icon: "/assets/images/misc/fhir-schema-logo.svg",
    title: "FHIR.Schema",
    description: "Open source library for description of FHIR StructureDefinition resources by means of JSON Schema",
    href: "/opensource",
  },
  {
    icon: "/assets/images/misc/fhir-camp.svg",
    title: "FHIR Camp",
    description: "We organize the first-ever informal conference in Europe dedicated to the HL7® FHIR® standard",
    href: "https://www.health-samurai.io/events/fhir-camp-2025",
  },
  {
    icon: "/assets/images/misc/meetup-sf.svg",
    title: "FHIR Meetups SF",
    description: "Regular FHIR meetups in San Francisco and online powered by Health Samurai",
    href: "https://www.meetup.com/HealthDev/",
  },
  {
    icon: "/assets/images/misc/meetup-sf.svg",
    title: "FHIR Meetups EU",
    description: "FHIR meetups in Eastern Europe bringing together healthcare developers",
    href: "https://www.meetup.com/HealthDev/",
  },
];

export function Contributions(): string {
  return (
    <section className="mb-[60px]">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="mb-8">
          <h2 className="text-[48px] leading-[60px] font-black text-[rgb(53,59,80)]">Our FHIR Contributions</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contributions.map((item, index) => (
            <a
              href={item.href}
              className={`flex items-start gap-4 rounded-lg bg-[#fafafa] p-8 text-[#333333] transition-all duration-150 hover:bg-white hover:shadow-md md:p-10${index === 0 ? " md:col-span-3" : ""}`}
            >
              <img src={item.icon} alt={item.title} className="h-12 w-12 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[27px] leading-[37px] font-black">{item.title}</h3>
                <p className="text-[16px] leading-[28px] text-[#333333]">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        <Presentations />
      </div>
    </section>
  );
}
