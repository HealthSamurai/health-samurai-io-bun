// Generated from Webflow HTML (1:1 JSX)
// Source: /Users/niquola/health-samurai/webflow/snapshots/payers.html

import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title:
    "Health Insurance FHIR software. FHIR Compliant with the new CMS FHIR rule",
  description:
    "By Jan 1, 2021 health plans must allow their members to access their claims and encounter information over standards-based secure API (FHIR 4.0.1). Data must be made available no later than one business day after a claim is adjudicated or encounter data are received.",
};

export default function PayersWebflow(): string {
  return (
    <Fragment>
      <div className="hp-header-section">
         
        <div className="hp-header-container">
           
          <div className="w-row">
             
            <div className="column-64 w-col w-col-6 w-col-stack">
               
              <a
                href="#hp-request-form"
                className="hp-link-to-whitepaper w-inline-block"
              >
                 
                <div className="hp-label-header">
                   
                  <div>whitepaper </div> 
                </div> 
              </a> 
              <h1 className="hp-h1">Let's bring FHIR to your Health Plan </h1> 
              <p className="hp-header-desc">
                Aidbox 
                <a href="https://www.health-samurai.io/fhir-server">
                  FHIR server 
                </a> 
                helps health plans to comply with the CMS Interoperability and
                Patient Access rule without stress 
                <strong>in 3 to 6 months </strong>. 
              </p> 
            </div> 
            <div className="hp-header-img w-col w-col-6 w-col-stack">
               
              <div
                id="payers-form"
                className="hp-request-form-block-header w-form"
              >
                 
                <form
                  id="wf-form-Payers-Request"
                  name="wf-form-Payers-Request"
                  data-name="Payers Request"
                  method="get"
                  className="hp-service-form-container"
                  data-wf-page-id="65e700209ec2472550459ba2"
                  data-wf-element-id="9e6ae305-5ea6-88a3-1e8a-020fff059d3a"
                  aria-label="Payers Request"
                >
                   
                  <div className="hp-service-form-contacts">
                     
                    <input
                      className="text-field-3 w-input"
                      maxLength="256"
                      name="Person-Name"
                      data-name="Person Name"
                      placeholder="Name"
                      type="text"
                      id="Person-Name-3"
                      required
                    /> 
                    <input
                      className="text-field-4 w-input"
                      maxLength="256"
                      name="Email-Address"
                      data-name="Email Address"
                      placeholder="Email"
                      type="email"
                      id="Email-Address-3"
                      required
                    /> 
                    <input
                      className="text-field-5 w-input"
                      maxLength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone"
                      type="tel"
                      id="Phone"
                      required
                    /> 
                  </div> 
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="hp-service-btn-primary w-button"
                    value="Request a demo"
                  /> 
                </form> 
                <div
                  className="w-form-done"
                  tabIndex="-1"
                  role="region"
                  aria-label="Payers Request success"
                >
                   
                  <div>Thank you! Your submission has been received! </div> 
                </div> 
                <div
                  className="w-form-fail"
                  tabIndex="-1"
                  role="region"
                  aria-label="Payers Request failure"
                >
                   
                  <div>
                    Oops! Something went wrong while submitting the form. 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="hp-shift-section">
         
        <div className="hp-shift-container">
           
          <h2 className="hp-subheader">A shift to the FHIR ecosystem </h2> 
          <div className="columns-12 w-row">
             
            <div className="column-58 w-col w-col-6 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece36d55425b32ffd5002bb_solution%20copy%202.webp"
                width="627"
                alt
                loading="lazy"
                className="image-48"
              /> 
            </div> 
            <div className="column-59 w-col w-col-6 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece36e926790579ebbb1add_challenge%20copy%202.webp"
                width="627"
                alt
                loading="lazy"
                className="image-49"
              /> 
            </div> 
          </div> 
          <div className="w-row">
             
            <div className="hp-shift-column w-col w-col-6 w-col-stack">
               
              <div className="hp-shift-card hp-card-left">
                 
                <h3 className="hp-shift-h3">The Challenge </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  You have to share a provider directory, drug formulary,
                  claims, encounter, and clinical data with 3rd party apps over
                  HL7 FHIR API. It's not a simple task when this data is stored
                  in different formats across multiple systems. <br />‍ 
                </p> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece2ecbf1473aa2cd863bb7_alert.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Many sources of data in different formats 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece2ecbf1473aa2cd863bb7_alert.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Lack of expertise in HL7 FHIR and CARIN, DaVinci, US
                      Core 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece2ecbf1473aa2cd863bb7_alert.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Unfamiliar authorization flow 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ece2ecbf1473aa2cd863bb7_alert.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Limited time for implementation 
                    </div> 
                  </div> 
                </div> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-6 w-col-stack">
               
              <div className="hp-shift-card hp-card-right">
                 
                <h3 className="hp-shift-h3">The Solution </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Aidbox 
                  <a
                    href="https://www.health-samurai.io/fhir-server"
                    target="_blank"
                  >
                    FHIR Platform 
                  </a> 
                  allows you to achieve FHIR compliance timely and without
                  stress. The platform aggregates all required data with the
                  help of built-in adapters to a single FHIR repository and
                  provides a secure HL7 FHIR API for SMART on FHIR Apps. <br />
                  ‍ 
                </p> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Aidbox FHIR Platform with secure HL7 FHIR API v4.0.1 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Support of OAuth 2.0, OpenID Connect and SMART on
                      FHIR 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      FHIR Portal for Members, App vendors, and your Admins 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      width="100"
                      alt
                      loading="lazy"
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Automated Infrastructure with monitoring and audit
                      log 
                    </div> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="hp-features-section">
         
        <div className="hp-offer-container">
           
          <h2 className="hp-subheader">Key features </h2> 
          <div className="hp-feature-line w-row">
             
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab244d2ee10ebbc466dc_Integrations.webp"
                  width="100"
                  alt="FHIR compliance"
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">Integration capabilities </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Built-in adapters for X12 EDI, HL7 v2 feeds, and mapping
                  language for custom integrations facilitate aggregation and
                  translation of data. 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card hp-card-central">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab3ef461542572447deb_FHIR%20server.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">HL7 FHIR API </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  RESTful HL7 FHIR API v4.0.1 and SMART-on-FHIR specification
                  support allow compliant and secure access to data. <br />
                  ‍ 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab4d98be45f8976cd9b0_Access%20Control.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">FHIR Storage </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Scalable storage for FHIR data on top of PostgreSQL with JSONB
                  provides excellent performance for all your use cases. 
                </p> 
              </div> 
            </div> 
          </div> 
          <div className="hp-feature-line w-row">
             
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab5a1df520281ff38459_FHIR%20Portal.webp"
                  width="100"
                  alt="FHIR Rule Access"
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">Access control </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  OAuth 2.0 &amp; OpenID Connect auth 
                  <a href="https://www.health-samurai.io/fhir-server">
                    server 
                  </a> 
                  and access policies ensure security and allow single sign-on
                  with the existing member portal. 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card hp-card-central">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab68d8ef05e2594b213e_Monitoring.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">Monitoring &amp; Audit </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Automated Kubernetes infrastructure offers monitoring
                  dashboards, audit log, and point-in-time recovery while
                  keeping deployment and maintenance easy. 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab755115fb0333d771f7_Dev%20Platform.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">FHIR Portal </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  FHIR portal for members, app vendors, and administrators
                  allows intuitive management of application ecosystem and data
                  access. 
                </p> 
              </div> 
            </div> 
          </div> 
          <div className="hp-feature-line w-row">
             
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab5a1df520281ff38459_FHIR%20Portal.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">MPI module </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                   
                  <a
                    href="https://www.health-samurai.io/articles/master-patient-index-and-record-linkage"
                    target="_blank"
                  >
                     
                    <span>MPI </span> 
                  </a> 
                  module ensures that all the data coming from different sources
                  is associated with the right patient. <br />‍ 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card hp-card-central">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab68d8ef05e2594b213e_Monitoring.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">Terminology Server </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Built-in ICD-10, SNOMED, RxNorm, LOINC, and US NPI
                  terminologies validate the quality of data that is coming in. 
                  <br />‍ 
                </p> 
              </div> 
            </div> 
            <div className="hp-shift-column w-col w-col-4 w-col-stack">
               
              <div className="hp-feature-card">
                 
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9ab755115fb0333d771f7_Dev%20Platform.webp"
                  width="100"
                  alt
                  loading="lazy"
                  className="hp-feature-img"
                /> 
                <h3 className="hp-feature-h3">Development platform </h3> 
                <div className="div-block-41"></div> 
                <p className="hp-p">
                  Aidbox is a development platform with a rich set of API that
                  helps create an ecosystem of FHIR applications. Bring 3rd
                  party apps and build yours. 
                </p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div loading="lazy" className="hp-howitworks-section">
         
        <div className="hp-offer-container">
           
          <h2 className="hp-subheader">Your FHIR ecosystem </h2> 
          <div className="hp-feature-line w-row">
             
            <div className="hp-howworks-column w-col w-col-6 w-col-stack">
               
              <div className="div-block-42">
                 
                <h3 className="hp-howworks-h3">Journey with Aidbox </h3> 
                <p className="hp-p">
                  To help you meet the new CMS policies, we assembled the Aidbox 
                  <a href="/fhir-server" target="_blank">
                    FHIR server 
                  </a> 
                  for Health Plans. It can be deployed side by side with your
                  existing solutions and integrates into existing data flows.
                  Aidbox aggregates all the data required to be made available
                  through the FHIR API. We provide dedicated FHIR experts who
                  help to deploy, integrate, and configure Aidbox to accommodate
                  your data sources, authorization and member portal
                  technologies, branding, and other specific requirements. 
                </p> 
                <h4 className="hp-howworks-h4">step-by-step guide </h4> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      alt
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Deployment of Aidbox Platform to the infrastructure of
                      your choice 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      alt
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Integration of Aidbox with existing data sources/data
                      flows 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      alt
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Configuration of OAuth 2.0 Authorization Flow 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      alt
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Configuration of single sign-on for 
                      <a
                        href="https://www.health-samurai.io/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not"
                        target="_blank"
                      >
                        FHIR 
                      </a> 
                      and member portals 
                    </div> 
                  </div> 
                </div> 
                <div className="hp-how-item w-row">
                   
                  <div className="hp-how-item-marker w-col w-col-1">
                     
                    <img
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9afa4d8ef057acd4b4320_check.webp"
                      alt
                      className="hp-how-icon"
                    /> 
                  </div> 
                  <div className="hp-how-item-textblock w-col w-col-11">
                     
                    <div className="hp-p">
                      Publishing API documentation for App Vendors 
                    </div> 
                  </div> 
                </div> 
                <a href="#hp-request-form" className="hp-how-btn w-button">
                  get white paper 
                </a> 
              </div> 
            </div> 
            <div className="hp-howworks-column-img w-col w-col-6 w-col-stack">
               
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5ea9b022d8ef055aec4b4847_fhir_platform.webp"
                width="581.5"
                alt="FHIR rule software"
                loading="lazy"
                className="image-46"
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
                                  a 
                                  <a href="https://www.health-samurai.io/aidbox">
                                    FHIR backend 
                                  </a> 
                                  that can handle FHIR data with good
                                  performance at scale. They chose Aidbox after
                                  completing a POC (Proof of Concept) project
                                  where they loaded 10 TB of FHIR data into
                                  Aidbox and optimized it to handle 120 FHIR
                                  queries running under 100 ms each. <br /> 
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
                                  extensible 
                                  <a href="https://www.health-samurai.io/aidbox">
                                    FHIR backend 
                                  </a>
                                  , enhancing their AI platform's ability to
                                  efficiently predict sepsis through seamless
                                  integration with their ML algorithms. <br />‍ 
                                  <br /> 
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
                                  dedicated 
                                  <a href="https://www.health-samurai.io/aidbox">
                                    FHIR server 
                                  </a> 
                                  for data normalization. Normalized data is
                                  then aggregated to a global regional FHIR
                                  server, which harmonizes data from several
                                  FHIR servers into a clean longitudinal medical
                                  record. <br /> <br /> 
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
      <div loading="lazy" className="hp-clients-section">
         
        <div className="hp-offer-container">
           
          <h2 className="hp-subheader">
            Clients that trust the Aidbox Platform 
          </h2> 
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
      <div
        id="hp-request-form"
        loading="lazy"
        className="hp-request-form-section"
      >
         
        <div className="service-form-container w-container">
           
          <div id="payers-form" className="hp-request-form-block w-form">
             
            <h2 className="hp-request-form-h2">
              Start a conversation with us 
            </h2> 
            <p className="hp-p hp-p-centr hp-460">
              Please fill out a form and we will send you our white paper and
              schedule a demo <br /> 
            </p> 
            <form
              id="wf-form-Payers-Request"
              name="wf-form-Payers-Request"
              data-name="Payers Request"
              method="get"
              className="hp-service-form"
              data-wf-page-id="65e700209ec2472550459ba2"
              data-wf-element-id="a61d92c3-b75f-3578-690d-71ed71e8e204"
              aria-label="Payers Request"
            >
               
              <div className="service-form-contacts">
                 
                <label htmlFor="Person-Name" className="hp-form-label">
                  Name 
                </label> 
                <input
                  className="w-input"
                  maxLength="256"
                  name="Person-Name"
                  data-name="Person Name"
                  placeholder
                  type="text"
                  id="Person-Name"
                  required
                /> 
                <label htmlFor="Email-Address-3" className="hp-form-label">
                  Email 
                </label> 
                <input
                  className="w-input"
                  maxLength="256"
                  name="Email-Address"
                  data-name="Email Address"
                  placeholder
                  type="email"
                  id="Email-Address"
                  required
                /> 
                <label htmlFor="Phone-2" className="hp-form-label">
                  Phone 
                </label> 
                <input
                  className="w-input"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder
                  type="tel"
                  id="Phone-2"
                  required
                /> 
              </div> 
              <input
                type="submit"
                data-wait="Please wait..."
                className="service-btn-primary w-button"
                value="request a demo & white paper"
              /> 
            </form> 
            <div
              className="w-form-done"
              tabIndex="-1"
              role="region"
              aria-label="Payers Request success"
            >
               
              <div>Thank you! Your submission has been received! </div> 
            </div> 
            <div
              className="w-form-fail"
              tabIndex="-1"
              role="region"
              aria-label="Payers Request failure"
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
