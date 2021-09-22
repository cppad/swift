import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from "./styles.module.css";



function ContactUs() {
  return (
  
      <div class="container">
        <div class="row padding--lg">
          <div class={"col col--6 centered"}>
            <div className={styles.message}>
              <h1 className={styles.heading}>Get in touch</h1>
              <p>
              Whether you're a student, alumni, faculty, or company we’d love to hear from you! 
              </p>
              <p> Please email us at <a href="mailto:eboard@calpolyswift.org" className={styles.email}>eboard@calpolyswift.org</a></p>
            </div>
          </div>
          <div class={"col col--6 centered"}>
            <div className={styles.message}>
            <h1 className={styles.heading}>Visit us</h1>
              <p>
                Due to COVID-19 restrictions, we are currently not meeting on campus. All of our meetings are 
                conducted virtually. Join our discord for more information on our weekly meetings and workshops.
              </p>
            
            </div>
          </div>
        </div>
      </div>
   
  );
}


function Contact() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25vh',
          fontSize: '20px',
        }}>
      <h1>Contact</h1>
      </div>
      
      <main>
        <ContactUs />
      </main>
    </Layout>
  );
}

export default Contact;