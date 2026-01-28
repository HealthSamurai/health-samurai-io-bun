export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "FHIR Server", href: "/fhir-server" },
      { label: "Fhirbase", href: "/fhir-database" },
      { label: "Aidbox Forms", href: "/medical-form" },
      { label: "Terminology Server", href: "/terminology" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "For Developers", href: "/services" },
      { label: "For Health Plans", href: "/payers" },
      { label: "For EHR Vendors", href: "/fhir-api" },
    ],
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
