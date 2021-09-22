import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import styles from "./styles.module.css";
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons';

function Description() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <div class="container">
        <div class={clsx(styles.sectionFixed, "margin-centered padding--xl")}>
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
              CPTC is a national red teaming competition that challenges students to penetrate and attack by exploiting vulnerabilities 
              in order to extract as much damaging information as possible. SWIFT provides training 
              in both areas of securing and penetrating corporations; 
              with an understanding of both practices, we hope students will thrive in the competition 
              as well as the real world. SWIFT has been a huge supporter in all cybersecurity competitions, 
              absorbing the same expenses for our CPTC competitors as CCDC.
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
              CCDC is a national blue teaming competition that challenges student to maintain 
              and protect a simulated corporation. CCDC challenges a variety of skills, 
              maintaining a company’s day-to-day operations, managing networks, 
              and hardening main services in Linux and Windows. 
              Many industries recognize CCDC as real world technical experience. 
              To prepare, SWIFT invites all students for weekly CCDC training starting summer 
              till the end of nationals.
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
          paddingTop: '100px'
            // height: '25vh',
        }}>
        <h1>Cybersecurity Competitions</h1>
      </div>
      <main>
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