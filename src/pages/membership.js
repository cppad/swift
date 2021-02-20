import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import styles from "./styles.module.css";

function Steps() {
  return (
    <div class="container">
      <div class="row">
        <div class="col centered padding--lg">
          <h2>STEP 1</h2>
          <p>Fill out the Google Form</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--gray-dark button-round button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("about/")}
            >
              Google Form
            </Link>
          </div>
        </div>
        <div class="col centered padding--lg">
          <h2>STEP 1</h2>
          <p>Fill out the Google Form</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--gray-dark button-round button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("about/")}
            >
              Google Form
            </Link>
          </div>
        </div>
        <div class="col centered padding--lg">
          <h2>STEP 1</h2>
          <p>Fill out the Google Form</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--gray-dark button-round button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("about/")}
            >
              Google Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <div class="container">

    </div>
  )
}

function Description() {
  return (
    <div class="container">
      {/* <div className={styles.description}>  */}
      <div className={clsx(styles.description, "margin-centered")}> 
        <p className={styles.topSpacing}>
          <span className={styles.firstWord}>SWIFT</span> is a way of moving your college career to the next level.
          Joining is a three step process, but it should not take more then 10
          minutes. Membership allows you to participate in events and
          competitions, vote in elections and much more!
        </p>
        <p className={styles.topSpacing}>
          With the help of our club resources, you can make your mark on the
          cyber security field. Join us and meet other students that are
          talented and passionate about cybersecurity.
        </p>
        <p className={styles.topSpacing}>
          Membership is per year and is available to all Cal Poly Students and
          active Cal State Students of any major. Membership lasts for the
          entire academic year.
        </p>
      </div>
    </div>
  );
}

function Quote1() {
  return (
    <div class="container">

    </div>
  )
}

function Quote2() {
  return (
    <div class="container">

    </div>
  )
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
            fontSize: '20px',
          }}>
          <h1>Join the SWIFT Community</h1>
        </div>
        <main className={clsx("container")}>
          <Steps />
          <Description />
          <div className={clsx("col col--6")}>
            <Quote1 />
            <Quote2 />
          </div>
        </main>
      </Layout>
    );
  }
  
export default Membership;