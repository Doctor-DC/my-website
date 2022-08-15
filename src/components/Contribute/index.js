import React from 'react';
import styles from "./index.module.css";

export const Contribute = (props) => {
    return (
      <section>
      <div className={styles["site-section-title"]} style={props.titleStyle}>
        社区贡献者
      </div>
      <div className={styles['container']}>
        <div className={styles["scroll-parent"]}>
          <div className={`${styles['scroll-element']} ${styles['primary']}`}>
            {props.contributors.slice(0, 9).map((user, key) => (
              // <img src={user.avatar_url} />
              <div className={styles["contri-user"]} key={key}>
                <img src={user.avatar_url} className={styles["contri-user-avatar"]} />

                <div className={styles["contri-user-info"]}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <div className={styles["contri-user-name"]}>{user.login}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles['scroll-element']} ${styles['secondary']}`}>
            {props.contributors.slice(0, 9).map((user, key) => (
              // <img src={user.avatar_url} />
              <div className={styles["contri-user"]} key={key}>
                <img src={user.avatar_url} className={styles["contri-user-avatar"]} />
                <div className={styles["contri-user-info"]}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <div className={styles["contri-user-name"]}>{user.login}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    )
  
}