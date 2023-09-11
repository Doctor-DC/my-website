import React from 'react';
import { useState, useEffect } from "react";

import macImg from '@site/static/img/wallpaper-day.jpg';
import Layout from '@theme/Layout';
import styles from './macos.module.css';
import Dock from './dock/Dock'

interface DesktopState {
    showApps: {
      [key: string]: boolean;
    };
    appsZ: {
      [key: string]: number;
    };
    maxApps: {
      [key: string]: boolean;
    };
    minApps: {
      [key: string]: boolean;
    };
    maxZ: number;
    showLaunchpad: boolean;
    currentTitle: string;
    hideDockAndTopbar: boolean;
    spotlight: boolean;
}

export default function MacOs() {
    const [state, setState] = useState({
        showApps: {},
        appsZ: {},
        maxApps: {},
        minApps: {},
        maxZ: 2,
        showLaunchpad: false,
        currentTitle: "Finder",
        hideDockAndTopbar: false,
        spotlight: false
      } as DesktopState);
    
    const toggleLaunchpad = (target: boolean): void => {
        const r = document.querySelector(`#launchpad`) as HTMLElement;
        if (target) {
          r.style.transform = "scale(1)";
          r.style.transition = "ease-in 0.2s";
        } else {
          r.style.transform = "scale(1.1)";
          r.style.transition = "ease-out 0.2s";
        }
    
        setState({ ...state, showLaunchpad: target });
      };
  return (
    // <Layout title="Hello" description="Hello React Page">
      <div
        className="w-full h-screen overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${macImg}`,
          filter: `brightness( 2 * 0.7 + 50}% )`,
        }}
      >
        {/* <div className={styles.container}></div> */}
        <iframe
      className="h-3/4 w-3/4 bg-vscode ml-5 mt-5"
      src="https://github1s.com/ant-design/ant-design/tree/master"
    // src="https://www.zhihu.com/"
      title="VSCode"
    />
        <Dock  toggleLaunchpad={toggleLaunchpad}/>

      </div>
    // </Layout>
  );
}
