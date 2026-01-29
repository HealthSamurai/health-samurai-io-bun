import { HomepageHero } from "../components/sections/HomepageHero";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Clients } from "../components/sections/Clients";
import { Contributions } from "../components/sections/Contributions";
import { TrustBadges } from "../components/sections/TrustBadges";
import { ContactForm } from "../components/sections/ContactForm";
import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Samurai - FHIR Platform & Healthcare Software Development",
  description: "Full-blown FHIR server that drastically reduces time and effort for your Health IT solution development. Build healthcare solutions from CDRs to EHRs using FHIR, PostgreSQL, and our SDK.",
};

export default function IndexPage(): string {
  return (
    <Fragment>
      <HomepageHero />
      <Services />

      <section className="my-6 mb-[60px]">
        <div className="mx-auto max-w-[900px] px-8">
          <p className="text-center text-[16px] leading-[31px] text-[#333333]">
            At Health Samurai, we aim to transform care delivery with exceptional software.
            We believe that an open, connected healthcare application ecosystem will drive
            higher quality care and lower costs. To help make this happen, we provide a
            comprehensive <a href="/fhir-server">FHIR server</a> to EHR and EMR systems,
            universities for educational purposes, startups, telemedicine platforms, and data platforms.
            We're also proud to be leading contributors to the{" "}
            <a href="https://www.hl7.org/fhir/" target="_blank" rel="noopener noreferrer">FHIR movement</a>,
            and we believe that together we can change healthcare for good.
          </p>
        </div>
      </section>

      <CaseStudies />

      <Clients />

      <Contributions />

      <section className="py-0">
        <div className="mx-auto max-w-[1100px] px-8 text-center">
          <h2 className="text-[48px] leading-[60px] font-black text-[rgb(53,59,80)]">The Health Samurai BLOG</h2>
        </div>
      </section>

      <section className="py-0">
        <div className="mx-auto max-w-[1100px] px-8 py-[24px] md:py-[40px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-[24px] font-light text-[#333333]">Never miss a thing</h3>
              <p className="text-[#333333]">Subscribe for more content!</p>
            </div>
            <form className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-[1fr_1fr_auto] md:items-end" hx-post="/api/subscribe" hx-swap="outerHTML">
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter-name" className="text-[14px] text-[#333333]">Name</label>
                <input type="text" id="newsletter-name" name="name" className="w-full rounded border border-[rgba(53,59,80,0.1)] bg-white px-3 py-2 text-[14px]" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter-email" className="text-[14px] text-[#333333]">Email</label>
                <input type="email" id="newsletter-email" name="email" required className="w-full rounded border border-[rgba(53,59,80,0.1)] bg-white px-3 py-2 text-[14px]" />
              </div>
              <button type="submit" className="rounded bg-[#EA4935] px-4 py-2 text-[16px] font-medium text-white hover:bg-[#d43d2a]">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <ContactForm />

      <TrustBadges />
    </Fragment>
  );
}
