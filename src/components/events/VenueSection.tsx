import { Fragment } from "../../lib/jsx-runtime";

type Venue = {
  name: string;
  address?: string;
  description?: string;
  mapUrl?: string;
  imageUrl?: string;
};

type VenueSectionProps = {
  venue: Venue;
  title?: string;
};

export function VenueSection({ venue, title = "Venue" }: VenueSectionProps): string {
  if (!venue) return "";

  return (
    <section class="py-12 px-6 bg-white">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg class="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
          {title}
        </h2>
        <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          {venue.imageUrl && (
            <div class="aspect-video">
              <img src={venue.imageUrl} alt={venue.name} class="w-full h-full object-cover" />
            </div>
          )}
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{venue.name}</h3>
            {venue.address && (
              <p class="text-gray-600 flex items-center gap-2 mb-3">
                <svg class="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {venue.address}
              </p>
            )}
            {venue.description && (
              <p class="text-gray-600 leading-relaxed">{venue.description}</p>
            )}
            {venue.mapUrl && (
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
                View on map
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
