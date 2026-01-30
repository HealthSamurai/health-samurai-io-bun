export function Footer(): string {
  return (
    <div>
      <div className="prefooter-section_awards">
        <div className="pre-footer-div-main">
          <div className="footer-div-awards">
            <img
              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d0332ca0d91f84e893638b_hippa-logo.png"
              loading="lazy"
              alt=""
              className="footer-awards-grid-div-img"
            />
            <a
              href="https://www.health-samurai.io/news/health-samurai-achieves-iso-27001-2022-certification"
              className="footer-avard__link w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d03378e6aff704b281d613_ISOMark_27001-2022%202.svg"
                loading="lazy"
                alt=""
                className="footer-awards-grid-div-img"
              />
            </a>
          </div>
          <div className="footer__grid">
            <div className="footer-linkblock">
              <a href="/" className="footer-links">Health Samurai</a>
              <a href="/company" className="footer-links">About Us</a>
              <a href="/careers" className="footer-links">Careers</a>
              <a href="/news" className="footer-links">News</a>
              <a href="/blog" className="footer-links">Blog</a>
              <a href="/contacts" className="footer-links">Contact Us</a>
            </div>
            <div className="footer-linkblock">
              <a href="/fhir-server" className="footer-links">FHIR Server</a>
              <a href="/fhir-database" className="footer-links">Fhirbase</a>
              <a href="https://www.health-samurai.io/services" target="_blank" className="footer-links">
                For Developers
              </a>
              <a href="/payers" className="footer-links">For Health Plans</a>
              <a href="/casestudies" className="footer-links">Case Studies</a>
              <a href="/opensource" className="footer-links">Open Source</a>
              <a href="/fhir-meetups" className="footer-links">Meetups</a>
            </div>
            <div className="footer-linkblock">
              <a href="/legal/privacy-policy" className="footer-links">Privacy Policy</a>
              <a href="/legal/cookie-policy" className="footer-links">Cookie Policy</a>
            </div>
            <div id="w-node-b8201ada-06a9-faf9-07e5-36274912e037-86da6d4e" className="prefooter-address">
              <div className="prefooter-bodytext phone">
                1891 N Gaffey St Ste O,<br />
                San Pedro, CA 90731<br />
                <span className="footer-phone">+1 (818) 731-1279 </span>
                <br />
                hello@health-samurai.io
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <img
          src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a3041c4d877230001fc7454_hslogo-footer.svg"
          alt="Health Samurai Company Logo"
          className="hs-logo-footer"
        />
      </div>

      <div className="hs-cookie-banner-section cookie-banner">
        <div fsCc="banner" className="hs-cookie-banner-container-general">
          <div className="hs-cookie-banner-container">
            <p className="hs-cookies-banner-text">
              By using this website, you agree to the storing of cookies on your device to enhance site navigation,
              analyze site usage, and assist in our marketing efforts. View our{" "}
              <a href="/legal/cookie-policy" rel="nofollow" target="_blank">
                Cookie Policy
              </a>{" "}
              for more information.
            </p>
            <div className="hs-cookies-btn-group">
              <a fsCc="open-preferences" href="#" className="hs-cookie-banner-preferences-btn w-button">
                <span className="text-span-43">Preferences </span>
              </a>
              <a fsCc="deny" href="#" className="hs-cookie-banner-deny-btn deny-btn w-button">
                Deny
              </a>
              <a fsCc="allow" href="#" className="hs-cookie-banner-accept-btn accept-btn w-button">
                Accept All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
