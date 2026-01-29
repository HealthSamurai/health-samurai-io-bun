import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Samurai - About Us",
  description:
    "We're team of health IT experts and FHIR trailblazers that have been building custom healthcare solutions since 2004.",
};

function TeamSection(): string {
  return (
    <section className="company-team">
      <div className="container">
        <div className="team-grid">
          {/* Nikolay Ryzhikov */}
          <div className="team-card">
            <div className="team-photo">
              <img
                src="/assets/images/company/cto-nikolay-ryzhikov.jpg"
                alt="Nikolay Ryzhikov - CTO of Health Samurai"
                loading="lazy"
              />
            </div>
            <h2 className="team-name">NIKOLAY RYZHIKOV</h2>
            <p className="team-title">CTO of Health Samurai</p>
            <p className="team-bio">
              Nikolai Ryzhikov is the head of engineering at Health Samurai, a
              health IT company that has been developing custom solutions for
              healthcare clients since 2004. He is also the mastermind behind
              Aidbox, the first commercial FHIR backend platform that went to
              market in the United States. Nikolai is a longtime activist in the
              Ruby, Clojure, and Piter United communities in St. Petersburg. He
              has been an evangelist of the{" "}
              <a href="/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not">
                FHIR
              </a>
              ® standard since 2013.
            </p>
          </div>

          {/* Pavel Smirnov */}
          <div className="team-card">
            <div className="team-photo">
              <img
                src="/assets/images/company/ceo-pavel-smirnov.jpg"
                alt="Pavel Smirnov - CEO of Health Samurai"
                loading="lazy"
              />
            </div>
            <h2 className="team-name">PAVEL SMIRNOV</h2>
            <p className="team-title">CEO of Health Samurai</p>
            <p className="team-bio">
              Pavel is a serial entrepreneur, FHIR® trailblazer and the CEO of
              Health Samurai. He started working in healthcare IT in 2004 and
              led the development and implementation of a cloud inpatient EHR at
              three hospitals in California. Health Samurai has been using the
              FHIR® standard in real projects since 2012, and is an active
              participant in the FHIR® community. Pavel's expertise spans across
              health IT, strategy, medical standards (including FHIR®), and
              modern cloud technologies.
            </p>
          </div>

          {/* Grahame Grieve */}
          <div className="team-card">
            <div className="team-photo">
              <img
                src="/assets/images/company/advisor-grahame-grieve.webp"
                alt="Grahame Grieve - Advisor of Health Samurai"
                loading="lazy"
              />
            </div>
            <h2 className="team-name">Grahame Grieve</h2>
            <p className="team-title">Advisor of Health Samurai</p>
            <p className="team-bio">
              Grahame Grieve is the inventor of FHIR® and FHIR Product Director
              at HL7. Grahame is leading the FHIR core team; he is consulting to
              national programs, vendor consortiums, individual vendors, and
              standards bodies about healthcare data exchange. Grahame Grieve
              received many awards, including the 2019 Glaser Award and the 2015
              Jon Hilton Award in Primary Care Informatics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficesSection(): string {
  return (
    <section className="company-offices-section">
      <div className="container">
        <h1 className="offices-title">WORLDWIDE OFFICES</h1>
      </div>
      <div className="offices-wrapper">
        <div className="container">
          <div className="offices-grid">
            {/* United States */}
            <div className="office-card">
              <h2 className="office-country">UNITED STATES</h2>
              <p className="office-company">Health Samurai Inc.</p>
              <p className="office-address">
                1891 N Gaffey St Ste O,
                <br />
                San Pedro, CA 90731
              </p>
              <p className="office-phone">+1 (818) 731-1279</p>
              <a href="mailto:hello@health-samurai.io" className="office-email">
                hello@health-samurai.io
              </a>
            </div>

            {/* Portugal */}
            <div className="office-card">
              <h2 className="office-country">PORTUGAL</h2>
              <p className="office-company">Digital Samurai</p>
              <p className="office-address">
                Quinta da Fonte, Edifício D.
                <br />
                Pedro I, Paço D'Arcos,
                <br />
                Lisbon, 2770-071
              </p>
              <a href="mailto:hello@health-samurai.io" className="office-email">
                hello@health-samurai.io
              </a>
            </div>

            {/* Montenegro */}
            <div className="office-card">
              <h2 className="office-country">MONTENEGRO</h2>
              <p className="office-company">Health Samurai, DOO</p>
              <p className="office-address">
                XVI zgrada Solidarnosti,
                <br />
                lokal br.7,
                <br />
                Budva, 85310
              </p>
              <a href="mailto:hello@health-samurai.io" className="office-email">
                hello@health-samurai.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection(): string {
  return (
    <section className="company-mission">
      <div className="container">
        <h2 className="section-heading">OUR MISSION</h2>
        <div className="content-wrapper">
          <p className="highlight-text">
            Our mission is to make it easy for providers, developers,
            enterprises and startups everywhere to build great healthcare
            applications.
          </p>
          <p>
            At Health Samurai, we want to transform care delivery with great
            software.
          </p>
          <p>
            We believe that an open, connected healthcare application ecosystem
            will drive higher quality care and lower costs. To help make this
            happen, we have a simple plan: give people the tools they need to
            build life-changing technologies and handle healthcare data the
            right way. We believe that when you empower people with the right
            data and tools, amazing things will happen.
          </p>
          <p>
            That's how we believe we can change healthcare for good, and we're
            fighting to make our vision a reality every day.
          </p>
        </div>
      </div>
    </section>
  );
}

function StorySection(): string {
  return (
    <section className="company-story">
      <div className="container">
        <h2 className="section-heading">OUR STORY</h2>
        <div className="content-wrapper">
          <p>
            Building a healthcare application is a complex, expensive, and
            time-consuming process that requires significant domain knowledge.
            We understand all too well how these barriers limit innovation,
            because we've been developing custom health IT solutions for our
            clients since 2004.
          </p>
          <p>
            In 2012, we came across the{" "}
            <a
              href="https://www.hl7.org/fhir/overview.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              FHIR standard
            </a>{" "}
            and immediately recognized its potential to transform health IT by
            simplifying the healthcare software development process, cutting
            costs and solving real business problems. We confirmed our intuition
            after using FHIR successfully in various client projects, and set
            out to create a FHIR platform that would make it easy for healthcare
            organizations to build complex solutions.
          </p>
          <p>
            We took the best of everything we've learned about health IT in the
            last 14 years and built <strong>Aidbox</strong>, our FHIR backend as
            a service. After seeing the benefits that Aidbox brings to our
            partners, we know that FHIR is a standard that is here to stay.
          </p>
          <p>
            We're FHIR trailblazers who are helping to create an open, connected
            healthcare ecosystem that supports innovation and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

function CodeOfHonorSection(): string {
  return (
    <section className="company-honor">
      <div className="container">
        <h2 className="section-heading">HEALTH SAMURAI CODE OF HONOR</h2>
        <div className="content-wrapper">
          <p className="honor-intro">
            These are the beliefs and values that continue to guide us as we
            grow:
          </p>
          <div className="honor-list">
            <p>
              <strong>Integrity:</strong> We stay true to our word and deliver
              on promises.
            </p>
            <p>
              <strong>Discipline:</strong> We stick to Agile methodologies to
              shorten delivery cycles and increase quality and adaptability
              during the development process.
            </p>
            <p>
              <strong>Commitment to Open Standards:</strong> We believe
              standardized health data exchange and open access to healthcare
              data benefits everyone. That's why we built our Aidbox backend
              platform with the{" "}
              <a href="/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not">
                FHIR
              </a>{" "}
              standard to support interoperability.
            </p>
            <p>
              <strong>Duty:</strong> As health IT experts, we believe we have a
              duty to share our knowledge and give to the community. We've built
              several open source FHIR products and will continue contributing
              to FHIR. Feel free to reach out to us with any health IT related
              questions!
            </p>
            <p>
              <strong>Quality over Quantity:</strong> We believe in doing things
              right, and are committed to delivering value.
            </p>
            <p>
              <strong>Transformation over Tradition:</strong> We believe
              innovation is the key to winning the battle for a better
              healthcare system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection(): string {
  return (
    <section className="company-contact">
      <div className="container">
        <h2 className="section-heading">CONTACT US</h2>
        <p className="contact-subtext">Get in touch with us today!</p>
        <form className="contact-form" action="/api/contact" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="How we can help?"
              className="form-input form-textarea"
              rows={4}
            ></textarea>
          </div>
          <div className="form-group recaptcha-placeholder">
            <div className="recaptcha-box">
              <div className="recaptcha-checkbox"></div>
              <span>I'm not a robot</span>
              <div className="recaptcha-logo">reCAPTCHA</div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary contact-submit">
            SEND
          </button>
          <p className="privacy-notice">
            By submitting the form you agree to{" "}
            <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/legal/cookie-policy">Cookie Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

export default function CompanyPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="company-hero">
        <div className="container">
          <h1>About us</h1>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Worldwide Offices Section */}
      <OfficesSection />

      {/* Our Mission Section */}
      <MissionSection />

      {/* Our Story Section */}
      <StorySection />

      {/* Code of Honor Section */}
      <CodeOfHonorSection />

      {/* Contact Us Section */}
      <ContactSection />
    </Fragment>
  );
}
