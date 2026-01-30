// Trusted by section with animated client logos

import { TrustedBySection, healthSamuraiClients } from "../../components/LogoMarquee";

export function TrustedSection(): string {
  return TrustedBySection({
    componentName: "pages/index/TrustedSection",
    logos: healthSamuraiClients,
    speed: "normal",
    direction: "left",
    pauseOnHover: true,
    showTitle: false,
    sectionClassName: "bg-white",
  });
}
