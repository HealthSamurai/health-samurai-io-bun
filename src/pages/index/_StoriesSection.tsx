// Our Stories section with case studies

import { Component } from "../../lib/component";

export function StoriesSection(): string {
  return (
    <Component name="pages/index/StoriesSection" className="py-12">
      <div class="container">
        <h2 class="text-4xl md:text-5xl font-black leading-tight mb-6">Our stories</h2>
        <div className="w-row">
          <div className="column-32 w-col w-col-6 w-col-stack">
            <a
              id="w-node-_9523b69d-b6eb-1f2f-e2d4-c51d007dfaea-504599eb"
              href="https://www.health-samurai.io/case-study/prenosis-develops-immunix-for-precision-medicine-with-aidbox"
              target="_blank"
              className="draft-story-card-1 fix w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/677c08fe2fbefa57cee94009_Prenosis_logo_328_49.png"
                width="70"
                alt="choice logo"
                loading="lazy"
                className="draft-story-logo1 mb-24"
              />
              <h3 className="home-h3">Prenosis </h3>
              <p className="home-story-desc">
                How an artificial intelligence company, enabling precision
                medicine in acute care, built and launched the first
                FDA-authorized AI/ML sepsis diagnosis and prediction tool using
                the Aidbox FHIR platform. <br />‍ <br />
                Key results: <br /> <strong>• </strong> Obtained FDA marketing
                authorization as a Software as Medical Device (SaMD) <br />
                <strong>• </strong> Cut development time by 50% <br />
                <strong>• </strong> Integrated with 3 major hospitals using Epic
                EHR <br /> <strong>• </strong> 75K+ patients, 200K+ encounters,
                and 6M+ observations processed <br />
                <strong>• </strong> 5,000+ plasma samples managed and calculated
                ImmunoScores for nearly 1,200 study participants
                <br /> <br />
              </p>
              <p className="home-story-tags">
                <span className="home-tag">AI diagnostic tool </span>
                <span className="home-tag">Dataset </span>
                <span className="home-tag">
                  FHIR API <br /> Sepsis ImmunoScore™
                </span>
                <span className="home-tag">HL7 FHIR </span>
                <span className="home-tag">AI/ML tool </span>
              </p>
            </a>
            <a
              href="https://www.health-samurai.io/case-study/narushealth"
              target="_blank"
              className="home-story-card-col2--narus w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d15cbbc892a21c9ded6efa_naruslucent-removebg-preview%201.png"
                width="90"
                alt="Narus Health logo"
                loading="lazy"
                className="draft-story-logo2"
              />
              <h3 className="home-h3">Narus Health </h3>
              <p className="home-story-desc">
                How Narus Health, a Lucent Health company, has developed an
                integrated care management platform on top of the Aidbox FHIR
                backend, supporting patient care while enhancing outcomes and
                the recovery process. <br />‍
              </p>
              <p className="home-story-tags">
                <span className="home-tag">Care Management System </span>
                <span className="home-tag"> Care Plan </span> <br />‍
                <span className="home-tag">HL7 FHIR </span>
                <span className="home-tag">
                  Billing <br /> IGAO
                </span>
              </p>
            </a>
          </div>
          <div className="column-33 w-col w-col-6 w-col-stack">
            <a
              id="w-node-_9523b69d-b6eb-1f2f-e2d4-c51d007dfb07-504599eb"
              href="https://www.health-samurai.io/case-study/how-deep-6-ai-enhanced-ai-pipeline-performance-for-clinical-trial-recruitment-with-aidbox"
              target="_blank"
              className="home-story-card-col2-select w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d1516b8c4a7141698cd721_f32fb6af-d4cf-440c-bf46-b0b3c48e9532-1559840009994%201.png"
                width="90"
                alt="Deep 6 AI logo"
                loading="lazy"
                className="draft-story-logo2"
              />
              <h3 className="home-h3">Deep 6 AI </h3>
              <p className="home-story-desc">
                How a leader in precision research software enhanced its AI
                pipeline for clinical trial recruitment with the Aidbox FHIR
                server. <br /> <br />
                Key results: <br /> <strong>• </strong> Initial data load times
                reduced by 50% <br /> <strong>• </strong> 90% reduction in data
                validation errors <br /> <strong>• </strong> Real-time
                visibility into data processing status <br />‍
              </p>
              <p className="home-story-tags">
                <span className="home-tag">AI/NLP platform </span>
                <span className="home-tag">
                  PostgreSQL FHIR Storage Standardized FHIR APIs
                </span>
                <span className="home-tag">Subscriptions </span>
                <span className="home-tag">Real-Time and Dashboards </span>
              </p>
            </a>
            <a
              id="w-node-_9523b69d-b6eb-1f2f-e2d4-c51d007dfb11-504599eb"
              href="https://www.health-samurai.io/case-study/4medica-modernizes-clinical-data-infrastructure-with-aidbox"
              target="_blank"
              className="home-story-card-col2 w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67c7225871fabab5d9c6070c_4medica-logo.png"
                width="70"
                alt="4medica logo"
                loading="lazy"
                className="draft-story-logo2"
              />
              <h3 className="home-h3">4medica </h3>
              <p className="home-story-desc">
                How a leader in healthcare data management modernizes clinical
                data infrastructure with Aidbox, powering next-generation
                healthcare solutions. <br />‍ <br /> Key results: <br />
                <strong>• </strong> 4-week migration time <br />
                <strong>• </strong> 70% performance boost <br />
                <strong>• </strong> Upgrade from FHIR STU3 to R4 <br />
                <strong>• </strong> Native SQL capabilities for advanced
                analytics and reporting <br />‍
              </p>
              <p className="home-story-tags">
                <span className="home-tag">Clinical Viewer </span>
                <span className="home-tag">Patient Portal </span>
                <span className="home-tag">HL7 FHIR </span>
                <span className="home-tag">US Core 3.1.1 </span>
                <span className="home-tag">Bulk API </span>
                <span className="home-tag">FHIR Storage </span>
                <span className="home-tag">Profiling </span>
                <span className="home-tag">SaaS </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </Component>
  );
}
