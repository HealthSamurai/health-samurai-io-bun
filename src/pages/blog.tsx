import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Samurai Blog",
  description: "Health IT and FHIR insights, stories and resources to help you innovate.",
};

// Topic categories for sidebar
const topics = [
  { label: "System Design", slug: "system-design" },
  { label: "Releases", slug: "releases" },
  { label: "Partners", slug: "partners" },
  { label: "SQL on FHIR", slug: "sql-on-fhir" },
  { label: "Database", slug: "database" },
  { label: "Analytics", slug: "analytics" },
  { label: "FHIR", slug: "fhir" },
  { label: "Forms", slug: "forms" },
  { label: "Storage", slug: "storage" },
  { label: "Infrastructure", slug: "infrastructure" },
  { label: "Integrations", slug: "integrations" },
  { label: "Terminology", slug: "terminology" },
  { label: "Compliance", slug: "compliance" },
  { label: "Startups", slug: "startups" },
  { label: "Others", slug: "others" },
];

// Article data
type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author?: string;
  readTime: string;
  image: string;
};

const featuredArticle: Article = {
  slug: "sql-on-fhir-viewdefinition",
  title: "SQL on FHIR: What is a ViewDefinition, and how does it work?",
  description: "Discover how to flatten complex healthcare data using ViewDefinition resource. Dive into our article for tips and examples.",
  category: "FHIR",
  date: "July 24, 2024",
  author: "Nikolai Ryzhikov",
  readTime: "6 min",
  image: "/assets/images/blog/article-viewdef.png",
};

const secondaryArticles: Article[] = [
  {
    slug: "aidbox-2025-building-future-proof-fhir-platform",
    title: "Aidbox 2025: Building a Future-Proof FHIR Platform",
    description: "In 2025, Aidbox focused on performance, FHIR conformance, and developer experience—maturing into a robust platform for the wider healthcare ecosystem. This post highlights the key architectural changes that made Aidbox faster, more transparent, and production-ready.",
    category: "FHIR",
    date: "January 15, 2026",
    author: "Aleksandr Kislitsyn",
    readTime: "7 min",
    image: "/assets/images/blog/article-aidbox-2025.png",
  },
  {
    slug: "sql-on-fhir-validation",
    title: "SQL on FHIR Validation: How Aidbox Proved a New Data Standard",
    description: "FHIR (Fast Healthcare Interoperability Resources) revolutionized medical data exchange between systems. It's the standard. SQL structure makes data accessible to analysts. Both together—SQL on FHIR—make healthcare data more transparent and actionable.",
    category: "Analytics",
    date: "January 15, 2026",
    readTime: "4 min",
    image: "/assets/images/blog/article-sql-fhir-pass.png",
  },
];

const articles: Article[] = [
  {
    slug: "aidbox-2025-building-future-proof-fhir-platform",
    title: "Aidbox 2025: Building a Future-Proof FHIR Platform",
    description: "In 2025, Aidbox focused on performance, FHIR conformance, and developer experience — maturing into a robust platform for the wider healthcare ecosystem.",
    category: "FHIR",
    date: "Jan 21, 2026",
    author: "Aleksandr Kislitsyn",
    readTime: "7 min",
    image: "/assets/images/blog/article-aidbox-2025.png",
  },
  {
    slug: "sql-on-fhir-validation",
    title: "SQL on FHIR Validation: How Aidbox Proved a New Data Standard",
    description: "FHIR revolutionized medical data exchange between systems. SQL structure makes data accessible to analysts. Both together make healthcare data more transparent.",
    category: "Analytics",
    date: "Jan 15, 2026",
    readTime: "4 min",
    image: "/assets/images/blog/article-sql-fhir-pass.png",
  },
  {
    slug: "cms-0057-f-interoperability-prior-authorization",
    title: "Understanding the CMS-0057-F Interoperability and Prior Authorization Final Rule",
    description: "A comprehensive guide to understanding the new CMS interoperability requirements and how they affect healthcare organizations.",
    category: "Compliance",
    date: "Jan 14, 2026",
    author: "Mike Kulakov",
    readTime: "5 min",
    image: "/assets/images/blog/article-cms-rule.png",
  },
  {
    slug: "fhir-fuse-unix-way",
    title: "FHIR FUSE: FHIR in a Unix Way",
    description: "Explore how FHIR FUSE brings Unix philosophy to healthcare data, enabling powerful command-line workflows for FHIR resources.",
    category: "FHIR",
    date: "Dec 23, 2025",
    author: "Marat Surmashev, Aleksandr Penskoi",
    readTime: "10 min",
    image: "/assets/images/blog/article-fhir-fuse.png",
  },
  {
    slug: "devdays-2024-videos",
    title: "DevDays 2024: Watch Our Latest Presentations",
    description: "Catch up on Health Samurai's presentations from DevDays 2024, covering the latest in FHIR development and healthcare interoperability.",
    category: "FHIR",
    date: "Dec 15, 2025",
    readTime: "3 min",
    image: "/assets/images/blog/article-devdays.png",
  },
  {
    slug: "terminology-service-overview",
    title: "Aidbox Terminology Service: A Complete Overview",
    description: "Learn how Aidbox's terminology service helps manage healthcare vocabularies, code systems, and value sets efficiently.",
    category: "Terminology",
    date: "Dec 10, 2025",
    readTime: "6 min",
    image: "/assets/images/blog/article-terminology.png",
  },
  {
    slug: "async-operations-fhir",
    title: "Async Operations in FHIR: Best Practices",
    description: "Understanding asynchronous operations in FHIR and how to implement them effectively in your healthcare applications.",
    category: "FHIR",
    date: "Dec 5, 2025",
    readTime: "5 min",
    image: "/assets/images/blog/article-async-ops.png",
  },
  {
    slug: "ai-powered-forms",
    title: "AI-Powered Clinical Forms: The Future of Data Capture",
    description: "Discover how AI is transforming clinical form design and data capture in healthcare settings.",
    category: "Forms",
    date: "Nov 28, 2025",
    readTime: "4 min",
    image: "/assets/images/blog/article-ai-forms.png",
  },
  {
    slug: "keycloak-integration",
    title: "Integrating Keycloak with Aidbox for Enterprise Authentication",
    description: "A step-by-step guide to setting up Keycloak as your identity provider with Aidbox FHIR server.",
    category: "Infrastructure",
    date: "Nov 20, 2025",
    readTime: "8 min",
    image: "/assets/images/blog/article-keycloak.png",
  },
  {
    slug: "audit-log-compliance",
    title: "Audit Logging for Healthcare Compliance",
    description: "How to implement comprehensive audit logging in your healthcare applications to meet regulatory requirements.",
    category: "Compliance",
    date: "Nov 15, 2025",
    readTime: "6 min",
    image: "/assets/images/blog/article-audit-log.png",
  },
  {
    slug: "hybrid-terminology-approach",
    title: "Hybrid Terminology: Combining Standard and Custom Code Systems",
    description: "Best practices for managing both standard healthcare terminologies and custom code systems in your FHIR implementation.",
    category: "Terminology",
    date: "Nov 10, 2025",
    readTime: "5 min",
    image: "/assets/images/blog/article-hybrid-terminology.png",
  },
  {
    slug: "materialize-fhir-views",
    title: "Materializing FHIR Views for Analytics",
    description: "Learn how to create materialized views from FHIR data for faster analytics and reporting.",
    category: "Analytics",
    date: "Nov 5, 2025",
    readTime: "7 min",
    image: "/assets/images/blog/article-materialize.png",
  },
  {
    slug: "fhir-infrastructure-best-practices",
    title: "FHIR Infrastructure: Deployment Best Practices",
    description: "Discover the advantages of proper FHIR infrastructure setup and deployment strategies for production environments.",
    category: "Infrastructure",
    date: "Oct 30, 2025",
    readTime: "6 min",
    image: "/assets/images/blog/article-fhir-infra.png",
  },
  {
    slug: "happy-developer-experience",
    title: "Building a Happy Developer Experience with Aidbox",
    description: "How Aidbox prioritizes developer experience to make building healthcare applications enjoyable and efficient.",
    category: "FHIR",
    date: "Oct 25, 2025",
    readTime: "4 min",
    image: "/assets/images/blog/article-happy-dev.png",
  },
  {
    slug: "gino-canessa-interview",
    title: "Interview with Gino Canessa: FHIR Subscriptions and Beyond",
    description: "An in-depth conversation with Gino Canessa about the future of FHIR subscriptions and real-time healthcare data.",
    category: "FHIR",
    date: "Oct 20, 2025",
    readTime: "12 min",
    image: "/assets/images/blog/article-gino-interview.png",
  },
  {
    slug: "grahame-grieve-interview",
    title: "Interview with Grahame Grieve: The Father of FHIR",
    description: "A conversation with Grahame Grieve about the origins, evolution, and future of the FHIR standard.",
    category: "FHIR",
    date: "Oct 15, 2025",
    readTime: "15 min",
    image: "/assets/images/blog/article-grahame-interview.png",
  },
  {
    slug: "capminds-partnership",
    title: "Health Samurai Partners with CapMinds",
    description: "Announcing our partnership with CapMinds to bring advanced FHIR solutions to more healthcare organizations.",
    category: "Partners",
    date: "Oct 10, 2025",
    readTime: "3 min",
    image: "/assets/images/blog/article-capminds.png",
  },
  {
    slug: "free-fhir-tools",
    title: "Free FHIR Tools Every Developer Should Know",
    description: "A curated list of free and open-source FHIR tools to accelerate your healthcare development projects.",
    category: "FHIR",
    date: "Oct 5, 2025",
    readTime: "5 min",
    image: "/assets/images/blog/article-free-fhir-tools.png",
  },
  {
    slug: "subscriptions-overview",
    title: "Aidbox Subscriptions: Real-Time FHIR Data",
    description: "An overview of Aidbox's subscription capabilities for building real-time healthcare applications.",
    category: "FHIR",
    date: "Sep 30, 2025",
    readTime: "6 min",
    image: "/assets/images/blog/article-subscriptions.png",
  },
  {
    slug: "custom-resources-guide",
    title: "How to Create Custom Resources in Aidbox",
    description: "A practical guide to extending FHIR with custom resources tailored to your specific healthcare needs.",
    category: "FHIR",
    date: "Sep 25, 2025",
    readTime: "8 min",
    image: "/assets/images/blog/article-custom-resources.png",
  },
  {
    slug: "matrix-forms-tutorial",
    title: "How to Build Matrix Forms in Aidbox",
    description: "Step-by-step tutorial for creating complex matrix-style forms for clinical data capture.",
    category: "Forms",
    date: "Sep 20, 2025",
    readTime: "7 min",
    image: "/assets/images/blog/article-matrix-forms.png",
  },
  {
    slug: "healthcare-innovation-ideas",
    title: "Healthcare Innovation: Ideas for the Future",
    description: "Exploring innovative ideas and emerging trends that will shape the future of healthcare technology.",
    category: "Others",
    date: "Sep 15, 2025",
    readTime: "5 min",
    image: "/assets/images/blog/article-lightbulb.jpg",
  },
  {
    slug: "upload-igs-aidbox",
    title: "How to Upload Implementation Guides to Aidbox",
    description: "A guide to loading and using FHIR Implementation Guides in your Aidbox instance.",
    category: "FHIR",
    date: "Sep 10, 2025",
    readTime: "4 min",
    image: "/assets/images/blog/article-upload-igs.png",
  },
  {
    slug: "aidbox-forms-introduction",
    title: "Introduction to Aidbox Forms",
    description: "Get started with Aidbox Forms for building beautiful, FHIR-native clinical forms.",
    category: "Forms",
    date: "Sep 5, 2025",
    readTime: "5 min",
    image: "/assets/images/blog/article-aidbox-forms.png",
  },
  {
    slug: "workflow-engine-guide",
    title: "Aidbox Workflow Engine: Automating Healthcare Processes",
    description: "Learn how to use Aidbox's workflow engine to automate complex healthcare workflows and processes.",
    category: "FHIR",
    date: "Sep 1, 2025",
    readTime: "9 min",
    image: "/assets/images/blog/article-workflow.png",
  },
];

// Blog Navigation Header Component
function BlogNav(): string {
  return (
    <nav className="blog-nav">
      <div className="blog-nav-container">
        <div className="blog-nav-logos">
          <a href="/fhir-server" className="blog-nav-logo-link">
            <img
              src="/assets/images/blog/logo-aidbox-mini.svg"
              alt="Aidbox"
              className="blog-nav-logo-aidbox"
            />
          </a>
          <span className="blog-nav-divider">|</span>
          <a href="/blog" className="blog-nav-logo-link">
            <span className="blog-nav-blog-text">BLOG</span>
          </a>
        </div>
        <a href="#blog-subscribe" className="blog-nav-subscribe-btn">
          Subscribe
        </a>
      </div>
    </nav>
  );
}

// Topics Sidebar Component
function TopicsSidebar(): string {
  return (
    <aside className="blog-sidebar">
      <h4 className="blog-sidebar-heading">Topics</h4>
      <div className="blog-sidebar-links">
        {topics.map((topic) => (
          <a
            href={`/article-categories/${topic.slug}`}
            className="blog-sidebar-link"
          >
            {topic.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

// Featured Article Component
function FeaturedArticle({ article }: { article: Article }): string {
  return (
    <a href={`/articles/${article.slug}`} className="blog-featured-article">
      <div className="blog-featured-content">
        <div className="blog-featured-meta">
          <span className="blog-article-author">{article.author}</span>
          <span className="blog-article-readtime">{article.readTime} read</span>
        </div>
        <h2 className="blog-featured-title">{article.title}</h2>
        <p className="blog-featured-desc">{article.description}</p>
        <div className="blog-featured-footer">
          <span className="blog-article-category">{article.category}</span>
          <span className="blog-article-date">{article.date}</span>
        </div>
      </div>
      <div className="blog-featured-image">
        <img src={article.image} alt={article.title} />
      </div>
    </a>
  );
}

// Secondary Article Card Component
function SecondaryArticleCard({ article }: { article: Article }): string {
  return (
    <a href={`/articles/${article.slug}`} className="blog-secondary-article">
      <div className="blog-secondary-image">
        <img src={article.image} alt={article.title} />
      </div>
      <h3 className="blog-secondary-title">{article.title}</h3>
      <p className="blog-secondary-desc">{article.description}</p>
      <div className="blog-secondary-meta">
        {article.author && <span className="blog-article-author">{article.author}</span>}
        <span className="blog-article-readtime">{article.readTime}</span>
      </div>
    </a>
  );
}

// Article List Card Component
function ArticleCard({ article }: { article: Article }): string {
  return (
    <a href={`/articles/${article.slug}`} className="blog-article-card">
      <div className="blog-article-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="blog-article-content">
        <span className="blog-article-category">{article.category}</span>
        <h4 className="blog-article-title">{article.title}</h4>
        <p className="blog-article-desc">{article.description}</p>
        <div className="blog-article-meta">
          <span className="blog-article-date">{article.date}</span>
          {article.author && (
            <Fragment>
              <span className="blog-meta-separator">|</span>
              <span className="blog-article-author">{article.author}</span>
            </Fragment>
          )}
          <span className="blog-meta-separator">|</span>
          <span className="blog-article-readtime">{article.readTime}</span>
        </div>
      </div>
    </a>
  );
}

// Subscribe Section Component
function SubscribeSection(): string {
  return (
    <section className="blog-subscribe" id="blog-subscribe">
      <div className="blog-subscribe-container">
        <div className="blog-subscribe-content">
          <h3 className="blog-subscribe-title">
            Never miss a thing
            <br />
            <strong>Subscribe for more content!</strong>
          </h3>
          <form className="blog-subscribe-form" action="/api/subscribe" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="blog-subscribe-input"
            />
            <button type="submit" className="blog-subscribe-btn">
              Subscribe
            </button>
          </form>
          <p className="blog-subscribe-privacy">
            By clicking "Subscribe" you agree to Health Samurai{" "}
            <a href="/privacy-policy">Privacy Policy</a>
            {" "}and consent to Health Samurai using your contact data for newsletter purposes
          </p>
        </div>
        <div className="blog-subscribe-image">
          <img
            src="/assets/images/blog/subscribe-illustration.webp"
            alt="Subscribe to our newsletter"
          />
        </div>
      </div>
    </section>
  );
}

export default function BlogPage(): string {
  return (
    <Fragment>
      {/* Blog Navigation */}
      <BlogNav />

      {/* Main Content */}
      <div className="blog-content">
        <div className="blog-content-container">
          {/* Sidebar */}
          <TopicsSidebar />

          {/* Articles Column */}
          <div className="blog-articles">
            {/* Featured Section */}
            <div className="blog-featured-section">
              <FeaturedArticle article={featuredArticle} />
              <div className="blog-secondary-grid">
                {secondaryArticles.map((article) => (
                  <SecondaryArticleCard article={article} />
                ))}
              </div>
            </div>

            {/* Article List */}
            <div className="blog-article-list">
              {articles.map((article) => (
                <ArticleCard article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />
    </Fragment>
  );
}
