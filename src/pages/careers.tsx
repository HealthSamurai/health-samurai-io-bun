import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Join Health Samurai Team",
  description: "Health Samurai is crafting the next generation health IT FHIR platform called Aidbox and is looking for a holistic engineer based in the United States with knowledge of Clojure, PostgreSQL, Kubernetes, re-frame, TDD, and pair programming. LEAN thinking and knowledge of HL7 FHIR will be beneficial.",
};

// Skill tags for the job listing
const skillTags = [
  "Clojure",
  "PostgreSQL",
  "Kubernetes",
  "re-frame",
  "HL7 FHIR",
  "TDD",
  "LEAN",
  "Pair programming",
];

function JobDetailsSection(): string {
  return (
    <div className="careers-job-details">
      <h1>Join the team!</h1>
      <h3>Clojure developer</h3>
      <p className="careers-job-description">
        Health Samurai is crafting the next generation health IT FHIR platform called Aidbox and is looking for a holistic engineer based in the United States with knowledge of Clojure, PostgreSQL, Kubernetes, re-frame, TDD, and pair programming. LEAN thinking, and knowledge of HL7 FHIR will be beneficial.
      </p>
      <div className="careers-skill-tags">
        {skillTags.map((skill) => (
          <span className="careers-skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ApplicationFormSection(): string {
  return (
    <div className="careers-form-card">
      <form className="careers-form" hx-post="/api/careers/apply" hx-swap="outerHTML">
        <div className="careers-form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
          />
        </div>

        <div className="careers-form-group">
          <label htmlFor="cvResume">CV/Resume</label>
          <textarea
            id="cvResume"
            name="cvResume"
            rows={3}
          ></textarea>
        </div>

        <div className="careers-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="careers-form-group">
          <label htmlFor="linkedin">LinkedIn Profile</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
          />
        </div>

        <div className="careers-form-group">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            id="github"
            name="github"
          />
        </div>

        <div className="careers-form-group">
          <label htmlFor="clojureExp">Clojure experience (years)</label>
          <input
            type="number"
            id="clojureExp"
            name="clojureExp"
          />
        </div>

        <div className="careers-form-group">
          <label htmlFor="programmingExp">Programming experience (years)</label>
          <textarea
            id="programmingExp"
            name="programmingExp"
            rows={3}
            placeholder="Programming languages, skills etc"
          ></textarea>
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="careers-recaptcha">
          <div className="careers-recaptcha-box">
            <input type="checkbox" id="recaptcha-check" className="careers-recaptcha-checkbox" />
            <label htmlFor="recaptcha-check" className="careers-recaptcha-label">I'm not a robot</label>
            <div className="careers-recaptcha-branding">
              <span className="careers-recaptcha-text">reCAPTCHA</span>
              <span className="careers-recaptcha-terms">Privacy - Terms</span>
            </div>
          </div>
        </div>

        <button type="submit" className="careers-submit-btn">SEND</button>
      </form>
    </div>
  );
}

export default function CareersPage(): string {
  return (
    <Fragment>
      <section className="careers-main">
        <div className="container">
          <div className="careers-grid">
            <JobDetailsSection />
            <ApplicationFormSection />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
