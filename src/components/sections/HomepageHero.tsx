import { Button } from "../ui/Button";

export function HomepageHero(): string {
  return (
    <section className="bg-white pt-10 pb-[60px]">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-0">
        {/* Hero Header */}
        <h1 className="mx-auto mt-[48px] mb-[40px] min-h-[180px] max-w-[870px] text-[64px] leading-[80px] font-black text-[#333333] tracking-[-1.12px] max-[1024px]:mt-6 max-[1024px]:mb-6 max-[1024px]:min-h-0 max-[1024px]:text-[42px] max-[1024px]:leading-[52px] max-[640px]:text-[32px] max-[640px]:leading-[40px]">
          Let's implement your ideas on <span className="text-primary">FHIR</span>
        </h1>

        {/* Hero Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[494px_494px] md:items-start md:gap-x-0 md:px-[56px] md:pt-[60px] md:pb-[42px]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[17px] leading-[21px] text-[rgb(53,59,80)]">
              <span className="text-primary font-bold">&gt;_</span> Hello, Aidbox
            </div>
            <h2 className="mt-[32px] mb-[10px] text-[48px] leading-[54px] font-black text-[#333333]">FHIR Platform</h2>
            <p className="max-w-[460px] text-[16px] leading-[28px] text-[#333333] mb-[30px]">
              Full-blown FHIR server that drastically reduces time and effort for
              your Health IT solution development. Build healthcare solutions from
              CDRs to EHRs using FHIR, PostgreSQL, and our SDK.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contacts" variant="primary">BOOK A DEMO</Button>
              <Button href="/fhir-server" variant="link">read more &gt;</Button>
            </div>
          </div>
          <div className="flex justify-start md:justify-end">
            <img src="/assets/images/logos/aidbox.svg" alt="Aidbox logo" className="h-[130px] w-[360px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
