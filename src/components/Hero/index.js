import React from 'react';
import { useTrail, animated } from 'react-spring';
import Button from "../Button";
import gitMain from './img/code.gif';
import styles from './styles.module.css';
import github from '@site/static/img/github.png';


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
          Hello! I'm 
          <a href="https://github.com/Doctor-DC">
          <div className={styles.intro__name}>
             Doctor-DC <img className={styles.github} src={github}></ img>
            </div>
          </a>
        </animated.div>
        {/* <animated.p style={animatedTexts[1]}>
        Passionate front-end developer who lives and works in Shanghai.
        </animated.p> */}
        {/* <animated.p style={animatedTexts[2]}>
          ⚡ Love rock 🤟🏼🎸
        </animated.p> */}
        <animated.p style={animatedTexts[2]}>
          Documenting learning, retaining life, I always seek to improve and grow as a professional front-end developer while keeping pace with the latest technolog
          {/* 记录学习、留住生活，在与最新技术保持同步的同时，我始终寻求进步并成长为专业的前端开发人员 */}
        </animated.p>
        <Button
            isLink
            href={"/docs/intro"}
          >
            开始阅读
          </Button>
        <p lign="center" style={{ width: '80%', marginTop: '100px' }}>
        <a href="https://github.com/Doctor-DC"><img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" /></a>
        <a href="https://github.com/Doctor-DC"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white"/></a>
          <a href="https://github.com/Doctor-DC"><img alt="CSS" src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=green" /></a>
          <a href="https://github.com/Doctor-DC"><img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white" /></a>
          <a href="https://github.com/Doctor-DC"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black" /></a>
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
      <img src={gitMain} alt="wait until the page loads" />
    </div>
  );
}

export default Hero;