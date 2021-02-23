import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import styles from "./styles.module.css";
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons';

function ThreeColumn() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--4 centered">
            <FontAwesomeIcon icon={faHandshake} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>???</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            <FontAwesomeIcon icon={faShieldAlt} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>???</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>???</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Description() {
  return (
    <div class={styles.sectionPadding, "section-background-color"}>
      <div class="container">
        <div class={clsx("margin-centered padding--xl")}>
          <p>
            <span class={styles.firstWord}>Students</span> with an Interest in
            the Future of Technology is the premier information technology and
            security organization at Cal Poly Pomona. We aim to inspire and
            create a generation of students who are aware and capable of dealing
            with the dynamic landscape of information security, cyber security,
            and information technology. Together we can build a secure future
            through training, experience, and education.
          </p>
        </div>
      </div>
    </div>
  );
}

function CPTC() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="https://globalcptc.org/">CPTC</a></h2>
            <p class="text--justify">
              Take your skill to the next level with challenges that put you up
              against the best in the field. Apply your skills building defensive
              networks, or be offensive and attack them. Our CCDC team will train
              you from the ground up.
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/cptc.jpg")} alt="Competition" />
          </div>
        </div>
      </section>
    </div>
  );
}

function CCDC() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/ccdc.jpg")} alt="Event" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="http://www.nationalccdc.org/">CCDC</a></h2>
            <p class="text--justify">
              We hold basic and advanced weekly workshops cover topics such as
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

function NCL() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="">National Cyber League</a></h2>
          </div>
          <div class="col col--7">
            <p class="text--justify">
              If you like learning new topics, solving problems, breaking things,
              being with fellow hackers, get involved! Our membership provides you
              with resources to enhance your college experience and your
              professional outlook
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hive() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--7">
            <p class="text--justify">
              Come to our weekly meetings where we present and discuss topics
              focusing on cyber security, networking, system administration, and
              automation. We host peers and industry leaders in the field to give
              our members an insight to the professional world of technology.
            </p>
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="http://hivestorm.org/rules.html">Hivestorm</a></h2>
          </div>
        </div>
      </section>
    </div>
  );
}


function Membership() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '18vh',
        }}>
        <h1>Cybersecurity Competitions</h1>
      </div>
      <main>
        <ThreeColumn />
        <Description />
        <CPTC />
        <CCDC />
        <NCL />
        <Hive />
      </main>
    </Layout>
  );
}
  
export default Membership;