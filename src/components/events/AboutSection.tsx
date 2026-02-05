import { Fragment } from "../../lib/jsx-runtime";

type AboutSectionProps = {
  title: string;
  content: string;
  image?: string;
  linkText?: string;
  linkUrl?: string;
};

export function AboutSection({ title, content, image, linkText, linkUrl }: AboutSectionProps): string {
  return (
    <section class="py-16 px-6 bg-white">
      <div class="mx-auto max-w-5xl">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div class="text-2xl font-bold text-gray-900 mb-6">{title}</div>
            <div class="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">{content}</div>
            {linkText && linkUrl && (
              <a href={linkUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary-dark font-medium">
                {linkText}
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
          </div>
          {image && (
            <div class="rounded-2xl overflow-hidden shadow-lg">
              <img src={image} alt="" class="w-full h-auto" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
