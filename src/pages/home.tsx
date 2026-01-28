import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Clients } from "../components/sections/Clients";
import { Contributions } from "../components/sections/Contributions";
import { ContactForm } from "../components/sections/ContactForm";
import { Fragment } from "../lib/jsx-runtime";

export function HomePage(): string {
  return (
    <Fragment>
      <Hero
        tag="Hello, Aidbox"
        title="Let's implement your ideas on"
        typedText="FHIR"
        description="Full-blown FHIR server that drastically reduces time and effort for your Health IT solution development. Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK."
        primaryCta={{ label: "BOOK A DEMO", href: "/contacts" }}
        secondaryCta={{ label: "read more >", href: "/fhir-server" }}
        image="/assets/images/hero/aidbox-ui-demo.webp"
      />

      <Services />

      <section className="section">
        <div className="container">
          <p style="font-size: var(--text-lg); line-height: 1.8; max-width: 900px; margin: 0 auto; text-align: center; color: var(--color-text-light);">
            At Health Samurai, we aim to transform care delivery with exceptional software.
            We believe that an open, connected healthcare application ecosystem will drive
            higher quality care and lower costs. To help make this happen, we provide a
            comprehensive <a href="/fhir-server">FHIR server</a> to EHR and EMR systems,
            universities for educational purposes, startups, telemedicine platforms, and data platforms.
          </p>
        </div>
      </section>

      <CaseStudies />

      <Clients />

      <Contributions />

      <section className="newsletter">
        <div className="newsletter-inner">
          <div>
            <h3>Never miss a thing</h3>
            <p>Subscribe for more content!</p>
          </div>
          <form className="newsletter-form" hx-post="/api/subscribe" hx-swap="outerHTML">
            <input type="email" name="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <ContactForm />
    </Fragment>
  );
}
