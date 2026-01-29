export function TrustBadges(): string {
  return (
    <section className="my-[60px]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-center gap-12 px-8 max-sm:flex-col max-sm:gap-6">
        <a href="/compliance" className="block opacity-80 transition-opacity duration-150 hover:opacity-100">
          <img src="/assets/images/badges/hipaa-badge.svg" alt="HIPAA Compliant" className="h-16 w-auto" />
        </a>
        <a
          href="https://www.schellman.com/certificate-directory?certificateNumber=1690785-1"
          className="block opacity-80 transition-opacity duration-150 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/badges/iso-27001-badge.svg" alt="ISO 27001:2022 Certified" className="h-16 w-auto" />
        </a>
      </div>
    </section>
  );
}
