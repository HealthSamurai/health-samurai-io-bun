// Generated from Webflow HTML (1:1 JSX)
// Source: /Users/niquola/health-samurai/webflow/snapshots/telemedicine.html

import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Let's build a customizable telemedicine FHIR platform",
  description:
    "We help companies create their own telehealth solution. Our cross-functional team takes the backbone solution and modifies it for your specific business needs.",
};

export default function TelemedicineWebflow(): string {
  return (
    <Fragment>
      <div className="hp-header-section">
         
        <div className="telemed-header-container">
           
          <div className="telemed-header-cols w-row">
             
            <div className="column-64 w-col w-col-6 w-col-stack">
               
              <a
                href="#telemed-request-form"
                className="hp-link-to-whitepaper w-inline-block"
              >
                 
                <div className="hp-label-header">
                   
                  <div>Aidbox Telehealth </div> 
                </div> 
              </a> 
              <h1 className="telemed-h1">
                Let's build a customizable telemedicine FHIR platform 
              </h1> 
              <p className="telemed-header-desc">
                We help companies create their own 
                <strong>telehealth solution </strong>. Our cross-functional team
                takes the 
                <a href="#telemed-solution-components">backbone solution </a> 
                and modifies it for your specific business needs. 
              </p> 
            </div> 
            <div className="telemed-header-img w-col w-col-6 w-col-stack">
               
              <div
                id="telemed-form"
                msCodeFormNoRedirect
                className="telemed-request-form-block-header w-form"
              >
                 
                <form
                  id="wf-form-Telemed-Request-2"
                  name="wf-form-Telemed-Request"
                  data-name="Telemed Request"
                  action="https://telemed.d-chistoforov.workers.dev"
                  method="post"
                  msCodeFormNoRedirect
                  className="telemed-form-container-header"
                  data-wf-page-id="65e700209ec2472550459c08"
                  data-wf-element-id="9e6ae305-5ea6-88a3-1e8a-020fff059d3a"
                  aria-label="Telemed Request"
                >
                   
                  <div
                    msCodeFormNoRedirect
                    className="telemed-service-form-contacts"
                  >
                     
                    <input
                      className="text-field-3 w-input"
                      maxLength="256"
                      name="Name"
                      data-name="Name"
                      placeholder="Name"
                      type="text"
                      id="Telemed-name"
                      required
                    /> 
                    <input
                      className="global-textinput text-field-4 w-input"
                      maxLength="256"
                      name="Company-Name"
                      data-name="Company Name"
                      placeholder="Company"
                      type="text"
                      id="Company-Name"
                      required
                    /> 
                    <input
                      className="text-field-4 w-input"
                      maxLength="256"
                      name="Business-Email"
                      data-name="Business Email"
                      placeholder="Business Email"
                      type="email"
                      id="Business-Email"
                      required
                    /> 
                    <input
                      className="text-field-5 w-input"
                      maxLength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone"
                      type="tel"
                      id="Telemed-phone"
                      required
                    /> 
                  </div> 
                  <textarea
                    id="Telemed-Request"
                    name="Telemed-Request"
                    maxLength="5000"
                    data-name="Telemed Request"
                    placeholder="Tell us about your needs or project"
                    required
                    className="textarea-2 w-input"
                  ></textarea> 
                  <div className="w-embed w-script"> </div> 
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="telemed-service-btn-primary w-button"
                    value="Let's talk"
                  /> 
                  <input type="hidden" name="hutk" value /> 
                  <input type="hidden" name="ipAddress" value /> 
                  <input type="hidden" name="pageUri" value /> 
                  <input type="hidden" name="pageId" value /> 
                  <input type="hidden" name="pageName" value /> 
                </form> 
                <div
                  className="w-form-done"
                  tabIndex="-1"
                  role="region"
                  aria-label="Telemed Request success"
                >
                   
                  <div>Thank you! Your submission has been received! </div> 
                </div> 
                <div
                  className="w-form-fail"
                  tabIndex="-1"
                  role="region"
                  aria-label="Telemed Request failure"
                >
                   
                  <div>
                    Oops! Something went wrong while submitting the form. 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
          <div className="telemed-benefit-cols w-row">
             
            <div className="column-77 w-col w-col-3">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad06adca86a879786ea85b_Boilerplate.svg"
                loading="lazy"
                width="88"
                height
                alt
                className="telemed-benefit-icon"
              /> 
              <div className="telemed-benefit-title">Aidbox Telehealth </div> 
              <div className="telemed-benefit-desc">
                Rapid development on top of the backbone solution with basic 
                <br />
                end-to-end scenario 
              </div> 
            </div> 
            <div className="column-78 w-col w-col-3">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad06add5b53e4e3b3572e9_Backend.svg"
                loading="lazy"
                width="88"
                alt
                className="telemed-benefit-icon"
              /> 
              <div className="telemed-benefit-title">FHIR Backend </div> 
              <div className="telemed-benefit-desc">
                Ready-to-use backend based on HL7 FHIR with HIPAA eligible
                infrastructure 
              </div> 
            </div> 
            <div className="column-79 w-col w-col-3">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad06af1832395d8ccdf739_Team.svg"
                loading="lazy"
                width="88"
                alt
                className="telemed-benefit-icon"
              /> 
              <div className="telemed-benefit-title">Skilled Dev Team </div> 
              <div className="telemed-benefit-desc">
                Our cross-functional team carries out a wide range of activities
                from design to deployment 
              </div> 
            </div> 
            <div className="column-80 w-col w-col-3">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad06adcbc8b413e22b3c53_Process.svg"
                loading="lazy"
                width="88"
                alt
                className="telemed-benefit-icon"
              /> 
              <div className="telemed-benefit-title">
                Agile &amp; Lean Process 
              </div> 
              <div className="telemed-benefit-desc">
                Weekly planning and demo allow you to influence and control
                development 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="telemed-howitworks-section">
         
        <div className="telemed-howitworks-container">
           
          <h2 className="telemed-subheader">Product Implementation </h2> 
          <img
            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1746cbc8b480392b7c9f_timeline.svg"
            loading="lazy"
            width="720"
            alt
            className="telemed-timeline-img"
          /> 
        </div> 
      </div> 
      <div
        id="telemed-solution-components"
        loading="lazy"
        className="telemed-section-apps"
      >
         
        <div className="telemed-container">
           
          <h2 className="telemed-subheader">Aidbox Telehealth </h2> 
          <div className="telemed-subsection-apps-cols w-row">
             
            <div className="column-70 w-col w-col-6">
               
              <h3 className="telemed-subsection-title">
                Telehealth Apps 
              </h3> 
              <p className="telemed-subsection-desc">
                Web (React) and mobile (ReactNative) apps provide a basic
                end-to-end scenario. It allows patients and practitioners to
                manage appointments, view PHRs, make video-calls and chat. 
              </p> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Registration workflow 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Basic scheduling module 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Video calls (Integration with Twilio) 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">Live Chat </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Consult Note tool for Practitioners 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Basic Personal Health Records (PHR) 
                </p> 
              </div> 
            </div> 
            <div className="telemed-col-right w-col w-col-6">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad5b948c0e7c14d232febe_teledemo-gif.gif"
                loading="lazy"
                height
                width="511.5"
                alt
                className="image-52"
              /> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="telemed-section-backend">
         
        <div className="telemed-container">
           
          <div className="telemed-subsection-cols w-row">
             
            <div className="telemed-col-left w-col w-col-6">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad2841668c9043e23d8a2f_Aidbox.svg"
                loading="lazy"
                height="460"
                width="825.5"
                alt
                className="image-52"
              /> 
            </div> 
            <div className="telemed-col-right w-col w-col-6">
               
              <h3 className="telemed-subsection-title">
                Aidbox FHIR Backend 
              </h3> 
              <p className="telemed-subsection-desc">
                Aidbox 
                <a href="https://www.health-samurai.io/aidbox" target="_blank">
                  FHIR server 
                </a> 
                is a meta-data driven platform. It means that almost everything
                in Aidbox is represented as data (resources) and you can
                configure it. For example, REST endpoints (operations), resource
                definitions, profiles, and access policies are resources in
                Aidbox. 
              </p> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  FHIR Storage based on PostgreSQL and JSONB 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  FHIR REST API and API Gateway 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Additional APIs: SQL API, GraphQL 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Authorization Server: OAuth 2.0 &amp; OpenID Connect 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Security &amp; Access Control: Access Policies, SMART IG 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                   
                  <a
                    href="https://www.health-samurai.io/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not"
                    target="_blank"
                  >
                    FHIR 
                  </a> 
                  Terminology Server: ICD-10, LOINC, SNOMED CT 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Custom resources and FHIR/Aidbox Extensions 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  HL7 v.2, X12 Adapters 
                </p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="telemed-section-infra">
         
        <div className="telemed-container-infra">
           
          <div className="telemed-subsection-cols telemed-ccol-switch w-row">
             
            <div className="w-col w-col-6">
               
              <h3 className="telemed-subsection-title">
                HIPAA Eligible Infrastructure 
              </h3> 
              <p className="telemed-subsection-desc">
                Automated cloud infrastructure is built on Kubernetes (k8S) for
                AWS, Azure &amp; GCP and has solutions for backups, monitoring,
                logging. We use dev, staging, and production environments with
                automated CI/CD pipeline. 
              </p> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Development infrastructure: Dev / Staging / Production 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Automated CI/CD pipeline: Drone CI / Kustomize for k8S 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  DB Replication and Backups 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Monitoring based on Prometheus &amp; Grafana 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  Audit Log based on ElasticSearch / Kibana / Grafana 
                </p> 
              </div> 
              <div className="telemed-section-item">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad1b23aaa0833e293f1886_item.svg"
                  loading="lazy"
                  height="32"
                  alt
                /> 
                <p className="telemed-subsection-subtitle">
                  File Storage to link to uploaded files 
                </p> 
              </div> 
            </div> 
            <div className="telemed-col-right w-col w-col-6">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5fad2a80cf85541e02fa689a_Infra.svg"
                loading="lazy"
                height="460"
                width="825.5"
                alt
                className="image-52"
              /> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="telemed-section-project-costs">
         
        <div className="telemed-container">
           
          <h2 className="telemed-subheader">Project Cost Structure </h2> 
          <div className="div-block-50">
             
            <div className="telemed-cost-item fafafa w-row">
               
              <div className="column-71 w-col w-col-1">
                 
                <div className="telemed-cost-item-number telemed-bold-p">
                  # 
                </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc telemed-bold-p">
                  Pricing 
                </div> 
              </div> 
            </div> 
            <div className="telemed-cost-item w-row">
               
              <div className="column-72 w-col w-col-1">
                 
                <div className="telemed-cost-item-number">#1 </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc">Team Cost </div> 
              </div> 
            </div> 
            <div className="telemed-cost-item w-row">
               
              <div className="column-73 w-col w-col-1">
                 
                <div className="telemed-cost-item-number">#2 </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc">
                  Aidbox License fee 
                  <span className="text-span-23">* </span> 
                </div> 
              </div> 
            </div> 
            <div className="telemed-cost-item w-row">
               
              <div className="column-74 w-col w-col-1">
                 
                <div className="telemed-cost-item-number">#3 </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc">
                  Aidbox Support fee 
                  <span className="text-span-23">** </span> 
                </div> 
              </div> 
            </div> 
            <div className="telemed-cost-item w-row">
               
              <div className="column-75 w-col w-col-1">
                 
                <div className="telemed-cost-item-number">#4 </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc">
                  External Platforms fees 
                </div> 
              </div> 
            </div> 
            <div className="telemed-cost-item w-row">
               
              <div className="column-76 w-col w-col-1">
                 
                <div className="telemed-cost-item-number">#5 </div> 
              </div> 
              <div className="w-col w-col-11">
                 
                <div className="telemed-cost-item-desc">
                  Cloud Infrastructure fee 
                </div> 
              </div> 
            </div> 
            <div className="telemed-pricing-btn-column"></div> 
            <a
              href="#telemed-request-form"
              className="telemed-pricing-request-btn w-button"
            >
              get pricing 
            </a> 
          </div> 
          <div className="telemed-cost-item-notes">
            You don't have to pay for the license and support fee as long as
            Health Samurai is engaged in a development contract. <br /> 
            <span className="text-span-24">* </span> - Aidbox License fee / if
            we don’t have an active development contract <br /> 
            <span className="text-span-25">** </span> - Aidbox Support fee / if
            we don’t have an active development contract 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="telemed-clients-section">
         
        <div className="hp-offer-container">
           
          <h2 className="telemed-subheader">Trusted by </h2> 
          <div className="hp-clients-line w-row">
             
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5b994108bd293e89e8dba7a9_narus.webp"
                width="190"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5baa47449a52153187b29c0b_metroderm-logo.webp"
                width="149.5"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5baa001b96725b4a8b3e60f7_uhn-logo.webp"
                width="320"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5baa47e8db34508c0ab1a890_bodylogic-logo.webp"
                width="424"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece16fd1757d398f7783bd2_logoynhh2x.webp"
                width="152"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
            <div className="hp-client-column w-col w-col-2 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece176edaf78c184754a72b_bestnotes.webp"
                width="170.5"
                alt
                loading="lazy"
                className="hp-client-logo"
              /> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="hp-casestudies-section hs-new-case">
         
        <div className="hp-offer-container">
           
          <h2 className="hp-subheader">Case Studies </h2> 
          <div className="explore__wrp">
             
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="0"
              data-duration-out="0"
              className="hs-tab__wrp w-tabs"
            >
               
              <div className="hs-tab__menu w-tab-menu" role="tablist">
                 
                <a
                  data-w-tab="Tab 1"
                  className="hs-tab__link w-inline-block w-tab-link w--current"
                  id="w-tabs-0-data-w-tab-0"
                  href="#w-tabs-0-data-w-pane-0"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-0"
                  aria-selected="true"
                >
                   
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ecc3d84de30d0dcd21_Icon.svg"
                    alt
                    className="hs-tab__icon"
                  /> 
                  <div>
                     
                    <span className="mobile">Data </span>platforms 
                  </div> 
                </a> 
                <a
                  data-w-tab="Tab 2"
                  className="hs-tab__link w-inline-block w-tab-link"
                  tabIndex="-1"
                  id="w-tabs-0-data-w-tab-1"
                  href="#w-tabs-0-data-w-pane-1"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-1"
                  aria-selected="false"
                >
                   
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec4e626f8c3a5edb7c_Icon-1.svg"
                    alt
                    className="hs-tab__icon"
                  /> 
                  <div>EHR </div> 
                </a> 
                <a
                  data-w-tab="Tab 3"
                  className="hs-tab__link w-inline-block w-tab-link"
                  tabIndex="-1"
                  id="w-tabs-0-data-w-tab-2"
                  href="#w-tabs-0-data-w-pane-2"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-2"
                  aria-selected="false"
                >
                   
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec61851e31b2b83524_Icon-2.svg"
                    alt
                    className="hs-tab__icon"
                  /> 
                  <div>CDS </div> 
                </a> 
                <a
                  data-w-tab="Tab 4"
                  className="hs-tab__link w-inline-block w-tab-link"
                  tabIndex="-1"
                  id="w-tabs-0-data-w-tab-3"
                  href="#w-tabs-0-data-w-pane-3"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-3"
                  aria-selected="false"
                >
                   
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64eeac8ea42647f50f5c_Icon-4.svg"
                    alt
                    className="hs-tab__icon"
                  /> 
                  <div>Telehealth </div> 
                </a> 
                <a
                  data-w-tab="Tab 5"
                  className="hs-tab__link w-inline-block w-tab-link"
                  tabIndex="-1"
                  id="w-tabs-0-data-w-tab-4"
                  href="#w-tabs-0-data-w-pane-4"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-4"
                  aria-selected="false"
                >
                   
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb64ec52e20b3dc69cbd25_Icon-3.svg"
                    alt
                    className="hs-tab__icon"
                  /> 
                  <div>PHR </div> 
                </a> 
              </div> 
              <div className="hs-tab__content w-tab-content">
                 
                <div
                  data-w-tab="Tab 1"
                  className="hs-tab__pane w-tab-pane w--tab-active"
                  id="w-tabs-0-data-w-pane-0"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-0"
                >
                   
                  <div className="slider__wrp">
                     
                    <div className="slider-main_component">
                       
                      <div className="swiper is-slider-tabs">
                         
                        <div className="swiper-wrapper is-slider-tabs">
                           
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4cc01961f08b45273_innovacer.avif"
                                    className="video-logo innovaccer"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Innovaccer is developing a data platform for
                                    value-based care, using FHIR for storing
                                    healthcare data. 
                                  </strong> 
                                  <br /> <br />
                                  They work with large volumes of data and need
                                  a FHIR backend that can handle FHIR data with
                                  good performance at scale. They chose Aidbox
                                  after completing a POC (Proof of Concept)
                                  project where they loaded 10 TB of FHIR data
                                  into Aidbox and optimized it to handle 120
                                  FHIR queries running under 100 ms each. <br /> 
                                  <br />
                                  Aidbox was running on AWS Aurora with 8, 16,
                                  and 32 CPU configurations, demonstrating up to
                                  5,000 requests per second. <br />‍ <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/innovaccer-chooses-aidbox-to-drive-interoperability-for-the-1-data-platform-for-value-based-healthcare?ysclid=lz13j7i54f409471228"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/img/placeholder-thumb.svg"
                                  alt
                                  className="hs-tab__vid-img"
                                /> 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff416c4d9b733dfa7be_rhapsody.avif"
                                    className="video-logo"
                                  /> 
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 58 60"
                                    fill="none"
                                    className="icon-play"
                                  >
                                     
                                    <path
                                      d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                      fill="currentColor"
                                    ></path> 
                                    <path
                                      d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                      fill="currentColor"
                                      className="play"
                                    ></path> 
                                  </svg> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Rhapsody is a developer of best-in-class
                                    interface engines, CorePoint and Rhapsody,
                                    which are used for exchanging HL7 v2 data by
                                    hundreds of organizations worldwide. 
                                    <br /> 
                                  </strong>
                                  ‍ <br />
                                  They needed to support the next generation of
                                  healthcare interoperability standards and APIs
                                  based on FHIR, and chose Aidbox as part of
                                  their new Healthcare API gateway solution. 
                                  <br /> <br />
                                  They successfully implemented the API gateway
                                  for a province in Canada that shares FHIR data
                                  for several million patients. <br />‍ <br /> 
                                  <a
                                    href="https://www.health-samurai.io/casestudies"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                        </div> 
                        <div className="fs-slider_navigation">
                           
                          <div className="swiper-bullet-wrapper">
                             
                            <div className="swiper-bullet is-active"></div> 
                            <div className="swiper-bullet"></div> 
                          </div> 
                        </div> 
                      </div> 
                      <div className="fs-slider_navigation">
                         
                        <button className="fs-slider_button swiper-prev">
                           
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M7.89649 1.72388L1.89648 7.72388L7.89648 13.7239"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                          <div className="txt__arrow">
                             
                            <span className="mobile">Previous </span> 
                            <span className="desc">story </span> 
                          </div> 
                        </button> 
                        <div className="btn__bg">
                           
                          <div className="center__frame">
                             
                            <a
                              href="/aidbox#run"
                              className="hs-new-button bold w-inline-block"
                            >
                               
                              <div>Try Aidbox for free </div> 
                            </a> 
                          </div> 
                        </div> 
                        <button className="fs-slider_button right swiper-next">
                           
                          <div className="txt__arrow">
                             
                            <span className="mobile">Next </span> 
                            <span className="desc">story </span> 
                          </div> 
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M1.51562 13.0128L7.51562 7.01282L1.51562 1.01282"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                        </button> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div
                  data-w-tab="Tab 2"
                  className="hs-tab__pane w-tab-pane"
                  id="w-tabs-0-data-w-pane-1"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-1"
                >
                   
                  <div className="slider__wrp">
                     
                    <div className="slider-main_component">
                       
                      <div className="swiper is-slider-tabs">
                         
                        <div className="swiper-wrapper is-slider-tabs">
                           
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb63a235b8a68070ffea83_narus.png"
                                    className="video-logo"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Leveraging many Aidbox features to address
                                    various backend concerns — including
                                    infrastructure, database, API, and
                                    terminology, they launched in six months
                                    with a five-engineer team. <br /> 
                                  </strong> 
                                  <br />
                                  The company swiftly scaled to 300 enterprise
                                  clients and was later acquired by Lucent
                                  Health, growing its client base to 3,000
                                  across various states. <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/casestudies"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/img/placeholder-thumb.svg"
                                  alt
                                  className="hs-tab__vid-img"
                                /> 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff470a0544a70d06346_bestnotes.avif"
                                    className="video-logo"
                                  /> 
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 58 60"
                                    fill="none"
                                    className="icon-play"
                                  >
                                     
                                    <path
                                      d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                      fill="currentColor"
                                    ></path> 
                                    <path
                                      d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                      fill="currentColor"
                                      className="play"
                                    ></path> 
                                  </svg> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    BestNotes is a successful behavioral health
                                    EHR company from Idaho that serves 2,000
                                    practices. <br /> 
                                  </strong> 
                                  <br />
                                  They wanted to modernize their EHR and build a
                                  cloud-based, multi-tenant SaaS EHR with a
                                  modern web UI and enhanced functionality. To
                                  make it future-proof, they decided to go with
                                  FHIR on the backend and looked for a
                                  FHIR-based backend that would provide enough
                                  flexibility to develop a full-blown EHR. They
                                  discovered Aidbox and loved it for its support
                                  of custom resources, SQL API, and easy
                                  multi-tenancy. <br /> <br />
                                  BestNotes builts the next generation of their
                                  EHR on top of Aidbox as its sole backend and
                                  are now migrating their clients to the new
                                  solution <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/casestudies"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/img/placeholder-thumb.svg"
                                  alt
                                  className="hs-tab__vid-img"
                                /> 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4a15ba5b8e3779e40_solutio.avif"
                                    className="video-logo solutio"
                                  /> 
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 58 60"
                                    fill="none"
                                    className="icon-play"
                                  >
                                     
                                    <path
                                      d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                      fill="currentColor"
                                    ></path> 
                                    <path
                                      d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                      fill="currentColor"
                                      className="play"
                                    ></path> 
                                  </svg> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Solutio is a German company specializing in
                                    management software for dentists, serving
                                    approximately 4,000 dental practices. 
                                    <br /> 
                                  </strong> 
                                  <br />
                                  Solutio hires Aidbox to modernize their dental
                                  EHR system, aiming to enhance interoperability
                                  with FHIR standard. The transition to Aidbox
                                  will enable Solutio to comply with German
                                  healthcare legislation and potentially expand
                                  the market. <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/casestudies"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                        </div> 
                        <div className="fs-slider_navigation">
                           
                          <div className="swiper-bullet-wrapper">
                             
                            <div className="swiper-bullet"></div> 
                            <div className="swiper-bullet is-active"></div> 
                          </div> 
                        </div> 
                      </div> 
                      <div className="fs-slider_navigation">
                         
                        <button className="fs-slider_button swiper-prev">
                           
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M7.89649 1.72388L1.89648 7.72388L7.89648 13.7239"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                          <div className="txt__arrow">
                             
                            <span className="mobile">Previous </span> 
                            <span className="desc">story </span> 
                          </div> 
                        </button> 
                        <div className="btn__bg">
                           
                          <div className="center__frame">
                             
                            <a
                              href="/aidbox#run"
                              className="hs-new-button bold w-inline-block"
                            >
                               
                              <div>Try Aidbox for free </div> 
                            </a> 
                          </div> 
                        </div> 
                        <button className="fs-slider_button right swiper-next">
                           
                          <div className="txt__arrow">
                             
                            <span className="mobile">Next </span> 
                            <span className="desc">story </span> 
                          </div> 
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M1.51562 13.0128L7.51562 7.01282L1.51562 1.01282"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                        </button> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div
                  data-w-tab="Tab 3"
                  className="hs-tab__pane w-tab-pane"
                  id="w-tabs-0-data-w-pane-2"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-2"
                >
                   
                  <div className="slider__wrp">
                     
                    <div className="slider-main_component">
                       
                      <div className="swiper is-slider-tabs">
                         
                        <div className="swiper-wrapper is-slider-tabs">
                           
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff4483522792dac4de1_prenosis.avif"
                                    className="video-logo prenosis"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Prenosis is a health tech innovator that
                                    leverages its ImmunixTM - precision medicine
                                    platform and the Sepsis ImmunoScoreTM - the
                                    first ever FDA authorized AI Diagnostic for
                                    Sepsis for the diagnosis of sepsis and the
                                    prediction of adverse outcomes. <br /> 
                                  </strong> 
                                  <br />
                                  Prenosis chose Aidbox for its scalable and
                                  extensible FHIR backend, enhancing their AI
                                  platform's ability to efficiently predict
                                  sepsis through seamless integration with their
                                  ML algorithms. <br />‍ <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/prenosis-receives-barda-contract-for-its-sepsis-diagnostic-tool-based-on-aidbox?ysclid=lz149lwlma550362211"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/img/placeholder-thumb.svg"
                                  alt
                                  className="hs-tab__vid-img"
                                /> 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff45a8c3e14c9a7e24d_medflow.avif"
                                    className="video-logo"
                                  /> 
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 58 60"
                                    fill="none"
                                    className="icon-play"
                                  >
                                     
                                    <path
                                      d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                      fill="currentColor"
                                    ></path> 
                                    <path
                                      d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                      fill="currentColor"
                                      className="play"
                                    ></path> 
                                  </svg> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Medflow is a population health tool designed
                                    by physicians to enhance cross-platform care
                                    workflows, integrating EHR and HIE with a
                                    FHIR foundation to streamline care pathways
                                    and reduce IT system complexity. <br /> 
                                  </strong> 
                                  <br />
                                  MedFlow has selected Aidbox to enhance their
                                  data management capabilities with the FHIR
                                  database, enabling the storage of integrated
                                  and standardized external EHR data. This
                                  selection facilitates the automation of custom
                                  patient care and financial analytics
                                  workflows. <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/casestudies"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                        </div> 
                        <div className="fs-slider_navigation">
                           
                          <div className="swiper-bullet-wrapper">
                             
                            <div className="swiper-bullet"></div> 
                            <div className="swiper-bullet is-active"></div> 
                          </div> 
                        </div> 
                      </div> 
                      <div className="fs-slider_navigation">
                         
                        <button className="fs-slider_button swiper-prev">
                           
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M7.89649 1.72388L1.89648 7.72388L7.89648 13.7239"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                          <div className="txt__arrow">
                             
                            <span className="mobile">Previous </span> 
                            <span className="desc">story </span> 
                          </div> 
                        </button> 
                        <div className="btn__bg">
                           
                          <div className="center__frame">
                             
                            <a
                              href="/aidbox#run"
                              className="hs-new-button bold w-inline-block"
                            >
                               
                              <div>Try Aidbox for free </div> 
                            </a> 
                          </div> 
                        </div> 
                        <button className="fs-slider_button right swiper-next">
                           
                          <div className="txt__arrow">
                             
                            <span className="mobile">Next </span> 
                            <span className="desc">story </span> 
                          </div> 
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M1.51562 13.0128L7.51562 7.01282L1.51562 1.01282"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                        </button> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div
                  data-w-tab="Tab 4"
                  className="hs-tab__pane w-tab-pane"
                  id="w-tabs-0-data-w-pane-3"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-3"
                >
                   
                  <div className="slider__wrp">
                     
                    <div fakeSlide="true" className="slider-main_component">
                       
                      <div fakeSlide="true" className="swiper is-slider-tabs">
                         
                        <div className="swiper-wrapper is-slider-tabs">
                           
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff42f1c2befa722cb52_willow.avif"
                                    className="video-logo willow"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Willowglade Technologies is a US tech
                                    company known for its patient-centric care
                                    coordination solutions for oncology and
                                    chronic conditions. <br /> 
                                  </strong> 
                                  <br />
                                  Willowglade employed Aidbox to achieve ONC
                                  compliance and enhance interoperability of
                                  their ‘Personal Health Navigator’ patient
                                  portal with EHR systems <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/willowglade-technologies-achieves-onc-compliance-with-the-assistance-of-aidbox-certified-tools"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff42f1c2befa722cb52_willow.avif"
                                    className="video-logo willow"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>
                                    Willowglade Technologies is a US tech
                                    company known for its patient-centric care
                                    coordination solutions for oncology and
                                    chronic conditions. <br /> 
                                  </strong> 
                                  <br />
                                  Willowglade employed Aidbox to achieve ONC
                                  compliance and enhance interoperability of
                                  their ‘Personal Health Navigator’ patient
                                  portal with EHR systems <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/willowglade-technologies-achieves-onc-compliance-with-the-assistance-of-aidbox-certified-tools"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                        </div> 
                        <div className="fs-slider_navigation">
                           
                          <div className="swiper-bullet-wrapper">
                             
                            <div className="swiper-bullet"></div> 
                            <div className="swiper-bullet is-active"></div> 
                          </div> 
                        </div> 
                      </div> 
                      <div className="fs-slider_navigation">
                         
                        <button className="fs-slider_button swiper-prev">
                           
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M7.89649 1.72388L1.89648 7.72388L7.89648 13.7239"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                          <div className="txt__arrow">
                             
                            <span className="mobile">Previous </span> 
                            <span className="desc">story </span> 
                          </div> 
                        </button> 
                        <div className="btn__bg">
                           
                          <div className="center__frame">
                             
                            <a
                              href="/aidbox#run"
                              className="hs-new-button bold w-inline-block"
                            >
                               
                              <div>Try Aidbox for free </div> 
                            </a> 
                          </div> 
                        </div> 
                        <button className="fs-slider_button right swiper-next">
                           
                          <div className="txt__arrow">
                             
                            <span className="mobile">Next </span> 
                            <span className="desc">story </span> 
                          </div> 
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M1.51562 13.0128L7.51562 7.01282L1.51562 1.01282"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                        </button> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div
                  data-w-tab="Tab 5"
                  className="hs-tab__pane w-tab-pane"
                  id="w-tabs-0-data-w-pane-4"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-4"
                >
                   
                  <div className="slider__wrp">
                     
                    <div fakeSlide="true" className="slider-main_component">
                       
                      <div fakeSlide="true" className="swiper is-slider-tabs">
                         
                        <div className="swiper-wrapper is-slider-tabs">
                           
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff37ab675d943eba3d8_patients.avif"
                                    className="video-logo"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>‍ </strong> 
                                  <strong>
                                    PatientsKnowBest is a PHR (Personal Health
                                    Record) technology vendor for the NHS that
                                    serves 15 million users, which is more than
                                    a quarter of the United Kingdom population. 
                                    <br /> 
                                  </strong> 
                                  <br />
                                  It is the first PHR to be integrated with the
                                  UK NHS network. They rebuilt their technology
                                  with a FHIR-native approach and not only used
                                  Aidbox for the backend but also built their
                                  patient portal UI using Aidbox Forms. <br /> 
                                  <br />
                                  Every non-FHIR data source receives its
                                  dedicated FHIR server for data normalization.
                                  Normalized data is then aggregated to a global
                                  regional FHIR server, which harmonizes data
                                  from several FHIR servers into a clean
                                  longitudinal medical record. <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/patients-know-best-chooses-aidbox-to-drive-interoperability-for-its-uk-based-phr"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                          <div className="swiper-slide is-slider-main">
                             
                            <div className="hs-tab__content-inner">
                               
                              <a
                                href="#"
                                className="hs-tab__video w-inline-block w-lightbox"
                                aria-label="open lightbox"
                                aria-haspopup="dialog"
                              >
                                 
                                <div className="hs-video-play__wrp">
                                   
                                  <img
                                    width="275"
                                    loading="lazy"
                                    alt
                                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/66bb7ff37ab675d943eba3d8_patients.avif"
                                    className="video-logo"
                                  /> 
                                  <div className="play-btn__wrp">
                                     
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 58 60"
                                      fill="none"
                                      className="icon-play"
                                    >
                                       
                                      <path
                                        d="M28.0441 1.05531C28.6715 0.684734 29.4508 0.684733 30.0782 1.05531L53.0903 14.6468C53.6995 15.0065 54.0732 15.6614 54.0732 16.3688V43.6312C54.0732 44.3386 53.6995 44.9935 53.0903 45.3532L30.0782 58.9447C29.4508 59.3153 28.6715 59.3153 28.0441 58.9447L5.03198 45.3532C4.42283 44.9935 4.04907 44.3386 4.04907 43.6312V16.3688C4.04907 15.6614 4.42283 15.0065 5.03198 14.6468L28.0441 1.05531Z"
                                        fill="currentColor"
                                      ></path> 
                                      <path
                                        d="M23.2617 20.7348C23.2617 19.945 24.1342 19.4669 24.7999 19.892L39.31 29.1572C39.9258 29.5504 39.9258 30.4497 39.31 30.8429L24.7999 40.1081C24.1342 40.5331 23.2617 40.055 23.2617 39.2653V20.7348Z"
                                        fill="currentColor"
                                        className="play"
                                      ></path> 
                                    </svg> 
                                    <div className="play-txt">
                                      Play video 
                                    </div> 
                                  </div> 
                                </div> 
                              </a> 
                              <div className="hs-content__txt-wrp">
                                 
                                <p className="hs-content__txt">
                                   
                                  <strong>‍ </strong> 
                                  <strong>
                                    PatientsKnowBest is a PHR (Personal Health
                                    Record) technology vendor for the NHS that
                                    serves 15 million users, which is more than
                                    a quarter of the United Kingdom population. 
                                    <br /> 
                                  </strong> 
                                  <br />
                                  It is the first PHR to be integrated with the
                                  UK NHS network. They rebuilt their technology
                                  with a FHIR-native approach and not only used
                                  Aidbox for the backend but also built their
                                  patient portal UI using Aidbox Forms. <br /> 
                                  <br />
                                  Every non-FHIR data source receives its
                                  dedicated FHIR server for data normalization.
                                  Normalized data is then aggregated to a global
                                  regional FHIR server, which harmonizes data
                                  from several FHIR servers into a clean
                                  longitudinal medical record. <br /> <br /> 
                                  <a
                                    href="https://www.health-samurai.io/news/patients-know-best-chooses-aidbox-to-drive-interoperability-for-its-uk-based-phr"
                                    target="_blank"
                                    className="hs-content__txt-link"
                                  >
                                    Full story 
                                  </a> 
                                </p> 
                              </div> 
                            </div> 
                          </div> 
                        </div> 
                        <div className="fs-slider_navigation">
                           
                          <div className="swiper-bullet-wrapper">
                             
                            <div className="swiper-bullet"></div> 
                            <div className="swiper-bullet is-active"></div> 
                          </div> 
                        </div> 
                      </div> 
                      <div className="fs-slider_navigation">
                         
                        <button className="fs-slider_button swiper-prev">
                           
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M7.89649 1.72388L1.89648 7.72388L7.89648 13.7239"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                          <div className="txt__arrow">
                             
                            <span className="mobile">Previous </span> 
                            <span className="desc">story </span> 
                          </div> 
                        </button> 
                        <div className="btn__bg">
                           
                          <div className="center__frame">
                             
                            <a
                              href="/aidbox#run"
                              className="hs-new-button bold w-inline-block"
                            >
                               
                              <div>Try Aidbox for free </div> 
                            </a> 
                          </div> 
                        </div> 
                        <button className="fs-slider_button right swiper-next">
                           
                          <div className="txt__arrow">
                             
                            <span className="mobile">Next </span> 
                            <span className="desc">story </span> 
                          </div> 
                          <div className="icon-arrow w-embed">
                             
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 15"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                d="M1.51562 13.0128L7.51562 7.01282L1.51562 1.01282"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg> 
                          </div> 
                        </button> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div
        id="telemed-request-form"
        loading="lazy"
        className="telemed-request-form-section"
      >
         
        <div className="telemed-form-container w-container">
           
          <div id="payers-form" className="telemed-request-form-block w-form">
             
            <h2 className="telemed-request-form-h2">
              Start a conversation with us 
            </h2> 
            <p className="telemed-section-desc-p">
              Please fill out this form and we'll be in touch shortly 
              <br /> 
            </p> 
            <form
              id="wf-form-Telemed-Request"
              name="wf-form-Telemed-Request"
              data-name="Telemed Request"
              method="get"
              data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/d0738b4c-7818-4f01-9965-11da0e8f1b9a"
              className="telemed-request-form"
              data-wf-page-id="65e700209ec2472550459c08"
              data-wf-element-id="a61d92c3-b75f-3578-690d-71ed71e8e204"
              aria-label="Telemed Request"
            >
               
              <div className="telemed-form">
                 
                <label htmlFor="Name-8" className="telemed-form-label">
                  Name 
                </label> 
                <input
                  className="text-field-6 w-input"
                  data-wfhsfieldname="name"
                  maxLength="256"
                  name="Name"
                  data-name="Name"
                  placeholder
                  type="text"
                  id="Name-8"
                  required
                /> 
                <label htmlFor="Email" className="telemed-form-label">
                  Email 
                </label> 
                <input
                  className="text-field-7 w-input"
                  data-wfhsfieldname="email"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder
                  type="email"
                  id="Email"
                  required
                /> 
                <label htmlFor="Phone-2" className="telemed-form-label">
                  Phone 
                </label> 
                <input
                  className="text-field-8 w-input"
                  data-wfhsfieldname="phone"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder
                  type="tel"
                  id="Telemed-phone-2"
                  required
                /> 
                <label htmlFor="Telemed-Request" className="telemed-form-label">
                  Tell us about your needs or project 
                </label> 
                <textarea
                  className="textarea-3 w-input"
                  data-wfhsfieldname="Tell-us-about-your-needs-or-project"
                  maxLength="5000"
                  name="Telemed-Request"
                  data-name="Telemed Request"
                  placeholder
                  id="Telemed-Request-2"
                  required
                ></textarea> 
              </div> 
              <input
                type="submit"
                data-wait="Please wait..."
                className="telemed-btn-primary w-button"
                value="Let's talk"
              /> 
              <input type="hidden" name="hutk" value /> 
              <input type="hidden" name="ipAddress" value /> 
              <input type="hidden" name="pageUri" value /> 
              <input type="hidden" name="pageId" value /> 
              <input type="hidden" name="pageName" value /> 
            </form> 
            <div
              className="w-form-done"
              tabIndex="-1"
              role="region"
              aria-label="Telemed Request success"
            >
               
              <div>Thank you! Your submission has been received! </div> 
            </div> 
            <div
              className="w-form-fail"
              tabIndex="-1"
              role="region"
              aria-label="Telemed Request failure"
            >
               
              <div>
                Oops! Something went wrong while submitting the form. 
              </div> 
            </div> 
          </div> 
        </div> 
      </div>
      <div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;">
         
        <div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div> 
        <div style="z-index: 2000000000; position: relative;"> </div> 
      </div> 
      <div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;">
         
        <div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div> 
        <div style="z-index: 2000000000; position: relative;"> </div> 
      </div>
    </Fragment>
  );
}
