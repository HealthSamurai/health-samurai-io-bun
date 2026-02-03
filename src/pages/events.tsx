import { Fragment } from "../lib/jsx-runtime";
import {
	getAllEvents,
	formatEventDate,
	type Event,
	type EventSeries,
} from "../data/events";
import { getSpeakerAvatar } from "../data/speakers";

export const metadata = {
	title: "Events",
	description:
		"Conferences, webinars, and community calls from Health Samurai.",
};

function VideoBadge(): string {
	return (
		<span class="inline-flex items-center px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
			Video
		</span>
	);
}

function SpeakerAvatar({
	name,
	size = "md",
}: {
	name: string;
	size?: "sm" | "md";
}): string {
	const avatarUrl = getSpeakerAvatar(name.trim());
	const sizeClass = size === "sm" ? "size-8" : "size-10";
	const textSize = size === "sm" ? "text-xs" : "text-sm";

	if (avatarUrl) {
		return (
			<img
				src={avatarUrl}
				alt={name}
				class={`${sizeClass} rounded-full object-cover ring-2 ring-white`}
			/>
		);
	}

	const initials = name
		.trim()
		.split(" ")
		.map((n) => n[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

	return (
		<div
			class={`${sizeClass} rounded-full bg-gray-200 flex items-center justify-center ${textSize} font-medium text-gray-600 ring-2 ring-white`}
		>
			{initials}
		</div>
	);
}

function StackedAvatars({ names }: { names: string[] }): string {
	const displayNames = names.slice(0, 3);

	return (
		<div class="flex -space-x-2">
			{displayNames.map((name) => (
				<SpeakerAvatar name={name} size="sm" />
			))}
		</div>
	);
}

type SpeakerType = "single" | "multiple" | "panel" | "none";

function isPanel(speaker?: string): boolean {
	if (!speaker) return false;
	const lower = speaker.toLowerCase();
	return (
		lower.includes("panel") ||
		lower.includes("roundtable") ||
		lower.includes("discussion")
	);
}

function parseSpeakers(speaker?: string): {
	type: SpeakerType;
	names: string[];
} {
	if (!speaker) {
		return { type: "none", names: [] };
	}

	// Check if it's a panel discussion
	if (isPanel(speaker)) {
		return { type: "panel", names: [] };
	}

	const names = speaker
		.split(",")
		.map((s) => s.trim())
		.filter(Boolean);

	if (names.length === 0) {
		return { type: "none", names: [] };
	}

	if (names.length === 1) {
		return { type: "single", names };
	}

	return { type: "multiple", names };
}

function getSeriesSpeakers(series: EventSeries): string[] {
	const speakerSet = new Set<string>();

	for (const event of series.events) {
		if (event.speaker && !isPanel(event.speaker)) {
			const names = event.speaker
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean);
			names.forEach((name) => speakerSet.add(name));
		}
	}

	return Array.from(speakerSet);
}

function SpeakerSection({
	event,
	series,
}: {
	event: Event;
	series: EventSeries;
}): string {
	const { type, names } = parseSpeakers(event.speaker);

	if (type === "none") {
		return "";
	}

	if (type === "single") {
		return (
			<div class="mt-4 flex items-center gap-x-3">
				<SpeakerAvatar name={names[0]} />
				<div>
					<p class="text-sm font-semibold text-gray-900">{names[0]}</p>
					{event.role && <p class="text-xs text-gray-500">{event.role}</p>}
				</div>
			</div>
		);
	}

	if (type === "panel") {
		// For panel discussions, show speakers from the series
		const seriesSpeakers = getSeriesSpeakers(series);
		if (seriesSpeakers.length === 0) {
			return (
				<div class="mt-4 flex items-center gap-x-3">
					<div class="size-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
						<svg
							class="size-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-900">Panel Discussion</p>
					</div>
				</div>
			);
		}
		return (
			<div class="mt-4 flex items-center gap-x-3">
				<StackedAvatars names={seriesSpeakers} />
				<div>
					<p class="text-sm font-semibold text-gray-900">Several speakers</p>
					<p class="text-xs text-gray-500">
						{seriesSpeakers.length} presenters
					</p>
				</div>
			</div>
		);
	}

	// Multiple speakers
	return (
		<div class="mt-4 flex items-center gap-x-3">
			<StackedAvatars names={names} />
			<div>
				<p class="text-sm font-semibold text-gray-900">Several speakers</p>
				<p class="text-xs text-gray-500">{names.length} presenters</p>
			</div>
		</div>
	);
}

function EventCard({
	event,
	series,
}: {
	event: Event;
	series: EventSeries;
}): string {
	const dateStr = formatEventDate(event);
	const href = `/events/${series.id}/${event.id}`;
	const description = event.description || event.content?.slice(0, 160) || "";
	const truncatedDesc =
		description.length > 140 ? description.slice(0, 140) + "..." : description;

	return (
		<a href={href} class="block group">
			<article class="flex flex-col h-full p-5 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
				{/* Date and badge */}
				<div class="flex items-center gap-x-2 text-xs">
					<time datetime={event.date || event.startDate} class="text-gray-500">
						{dateStr}
					</time>
					{event.youtube && <VideoBadge />}
				</div>

				{/* Title */}
				<h3 class="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600 leading-snug">
					{event.name}
				</h3>

				{/* Description */}
				{truncatedDesc && (
					<p class="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
						{truncatedDesc}
					</p>
				)}

				{/* Speaker section - varies by type */}
				<SpeakerSection event={event} series={series} />
			</article>
		</a>
	);
}

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
