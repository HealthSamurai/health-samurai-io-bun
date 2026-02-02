import { Fragment } from "../../lib/jsx-runtime";

type AgendaSectionProps = {
  topics: string[];
  title?: string;
};

export function AgendaSection({ topics, title = "Agenda" }: AgendaSectionProps): string {
  if (!topics || topics.length === 0) return "";

  return (
    <section class="py-12 px-6 bg-white">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <svg class="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          {title}
        </h2>
        <div class="grid gap-3 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <span class="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <span class="text-gray-700 pt-1">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
