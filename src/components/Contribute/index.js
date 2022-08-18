import React, { useState } from 'react';
import styles from "./index.module.css";
import { SimpleGrid, Botton } from '@mantine/core';

export const Contribute = (props) => {
  const [expand, setExpend] = useState(false)
  return (
    <section>
      <div className={styles['background']}>
        <div className={styles["site-section-title"]} style={props.titleStyle}>
          社区贡献者
        </div>
        {!expand && <div className={styles['container']}>
          <div className={styles["scroll-parent"]}>
            <div className={`${styles['scroll-element']} ${styles['primary']}`}>
              {props.contributors.slice(0, 9).map((user, key) => (
                // <img src={user.avatar_url} />
                <div className={styles["contri-user"]} key={key}>
                  <img src={user.avatar_url} className={styles["contri-user-avatar"]} />

                  <div className={styles["contri-user-info"]}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      <div>{user.login}</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles['scroll-element']} ${styles['secondary']}`}>
              {props.contributors.slice(10, 19).map((user, key) => (
                // <img src={user.avatar_url} />
                <div className={styles["contri-user"]} key={key}>
                  <img src={user.avatar_url} className={styles["contri-user-avatar"]} />
                  <div className={styles["contri-user-info"]}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      <div>{user.login}</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        }
        {expand && <div>
          <SimpleGrid cols={9} className={styles.expand}>
            {props.contributors.map((user, key) => (
              // <img src={user.avatar_url} />
              <div className={styles["expand-all"]} key={key}>
                <img src={user.avatar_url} className={styles["contri-user-avatar"]} />
                <div className={styles["contri-user-info"]}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <div className={styles["contri-user-name"]}>{user.login}</div>
                  </a>
                </div>
              </div>
            ))}
          </SimpleGrid>
        </div>}
        <div className={styles['expand-text']}>
          <a onClick={() => { setExpend(!expand) }}>
            {expand ? '收起' : '展开'}
          </a>
        </div>
      </div>
    </section>
  )

}