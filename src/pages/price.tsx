import { Fragment } from "../lib/jsx-runtime";

export function PricePage(): string {
  return (
    <Fragment>
      <section className="hero" style="padding: var(--space-12) 0;">
        <div className="container">
          <h1 style="text-align: center;">Pricing</h1>
          <p style="text-align: center; color: var(--color-text-light);">
            Choose the plan that fits your needs
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style="text-align: center; padding: var(--space-12);">
            <p className="text-muted">Pricing plans coming soon...</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
