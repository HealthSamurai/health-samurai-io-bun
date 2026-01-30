import { gitInfo } from "../lib/git-info";
import { Fragment } from "../lib/jsx-runtime";

export function Footer(): string {
  return (
    <Fragment>
      <footer class="bg-gray-50 border-t border-gray-200">
        <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          {/* Main footer content - flex row on desktop */}
          <div class="flex flex-col lg:flex-row lg:gap-16">
            {/* Logo and description - left column */}
            <div class="mb-10 lg:mb-0 lg:w-80 lg:flex-shrink-0">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
                alt="Health Samurai"
                class="h-8 mb-6"
              />
              <p class="text-sm text-gray-600 leading-6 mb-6">
                Transform care delivery with exceptional FHIR software. Building the future of healthcare interoperability.
              </p>
              {/* Certifications */}
              <div class="flex gap-4 items-center mb-6">
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d0332ca0d91f84e893638b_hippa-logo.png"
                  loading="lazy"
                  alt="HIPAA Compliant"
                  class="h-10"
                />
                <a href="/news/health-samurai-achieves-iso-27001-2022-certification">
                  <img
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d03378e6aff704b281d613_ISOMark_27001-2022%202.svg"
                    loading="lazy"
                    alt="ISO 27001 Certified"
                    class="h-10"
                  />
                </a>
              </div>
              {/* Social links */}
              <div class="flex gap-5">
                <a href="https://github.com/HealthSamurai" target="_blank" rel="nofollow" class="text-gray-500 hover:text-red-600">
                  <span class="sr-only">GitHub</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/health-samurai/" target="_blank" rel="nofollow" class="text-gray-500 hover:text-red-600">
                  <span class="sr-only">LinkedIn</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@healthsamurai" target="_blank" rel="nofollow" class="text-gray-500 hover:text-red-600">
                  <span class="sr-only">YouTube</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation links - right columns */}
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; flex: 1;">
              {/* Company */}
              <div>
                <h3 class="text-sm font-semibold text-gray-900">Company</h3>
                <ul class="mt-4 space-y-3">
                  <li><a href="/company" class="text-sm text-gray-600 hover:text-red-600">About Us</a></li>
                  <li><a href="/careers" class="text-sm text-gray-600 hover:text-red-600">Careers</a></li>
                  <li><a href="/news" class="text-sm text-gray-600 hover:text-red-600">News</a></li>
                  <li><a href="/blog" class="text-sm text-gray-600 hover:text-red-600">Blog</a></li>
                  <li><a href="/contacts" class="text-sm text-gray-600 hover:text-red-600">Contact Us</a></li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 class="text-sm font-semibold text-gray-900">Products</h3>
                <ul class="mt-4 space-y-3">
                  <li><a href="/fhir-server" class="text-sm text-gray-600 hover:text-red-600">Aidbox FHIR Server</a></li>
                  <li><a href="/fhir-database" class="text-sm text-gray-600 hover:text-red-600">Fhirbase</a></li>
                  <li><a href="/medical-form" class="text-sm text-gray-600 hover:text-red-600">Aidbox Forms</a></li>
                  <li><a href="/fhir-api" class="text-sm text-gray-600 hover:text-red-600">FHIR API</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 class="text-sm font-semibold text-gray-900">Resources</h3>
                <ul class="mt-4 space-y-3">
                  <li><a href="/casestudies" class="text-sm text-gray-600 hover:text-red-600">Case Studies</a></li>
                  <li><a href="/services" class="text-sm text-gray-600 hover:text-red-600">Services</a></li>
                  <li><a href="/opensource" class="text-sm text-gray-600 hover:text-red-600">Open Source</a></li>
                  <li><a href="https://docs.aidbox.app" target="_blank" class="text-sm text-gray-600 hover:text-red-600">Documentation</a></li>
                </ul>
              </div>

              {/* Legal & Contact */}
              <div>
                <h3 class="text-sm font-semibold text-gray-900">Legal</h3>
                <ul class="mt-4 space-y-3">
                  <li><a href="/legal/privacy-policy" class="text-sm text-gray-600 hover:text-red-600">Privacy Policy</a></li>
                  <li><a href="/legal/cookie-policy" class="text-sm text-gray-600 hover:text-red-600">Cookie Policy</a></li>
                </ul>
                <h3 class="text-sm font-semibold text-gray-900 mt-6">Contact</h3>
                <div class="mt-3 text-sm text-gray-600 space-y-1">
                  <p>1891 N Gaffey St Ste O</p>
                  <p>San Pedro, CA 90731</p>
                  <p class="mt-2">+1 (818) 731-1279</p>
                  <p>hello@health-samurai.io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div class="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-500">&copy; 2024 Health Samurai, Inc. All rights reserved.</p>
            {gitInfo.branch && (
              <p class="text-xs text-gray-400">
                {gitInfo.branch} @ {gitInfo.shortCommit}
              </p>
            )}
          </div>
        </div>
      </footer>

      {/* Cookie banner */}
      <div
        id="cookie-banner"
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50"
        style="display: none"
      >
        <div class="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-600">
            By using this website, you agree to the storing of cookies on your device.{" "}
            <a href="/legal/cookie-policy" class="text-red-600 hover:underline">
              Cookie Policy
            </a>
          </p>
          <div class="flex gap-3">
            <button
              class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded hover:border-gray-400"
              onclick="localStorage.setItem('cookieConsent', 'denied'); document.getElementById('cookie-banner').style.display = 'none';"
            >
              Deny
            </button>
            <button
              class="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
              onclick="localStorage.setItem('cookieConsent', 'accepted'); document.getElementById('cookie-banner').style.display = 'none';"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        if (!localStorage.getItem('cookieConsent')) {
          document.getElementById('cookie-banner').style.display = 'block';
        }
      ` }} />
    </Fragment>
  );
}
