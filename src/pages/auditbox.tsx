import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "../components/ContactForm";

const faqItems = [
  {
    question: "What is FHIR AuditEvent?",
    answer: "FHIR AuditEvent is a standardized resource for recording security-relevant events in healthcare systems. It captures who did what, when, where, and to which resources, enabling comprehensive audit trails for compliance and security monitoring.",
  },
  {
    question: "How does Auditbox ensure HIPAA compliance?",
    answer: "Auditbox automatically logs all access to protected health information (PHI), providing immutable audit trails required by HIPAA. It tracks user authentication, data access, modifications, and exports with tamper-proof storage.",
  },
  {
    question: "Can I integrate Auditbox with my existing SIEM?",
    answer: "Yes, Auditbox supports integration with popular SIEM solutions through standard protocols. You can stream audit events in real-time to tools like Splunk, Elasticsearch, or cloud-native logging services.",
  },
  {
    question: "What retention policies are supported?",
    answer: "Auditbox supports configurable retention policies to meet various regulatory requirements. You can set retention periods from 1 year to indefinite, with automatic archival to cold storage for cost optimization.",
  },
  {
    question: "How does Auditbox handle high-volume logging?",
    answer: "Auditbox is built for scale, handling millions of audit events per day with minimal latency impact on your main application. It uses asynchronous processing and efficient storage to ensure audit logging never becomes a bottleneck.",
  },
];

const product = getProduct("auditbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

export default function AuditboxPage(): string {
  return (
    <Fragment>
      <Hero
        title={product.label}
        description={product.description}
        primaryCta={{ label: "Get Started", href: "/docs/auditbox" }}
        secondaryCta={{ label: "Learn More", href: "/contacts" }}
      />
      <FAQ items={faqItems} />
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you with FHIR-native audit logging."
        page="/auditbox"
      />
    </Fragment>
  );
}
