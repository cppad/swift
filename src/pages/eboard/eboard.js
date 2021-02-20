import React from 'react';
import Layout from '@theme/Layout';
import styles from './eboard.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


function One() {
    return (
     <section>
      <div class="row core-values">
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/banner.jpg')} />
          <p>Silas Shen</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
       
        </div>
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/banner.jpg')} />
          <p>Louie Hernandez</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/banner.jpg')} />
          <p>Name</p>
          <p>Position</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
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
          <img src={useBaseUrl('img/banner.jpg')} />
          <p>Silas Shen</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
        </div>
        
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/banner.jpg')} />
          <p>Louie Hernandez</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/banner.jpg')} />
          <p>Name</p>
          <p>Position</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
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
          <img src={useBaseUrl('img/banner.jpg')} />
          <p>Silas Shen</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/banner.jpg')} />
          <p>Louie Hernandez</p>
          <p>Co-President</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
          </p>
        </div>
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/banner.jpg')} />
          <p>Name</p>
          <p>Position</p>
          <p>
            <a href="https://www.linkedin.com/in/silass1/"> 
                <FontAwesomeIcon icon={faLinkedin}/> 
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
            height: '18vh',
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