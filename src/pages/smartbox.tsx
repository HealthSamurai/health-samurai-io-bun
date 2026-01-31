import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

const product = getProduct("smartbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

export default function SmartboxPage(): string {
  return (
    <Fragment>
      <Hero
        title={product.label}
        description={product.description}
        primaryCta={{ label: "Get Started", href: "https://docs.aidbox.app/modules/smartbox" }}
        secondaryCta={{ label: "Learn More", href: "/contacts" }}
      />
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you with SMART on FHIR integration."
        page="/smartbox"
      />
    </Fragment>
  );
}
