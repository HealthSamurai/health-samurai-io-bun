import { Fragment } from "../lib/jsx-runtime";
import { CaseStudies } from "../components/sections/CaseStudies";

export const metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage(): string {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 style="text-align: center; margin-bottom: var(--space-12);">Case Studies</h1>
        </div>
      </section>
      <CaseStudies />
    </Fragment>
  );
}
