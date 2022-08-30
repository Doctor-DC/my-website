import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Profile } from '../components/Profile/index';
import { Contributor } from '../components/Contributor/index.js';
import Hero from '@site/src/components/Hero';
import { AboutMe } from '../components/About';
import { ImageList } from '../components/ImageList/index';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Profile />
      <main>
        {/* <HomepageFeatures /> */}
        <Hero />
        <AboutMe />
        <ImageList />
        <Contributor />
      </main>
    </Layout>
  );
}
