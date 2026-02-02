import { Fragment } from "../../lib/jsx-runtime";
import { getSeriesById, formatEventDate, type Event, type EventSeries } from "../../data/events";

export const metadata = {
  title: "Event",
  description: "Health Samurai event",
};

export async function getMetadata(params: { slug: string }) {
  const series = await getSeriesById(params.slug);
  if (!series) {
    return { title: "Event Not Found", description: "" };
  }
  return {
    title: series.name,
    description: series.description || `${series.events.length} talks`,
  };
}

function NotFound(): string {
  return (
    <div class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Event not found</h1>
        <p class="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
        <a href="/events" class="text-primary hover:text-primary-dark font-medium">
          ← Back to events
        </a>
      </div>
    </div>
  );
}

function YouTubeBadge(): string {
  return (
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
      <svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
      Video
    </span>
  );
}

function TalkCard({ talk, seriesId }: { talk: Event; seriesId: string }): string {
  const dateStr = formatEventDate(talk);

  return (
    <a
      href={`/events/${seriesId}/${talk.id}`}
      class="block bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {talk.name}
            </h3>
            {talk.youtube && <YouTubeBadge />}
          </div>
          {talk.speaker && (
            <p class="mt-1.5 text-sm text-gray-600 truncate">
              {talk.speaker}
              {talk.role && <span class="text-gray-400"> · {talk.role}</span>}
            </p>
          )}
          {dateStr && (
            <div class="mt-2 flex items-center gap-1 text-xs text-gray-500">
              <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {dateStr}
            </div>
          )}
        </div>
        <svg class="size-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </a>
  );
}

interface EventPageParams {
  slug: string;
}

export default async function EventSeriesPage(params: EventPageParams): Promise<string> {
  const { slug } = params;
  const series = await getSeriesById(slug);

  if (!series) {
    return NotFound();
  }

  return (
    <Fragment>
      <div class="bg-gray-50 min-h-screen">
        {/* Header */}
        <header class="bg-white border-b border-gray-200">
          <div class="mx-auto max-w-3xl px-6 lg:px-8 py-12">
            {/* Back link */}
            <a href="/events" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              All events
            </a>

            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {series.name}
            </h1>
            {series.description && (
              <p class="mt-3 text-base text-gray-600">{series.description}</p>
            )}
            <p class="mt-3 text-sm text-gray-500">{series.events.length} talks</p>
          </div>
        </header>

        {/* Talks list */}
        <div class="mx-auto max-w-3xl px-6 lg:px-8 py-10">
          <div class="space-y-3">
            {series.events.map(talk => (
              <TalkCard talk={talk} seriesId={series.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
