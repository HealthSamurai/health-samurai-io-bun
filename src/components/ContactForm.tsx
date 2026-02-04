type ContactInfo = {
  address?: string;
  phone?: string;
  email?: string;
};

type User = {
  email?: string;
  name?: string;
};

type ContactFormProps = {
  title?: string;
  description?: string;
  contactInfo?: ContactInfo;
  formAction?: string;
  page?: string;
  user?: User | null;
};

const icons = {
  address: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="h-7 w-6 text-gray-400"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="h-7 w-6 text-gray-400"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="h-7 w-6 text-gray-400"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
};

const defaultContactInfo: ContactInfo = {
  address: "Health Samurai, Inc.<br />San Francisco, CA",
  phone: "+1 (628) 246-1268",
  email: "hello@health-samurai.io",
};

export function ContactForm({
  title = "Get in touch",
  description = "Have a question about our products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactInfo = defaultContactInfo,
  formAction = "/api/contact",
  page = "",
  user = null,
}: ContactFormProps = {}): string {
  return (
    <div class="relative isolate bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg aria-hidden="true" class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
                <defs>
                  <pattern id="contact-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" stroke-width="0" fill="white" />
                <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" fill="url(#contact-pattern)" stroke-width="0" />
              </svg>
            </div>
            <div class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{title}</div>
            <p class="mt-6 text-lg/8 text-gray-600">{description}</p>
            <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
              {contactInfo.address && (
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                    <span>{icons.address}</span>
                  </dt>
                  <dd>{contactInfo.address}</dd>
                </div>
              )}
              {contactInfo.phone && (
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <span>{icons.phone}</span>
                  </dt>
                  <dd>
                    <a href={`tel:${contactInfo.phone}`} class="hover:text-gray-900">{contactInfo.phone}</a>
                  </dd>
                </div>
              )}
              {contactInfo.email && (
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <span>{icons.email}</span>
                  </dt>
                  <dd>
                    <a href={`mailto:${contactInfo.email}`} class="hover:text-gray-900">{contactInfo.email}</a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
        <form
          hx-post={formAction}
          hx-target="#contact-form-response"
          hx-swap="innerHTML"
          hx-indicator="#contact-form-spinner"
          class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <input type="hidden" name="page" value={page} />
          <input type="hidden" name="form_type" value="contact" />
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div id="contact-form-response"></div>
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input id="first-name" type="text" name="first-name" autocomplete="given-name" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input id="last-name" type="text" name="last-name" autocomplete="family-name" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input id="email" type="email" name="email" autocomplete="email" required value={user?.email || ""} class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
                <div class="mt-2.5">
                  <input id="phone-number" type="tel" name="phone-number" autocomplete="tel" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea id="message" name="message" rows="4" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"></textarea>
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end items-center gap-4">
              <span id="contact-form-spinner" class="htmx-indicator">
                <svg class="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              <button type="submit" class="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Send message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
