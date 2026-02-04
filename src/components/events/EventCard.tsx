import {
	formatEventDate,
	type Event,
	type EventSeries,
} from "../../data/events";
import { parseEventSpeakers, type Speaker } from "../../data/speakers";

function VideoBadge(): string {
	return (
		<span class="inline-flex items-center px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
			Video
		</span>
	);
}

function SpeakerAvatar({
	speaker,
	size = "md",
}: {
	speaker: Speaker;
	size?: "sm" | "md";
}): string {
	const sizeClass = size === "sm" ? "size-8" : "size-10";
	const textSize = size === "sm" ? "text-xs" : "text-sm";

	if (speaker.avatar) {
		return (
			<img
				src={speaker.avatar}
				alt={speaker.name}
				class={`${sizeClass} rounded-full object-cover ring-2 ring-white`}
			/>
		);
	}

	const initials = speaker.name
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

function SpeakerSection({
	speakers,
	type,
}: {
	speakers: Speaker[];
	type: string;
}): string {
	if (type === "none") {
		return (
			<div class="mt-auto pt-4 h-[52px]">
				{/* Empty placeholder to maintain consistent height */}
			</div>
		);
	}

	if (type === "single" && speakers[0]) {
		const speaker = speakers[0];
		return (
			<div class="mt-auto pt-4 flex items-center gap-x-3 h-[52px]">
				<SpeakerAvatar speaker={speaker} />
				<div class="min-w-0 flex-1">
					<p class="text-sm font-semibold text-gray-900 truncate">
						{speaker.name}
					</p>
					{speaker.role && (
						<p class="text-xs text-gray-500 truncate">{speaker.role}</p>
					)}
				</div>
			</div>
		);
	}

	if (type === "panel") {
		return (
			<div class="mt-auto pt-4 flex items-center gap-x-3 h-[52px]">
				<div class="size-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 shrink-0">
					<svg
						class="size-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
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

	// Multiple speakers
	if (speakers.length > 0) {
		return (
			<div class="mt-auto pt-4 flex items-center gap-x-3 h-[52px]">
				<div class="flex -space-x-2 shrink-0">
					{speakers.slice(0, 3).map((speaker) => (
						<SpeakerAvatar speaker={speaker} size="sm" />
					))}
				</div>
				<div>
					<p class="text-sm font-semibold text-gray-900">Several speakers</p>
					<p class="text-xs text-gray-500">{speakers.length} presenters</p>
				</div>
			</div>
		);
	}

	return <div class="mt-auto pt-4 h-[52px]">{/* Empty placeholder */}</div>;
}

type EventCardProps = {
	event: Event;
	series: EventSeries;
};

export function EventCard({ event, series }: EventCardProps): string {
	const dateStr = formatEventDate(event);
	const href = `/events/${series.id}/${event.id}`;
	const { type, speakers } = parseEventSpeakers(event);
	const description = event.description || event.content?.slice(0, 160) || "";
	const truncatedDesc =
		description.length > 140 ? description.slice(0, 140) + "..." : description;

	return (
		<a href={href} class="block group h-full">
			<article class="flex flex-col h-full p-5 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all">
				{/* Date and badge - fixed height */}
				<div class="flex items-center gap-x-2 text-xs h-5">
					{dateStr && (
						<time
							datetime={event.date || event.startDate}
							class="text-gray-500"
						>
							{dateStr}
						</time>
					)}
					{event.youtube && <VideoBadge />}
				</div>

				{/* Title - fixed 2 lines with ellipsis */}
				<div class="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600 leading-snug line-clamp-2 min-h-[3rem]">
					{event.name}
				</div>

				{/* Description - fixed 3 lines with ellipsis */}
				<p class="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
					{truncatedDesc || <span class="text-transparent">—</span>}
				</p>

				{/* Speaker section - auto margin top pushes to bottom, fixed height */}
				<SpeakerSection speakers={speakers} type={type} />
			</article>
		</a>
	);
}
