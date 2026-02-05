/**
 * Get Started Modal
 * Modal for showing local and sandbox Aidbox setup options
 */

export type GetStartedModalProps = {
  id?: string;
};

export function GetStartedModal({ id = "get-started-modal" }: GetStartedModalProps = {}): string {
  return `
    <dialog id="${id}" aria-labelledby="${id}-title" class="fixed inset-0 z-50 size-auto max-h-none max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-gray-500/75">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-8">
          <button type="button" onclick="document.getElementById('${id}').close()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Close</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="space-y-8">
            <div>
              <div id="${id}-title" class="text-2xl font-semibold text-gray-900">Get Started with Aidbox</div>
            </div>

            <div class="space-y-3">
              <div class="text-lg font-semibold text-gray-900">Run Aidbox Locally</div>
              <p class="text-sm text-gray-600">
                Quickly spin up a local Aidbox instance with a single command. Ideal for developers who want a private and persistent setup.
              </p>
              
              <div class="relative">
                <div class="rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-white overflow-x-auto">
                  <code>curl -JO https://aidbox.app/runme && docker compose up</code>
                </div>
                <button 
                  type="button"
                  onclick="navigator.clipboard.writeText('curl -JO https://aidbox.app/runme && docker compose up').then(() => { const btn = this; const originalHTML = btn.innerHTML; btn.innerHTML = '<svg class=\\'size-5\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'currentColor\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M5 13l4 4L19 7\\'/></svg>'; setTimeout(() => btn.innerHTML = originalHTML, 2000); })"
                  class="absolute top-2 right-2 rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  title="Copy to clipboard"
                >
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm/6">
                <span class="bg-white px-6 text-gray-500 font-medium">or</span>
              </div>
            </div>

            <div class="space-y-3">
              <div class="text-lg font-semibold text-gray-900">Launch Aidbox in Sandbox</div>
              <p class="text-sm text-gray-600">
                Explore Aidbox in a ready-to-use cloud environment with demo data and UI tools. Perfect for quick evaluations and product exploration.
              </p>
              
              <a 
                href="https://aidbox.app/ui/portal" 
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span>Run in Cloud Sandbox</span>
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  `;
}

// Modal trigger button
export function GetStartedModalTrigger({
  modalId = "get-started-modal",
  children = "Try for Free",
  className = "",
}: {
  modalId?: string;
  children?: string;
  className?: string;
} = {}): string {
  return `<button type="button" onclick="document.getElementById('${modalId}').showModal()" class="${className}">${children}</button>`;
}
