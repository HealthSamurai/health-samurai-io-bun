import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Case Studies",
  description: "Read about how we've helped our partners succeed with their health technology projects.",
};

// Case studies data from spec
const caseStudiesData = [
  {
    company: "Keebler Health",
    description: "Turning healthcare chaos into clarity takes the right foundation. Learn how Keebler Health used Aidbox to automate risk adjustment and provide clear AI insights quickly. Want to find out more? This case study shows how.",
    logo: "/assets/images/casestudies/logo-keebler-health.png",
    link: "/case-study/how-keebler-health-used-aidbox-to-build-an-ai-native-risk-adjustment-platform",
  },
  {
    company: "BodyLogicMD",
    description: "Explore how BodyLogicMD, a leading BHRT franchise, replaced its fragmented legacy systems with a unified FHIR platform - extending FHIR with 100+ customizations while maintaining full interoperability using Aidbox.",
    logo: "/assets/images/casestudies/logo-bodylogicmd.png",
    link: "/case-study/bodylogicmd-implements-fhir-across-its-multi-clinic-healthcare-network-with-aidbox-fhir-server",
  },
  {
    company: "Prenosis",
    description: "Discover how Prenosis developed the first FDA-marketing authorized AI diagnostics tool for sepsis using the Aidbox FHIR backend, resulting in a faster, future-proof, and more scalable solution.",
    logo: "/assets/images/casestudies/logo-prenosis.png",
    link: "/case-study/prenosis",
  },
  {
    company: "Narus Health",
    description: "We developed a care management system integrated with a mobile application for Narus Health company headquartered in Nashville, Tennessee.",
    logo: "/assets/images/casestudies/logo-narus-health.webp",
    link: "/case-study/narushealth",
  },
  {
    company: "MedClient EHR",
    description: "We developed a cloud Inpatient EHR system and implemented it in three California hospitals. The EHR satisfied ONC certification requirements. Hospitals have received incentive payments from the Medicare and Medicaid programs - Meaningful Use.",
    logo: "/assets/images/casestudies/logo-choice-medclient.webp",
    link: "/case-study/medclient",
  },
  {
    company: "Deep 6 AI",
    description: "Explore how Deep 6 AI enhanced the performance of its AI pipeline for clinical trial recruitment by integrating the Aidbox FHIR server, a transformation that has enabled the development of a multi-client SaaS platform.",
    logo: "/assets/images/casestudies/logo-deep6ai.png",
    link: "/case-study/how-deep-6-ai-enhanced-ai-pipeline-performance-for-clinical-trial-recruitment-with-aidbox",
  },
  {
    company: "Cleo EHR",
    description: "Quality improvement of medical practice. How we are building all-in-one EHR for Metro Dermatology Clinics.",
    logo: "/assets/images/casestudies/logo-metro-dermatology.webp",
    link: "/case-study/cleoehr",
  },
  {
    company: "4medica",
    description: "Discover how 4medica successfully upgraded from FHIR STU3 to R4 using Aidbox, unlocking substantial performance improvements, enhanced scalability, and native SQL capabilities for advanced analytics and reporting.",
    logo: "/assets/images/casestudies/logo-4medica.jpg",
    link: "/case-study/4medica-modernizes-clinical-data-infrastructure-with-aidbox",
  },
];

export default function CaseStudiesPage(): string {
  return (
    <Fragment>
      {/* Page Title Section */}
      <section className="casestudies-title-section">
        <div className="container">
          <h2 className="casestudies-page-title">Case Studies</h2>
        </div>
      </section>

      {/* Case Studies List Section */}
      <section className="casestudies-list-section">
        <div className="container">
          <div className="casestudies-list">
            {caseStudiesData.map((study) => (
              <a href={study.link} className="casestudy-card">
                <div className="casestudy-logo-container">
                  <img
                    src={study.logo}
                    alt={`${study.company} logo`}
                    className="casestudy-logo"
                  />
                </div>
                <div className="casestudy-content">
                  <h3 className="casestudy-title">{study.company}</h3>
                  <p className="casestudy-description">{study.description}</p>
                  <span className="casestudy-readmore">→ Read more</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="casestudies-contact-section">
        <div className="container">
          <h2 className="casestudies-contact-title">CONTACT US</h2>
          <p className="casestudies-contact-subtitle">Get in touch with us today!</p>

          <form className="casestudies-contact-form" hx-post="/api/contact" hx-swap="outerHTML">
            <div className="casestudies-form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="casestudies-form-input"
                required
              />
            </div>
            <div className="casestudies-form-group">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="casestudies-form-input"
              />
            </div>
            <div className="casestudies-form-group">
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                className="casestudies-form-input"
                required
              />
            </div>
            <div className="casestudies-form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="casestudies-form-input"
              />
            </div>
            <div className="casestudies-form-group">
              <textarea
                name="message"
                placeholder="How we can help?"
                className="casestudies-form-textarea"
                rows={4}
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="casestudies-recaptcha">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>

            <button type="submit" className="casestudies-submit-btn">SEND</button>

            <p className="casestudies-privacy-notice">
              By submitting the form you agree to{" "}
              <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/legal/cookie-policy">Cookie Policy</a>.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
