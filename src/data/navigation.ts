export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavCategory = {
  category: string;
  items: NavChild[];
};

export type NavCta = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  categories?: NavCategory[];
  children?: NavChild[];
  cta?: NavCta;
};

export const navigation: NavItem[] = [
  {
    label: "Products",
    categories: [
      {
        category: "FHIR server",
        items: [
          { label: "FHIR Server", href: "/fhir-server", description: "Powerful backend for digital health developers" },
          { label: "Fhirbase", href: "/fhir-database", description: "Open source FHIR-native database for healthcare data" },
          { label: "Aidbox Forms", href: "/medical-form", description: "No-code clinical forms with FHIR support" },
        ],
      },
      {
        category: "Converters",
        items: [
          { label: "HL7v2 to FHIR converter", href: "https://docs.aidbox.app/modules/integration-toolkit/hl7-v2-integration" },
          { label: "C-CDA to FHIR converter", href: "/c-cda-to-fhir-converter" },
        ],
      },
      {
        category: "Modules",
        items: [
          { label: "Aidbox Forms", href: "/medical-form" },
          { label: "Aidbox Terminology", href: "/terminology" },
          { label: "Aidbox MPI", href: "https://docs.aidbox.app/modules/mpi" },
          { label: "Auth Server", href: "https://docs.aidbox.app/security" },
          { label: "Aidbox E-Prescription", href: "/e-prescription-module" },
        ],
      },
    ],
    cta: {
      icon: "/assets/images/logos/aidbox-mini.svg",
      title: "Managed Aidbox",
      description: "Get started in minutes with a fully managed Aidbox FHIR platform",
      href: "https://aidbox.app/ui/portal#/signup",
    },
  },
  {
    label: "Solutions",
    categories: [
      {
        category: "Development",
        items: [
          { label: "Aidbox for Startups", href: "/startups" },
          { label: "Aidbox for Data Platforms", href: "/healthcare-data-platform-toolkit-aidbox" },
          { label: "EHR development toolkit", href: "/ehr-toolkit" },
        ],
      },
      {
        category: "Compliance",
        items: [
          { label: "ONC-certified API tools for EHRs", href: "/fhir-api" },
          { label: "FHIR API for Payers - CMS", href: "/payers" },
        ],
      },
    ],
    cta: {
      icon: "/assets/images/logos/aidbox-mini.svg",
      title: "Aidbox on AWS",
      description: "Get FHIR backend on AWS in one click",
      href: "https://aws.amazon.com/marketplace/pp/prodview-l5djlpvsd6o5g",
    },
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Docs & Resources",
    children: [
      { label: "Documentation", href: "https://docs.aidbox.app" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/casestudies" },
      { label: "Open Source", href: "/opensource" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contacts" },
    ],
  },
  {
    label: "Pricing",
    href: "/price",
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contacts" },
  ],
  products: [
    { label: "FHIR Server", href: "/fhir-server" },
    { label: "Fhirbase", href: "/fhir-database" },
    { label: "For Developers", href: "/services" },
    { label: "For Health Plans", href: "/payers" },
    { label: "Case Studies", href: "/casestudies" },
    { label: "Open Source", href: "/opensource" },
    { label: "Meetups", href: "/fhir-meetups" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};
