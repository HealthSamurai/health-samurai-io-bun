// Hero section with main Aidbox header

import { Component } from "../../lib/component";

export function HeroSection(): string {
  return (
    <Component name="pages/index/HeroSection" className="home-header-section">
      <div className="home-header-container">
        <h1 className="home-h1-2020">
          Let's implement your ideas on FHIR
          <span className="h1" aria-hidden="true"></span>
        </h1>
        <div className="main-aidbox-header">
          <div className="columns-31 w-row">
            <div className="column-109 w-col w-col-6 w-col-stack">
              <p className="main-aidbox-header-subtitle">
                <span className="text-span-18">
                  <strong className="bold-text-38">&gt;_ </strong>
                </span>
                <strong> Hello, Aidbox </strong>
              </p>
              <h2 className="main-aidbox-header-title">
                <strong className="main-aidbox-header-title">
                  FHIR Platform
                </strong>
              </h2>
              <p className="main-aidbox-header-p">
                Full-blown <a href="/fhir-server">FHIR server </a> that
                drastically reduces time and effort for your Health IT solution
                development.
              </p>
              <div className="div-block-58">
                <a
                  href="https://www.health-samurai.io/fhir-server#Contactus"
                  id="home-book-demo-button"
                  className="main-aidbox-header-primary-btn w-button"
                >
                  <strong>BOOK A DEMO </strong>
                </a>
                <a
                  href="/fhir-server"
                  id="home-aidbox-read-more"
                  className="main-aidbox-header-primary-btn secondary_btn_transp w-button"
                >
                  <strong>read more &gt; </strong>
                </a>
              </div>
            </div>
            <div className="column-98 w-col w-col-6 w-col-stack">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/602a2c95b4409e38b2d23295_aidbox-logo.svg"
                loading="eager"
                width="102.5"
                alt="Aidbox logo"
                className="main-aidbox-header-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Component>
  );
}
