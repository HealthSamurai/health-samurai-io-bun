import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/ContactForm";
import type { Context } from "../context";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Health Samurai. We'd love to hear from you about our FHIR solutions.",
};

type PageProps = {
  ctx?: Context;
};

export default function ContactsPage({ ctx }: PageProps = {}): string {
  return (
    <Fragment>
      <ContactForm
        title="Get in touch"
        description="Have a question about our FHIR products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        page="/contacts"
        user={ctx?.user}
      />
    </Fragment>
  );
}
