import { Fragment } from "../../lib/jsx-runtime";

type Speaker = {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
};

type SpeakersGridProps = {
  speakers: Speaker[];
  title?: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function SpeakerCard({ speaker }: { speaker: Speaker }): string {
  const initials = getInitials(speaker.name);

  return (
    <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      {speaker.avatar ? (
        <img
          src={speaker.avatar}
          alt={speaker.name}
          class="w-14 h-14 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
          {initials}
        </div>
      )}
      <div class="min-w-0">
        <h3 class="font-semibold text-gray-900 truncate">{speaker.name}</h3>
        {(speaker.role || speaker.company) && (
          <p class="text-sm text-gray-600 truncate">
            {speaker.role}
            {speaker.role && speaker.company && " · "}
            {speaker.company}
          </p>
        )}
      </div>
    </div>
  );
}

export function SpeakersGrid({ speakers, title = "Speakers" }: SpeakersGridProps): string {
  if (!speakers || speakers.length === 0) return "";

  return (
    <section class="py-12 px-6 bg-gray-50">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg class="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
          {title}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map(speaker => SpeakerCard({ speaker }))}
        </div>
      </div>
    </section>
  );
}
