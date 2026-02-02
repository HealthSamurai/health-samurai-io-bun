import { Fragment } from "../../lib/jsx-runtime";

type EventHeroProps = {
  name: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  backLink: string;
  backLabel: string;
};

function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate) return "";
  const start = new Date(startDate);
  const opts: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  if (endDate) {
    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", opts)} - ${end.toLocaleDateString("en-US", opts)}`;
  }
  return start.toLocaleDateString("en-US", opts);
}

export function EventHero({ name, startDate, endDate, location, description, backLink, backLabel }: EventHeroProps): string {
  const dateStr = formatDateRange(startDate, endDate);

  return (
    <header class="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-6">
      <div class="mx-auto max-w-4xl">
        {/* Back link */}
        <a href={backLink} class="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </a>

        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
          {name}
        </h1>

        <div class="flex flex-wrap items-center gap-6 text-lg text-white/90">
          {dateStr && (
            <div class="flex items-center gap-2">
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>{dateStr}</span>
            </div>
          )}
          {location && (
            <div class="flex items-center gap-2">
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{location}</span>
            </div>
          )}
        </div>

        {description && (
          <p class="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
