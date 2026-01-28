import { Fragment } from "../../lib/jsx-runtime";
import { caseStudies } from "../../data/clients";

type CaseStudy = (typeof caseStudies)[number];

// Find case study by slug for metadata
function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const metadata = {
  title: "Case Study",
  description: "See how companies are building healthcare solutions with Aidbox",
};

function NotFound(): string {
  return (
    <section className="section" style="text-align: center; padding: var(--space-24) 0;">
      <div className="container">
        <h1>Case Study Not Found</h1>
        <p style="color: var(--color-text-light); margin-bottom: var(--space-8);">
          The case study you're looking for doesn't exist.
        </p>
        <a href="/casestudies" className="btn btn-primary">
          View All Case Studies
        </a>
      </div>
    </section>
  );
}

function CaseStudyDetail({ study }: { study: CaseStudy }): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container">
          <a href="/casestudies" className="case-study-back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </a>
          <div className="case-study-hero-content">
            <div className="case-study-hero-logo">
              <img src={study.logo} alt={`${study.company} logo`} />
            </div>
            <h1>{study.title}</h1>
            <p className="case-study-hero-desc">{study.description}</p>
            <div className="case-study-hero-tags">
              {study.tags.map((tag) => (
                <span className="case-study-hero-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-study-results">
        <div className="container">
          <h2>Key Results</h2>
          <div className="case-study-results-grid">
            {study.results.map((result) => (
              <div className="case-study-result-card">
                <svg className="case-study-result-icon" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-study-cta">
        <div className="container">
          <h2>Ready to build your healthcare solution?</h2>
          <p>
            Join {study.company} and other innovative companies using Aidbox to power their FHIR-based applications.
          </p>
          <div className="case-study-cta-buttons">
            <a href="/contacts" className="btn btn-primary">Get in Touch</a>
            <a href="/price" className="btn btn-secondary">View Pricing</a>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="case-study-related">
        <div className="container">
          <h2>More Success Stories</h2>
          <div className="case-study-related-grid">
            {caseStudies
              .filter((cs) => cs.slug !== study.slug)
              .slice(0, 3)
              .map((cs) => (
                <a href={`/case-study/${cs.slug}`} className="case-study-related-card">
                  <div className="case-study-related-logo">
                    <img src={cs.logo} alt={`${cs.company} logo`} />
                  </div>
                  <h3>{cs.company}</h3>
                  <p>{cs.title}</p>
                </a>
              ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default function CaseStudyPage(params: { slug: string }): string {
  const study = findCaseStudy(params.slug);

  if (!study) {
    return NotFound();
  }

  return CaseStudyDetail({ study });
}
