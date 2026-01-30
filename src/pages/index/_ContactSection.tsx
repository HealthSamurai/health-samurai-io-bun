// Contact section for home page

import { ContactSection as BaseContactSection } from "../../components/ContactForm";

export function ContactSection(): string {
  return BaseContactSection({
    componentName: "pages/index/ContactSection",
    pageUrl: "https://www.health-samurai.io/",
  });
}
