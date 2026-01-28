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
    <footer className="footer">
      <div className="footer-inner">
        {/* Certification badges at top */}
        <div className="footer-certifications">
          <img src="/assets/images/certifications/hipaa.png" alt="HIPAA Compliant" />
          <img src="/assets/images/certifications/iso-27001.svg" alt="ISO 27001:2022 Certified" />
        </div>

        {/* Main columns */}
        <div className="footer-columns">
          {/* Column 1: Company */}
          <div className="footer-column">
            <a href="/" className="footer-brand-link">Health Samurai</a>
            {footerLinks.company.map((link) => (
              <a href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            {footerLinks.products.map((link) => (
              <a href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            {footerLinks.legal.map((link) => (
              <a href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column footer-contact">
            <div className="footer-contact-item">
              1891 N Gaffey St Ste O,<br />
              San Pedro, CA 90731
            </div>
            <div className="footer-contact-item">
              +1 (818) 731-1279
            </div>
            <div className="footer-contact-item">
              hello@health-samurai.io
            </div>
          </div>
        </div>

        {/* Footer watermark logo */}
        <div className="footer-bottom">
          <img src="/assets/images/logos/health-samurai-footer.svg" alt="Health Samurai" className="footer-watermark" />
          {version && (
            <div className="footer-version">
              {version.branch && `${version.branch}/`}{version.commit} · {new Date(version.date).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
