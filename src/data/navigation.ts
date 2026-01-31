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
    children: [
      { label: "Aidbox", href: "/aidbox", description: "FHIR server and platform for healthcare developers" },
      { label: "Smartbox", href: "/smartbox", description: "SMART on FHIR application launcher" },
      { label: "Formbox", href: "/formbox", description: "Clinical forms with FHIR Questionnaire support" },
      { label: "Auditbox", href: "/auditbox", description: "FHIR-native Audit Record Repository" },
      { label: "Termbox", href: "/termbox", description: "FHIR Terminology Server" },
      { label: "MDMbox", href: "/mdmbox", description: "Master Data Management for healthcare" },
      { label: "E-prescription", href: "/e-prescription-module", description: "Electronic prescribing module for healthcare" },
      { label: "Edibox", href: "/edibox", description: "Healthcare EDI transaction processing" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Case Studies",
    href: "/casestudies",
  },
  {
    label: "Docs",
    href: "https://docs.aidbox.app",
  },
  {
    label: "Meetups",
    href: "/meetups",
  },
  {
    label: "Company",
    href: "/company",
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
