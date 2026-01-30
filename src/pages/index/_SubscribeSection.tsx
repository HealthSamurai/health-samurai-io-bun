// Subscribe section with newsletter form

export function SubscribeSection(): string {
  return (
    <div id="subscribe-section" className="subscribe-section">
      <div className="subscribe-container">
        <div id="generic-subscribe-form" className="subscribe-form w-form">
          <form
            id="wf-form-Subscribe-Form"
            name="wf-form-Subscribe-Form"
            data-name="Subscribe Form"
            action="https://health-samurai.us19.list-manage.com/subscribe/post?u=1c57d4d1b1aaffde230e81f34&amp;id=0197cbafab"
            method="post"
            data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/979ea0e1-b06b-43b8-bfb0-a8cdea0c0673"
            className="subscribe-form-container"
            data-wf-page-id="65e700209ec24725504599eb"
            data-wf-element-id="d3ea4deb-538d-b400-b47c-69a41481cce8"
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
                data-wfhsfieldname="name"
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
                data-wfhsfieldname="email"
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
            <input type="hidden" name="hutk" value />
            <input type="hidden" name="ipAddress" value />
            <input type="hidden" name="pageUri" value />
            <input type="hidden" name="pageId" value />
            <input type="hidden" name="pageName" value />
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
    </div>
  );
}
