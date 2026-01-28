import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Contact Us",
};

export default function ContactsPage(): string {
  return (
    <Fragment>
      <section className="hero" style="padding: var(--space-12) 0;">
        <div className="container">
          <h1 style="text-align: center;">Contact Us</h1>
          <p style="text-align: center; color: var(--color-text-light);">
            We're ready to lead you to the future of health technology
          </p>
        </div>
      </section>
      <ContactForm />
    </Fragment>
  );
}
