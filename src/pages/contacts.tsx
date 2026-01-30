// Generated from Webflow HTML (1:1 JSX)
// Source: /Users/niquola/health-samurai/webflow/snapshots/contacts.html

import { Fragment } from "../lib/jsx-runtime";

export const metadata = {
  title: "Health Samurai: Contact Us",
  description:
    "Get in touch with us today. Learn how our FHIR backend, Aidbox, simplifies healthcare software development.",
};

export default function ContactsWebflow(): string {
  return (
    <Fragment>
      <div className="contacts-headersection height-fix">
         
        <div className="slider-width">
           
          <h1 className="global-2header">
            We're ready to lead you to the future of health technology 
          </h1> 
        </div> 
      </div> 
      <div className="contacts-section">
         
        <div className="hide w-embed w-iframe">
           
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.159478662168!2d-118.40129898445153!3d33.85978063529473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b37bfeede083%3A0x1dbc71562c4f8579!2zODMyIEhlcm1vc2EgQXZlLCBIZXJtb3NhIEJlYWNoLCBDQSA5MDI1NCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1513762541698"
            width="100%"
            height="450"
            frameBorder="0"
            style="border:0"
            allowFullScreen
          ></iframe> 
        </div> 
        <div className="contact-row w-row">
           
          <div className="usoffice-wrapper w-col w-col-6 w-col-stack">
             
            <h2 className="global-2header office-header"></h2> 
            <p className="paragraph-3 contacts-fix">
              Health Samurai is a leading provider of FHIR backend solutions and
              full stack health IT services. Our team is ready to answer your
              questions and guide you to the right direction. <br /> <br />
              Reach out to us and: <br /> <br /> 
              <strong>See our software in action: </strong> Request a customized
              Aidbox product demo and discover how you can take your healthcare
              solutions to the next level. <br /> <br /> 
              <strong>Move toward interoperability: </strong> Let us help you
              future-proof your solutions with the FHIR standard. <br /> <br /> 
              <strong>Discover our services: </strong> Tell us about your
              project needs and find out how we can help you build, integrate,
              and implement your healthcare solutions. 
            </p> 
          </div> 
          <div className="contacts-right-panel w-col w-col-6 w-col-stack">
             
            <h2 className="global-2header office-header">CONTACT US </h2> 
            <p className="paragraph-3 contact-form-fix">
              Get in touch with us today! 
            </p> 
            <div msCodeFormNoRedirect className="w-form">
               
              <form
                id="wf-form-Contact-Us-Form"
                name="wf-form-Contact-Us-Form"
                data-name="Contact Us Form"
                action="https://contact-us.d-chistoforov.workers.dev/"
                method="post"
                msCodeFormNoRedirect
                className="w-clearfix"
                data-wf-page-id="65e700209ec2472550459ade"
                data-wf-element-id="2870111f-8f51-3748-baeb-b563b59e2a4d"
                aria-label="Contact Us Form"
              >
                 
                <input
                  className="global-textinput contact-us-fix w-input"
                  maxLength="256"
                  name="Name"
                  data-name="Name"
                  placeholder="*Name"
                  type="text"
                  id="Name"
                  required
                /> 
                <input
                  className="global-textinput contact-us-fix w-input"
                  maxLength="256"
                  name="Company-Name"
                  data-name="Company Name"
                  placeholder="*Company"
                  type="text"
                  id="Company-Name"
                  required
                /> 
                <input
                  className="global-textinput contact-us-fix w-input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  pattern="((?!@(gmail.com|yahoo.com|hotmail.com|mail.ru|yandex.ru|bk.ru|icloud.com|list.ru)).)*"
                  placeholder="*Business Email"
                  title="Enter a valid business email"
                  type="email"
                  id="Email-4"
                  required
                /> 
                <input
                  className="global-textinput contact-us-fix w-input"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder="*Phone"
                  type="tel"
                  id="Phone"
                  required
                /> 
                <textarea
                  id="Message-3"
                  name="Message"
                  maxLength="5000"
                  data-name="Message"
                  placeholder="How can we help?"
                  required
                  className="global-textarea w-input"
                ></textarea> 
                <div className="contactus_form_policy">
                  By submitting the form you agree to 
                  <a href="/legal/privacy-policy" target="_blank">
                    Privacy Policy 
                  </a>
                   and  
                  <a href="/legal/cookie-policy" target="_blank">
                    Cookie Policy 
                  </a>
                  . 
                </div> 
                <div className="w-embed">
                   
                  <input
                    type="hidden"
                    id="current-page"
                    data-name="WPAGE"
                    value="https://www.health-samurai.io/contacts"
                  />
                  <input
                    type="checkbox"
                    name="custom-field"
                    style="display:none"
                    tabIndex="-1"
                    autoComplete="off"
                  /> 
                </div> 
                <div className="w-embed w-script"> </div> 
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="Contact-us"
                  className="global-btn-primary align-right btn-width w-button"
                  value="Submit"
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
                aria-label="Contact Us Form success"
              >
                 
                <div>Thank you! We'll be in touch soon. </div> 
              </div> 
              <div
                className="w-form-fail"
                tabIndex="-1"
                role="region"
                aria-label="Contact Us Form failure"
              >
                 
                <div>
                  Oops! Something went wrong while submitting the form. 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div>
      <div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;">
         
        <div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div> 
        <div style="z-index: 2000000000; position: relative;"> </div> 
      </div>
    </Fragment>
  );
}
