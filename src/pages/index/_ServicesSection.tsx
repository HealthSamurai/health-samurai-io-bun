// Services section with "Hire our engineers" and "ONC-certified FHIR API Module"

export function ServicesSection(): string {
  return (
    <div loading="lazy" className="home-payers-section">
      <div loading="lazy" className="home-container-1100">
        <h2 className="home-h2-section">Services </h2>
        <div className="home-header-offers w-row">
          <div
            loading="lazy"
            className="home-header-offer1 w-col w-col-6 w-col-stack"
          >
            <h2 className="home-h2">
              <strong>Hire our engineers </strong>
            </h2>
            <p className="home-offer-desc">
              Our engineers are FHIR experts! Hire us to build cloud EHR
              systems, care coordination systems, patient-facing mobile
              applications, data analytics products, and HL7 v2/CCD/FHIR
              integration platforms. With the Aidbox we can ensure high
              performance and scalability for your healthcare solutions,
              leveraging its flexible architecture to meet diverse data needs
              and integration requirements. <br />
            </p>
            <a
              href="https://www.health-samurai.io/services"
              className="home-read-more-btn w-button"
            >
              <strong>Hire us &gt; </strong>
            </a>
          </div>
          <div
            loading="lazy"
            className="home-header-offer-right w-col w-col-6 w-col-stack"
          >
            <h2 className="home-h2">
              <strong>ONC-certified </strong>
              <span className="text-span-42">
                <strong>* </strong>
              </span>
              <strong> FHIR® API Module </strong>
            </h2>
            <p className="home-offer-desc">
              Enrich your EHR with a <strong>pluggable </strong> Aidbox FHIR®
              API module and grant patients and population services seamless and
              secure access to health information. The Aidboxsupports all major
              FHIR versions, ensuring data consistency and integrity. Its
              cloud-native architecture allows for scalable deployment, making
              it an ideal solution for modern healthcare applications.
              <br />‍ <br />
            </p>
            <a
              href="/fhir-api"
              target="_blank"
              className="home-read-more-btn w-button"
            >
              <strong>Get a demo &gt; </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
