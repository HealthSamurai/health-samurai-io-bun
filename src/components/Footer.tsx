import { gitInfo } from "../lib/git-info";

export function Footer(): string {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Logo and description */}
            <div className="space-y-8">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a3041c4d877230001fc7454_hslogo-footer.svg"
                alt="Health Samurai"
                className="h-10"
              />
              <p className="text-sm/6 text-balance text-gray-400">
                Transform care delivery with exceptional FHIR software. Building the future of healthcare interoperability.
              </p>
              {/* Certifications */}
              <div className="flex gap-x-4 items-center">
                <img
                  src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d0332ca0d91f84e893638b_hippa-logo.png"
                  loading="lazy"
                  alt="HIPAA Compliant"
                  className="h-12"
                />
                <a href="https://www.health-samurai.io/news/health-samurai-achieves-iso-27001-2022-certification">
                  <img
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67d03378e6aff704b281d613_ISOMark_27001-2022%202.svg"
                    loading="lazy"
                    alt="ISO 27001 Certified"
                    className="h-12"
                  />
                </a>
              </div>
              {/* Social links */}
              <div className="flex gap-x-6">
                <a href="https://github.com/HealthSamurai" target="_blank" rel="nofollow" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/health-samurai/" target="_blank" rel="nofollow" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@healthsamurai" target="_blank" rel="nofollow" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/company" className="text-sm/6 text-gray-400 hover:text-white">About Us</a></li>
                    <li><a href="/careers" className="text-sm/6 text-gray-400 hover:text-white">Careers</a></li>
                    <li><a href="/news" className="text-sm/6 text-gray-400 hover:text-white">News</a></li>
                    <li><a href="/blog" className="text-sm/6 text-gray-400 hover:text-white">Blog</a></li>
                    <li><a href="/contacts" className="text-sm/6 text-gray-400 hover:text-white">Contact Us</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Products</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/fhir-server" className="text-sm/6 text-gray-400 hover:text-white">Aidbox FHIR Server</a></li>
                    <li><a href="/fhir-database" className="text-sm/6 text-gray-400 hover:text-white">Fhirbase</a></li>
                    <li><a href="/medical-form" className="text-sm/6 text-gray-400 hover:text-white">Aidbox Forms</a></li>
                    <li><a href="/fhir-api" className="text-sm/6 text-gray-400 hover:text-white">FHIR API</a></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/casestudies" className="text-sm/6 text-gray-400 hover:text-white">Case Studies</a></li>
                    <li><a href="/services" className="text-sm/6 text-gray-400 hover:text-white">Services</a></li>
                    <li><a href="/opensource" className="text-sm/6 text-gray-400 hover:text-white">Open Source</a></li>
                    <li><a href="https://docs.aidbox.app" target="_blank" className="text-sm/6 text-gray-400 hover:text-white">Documentation</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/legal/privacy-policy" className="text-sm/6 text-gray-400 hover:text-white">Privacy Policy</a></li>
                    <li><a href="/legal/cookie-policy" className="text-sm/6 text-gray-400 hover:text-white">Cookie Policy</a></li>
                  </ul>
                  <div className="mt-8">
                    <h3 className="text-sm/6 font-semibold text-white">Contact</h3>
                    <div className="mt-4 text-sm/6 text-gray-400">
                      <p>1891 N Gaffey St Ste O</p>
                      <p>San Pedro, CA 90731</p>
                      <p className="mt-2">+1 (818) 731-1279</p>
                      <p>hello@health-samurai.io</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm/6 text-gray-400">&copy; 2024 Health Samurai, Inc. All rights reserved.</p>
            {gitInfo.branch && (
              <p className="text-sm/6 text-gray-500">
                {gitInfo.branch} @ {gitInfo.shortCommit}
              </p>
            )}
          </div>
        </div>
      </footer>

      {/* Cookie banner */}
      <div
        id="cookie-banner"
        className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-50"
        style="display: none"
      >
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            By using this website, you agree to the storing of cookies on your device.{" "}
            <a href="/legal/cookie-policy" className="text-primary hover:underline">
              Cookie Policy
            </a>
          </p>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded hover:border-gray-500"
              onclick="localStorage.setItem('cookieConsent', 'denied'); document.getElementById('cookie-banner').style.display = 'none';"
            >
              Deny
            </button>
            <button
              className="px-4 py-2 text-sm text-white bg-primary hover:bg-primary-dark rounded"
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
    </div>
  );
}
