export type Client = {
  name: string;
  logo: string;
  url?: string;
};

export const clients: Client[] = [
  { name: "Innovaccer", logo: "/assets/images/logos/clients/innovaccer.svg", url: "https://innovaccer.com/" },
  { name: "Prenosis", logo: "/assets/images/logos/clients/prenosis.webp", url: "https://prenosis.com/" },
  { name: "Narus Health", logo: "/assets/images/logos/clients/narus-health.png", url: "https://lucenthealth.com/" },
  { name: "BestNotes", logo: "/assets/images/logos/clients/bestnotes.webp", url: "https://www.bestnotes.com/" },
  { name: "Healthie", logo: "/assets/images/logos/clients/healthie.webp", url: "https://www.gethealthie.com/" },
  { name: "Patients Know Best", logo: "/assets/images/logos/clients/patients-know-best.webp", url: "https://patientsknowbest.com/" },
  { name: "Firenote", logo: "/assets/images/logos/clients/firenote.png", url: "https://firenote.health/" },
  { name: "Duodecim", logo: "/assets/images/logos/clients/duodecim.png", url: "https://www.duodecim.fi/english/" },
  { name: "Lucent Health", logo: "/assets/images/logos/clients/lucent-health.webp", url: "https://lucenthealth.com/" },
  { name: "Novellia", logo: "/assets/images/logos/clients/novellia.png", url: "https://novellia.com/" },
  { name: "4medica", logo: "/assets/images/logos/clients/4medica.png", url: "https://4medica.com/" },
];

export const caseStudies = [
  {
    slug: "prenosis",
    company: "Prenosis",
    logo: "/assets/images/logos/clients/prenosis.webp",
    title: "FDA-authorized AI/ML sepsis diagnosis tool",
    description: "How an artificial intelligence company built and launched the first FDA-authorized AI/ML sepsis diagnosis and prediction tool using the Aidbox FHIR platform.",
    results: [
      "Obtained FDA marketing authorization as SaMD",
      "Cut development time by 50%",
      "Integrated with 3 major hospitals using Epic EHR",
      "75K+ patients processed",
    ],
    tags: ["AI diagnostic tool", "FHIR API", "Sepsis", "HL7 FHIR"],
  },
  {
    slug: "narushealth",
    company: "Narus Health",
    logo: "/assets/images/logos/clients/narus-health.png",
    title: "Integrated care management platform",
    description: "How Narus Health developed an integrated care management platform on top of the Aidbox FHIR backend, supporting patient care while enhancing outcomes.",
    results: [
      "Unified care management system",
      "Mobile application integration",
      "Real-time patient data access",
    ],
    tags: ["Care Management", "Care Plan", "HL7 FHIR", "Billing"],
  },
  {
    slug: "deep6-ai",
    company: "Deep 6 AI",
    logo: "/assets/images/logos/clients/deep6-ai.png",
    title: "AI pipeline for clinical trial recruitment",
    description: "How a leader in precision research software enhanced its AI pipeline for clinical trial recruitment with the Aidbox FHIR server.",
    results: [
      "Initial data load times reduced by 50%",
      "90% reduction in data validation errors",
      "Real-time visibility into data processing",
    ],
    tags: ["AI/NLP platform", "PostgreSQL", "FHIR Storage", "Subscriptions"],
  },
  {
    slug: "4medica",
    company: "4medica",
    logo: "/assets/images/logos/clients/4medica.png",
    title: "Modernized clinical data infrastructure",
    description: "How a leader in healthcare data management modernizes clinical data infrastructure with Aidbox, powering next-generation healthcare solutions.",
    results: [
      "4-week migration time",
      "70% performance boost",
      "Upgrade from FHIR STU3 to R4",
      "Native SQL capabilities for analytics",
    ],
    tags: ["Clinical Viewer", "Patient Portal", "US Core 3.1.1", "Bulk API"],
  },
];
