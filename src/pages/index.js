import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function News() {
  return (
    <section class="news">
      <h2 class="news">Latest Activity</h2>
      <div class="row">
        <div class="col col--4">
          <div class="card-demo">
            <div class="card">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Image alt text"
                  title="Logo Title Text 1"
                />
              </div>
              <div class="card__body">
                <h4>Quaco Lighthouse</h4>
                <small>
                  The Quaco Head Lighthouse is a well maintained lighthouse
                  close to St. Martins. It is a short, beautiful walk to the
                  lighthouse along the seashore. The Quaco Head Lighthouse is a
                  well maintained lighthouse close to St. Martins.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--4">
          <div class="card-demo">
            <div class="card">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Image alt text"
                  title="Logo Title Text 1"
                />
              </div>
              <div class="card__body">
                <h4>Quaco Lighthouse</h4>
                <small>
                  The Quaco Head Lighthouse is a well maintained lighthouse
                  close to St. Martins. It is a short, beautiful walk to the
                  lighthouse along the seashore.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--4">nothing</div>
      </div>
    </section>
  );
}

function Competition() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 centered">
          <h2 class="">COMPETITION</h2>
          <p class="text--justify">
            Take your skill to the next level with challenges that put you up
            against the best in the field. Apply your skills building defensive
            networks, or be offensive and attack them. Our CCDC team will train
            you from the ground up.
          </p>
        </div>
        <div class="col col--6">
          <img src={useBaseUrl("img/nationals.jpg")} alt="Competition" />
        </div>
      </div>
    </section>
  );
}

function Event() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6">
          <img src={useBaseUrl("img/tech_symposium.jpg")} alt="Event" />
        </div>
        <div class="col col--6 centered">
          <h2 class="">EVENTS</h2>
          <p class="text--justify">
            We hold basic and advanced weekly workshops cover topics such as
            using Linux, internet of things, and network forensics, an annual
            on-campus, student-run conference, Tech Symposium, and a quarterly
            LAN party, Frag Nite, held in conjunction with CPP E-Sports.
          </p>
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 centered">
          <h2 class="">MEMBERSHIP</h2>
          <p class="text--justify">
            If you like learning new topics, solving problems, breaking things,
            being with fellow hackers, get involved! Our membership provides you
            with resources to enhance your college experience and your
            professional outlook
          </p>
        </div>
        <div class="col col--6">
          <img src={useBaseUrl("img/membership.jpg")} alt="Membership" />
        </div>
      </div>
    </section>
  );
}

function Meeting() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 section-img">
          <img src={useBaseUrl("img/meeting.png")} alt="Meetings" />
        </div>
        <div class="col col--6 centered">
          <h2 class="">MEETINGS</h2>
          <p class="text--justify">
            Come to our weekly meetings where we present and discuss topics
            focusing on cyber security, networking, system administration, and
            automation. We host peers and industry leaders in the field to give
            our members an insight to the professional world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary hero-banner")}>
        <div className="container hero-text">
          <div class="row">
            <div class="col col--6 centered">
              {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
              {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
              <img
                src={useBaseUrl("img/logo_words_white.png")}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("about/")}
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div class="col col--6">
              <a
                class="twitter-timeline"
                data-lang="en"
                data-width="300"
                data-height="450"
                data-theme="dark"
                href="https://twitter.com/calpolyswift?ref_src=twsrc%5Etfw"
              >
                Tweets by calpolyswift
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="section section-background-color">
          <section class="container">
            <Competition />
          </section>
        </div>
        <div class="section">
          <section class="container">
            <Event />
          </section>
        </div>
        <div class="section section-background-color">
          <section class="container">
            <Membership />
          </section>
        </div>
        <div class="section">
          <section class="container">
            <Meeting />
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
