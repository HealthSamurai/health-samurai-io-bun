import { Fragment } from "../../lib/jsx-runtime";

type InfoSectionProps = {
  title: string;
  items: string[];
  note?: string;
};

export function InfoSection({ title, items, note }: InfoSectionProps): string {
  if (!items || items.length === 0) return "";

  return (
    <section class="py-16 px-6 bg-white">
      <div class="mx-auto max-w-5xl">
        <div class="text-2xl font-bold text-gray-900 mb-8">{title}</div>
        <ul class="space-y-4">
          {items.map(item => (
            <li class="flex items-start gap-3 text-gray-600">
              <svg class="size-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {note && (
          <p class="mt-8 text-sm text-gray-500 border-l-4 border-primary/30 pl-4">{note}</p>
        )}
      </div>
    </section>
  );
}
