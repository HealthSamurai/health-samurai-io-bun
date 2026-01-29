import { Fragment } from "../lib/jsx-runtime";
import { ContactForm } from "../components/sections/ContactForm";

export const metadata = {
  title: "Health Samurai News",
  description: "The latest news about Health Samurai.",
};

type NewsArticle = {
  date: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  slug: string;
};

const featuredArticle: NewsArticle = {
  date: "March 10, 2024",
  title: "Health Samurai achieves ISO 27001:2022 certification",
  description: "Discover how the ISO 27001:2022 certification reinforces our commitment to top-tier data security and privacy management.",
  category: "Certifications",
  categorySlug: "certifications",
  image: "/assets/images/news/iso-certification.png",
  slug: "iso-27001-2022-certification",
};

const articles: NewsArticle[] = [
  {
    date: "January 26, 2026",
    title: "Washington State Department of Health Partners with Health Samurai to Power Statewide Public Health Reporting with Aidbox",
    description: "Health Samurai partnered with WA DOH to enable statewide public health reporting using Aidbox, supporting real-time data from 93 hospitals.",
    category: "Partnerships",
    categorySlug: "partnerships",
    image: "/assets/images/news/washington-doh-partnership.png",
    slug: "washington-doh-partnership",
  },
  {
    date: "January 15, 2026",
    title: "VillageCareMAX ranks #2 in Flexpa's 2025 Payer Patient Access API Report",
    description: "Patient access report shows API-CDAP, implementation using Aidbox by Health Samurai.",
    category: "Partnerships",
    categorySlug: "partnerships",
    image: "/assets/images/news/villagecaremax-flexpa.png",
    slug: "villagecaremax-flexpa-report",
  },
  {
    date: "December 15, 2025",
    title: "Transform Clinical Data Collection with Adaptive Forms",
    description: "Watch the demo: See the PHJG-9 adaptive form in action - a smarter, faster way to collect clinical data for routine depression screening.",
    category: "New features",
    categorySlug: "new-features",
    image: "/assets/images/news/adaptive-forms.png",
    slug: "adaptive-forms",
  },
  {
    date: "November 15, 2025",
    title: "Health Samurai at HL7 FHIR DevDays 2025: Talks, demos, and videos",
    description: "Watch us: HL7 FHIR DevDays Schedule. SQL on FHIR, Workflows with AI, Security, and more.",
    category: "Events",
    categorySlug: "events",
    image: "/assets/images/news/devdays-2025.png",
    slug: "hl7-fhir-devdays-2025",
  },
  {
    date: "October 8, 2025",
    title: "Free ONC (g)(10) Test Kit available during government shutdown",
    description: "Health Samurai announces free public Inferno (g)(10) Test Kit amid the shutdown - stay compliant with no interruption.",
    category: "Other news",
    categorySlug: "other-news",
    image: "/assets/images/news/inferno-g10-test-kit.png",
    slug: "free-onc-g10-test-kit",
  },
  {
    date: "September 21, 2025",
    title: "Health Samurai wins HL7 AI Challenge with FHIR AI Assistant",
    description: "Health Samurai's AI Assistant for FHIR SQL won at HL7 AI Challenge 2025, FHIR DevDays. Questionnaire AI at second place.",
    category: "Other news",
    categorySlug: "other-news",
    image: "/assets/images/news/hl7-ai-challenge.png",
    slug: "hl7-ai-challenge-winner",
  },
  {
    date: "August 21, 2025",
    title: "Embedding other renderers in Form Builder",
    description: "Discover and configure how your forms behave across different renderers with the new Form Builder feature.",
    category: "New features",
    categorySlug: "new-features",
    image: "/assets/images/news/form-builder-features.png",
    slug: "form-builder-renderers",
  },
  {
    date: "August 21, 2025",
    title: "How to enrich your Forms with media-based answer options",
    description: "Now you can embed images, videos, or audio clips to specific answer options.",
    category: "New features",
    categorySlug: "new-features",
    image: "/assets/images/news/form-builder-features.png",
    slug: "forms-media-answer-options",
  },
  {
    date: "August 21, 2025",
    title: "Meet your new form-building AI Assistant",
    description: "You have full design control. Let AI handle the heavy lifting and reduce development time.",
    category: "New features",
    categorySlug: "new-features",
    image: "/assets/images/news/form-builder-features.png",
    slug: "form-builder-ai-assistant",
  },
  {
    date: "August 8, 2025",
    title: "FHIR Audit Logging at Healthcare Scale",
    description: "Auditbox stores and searches FHIR audit logs at scale — fast, compliant, and efficient.",
    category: "New features",
    categorySlug: "new-features",
    image: "/assets/images/news/auditbox-fhir-logging.jpg",
    slug: "fhir-audit-logging",
  },
];

const topics = [
  { label: "All news", slug: "all-news" },
  { label: "Certifications", slug: "certifications" },
  { label: "Events", slug: "events" },
  { label: "Industry news", slug: "industry-news" },
  { label: "New features", slug: "new-features" },
  { label: "Other news", slug: "other-news" },
  { label: "Partnerships", slug: "partnerships" },
  { label: "People & Culture", slug: "people-culture" },
  { label: "Podcasts", slug: "podcasts" },
  { label: "Videos", slug: "videos" },
];

function FeaturedArticleCard({ article }: { article: NewsArticle }): string {
  return (
    <a href={`/news/${article.slug}`} className="news-featured-card">
      <div className="news-featured-content">
        <span className="news-date">
          <span className="news-date-slash">//</span> {article.date}
        </span>
        <h2 className="news-featured-title">{article.title}</h2>
        <p className="news-featured-desc">{article.description}</p>
        <span className="news-category-tag">{article.category}</span>
      </div>
      <div className="news-featured-image">
        <img src={article.image} alt={article.title} />
      </div>
    </a>
  );
}

function ArticleCard({ article }: { article: NewsArticle }): string {
  return (
    <a href={`/news/${article.slug}`} className="news-article-card">
      <div className="news-article-content">
        <span className="news-date">
          <span className="news-date-slash">//</span> {article.date}
        </span>
        <h2 className="news-article-title">{article.title}</h2>
        <p className="news-article-desc">{article.description}</p>
        <span className="news-category-tag">{article.category}</span>
      </div>
      <div className="news-article-image">
        <img src={article.image} alt={article.title} />
      </div>
    </a>
  );
}

function TopicsSidebar(): string {
  return (
    <aside className="news-sidebar">
      <h4 className="news-sidebar-title">Topics</h4>
      <ul className="news-topics-list">
        {topics.map((topic) => (
          <li>
            <a href={`/news-categories/${topic.slug}`} className="news-topic-link">
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Pagination(): string {
  return (
    <div className="news-pagination">
      <a href="?c938f5ba_page=2" className="news-pagination-link">
        Next
        <img src="/assets/images/news/icon-right-arrow.svg" alt="" className="news-pagination-arrow" />
      </a>
    </div>
  );
}

export default function NewsPage(): string {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <h2 className="news-hero-title">News</h2>
          <p className="news-hero-desc">
            Announcements, events, new features, and much more about the Aidbox FHIR platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="news-main">
        <div className="container">
          <div className="news-layout">
            <div className="news-content">
              {/* Featured Article */}
              <FeaturedArticleCard article={featuredArticle} />

              {/* Regular Articles */}
              <div className="news-articles-list">
                {articles.map((article) => (
                  <ArticleCard article={article} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </div>

            {/* Sidebar */}
            <TopicsSidebar />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Fragment>
  );
}
