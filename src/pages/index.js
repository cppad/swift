import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function News() {
  return (
    <section class="news">
      <h2 class="news">Latest Activity</h2>
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
                  The Quaco Head Lighthouse is a well maintained lighthouse
                  close to St. Martins. It is a short, beautiful walk to the
                  lighthouse along the seashore. The Quaco Head Lighthouse is a
                  well maintained lighthouse close to St. Martins.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">
                  Visit
                </button>
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
                  The Quaco Head Lighthouse is a well maintained lighthouse
                  close to St. Martins. It is a short, beautiful walk to the
                  lighthouse along the seashore.
                </small>
              </div>
              <div class="card__footer">
                <button class="button button--primary button--block">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col--4">nothing</div>
      </div>
    </section>
  );
}

function Competition() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 centered side-padding">
          <h2 class="">COMPETITION</h2>
          <p class="text--justify">
            Take your skill to the next level with challenges that put you up
            against the best in the field. Apply your skills building defensive
            networks, or be offensive and attack them. Our CCDC team will train
            you from the ground up.
          </p>
        </div>
        <div class="col col--6 fixed-img">
          <img src={useBaseUrl("img/nationals.jpg")} alt="Competition" />
        </div>
      </div>
    </section>
  );
}

function Event() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 fixed-img">
          <img src={useBaseUrl("img/tech_symposium.jpg")} alt="Event" />
        </div>
        <div class="col col--6 centered side-padding">
          <h2 class="">EVENTS</h2>
          <p class="text--justify">
            We hold basic and advanced weekly workshops cover topics such as
            using Linux, internet of things, and network forensics, an annual
            on-campus, student-run conference, Tech Symposium, and a quarterly
            LAN party, Frag Nite, held in conjunction with CPP E-Sports.
          </p>
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 centered side-padding">
          <h2 class="">MEMBERSHIP</h2>
          <p class="text--justify">
            If you like learning new topics, solving problems, breaking things,
            being with fellow hackers, get involved! Our membership provides you
            with resources to enhance your college experience and your
            professional outlook
          </p>
        </div>
        <div class="col col--6 fixed-img">
          <img src={useBaseUrl("img/membership.jpg")} alt="Membership" />
        </div>
      </div>
    </section>
  );
}

function Meeting() {
  return (
    <section class="">
      <div class="row">
        <div class="col col--6 fixed-img">
          <img src={useBaseUrl("img/meeting.png")} alt="Meetings" />
        </div>
        <div class="col col--6 centered side-padding">
          <h2 class="">MEETINGS</h2>
          <p class="text--justify">
            Come to our weekly meetings where we present and discuss topics
            focusing on cyber security, networking, system administration, and
            automation. We host peers and industry leaders in the field to give
            our members an insight to the professional world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary hero-banner")}>
        <div className="container hero-text">
          <div class="row">
            <div class="col col--6 centered">
              {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
              {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
              <img
                src={useBaseUrl("img/logo_words_white.png")}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("about/")}
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div class="col col--6 centered">
              <div class="container-twitter">

                {/* Twitter timeline */}
                {/* <a
                  class="twitter-timeline"
                  href="https://twitter.com/calpolyswift"
                  data-tweet-limit="1"
                  data-width=""
                  data-height=""
                  data-chrome="nofooter noborders noscrollbar"
                  data-theme="dark"
                  data-lang="en"
                  font-size="10"
                >
                  Tweets by calpolyswift
                </a> */}

                {/* Single Twitter tweet */}
                {/* <blockquote class="twitter-tweet" data-cards="hidden" data-theme="light" data-lang="en" data-dnt="true" data-conversation="none">
                  <p lang="en" dir="ltr">Friday workshop‼️
                    <br/><br/>
                    “WireGuard VPN installation walk-through” ft. Louie Hernandez
                    <br/><br/>
                    Zoom link: 
                    <a href="https://t.co/zSvyK9VEQ5">https://t.co/zSvyK9VEQ5</a> 
                    <br/>
                    (Password announced later) 
                    <a href="https://t.co/OwWnFtTnXy">pic.twitter.com/OwWnFtTnXy</a>
                  </p>
                    &mdash; Cal Poly SWIFT (@calpolyswift) 
                    <a href="https://twitter.com/calpolyswift/status/1250909646992207872?ref_src=twsrc%5Etfw">April 16, 2020</a>
                </blockquote> 
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}

<blockquote
    class="instagram-media"
    data-instgrm-permalink="https://www.instagram.com/p/CKfj77PFKc1/?utm_source=ig_embed&amp;utm_campaign=loading"
    data-instgrm-version="13"
    style="
        background: #fff;
        border: 0;
        border-radius: 3px;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
        margin: 1px;
        max-width: 540px;
        min-width: 326px;
        padding: 0;
        width: 99.375%;
        width: -webkit-calc(100% - 2px);
        width: calc(100% - 2px);
    "
>
    <div style="padding: 16px;">
        <a href="https://www.instagram.com/p/CKfj77PFKc1/?utm_source=ig_embed&amp;utm_campaign=loading" style="background: #ffffff; line-height: 0; padding: 0 0; text-align: center; text-decoration: none; width: 100%;" target="_blank">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div style="background-color: #f4f4f4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                    <div style="background-color: #f4f4f4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                    <div style="background-color: #f4f4f4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                </div>
            </div>
            <div style="padding: 19% 0;"></div>
            <div style="display: block; height: 50px; margin: 0 auto 12px; width: 50px;">
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                                <path
                                    d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div style="padding-top: 8px;"><div style="color: #3897f0; font-family: Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: 550; line-height: 18px;">View this post on Instagram</div></div>
            <div style="padding: 12.5% 0;"></div>
            <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                <div>
                    <div style="background-color: #f4f4f4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                    <div style="background-color: #f4f4f4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                    <div style="background-color: #f4f4f4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                </div>
                <div style="margin-left: 8px;">
                    <div style="background-color: #f4f4f4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                    <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg);"></div>
                </div>
                <div style="margin-left: auto;">
                    <div style="width: 0px; border-top: 8px solid #f4f4f4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                    <div style="background-color: #f4f4f4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                    <div style="width: 0; height: 0; border-top: 8px solid #f4f4f4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                <div style="background-color: #f4f4f4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                <div style="background-color: #f4f4f4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
            </div>
        </a>
        <p
            style="
                color: #c9c8cd;
                font-family: Arial, sans-serif;
                font-size: 14px;
                line-height: 17px;
                margin-bottom: 0;
                margin-top: 8px;
                overflow: hidden;
                padding: 8px 0 7px;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
            "
        >
            <a
                href="https://www.instagram.com/p/CKfj77PFKc1/?utm_source=ig_embed&amp;utm_campaign=loading"
                style="color: #c9c8cd; font-family: Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: normal; line-height: 17px; text-decoration: none;"
                target="_blank"
            >
                A post shared by Cal Poly Pomona SWIFT (@calpolyswift)
            </a>
        </p>
    </div>
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>







              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="section section-background-color">
          <section class="container">
            <Competition />
          </section>
        </div>
        <div class="section">
          <section class="container">
            <Event />
          </section>
        </div>
        <div class="section section-background-color">
          <section class="container">
            <Membership />
          </section>
        </div>
        <div class="section">
          <section class="container">
            <Meeting />
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
