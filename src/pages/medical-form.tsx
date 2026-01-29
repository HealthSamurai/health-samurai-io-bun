import { Fragment } from "../lib/jsx-runtime";
import { Button } from "../components/ui/Button";

export const metadata = {
  title: "FHIR-Compliant Medical Forms for Healthcare Workflows | FHIR questionnaire | Medical form builder",
  description: "Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards.",
};

// Client logos for the carousel
const clientLogos = [
  { name: "PKB", src: "/assets/images/medical-form/logo-pkb.webp" },
  { name: "Bayshore", src: "/assets/images/medical-form/logo-bayshore.webp" },
  { name: "Akinox", src: "/assets/images/medical-form/logo-akinox.webp" },
  { name: "Sundata", src: "/assets/images/medical-form/logo-sundata.webp" },
  { name: "Myriad", src: "/assets/images/medical-form/logo-myriad.webp" },
  { name: "Duodecim", src: "/assets/images/medical-form/logo-duodecim.webp" },
  { name: "Amwell", src: "/assets/images/medical-form/logo-amwell.webp" },
  { name: "Bupa", src: "/assets/images/medical-form/logo-bupa.png" },
];

// Feature showcase items (zigzag layout)
const features = [
  {
    title: "No-code Form Creation",
    description: "Drag-and-drop Medical Form Builder interface to create intelligent medical forms.",
    bullets: [
      "Real-time form view with testing capabilities.",
      "Create forms from 3000+ ready-made templates.",
      "Generate digital forms from PDF files.",
    ],
    image: "/assets/images/medical-form/hero-form-builder.png",
  },
  {
    title: "FHIR-Compliant Data",
    description: "Ensure all captured data is structured and standard-based for easy integration",
    bullets: [
      "Data is collected and stored according to FHIR SDC standard.",
      "FHIR API enables data exchange with third-party apps.",
    ],
    image: "/assets/images/medical-form/fhir-compliant.png",
    reverse: true,
  },
  {
    title: "Seamless Forms Integration",
    description: "Embed forms into apps, portals, or EHR systems using iFrames or web components.",
    additionalText: "This integration guarantees user experience consistency and allows forms to be easily accessible where needed.",
    image: "/assets/images/medical-form/integration-forms.webp",
  },
  {
    title: "Embedded Form Builder",
    description: "Provide healthcare professionals with a form builder for creating and editing forms in real-time directly within your application.",
    additionalText: "Embedding the Form Builder eliminates the need for developer involvement, enabling rapid form updates and customization on demand.",
    image: "/assets/images/medical-form/embedded-builder.webp",
    reverse: true,
  },
];

// Capabilities for the carousel
const capabilities = [
  {
    title: "Smart Dynamic Forms",
    description: "Design forms that reduce cognitive load by displaying only the fields that require attention. Fields appear as needed, based on user input and set conditions.",
    image: "/assets/images/medical-form/carousel-dynamic-forms.jpg",
  },
  {
    title: "Multi-Page Forms or Forms with Navigation Tab",
    description: "Easily organize large forms, like the Adult Assessment Form, into multi-page layouts or add a navigation tab for smooth navigation.",
    image: "/assets/images/medical-form/carousel-multipage.jpg",
  },
  {
    title: "Enhanced Forms with Annotation Pad & Speech-to-Text",
    description: "Add advanced input options to your forms. The Annotation Pad lets clinicians mark images, like indicating wound locations, while Speech-to-Text enables quick, hands-free data entry.",
    image: "/assets/images/medical-form/carousel-annotation.jpg",
  },
  {
    title: "Forms with Personalized Styling",
    description: "Customize forms with pre-designed themes or create unique styles by adjusting fonts, color schemes, and branding elements.",
    image: "/assets/images/medical-form/carousel-styling.jpg",
  },
  {
    title: "Multilingual Forms",
    description: "Create multilingual forms to serve users in different languages effortlessly, with the help of AI-assisted translations.",
    image: "/assets/images/medical-form/carousel-multilingual.jpg",
  },
];

// Features grid items (16 total)
const featuresGrid = [
  { icon: "/assets/images/medical-form/icon-feature-1.svg", title: "Form Builder", description: "No-code interface for creating, testing, and debugging medical forms, making it easy for non-technical users to design complex medical forms." },
  { icon: "/assets/images/medical-form/icon-feature-2.svg", title: "Embed Forms and Form Builder", description: "Integrate clinical forms and the builder in your app via iFrame or web component for a seamless user experience." },
  { icon: "/assets/images/medical-form/icon-feature-7.svg", title: "Paper to Digital Form Conversion", description: "Convert paper and fillable PDFs to digital forms for faster data collection and streamlined, structured workflows." },
  { icon: "/assets/images/medical-form/icon-feature-3.svg", title: "Single Sign-On (SSO)", description: "Allow patients and professionals to access forms directly through your portal or EHR with no additional logins." },
  { icon: "/assets/images/medical-form/icon-feature-4.svg", title: "Audit Logging", description: "Track all interactions for compliance, maintaining a full history of changes and actions within the system." },
  { icon: "/assets/images/medical-form/icon-feature-6.svg", title: "Offline Mode", description: "Use FHIR questionnaires without an internet connection, ensuring data collection in remote areas or during connectivity issues." },
  { icon: "/assets/images/medical-form/icon-feature-1.svg", title: "Digital Multiple Signatures", description: "Capture multiple digital signatures for approvals or consent on structured data capture forms, ideal for healthcare documentation." },
  { icon: "/assets/images/medical-form/icon-feature-8.svg", title: "Multilingual Forms & Builder Interface", description: "Use AI-assisted translations to create medical forms in multiple languages, serving diverse users without duplicating efforts." },
  { icon: "/assets/images/medical-form/icon-feature-9.svg", title: "Template-Based PDF Generation", description: "Generate PDFs from form and form responses automatically using customizable templates for standardized output." },
  { icon: "/assets/images/medical-form/icon-feature-10.svg", title: "Extra Widgets", description: "Enhance clinical forms with features like Speech-to-Text and an Annotation Pad for more advanced data input." },
  { icon: "/assets/images/medical-form/icon-feature-11.svg", title: "Multitenancy Support", description: "Support multiple clients with isolated data, perfect for large organizations or vendors serving different clients." },
  { icon: "/assets/images/medical-form/icon-feature-12.svg", title: "External Terminologies Integration", description: "Integrate with services like TermBox, the Public FHIR community server, and Ontoserver for precise clinical coding." },
  { icon: "/assets/images/medical-form/icon-feature-13.svg", title: "Reusing Forms as Components", description: "Save time by reusing questionnaires as components, allowing quick assembly of new SDC forms with existing elements." },
  { icon: "/assets/images/medical-form/icon-feature-14.svg", title: "Multi-Page Forms or Navigation Tab", description: "Easily organize large medical forms into multi-page layouts or add a navigation tab for step-by-step entry or quick navigation." },
  { icon: "/assets/images/medical-form/icon-feature-15.svg", title: "Custom Themes", description: "Customize form appearance with themes, including fonts, colors, and branding for a consistent look and feel." },
  { icon: "/assets/images/medical-form/icon-feature-16.svg", title: "Pre-fill & Data Extraction", description: "Pre-fill clinical forms with existing data, reducing clinician input time, and extract data directly to your database after submission." },
];

// Articles
const articles = [
  {
    title: "Digitize Paper Medical Forms in Seconds: Helping Doctors Focus on Patients, Not Paperwork",
    date: "October 22, 2024",
    readTime: "3 min read",
    href: "/articles/pdf-to-digital",
  },
  {
    title: "What Additional Benefits Do Electronic Forms Offer, and Why Shouldn't They Be Confused with Reports?",
    date: "August 26, 2024",
    readTime: "3 min read",
    href: "/articles/do-electronic-forms",
  },
  {
    title: "How to build matrix-based medical forms in record time: Video Tutorial",
    date: "July 19, 2024",
    readTime: "3 min read",
    href: "/articles/how-to-build-matrix-based-medical-forms-in-record-time-video-tutorial",
  },
  {
    title: "Create your component library and assemble forms like a Lego",
    date: "May 17, 2024",
    readTime: "3 min read",
    href: "/articles/how-do-you-eliminate-routine-and-improve-the-quality-of-designed-forms",
  },
];

// Testimonial
const testimonial = {
  quote: "Aidbox Forms made it possible for us to extend our EHR capabilities and enable additional workflows through customizable forms. The platform's flexibility and FHIR compliance makes it easy to adapt forms to our specific needs, whether for data collection or process automation. Their product and support teams are always available, helping us resolve even the most complex challenges quickly and efficiently.",
  name: "Cristian Ruiz",
  title: "Head of Clinical Systems at Bupa",
  image: "/assets/images/medical-form/testimonial-cristian.png",
};

function HeroSection(): string {
  return (
    <section className="mf-hero">
      <div className="container">
        <div className="mf-hero-grid">
          <div className="mf-hero-content">
            <h1>Medical Forms for Healthcare Workflows</h1>
            <p>Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards.</p>
            <div className="mf-hero-actions">
              <Button href="https://form-builder.aidbox.app/" variant="primary" size="lg">
                Try FORMS for free
              </Button>
              <Button href="#demo" variant="outline" size="lg">
                Book a demo
              </Button>
            </div>
          </div>
          <div className="mf-hero-image">
            <img src="/assets/images/medical-form/hero-form-builder.png" alt="No-code Medical Form Creation" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesIntroSection(): string {
  return (
    <section className="mf-features-intro">
      <div className="container">
        <div className="mf-features-intro-header">
          <h2>Tailored for Digital Health Professionals</h2>
          <p>Perfect for healthcare providers, digital health vendors, startups, and clinical researchers looking to streamline data collection.</p>
        </div>
        <div className="mf-features-blocks">
          {features.map((feature, index) => (
            <div className={`mf-feature-block ${feature.reverse ? "mf-feature-block--reverse" : ""}`}>
              <div className="mf-feature-image">
                <img src={feature.image} alt={feature.title} loading="lazy" />
              </div>
              <div className="mf-feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.bullets && (
                  <ul className="mf-feature-bullets">
                    {feature.bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                )}
                {feature.additionalText && (
                  <p className="mf-feature-additional">{feature.additionalText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCarousel(): string {
  return (
    <section className="mf-logo-carousel">
      <div className="mf-logo-track">
        {clientLogos.map((logo) => (
          <div className="mf-logo-item">
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {clientLogos.map((logo) => (
          <div className="mf-logo-item">
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection(): string {
  return (
    <section className="mf-testimonial">
      <div className="container">
        <h2 className="mf-section-title">Testimonials</h2>
        <div className="mf-testimonial-card">
          <div className="mf-testimonial-quote-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M14 24H8C8 17.373 13.373 12 20 12V18C16.686 18 14 20.686 14 24V36H2V24C2 14.059 10.059 6 20 6V12C13.373 12 8 17.373 8 24H14V24ZM38 24H32C32 17.373 37.373 12 44 12V18C40.686 18 38 20.686 38 24V36H26V24C26 14.059 34.059 6 44 6V12C37.373 12 32 17.373 32 24H38V24Z" fill="currentColor"/>
            </svg>
          </div>
          <blockquote>"{testimonial.quote}"</blockquote>
          <div className="mf-testimonial-author">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="mf-testimonial-author-info">
              <span className="mf-author-name">{testimonial.name}</span>
              <span className="mf-author-title">{testimonial.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner({ variant }: { variant: "build" | "action" }): string {
  const isAction = variant === "action";
  return (
    <section className="mf-cta-banner">
      <div className="container">
        <h2>{isAction ? "See it in action!" : "Build your custom medical form in minutes"}</h2>
        <p>{isAction
          ? "Discover how easy it is to build custom forms. Get started for free or book a demo to explore all the features."
          : "Try it for free to experience the simplicity, or book a demo to see the advanced features in action."
        }</p>
        <div className="mf-cta-buttons">
          <a href="https://form-builder.aidbox.app/" className="mf-cta-btn-white">TRY FORMS FOR FREE</a>
          <a href="#demo" className="mf-cta-btn-outline">Book a demo</a>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesCarousel(): string {
  return (
    <section className="mf-capabilities">
      <div className="container">
        <div className="mf-capabilities-header">
          <h2>Appearance & Capabilities</h2>
          <p>With Aidbox UI Builder, create versatile forms that adapt to various user scenarios and customize their appearance to fit specific needs, from dynamic forms to multilingual support.</p>
        </div>
        <div
          className="mf-carousel"
          data-signals={`{slideIndex: 0, slideCount: ${capabilities.length}}`}
        >
          <div className="mf-carousel-container">
            <button
              className="mf-carousel-nav mf-carousel-prev"
              data-on-click="$slideIndex = ($slideIndex - 1 + $slideCount) % $slideCount"
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="mf-carousel-track">
              {capabilities.map((cap, index) => (
                <div
                  className="mf-carousel-slide"
                  data-show={`$slideIndex === ${index}`}
                  style={index > 0 ? "display: none" : ""}
                >
                  <div className="mf-carousel-image">
                    <img src={cap.image} alt={cap.title} loading="lazy" />
                  </div>
                  <div className="mf-carousel-content">
                    <h3>{cap.title}</h3>
                    <p>{cap.description}</p>
                    <a href="https://form-builder.aidbox.app/" className="mf-try-link">
                      Try it out
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mf-carousel-nav mf-carousel-next"
              data-on-click="$slideIndex = ($slideIndex + 1) % $slideCount"
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="mf-carousel-counter">
            <span data-text="$slideIndex + 1">1</span> / {capabilities.length}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormRequestSection(): string {
  return (
    <section className="mf-form-request">
      <div className="container">
        <div className="mf-form-request-content">
          <h2>Need a hand with building a form?</h2>
          <form className="mf-request-form" hx-post="/api/form-request" hx-swap="outerHTML">
            <div className="mf-form-group">
              <input
                type="text"
                name="formDescription"
                placeholder="What kind of form do you need?"
                className="mf-form-input"
                required
              />
            </div>
            <div className="mf-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mf-form-input"
                required
              />
            </div>
            <div className="mf-form-group">
              <label className="mf-file-upload">
                <input type="file" name="pdfFile" accept=".pdf" />
                <span className="mf-file-upload-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                  </svg>
                  Attach your form PDF
                </span>
              </label>
              <span className="mf-file-hint">(optional). We'll create a digital version for you.</span>
            </div>
            <p className="mf-form-disclaimer">*the form created will become a part of the public forms collection</p>
            <button type="submit" className="btn btn-primary btn-lg">Build my form</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid(): string {
  return (
    <section className="mf-features-grid">
      <div className="container">
        <h2 className="mf-section-title">Features</h2>
        <div className="mf-grid">
          {featuresGrid.map((feature) => (
            <div className="mf-feature-card">
              <div className="mf-feature-icon">
                <img src={feature.icon} alt="" loading="lazy" />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection(): string {
  return (
    <section className="mf-architecture">
      <div className="container">
        <div className="mf-architecture-header">
          <h2>Solution Architecture</h2>
          <p className="mf-subtitle">Flexible, Scalable, and Customizable</p>
        </div>
        <div className="mf-architecture-cards" data-signals="{arch1Open: false, arch2Open: false}">
          {/* Option 1: Aidbox FHIR Server */}
          <div className="mf-arch-card">
            <h3>Using Aidbox FHIR server to store collected data</h3>
            <div className="mf-arch-diagram">
              <img src="/assets/images/medical-form/architecture-aidbox.png" alt="Medical Form Builder and Aidbox" loading="lazy" />
            </div>
            <div className="mf-arch-details" data-show="$arch1Open" style="display: none">
              <div className="mf-arch-section">
                <h4>Aidbox Forms</h4>
                <ul>
                  <li><strong>UI Form Builder:</strong> A drag-and-drop interface for non-technical users, supporting complex logic and customization.</li>
                  <li><strong>Form Renderer:</strong> Full customization for seamlessly integrating your app's design and workflows.</li>
                  <li><strong>FHIR SDC API:</strong> Collect and exchange data in a standardized FHIR format.</li>
                  <li><strong>Form Library:</strong> Access nearly 3,000 ready-to-use, customizable forms.</li>
                </ul>
              </div>
              <div className="mf-arch-section">
                <h4>Aidbox FHIR Server provides:</h4>
                <ul>
                  <li>FHIR API & FHIR Storage</li>
                  <li><strong>Subscriptions:</strong> Real-time updates by subscribing to FHIR resource changes.</li>
                  <li>Authentication (Auth)</li>
                  <li>Audit Logging</li>
                  <li>Analytics Module</li>
                </ul>
              </div>
              <p className="mf-arch-note">Aidbox Forms with the Aidbox FHIR Server is delivered as a Docker container.</p>
            </div>
            <button
              className="mf-read-more"
              data-on-click="$arch1Open = !$arch1Open"
            >
              <span data-show="!$arch1Open">Read more</span>
              <span data-show="$arch1Open" style="display: none">Show less</span>
            </button>
          </div>

          {/* Option 2: External FHIR Server */}
          <div className="mf-arch-card">
            <h3>Using your FHIR-Server for data storage</h3>
            <div className="mf-arch-diagram">
              <img src="/assets/images/medical-form/architecture-fhir-server.png" alt="Medical Form Builder and your FHIR Server" loading="lazy" />
            </div>
            <div className="mf-arch-details" data-show="$arch2Open" style="display: none">
              <div className="mf-arch-section">
                <h4>In this setup:</h4>
                <ul>
                  <li><strong>Pre-filled Forms:</strong> FHIR questionnaire will be pre-filled with data from your storage.</li>
                  <li><strong>Form Submission:</strong> Once the form is submitted, the extracted data will be saved directly into your storage.</li>
                  <li><strong>Form Creation and Storage:</strong> Forms will be created and stored in the Aidbox FHIR Server.</li>
                  <li><strong>Audit Logging:</strong> All logging will be handled within the Aidbox FHIR Server.</li>
                </ul>
              </div>
            </div>
            <button
              className="mf-read-more"
              data-on-click="$arch2Open = !$arch2Open"
            >
              <span data-show="!$arch2Open">Read more</span>
              <span data-show="$arch2Open" style="display: none">Show less</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticlesSection(): string {
  return (
    <section className="mf-articles">
      <div className="container">
        <div className="mf-articles-header">
          <h2>Articles</h2>
          <a href="/article-categories/forms" className="mf-articles-link">
            All articles
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className="mf-articles-grid">
          {articles.map((article) => (
            <a href={article.href} className="mf-article-card">
              <h4>{article.title}</h4>
              <div className="mf-article-meta">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoFormSection(): string {
  return (
    <section className="mf-demo-form" id="demo">
      <div className="container">
        <div className="mf-demo-form-content">
          <div className="mf-demo-form-text">
            <h2>Ready to discuss your project with us?</h2>
            <p>Tell us about your case and we will get in touch to book a remote session.</p>
          </div>
          <form className="mf-demo-form-fields" hx-post="/api/contact" hx-swap="outerHTML">
            <div className="mf-form-row">
              <div className="mf-form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="mf-form-input"
                  required
                />
              </div>
              <div className="mf-form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="mf-form-input"
                />
              </div>
            </div>
            <div className="mf-form-group">
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                className="mf-form-input"
                required
              />
            </div>
            <div className="mf-form-group">
              <textarea
                name="description"
                placeholder="Describe your case"
                className="mf-form-input mf-textarea"
                rows={4}
              ></textarea>
            </div>
            <p className="mf-form-privacy">
              By submitting the form you agree to{" "}
              <a href="/legal/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/legal/cookie-policy">Cookie Policy</a>.
            </p>
            <button type="submit" className="btn btn-primary btn-lg">Book a Demo</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function MedicalFormPage(): string {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesIntroSection />
      <LogoCarousel />
      <TestimonialSection />
      <CtaBanner variant="build" />
      <CapabilitiesCarousel />
      <FormRequestSection />
      <FeaturesGrid />
      <CtaBanner variant="action" />
      <ArchitectureSection />
      <ArticlesSection />
      <DemoFormSection />
    </Fragment>
  );
}
