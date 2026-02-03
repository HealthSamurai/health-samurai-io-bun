import { Fragment } from "../../lib/jsx-runtime";
import { getSeriesById } from "../../data/events";
import { preloadSpeakers } from "../../data/speakers";
import { EventCard } from "../../components/events/EventCard";

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

interface EventPageParams {
  slug: string;
}

export default async function EventSeriesPage(params: EventPageParams): Promise<string> {
  const { slug } = params;
  // Preload speakers for name resolution
  await preloadSpeakers();
  const series = await getSeriesById(slug);

  if (!series) {
    return NotFound();
  }

  return (
    <Fragment>
      <div class="bg-gray-50 min-h-screen">
        {/* Header */}
        <header class="bg-white border-b border-gray-200">
          <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
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
              <p class="mt-3 text-base text-gray-600 max-w-2xl">{series.description}</p>
            )}
            <p class="mt-3 text-sm text-gray-500">{series.events.length} talks</p>
          </div>
        </header>

        {/* Talks grid */}
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {series.events.map(event => (
              <EventCard event={event} series={series} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
