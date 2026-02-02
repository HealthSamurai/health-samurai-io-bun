import { Fragment } from "../lib/jsx-runtime";
import { getAllEvents, formatEventDate, type Event, type EventSeries } from "../data/events";

export const metadata = {
  title: "Events",
  description: "Conferences, webinars, and community calls from Health Samurai.",
};

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

function EventCard({ event, seriesId }: { event: Event; seriesId: string }): string {
  const dateStr = formatEventDate(event);
  const href = `/events/${seriesId}/${event.id}`;

  return (
    <a
      href={href}
      class="block bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {event.name}
            </h3>
            {event.youtube && <YouTubeBadge />}
          </div>
          {event.speaker && (
            <p class="mt-1.5 text-sm text-gray-600 truncate">
              {event.speaker}
              {event.role && <span class="text-gray-400"> · {event.role}</span>}
            </p>
          )}
          <div class="mt-2 flex items-center gap-3 text-xs text-gray-500">
            {dateStr && (
              <span class="flex items-center gap-1">
                <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                {dateStr}
              </span>
            )}
            {event.location && (
              <span class="flex items-center gap-1">
                <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {event.location}
              </span>
            )}
          </div>
        </div>
        <svg class="size-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </a>
  );
}

function EventSeriesSection({ series }: { series: EventSeries }): string {
  const featured = series.events.slice(0, 3);
  const hasMore = series.events.length > 3;

  return (
    <div class="mb-12">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900">
          <a href={`/events/${series.id}`} class="hover:text-primary transition-colors">
            {series.name}
          </a>
        </h2>
        <span class="text-sm text-gray-500">{series.events.length} talks</span>
      </div>
      {series.description && (
        <p class="text-gray-600 text-sm mb-4">{series.description}</p>
      )}
      <div class="space-y-3">
        {featured.map(event => (
          <EventCard event={event} seriesId={series.id} />
        ))}
      </div>
      {hasMore && (
        <a
          href={`/events/${series.id}`}
          class="mt-4 inline-flex text-sm font-medium text-primary hover:text-primary-dark items-center gap-1"
        >
          Show all {series.events.length} talks
          <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default async function EventsPage(): Promise<string> {
  const allSeries = await getAllEvents();

  return (
    <Fragment>
      <div class="bg-gray-50 py-16 sm:py-24">
        <div class="mx-auto max-w-3xl px-6 lg:px-8">
          <div class="mb-10">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Events
            </h1>
            <p class="mt-3 text-base text-gray-600">
              Conferences, webinars, and community calls.
            </p>
          </div>

          {allSeries.length === 0 ? (
            <p class="text-gray-500">No events scheduled yet.</p>
          ) : (
            allSeries.map(series => (
              <EventSeriesSection series={series} />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}
