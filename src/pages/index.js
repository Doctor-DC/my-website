import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Profile } from '../components/Profile/index';
import { Contributor } from '../components/Contributor/index.js';
import Hero from '@site/src/components/Hero2';
import { AboutMe } from '../components/About';
import { ImageList } from '../components/ImageList/index';
import { Yolo } from '../components/yolo/index'
// import { AvatarUploadPage } from '../components/avatar/index'

import { AvatarUploadPage } from './avatar/index'

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
        <Yolo />
        <AboutMe />
        <ImageList />
        {/* <AvatarUploadPage /> */}
        <Contributor />
      </main>
    </Layout>
  );
}
