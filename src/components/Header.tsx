export function Header(): string {
  return (
    <div className="nb-scroll-hidden-copy" data-signals="{openMenu: ''}">
      <div className="nb-section-fhirbase">
        <div className="nb-container">
          <div className="nb-left-items">
            <a href="/" className="nb-item-logo w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
                loading="eager"
                width="64"
                height="64"
                alt="Health Samurai logo"
                className="nb-logo"
              />
            </a>
            <div
              className="nb-item-dropdown w-dropdown"
              data-class="{'w--open': $openMenu === 'products'}"
            >
              <div
                className="nb-dropdown-toggle w-dropdown-toggle"
                data-class="{'w--open': $openMenu === 'products'}"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
                data-on:click="$openMenu = $openMenu === 'products' ? '' : 'products'"
              >
                <div
                  className="nb-icon w-icon-dropdown-toggle transition-transform"
                  data-class="{'rotate-180': $openMenu === 'products'}"
                  aria-hidden="true"
                ></div>
                <div className="nb-item-text">Products</div>
              </div>
              <nav
                className="nb-dropdown-list w-dropdown-list absolute left-0 right-0 top-full w-full"
                data-class="{'w--open': $openMenu === 'products'}"
                data-show="$openMenu === 'products'"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
                style={{ display: "none" }}
              >
                <div className="nb-dropdown-list-container">
                  <div className="nb-submenu-container">
                    <div className="nb-item-list-cols w-row">
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title transparent">FHIR server</div>
                        <a href="/fhir-server" aria-current="page" className="nb-item-extended w-inline-block w--current" tabIndex={0}>
                          <div className="nb-item-ext-title">FHIR Server</div>
                          <div className="nb-item-ext-desc">Powerful backend for digital health developers</div>
                        </a>
                        <a href="/fhir-database" className="nb-item-extended w-inline-block" tabIndex={0}>
                          <div className="nb-item-ext-title">Fhirbase</div>
                          <div className="nb-item-ext-desc">Open source FHIR-native database for healthcare data</div>
                        </a>
                        <a href="/auditbox" className="nb-item-extended w-inline-block" tabIndex={0}>
                          <div className="nb-item-ext-title">Auditbox</div>
                          <div className="nb-item-ext-desc">FHIR-native Audit Record Repository for compliance and security</div>
                        </a>
                        <a
                          href="https://healthsamurai.github.io/formbox-renderer/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nb-item-extended w-inline-block"
                          tabIndex={0}
                        >
                          <div className="nb-item-ext-title">Open-Source Form Renderer</div>
                          <div className="nb-item-ext-desc">Render HL7® FHIR® Questionnaires across any UI system</div>
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">converters</div>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/modules/integration-toolkit/hl7-v2-integration"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          HL7v2 to FHIR converter
                        </a>
                        <a
                          href="https://www.health-samurai.io/c-cda-to-fhir-converter"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          C-CDA to FHIR converter
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">modules</div>
                        <a href="/medical-form" className="nb-link w-dropdown-link" tabIndex={0}>
                          Aidbox Forms
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/terminology-module/overview"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox Terminology
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/modules/other-modules/mpi"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox MPI
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/security-and-access-control-1/overview"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Auth Server
                        </a>
                        <a href="/e-prescription-module" rel="nofollow" className="nb-link w-dropdown-link" tabIndex={0}>
                          Aidbox E-Prescription
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <a
                          rel="nofollow"
                          href="https://aidbox.app/ui/portal#/signup"
                          target="_blank"
                          className="nb-item-banner w-inline-block"
                          tabIndex={0}
                        >
                          <div className="nb-banner-left">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                              loading="lazy"
                              alt="Aidbox logo"
                              height="48"
                              className="nb-banner-img"
                            />
                            <div className="nb-banner-title">Managed Aidbox</div>
                            <div className="nb-banner-desc">
                              Get started in minutes with a fully managed Aidbox FHIR platform and modules
                            </div>
                          </div>
                          <div className="nb-banner-right">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                              loading="lazy"
                              height="32"
                              alt="Right Arrow Icon"
                              className="nb-banner-arrow"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div
              className="nb-item-dropdown w-dropdown"
              data-class="{'w--open': $openMenu === 'solutions'}"
            >
              <div
                className="nb-dropdown-toggle w-dropdown-toggle"
                data-class="{'w--open': $openMenu === 'solutions'}"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
                data-on:click="$openMenu = $openMenu === 'solutions' ? '' : 'solutions'"
              >
                <div
                  className="nb-icon w-icon-dropdown-toggle transition-transform"
                  data-class="{'rotate-180': $openMenu === 'solutions'}"
                  aria-hidden="true"
                ></div>
                <div className="nb-item-text">Solutions</div>
              </div>
              <nav
                className="nb-dropdown-list w-dropdown-list absolute left-0 right-0 top-full w-full"
                data-class="{'w--open': $openMenu === 'solutions'}"
                data-show="$openMenu === 'solutions'"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
                style={{ display: "none" }}
              >
                <div className="nb-dropdown-list-container">
                  <div className="nb-submenu-container">
                    <div className="nb-item-list-cols w-row">
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">development</div>
                        <a href="/startups" className="nb-link w-dropdown-link" tabIndex={0}>
                          Aidbox for Startups
                        </a>
                        <a href="/healthcare-data-platform-toolkit-aidbox" className="nb-link w-dropdown-link" tabIndex={0}>
                          Aidbox for Data Platforms
                        </a>
                        <a href="/telemedicine" className="nb-link w-dropdown-link" tabIndex={0}>
                          Telemed development toolkit
                        </a>
                        <a href="/ehr-toolkit" className="nb-link w-dropdown-link" tabIndex={0}>
                          EHR development toolkit
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">Compliance</div>
                        <a href="/fhir-api" className="nb-link w-dropdown-link" tabIndex={0}>
                          ONC-certified API tools for EHRs
                        </a>
                        <a href="/payers" className="nb-link w-dropdown-link" tabIndex={0}>
                          FHIR API for Payers - CMS
                        </a>
                        <a href="/auditbox" className="nb-link w-dropdown-link" tabIndex={0}>
                          Audit Record Repository
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">others</div>
                        <a
                          href="https://www.health-samurai.io/articles/aidbox-for-wearable-and-medical-devices"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox for IoMT vendors
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <a
                          rel="nofollow"
                          href="https://aws.amazon.com/marketplace/pp/prodview-l5djlpvsd6o5g"
                          target="_blank"
                          className="nb-item-banner w-inline-block"
                          tabIndex={0}
                        >
                          <div className="nb-banner-left">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                              loading="lazy"
                              alt="Aidbox logo"
                              height="48"
                              className="nb-banner-img"
                            />
                            <div className="nb-banner-title">Aidbox on AWS</div>
                            <div className="nb-banner-desc">Get FHIR backend on AWS in one click.</div>
                          </div>
                          <div className="nb-banner-right">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                              loading="lazy"
                              height="32"
                              alt="Right Arrow Icon"
                              className="nb-banner-arrow"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <a rel="nofollow" href="/services" className="nb-item-link w-inline-block">
              <div className="nb-item-text">Services</div>
            </a>
            <div className="div-block-183"></div>

            <div
              className="nb-item-dropdown w-dropdown"
              data-class="{'w--open': $openMenu === 'resources'}"
            >
              <div
                className="nb-dropdown-toggle w-dropdown-toggle"
                data-class="{'w--open': $openMenu === 'resources'}"
                id="w-dropdown-toggle-2"
                aria-controls="w-dropdown-list-2"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
                data-on:click="$openMenu = $openMenu === 'resources' ? '' : 'resources'"
              >
                <div
                  className="nb-icon w-icon-dropdown-toggle transition-transform"
                  data-class="{'rotate-180': $openMenu === 'resources'}"
                  aria-hidden="true"
                ></div>
                <div className="nb-item-text">Docs &amp; Resources</div>
              </div>
              <nav
                className="nb-dropdown-list w-dropdown-list absolute left-0 right-0 top-full w-full"
                data-class="{'w--open': $openMenu === 'resources'}"
                data-show="$openMenu === 'resources'"
                id="w-dropdown-list-2"
                aria-labelledby="w-dropdown-toggle-2"
                style={{ display: "none" }}
              >
                <div className="nb-dropdown-list-container">
                  <div className="nb-submenu-container">
                    <div className="nb-item-list-cols w-row">
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">Resources</div>
                        <a href="/blog" className="nb-link w-dropdown-link" tabIndex={0}>
                          Blog
                        </a>
                        <a href="/downloads" className="nb-link w-dropdown-link" tabIndex={0}>
                          Downloads
                        </a>
                        <a href="/casestudies" className="nb-link w-dropdown-link" tabIndex={0}>
                          Case Studies
                        </a>
                        <a href="/events" className="nb-link w-dropdown-link" tabIndex={0}>
                          Events and Webinars
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/overview/release-notes"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Release Notes
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">docs</div>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox Docs
                        </a>
                        <a
                          href="https://fhirbase.aidbox.app/"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Fhirbase Docs
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/modules/aidbox-forms"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox Forms Docs
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/modules/other-modules/mpi"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox MPI Docs
                        </a>
                        <a
                          href="https://www.health-samurai.io/docs/aidbox/terminology-module/overview"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Aidbox Terminology
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">community</div>
                        <a
                          href="https://connect.health-samurai.io/"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          User Community
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <a
                          rel="nofollow"
                          href="https://www.health-samurai.io/docs/aidbox/getting-started/run-aidbox-in-sandbox"
                          target="_blank"
                          className="nb-item-banner w-inline-block"
                          tabIndex={0}
                        >
                          <div className="nb-banner-left">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                              loading="lazy"
                              alt="Aidbox logo"
                              height="48"
                              className="nb-banner-img"
                            />
                            <div className="nb-banner-title">Getting Started</div>
                            <div className="nb-banner-desc">
                              Step-by-step guide on how to start with the Aidbox FHIR platform
                            </div>
                          </div>
                          <div className="nb-banner-right">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                              loading="lazy"
                              height="32"
                              alt="Right Arrow Icon"
                              className="nb-banner-arrow"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div
              className="nb-item-dropdown w-dropdown"
              data-class="{'w--open': $openMenu === 'company'}"
            >
              <div
                className="nb-dropdown-toggle w-dropdown-toggle"
                data-class="{'w--open': $openMenu === 'company'}"
                id="w-dropdown-toggle-3"
                aria-controls="w-dropdown-list-3"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
                data-on:click="$openMenu = $openMenu === 'company' ? '' : 'company'"
              >
                <div
                  className="nb-icon w-icon-dropdown-toggle transition-transform"
                  data-class="{'rotate-180': $openMenu === 'company'}"
                  aria-hidden="true"
                ></div>
                <div className="nb-item-text">Company</div>
              </div>
              <nav
                className="nb-dropdown-list w-dropdown-list absolute left-0 right-0 top-full w-full"
                data-class="{'w--open': $openMenu === 'company'}"
                data-show="$openMenu === 'company'"
                id="w-dropdown-list-3"
                aria-labelledby="w-dropdown-toggle-3"
                style={{ display: "none" }}
              >
                <div className="nb-dropdown-list-container">
                  <div className="nb-submenu-container">
                    <div className="nb-item-list-cols w-row">
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">company</div>
                        <a href="/company" className="nb-link w-dropdown-link" tabIndex={0}>
                          About us
                        </a>
                        <a href="/careers" className="nb-link w-dropdown-link" tabIndex={0}>
                          Careers
                        </a>
                        <a href="/news" className="nb-link w-dropdown-link" tabIndex={0}>
                          News
                        </a>
                        <a href="/company" className="nb-link w-dropdown-link" tabIndex={0}>
                          Advisory Board
                        </a>
                        <a href="/contacts" className="nb-link w-dropdown-link" tabIndex={0}>
                          Contact us
                        </a>
                        <a href="/partners" className="nb-link w-dropdown-link" tabIndex={0}>
                          Aidbox Partner Network
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <div className="nb-item-col-title">follow us</div>
                        <a
                          href="https://github.com/Aidbox"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          GitHub
                        </a>
                        <a
                          href="https://www.linkedin.com/company/6653460"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://twitter.com/health_samurai"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Twitter
                        </a>
                        <a
                          href="https://www.facebook.com/healthsamurai/"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.crunchbase.com/organization/health-samurai"
                          rel="nofollow"
                          target="_blank"
                          className="nb-link w-dropdown-link"
                          tabIndex={0}
                        >
                          Crunchbase
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <a href="/fhir-api" className="nb-item-banner w-inline-block" tabIndex={0}>
                          <div className="nb-banner-left">
                            <div className="nb-banner-title">FHIR API for EHRs</div>
                            <div className="nb-banner-desc">
                              Enrich your EHR with a pluggable Aidbox FHIR® API module
                            </div>
                          </div>
                          <div className="nb-banner-right">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                              loading="lazy"
                              height="32"
                              alt="Right Arrow Icon"
                              className="nb-banner-arrow"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="nb-item-list-col w-col w-col-3">
                        <a href="/payers" className="nb-item-banner w-inline-block" tabIndex={0}>
                          <div className="nb-banner-left">
                            <div className="nb-banner-title">FHIR API for Payers</div>
                            <div className="nb-banner-desc">
                              Aidbox helps health plans to comply with the CMS Interoperability rule
                            </div>
                          </div>
                          <div className="nb-banner-right">
                            <img
                              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                              loading="lazy"
                              height="32"
                              alt="Right Arrow Icon"
                              className="nb-banner-arrow"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <a rel="nofollow" href="/price" className="nb-item-link w-inline-block">
              <div className="nb-item-text">Pricing</div>
            </a>
          </div>

          <div className="nb-right-items">
            <a
              id="Sign-up-Cross-Web"
              rel="nofollow"
              href="https://aidbox.app/ui/portal#/signup"
              target="_blank"
              className="nb-btn-primary w-button"
            >
              Sign up for free
            </a>
          </div>
        </div>

        <div
          className="nb-navbar-mobile w-nav"
          data-signals="{mobileMenuOpen: false}"
        >
          <div className="nb-container-mobile w-container">
            <div className="nb-mobile-subcontainer">
              <a href="/" className="nb-item-logo w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
                  alt="Health Samurai Logo"
                  width="128"
                  height="64"
                  className="nb-logo"
                />
              </a>
              <div
                className="nb-menu-button w-nav-button"
                style={{ WebkitUserSelect: "text" }}
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
          data-on:click="$mobileMenuOpen = !$mobileMenuOpen"
              >
                <div className="nb-menu-btn-icon w-icon-nav-menu"></div>
              </div>
            </div>
            <nav
              role="navigation"
              className="nb-navbar-mobile-list w-nav-menu"
              data-show="$mobileMenuOpen"
              style={{ display: "none" }}
            >
              <div className="nb-mobile-dropdown w-dropdown">
                <div
                  className="nb-mobile-submenu-item-title w-dropdown-toggle"
                  id="w-dropdown-toggle-4"
                  aria-controls="w-dropdown-list-4"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="nb-mobile-item-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                  <div className="text-block-45">Products</div>
                </div>
                <nav className="nb-mobile-submenu-items w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4">
                  <a href="/fhir-server" aria-current="page" className="nb-mobile-submenu-item w-dropdown-link w--current" tabIndex={0}>
                    Aidbox FHIR Server
                  </a>
                  <a href="/fhirbase" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Fhirbase
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/hl7-v2-integration"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    HL7v2 to FHIR Converter
                  </a>
                  <a
                    href="https://www.health-samurai.io/c-cda-to-fhir-converter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    C-CDA to FHIR Converter
                  </a>
                  <a href="/medical-form" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Aidbox Forms
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/terminology"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Terminology
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/mdm"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox MPI
                  </a>
                  <a
                    href="https://docs.aidbox.app/integrations/analytics"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Analytics
                  </a>
                  <a
                    href="https://docs.aidbox.app/security-and-access-control-1/overview"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Auth Server
                  </a>
                </nav>
              </div>

              <div className="nb-mobile-dropdown w-dropdown">
                <div
                  className="nb-mobile-submenu-item-title w-dropdown-toggle"
                  id="w-dropdown-toggle-5"
                  aria-controls="w-dropdown-list-5"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="nb-mobile-item-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                  <div className="text-block-45">Solutions</div>
                </div>
                <nav className="nb-mobile-submenu-items w-dropdown-list" id="w-dropdown-list-5" aria-labelledby="w-dropdown-toggle-5">
                  <a href="/startups" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Aidbox for Startups
                  </a>
                  <a
                    href="/healthcare-data-platform-toolkit-aidbox"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox for Data Platforms
                  </a>
                  <a href="/telemedicine" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Telemed development toolkit
                  </a>
                  <a href="/ehr-toolkit" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    EHR development toolkit
                  </a>
                  <a href="/fhir-api" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    ONC-certified API tools for EHRs
                  </a>
                  <a href="/payers" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    FHIR API for Payers - CMS
                  </a>
                  <a
                    href="https://www.health-samurai.io/articles/aidbox-for-wearable-and-medical-devices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox for IoMT vendors
                  </a>
                </nav>
              </div>

              <a rel="nofollow" href="/services" className="nb-item-link-mobile w-inline-block">
                <div className="nb-item-text-mobile">Services</div>
              </a>

              <div className="nb-mobile-dropdown w-dropdown">
                <div
                  className="nb-mobile-submenu-item-title w-dropdown-toggle"
                  id="w-dropdown-toggle-6"
                  aria-controls="w-dropdown-list-6"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="nb-mobile-item-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                  <div className="text-block-45">Docs &amp; Resources</div>
                </div>
                <nav className="nb-mobile-submenu-items w-dropdown-list" id="w-dropdown-list-6" aria-labelledby="w-dropdown-toggle-6">
                  <a href="/blog" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Blog
                  </a>
                  <a href="/downloads" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Downloads
                  </a>
                  <a href="/casestudies" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Case Studies
                  </a>
                  <a href="/events" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Events and Webinars
                  </a>
                  <a
                    href="https://docs.aidbox.app/overview/release-notes"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Release Notes
                  </a>
                  <a
                    href="https://github.com/Aidbox/Issues"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Bug Tracker
                  </a>
                  <a
                    href="https://docs.aidbox.app/"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Docs
                  </a>
                  <a
                    href="https://fhirbase.aidbox.app/"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Fhirbase Docs
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/aidbox-forms"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Forms Docs
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/mdm"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox MPI Docs
                  </a>
                  <a
                    href="https://docs.aidbox.app/modules-1/terminology"
                    rel="nofollow"
                    target="_blank"
                    className="nb-mobile-submenu-item w-dropdown-link"
                    tabIndex={0}
                  >
                    Aidbox Terminology Docs
                  </a>
                </nav>
              </div>

              <div className="nb-mobile-dropdown w-dropdown">
                <div
                  className="nb-mobile-submenu-item-title w-dropdown-toggle"
                  id="w-dropdown-toggle-7"
                  aria-controls="w-dropdown-list-7"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="nb-mobile-item-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                  <div className="text-block-45">Company</div>
                </div>
                <nav className="nb-mobile-submenu-items w-dropdown-list" id="w-dropdown-list-7" aria-labelledby="w-dropdown-toggle-7">
                  <a href="/company" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    About Us
                  </a>
                  <a href="/careers" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Careers
                  </a>
                  <a href="/news" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    News
                  </a>
                  <a href="/company" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Advisory Board
                  </a>
                  <a href="/contacts" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Contact Us
                  </a>
                  <a href="/partners" className="nb-mobile-submenu-item w-dropdown-link" tabIndex={0}>
                    Aidbox Partner Network
                  </a>
                </nav>
              </div>

              <a rel="nofollow" href="/price" className="nb-item-link-mobile w-inline-block">
                <div className="nb-item-text-mobile">Pricing</div>
              </a>
            </nav>
          </div>
          <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
        </div>
      </div>
    </div>
  );
}
