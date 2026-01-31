import { Fragment } from "../lib/jsx-runtime";
import { Hero } from "../components/Hero";
import { Subscribe } from "../components/Subscribe";

export const metadata = {
  title: "Events",
  description: "Join Health Samurai at conferences, webinars, and meetups about FHIR and healthcare interoperability.",
};

export default function EventsPage(): string {
  return (
    <Fragment>
      <Hero
        title="Events"
        description="Join us at conferences, webinars, and meetups about FHIR and healthcare interoperability."
        primaryCta={{ label: "Upcoming Events", href: "#upcoming" }}
        secondaryCta={{ label: "Past Recordings", href: "#past" }}
      />

      <section id="upcoming" class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Meet us at these upcoming conferences and webinars.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl">
            <p class="text-center text-gray-500">No upcoming events scheduled. Check back soon!</p>
          </div>
        </div>
      </section>

      <section id="past" class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Past Events</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Watch recordings from our previous webinars and conference talks.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl">
            <p class="text-center text-gray-500">Past event recordings coming soon.</p>
          </div>
        </div>
      </section>

      <Subscribe
        title="Never miss an event"
        description="Get notified about upcoming webinars, conferences, and FHIR meetups. Read our"
        buttonText="Subscribe"
      />
    </Fragment>
  );
}
