import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Samurai: Contact Us",
  description:
    "Get in touch with us today. Learn how our FHIR backend, Aidbox, simplifies healthcare software development.",
};

export default function ContactsPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="contacts-hero">
        <div className="container">
          <h1 className="contacts-hero-title">
            We're ready to lead you to the future of health technology
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            {/* Left Column - Intro Text Box */}
            <div className="contacts-intro">
              <p>
                Health Samurai is a leading provider of FHIR backend solutions
                and full stack health IT services. Our team is ready to answer
                your questions and guide you to the right direction.
              </p>
              <p>Reach out to us and:</p>
              <p>
                <strong>See our software in action:</strong> Request a
                customized Aidbox product demo and discover how you can take
                your healthcare solutions to the next level.
              </p>
              <p>
                <strong>Move toward interoperability:</strong> Let us help you
                future-proof your solutions with the FHIR standard.
              </p>
              <p>
                <strong>Discover our services:</strong> Tell us about your
                project needs and find out how we can help you build, integrate,
                and implement your healthcare solutions.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contacts-form-wrapper">
              <h2 className="contacts-form-title">CONTACT US</h2>
              <p className="contacts-form-subtitle">
                Get in touch with us today!
              </p>

              <form
                className="contacts-form"
                hx-post="/api/contact"
                hx-swap="outerHTML"
              >
                <div className="contacts-form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="*Name"
                    required
                    className="contacts-input"
                  />
                </div>

                <div className="contacts-form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="*Company"
                    required
                    className="contacts-input"
                  />
                </div>

                <div className="contacts-form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="*Business Email"
                    required
                    className="contacts-input"
                  />
                </div>

                <div className="contacts-form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="*Phone"
                    required
                    className="contacts-input"
                  />
                </div>

                <div className="contacts-form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    className="contacts-textarea"
                    rows={4}
                  />
                </div>

                <p className="contacts-privacy">
                  By submitting the form you agree to{" "}
                  <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
                  <a href="/legal/cookie-policy">Cookie Policy</a>.
                </p>

                {/* reCAPTCHA placeholder - would need actual implementation */}
                <div className="contacts-recaptcha">
                  <div className="g-recaptcha-placeholder">
                    <div className="recaptcha-checkbox"></div>
                    <span>I'm not a robot</span>
                    <div className="recaptcha-logo">
                      <span className="recaptcha-text">reCAPTCHA</span>
                      <span className="recaptcha-terms">
                        Privacy - Terms
                      </span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="contacts-submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
