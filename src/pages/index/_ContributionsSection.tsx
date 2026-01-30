// FHIR Contributions section with community, open source, events, and presentations

import { Component } from "../../lib/component";

export function ContributionsSection(): string {
  return (
    <Component name="pages/index/ContributionsSection" className="py-12">
      <div class="container">
        <h2 class="text-4xl md:text-5xl font-black leading-tight mb-6">Our FHIR Contributions</h2>
        <a
          rel="nofollow"
          href="https://www.healthdevhub.com/"
          target="_blank"
          className="home-contr-card-community w-inline-block"
        >
          <div className="columns-34 w-row">
            <div className="w-col w-col-6 w-col-stack">
              <h4 className="home-contr-os-subtitle-community-copy">
                &lt;HD/&gt;
              </h4>
              <h4 className="home-contr-os-h4-community">HealthDevHub </h4>
              <div className="home-contr-os-desc-community">
                A private community for CTOs, VPs, solutions architects, and
                senior engineers in digital health.
              </div>
              <div className="home-contr-os-link-community">
                Join the community
              </div>
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                loading="lazy"
                alt="Right Arrow Icon "
                className="image-77"
              />
            </div>
            <div className="column-115 w-col w-col-6 w-col-stack">
              <ul role="list" className="list-7">
                <li className="home-community-banner-item">
                  <div>
                    <strong className="bold-text-69">Discussions </strong>.
                    <span className="home-community-banner-greytext">
                      Find answers and share ideas
                    </span>
                  </div>
                </li>
                <li className="home-community-banner-item">
                  <div>
                    <strong className="bold-text-70">Networking </strong>.
                    <span className="home-community-banner-greytext">
                      Expand your network
                    </span>
                  </div>
                </li>
                <li className="home-community-banner-item">
                  <div>
                    <strong className="bold-text-71">News </strong>.
                    <span className="home-community-banner-greytext">
                      Gain access to relevant materials
                    </span>
                  </div>
                </li>
                <li className="home-community-banner-item">
                  <div>
                    <strong className="bold-text-72">Meetups </strong>.
                    <span className="home-community-banner-greytext">
                      Join regular community events
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </a>
        <div className="home-open-source w-row">
          <div className="column-37 w-col w-col-4 w-col-stack">
            <a
              href="/fhir-database"
              className="home-contr-card-col1 w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c40627dd6b53e06e1b039c3_fbase-logo.svg"
                alt="fhirbase-logo"
                width="70"
                loading="lazy"
                className="home-contr-os-logo"
              />
              <div className="home-contr-os-desc">
                <strong>Fhirbase </strong> is an open source toolkit for storing
                and working with FHIR data, built on top of PostgreSQL
              </div>
            </a>
          </div>
          <div className="column-38 w-col w-col-4 w-col-stack">
            <a href="/opensource" className="draft-contr-os-second w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c40629230dc10619b49ac4f_fhirjs-logo.svg"
                alt="fhirjs-logo"
                width="70"
                loading="lazy"
                className="home-contr-os-logo"
              />
              <div className="home-contr-os-desc">
                <strong>FHIR.js </strong> is an open source reference
                implementation of a FHIR client in JavaScript for Node.js,
                AngularJS, and YUI
              </div>
            </a>
          </div>
          <div className="column-39 w-col w-col-4 w-col-stack">
            <a href="/opensource" className="draft-contr-os-second w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c4062a39300276e08ea1253_fhirschema-logo.svg"
                alt="fhir schema logo"
                width="70"
                loading="lazy"
                className="home-contr-os-logo"
              />
              <div className="home-contr-os-desc">
                <strong>FHIR.Schema </strong> is an open source library for
                description of FHIR StructureDefinition resources by means of
                JSON Schema.
              </div>
            </a>
          </div>
        </div>
        <div className="home-events w-row">
          <div className="column-34 w-col w-col-6 w-col-stack">
            <a
              rel="nofollow"
              href="https://www.health-samurai.io/events/fhir-camp-2025"
              target="_blank"
              className="home-contr-conference w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406461d6b53e4a20b03cba_fhirstarter.svg"
                alt="fhirstarter-logo"
                width="70"
                loading="lazy"
                className="fhirstarter-logo"
              />
              <div className="home-contr-os-desc">
                <strong>FHIR Camp </strong>. We are the organizers of the
                first-ever informal conference in Europe dedicated to the HL7®
                FHIR® standard.
              </div>
            </a>
          </div>
          <div className="column-35 w-col w-col-6 w-col-stack">
            <a
              rel="nofollow"
              href="https://www.meetup.com/HealthDev/"
              target="_blank"
              className="home-contr-meetup w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406889d6b53e0560b040a1_meetupsf.svg"
                alt="fhirmeetup-sanfrancisco-logo"
                width="70"
                loading="lazy"
                className="meetup-us-logo"
              />
              <div className="home-contr-os-desc">
                <strong>FHIR Meetups </strong> in San Francisco, CA <br />
                <span className="draft-contr-subdesc">
                  Powered by Health Samurai
                </span>
              </div>
            </a>
            <a
              href="https://health-samurai.timepad.ru/"
              target="_blank"
              className="home-contr-meetup w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5c406899c55710355ff080ee_meetupeu.svg"
                alt="fhirmeetup-easterneurope-logo"
                width="70"
                loading="lazy"
                className="meetup-ee-logo"
              />
              <div className="home-contr-os-desc">
                <strong>FHIR Meetups </strong> in Eastern Europe <br />
                <span className="draft-contr-subdesc">
                  Powered by Health Samurai
                </span>
              </div>
            </a>
          </div>
        </div>
        <h4 className="heading-52">Our Presentations: </h4>
        <div className="home-contr-articles-section w-row">
          <div className="home-presentations w-col w-col-6 w-col-stack">
            <a
              rel="nofollow"
              href="https://www.youtube.com/watch?v=UC0zGKcAXnA&list=PLEOOqZS1NtwYgCh2VvuYSzI9A-FBfLGBj"
              target="_blank"
              className="home-list-item w-inline-block"
            >
              <div className="home-event-name">
                HL7 FHIR Applications Roundtable 2018, Sep 27-28, 2018
                <br />
              </div>
              <div className="home-event-presentation">
                FHIR-First Development for Healthcare based on Aidbox
                <br />
              </div>
              <div className="home-event-speaker">
                by Nikolay Ryzhikov <br />
              </div>
            </a>
            <a
              rel="nofollow"
              href="https://www.youtube.com/watch?v=j1JYWzo-JvI&index=5&list=PLEOOqZS1NtwYgCh2VvuYSzI9A-FBfLGBj"
              target="_blank"
              className="home-list-item w-inline-block"
            >
              <div className="home-event-name">
                HL7 FHIR Applications Roundtable 2017, March 7-8, 2017
                <br />
              </div>
              <div className="home-event-presentation">
                Aidbox <br />
              </div>
              <div className="home-event-speaker">
                by Pavel Smirnov <br />
              </div>
            </a>
          </div>
          <div className="home-articles w-col w-col-6 w-col-stack">
            <a
              rel="nofollow"
              href="http://wiki.hl7.org/index.php?title=201809_FHIR_Storage_and_Analytics"
              target="_blank"
              className="home-list-item w-inline-block"
            >
              <div className="home-event-name">
                FHIR Connectathon 19, baltimore, SEP 29-30, 2018 <br />
              </div>
              <div className="home-event-presentation">
                SQL on FHIR <br />
              </div>
              <div className="home-event-speaker">
                by Nikolay Ryzhikov &amp; Mikhail Lapshin <br />
              </div>
            </a>
            <a
              rel="nofollow"
              href="https://vimeopro.com/firelyteam/hl7-fhir-developer-days-2016-amsterdam/video/192195560"
              target="_blank"
              className="home-list-item w-inline-block"
            >
              <div className="home-event-name">
                HL7® FHIR® DevDays 2018, amsterdam, 2016 <br />
              </div>
              <div className="home-event-presentation">
                FHIR and Swagger <br />
              </div>
              <div className="home-event-speaker">
                by Nikolay Ryzhikov and Grahame Grieve <br />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Component>
  );
}
