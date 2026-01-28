type Contribution = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const contributions: Contribution[] = [
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
    title: "FHIR Meetups",
    description: "Regular FHIR meetups in San Francisco, CA powered by Health Samurai",
    href: "https://www.meetup.com/HealthDev/",
  },
  {
    icon: "/assets/images/misc/meetup-eu.svg",
    title: "FHIR Meetups EU",
    description: "FHIR Meetups in Eastern Europe powered by Health Samurai",
    href: "https://health-samurai.timepad.ru/",
  },
];

export function Contributions(): string {
  return (
    <section className="contributions section">
      <div className="contributions-inner">
        <div className="section-title">
          <h2>Our FHIR Contributions</h2>
          <p>We actively contribute to the FHIR community through open source projects and events</p>
        </div>
        <div className="contributions-grid">
          {contributions.map((item) => (
            <a href={item.href} className="contribution-card">
              <img src={item.icon} alt={item.title} className="contribution-icon" />
              <div className="contribution-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
