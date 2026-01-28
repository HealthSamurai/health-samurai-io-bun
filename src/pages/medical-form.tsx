import { Fragment } from "../lib/jsx-runtime";
import { Button } from "../components/ui/Button";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Aidbox Forms",
  description: "Medical Forms for Healthcare Workflows - Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards.",
};

// Client logos for the carousel
const clientLogos = [
  { name: "PKB", src: "/assets/images/logos/forms-clients/pkb.webp" },
  { name: "Bayshore", src: "/assets/images/logos/forms-clients/bayshore.webp" },
  { name: "Akinox", src: "/assets/images/logos/forms-clients/akinox.webp" },
  { name: "Sundata", src: "/assets/images/logos/forms-clients/sundata.webp" },
  { name: "Myriad", src: "/assets/images/logos/forms-clients/myriad.webp" },
  { name: "Duodecim", src: "/assets/images/logos/forms-clients/duodecim.webp" },
  { name: "Amwell", src: "/assets/images/logos/forms-clients/amwell.webp" },
];

// Feature showcase items
const features = [
  {
    title: "No-code Form Creation",
    description: "Build complex medical forms without writing a single line of code. Use our intuitive drag-and-drop builder.",
    bullets: [
      "Real-time form view with testing capabilities",
      "Create forms from 3000+ ready-made templates",
      "Generate digital forms from PDF files",
    ],
    image: "/assets/images/forms/no-code-builder.png",
  },
  {
    title: "FHIR-Compliant Data",
    description: "All form data is automatically structured according to FHIR standards for seamless interoperability.",
    bullets: [
      "Data collected and stored according to FHIR SDC standard",
      "FHIR API enables data exchange with third-party apps",
      "QuestionnaireResponse resources",
    ],
    image: "/assets/images/forms/fhir-compliant.png",
    reverse: true,
  },
  {
    title: "Seamless Forms Integration",
    description: "Embed forms into apps, portals, or EHR systems using iFrames or web components. This integration guarantees user experience consistency and allows forms to be easily accessible where needed.",
    bullets: [
      "JavaScript SDK for web apps",
      "REST API for backend integration",
      "Webhooks for real-time events",
    ],
    image: "/assets/images/forms/integration.webp",
  },
  {
    title: "Embedded Form Builder",
    description: "Provide healthcare professionals with a form builder for creating and editing forms in real-time directly within your application. Embedding the Form Builder eliminates the need for developer involvement, enabling rapid form updates and customization on demand.",
    bullets: [
      "White-label builder component",
      "Custom branding options",
      "Role-based access control",
    ],
    image: "/assets/images/forms/embedded-builder.webp",
    reverse: true,
  },
];

// Capabilities for the carousel
const capabilities = [
  {
    title: "Smart Dynamic Forms",
    description: "Design forms that reduce cognitive load by displaying only the fields that require attention. Fields appear as needed, based on user input and set conditions.",
    image: "/assets/images/forms/smart-dynamic.jpg",
  },
  {
    title: "Multi-Page Forms with Navigation",
    description: "Easily organize large forms into multi-page layouts or add a navigation tab for smooth navigation. This feature allows users to enter information step-by-step or quickly switch between sections.",
    image: "/assets/images/forms/multi-page.jpg",
  },
  {
    title: "Annotation Pad & Speech-to-Text",
    description: "Add advanced input options to your forms. The Annotation Pad lets clinicians mark images, like indicating wound locations, while Speech-to-Text enables quick, hands-free data entry.",
    image: "/assets/images/forms/annotation-speech.jpg",
  },
  {
    title: "Forms with Personalized Styling",
    description: "Customize forms with pre-designed themes or create unique styles by adjusting fonts, color schemes, and branding elements. Apply the same theme across multiple forms.",
    image: "/assets/images/forms/personalized-styling.jpg",
  },
  {
    title: "Multilingual Forms",
    description: "Create multilingual forms to serve users in different languages effortlessly, with the help of AI-assisted translations. This feature makes localization easy and efficient.",
    image: "/assets/images/forms/smart-dynamic.jpg",
  },
];

// Features grid items
const featuresGrid = [
  { icon: "/assets/images/icons/forms/form-builder.svg", title: "Form Builder", description: "No-code interface for creating, testing, and debugging medical forms" },
  { icon: "/assets/images/icons/forms/embed.svg", title: "Embed Forms", description: "Integrate clinical forms via iFrame or web component" },
  { icon: "/assets/images/icons/forms/paper-digital.svg", title: "Paper to Digital", description: "Convert paper and fillable PDFs to digital forms" },
  { icon: "/assets/images/icons/forms/sso.svg", title: "Single Sign-On", description: "Access forms through your portal or EHR directly" },
  { icon: "/assets/images/icons/forms/audit.svg", title: "Audit Logging", description: "Track all interactions for compliance" },
  { icon: "/assets/images/icons/forms/offline.svg", title: "Offline Mode", description: "Use forms without an internet connection" },
  { icon: "/assets/images/icons/forms/signature.svg", title: "Digital Signatures", description: "Capture multiple digital signatures for approvals" },
  { icon: "/assets/images/icons/forms/multilingual.svg", title: "Multilingual", description: "AI-assisted translations for multiple languages" },
  { icon: "/assets/images/icons/forms/pdf-gen.svg", title: "PDF Generation", description: "Generate PDFs from form responses automatically" },
  { icon: "/assets/images/icons/forms/widgets.svg", title: "Extra Widgets", description: "Speech-to-Text, Annotation Pad, and more" },
  { icon: "/assets/images/icons/forms/multitenancy.svg", title: "Multitenancy", description: "Support multiple clients with isolated data" },
  { icon: "/assets/images/icons/forms/terminology.svg", title: "Terminologies", description: "Integrate with TermBox, FHIR servers, Ontoserver" },
  { icon: "/assets/images/icons/forms/components.svg", title: "Reusable Components", description: "Save time by reusing questionnaires as components" },
  { icon: "/assets/images/icons/forms/multi-page.svg", title: "Multi-Page Forms", description: "Organize large forms into sections" },
  { icon: "/assets/images/icons/forms/themes.svg", title: "Custom Themes", description: "Customize fonts, colors, and branding" },
  { icon: "/assets/images/icons/forms/prefill.svg", title: "Pre-fill & Extract", description: "Pre-fill forms and extract data to your database" },
];

// Architecture options
const architectureOptions = [
  {
    id: "aidbox",
    label: "With Aidbox FHIR Server",
    description: "Using Aidbox FHIR server to store collected data",
    image: "/assets/images/forms/arch-aidbox.png",
  },
  {
    id: "external",
    label: "With External FHIR Server",
    description: "Using your FHIR-Server for data storage",
    image: "/assets/images/forms/arch-external.png",
  },
];

// Personas for "Tailored for Digital Health Professionals" section
const personas = [
  {
    icon: "/assets/images/icons/forms/persona-developer.svg",
    title: "Developers",
    description: "Build and integrate forms with REST APIs and SDKs",
  },
  {
    icon: "/assets/images/icons/forms/persona-admin.svg",
    title: "System Administrators",
    description: "Manage forms, users, and permissions across the organization",
  },
  {
    icon: "/assets/images/icons/forms/persona-clinical.svg",
    title: "Clinical Staff",
    description: "Create and customize forms without technical knowledge",
  },
  {
    icon: "/assets/images/icons/forms/persona-patient.svg",
    title: "Patients",
    description: "Fill forms easily on any device with accessible interfaces",
  },
];

// Articles for the blog section
const articles = [
  {
    title: "How to Build FHIR-Compliant Medical Forms",
    image: "/assets/images/forms/article-fhir-forms.jpg",
    type: "Article",
    date: "2024",
    href: "/blog/fhir-compliant-forms",
  },
  {
    title: "Aidbox Forms Demo: Building Dynamic Healthcare Forms",
    image: "/assets/images/forms/article-demo.jpg",
    type: "Video",
    date: "2024",
    href: "https://www.youtube.com/watch?v=Xp5k7Eg7Sbk",
    isVideo: true,
  },
  {
    title: "Converting Paper Forms to Digital with AI",
    image: "/assets/images/forms/article-paper-digital.jpg",
    type: "Article",
    date: "2024",
    href: "/blog/paper-to-digital",
  },
  {
    title: "Best Practices for Healthcare Form Design",
    image: "/assets/images/forms/article-best-practices.jpg",
    type: "Article",
    date: "2024",
    href: "/blog/form-design-best-practices",
  },
];

// Testimonial
const testimonial = {
  quote: "Aidbox Forms made it possible for us to extend our EHR capabilities and enable additional workflows through customizable forms. The platform's flexibility and FHIR compliance makes it easy to adapt forms to our specific needs, whether for data collection or process automation. Their product and support teams are always available, helping us resolve even the most complex challenges quickly and efficiently.",
  name: "Cristian Ruiz",
  title: "Head of Clinical Systems",
  company: "Bupa",
  image: "/assets/images/forms/cristian-ruiz.png",
};

function LogoCarousel(): string {
  return (
    <section className="forms-logo-carousel">
      <div className="logo-carousel-track">
        {clientLogos.map((logo) => (
          <div className="logo-carousel-item">
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {clientLogos.map((logo) => (
          <div className="logo-carousel-item">
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureShowcase(): string {
  return (
    <section className="forms-features-showcase">
      <div className="container">
        {features.map((feature) => (
          <div className={`feature-block ${feature.reverse ? "feature-block--reverse" : ""}`}>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.bullets.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection(): string {
  return (
    <section className="forms-testimonial">
      <div className="container">
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
          </div>
          <blockquote>"{testimonial.quote}"</blockquote>
          <div className="testimonial-author">
            <span className="author-name">{testimonial.name}</span>
            <span className="author-title">{testimonial.title} at {testimonial.company}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection({ variant = "primary" }: { variant?: "primary" | "secondary" }): string {
  return (
    <section className={`forms-cta forms-cta--${variant}`}>
      <div className="container">
        <h2>{variant === "primary" ? "Build your custom medical form in minutes" : "See it in action!"}</h2>
        <p>Start creating FHIR-compliant forms today with our intuitive builder.</p>
        <div className="cta-buttons">
          <Button href="https://aidbox.app/ui/portal#/signup" variant="primary" size="lg">
            TRY FORMS FOR FREE
          </Button>
          <Button href="/contacts" variant="outline" size="lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesCarousel(): string {
  return (
    <section className="forms-capabilities">
      <div className="container">
        <h2 className="section-title">Appearance & Capabilities</h2>
        <div
          className="capabilities-carousel"
          data-signals={`{capIndex: 0, capCount: ${capabilities.length}}`}
        >
          <button
            className="carousel-nav carousel-nav--prev"
            data-on-click="$capIndex = ($capIndex - 1 + $capCount) % $capCount"
            aria-label="Previous capability"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="capabilities-track">
            {capabilities.map((cap, index) => (
              <div
                className="capability-card"
                data-show={`$capIndex === ${index}`}
                style={index > 0 ? "display: none" : ""}
              >
                <div className="capability-image">
                  <img src={cap.image} alt={cap.title} loading="lazy" />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-nav carousel-nav--next"
            data-on-click="$capIndex = ($capIndex + 1) % $capCount"
            aria-label="Next capability"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="carousel-dots">
            {capabilities.map((_, index) => (
              <button
                className="carousel-dot"
                data-class={`{'carousel-dot--active': $capIndex === ${index}}`}
                data-on-click={`$capIndex = ${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid(): string {
  return (
    <section className="forms-features-grid">
      <div className="container">
        <h2 className="section-title">Everything You Need</h2>
        <div className="features-grid">
          {featuresGrid.map((feature) => (
            <div className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} loading="lazy" />
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

function PersonasSection(): string {
  return (
    <section className="forms-personas">
      <div className="container">
        <h2 className="section-title">Tailored for Digital Health Professionals</h2>
        <div className="personas-grid">
          {personas.map((persona) => (
            <div className="persona-card">
              <div className="persona-icon">
                <img src={persona.icon} alt={persona.title} loading="lazy" />
              </div>
              <h3>{persona.title}</h3>
              <p>{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PdfUploadSection(): string {
  return (
    <section className="forms-pdf-upload">
      <div className="container">
        <div className="pdf-upload-content">
          <div className="pdf-upload-text">
            <h2>Need a hand with building a form?</h2>
            <p>Upload your PDF form and we'll convert it to a digital FHIR-compliant form for you.</p>
          </div>
          <div className="pdf-upload-box">
            <div className="upload-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p>Drop your PDF here or <span className="upload-link">browse files</span></p>
            <span className="upload-hint">Max file size: 10MB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticlesSection(): string {
  return (
    <section className="forms-articles">
      <div className="container">
        <h2 className="section-title">Learn More About Aidbox Forms</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <a href={article.href} className="article-card" target={article.isVideo ? "_blank" : undefined}>
              <div className="article-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                {article.isVideo && (
                  <div className="article-play-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="article-content">
                <h4>{article.title}</h4>
                <div className="article-meta">
                  <span>{article.type}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection(): string {
  return (
    <section className="forms-architecture">
      <div className="container">
        <h2 className="section-title">Solution Architecture</h2>
        <div
          className="architecture-tabs"
          data-signals="{archTab: 'aidbox'}"
        >
          <div className="arch-tab-buttons">
            {architectureOptions.map((opt) => (
              <button
                className="arch-tab-btn"
                data-class={`{'arch-tab-btn--active': $archTab === '${opt.id}'}`}
                data-on-click={`$archTab = '${opt.id}'`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="arch-tab-panels">
            {architectureOptions.map((opt, index) => (
              <div
                className="arch-panel"
                data-show={`$archTab === '${opt.id}'`}
                style={index > 0 ? "display: none" : ""}
              >
                <p className="arch-description">{opt.description}</p>
                <div className="arch-image">
                  <img src={opt.image} alt={opt.description} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MedicalFormPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="forms-hero">
        <div className="container">
          <div className="forms-hero-content">
            <h1>Medical Forms for Healthcare Workflows</h1>
            <p>Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards.</p>
            <div className="hero-actions">
              <Button href="https://aidbox.app/ui/portal#/signup" variant="primary" size="lg">
                Try FORMS for free
              </Button>
              <Button href="/contacts" variant="outline" size="lg">
                Book a demo
              </Button>
            </div>
          </div>
          <div className="forms-hero-video">
            <iframe
              src="https://www.youtube.com/embed/Xp5k7Eg7Sbk"
              title="Aidbox Forms Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Personas Section */}
      <PersonasSection />

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Testimonial */}
      <TestimonialSection />

      {/* CTA */}
      <CtaSection variant="primary" />

      {/* Capabilities Carousel */}
      <CapabilitiesCarousel />

      {/* PDF Upload Section */}
      <PdfUploadSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* CTA Band */}
      <CtaSection variant="secondary" />

      {/* Architecture */}
      <ArchitectureSection />

      {/* Articles Section */}
      <ArticlesSection />

      {/* Contact Form */}
      <ContactForm />
    </Fragment>
  );
}
