import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Profile } from '../components/Profile/index';
import { Contribute } from '../components/Contribute/index';

import styles from './index.module.css';
import { GetContributors } from '../utils/contributors';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Profile />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            WTF Solidity极简教程
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/WTFAcademy/WTFEthers">
            WTF Ethers极简教程
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {

  const [contributors, setContributors] = useState([])
  useEffect(() => {
    GetContributors()
    // .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setContributors(data)
    })
  }, [])
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* {ContributesFeature()} */}
        <Contribute contributors={contributors} />
      </main>
    </Layout>
  );
}
