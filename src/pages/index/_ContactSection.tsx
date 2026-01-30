// Contact section for home page

import { ContactSection as BaseContactSection } from "../../components/ContactForm";

export function ContactSection(): string {
  return BaseContactSection({
    pageUrl: "https://www.health-samurai.io/",
  });
}
