import { gitInfo } from "../lib/git-info";

const GitHubIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`;

const LinkedInIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

const YouTubeIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"><path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`;

const XIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg>`;

export function Footer(): string {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          {/* Logo and description */}
          <div class="footer-brand">
            <img
              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
              alt="Health Samurai"
              class="footer-logo"
            />
            <p class="footer-description">
              Transform care delivery with exceptional FHIR software. Building the future of healthcare interoperability.
            </p>
            <div class="footer-social">
              <a href="https://github.com/HealthSamurai" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                <span class="sr-only">GitHub</span>
                <span dangerouslySetInnerHTML={{ __html: GitHubIcon }} />
              </a>
              <a href="https://www.linkedin.com/company/health-samurai/" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                <span class="sr-only">LinkedIn</span>
                <span dangerouslySetInnerHTML={{ __html: LinkedInIcon }} />
              </a>
              <a href="https://twitter.com/health_samurai" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                <span class="sr-only">X</span>
                <span dangerouslySetInnerHTML={{ __html: XIcon }} />
              </a>
              <a href="https://www.youtube.com/@healthsamurai" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                <span class="sr-only">YouTube</span>
                <span dangerouslySetInnerHTML={{ __html: YouTubeIcon }} />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div class="footer-nav">
            <div class="footer-nav-grid">
              {/* Products */}
              <div>
                <h3 class="footer-nav-title">Products</h3>
                <ul class="footer-nav-list">
                  <li><a href="/aidbox" class="footer-nav-link">Aidbox</a></li>
                  <li><a href="/formbox" class="footer-nav-link">Formbox</a></li>
                  <li><a href="/auditbox" class="footer-nav-link">Auditbox</a></li>
                  <li><a href="/termbox" class="footer-nav-link">Termbox</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 class="footer-nav-title">Resources</h3>
                <ul class="footer-nav-list">
                  <li><a href="/blog" class="footer-nav-link">Blog</a></li>
                  <li><a href="https://docs.aidbox.app" target="_blank" rel="noopener noreferrer" class="footer-nav-link">Docs</a></li>
                  <li><a href="/meetups" class="footer-nav-link">Meetups</a></li>
                  <li><a href="/casestudies" class="footer-nav-link">Case Studies</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 class="footer-nav-title">Company</h3>
                <ul class="footer-nav-list">
                  <li><a href="/company" class="footer-nav-link">About Us</a></li>
                  <li><a href="/careers" class="footer-nav-link">Careers</a></li>
                  <li><a href="/contacts" class="footer-nav-link">Contact</a></li>
                  <li><a href="/news" class="footer-nav-link">News</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 class="footer-nav-title">Legal</h3>
                <ul class="footer-nav-list">
                  <li><a href="/legal/privacy-policy" class="footer-nav-link">Privacy Policy</a></li>
                  <li><a href="/legal/cookie-policy" class="footer-nav-link">Cookie Policy</a></li>
                  <li><a href="/legal/terms" class="footer-nav-link">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div class="footer-bottom">
          <p class="footer-copyright">&copy; 2024 Health Samurai, Inc. All rights reserved.</p>
          {gitInfo.branch && (
            <p class="footer-git">
              {gitInfo.branch} @ {gitInfo.shortCommit}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
