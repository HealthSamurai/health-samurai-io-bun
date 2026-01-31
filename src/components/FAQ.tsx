export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  title?: string;
  items: FAQItem[];
};

const plusIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
const minusIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6"><path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" /></svg>`;

export function FAQ({
  title = "Frequently asked questions",
  items,
}: FAQProps): string {
  // Build initial state object for all FAQ items (all closed)
  const initialState = items
    .map((_, i) => `faq${i}: false`)
    .join(", ");

  return (
    <div class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl" data-signals={`{${initialState}}`}>
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <dl class="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
            {items.map((item, index) => (
              <div class="py-6 first:pt-0 last:pb-0">
                <dt>
                  <button
                    type="button"
                    class="flex w-full items-start justify-between text-left text-gray-900 cursor-pointer rounded-lg px-3 py-2 -mx-3 -my-2 hover:bg-gray-50 transition-colors dark:text-white dark:hover:bg-gray-800"
                    data-on:click={`$faq${index} = !$faq${index}`}
                  >
                    <span class="text-base/7 font-semibold">{item.question}</span>
                    <span class="ml-6 flex h-7 items-center">
                      <span data-show={`!$faq${index}`} dangerouslySetInnerHTML={{ __html: plusIcon }} />
                      <span data-show={`$faq${index}`} style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: minusIcon }} />
                    </span>
                  </button>
                </dt>
                <dd
                  class="mt-2 pr-12"
                  data-show={`$faq${index}`}
                  style={{ display: "none" }}
                >
                  <p class="text-base/7 text-gray-600 dark:text-gray-400">{item.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
