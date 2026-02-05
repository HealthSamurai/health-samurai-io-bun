import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/ContactForm";
import { Card, CardGrid } from "../components/ui/Card";

export const metadata = {
  title: "About Us",
  description: "Meet the Health Samurai team - FHIR trailblazers building an open, connected healthcare ecosystem.",
};

const leadership = [
  {
    name: "Nikolai Ryzhikov",
    role: "CTO of Health Samurai",
    bio: "Nikolai Ryzhikov is the head of engineering at Health Samurai, a health IT company that has been developing custom solutions for healthcare clients since 2004. He is also the mastermind behind Aidbox, the first commercial FHIR backend platform that went to market in the United States. Nikolai is a longtime activist in the Ruby, Clojure, and Piter United communities in St. Petersburg. He has been an evangelist of the FHIR® standard since 2013.",
    image: "/assets/team/nikolay.jpg",
    linkedin: "https://www.linkedin.com/in/niquola/",
  },
  {
    name: "Pavel Smirnov",
    role: "CEO of Health Samurai",
    bio: "Pavel is a serial entrepreneur, FHIR® trailblazer and the CEO of Health Samurai. He started working in healthcare IT in 2004 and led the development and implementation of a cloud inpatient EHR at three hospitals in California. Health Samurai has been using the FHIR® standard in real projects since 2012, and is an active participant in the FHIR® community. Pavel's expertise spans across health IT, strategy, medical standards (including FHIR®), and modern cloud technologies.",
    image: "/assets/team/pavel.jpg",
    linkedin: "https://www.linkedin.com/in/pavelsmirnov/",
  },
  {
    name: "Grahame Grieve",
    role: "Advisor of Health Samurai",
    bio: "Grahame Grieve is the inventor of FHIR® and FHIR Product Director at HL7. Grahame is leading the FHIR core team; he is consulting to national programs, vendor consortiums, individual vendors, and standards bodies about healthcare data exchange. Grahame Grieve received many awards, including the 2019 Glaser Award and the 2015 Jon Hilton Award in Primary Care Informatics.",
    image: "/assets/team/grahame.webp",
    linkedin: "https://www.linkedin.com/in/gaborgrieve/",
  },
];

const offices = [
  {
    country: "United States",
    company: "Health Samurai Inc.",
    address: "1891 N Gaffey St Ste O, San Pedro, CA 90731",
    phone: "+1 (818) 731-1279",
    email: "hello@health-samurai.io",
  },
  {
    country: "Portugal",
    company: "Digital Samurai",
    address: "Quinta da Fonte, Edifício D. Pedro I, Paço D'Arcos, Lisbon, 2770-071",
    email: "hello@health-samurai.io",
  },
  {
    country: "Montenegro",
    company: "Health Samurai, DOO",
    address: "XVI zgrada Solidarnosti, lokal br.7, Budva, 85310",
    email: "hello@health-samurai.io",
  },
];

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
    description: "As health IT experts, we believe we have a duty to share our knowledge and give to the community. We've built several open source FHIR products and will continue contributing to FHIR.",
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

function HeroSection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          About us
        </div>
      </div>
    </section>
  );
}

function LeadershipSection(): string {
  return (
    <section class="bg-[#fafafa] py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {leadership.map(person => (
            <div class="bg-white w-full max-w-[350px] py-12 px-8 text-center">
              <img
                src={person.image}
                alt={person.name}
                class="w-[150px] h-[150px] rounded-full object-cover mx-auto"
              />
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center justify-center gap-2 text-xl font-bold text-gray-900 uppercase tracking-wide hover:text-[#0A66C2] transition-colors">
                {person.name}
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <p class="mt-2 text-primary font-medium">{person.role}</p>
              <p class="mt-4 text-gray-600 text-sm leading-relaxed text-left">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficesSection(): string {
  return (
    <section class="bg-[#f4f8fb] py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          Worldwide offices
        </div>
        {CardGrid({
          cols: 3,
          children: offices.map(office =>
            Card({
              padding: "lg",
              shadow: "sm",
              children: `
                <div class="text-xl font-bold text-gray-900 uppercase tracking-wide">${office.country}</div>
                <p class="mt-4 text-gray-900 font-medium">${office.company}</p>
                <p class="mt-2 text-gray-600 text-sm">${office.address}</p>
                ${office.phone ? `<p class="mt-2 text-gray-600 text-sm">${office.phone}</p>` : ''}
                <a href="mailto:${office.email}" class="mt-2 text-primary text-sm hover:text-primary-dark block">
                  ${office.email}
                </a>
              `,
            })
          ).join(''),
        })}
      </div>
    </section>
  );
}

function StorySection(): string {
  return (
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
          Our Story
        </div>
        <div class="prose prose-lg max-w-none text-gray-600">
          <p>
            Building a healthcare application is a complex, expensive, and time-consuming process that requires significant domain knowledge. We understand all too well how these barriers limit innovation, because we've been developing custom health IT solutions for our clients since 2004.
          </p>
          <p class="mt-4">
            In 2012, we came across the FHIR standard and immediately recognized its potential to transform health IT by simplifying the healthcare software development process, cutting costs and solving real business problems. We confirmed our intuition after using FHIR successfully in various client projects, and set out to create a FHIR platform that would make it easy for healthcare organizations to build complex solutions.
          </p>
          <p class="mt-4">
            We took the best of everything we've learned about health IT in the last 14 years and built Aidbox, our FHIR backend as a service. After seeing the benefits that Aidbox brings to our partners, we know that FHIR is a standard that is here to stay.
          </p>
          <p class="mt-4">
            We're FHIR trailblazers who are helping to create an open, connected healthcare ecosystem that supports innovation and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

function CodeOfHonorSection(): string {
  return (
    <section class="bg-[#f4f8fb] py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          Health Samurai Code of Honor
        </div>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          These are the beliefs and values that continue to guide us as we grow:
        </p>
        {CardGrid({
          cols: 3,
          children: codeOfHonor.map(value =>
            Card({
              padding: "md",
              shadow: "sm",
              children: `
                <div class="text-lg font-bold text-gray-900">${value.title}</div>
                <p class="mt-3 text-gray-600 text-sm leading-relaxed">${value.description}</p>
              `,
            })
          ).join(''),
        })}
      </div>
    </section>
  );
}

function CertificationsSection(): string {
  return (
    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex justify-center items-center gap-12">
          <img src="/assets/team/hipaa-badge.png" alt="HIPAA Compliant" class="h-16 object-contain" />
          <img src="/assets/team/iso-badge.svg" alt="ISO 27001:2022" class="h-16 object-contain" />
        </div>
      </div>
    </section>
  );
}

export default function TeamPage(): string {
  return (
    <Fragment>
      <HeroSection />
      <LeadershipSection />
      <OfficesSection />
      <StorySection />
      <CodeOfHonorSection />
      <CertificationsSection />
      <div id="contact">
        <ContactForm
          title="Contact Us"
          description="Have a question? We'd love to hear from you."
          page="/team"
        />
      </div>
    </Fragment>
  );
}
