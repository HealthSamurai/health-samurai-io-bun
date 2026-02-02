import { Fragment } from "../lib/jsx-runtime";
import { getAllEvents, formatEventDate, type Event, type EventSeries } from "../data/events";

export const metadata = {
  title: "Events",
  description: "Conferences, webinars, and community calls from Health Samurai.",
};

function EventCard({ event, seriesId }: { event: Event; seriesId: string }): string {
  const dateStr = formatEventDate(event);

  return (
    <div class="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900">
            <a href={`/events/${seriesId}/${event.id}`} class="hover:text-primary transition-colors">
              {event.name}
            </a>
          </h3>
          {event.speaker && (
            <p class="mt-1 text-sm text-gray-700">
              {event.speaker}
              {event.role && <span class="text-gray-500"> · {event.role}</span>}
            </p>
          )}
          {dateStr && (
            <p class="mt-1 text-sm text-gray-500">
              {dateStr}
              {event.time && ` · ${event.time}`}
            </p>
          )}
          {event.location && (
            <p class="mt-1 text-sm text-gray-500 flex items-center gap-1">
              <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {event.location}
            </p>
          )}
        </div>
        {event.youtube && (
          <a
            href={event.youtube}
            target="_blank"
            rel="noopener noreferrer"
            class="flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition-colors"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch
          </a>
        )}
      </div>
    </div>
  );
}

function EventSeriesSection({ series }: { series: EventSeries }): string {
  const featured = series.events.slice(0, 3);
  const hasMore = series.events.length > 3;
  const signalId = `show_${series.id.replace(/-/g, '_')}`;

  return (
    <div class="mb-12" data-signals={`{${signalId}: false}`}>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">
        <a href={`/events/${series.id}`} class="hover:text-primary transition-colors">
          {series.name}
        </a>
      </h2>
      {series.description && (
        <p class="text-gray-600 mb-6">{series.description}</p>
      )}
      <div class="space-y-4">
        {featured.map(event => (
          <EventCard event={event} seriesId={series.id} />
        ))}
      </div>
      {hasMore && (
        <div>
          <div data-show={`$${signalId}`} style="display: none" class="space-y-4 mt-4">
            {series.events.slice(3).map(event => (
              <EventCard event={event} seriesId={series.id} />
            ))}
          </div>
          <button
            data-on:click={`$${signalId} = !$${signalId}`}
            class="mt-6 text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1"
          >
            <span data-show={`!$${signalId}`}>Show all {series.events.length} talks</span>
            <span data-show={`$${signalId}`} style="display: none">Show less</span>
            <svg data-class={`{'rotate-180': $${signalId}}`} class="size-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default async function EventsPage(): Promise<string> {
  const allSeries = await getAllEvents();

  return (
    <Fragment>
      <div class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-4xl px-6 lg:px-8">
          <div class="mb-12">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Events
            </h1>
            <p class="mt-4 text-lg text-gray-600">
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
