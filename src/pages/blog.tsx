import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Blog",
};

export default function BlogPage(): string {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 style="text-align: center;">The Health Samurai Blog</h1>
          <p style="text-align: center; color: var(--color-text-light); margin-bottom: var(--space-12);">
            Insights on FHIR, healthcare interoperability, and building health tech
          </p>
          <div className="card" style="text-align: center; padding: var(--space-12);">
            <p className="text-muted">Blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
