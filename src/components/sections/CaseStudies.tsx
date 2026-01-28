import { caseStudies } from "../../data/clients";

export function CaseStudies(): string {
  return (
    <section className="case-studies section">
      <div className="case-studies-inner">
        <div className="section-title">
          <h2>Our stories</h2>
          <p>See how companies are building healthcare solutions with Aidbox</p>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <a href={`/case-study/${study.slug}`} className="case-study-card">
              <div className="case-study-logo">
                <img src={study.logo} alt={`${study.company} logo`} />
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{study.company}</h3>
                <p className="case-study-desc">{study.description}</p>
                <div className="case-study-tags">
                  {study.tags.map((tag) => (
                    <span className="case-study-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
