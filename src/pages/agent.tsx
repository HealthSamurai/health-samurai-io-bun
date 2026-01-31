import { Fragment } from "../lib/jsx-runtime";
import type { Context } from "../context";
import { gitInfo } from "../lib/git-info";

export const metadata = {
  title: "Samurai Agent",
  description: "AI-powered FHIR assistant",
  fullPage: true,
  hideFooter: true,
};

const icons = {
  send: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/></svg>`,
  samurai: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c.83 0 1.5-.67 1.5-1.5S10.83 7.5 10 7.5 8.5 8.17 8.5 9s.67 1.5 1.5 1.5zm4 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-2 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd"/></svg>`,
  newChat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
};

type PageProps = {
  ctx?: Context;
  devMode?: boolean;
};

export default function AgentPage({ ctx, devMode }: PageProps = {}): string {
  const user = ctx?.user;
  const isDev = devMode ?? ctx?.devMode ?? false;
  const cssHref = isDev && ctx?.serverId
    ? `/styles/main.css?v=${ctx.serverId}`
    : `/styles/main.css?v=${gitInfo.shortCommit || "prod"}`;

  return (
    <Fragment>
      <html lang="en" class="h-full">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="AI-powered FHIR assistant" />
          <title>Samurai Agent | Health Samurai</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href={cssHref} />
          <script src="https://unpkg.com/htmx.org@1.9.10" defer></script>
          <link rel="shortcut icon" type="image/png" href="/assets/images/favicons/favicon-32.png" />
        </head>
        <body class="h-full bg-gray-50">
          <div class="flex h-full">
            {/* Sidebar */}
            <div class="hidden md:flex md:w-64 md:flex-col">
              <div class="flex min-h-0 flex-1 flex-col bg-gray-900">
                <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                  {/* Logo */}
                  <div class="flex flex-shrink-0 items-center px-4">
                    <span class="text-white font-semibold text-lg flex items-center gap-2">
                      <span class="text-primary">{icons.samurai}</span>
                      Samurai Agent
                    </span>
                  </div>

                  {/* New chat button */}
                  <div class="mt-6 px-3">
                    <button
                      type="button"
                      onclick="location.reload()"
                      class="flex w-full items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 transition-colors"
                    >
                      <span>{icons.newChat}</span>
                      New chat
                    </button>
                  </div>

                  {/* Chat history placeholder */}
                  <nav class="mt-6 flex-1 px-3 space-y-1">
                    <p class="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recent chats
                    </p>
                    <p class="px-3 py-2 text-sm text-gray-400">No chat history yet</p>
                  </nav>
                </div>

                {/* User / Home link */}
                <div class="flex flex-shrink-0 border-t border-gray-800 p-4">
                  <a href="/" class="group flex w-full items-center gap-3 text-sm font-medium text-gray-300 hover:text-white">
                    <span>{icons.home}</span>
                    Back to Home
                  </a>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div class="flex flex-1 flex-col">
              {/* Mobile header */}
              <div class="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-gray-200 bg-white px-4 md:hidden">
                <a href="/" class="text-gray-500 hover:text-gray-700">
                  <span>{icons.home}</span>
                </a>
                <span class="flex-1 text-center font-semibold text-gray-900">Samurai Agent</span>
                <button type="button" onclick="location.reload()" class="text-gray-500 hover:text-gray-700">
                  <span>{icons.newChat}</span>
                </button>
              </div>

              {/* Chat container */}
              <div class="flex flex-1 flex-col overflow-hidden">
                {/* Messages area */}
                <div id="messages" class="flex-1 overflow-y-auto px-4 py-6">
                  <div class="mx-auto max-w-3xl space-y-6">
                    {/* Welcome message */}
                    <div class="flex gap-4">
                      <div class="flex-shrink-0 size-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <span>{icons.samurai}</span>
                      </div>
                      <div class="flex-1 space-y-2">
                        <p class="text-sm font-medium text-gray-900">Samurai Agent</p>
                        <div class="prose prose-sm max-w-none text-gray-700">
                          <p>Hello! I'm Samurai Agent, your AI-powered FHIR assistant. I can help you with:</p>
                          <ul>
                            <li>FHIR resource questions</li>
                            <li>Aidbox configuration</li>
                            <li>Healthcare interoperability</li>
                            <li>SQL on FHIR queries</li>
                          </ul>
                          <p>How can I help you today?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div class="border-t border-gray-200 bg-white px-4 py-4">
                  <div class="mx-auto max-w-3xl">
                    <form
                      hx-post="/api/agent/chat"
                      hx-target="#messages .mx-auto"
                      hx-swap="beforeend"
                      hx-on--after-request="this.reset(); document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight"
                      class="relative"
                    >
                      <textarea
                        name="message"
                        rows="1"
                        placeholder="Message Samurai Agent..."
                        required
                        class="block w-full resize-none rounded-xl border border-gray-300 bg-white py-3 pl-4 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none sm:text-sm"
                        onkeydown="if(event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); this.form.requestSubmit(); }"
                        oninput="this.style.height = 'auto'; this.style.height = Math.min(this.scrollHeight, 200) + 'px'"
                      ></textarea>
                      <button
                        type="submit"
                        class="absolute right-2 bottom-2 rounded-lg bg-primary p-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50"
                      >
                        <span>{icons.send}</span>
                      </button>
                    </form>
                    <p class="mt-2 text-center text-xs text-gray-500">
                      Samurai Agent can make mistakes. Consider checking important information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </Fragment>
  );
}
