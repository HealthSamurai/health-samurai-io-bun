/**
 * Slideover Component Demo
 */
import { ComponentsLayout } from "../../../components/ComponentsLayout";
import { Slideover, WideSlideoverWithColumns, NotificationSlideover, SlideoverTrigger } from "../../../components/ui/Slideover";
import { highlightCode } from "../../../lib/markdown";

export const metadata = {
  title: "Slideovers",
  description: "Side panel drawers that slide in from the edge",
  fullPage: true,
};

function Section({ title, description, children }: { title: string; description?: string; children: string }): string {
  return `
    <div class="mb-12">
      <h2 class="text-lg font-semibold text-gray-900 mb-2">${title}</h2>
      ${description ? `<p class="text-sm text-gray-600 mb-4">${description}</p>` : ""}
      <div class="space-y-4">
        ${children}
      </div>
    </div>
  `;
}

function CodeBlock({ code }: { code: string }): string {
  return `<div class="mt-4 rounded-lg overflow-hidden">${highlightCode(code, "tsx")}</div>`;
}

function Example({ label, children, code }: { label: string; children: string; code: string }): string {
  return `
    <div class="mb-8 last:mb-0">
      <h3 class="text-sm font-medium text-gray-700 mb-3">${label}</h3>
      <div class="bg-white p-6 rounded-lg border border-gray-200">
        ${children}
      </div>
      ${CodeBlock({ code })}
    </div>
  `;
}

const sampleNotifications = [
  { id: "1", title: "New comment on your post", description: "Sarah left a comment on 'Getting started with FHIR'", time: "2 hours ago", read: false },
  { id: "2", title: "Your export is ready", description: "The CSV export you requested is now available.", time: "5 hours ago", read: false },
  { id: "3", title: "Welcome to the team!", description: "You've been added to the Engineering workspace.", time: "Yesterday", read: true },
];

export default function SlideoverDemo({ devMode }: { devMode?: boolean }): string {
  const content = `
    <div data-signals="{demo1Open: false, demo2Open: false, demo3Open: false, demo4Open: false, demo5Open: false, notificationsOpen: false}">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Slideovers</h1>
        <p class="mt-2 text-gray-600">
          Side panels that slide in from the edge of the screen, useful for secondary content or forms.
        </p>
      </div>

      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm font-medium text-gray-700 mb-2">Import</p>
        <code class="text-sm text-primary font-mono">
          import { Slideover, WideSlideoverWithColumns, NotificationSlideover } from "../components/ui/Slideover";
        </code>
      </div>

      ${Section({
        title: "Basic Slideover",
        description: "Simple slideover with title and content.",
        children: Example({
          label: "From right (default)",
          children: `
            <button
              type="button"
              data-on:click="$demo1Open = true"
              class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Open Slideover
            </button>
            ${Slideover({
              id: "demo1",
              title: "Panel Title",
              subtitle: "This is a basic slideover panel.",
              children: `
                <div class="space-y-6">
                  <p class="text-sm text-gray-500">
                    This is the main content area of the slideover. You can put any content here including forms, lists, or other components.
                  </p>
                  <div class="border-t border-gray-200 pt-6">
                    <h4 class="text-sm font-medium text-gray-900">Section Title</h4>
                    <p class="mt-2 text-sm text-gray-500">More content can go here.</p>
                  </div>
                </div>
              `,
            })}
          `,
          code: `<Slideover
  id="panel"
  title="Panel Title"
  subtitle="This is a basic slideover panel."
  children="..."
/>

// Open with:
<button data-on:click="$panelOpen = true">Open</button>`,
        }),
      })}

      ${Section({
        title: "From Left",
        description: "Slideover that enters from the left side.",
        children: Example({
          label: "Left side",
          children: `
            <button
              type="button"
              data-on:click="$demo2Open = true"
              class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Open from Left
            </button>
            ${Slideover({
              id: "demo2",
              title: "Navigation",
              side: "left",
              children: `
                <nav class="space-y-1">
                  <a href="#" class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100">Dashboard</a>
                  <a href="#" class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Team</a>
                  <a href="#" class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Projects</a>
                  <a href="#" class="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Settings</a>
                </nav>
              `,
            })}
          `,
          code: `<Slideover
  id="nav"
  title="Navigation"
  side="left"
  children="..."
/>`,
        }),
      })}

      ${Section({
        title: "Widths",
        description: "Different panel widths for various content needs.",
        children: Example({
          label: "Wide panel (lg)",
          children: `
            <button
              type="button"
              data-on:click="$demo3Open = true"
              class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Open Wide Panel
            </button>
            ${Slideover({
              id: "demo3",
              title: "Wide Panel",
              subtitle: "More room for content",
              width: "lg",
              children: `
                <div class="prose prose-sm">
                  <p>This is a wider panel that can accommodate more content, such as forms with multiple columns or detailed information displays.</p>
                  <form class="mt-6 space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Message</label>
                      <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"></textarea>
                    </div>
                  </form>
                </div>
              `,
            })}
          `,
          code: `<Slideover
  id="form"
  title="Wide Panel"
  width="lg"  // "sm" | "md" | "lg" | "xl" | "full"
  children="..."
/>`,
        }),
      })}

      ${Section({
        title: "With Footer",
        description: "Slideover with action buttons in the footer.",
        children: Example({
          label: "Footer with actions",
          children: `
            <button
              type="button"
              data-on:click="$demo4Open = true"
              class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Open with Footer
            </button>
            ${Slideover({
              id: "demo4",
              title: "Edit Profile",
              subtitle: "Update your account information.",
              children: `
                <form class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Full name</label>
                    <input type="text" value="John Doe" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value="john@example.com" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                  </div>
                </form>
              `,
              footer: `
                <div class="flex justify-end gap-x-3">
                  <button type="button" data-on:click="$demo4Open = false" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                  <button type="button" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">Save</button>
                </div>
              `,
            })}
          `,
          code: `<Slideover
  id="edit"
  title="Edit Profile"
  children="..."
  footer={\`
    <div class="flex justify-end gap-x-3">
      <button data-on:click="$editOpen = false">Cancel</button>
      <button>Save</button>
    </div>
  \`}
/>`,
        }),
      })}

      ${Section({
        title: "Two-Column Layout",
        description: "Wide slideover with main content and side panel.",
        children: Example({
          label: "Split layout",
          children: `
            <button
              type="button"
              data-on:click="$demo5Open = true"
              class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Open Two-Column
            </button>
            ${WideSlideoverWithColumns({
              id: "demo5",
              title: "Order Details",
              subtitle: "Order #12345",
              mainContent: `
                <div class="space-y-6">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Items</h4>
                    <ul class="mt-4 divide-y divide-gray-200">
                      <li class="flex py-4 gap-x-4">
                        <div class="size-16 rounded-lg bg-gray-200"></div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">Product Name</p>
                          <p class="text-sm text-gray-500">Qty: 1 &times; $99.00</p>
                        </div>
                      </li>
                      <li class="flex py-4 gap-x-4">
                        <div class="size-16 rounded-lg bg-gray-200"></div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">Another Product</p>
                          <p class="text-sm text-gray-500">Qty: 2 &times; $49.00</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              `,
              sideContent: `
                <div class="space-y-6">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Summary</h4>
                    <dl class="mt-4 space-y-3 text-sm">
                      <div class="flex justify-between">
                        <dt class="text-gray-500">Subtotal</dt>
                        <dd class="text-gray-900">$197.00</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="text-gray-500">Shipping</dt>
                        <dd class="text-gray-900">$10.00</dd>
                      </div>
                      <div class="flex justify-between border-t border-gray-200 pt-3 font-medium">
                        <dt class="text-gray-900">Total</dt>
                        <dd class="text-gray-900">$207.00</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Shipping Address</h4>
                    <address class="mt-2 text-sm text-gray-500 not-italic">
                      John Doe<br />
                      123 Main St<br />
                      San Francisco, CA 94102
                    </address>
                  </div>
                </div>
              `,
            })}
          `,
          code: `<WideSlideoverWithColumns
  id="order"
  title="Order Details"
  mainContent="..."
  sideContent="..."
/>`,
        }),
      })}

      ${Section({
        title: "Notifications Panel",
        description: "Pre-built notification center slideover.",
        children: Example({
          label: "Notifications",
          children: `
            <button
              type="button"
              data-on:click="$notificationsOpen = true"
              class="relative rounded-md bg-white p-2 text-gray-400 hover:text-gray-500 ring-1 ring-inset ring-gray-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span class="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">2</span>
            </button>
            ${NotificationSlideover({
              id: "notifications",
              title: "Notifications",
              notifications: sampleNotifications,
            })}
          `,
          code: `<NotificationSlideover
  id="notifications"
  title="Notifications"
  notifications={[
    { id: "1", title: "New comment", description: "...", time: "2h ago", read: false },
    { id: "2", title: "Export ready", description: "...", time: "5h ago", read: true },
  ]}
/>`,
        }),
      })}

      <!-- Props Reference -->
      <div class="mt-12">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Props Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prop</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr><td class="px-4 py-3 font-mono text-primary">id</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Unique ID (creates \${id}Open signal)</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">title</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Panel title</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">subtitle</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Panel subtitle</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">children</td><td class="px-4 py-3">string</td><td class="px-4 py-3">required</td><td class="px-4 py-3">Panel content</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">side</td><td class="px-4 py-3">"right" | "left"</td><td class="px-4 py-3">"right"</td><td class="px-4 py-3">Slide direction</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">width</td><td class="px-4 py-3">"sm" | "md" | "lg" | "xl" | "full"</td><td class="px-4 py-3">"md"</td><td class="px-4 py-3">Panel width</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">overlay</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Show backdrop</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">closeOnOverlay</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Close on backdrop click</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">showClose</td><td class="px-4 py-3">boolean</td><td class="px-4 py-3">true</td><td class="px-4 py-3">Show close button</td></tr>
              <tr><td class="px-4 py-3 font-mono text-primary">footer</td><td class="px-4 py-3">string</td><td class="px-4 py-3">-</td><td class="px-4 py-3">Footer content</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return ComponentsLayout({
    title: "Slideovers",
    currentPath: "/_components/overlays/slideovers",
    children: content,
    devMode,
  });
}
