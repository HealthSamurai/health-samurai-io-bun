import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Aidbox Forms",
  description: "Design, customize, and deploy no-code clinical forms with FHIR support and mobile-friendly UI",
};

export default function MedicalFormPage(): string {
  return (
    <Fragment>
      <section className="hero" style="padding: var(--space-12) 0;">
        <div className="container">
          <h1 style="text-align: center;">Aidbox Forms</h1>
          <p style="text-align: center; color: var(--color-text-light);">
            Design, customize, and deploy no-code clinical forms with FHIR support
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style="text-align: center; padding: var(--space-12);">
            <p className="text-muted">Medical forms content coming soon...</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
