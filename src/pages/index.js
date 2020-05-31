import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const faqData = [
  {
    query: "Do I need to change my Spark application code?",
    answer: `No. You don't need to change the code. Gigahex SDK, once installed on the cluster, will automatically collect events, metrics and logs and push 
    to the Gigahex Monitoring platform`,
  },
  {
    query: "Does it run agents on all the nodes for collecting metrics?",
    answer: "Not at all. Gigahex leverages Spark listener API and Metric Sink for capturing all the metrics.",
  },
  {
    query: "Which Cloud infrastructure do you support?",
    answer: "Any cloud infrastructure which leverages YARN as the cluster manager for Spark application is currently supported",
  },
  {
    query: "Which Spark Cluster Manager is supported?",
    answer: "Currently we support Spark's inbuilt Standalone Cluster Manager and YARN",
  },
  {
    query: "What's the benefit of being part of alpha users' community?",
    answer: `You will be the first one to receive updates about our platform that can tremendously improve the Spark debugging and optimization process. Apart from
    that, we will also offer Team version of our platform at 50% cost. `,
  },
];

const features = [
  {
    title: <>Core Concepts</>,
    imageUrl: "img/concepts_dual.svg",
    link: "/docs/intro",
    description: <>A detailed overview of how Gigahex deploys and mointors Spark jobs on different cloud platform.</>,
  },
  {
    title: <>Installation</>,
    imageUrl: "img/install_dual.svg",
    link: "/docs/install",
    description: <>Setup Gigahex SDK package, across the cluster to enable publishing of the metrics and events.</>,
  },
  {
    title: <>Guide and tutorials</>,
    imageUrl: "img/guide_dual.svg",
    link: "/docs/deploy-spark-with-gigahex",
    description: (
      <>Collection of turtorials to get started with deploymen and monitoring of a spark application running in cloud or On-Premise.</>
    ),
  },
];

function AccordionItem({ query, answer }) {
  const [openState, setOpenState] = useState({
    opened: false,
  });

  return (
    <div
      {...{
        className: `accordion-item, ${openState.opened && "accordion-item--opened"}`,
        onClick: () => {
          setOpenState({ opened: !openState.opened });
        },
      }}>
      <div {...{ className: "accordion-item__line" }}>
        <h3>{query}</h3>
        <span {...{ className: "accordion-item__icon" }} />
      </div>
      <div {...{ className: "accordion-item__inner" }}>
        <div {...{ className: "accordion-item__content" }}>
          <p {...{ className: "accordion-item__paragraph" }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
function Accordion() {
  return (
    <div {...{ className: "accordion-wrapper" }}>
      <ul {...{ className: "accordion-list" }}>
        {faqData.map((data, key) => {
          return (
            <li {...{ className: "accordion-list__item", key }}>
              <AccordionItem {...data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Feature({ imageUrl, title, link, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      <div className='card'>
        <div className='card__header'>
          <div className='feature-icon'>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
          <h3>{title}</h3>
        </div>

        <div className='card__body'>
          <p>{description}</p>
        </div>
        <div className='card__footer'>
          <a href={link} className='button button--secondary button--block'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title} - Documentation`} description={`${siteConfig.tagline}`}>
      <header className='brand-banner'>
        <h1>Gigahex Documentation</h1>
        <div>
          <span class='badge badge--primary'>alpha release</span>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row feature-row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className='container'>
            <div className='row faq-row'>
              <h1>Frequently Asked Questions</h1>
              <Accordion />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
