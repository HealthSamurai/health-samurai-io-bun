// Subscribe section with newsletter form

import { Component } from "../../lib/component";

export function SubscribeSection(): string {
  return (
    <Component name="pages/index/SubscribeSection" className="subscribe-section">
      <div className="subscribe-container">
        <div id="generic-subscribe-form" className="subscribe-form w-form">
          <form
            id="wf-form-Subscribe-Form"
            name="wf-form-Subscribe-Form"
            data-name="Subscribe Form"
            action="https://health-samurai.us19.list-manage.com/subscribe/post?u=1c57d4d1b1aaffde230e81f34&amp;id=0197cbafab"
            method="post"
            className="subscribe-form-container"
            aria-label="Subscribe Form"
          >
            <div className="w-embed">
              <input
                type="hidden"
                id="current-page"
                data-name="WPAGE"
                value="https://www.health-samurai.io/"
              />
              <input type="hidden" name="tags" value="6237144" />
            </div>
            <h3 className="subscribe-title">
              Never miss a thing <br />
              <span className="text-span-44">Subscribe for more content! </span>
            </h3>
            <div className="subscribe-name-container">
              <label htmlFor="FNAME" className="subscribe-label">
                Name
              </label>
              <input
                className="subscribe-input w-input"
                maxLength="256"
                name="FNAME"
                data-name="FNAME"
                placeholder
                type="text"
                id="FNAME"
                required
              />
            </div>
            <div className="subscribe-email-container">
              <label htmlFor="EMAIL" className="subscribe-label">
                Email
              </label>
              <input
                className="subscribe-input w-input"
                maxLength="256"
                name="EMAIL"
                data-name="EMAIL"
                placeholder
                type="email"
                id="EMAIL"
                required
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="subscribe-btn w-button"
              value="Subscribe"
            />
          </form>
          <div
            className="w-form-done"
            tabIndex="-1"
            role="region"
            aria-label="Subscribe Form success"
          >
            <div>Thank you! Your submission has been received! </div>
          </div>
          <div
            className="w-form-fail"
            tabIndex="-1"
            role="region"
            aria-label="Subscribe Form failure"
          >
            <div>Oops! Something went wrong while submitting the form. </div>
          </div>
        </div>
      </div>
    </Component>
  );
}
