// Shared contact form component - configurable per page

import { Fragment } from "../lib/jsx-runtime";

export type ContactFormConfig = {
  // Form configuration
  action?: string;
  formId?: string;
  formName?: string;
  pageId?: string;
  elementId?: string;
  pageUrl?: string;

  // Labels & text
  submitLabel?: string;
  messagePlaceholder?: string;

  // Input styling
  inputClassName?: string;

  // Success message - can be simple string or JSX
  successMessage?: string;
};

export type ContactSectionConfig = ContactFormConfig & {
  // Section header
  title?: string;
  subtitle?: string;
};

const defaultConfig: Required<ContactFormConfig> = {
  action: "https://main-page.d-chistoforov.workers.dev",
  formId: "wf-form-Contact-Us",
  formName: "wf-form-Contact-Us",
  pageId: "",
  elementId: "",
  pageUrl: "",
  submitLabel: "SEND",
  messagePlaceholder: "How we can help?",
  inputClassName: "global-textinput w-input",
  successMessage: "Thank you! We'll be in touch soon.",
};

/**
 * Just the contact form - for embedding in custom layouts
 */
export function ContactForm(config: ContactFormConfig = {}): string {
  const c = { ...defaultConfig, ...config };

  return (
    <div className="w-form">
      <form
        id={c.formId}
        name={c.formName}
        data-name="Contact Us"
        action={c.action}
        method="post"
        msCodeFormNoRedirect
        className="w-clearfix"
        data-wf-page-id={c.pageId}
        data-wf-element-id={c.elementId}
        aria-label="Contact Us"
      >
        <input
          className={c.inputClassName}
          maxLength="256"
          name="Name"
          data-name="Name"
          placeholder="Name"
          type="text"
          id="Name-6"
          required
        />
        <input
          className={c.inputClassName}
          maxLength="256"
          name="Company-Name"
          data-name="Company Name"
          placeholder="Company"
          type="text"
          id="Company-Name"
          required
        />
        <input
          className={c.inputClassName}
          maxLength="256"
          name="Email"
          data-name="Email"
          pattern="((?!@(gmail.com|yahoo.com|hotmail.com|mail.ru|yandex.ru|bk.ru|icloud.com|list.ru)).)*"
          placeholder="Business Email"
          title="Enter Business Email"
          type="email"
          id="Email-5"
          required
        />
        <input
          className={c.inputClassName}
          maxLength="256"
          name="Phone"
          data-name="Phone"
          placeholder="Phone"
          type="tel"
          id="Phone"
          required
        />
        <textarea
          id="Message-4"
          name="Message"
          maxLength="5000"
          data-name="Message"
          placeholder={c.messagePlaceholder}
          required
          className="global-textarea w-input"
        ></textarea>
        <div className="w-embed w-script"> </div>
        <div className="w-embed">
          <input
            type="hidden"
            id="current-page"
            data-name="WPAGE"
            value={c.pageUrl}
          />
          <input
            type="checkbox"
            name="custom-field"
            style="display:none"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>
        <input
          type="submit"
          data-wait="Please wait..."
          id="Contact-us"
          className="global-btn-primary align-right btn-width w-button"
          value={c.submitLabel}
        />
        <div className="contactus_form_policy">
          By submitting the form you agree to
          <a href="/legal/privacy-policy" rel="nofollow" target="_blank">
            Privacy Policy
          </a>
          and
          <a href="/legal/cookie-policy" rel="nofollow" target="_blank">
            Cookie Policy
          </a>
          .
        </div>
        <input type="hidden" name="hutk" value />
        <input type="hidden" name="ipAddress" value />
        <input type="hidden" name="pageUri" value />
        <input type="hidden" name="pageId" value />
        <input type="hidden" name="pageName" value />
      </form>
      <div
        className="message-box w-form-done"
        tabIndex="-1"
        role="region"
        aria-label="Contact Us success"
      >
        <div>{c.successMessage}</div>
      </div>
      <div
        className="w-form-fail"
        tabIndex="-1"
        role="region"
        aria-label="Contact Us failure"
      >
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
}

/**
 * Contact form wrapped in a full page section with header
 */
export function ContactSection(config: ContactSectionConfig = {}): string {
  const title = config.title ?? "contact us";
  const subtitle = config.subtitle ?? "Get in touch with us today!";

  return (
    <div id="contactus-section" className="contact-section">
      <h2 className="global-2header">{title} </h2>
      <p className="paragraph-3">{subtitle} </p>
      <div id="get_in_touch" className="getintouch-form">
        {ContactForm(config)}
      </div>
    </div>
  );
}

/**
 * Success message with links - for home page style
 */
export function ContactSuccessWithLinks(): string {
  return (
    <Fragment>
      <div>
        <span>
          <span>
            <strong>Thank you! </strong> <br />
            We'll be in touch soon. <br /> <br />
            In the meantime, you can: <br />
          </span>
        </span>
      </div>
      <div className="thankyou-links">
        Read our <a href="/casestudies">Case Studies </a> and see some of the
        work we've done for our clients. <br /> <br />
        Learn how <a href="/aidbox">Aidbox </a> can help you handle all your
        healthcare data the right way. <br /> <br />
        Visit our <a href="/blog">Blog </a> for the latest FHIR and digital
        health stories and resources.
      </div>
    </Fragment>
  );
}
