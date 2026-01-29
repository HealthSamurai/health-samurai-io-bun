import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "C-CDA to FHIR Converter | FHIR converter",
  description: "Convert C-CDA to FHIR and FHIR to C-CDA easy, fast, and secure. Free online version available for testing.",
};

const benefits = [
  {
    title: "Convert Instantly",
    description: "Use the converter straight out of the box, with pre-configured mapping rules for the majority of C-CDA sections, allowing for seamless, code-free conversions and easy customization.",
  },
  {
    title: "Validate Effectively",
    description: "Check C-CDA document validity with the built-in validator, ensuring a robust conversion process and paving the way for enhanced FHIR data validation.",
  },
  {
    title: "Ensure ONC Compliance",
    description: "Achieve 170.315(g)(9) certification with our converter, guaranteeing officially validated document conversions from FHIR to C-CDA.",
  },
  {
    title: "Integrate Flexibly",
    description: 'Work with any <a href="/fhir-server">FHIR server</a> using our converter, which can be seamlessly embedded into your existing infrastructure, providing a flexible API for easy data conversions.',
  },
  {
    title: "Expand Capabilities",
    description: "Enhance your integration with Aidbox, unlocking additional features like Terminology services, advanced data management, and database resource searches.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Preprocess and Validate",
    description: "The built-in validator checks C-CDA documents for compliance, and the preprocessing function prepares the data for a smooth conversion process.",
  },
  {
    number: 2,
    title: "Convert with Core Mapping",
    description: "The rule engine simplifies the conversion by using established rules, reducing the need for manual coding and ensuring a high coverage of use cases. Users can also extend these rules for customized conversions.",
  },
  {
    number: 3,
    title: "Integrate and Access",
    description: 'The converter\'s standalone nature allows it to work with any <a href="/fhir-server">FHIR server</a>, and when used with Aidbox, it enhances capabilities with additional modules like terminology services and Master Data Management (MDM) for deduplication.',
  },
];

const accordionItemsLeft = [
  {
    id: "interoperability",
    title: "Interoperability",
    content: "C-CDA and FHIR are different standards for healthcare data exchange. A converter bridges the gap, ensuring seamless communication between systems.",
  },
  {
    id: "modernization",
    title: "Modernization",
    content: "FHIR is more flexible and modern than C-CDA. Converting C-CDA to FHIR updates systems to better meet current healthcare needs.",
  },
  {
    id: "standardization",
    title: "Standardization",
    content: "FHIR provides a standardized representation of data, improving consistency compared to the complex nature of C-CDA.",
  },
  {
    id: "improved-access",
    title: "Improved Access",
    content: "FHIR's RESTful APIs make data access easier compared to C-CDA's document-centric approach.",
  },
];

const accordionItemsRight = [
  {
    id: "advanced-use-cases",
    title: "Advanced Use Cases",
    content: "FHIR supports advanced healthcare scenarios better than C-CDA, enabling implementation of features like clinical decision support and precision medicine.",
  },
  {
    id: "easier-integration",
    title: "Easier Integration",
    content: "Converting C-CDA to FHIR facilitates integration with modern healthcare systems and applications built on FHIR.",
  },
  {
    id: "future-proofing",
    title: "Future-Proofing",
    content: "FHIR evolves to meet emerging needs, making the conversion from C-CDA a way to future-proof systems and ensure compatibility with upcoming standards.",
  },
];

function AccordionItem({ item, signalName }: { item: typeof accordionItemsLeft[0]; signalName: string }): string {
  return (
    <div className="ccda-accordion-item">
      <button
        className="ccda-accordion-header"
        data-on-click={`$${signalName} = !$${signalName}`}
        data-class={`{'ccda-accordion-header--open': $${signalName}}`}
      >
        <span className="ccda-accordion-title">{item.title}</span>
        <svg
          className="ccda-accordion-icon"
          data-class={`{'ccda-accordion-icon--open': $${signalName}}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div
        className="ccda-accordion-panel"
        data-show={`$${signalName}`}
        style="display: none"
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default function CCDAToFHIRConverterPage(): string {
  // Build accordion signals object
  const allAccordionItems = [...accordionItemsLeft, ...accordionItemsRight];
  const accordionSignals = allAccordionItems.reduce((acc, item) => {
    acc[item.id.replace(/-/g, "_")] = false;
    return acc;
  }, {} as Record<string, boolean>);

  return (
    <Fragment>
      {/* Aidbox Subnav Bar */}
      <div className="ccda-subnav">
        <div className="container">
          <a href="/fhir-server" className="ccda-subnav-logo">
            <img src="/assets/images/c-cda-to-fhir-converter/aidbox-logo.svg" alt="Aidbox" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ccda-hero">
        <div className="container">
          <div className="ccda-hero-grid">
            <div className="ccda-hero-content">
              <h1>C-CDA / FHIR Converter</h1>
              <p className="ccda-hero-description">
                Convert C-CDA to FHIR and FHIR to C-CDA – ensuring easy, fast, and secure conversions for enhanced patient care and compliance with industry standards.
              </p>
              <div className="ccda-hero-buttons">
                <a href="https://ccda.aidbox.app/" className="ccda-btn-primary">
                  Start online for free &gt;
                </a>
                <a href="/contacts" className="ccda-btn-secondary">
                  Start with an expert
                </a>
              </div>
            </div>
            <div className="ccda-hero-image">
              <img src="/assets/images/c-cda-to-fhir-converter/hero-converter.webp" alt="C-CDA FHIR Converter" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ccda-benefits">
        <div className="container">
          <h2 className="ccda-benefits-title">Transform back and forth — all in one place</h2>
          <div className="ccda-benefits-grid">
            {benefits.map((benefit, index) => (
              <div className={`ccda-benefit-card ${index >= 3 ? 'ccda-benefit-card--bottom' : ''}`}>
                <h3>{benefit.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: benefit.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How FHIR Converter Works Section */}
      <section className="ccda-how-it-works">
        <div className="container">
          <h2>How FHIR converter works</h2>
          <p className="ccda-how-description">
            Discover the power of the standalone C-CDA/FHIR Converter, designed to integrate effortlessly with your existing healthcare infrastructure. Without the need for additional software, our converter simplifies the data exchange process, providing a reliable and independent solution that works right out of the box.
          </p>

          {/* Steps Grid - NO TABS */}
          <div className="ccda-how-content">
            <div className="ccda-how-grid">
              <div className="ccda-how-steps">
                {processSteps.map((step) => (
                  <div className="ccda-step">
                    <div className="ccda-step-number">{step.number}.</div>
                    <div className="ccda-step-content">
                      <h3>{step.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: step.description }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="ccda-how-diagram">
                <img src="/assets/images/c-cda-to-fhir-converter/fhir-converter-schema.webp" alt="FHIR converter schema" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need More Details Section */}
      <section className="ccda-more-details">
        <div className="container">
          <div className="ccda-more-details-grid">
            <div className="ccda-more-details-title">
              <h2>Need more details?</h2>
            </div>
            <div className="ccda-more-details-content">
              <p>
                Explore our detailed documentation for insights into the C-CDA/ FHIR Converter or reach out to us for any questions you might have.
              </p>
              <a href="https://docs.aidbox.app/modules-1/integration-toolkit/ccda-converter" className="ccda-btn-docs">
                View documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Converting Section */}
      <section className="ccda-why-converting">
        <div className="container">
          <h2>Why converting?</h2>
          <div
            className="ccda-accordion-grid"
            data-signals={JSON.stringify(accordionSignals)}
          >
            <div className="ccda-accordion-column">
              {accordionItemsLeft.map((item) => (
                <AccordionItem item={item} signalName={item.id.replace(/-/g, "_")} />
              ))}
            </div>
            <div className="ccda-accordion-column">
              {accordionItemsRight.map((item) => (
                <AccordionItem item={item} signalName={item.id.replace(/-/g, "_")} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="ccda-cta">
        <div className="container">
          <h2>Start converting with Aidbox</h2>
          <p className="ccda-cta-description">
            Aidbox Online C-CDA/FHIR converter* is free to use.<br />
            We also offer paid stand-alone converter with additional features, storage, and support.
          </p>
          <div className="ccda-cta-buttons">
            <a href="https://ccda.aidbox.app/" className="ccda-btn-primary">
              Try for free &gt;
            </a>
            <a href="/contacts" className="ccda-cta-btn-secondary">
              Talk to an expert
            </a>
          </div>
          <p className="ccda-cta-disclaimer">
            * The online version is simplified for demonstration purposes only. Feel free to reach out to discuss specific C-CDA documents and section templates you're interested in.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
