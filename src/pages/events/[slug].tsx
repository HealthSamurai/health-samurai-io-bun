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

function TalkCard({ talk, seriesId }: { talk: Event; seriesId: string }): string {
  return (
    <a
      href={`/events/${seriesId}/${talk.id}`}
      class="block bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-primary/20 transition-all"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary">
            {talk.name}
          </h3>
          {talk.speaker && (
            <p class="mt-1 text-sm text-gray-700">
              {talk.speaker}
              {talk.role && <span class="text-gray-500"> · {talk.role}</span>}
            </p>
          )}
        </div>
        {talk.youtube && (
          <span class="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded bg-red-50 text-red-600 text-xs font-medium">
            <svg class="size-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Video
          </span>
        )}
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
          <div class="mx-auto max-w-4xl px-6 lg:px-8 py-16">
            {/* Back link */}
            <a href="/events" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              All events
            </a>

            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {series.name}
            </h1>
            {series.description && (
              <p class="mt-4 text-lg text-gray-600">{series.description}</p>
            )}
            <p class="mt-4 text-sm text-gray-500">{series.events.length} talks</p>
          </div>
        </header>

        {/* Talks list */}
        <div class="mx-auto max-w-4xl px-6 lg:px-8 py-12">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Talks</h2>
          <div class="space-y-4">
            {series.events.map(talk => (
              <TalkCard talk={talk} seriesId={series.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
