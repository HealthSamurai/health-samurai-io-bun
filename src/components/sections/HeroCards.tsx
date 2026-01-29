import { Button } from "../ui/Button";

export function HeroCards(): string {
  return (
    <section className="hero-cards">
      <div className="hero-cards-inner">
        {/* FHIR Platform Card */}
        <div className="hero-card hero-card-primary">
          <div className="hero-card-logo">
            <img src="/assets/images/logos/aidbox.svg" alt="Aidbox" />
          </div>
          <h2>FHIR Platform</h2>
          <p>
            Full-blown FHIR server that drastically reduces time and effort for
            your Health IT solution development. Build healthcare solutions from
            CDRs to EHRs using FHIR, PostgreSQL, and our SDK.
          </p>
          <div className="hero-card-actions">
            <Button href="/contacts" variant="primary">BOOK A DEMO</Button>
            <Button href="/fhir-server" variant="link">read more &gt;</Button>
          </div>
        </div>

        {/* Services Card */}
        <div className="hero-card">
          <h2>Services</h2>
          <h3>Hire our engineers</h3>
          <p>
            Our engineers are FHIR experts! Hire us to build cloud EHR systems,
            care coordination systems, patient-facing mobile applications, data
            analytics products, and HL7 v2/CCD/FHIR integration platforms.
          </p>
          <div className="hero-card-actions">
            <Button href="/services" variant="link">Hire us &gt;</Button>
          </div>
        </div>

        {/* ONC-Certified Card */}
        <div className="hero-card">
          <h2>ONC-certified* FHIR® API Module</h2>
          <p>
            Enrich your EHR with a pluggable Aidbox FHIR® API module and grant
            patients and population services seamless and secure access to health
            information. Supports all major FHIR versions.
          </p>
          <div className="hero-card-actions">
            <Button href="/fhir-api" variant="link">Get a demo &gt;</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
