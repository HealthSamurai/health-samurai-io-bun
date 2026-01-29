import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Accelerate FHIR adoption through the Aidbox Partner Network",
  description: "Our partners offer enhanced services, added-value technologies, and complementary products to amplify the Aidbox experience.",
};

// Partner data
const partners = [
  {
    id: "beda-software",
    name: "Beda Software",
    type: "implementation",
    typeLabel: "Implementation Partner",
    description: "Beda Software is a team of Health IT domain experts with proven software development skills. We work as your technological partner tackling all aspects related to Healthcare Software development.",
    logo: "/assets/images/partners/logo-beda-software.svg",
    link: "https://beda.software/",
  },
  {
    id: "cloudticity",
    name: "Cloudticity",
    type: "technology",
    typeLabel: "Technology Partner",
    description: "Cloudticity Oxygen continually scans your environment with Aidbox for alignment with HITRUST, HIPAA, NIST, and other security best practices.",
    logo: "/assets/images/partners/logo-cloudticity.svg",
    link: "https://www.cloudticity.com/managed-cloud",
  },
  {
    id: "fhirball",
    name: "FHIRBall",
    type: "information",
    typeLabel: "Information Partner",
    description: "The FHIR Business Alliance (FHIRBall) is a group of companies that have joined forces to promote and market their FHIR-based tools and solutions.",
    logo: "/assets/images/partners/logo-fhirball.png",
    link: "https://www.fhirball.org/member/health-samurai/",
  },
  {
    id: "google-cloud",
    name: "Google Cloud Partner",
    type: "cloud",
    typeLabel: "Cloud Partner",
    description: "Health Samurai is a Google Cloud partner program member, and the Aidbox FHIR Platform has successfully passed the solution qualification review.",
    logo: "/assets/images/partners/logo-google-cloud-partner.png",
    link: "/partners",
  },
  {
    id: "waveaccess",
    name: "WaveAccess",
    type: "implementation",
    typeLabel: "Implementation Partner",
    description: "Custom Healthcare Software. We accelerate technological innovation and reshape the way healthcare is delivered to patients.",
    logo: "/assets/images/partners/logo-waveaccess.png",
    link: "https://www.wave-access.com/public_en/services/custom_healthcare_software.aspx",
  },
];

// Article data
const articles = [
  {
    id: 1,
    date: "December 11, 2024",
    title: "Tackling legacy system integration with FHIR: A guide for healthcare providers",
    description: "The healthcare industry faces complex challenges, many caused by outdated infrastructure and lack of interoperability between systems.",
    image: "/assets/images/partners/logo-capminds.png",
    link: "/articles/tackling-legacy-system-integration-with-fhir",
  },
  {
    id: 2,
    date: "September 4, 2023",
    title: "A practical guide for extending FHIR EMR capabilities with SMART on FHIR applications. FHIR EMR",
    description: "Learn How FHIR and SMART Are Transforming EMR Integration in Healthcare. Dive into practical insights from Beda Software's CTO, Ilya Beda, on extending EMR solutions efficiently.",
    image: "/assets/images/partners/article-fhir-emr.png",
    link: "/articles/a-practical-guide-for-extending-emr-capabilities-with-smart-on-fhir-applications",
  },
  {
    id: 3,
    date: "March 2, 2023",
    title: "HIPAA-compliant Aidbox instance synchronization",
    description: "Do you have offices or clinics all over the world and want to collect statistical data in a single storage? In this article, we'll share our experiences in implementing HIPAA-compliant data synchronization across multiple Aidbox instances.",
    image: "/assets/images/partners/article-hipaa-sync.png",
    link: "/articles/hipaa-compliant-aidbox-instance-synchronization",
  },
];

// Benefits data
const benefits = [
  "Enrich your technology, expertise, and service portfolio with the Aidbox Ecosystem.",
  "Expand your potential customer reach through cross-marketing and co-marketing activities.",
  "Power up your sales process with the assistance of the Aidbox sales team.",
  "Unlock additional benefits from special discounts and referral reward programs.",
];

// Tabs configuration
const tabs = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology Partners" },
  { id: "implementation", label: "Implementation Partners" },
  { id: "information", label: "Information Partners" },
  { id: "cloud", label: "Cloud Partners" },
];

function HeroSection(): string {
  return (
    <section className="partners-hero" id="pr-hero">
      <div className="partners-hero-bg">
        <img src="/assets/images/partners/bg-hero-partners.webp" alt="" className="partners-hero-bg-img" />
      </div>
      <div className="container">
        <div className="partners-hero-content">
          <h1 className="partners-hero-title">Aidbox Partners</h1>
          <p className="partners-hero-description">
            Accelerate FHIR adoption through our network. Our partners offer
            enhanced services, added-value technologies, and complementary
            products to amplify the <a href="/aidbox" className="partners-link">Aidbox server</a> experience.
          </p>
          <div className="partners-hero-ctas">
            <a href="#pr-become-partner-section" className="partners-btn-outline">
              Become a Partner
            </a>
            <a href="#pr-partner-list" className="partners-text-link">
              Find a partner
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }): string {
  return (
    <a
      href={partner.link}
      className="partner-card"
      data-type={partner.type}
      target={partner.link.startsWith("http") ? "_blank" : undefined}
      rel={partner.link.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="partner-card-logo">
        <img src={partner.logo} alt={`${partner.name} logo`} />
      </div>
      <h3 className="partner-card-name">{partner.name}</h3>
      <p className="partner-card-description">{partner.description}</p>
      <div className="partner-card-footer">
        <span className="partner-card-type">{partner.typeLabel}</span>
        <svg className="partner-card-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

function PartnerListSection(): string {
  return (
    <section className="partners-list-section" id="pr-partner-list">
      <div className="container">
        <h2 className="partners-section-title">Explore the network</h2>

        <div className="partners-tabs" data-signals="{activeTab: 'all'}">
          <div className="partners-tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="partners-tab"
                data-class={`{'partners-tab-active': $activeTab == '${tab.id}'}`}
                data-on-click={`$activeTab = '${tab.id}'`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="partners-grid">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="partner-card-wrapper"
                data-show={`$activeTab == 'all' || $activeTab == '${partner.type}'`}
              >
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }): string {
  return (
    <a href={article.link} className="article-card">
      <div className="article-card-image">
        <img src={article.image} alt="" />
      </div>
      <div className="article-card-content">
        <span className="article-card-date">{article.date.toUpperCase()}</span>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-description">{article.description}</p>
        <span className="article-card-link">
          Read More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </a>
  );
}

function PartnerPostsSection(): string {
  return (
    <section className="partners-posts-section">
      <div className="container">
        <div className="partners-posts-header">
          <h2 className="partners-section-title">Partner posts</h2>
          <a href="/blog" className="partners-view-all">
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadyToJoinSection(): string {
  return (
    <section className="partners-join-section" id="pr-become-partner-section">
      <div className="container">
        <div className="partners-join-wrapper">
          <div className="partners-join-content">
            <h3 className="partners-join-title">Ready to join?</h3>
            <p className="partners-join-description">
              Maximize your marketing, sales, and technology potential by partnering with Aidbox and Health Samurai.
            </p>

            <h4 className="partners-benefits-title">Benefits from the program</h4>

            <ul className="partners-benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="partners-benefit-item">
                  <img src="/assets/images/partners/icon-check-circle.svg" alt="" className="partners-benefit-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
              <li className="partners-benefit-item">
                <img src="/assets/images/partners/icon-check-circle.svg" alt="" className="partners-benefit-icon" />
                <span>
                  Grow your <a href="/articles/fhir-what-is-great-what-isnt-so-good-and-what-it-is-not" className="partners-link">FHIR</a> and digital health expertise with the support of Aidbox engineering team.
                </span>
              </li>
            </ul>
          </div>

          <div className="partners-join-form">
            <form action="/api/partner-application" method="POST" className="partner-form">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">FULL NAME</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="First and Last Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">BUSINESS EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="form-label">COMPANY NAME</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="website" className="form-label">WEBSITE</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://yourcompany.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">DESCRIBE YOUR COMPANY</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about your company and needs"
                  className="form-textarea"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
              </div>

              <button type="submit" className="partners-submit-btn">
                Join the partner program
              </button>

              <p className="form-footer-text">
                By submitting the form you agree to <a href="/legal/privacy-policy" className="partners-link">Privacy Policy</a> and <a href="/legal/cookie-policy" className="partners-link">Cookie Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PartnersPage(): string {
  return (
    <Fragment>
      <HeroSection />
      <PartnerListSection />
      <PartnerPostsSection />
      <ReadyToJoinSection />
    </Fragment>
  );
}
