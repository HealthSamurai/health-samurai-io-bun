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
  description?: string;
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
    <div class="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      {speaker.avatar ? (
        <img
          src={speaker.avatar}
          alt={speaker.name}
          class="w-24 h-24 rounded-full object-cover mb-3"
        />
      ) : (
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold text-2xl mb-3">
          {initials}
        </div>
      )}
      <div class="font-semibold text-gray-900">{speaker.name}</div>
      {speaker.role && (
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">{speaker.role}</p>
      )}
    </div>
  );
}

export function SpeakersGrid({ speakers, title = "Speakers", description }: SpeakersGridProps): string {
  if (!speakers || speakers.length === 0) return "";

  return (
    <section class="py-16 px-6 bg-gray-50">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        {description && <p class="text-gray-600 mb-8">{description}</p>}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map(speaker => SpeakerCard({ speaker }))}
        </div>
      </div>
    </section>
  );
}
