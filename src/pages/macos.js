import React from 'react';
import Layout from '@theme/Layout';
import styles from './macos.module.css';
import GithubIcon from '@site/static/img/github.svg';
import {signInWithGithub} from '../utils/auth';

export default function MacOs() {
    const renderAppWindows = () => {
        return apps.map((app) => {
          if (app.desktop && state.showApps[app.id]) {
            const props = {
              id: app.id,
              title: app.title,
              width: app.width,
              height: app.height,
              minWidth: app.minWidth,
              minHeight: app.minHeight,
              aspectRatio: app.aspectRatio,
              x: app.x,
              y: app.y,
              z: state.appsZ[app.id],
              max: state.maxApps[app.id],
              min: state.minApps[app.id],
              close: closeApp,
              setMax: setAppMax,
              setMin: minimizeApp,
              focus: openApp
            };
    
            return (
              <Window key={`desktop-app-${app.id}`} {...props}>
                {app.content}
              </Window>
            );
          } else {
            return <div key={`desktop-app-${app.id}`} />;
          }
        });
    };
  return (
    <Layout title="Hello" description="Hello React Page">
        <div
        className="w-full h-full overflow-hidden bg-center bg-cover"
        style={{
            backgroundImage: `url(img/ui/wallpaper-day.jpg)`,
            filter: `brightness( 2 * 0.7 + 50}% )`
        }}
        >
            <div className={styles.container}>

            </div>
        </div>
    </Layout>

  );
}

