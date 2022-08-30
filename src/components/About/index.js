import React from 'react';
import styles from './styles.module.css';
import react from '@site/static/img/react.png'
import javascript from '@site/static/img/javascript.png'
import python from '@site/static/img/python.png'
import git from '@site/static/img/git.png'
import css from '@site/static/img/css.png'
import docker from '@site/static/img/docker.png'

export const AboutMe = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
            <div>
                <h2 className={styles['custom-style']}>About Me</h2>
            </div>

                <div className={styles['about-grid']}>
                    <div className={styles['about-items']}>
                    <h5 className={styles['about-title']}>Hi There!</h5>
                        <p className={styles['about-content']}>I am a passionate Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with HTML, CSS, Sass, Supabase. I am an excellent communicator and a quick learner. I'm constantly eager to pick up new skills.</p>
                    </div>
                    <div className={styles['tech-cube']}>
                                <div className={styles.cube}>
                                    <div className={styles.front}>
                                        <img src={javascript} alt="javascript" />
                                    </div>
                                    <div className={styles.back}>
                                        <img src={react} alt="react" />
                                    </div>
                                    <div className={styles.top}>
                                        <img src={python} alt="python" />
                                    </div>
                                    <div className={styles.bottom}>
                                        <img src={git} alt="git" />
                                    </div>
                                    <div className={styles.left}>
                                        <img src={css} alt="css" />
                                    </div>
                                    <div className={styles.right}>
                                        <img src={docker} alt="docker" />
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    );
}