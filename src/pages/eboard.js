import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


function One() {
    return (
     <section className={styles.section}>
      <div class="row core-values">
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard-images/Silas_Shen.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Silas Shen</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
       
        </div>
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard-images/Louie_Hernandez.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Louie Hernandez</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/louieh326/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/eboard-images/Jennifer_Schwartz.jpg')}  className={styles.socialImg}/>
          <p className={styles.socialNames}>Jennifer Schwartz</p>
          <p>Head Chair of Conference</p>
          <p>
            <a href="https://www.linkedin.com/in/jenni-schwartz/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      </div>
    </section>
    )
}

function Two() {
    return (
        <section>
      <div class="row core-values">
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard-images/Taylor_Nguyen.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Taylor Nguyen</p>
          <p>VP of Operations</p>
          <p>
            <a href="https://www.linkedin.com/in/taylorsnguyen/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard-images/Hannah_Kim.png')} className={styles.socialImg} />
          <p className={styles.socialNames}>Hannah Kim</p>
          <p>Treasurer</p>
          <p>
            <a href="https://www.linkedin.com/in/hannaheunkyungkim/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/eboard-images/Brice_Lauer.png')} className={styles.socialImg} />
          <p className={styles.socialNames}>Brice Lauer</p>
          <p>Director of SWIFT Academy</p>
          <p>
            <a href="https://www.linkedin.com/in/blauersec/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      </div>
    </section>
    )
}

function Three() {
    return (
        <section >
      <div class="row core-values">
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard-images/Somar_Dakak.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Somar Dakak</p>
          <p>Director of SWIFT Labs</p>
          <p>
            <a href="https://www.linkedin.com/in/somar-dakak/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard-images/Jessica_Foronda.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Jessica Foronda</p>
          <p>Director of Marketing</p>
          <p>
            <a href="https://www.linkedin.com/in/jessicaforonda/"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/eboard-images/Angela_Lee.jpg')} className={styles.socialImg}/>
          <p className={styles.socialNames}>Angela Lee</p>
          <p>VP of Administrative Affairs</p>
          <p>
            <a href="https://www.linkedin.com/in/angelalee240"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      </div>
    </section>
    )
}


function Eboard() {
    return (
      <Layout title="Hello">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
          }}>
          <h1 >
            Our Team
          </h1>
        
        </div>

        <div>
          <section class="container">
            <One />
            <Two />
            <Three />
          </section>
        </div>

      </Layout>
    );
  }
  
  export default Eboard;