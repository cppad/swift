import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons'

function CoreValues() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--4 centered">
            <FontAwesomeIcon icon={faHandshake} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>Networking</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            {/* <FontAwesomeIcon icon={faShieldAlt} class={clsx("core-icons")}/> */}
            <FontAwesomeIcon icon={faShieldAlt} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>Cybersecurity</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
            <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>System Admin</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Competition() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class="">Competition</h2>
            <p>
              Take your skill to the next level with challenges that put you up
              against the best in the field. Apply your skills building defensive
              networks, or be offensive and attack them. Our CCDC team will train
              you from the ground up.
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/trophies.jpg")} alt="Competition" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Event() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/tech_symposium.jpg")} alt="Event" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class="">Events</h2>
            <p>
              We hold basic and advanced weekly workshops which cover topics such as
              using Linux, internet of things, and network forensics, an annual
              on-campus, student-run conference, Tech Symposium, and a quarterly
              LAN party, Frag Nite, held in conjunction with CPP E-Sports.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Membership() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class="">Membership</h2>
            <p>
              If you like learning new topics, solving problems, breaking things,
              being with fellow hackers, get involved! Our membership provides you
              with resources to enhance your college experience and your
              professional outlook
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/membership.jpg")} alt="Membership" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Meeting() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/meeting.png")} alt="Meetings" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class="">Meetings</h2>
            <p>
              Come to our weekly meetings where we present and discuss topics
              focusing on cyber security, networking, system administration, and
              automation. We host peers and industry leaders in the field to give
              our members an insight to the professional world of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
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
      {/* hero hero--primary hero-banner opacity*/}
      <header class={clsx("hero-container")}>
        <img
          class="hero-image"
          src={useBaseUrl('img/banner.jpg')}
          alt="Image alt text"
          title="Logo Title Text 1"
        />
        <div class="container hero-text">
          <div class="row">
            <div class="col col--12 centered hero-banner">
              {/* <h1 class="hero__title">{siteConfig.title}</h1> */}
              <img
                src={useBaseUrl("img/logo_words_white.png")}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
              {/* <p class="hero__subtitle">{siteConfig.tagline}</p> */}
              <p class="hero__subtitle">UNDER CONSTRUCTION</p>
              <div class={styles.buttons}>
                <Link
                  class={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("about/")}
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <CoreValues />
        <Competition />
        <Event />
        <Membership />
        <Meeting />
      </main>
    </Layout>
  );
}

export default Home;
