import { footerLinks } from "../data/navigation";

type VersionInfo = { commit: string; date: string; branch?: string } | null;

function getVersion(): VersionInfo {
  try {
    const file = Bun.file(".version.json");
    if (file.size > 0) {
      // Sync read for simplicity in JSX
      const text = require("fs").readFileSync(".version.json", "utf-8");
      return JSON.parse(text);
    }
  } catch {
    // No version file - running locally
  }
  return null;
}

export function Footer(): string {
  const version = getVersion();
  return (
    <footer className="bg-[#f4f8fb] px-8 pb-5 text-[rgb(53,59,80)]">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] lg:gap-12">
          <div className="flex flex-col gap-3">
            <a href="/" className="inline-block text-[15px] font-medium text-[#4a4a4a] border-b-2 border-primary pb-0.5">Health Samurai</a>
            {footerLinks.company.map((link) => (
              <a href={link.href} className="text-[15px] text-[#4a4a4a] hover:text-primary hover:underline">{link.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {footerLinks.products.map((link) => (
              <a href={link.href} className="text-[15px] text-[#4a4a4a] hover:text-primary hover:underline">{link.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {footerLinks.legal.map((link) => (
              <a href={link.href} className="text-[15px] text-[#4a4a4a] hover:text-primary hover:underline">{link.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-right text-[16px] text-[#333333] md:text-left lg:text-right">
            <div>
              1891 N Gaffey St Ste O,<br />
              San Pedro, CA 90731
            </div>
            <div>+1 (818) 731-1279</div>
            <div>hello@health-samurai.io</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <img src="/assets/images/logos/health-samurai-footer.svg" alt="Health Samurai" className="h-24 w-auto opacity-15" />
          {version && (
            <div className="text-[12px] text-[#6b7280] font-mono">
              {version.branch && `${version.branch}/`}{version.commit} · {new Date(version.date).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
