import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Health Samurai - About Us",
  description: "We're team of health IT experts and FHIR trailblazers that have been building custom healthcare solutions since 2004.",
};

// Leadership team
const leaders = [
  {
    name: "Nikolay Ryzhikov",
    role: "CTO of Health Samurai",
    image: "/assets/images/company/nikolay-ryzhikov.jpg",
    bio: "Nikolai Ryzhikov is the head of engineering at Health Samurai, a health IT company that has been developing custom solutions for healthcare clients since 2004. He is also the mastermind behind Aidbox, the first commercial FHIR backend platform that went to market in the United States. Nikolai is a longtime activist in the Ruby, Clojure, and Piter United communities in St. Petersburg. He has been an evangelist of the FHIR® standard since 2013.",
  },
  {
    name: "Pavel Smirnov",
    role: "CEO of Health Samurai",
    image: "/assets/images/company/pavel-smirnov.jpg",
    bio: "Pavel is a serial entrepreneur, FHIR® trailblazer and the CEO of Health Samurai. He started working in healthcare IT in 2004 and led the development and implementation of a cloud inpatient EHR at three hospitals in California. Health Samurai has been using the FHIR® standard in real projects since 2012, and is an active participant in the FHIR® community. Pavel's expertise spans across health IT, strategy, medical standards (including FHIR®), and modern cloud technologies.",
  },
  {
    name: "Grahame Grieve",
    role: "Advisor of Health Samurai",
    image: "/assets/images/company/grahame-grieve.webp",
    bio: "Grahame Grieve is the inventor of FHIR® and FHIR Product Director at HL7. Grahame is leading the FHIR core team; he is consulting to national programs, vendor consortiums, individual vendors, and standards bodies about healthcare data exchange. Grahame Grieve received many awards, including the 2019 Glaser Award and the 2015 Jon Hilton Award in Primary Care Informatics.",
  },
];

// Office locations
const offices = [
  {
    country: "United States",
    company: "Health Samurai Inc.",
    address: "1891 N Gaffey St Ste O,\nSan Pedro, CA 90731",
    phone: "+1 (818) 731-1279",
    email: "hello@health-samurai.io",
  },
  {
    country: "Portugal",
    company: "Digital Samurai",
    address: "Quinta da Fonte, Edifício D.\nPedro I, Paço D'Arcos,\nLisbon, 2770-071",
    email: "hello@health-samurai.io",
  },
  {
    country: "Montenegro",
    company: "Health Samurai, DOO",
    address: "XVI zgrada Solidarnosti,\nlokal br.7,\nBudva, 85310",
    email: "hello@health-samurai.io",
  },
];

// Code of honor values
const codeOfHonor = [
  {
    title: "Integrity",
    description: "We stay true to our word and deliver on promises.",
  },
  {
    title: "Discipline",
    description: "We stick to Agile methodologies to shorten delivery cycles and increase quality and adaptability during the development process.",
  },
  {
    title: "Commitment to Open Standards",
    description: "We believe standardized health data exchange and open access to healthcare data benefits everyone. That's why we built our Aidbox backend platform with the FHIR standard to support interoperability.",
  },
  {
    title: "Duty",
    description: "As health IT experts, we believe we have a duty to share our knowledge and give to the community. We've built several open source FHIR products and will continue contributing to FHIR. Feel free to reach out to us with any health IT related questions!",
  },
  {
    title: "Quality over Quantity",
    description: "We believe in doing things right, and are committed to delivering value.",
  },
  {
    title: "Transformation over Tradition",
    description: "We believe innovation is the key to winning the battle for a better healthcare system.",
  },
];

function LeadershipSection(): string {
  return (
    <section className="company-leadership">
      <div className="container">
        <div className="leadership-grid">
          {leaders.map((leader) => (
            <div className="leader-card">
              <div className="leader-image">
                <img src={leader.image} alt={leader.name} loading="lazy" />
              </div>
              <h2 className="leader-name">{leader.name}</h2>
              <p className="leader-role">{leader.role}</p>
              <p className="leader-bio">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficesSection(): string {
  return (
    <section className="company-offices">
      <div className="container">
        <h2 className="section-title">Worldwide Offices</h2>
        <div className="offices-grid">
          {offices.map((office) => (
            <div className="office-card">
              <h3 className="office-country">{office.country}</h3>
              <p className="office-company">{office.company}</p>
              <p className="office-address">{office.address}</p>
              {office.phone && <p className="office-phone">{office.phone}</p>}
              <a href={`mailto:${office.email}`} className="office-email">{office.email}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionSection(): string {
  return (
    <section className="company-mission">
      <div className="container">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content">
          <p className="mission-highlight">
            Our mission is to make it easy for providers, developers, enterprises and startups everywhere to build great healthcare applications.
          </p>
          <p>
            At Health Samurai, we want to transform care delivery with great software.
          </p>
          <p>
            We believe that an open, connected healthcare application ecosystem will drive higher quality care and lower costs. To help make this happen, we have a simple plan: give people the tools they need to build life-changing technologies and handle healthcare data the right way. We believe that when you empower people with the right data and tools, amazing things will happen.
          </p>
          <p>
            That's how we believe we can change healthcare for good, and we're fighting to make our vision a reality every day.
          </p>
        </div>
      </div>
    </section>
  );
}

function StorySection(): string {
  return (
    <section className="company-story">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <p>
            Building a healthcare application is a complex, expensive, and time-consuming process that requires significant domain knowledge. We understand all too well how these barriers limit innovation, because we've been developing custom health IT solutions for our clients since 2004.
          </p>
          <p>
            In 2012, we came across the <a href="https://www.hl7.org/fhir/overview.html" target="_blank" rel="nofollow">FHIR standard</a> and immediately recognized its potential to transform health IT by simplifying the healthcare software development process, cutting costs and solving real business problems. We confirmed our intuition after using FHIR successfully in various client projects, and set out to create a FHIR platform that would make it easy for healthcare organizations to build complex solutions.
          </p>
          <p>
            We took the best of everything we've learned about health IT in the last 14 years and built <strong>Aidbox</strong>, our FHIR backend as a service. After seeing the benefits that Aidbox brings to our partners, we know that FHIR is a standard that is here to stay.
          </p>
          <p>
            We're FHIR trailblazers who are helping to create an open, connected healthcare ecosystem that supports innovation and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

function CodeOfHonorSection(): string {
  return (
    <section className="company-honor">
      <div className="container">
        <h2 className="section-title">Health Samurai Code of Honor</h2>
        <p className="honor-intro">These are the beliefs and values that continue to guide us as we grow:</p>
        <div className="honor-grid">
          {codeOfHonor.map((value) => (
            <div className="honor-item">
              <h3 className="honor-title">{value.title}</h3>
              <p className="honor-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="company-hero">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection />

      {/* Offices */}
      <OfficesSection />

      {/* Mission */}
      <MissionSection />

      {/* Story */}
      <StorySection />

      {/* Code of Honor */}
      <CodeOfHonorSection />

      {/* Contact Form */}
      <ContactForm />
    </Fragment>
  );
}
