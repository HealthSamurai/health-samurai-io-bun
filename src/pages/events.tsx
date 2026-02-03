import { Fragment } from "../lib/jsx-runtime";
import { getAllEvents, type Event, type EventSeries } from "../data/events";
import { preloadSpeakers } from "../data/speakers";
import { EventCard } from "../components/events/EventCard";

export const metadata = {
	title: "Events",
	description:
		"Conferences, webinars, and community calls from Health Samurai.",
};

function getFeaturedEvents(series: EventSeries, limit: number = 3): Event[] {
	// First, get explicitly featured events
	const featured = series.events.filter((e) => e.featured === true);

	if (featured.length >= limit) {
		return featured.slice(0, limit);
	}

	// Fill remaining slots with non-featured events
	const nonFeatured = series.events.filter((e) => e.featured !== true);
	return [...featured, ...nonFeatured].slice(0, limit);
}

function EventSeriesSection({ series }: { series: EventSeries }): string {
	const featured = getFeaturedEvents(series, 3);
	const totalCount = series.events.length;

	return (
		<div class="mt-16 first:mt-0">
			{/* Category header */}
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">
				{series.name}
			</h2>
			{series.description && (
				<p class="mt-2 text-base text-gray-600">{series.description}</p>
			)}

			{/* Events grid */}
			<div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
				{featured.map((event) => (
					<EventCard event={event} series={series} />
				))}
			</div>

			{/* Show all button */}
			{totalCount > 3 && (
				<div class="mt-8 flex justify-center">
					<a
						href={`/events/${series.id}`}
						class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-primary bg-white border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md"
					>
						Show all {totalCount} talks
						<svg
							class="size-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</a>
				</div>
			)}
		</div>
	);
}

export default async function EventsPage(): Promise<string> {
	// Preload speakers for avatar lookup
	await preloadSpeakers();
	const allSeries = await getAllEvents();

	return (
		<Fragment>
			<div class="bg-white py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					{/* Page header */}
					<div class="mx-auto max-w-3xl text-center mb-24">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Events
						</h1>
						<p class="mt-4 text-lg text-gray-600">
							Conferences, webinars, and community calls from Health Samurai.
						</p>
					</div>

					{/* Event series */}
					<div class="mx-auto max-w-2xl lg:max-w-none">
						{allSeries.length === 0 ? (
							<p class="mt-10 text-gray-500">No events scheduled yet.</p>
						) : (
							allSeries.map((series) => <EventSeriesSection series={series} />)
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
