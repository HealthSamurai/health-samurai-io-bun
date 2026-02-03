import { Fragment } from "../../../lib/jsx-runtime";
import { getSeriesById, formatEventDate, type Event, type EventSeries } from "../../../data/events";
import { renderMarkdown } from "../../../lib/markdown";
import { preloadSpeakers, parseEventSpeakers } from "../../../data/speakers";
import { EventHero } from "../../../components/events/EventHero";
import { AboutSection } from "../../../components/events/AboutSection";
import { AgendaSection } from "../../../components/events/AgendaSection";
import { SpeakersGrid } from "../../../components/events/SpeakersGrid";
import { BenefitsSection } from "../../../components/events/BenefitsSection";
import { VenueSection } from "../../../components/events/VenueSection";
import { PricingSection } from "../../../components/events/PricingSection";
import { InfoSection } from "../../../components/events/InfoSection";
import { RecapSection } from "../../../components/events/RecapSection";

export const metadata = {
  title: "Talk",
  description: "Health Samurai event talk",
};

export async function getMetadata(params: { slug: string; talk: string }) {
  const series = await getSeriesById(params.slug);
  if (!series) {
    return { title: "Talk Not Found", description: "" };
  }
  const talk = series.events.find(e => e.id === params.talk);
  if (!talk) {
    return { title: "Talk Not Found", description: "" };
  }
  return {
    title: `${talk.name} | ${series.name}`,
    description: talk.speaker ? `${talk.speaker} - ${series.name}` : series.name,
  };
}

function NotFound({ seriesId }: { seriesId?: string }): string {
  return (
    <div class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Talk not found</h1>
        <p class="text-gray-600 mb-8">The talk you're looking for doesn't exist.</p>
        <a href={seriesId ? `/events/${seriesId}` : "/events"} class="text-primary hover:text-primary-dark font-medium">
          ← Back to event
        </a>
      </div>
    </div>
  );
}

function YoutubeEmbed({ url }: { url: string }): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  if (!match) return "";
  const videoId = match[1];

  return (
    <div class="aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
  );
}

function RichEventPage({ talk, series }: { talk: Event; series: EventSeries }): string {
  const contentHtml = talk.content ? renderMarkdown(talk.content) : "";

  return (
    <Fragment>
      <article class="bg-gray-50">
        {/* Hero */}
        {EventHero({
          name: talk.name,
          startDate: talk.startDate,
          endDate: talk.endDate,
          location: talk.location,
          description: talk.description,
          backLink: `/events/${series.id}`,
          backLabel: series.name,
        })}

        {/* About Section */}
        {talk.about && AboutSection({
          title: talk.about.title,
          content: talk.about.content,
          image: talk.about.image,
          linkText: talk.about.linkText,
          linkUrl: talk.about.linkUrl,
        })}

        {/* Speakers */}
        {talk.speakers && talk.speakers.length > 0 && SpeakersGrid({
          speakers: talk.speakers,
          title: talk.speakersTitle || "Speakers",
          description: talk.speakersDescription,
        })}

        {/* Agenda */}
        {talk.agenda && talk.agenda.length > 0 && AgendaSection({
          topics: talk.agenda,
          title: "Preliminary Agenda",
        })}

        {/* Benefits */}
        {talk.benefits && talk.benefits.length > 0 && BenefitsSection({
          title: "Why attend HL7 FHIR® Camp?",
          benefits: talk.benefits,
        })}

        {/* Registration/Pricing */}
        {talk.pricing && talk.pricing.length > 0 && PricingSection({
          pricing: talk.pricing,
          title: "Registration",
          contact: talk.contact,
        })}

        {/* Location/Venue */}
        {talk.venue && VenueSection({ venue: talk.venue })}

        {/* Info Section */}
        {talk.info && InfoSection({
          title: talk.info.title,
          items: talk.info.items,
          note: talk.info.note,
        })}

        {/* Recap Section */}
        {talk.recap && RecapSection({
          title: talk.recap.title,
          description: talk.recap.description,
          images: talk.recap.images,
          link: talk.recap.link,
          linkText: talk.recap.linkText,
        })}

        {/* Additional content from markdown */}
        {contentHtml && (
          <div class="py-12 px-6 bg-white">
            <div
              class="prose prose-lg mx-auto max-w-4xl
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-ul:my-4 prose-li:my-1
                prose-ol:my-4"
            >
              {contentHtml}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div class="py-8 px-6 bg-gray-100 text-center">
          <p class="text-sm text-gray-500 max-w-3xl mx-auto">
            * The FHIR® trademark is used with HL7 International's permission. This is not an event provided or approved by HL7 International.
          </p>
        </div>
      </article>
    </Fragment>
  );
}

interface TalkPageParams {
  slug: string;
  talk: string;
}

function isRichEvent(event: Event): boolean {
  return event.type === "conference" ||
    !!(event.agenda && event.agenda.length > 0) ||
    !!(event.speakers && event.speakers.length > 0) ||
    !!event.venue ||
    !!(event.pricing && event.pricing.length > 0);
}

export default async function TalkPage(params: TalkPageParams): Promise<string> {
  const { slug, talk: talkId } = params;
  // Preload speakers for name resolution
  await preloadSpeakers();
  const series = await getSeriesById(slug);

  if (!series) {
    return NotFound({});
  }

  const talk = series.events.find(e => e.id === talkId);

  if (!talk) {
    return NotFound({ seriesId: slug });
  }

  // Check if this is a rich event (conference with agenda, speakers, etc.)
  if (isRichEvent(talk)) {
    return RichEventPage({ talk, series });
  }

  const dateStr = formatEventDate(talk);
  const contentHtml = talk.content ? renderMarkdown(talk.content) : "";
  const { type: speakerType, speakers } = parseEventSpeakers(talk);

  return (
    <Fragment>
      <article class="bg-white">
        {/* Header */}
        <header class="pt-16 pb-8 px-6">
          <div class="mx-auto max-w-3xl">
            {/* Back link */}
            <a href={`/events/${slug}`} class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              {series.name}
            </a>

            {/* Title */}
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {talk.name}
            </h1>

            {/* Speakers */}
            {speakers.length > 0 && (
              <div class="mt-6 flex flex-wrap gap-4">
                {speakers.map((speaker) => (
                  <div class="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
                    {speaker.avatar ? (
                      <img src={speaker.avatar} alt={speaker.name} class="size-10 rounded-full object-cover" />
                    ) : (
                      <div class="size-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                        {speaker.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div class="font-medium text-gray-900">{speaker.name}</div>
                      {speaker.role && <div class="text-sm text-gray-500">{speaker.role}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {speakerType === "panel" && (
              <p class="mt-6 text-gray-500 italic">Panel Discussion</p>
            )}

            {/* Date */}
            {dateStr && (
              <div class="mt-4 flex items-center gap-2 text-gray-600">
                <svg class="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span>{dateStr}</span>
              </div>
            )}
          </div>
        </header>

        {/* YouTube Video */}
        {talk.youtube && (
          <div class="px-6 pb-8">
            <div class="mx-auto max-w-3xl">
              {YoutubeEmbed({ url: talk.youtube })}
            </div>
          </div>
        )}

        {/* Content */}
        {contentHtml && (
          <div class="px-6 pb-12">
            <div
              class="prose prose-lg mx-auto max-w-3xl
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-ul:my-4 prose-li:my-1
                prose-ol:my-4"
            >
              {contentHtml}
            </div>
          </div>
        )}

      </article>
    </Fragment>
  );
}
