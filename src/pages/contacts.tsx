import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Health Samurai. We'd love to hear from you about our FHIR solutions.",
};

export default function ContactsPage(): string {
  return (
    <Fragment>
      <ContactForm
        title="Get in touch"
        description="Have a question about our FHIR products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        page="/contacts"
      />
    </Fragment>
  );
}
