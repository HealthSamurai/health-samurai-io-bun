import { caseStudies } from "../../data/clients";

export function CaseStudies(): string {
  return (
    <section className="mb-12">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="mb-8">
          <h2 className="text-[48px] leading-[60px] font-black text-[rgb(53,59,80)]">Our stories</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <a
              href={`/case-study/${study.slug}`}
              className="flex flex-col rounded-lg border border-[#f2f2f2] bg-[#fafafa] p-10 text-[#333333] transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6">
                <img src={study.logo} alt={`${study.company} logo`} className="h-10 w-auto" />
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold mb-3">{study.company}</h3>
                <p className="text-[14px] leading-[22px] text-[#666666] mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span className="rounded bg-[#f7f7f7] px-2 py-1 text-[12px] text-[#666666]">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
