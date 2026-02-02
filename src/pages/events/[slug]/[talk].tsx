import { Fragment } from "../../../lib/jsx-runtime";
import { getSeriesById, getEventBySlug, formatEventDate, type Event, type EventSeries } from "../../../data/events";
import { renderMarkdown } from "../../../lib/markdown";

export const metadata = {
  title: "Talk",
  description: "Health Samurai event talk",
};

export async function getMetadata(params: { slug: string; talk: string }) {
  const series = await getSeriesById(params.slug);
  if (!series) {
    return { title: "Talk Not Found", description: "" };
  }
  const talk = series.events.find(e => e.id === params.talk);
  if (!talk) {
    return { title: "Talk Not Found", description: "" };
  }
  return {
    title: `${talk.name} | ${series.name}`,
    description: talk.speaker ? `${talk.speaker} - ${series.name}` : series.name,
  };
}

function NotFound({ seriesId }: { seriesId?: string }): string {
  return (
    <div class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Talk not found</h1>
        <p class="text-gray-600 mb-8">The talk you're looking for doesn't exist.</p>
        <a href={seriesId ? `/events/${seriesId}` : "/events"} class="text-primary hover:text-primary-dark font-medium">
          ← Back to event
        </a>
      </div>
    </div>
  );
}

function YoutubeEmbed({ url }: { url: string }): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  if (!match) return "";
  const videoId = match[1];

  return (
    <div class="aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
  );
}

interface TalkPageParams {
  slug: string;
  talk: string;
}

export default async function TalkPage(params: TalkPageParams): Promise<string> {
  const { slug, talk: talkId } = params;
  const series = await getSeriesById(slug);

  if (!series) {
    return NotFound({});
  }

  const talk = series.events.find(e => e.id === talkId);

  if (!talk) {
    return NotFound({ seriesId: slug });
  }

  const dateStr = formatEventDate(talk);
  const contentHtml = talk.content ? renderMarkdown(talk.content) : "";

  // Find prev/next talks
  const talkIndex = series.events.findIndex(e => e.id === talkId);
  const prevTalk = talkIndex > 0 ? series.events[talkIndex - 1] : null;
  const nextTalk = talkIndex < series.events.length - 1 ? series.events[talkIndex + 1] : null;

  return (
    <Fragment>
      <article class="bg-white">
        {/* Header */}
        <header class="pt-16 pb-8 px-6">
          <div class="mx-auto max-w-3xl">
            {/* Back link */}
            <a href={`/events/${slug}`} class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              {series.name}
            </a>

            {/* Title */}
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {talk.name}
            </h1>

            {/* Speaker + Meta */}
            <div class="mt-6 flex flex-wrap items-center gap-4 text-gray-600">
              {talk.speaker && (
                <div class="flex items-center gap-2">
                  <svg class="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span class="font-medium text-gray-900">{talk.speaker}</span>
                  {talk.role && <span class="text-gray-500">· {talk.role}</span>}
                </div>
              )}
              {dateStr && (
                <div class="flex items-center gap-2">
                  <svg class="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <span>{dateStr}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* YouTube Video */}
        {talk.youtube && (
          <div class="px-6 pb-8">
            <div class="mx-auto max-w-3xl">
              {YoutubeEmbed({ url: talk.youtube })}
            </div>
          </div>
        )}

        {/* Content */}
        {contentHtml && (
          <div class="px-6 pb-12">
            <div
              class="prose prose-lg mx-auto max-w-3xl
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-ul:my-4 prose-li:my-1
                prose-ol:my-4"
            >
              {contentHtml}
            </div>
          </div>
        )}

        {/* Navigation */}
        <footer class="border-t border-gray-100 bg-gray-50">
          <div class="mx-auto max-w-3xl px-6 py-8">
            <div class="flex items-center justify-between gap-4">
              {prevTalk ? (
                <a href={`/events/${slug}/${prevTalk.id}`} class="flex-1 group">
                  <span class="text-xs text-gray-500">Previous</span>
                  <p class="text-sm font-medium text-gray-900 group-hover:text-primary truncate">
                    ← {prevTalk.name}
                  </p>
                </a>
              ) : (
                <div class="flex-1" />
              )}
              <a
                href={`/events/${slug}`}
                class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                All talks
              </a>
              {nextTalk ? (
                <a href={`/events/${slug}/${nextTalk.id}`} class="flex-1 text-right group">
                  <span class="text-xs text-gray-500">Next</span>
                  <p class="text-sm font-medium text-gray-900 group-hover:text-primary truncate">
                    {nextTalk.name} →
                  </p>
                </a>
              ) : (
                <div class="flex-1" />
              )}
            </div>
          </div>
        </footer>
      </article>
    </Fragment>
  );
}
