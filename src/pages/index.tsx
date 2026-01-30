// Home page - composed from section components

import { Fragment } from "../lib/jsx-runtime";
import { HeroSection } from "./index/_HeroSection";
import { ServicesSection } from "./index/_ServicesSection";
import { MissionSection } from "./index/_MissionSection";
import { StoriesSection } from "./index/_StoriesSection";
import { TrustedSection } from "./index/_TrustedSection";
import { ContributionsSection } from "./index/_ContributionsSection";
import { BlogHeader } from "./index/_BlogHeader";
import { SubscribeSection } from "./index/_SubscribeSection";
import { ContactSection } from "./index/_ContactSection";

export const metadata = {
  title: "Health Samurai: FHIR solutions | FHIR integration software",
  description:
    "At Health Samurai, we aim to transform care delivery with exceptional FHIR software. FHIR solutions for your HealthCare projects.",
};

export default function IndexPage(): string {
  return (
    <Fragment>
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <StoriesSection />
      <TrustedSection />
      <ContributionsSection />
      <BlogHeader />
      <SubscribeSection />
      <ContactSection />
    </Fragment>
  );
}
