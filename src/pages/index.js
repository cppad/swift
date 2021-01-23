import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function News(){
  return(
    <section class="news">
      <h2 class="news">Recent News</h2>
      <div class="row">
        <div class="col col--4">
          <div class="card-demo">
            <div class="card">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Image alt text"
                  title="Logo Title Text 1"
                />
              </div>
              <div class="card__body">
                <h4>Quaco Lighthouse</h4>
                <small>
                  The Quaco Head Lighthouse is a well maintained lighthouse close to St.
                  Martins. It is a short, beautiful walk to the lighthouse along the
                  seashore.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--4">
          <div class="card-demo">
            <div class="card">
              <div class="card__image">
                <img
                  src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt="Image alt text"
                  title="Logo Title Text 1"
                />
              </div>
              <div class="card__body">
                <h4>Quaco Lighthouse</h4>
                <small>
                  The Quaco Head Lighthouse is a well maintained lighthouse close to St.
                  Martins. It is a short, beautiful walk to the lighthouse along the
                  seashore.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--4">
          <a class="twitter-timeline" data-lang="en" 
            data-width="300" data-height="300" 
            data-theme="dark" 
            href="https://twitter.com/calpolyswift?ref_src=twsrc%5Etfw">
              Tweets by calpolyswift</a>
          <script async src="https://platform.twitter.com/widgets.js" 
            charset="utf-8"></script>
        </div>
      </div>
    </section>
  )
}

function TwoColumns1() {
  return(
    <section class="">
      <div class="row">
        <div class="col col--6">
          <h2 class="">Header2</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high 
            level overviews. Iterative approaches to corporate strategy foster 
            collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation 
            via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive 
            domination. At the end of the day, going forward, a new normal that 
            has evolved from generation X is on the runway heading towards a 
            streamlined cloud solution. User generated content in real-time will 
            have multiple touchpoints for offshoring.</p>
          <p>Capitalize on low hanging fruit to identify a ballpark value added 
            activity to beta test. Override the digital divide with additional 
            clickthroughs from DevOps. Nanotechnology immersion along the 
            information highway will close the loop on focusing solely on the 
            bottom line.</p>
        </div>
        <div class="col col--6">
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
      </div>
    </section>
  )
}

function TwoColumns2() {
  return(
    <section class="">
      <div class="row">
        <div class="col col--6">
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div class="col col--6">
          <h2 class="">Header2</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high 
            level overviews. Iterative approaches to corporate strategy foster 
            collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation 
            via workplace diversity and empowerment.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive 
            domination. At the end of the day, going forward, a new normal that 
            has evolved from generation X is on the runway heading towards a 
            streamlined cloud solution. User generated content in real-time will 
            have multiple touchpoints for offshoring.</p>
          <p>Capitalize on low hanging fruit to identify a ballpark value added 
            activity to beta test. Override the digital divide with additional 
            clickthroughs from DevOps. Nanotechnology immersion along the 
            information highway will close the loop on focusing solely on the 
            bottom line.</p>
        </div>
      </div>
    </section>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <header className={clsx('hero hero--primary hero-image')}></header>
        <div className="container hero-text">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('about/')}>
              Our Story
            </Link>
          </div>
        </div>
      

      {/* ORIGINAL */}
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      
      
      <main>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}

        <div class="section">
          <section class="container">
            <News />
          </section>
        </div>
        <div class="section section-background-color">
          <section class="container">
            <TwoColumns1 />
          </section>
        </div>
        <div class="section">
          <section class="container">
            <TwoColumns2 />
          </section>
        </div>

      </main>
    </Layout>
  );
}

export default Home;
