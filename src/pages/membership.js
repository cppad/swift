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
        <div class="col centered ">
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
        <div class="col centered ">
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
        <div class="col centered ">
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
          {/* <Description />
          <div className={clsx("col col--6")}>
            <Quote1 />
            <Quote2 />
          </div> */}
        </main>
      </Layout>
    );
  }
  
export default Membership;