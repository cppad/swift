import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import styles from "./styles.module.css";

function Steps() {
  return (
    <div className={styles.sectionPadding}>
      <div className="container">
        <div className="row">
          <div className="col centered padding--lg">
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
          <div className="col centered padding--lg">
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
          <div className="col centered padding--lg">
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
    </div>
  )
}

function Benefits() {
  return (
    <div className={clsx(styles.sectionPadding, "section-background-color")}>
      <div className="container">
        <div className={"row"}>
          <div className={"col col--4 centered"}>
            <h2>Community</h2>
            <div>
              <p>- Be part of a large community of students spanning over 20 years.</p>
              <p>- Join a Discord server with 700+ members of current students, alumni, and mentors.</p>
            </div>
          </div>
          <div className={"col col--4 centered"}>
          <img src={useBaseUrl("img/logo_only_white.png")} alt="Event" />
          </div>
          <div className={"col col--4 centered"}>
            <h2>???????</h2>
            <div>
              <p>- Be part of a large community of students spanning over 20 years.</p>
              <p>- Join a Discord server with 700+ members of current students, alumni, and mentors.</p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col col--4 centered"}>
            <h2>Giveaways</h2>
            <div>
              <p>- Free food at meetings</p>
              <p>- Free T-Shirts, Stickers, Webcam Covers, and Other Swag</p>
            </div>
          </div>
          <div className={"col col--4 centered"}>
            <h2>Events</h2>
            <div>
              <p>- Access and discounts to conferences and events</p>
              <p>- Access to workshops and events throughout the year </p>
              <p>- Free attendance to Tech Symposium</p>
              <p>- Go on tours to organizations focusing on System Administration and Cyber Security</p>
            </div>
          </div>
          <div className={"col col--4 centered"}>
            <h2>Competition</h2>
            <div>
              <p>Participate in competitions:</p>
              <p>- Participate in Collegiate Penetration Testing Competition (CPTC)</p>
              <p>- Participate in Collegiate Cyber Defense Competition (CCDC)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Description() {
  return (
    <div className={styles.sectionPadding}>
      <div className="container">
        {/* <div className={styles.description}>  */}
        <div className={clsx(styles.description, "margin-centered padding--lg")}>
          <p>
            <span className={styles.firstWord}>SWIFT</span> is a way of moving your college career to the next level.
            Joining is a three step process, but it should not take more then 10
            minutes. Membership allows you to participate in events and
            competitions, vote in elections and much more!
          </p>
          <p>
            With the help of our club resources, you can make your mark on the
            cyber security field. Join us and meet other students that are
            talented and passionate about cybersecurity.
          </p>
          <p>
            Membership is per year and is available to all Cal Poly Students and
            active Cal State Students of any major. Membership lasts for the
            entire academic year.
          </p>
        </div>
      </div>
    </div>
  );
}

function Quotes() {
  return (
    <div className={clsx(styles.sectionPadding, "section-background-color")}>
      <div className="container">
        <div className="row padding--lg">
          <div className={"col col--6 centered"}>
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy foster
                collaborative thinking to further the overall value proposition.
                Organically grow the holistic world view of disruptive innovation
                via workplace diversity and empowerment.
              </p>
              <p className={"text--right text--bold"}>- John Doe, Alumni</p>
            </div>
          </div>
          <div className={"col col--6 centered"}>
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy foster
                collaborative thinking to further the overall value proposition.
                Organically grow the holistic world view of disruptive innovation
                via workplace diversity and empowerment.
              </p>
              <p className={"text--right text--bold"}>- John Doe, CS 3rd Year</p>
            </div>
          </div>
        </div>
      </div>
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
          <h1>Join the SWIFT Community</h1>
        </div>
        <main>
          <Steps />
          <Benefits />
          <Description />
          <Quotes />
        </main>
      </Layout>
    );
  }
  
export default Membership;