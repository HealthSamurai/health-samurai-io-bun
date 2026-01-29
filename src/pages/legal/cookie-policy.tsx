import { Fragment } from "../../lib/jsx-runtime";

export const metadata = {
  title: "Cookie Policy",
  description:
    'This Cookie Policy explains how Health Samurai Inc. ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites at https://www.health-samurai.io/, ("Websites") use our SaaS or downloadable products ("Products") and utilize associated services (Services).',
};

export default function CookiePolicy(): string {
  return (
    <Fragment>
      <section className="legal-content">
        <div className="legal-container">
          <h1 className="legal-title">Cookie Policy</h1>
          <p className="legal-updated">Last updated June 10, 2021</p>

          <p>
            This Cookie Policy explains how Health Samurai Inc. ("Company",
            "we", "us", and "our") uses cookies and similar technologies to
            recognize you when you visit our websites at{" "}
            <a href="https://www.health-samurai.io/" className="legal-link">
              https://www.health-samurai.io/
            </a>
            , ("Websites") use our SaaS or downloadable products ("Products")
            and utilize associated services (Services). It explains what these
            technologies are and why we use them, as well as your rights to
            control our use of them.
          </p>

          <p>
            In some cases, we may use cookies to collect personal information,
            or that becomes personal information if we combine it with other
            information.
          </p>

          <h2 className="legal-h2">What are cookies?</h2>

          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website/application.
          </p>

          <p>
            Cookies set by Health Samurai Inc. are called "first party cookies".
            Cookies set by parties other than Health Samurai Inc. are called
            "third party cookies". Third party cookies enable third party
            features or functionality to be provided on or through the website
            (e.g. analytics).
          </p>

          <h2 className="legal-h2">What do you use cookies for?</h2>

          <p>
            Health Samurai uses several types of cookies to improve user and
            client experience.
          </p>

          <ul className="legal-list">
            <li>
              <strong>Security.</strong> We use security cookies for user
              authentication, fraud prevention, and protect users from
              unauthorized parties.
            </li>
            <li>
              <strong>Functionality.</strong> We use functionality cookies to
              remember user preferences like the user's choice of language,
              product optimizations that help maintain and improve service, and
              maintain information relating to a user's session.
            </li>
            <li>
              <strong>Analytics/Performance.</strong> We use cookies to help us
              understand how our Websites/Products/Services perform and to
              improve our Websites/Products/Services.
            </li>
          </ul>

          <h2 className="legal-h2">How can I control cookies?</h2>

          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences.
          </p>

          <p>
            You may set or amend your web browser controls to accept or refuse
            cookies. As the means by which you can refuse cookies through your
            web browser controls vary from browser to browser, you should visit
            your browser's help menu for more information.
          </p>

          <p>
            In addition, most advertising networks offer you a way to opt out of
            targeted advertising. If you would like to learn more about it,
            please visit{" "}
            <a href="http://www.aboutads.info/choices/" className="legal-link">
              http://www.aboutads.info/choices/
            </a>{" "}
            or{" "}
            <a href="http://www.youronlinechoices.com/" className="legal-link">
              http://www.youronlinechoices.com
            </a>
            .
          </p>

          <h2 className="legal-h2">
            How often will you update this Cookie Policy?
          </h2>

          <p>
            We may update this Cookie Policy from time to time to reflect, for
            example, changes to the cookies we use or for other operational,
            legal or regulatory reasons. Please re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related
            technologies.
          </p>

          <p>
            The date at the top of this Cookie Policy indicates when it was last
            updated.
          </p>

          <p>
            <strong>Where can I get further information?</strong>
          </p>

          <p>
            If you have any questions about our use of cookies or other
            technologies, please email us at{" "}
            <a
              href="mailto:hello@health-samurai.io?subject=Cookies%20Policy"
              className="legal-link"
            >
              hello@health-samurai.io
            </a>{" "}
            or contact us by mail to:
          </p>

          <p className="legal-address">
            <strong>Health Samurai Inc.</strong>
            <br />
            3415 S Sepulveda Blvd Ste 1000
            <br />
            Los Angeles, CA 90034
            <br />
            United States
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:hello@health-samurai.io?subject=Cookies%20Policy"
              className="legal-link"
            >
              hello@health-samurai.io
            </a>
          </p>

          <h2 className="legal-h2">Final provisions</h2>

          <p>
            By clicking "Confirm" or "I Agree", as well as by continued use of
            our services/products, you confirm that you fully understand the
            content of this Cookie Policy.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
