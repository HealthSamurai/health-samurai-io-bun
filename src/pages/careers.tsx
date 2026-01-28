import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Careers at Health Samurai",
  description: "Join Health Samurai team. We're crafting the next generation health IT FHIR platform called Aidbox and looking for talented engineers.",
};

// Job listings
const jobs = [
  {
    id: "clojure-developer",
    title: "Clojure Developer",
    location: "United States (Remote)",
    type: "Full-time",
    description: "Health Samurai is crafting the next generation health IT FHIR platform called Aidbox and is looking for a holistic engineer based in the United States with knowledge of Clojure, PostgreSQL, Kubernetes, re-frame, TDD, and pair programming. LEAN thinking, and knowledge of HL7 FHIR will be beneficial.",
    skills: [
      "Clojure",
      "PostgreSQL",
      "Kubernetes",
      "re-frame",
      "HL7 FHIR",
      "TDD",
      "LEAN",
      "Pair programming",
    ],
    requirements: [
      "Strong proficiency in Clojure and functional programming",
      "Experience with PostgreSQL and database design",
      "Familiarity with Kubernetes and containerization",
      "Understanding of TDD principles and practices",
      "Excellent problem-solving skills",
      "Strong communication skills for pair programming",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Work on cutting-edge health IT technology",
      "Collaborative and supportive team environment",
      "Opportunity to contribute to open source projects",
      "Professional development opportunities",
    ],
  },
];

// Why join us values
const whyJoinUs = [
  {
    title: "Innovative Technology",
    description: "Work on Aidbox, a cutting-edge FHIR platform that's transforming healthcare IT.",
    icon: "rocket",
  },
  {
    title: "Remote First",
    description: "Work from anywhere with flexible hours and a distributed team across the globe.",
    icon: "globe",
  },
  {
    title: "Open Source",
    description: "Contribute to open source projects that benefit the entire healthcare community.",
    icon: "code",
  },
  {
    title: "Growth Opportunities",
    description: "Learn from industry experts and grow your skills in healthcare technology.",
    icon: "growth",
  },
];

function HeroSection(): string {
  return (
    <section className="careers-hero">
      <div className="container">
        <h1>Join the team!</h1>
        <p className="careers-hero-subtitle">
          Be part of a team that's transforming healthcare with innovative FHIR solutions
        </p>
      </div>
    </section>
  );
}

function WhyJoinSection(): string {
  return (
    <section className="careers-why">
      <div className="container">
        <h2 className="section-title">Why Health Samurai?</h2>
        <div className="why-grid">
          {whyJoinUs.map((item) => (
            <div className="why-card">
              <div className="why-icon">
                <img src={`/assets/images/icons/careers/${item.icon}.svg`} alt={item.title} />
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobListingsSection(): string {
  return (
    <section className="careers-jobs">
      <div className="container">
        <h2 className="section-title">Open Positions</h2>
        <div className="jobs-list">
          {jobs.map((job) => (
            <div className="job-card" id={job.id}>
              <div className="job-header">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {job.location}
                    </span>
                    <span className="job-type">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="job-description">
                <p>{job.description}</p>
              </div>

              <div className="job-skills">
                <h4>Skills</h4>
                <div className="skills-tags">
                  {job.skills.map((skill) => (
                    <span className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="job-details">
                <div className="job-requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((req) => (
                      <li>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-benefits">
                  <h4>Benefits</h4>
                  <ul>
                    {job.benefits.map((benefit) => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="#application-form" className="btn btn-primary job-apply-btn">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationFormSection(): string {
  return (
    <section className="careers-application" id="application-form">
      <div className="container">
        <h2 className="section-title">Apply Now</h2>
        <p className="application-intro">
          Ready to join our team? Fill out the form below and we'll get back to you.
        </p>
        <form
          className="application-form"
          hx-post="/api/careers-apply"
          hx-target="#application-result"
          hx-swap="innerHTML"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="full-name">Full Name *</label>
              <input type="text" id="full-name" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." />
            </div>
            <div className="form-group">
              <label htmlFor="github">GitHub</label>
              <input type="url" id="github" name="github" placeholder="https://github.com/..." />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="clojure-exp">Clojure Experience (years)</label>
              <input type="number" id="clojure-exp" name="clojureExperience" min="0" max="30" />
            </div>
            <div className="form-group">
              <label htmlFor="programming-exp">Programming Experience (years) *</label>
              <input type="number" id="programming-exp" name="programmingExperience" min="0" max="50" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="position">Position *</label>
            <select id="position" name="position" required>
              <option value="">Select a position</option>
              {jobs.map((job) => (
                <option value={job.id}>{job.title}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cv">CV/Resume *</label>
            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
            <span className="form-hint">Accepted formats: PDF, DOC, DOCX</span>
          </div>

          <div className="form-group">
            <label htmlFor="message">Cover Letter / Additional Information</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about yourself and why you'd like to join Health Samurai..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Submit Application
          </button>

          <div id="application-result" className="application-result"></div>
        </form>
      </div>
    </section>
  );
}

export default function CareersPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <HeroSection />

      {/* Why Join Us */}
      <WhyJoinSection />

      {/* Job Listings */}
      <JobListingsSection />

      {/* Application Form */}
      <ApplicationFormSection />

      {/* General Contact */}
      <section className="careers-contact">
        <div className="container">
          <h2 className="section-title">Have Questions?</h2>
          <p className="contact-intro">
            Don't see a position that fits? We're always looking for talented people. Send us your resume and tell us how you can contribute.
          </p>
          <a href="/contacts" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </section>
    </Fragment>
  );
}
