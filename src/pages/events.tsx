import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Webinars",
  description: "Events and Webinars - FHIR Meetups, SDC Conference, FHIR Analytics, and more",
};

// SDC Conference data
const sdcConferenceItems = [
  {
    title: "Introduction to FHIR SDC",
    speaker: "Lloyd McKenzie",
    image: "/assets/images/events/sdc-lloyd.png",
    href: "/fhir-meetups/introduction-to-fhir-sdc",
  },
  {
    title: "Managing resource lifecycle with SDC",
    speaker: "Ilya Beda",
    image: "/assets/images/events/sdc-beda.png",
    href: "/fhir-meetups/managing-resource-lifecycle-with-sdc",
  },
  {
    title: "Template-Based Extraction and Beyond",
    speaker: "Brian Postlethwaite",
    image: "/assets/images/events/sdc-brian.png",
    href: "/fhir-meetups/template-based-extraction-and-beyond",
  },
  {
    title: "Designing Intuitive UIs for Template-Based Extraction: Empowering Non-Tech Users",
    speaker: "Vitaliy Beda",
    image: "/assets/images/events/sdc-vitaliy.png",
    href: "/fhir-meetups/designing-intuitive-uis-for-template-based-extraction-empowering-non-tech-users",
  },
  {
    title: "Using CQL with the SDC $populate operation",
    speaker: "Brenin Rhodes",
    image: "/assets/images/events/sdc-brenin.png",
    href: "/fhir-meetups/using-cql-with-the-sdc-populate-operation",
  },
  {
    title: "Usage of parameterised valueSets in Questionnaires",
    speaker: "Sean Feeney",
    image: "/assets/images/events/sdc-sean.png",
    href: "/fhir-meetups/usage-of-parameterised-valuesets-in-questionnaires",
  },
  {
    title: "Low-Code FHIRPath Tools for Clinical Form Designers",
    speaker: "Olim Olimov",
    image: "/assets/images/events/sdc-olim.png",
    href: "/fhir-meetups/low-code-fhirpath-tools-for-clinical-form-designers",
  },
  {
    title: "FHIR Questionnaire-related tools from the National Library of Medicine",
    speaker: "Paul Lynch",
    image: "/assets/images/events/sdc-paul.png",
    href: "/fhir-meetups/fhir-questionnaire-related-tools-from-the-national-library-of-medicine",
  },
  {
    title: "SDC in the real world: Capturing patient-reported outcomes",
    speaker: "Vadim Peretokin",
    image: "/assets/images/events/sdc-vadim.png",
    href: "/fhir-meetups/sdc-in-the-real-world-capturing-patient-reported-outcomes",
  },
];

// FHIR Meetups data
const fhirMeetupsItems = [
  {
    number: "01",
    title: "Exploring Practical FHIR Use Cases",
    subtitle: "Stay at Home",
    date: "April 23, 2020",
    image: "/assets/images/events/meetup-01-stay-at-home.jpg",
    href: "/fhir-meetups/stay-at-home",
  },
  {
    number: "02",
    title: "Fine-grained Security Policies Beyond OAuth2",
    subtitle: "Security Policies beyond OAuth2",
    date: "June 4, 2020",
    image: "/assets/images/events/meetup-02-security.jpg",
    href: "/fhir-meetups/security-policies-beyond-oauth2",
  },
  {
    number: "03",
    title: "SDC in FHIR",
    subtitle: "SDC in FHIR",
    date: "August 11, 2020",
    image: "/assets/images/events/meetup-03-sdc.jpg",
    href: "/fhir-meetups/sdc-in-fhir",
  },
  {
    number: "04",
    title: "FHIR Testing",
    subtitle: "FHIR Testing",
    date: "May 4, 2021",
    image: "/assets/images/events/meetup-04-testing.webp",
    href: "/fhir-meetups/fhir-testing",
  },
  {
    number: "05",
    title: "FHIR Profiling",
    subtitle: "FHIR Profiling",
    date: "July 8, 2021",
    image: "/assets/images/events/meetup-05-profiling.jpg",
    href: "/fhir-meetups/fhir-profiling",
  },
  {
    number: "06",
    title: "FHIR. More than REST",
    subtitle: "FHIR. More than REST",
    date: "October 14, 2021",
    image: "/assets/images/events/meetup-06-more-than-rest.jpg",
    href: "/fhir-meetups/fhir-more-than-rest",
  },
  {
    number: "07",
    title: "FHIR Terminology Services",
    subtitle: "FHIR Terminology",
    date: "",
    image: "/assets/images/events/meetup-07-terminology.jpg",
    href: "/fhir-meetups/fhir-terminology",
  },
  {
    number: "08",
    title: "FHIR at scale",
    subtitle: "FHIR at scale",
    date: "",
    image: "/assets/images/events/meetup-08-scale.jpg",
    href: "/fhir-meetups/fhir-at-scale",
  },
  {
    number: "09",
    title: "Federated FHIR: Patient Identity & Record Linkage",
    subtitle: "Federated FHIR",
    date: "",
    image: "/assets/images/events/meetup-09-federated.jpg",
    href: "/fhir-meetups/federated-fhir",
  },
  {
    number: "10",
    title: "SMART on FHIR",
    subtitle: "SMART on FHIR",
    date: "",
    image: "/assets/images/events/meetup-smart.webp",
    href: "/fhir-meetups/smart-on-fhir",
  },
  {
    number: "11",
    title: "FHIR® Topic-based Subscriptions",
    subtitle: "Topic-based Subscriptions",
    date: "",
    image: "/assets/images/events/meetup-subscriptions.webp",
    href: "/fhir-meetups/fhir-r-topic-based-subscriptions",
  },
  {
    number: "12",
    title: "FHIR® Access Control: Real-world Challenges and Solutions",
    subtitle: "Access Control",
    date: "",
    image: "/assets/images/events/meetup-access-control.jpg",
    href: "/fhir-meetups/fhir-r-access-control-real-world-challenges-and-solutions",
  },
];

// FHIR Analytics data
const fhirAnalyticsItems = [
  {
    title: "Using SQL on FHIR in the HL7 FHIR IG Publisher",
    speaker: "Grahame Grieve",
    description: "This presentation will describe how the HL7 FHIR IG publisher uses SQL on FHIR ViewDefinitions to make it easier to include content out of the resources in pages in the implementation guide",
    image: "/assets/images/events/analytics-graham.png",
    href: "/fhir-analytics/sql-on-fhir-ig-publisher",
  },
  {
    title: "Transforming FHIR for efficient population queries using Open Health Stack",
    speaker: "Bashir Sadjad",
    description: "Bashir will present how Google is using the new SQL on FHIR v2 specification to widen the use-cases and infrastructure choices for deploying the OHS Analytics component.",
    image: "/assets/images/events/analytics-bashir.png",
    href: "/fhir-analytics/transforming-fhir-open-health-stack",
  },
  {
    title: "Safhire: Rust-y Ducklings in a Row",
    speaker: "Kiran Ayyagari",
    description: "Safhire is an analytics engine based on SQL on FHIR specification written in Rust.",
    image: "/assets/images/events/analytics-kiran.png",
    href: "/fhir-analytics/safhire-rust",
  },
  {
    title: "An Open Approach for Translating FHIR to OMOP",
    speaker: "Carl Anderson",
    description: "",
    image: "/assets/images/events/analytics-carl.png",
    href: "/fhir-analytics/fhir-to-omop",
  },
  {
    title: "Pathling: SQL on FHIR views for Apache Spark",
    speaker: "John Grimes",
    description: "",
    image: "/assets/images/events/analytics-john.png",
    href: "/fhir-analytics/pathling-spark",
  },
  {
    title: "FlatQuack: FHIR resources to SQL tables with DuckDB",
    speaker: "Dan Gottlieb",
    description: "",
    image: "/assets/images/events/analytics-dan.png",
    href: "/fhir-analytics/flatquack-duckdb",
  },
  {
    title: "SQL on FHIR in PostgreSQL",
    speaker: "Nikolai Ryzhikov",
    description: "",
    image: "/assets/images/events/analytics-nikolai.png",
    href: "/fhir-analytics/sql-on-fhir-postgresql",
  },
  {
    title: "A Technical Tour of the SQL on FHIR Spec",
    speaker: "Ryan Brush",
    description: "",
    image: "/assets/images/events/analytics-ryan.png",
    href: "/fhir-analytics/sql-on-fhir-spec-tour",
  },
  {
    title: "FHIR Analytics & SQL on FHIR: An Introduction",
    speaker: "",
    description: "",
    image: "/assets/images/events/analytics-intro.png",
    href: "/fhir-analytics/introduction",
  },
  {
    title: "What's next for SQL on FHIR? Roundtable",
    speaker: "",
    description: "",
    image: "/assets/images/events/analytics-roundtable.png",
    href: "/fhir-analytics/roundtable",
  },
];

// On Demand webinars
const onDemandItems = [
  {
    title: "FHIR's Impact on Digital Health Startups",
    date: "August 24, 2023",
    image: "/assets/images/events/webinar-digital-health.png",
    href: "/events/fhirs-impact-on-digital-health-startups",
  },
  {
    title: "How to comply with ONC HL7® FHIR® API criteria",
    date: "June 21, 2022",
    image: "/assets/images/events/webinar-onc-comply.jpg",
    href: "/events/webinar-june-2022",
  },
];

// Recorded webinars
const recordedItems = [
  {
    title: "Aidbox Product Updates",
    subtitle: "Mid-Year Results 2024",
    date: "June 20, 2024",
    image: "/assets/images/events/recorded-mid-year.png",
    href: "/events/aidbox-product-updates-5",
  },
  {
    title: "Aidbox Monthly Product Updates",
    subtitle: "October 2023",
    date: "November 16, 2023",
    image: "/assets/images/events/recorded-october-2023.png",
    href: "/events/aidbox-updates-october-2023",
  },
  {
    title: "Aidbox Monthly Product Updates",
    subtitle: "September 2023",
    date: "October 12, 2023",
    image: "/assets/images/events/recorded-september-2023.png",
    href: "/events/aidbox-monthly-product-updates-october-2023",
  },
  {
    title: "Aidbox Monthly Product Updates",
    subtitle: "August 2023",
    date: "September 14, 2023",
    image: "/assets/images/events/recorded-august-2023.png",
    href: "/events/aidbox-monthly-product-updates-september-2023",
  },
  {
    title: "What's new in Aidbox – a better way to work with FHIR",
    subtitle: "",
    date: "August 17, 2023",
    image: "/assets/images/events/recorded-whats-new.png",
    href: "/events/whats-new-in-aidbox-a-better-way-to-work-with-fhir",
  },
];

// Past Events (FHIR Camp)
const pastEventsItems = [
  {
    title: "HL7 FHIR® Camp 2025, Portugal",
    date: "October 22, 2025",
    image: "/assets/images/events/fhir-camp-2024.png",
    href: "/events/fhir-camp-2025",
  },
  {
    title: "FHIR® Camp 2024, Portugal",
    date: "November 28, 2024",
    image: "/assets/images/events/fhir-camp-2024.png",
    href: "/events/fhir-camp-2024",
  },
  {
    title: "FHIR Camp 2023, Portugal",
    date: "November 1, 2023",
    image: "/assets/images/events/fhir-camp-2023.png",
    href: "/events/fhir-camp-in-cascais-portugal",
  },
];

function SDCCard({ item }: { item: typeof sdcConferenceItems[0] }): string {
  return (
    <div className="events-card">
      <div className="events-card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-card-title">{item.title}</h3>
      <a href={item.href} className="events-btn-outline">Learn More</a>
    </div>
  );
}

function MeetupCard({ item }: { item: typeof fhirMeetupsItems[0] }): string {
  return (
    <a href={item.href} className="events-meetup-card">
      <div className="events-meetup-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-meetup-title">{item.title}</h3>
      {item.date && <p className="events-meetup-date">{item.date}</p>}
      <span className="events-btn-outline">Learn More</span>
    </a>
  );
}

function AnalyticsCard({ item }: { item: typeof fhirAnalyticsItems[0] }): string {
  return (
    <div className="events-analytics-card">
      <div className="events-analytics-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-analytics-title">{item.title}</h3>
      {item.description && <p className="events-analytics-desc">{item.description}</p>}
      <a href={item.href} className="events-btn-outline">Learn More</a>
    </div>
  );
}

function OnDemandCard({ item }: { item: typeof onDemandItems[0] }): string {
  return (
    <div className="events-ondemand-card">
      <div className="events-ondemand-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-ondemand-title">{item.title}</h3>
      <p className="events-ondemand-date">{item.date}</p>
      <a href={item.href} className="events-btn-outline">Watch Now</a>
    </div>
  );
}

function RecordedCard({ item }: { item: typeof recordedItems[0] }): string {
  return (
    <a href={item.href} className="events-recorded-card">
      <div className="events-recorded-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-recorded-title">{item.title}</h3>
      {item.subtitle && <p className="events-recorded-subtitle">{item.subtitle}</p>}
      <p className="events-recorded-date">{item.date}</p>
    </a>
  );
}

function PastEventCard({ item }: { item: typeof pastEventsItems[0] }): string {
  return (
    <div className="events-past-card">
      <div className="events-past-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <h3 className="events-past-title">{item.title}</h3>
      <p className="events-past-date">{item.date}</p>
      <a href={item.href} className="events-btn-outline">Learn More</a>
    </div>
  );
}

export default function EventsPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1>Events and Webinars</h1>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="events-upcoming">
        <div className="events-upcoming-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80V0C240 53.3333 480 80 720 80C960 80 1200 53.3333 1440 0V80H0Z" fill="#f4f8fb"/>
          </svg>
        </div>
        <div className="events-upcoming-content">
          <div className="container">
            <h2>Upcoming</h2>
            <p>No upcoming events. Please <a href="#subscribe-form" className="events-subscribe-link">subscribe</a> to be notified.</p>
          </div>
        </div>
      </section>

      {/* SDC Conference Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">SDC Conference</h2>
          <div className="events-grid events-grid-3">
            {sdcConferenceItems.map((item) => (
              <SDCCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* FHIR Meetups Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">FHIR Meetups</h2>
          <div className="events-grid events-grid-3">
            {fhirMeetupsItems.map((item) => (
              <MeetupCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* FHIR Analytics Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">FHIR Analytics</h2>
          <div className="events-grid events-grid-3">
            {fhirAnalyticsItems.map((item) => (
              <AnalyticsCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* On Demand Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">On Demand</h2>
          <div className="events-grid events-grid-2">
            {onDemandItems.map((item) => (
              <OnDemandCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">Recorded</h2>
          <div className="events-grid events-grid-3">
            {recordedItems.map((item) => (
              <RecordedCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="events-section-title">Past Events</h2>
          <div className="events-grid events-grid-3">
            {pastEventsItems.map((item) => (
              <PastEventCard item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Form Section */}
      <section className="events-subscribe" id="subscribe-form">
        <div className="container">
          <div className="events-subscribe-content">
            <div className="events-subscribe-text">
              <p className="events-subscribe-label">Never miss a thing</p>
              <h3 className="events-subscribe-title">Subscribe for more content!</h3>
            </div>
            <form className="events-subscribe-form" action="/api/subscribe" method="POST">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="events-subscribe-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="events-subscribe-input"
                required
              />
              <button type="submit" className="events-subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
