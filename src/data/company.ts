/**
 * Company information scraped from health-samurai.io
 */

export const company = {
  name: "Health Samurai",
  legalName: "Health Samurai, Inc.",
  founded: 2004,
  tagline: "Building the future of healthcare interoperability with FHIR-native solutions",
  description:
    "Health Samurai is a leading provider of FHIR backend solutions and full stack health IT services. A team of health IT experts and FHIR trailblazers that have been building custom healthcare solutions since 2004.",

  // Contact information
  contact: {
    email: "hello@health-samurai.io",
    phone: "+1 (818) 731-1279",
    address: {
      street: "1891 N Gaffey St Ste O",
      city: "San Pedro",
      state: "CA",
      zip: "90731",
      country: "USA",
      full: "1891 N Gaffey St Ste O, San Pedro, CA 90731",
    },
  },

  // Social media links
  social: {
    github: "https://github.com/HealthSamurai",
    githubAidbox: "https://github.com/Aidbox",
    linkedin: "https://www.linkedin.com/company/health-samurai/",
    twitter: "https://twitter.com/health_samurai",
    youtube: "https://www.youtube.com/@HealthSamurai",
    facebook: "https://www.facebook.com/healthsamurai/",
    crunchbase: "https://www.crunchbase.com/organization/health-samurai",
  },

  // Main website URLs
  urls: {
    main: "https://www.health-samurai.io",
    docs: "https://docs.aidbox.app",
    aidboxPortal: "https://aidbox.app",
    fhirbase: "https://fhirbase.aidbox.app",
  },

  // Certifications and compliance
  certifications: [
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d0332ca0d91f84e893638b_hippa-logo.png",
    },
    {
      name: "ISO 27001:2022",
      description: "Information Security Management System certification",
      logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d03378e6aff704b281d613_ISOMark_27001-2022%202.svg",
      announcement: "/news/health-samurai-achieves-iso-27001-2022-certification",
    },
  ],

  // Leadership / Advisory
  leadership: [
    {
      name: "Pavel Smirnov",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/pavelsmirnoff/",
      twitter: "https://twitter.com/paul_smirnoff",
      description:
        "Serial entrepreneur and FHIR trailblazer. Started working in healthcare IT in 2004, led development of cloud inpatient EHR at hospitals in California.",
    },
    {
      name: "Nikolai Ryzhikov",
      role: "CTO",
      linkedin: "https://www.linkedin.com/in/nikolai-ryzhikov-586a6913/",
      description:
        "Head of engineering and mastermind behind Aidbox, the first commercial FHIR backend platform. Expert in FHIR, PostgreSQL, and Clojure.",
    },
    {
      name: "Grahame Grieve",
      role: "Advisor",
      linkedin: "https://au.linkedin.com/in/grahame-grieve-952637",
      twitter: "https://twitter.com/grahamegrieve",
      description:
        "Creator of FHIR and FHIR Product Director at HL7 International. Consulting to national programs, vendor consortiums, and standards bodies about healthcare data exchange. Recipient of the 2019 Glaser Award and the 2015 Jon Hilton Award in Primary Care Informatics.",
    },
  ],

  // Legal entities
  entities: [
    { name: "Health Samurai Inc.", location: "USA" },
    { name: "Digital Samurai", location: "USA" },
    { name: "Health Samurai, DOO", location: "Serbia" },
  ],

  // Brand assets
  brand: {
    logo: "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp",
    logoFooter:
      "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a3041c4d877230001fc7454_hslogo-footer.svg",
    favicon:
      "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff62247c38400019e81f3_32.png",
    appleTouchIcon:
      "https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.png",
  },
} as const;

export type Company = typeof company;
