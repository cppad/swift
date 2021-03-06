import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from "./styles.module.css";
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Mission(){
  return(
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--3 centered">
            {/* <FontAwesomeIcon icon={faHandshake} className={clsx(styles.sectionIcon)}/> */}
            <div class={clsx("padding--sm centered")}>
              <h2>History?</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--3 centered">
            {/* <FontAwesomeIcon icon={faShieldAlt} class={clsx("core-icons")}/> */}
            {/* <FontAwesomeIcon icon={faShieldAlt} className={clsx(styles.sectionIcon)}/> */}
            <div class={clsx("padding--sm centered")}>
              <h2>Values?</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--3 centered">
            {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
            {/* <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/> */}
            <div class={clsx("padding--sm centered")}>
              <h2>Goals?</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
          <div class="col col--3 centered">
            {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
            {/* <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/> */}
            <div class={clsx("padding--sm centered")}>
              <h2>???</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


// function Message() {
//   return (
//     <div class={clsx(styles.sectionPadding, "section-background-color")}>
//       <div class="container">
//         <div class="row padding--lg">
//           <div class={"col col--6 centered"}>
//             <div className={styles.message}>
//               <h1 className={styles.heading}>What We Do</h1>
//               <p>
//               Being a part of SWIFT is much more then being a part of an organization. SWIFT is a community. 
//               We believe strongly in providing students with opportunities that can be obtained nowhere else and help 
//               build skills through on-campus and off-campus events. We believe in providing and understanding 
//               the skills required to excel in the industry through workshops and activities that build skills and 
//               friendships. Throughout the year SWIFT runs weekly meetings alternating between workshop trainings and 
//               discussions providing students a way to build up their skills in an alternating cycle of meetings.
//               </p>
//             </div>
//           </div>
//           <div class={"col col--6 centered"}>
//             <div className={styles.message}>
//             <h1 className={styles.heading}>Events</h1>
//               <p>
//               SWIFT hosts a number of free workshops that teach a variety of skills including Linux installation, 
//               network security, and penetration testing. Workshops are hands-on and are designed to let 
//               members get hands-on experience with real technology. We encourage our members to attend and run workshops and events. 
//               Through these exchange of knowledge we build skills and form partnerships far beyond the campus to the 
//               industry and professionals at large. We have a long history of starting, running events, and that are 
//               known for their in-depth nature and cover the full breadth of the industry.
//               </p>
            
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function About() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '100px',
          // height: '25vh',
          fontSize: '20px',
        }}>
      <h1>SWIFT's Mission</h1>
      </div>
      <main>
        <Mission />
        {/* <Message /> */}
      </main>
    </Layout>
  );
}

export default About;