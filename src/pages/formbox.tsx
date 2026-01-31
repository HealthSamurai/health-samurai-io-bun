import { Fragment } from "../lib/jsx-runtime";
import { getProduct } from "../data/products";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

const product = getProduct("formbox")!;

export const metadata = {
  title: product.label,
  description: product.description,
};

export default function FormboxPage(): string {
  return (
    <Fragment>
      <Hero
        title={product.label}
        description={product.description}
        primaryCta={{ label: "Get Started", href: "https://docs.aidbox.app/modules/aidbox-forms" }}
        secondaryCta={{ label: "Learn More", href: "/contacts" }}
      />
      <ContactForm
        title={`Questions about ${product.label}?`}
        description="Let us know how we can help you build clinical forms with FHIR Questionnaire."
        page="/formbox"
      />
    </Fragment>
  );
}
