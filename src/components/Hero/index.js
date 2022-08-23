import React from 'react';
import { useTrail, animated } from 'react-spring';
import HeroMain from './img/hero_main.svg';
import Link from '@docusaurus/Link';
import gitMain from './img/code.gif';
import styles from './styles.module.css';

function Hero() {

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: 'translateY(3em)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          Hello! 我是
          <span className={styles.intro__name}>DC</span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          {`在这里你能了解到各类实战开发的所遇到的问题，帮助你在学习的过程了解最新的技术栈，并希望我的个人经历对你有所启发。`}
        </animated.p>
        <Link className={styles.bloghome__button} to='/docs/intro'>
          🖱Click Here!
        </ Link>
        {/* <SocialLinks animatedProps={animatedTexts[4]} />
        {
          <animated.div style={animatedTexts[2]}>
            <a>
              自我介绍
            </a>
          </animated.div>
        } */}
        <p lign="center">
          <a href="https://github.com/Doctor-DC"><img alt="CSS" src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white" /></a>
          <a href="https://github.com/Doctor-DC"><img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white" /></a>
          <a href="https://github.com/Doctor-DC"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black" /></a>
          <a href="https://github.com/Doctor-DC"><img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?logo=markdown&logoColor=white" /></a>
        </p>
      </div>
      <HeroMainImage />
    </animated.div>
  );
}

export function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      <a href="./rss.xml" target="_blank">
        1
      </a>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image} >
      {/* <HeroMain /> */}
      <img src={gitMain} alt="wait until the page loads" />
    </div>
  );
}

export default Hero;