import React, { useState, useEffect } from 'react';
import HomeImg from '@site/static/img/home.jpeg';
import gaoda from '@site/static/img/gaoda.jpeg'
import ball from '@site/static/img/ball.jpeg'
import wanju2 from '@site/static/img/wanju2.jpeg'
import wangwen from '@site/static/img/wangwen.jpeg'
import styles from './styles.module.css';

export const ImageList = () => {
  return (
    <div className={styles.back}>
      <h2 className={styles.title}>dreamly hardware equipment</h2>
      <div className="flex flex-column justify-around m-9">
        <img
          src={HomeImg}
          // className="w-full h-full object-cover relative max-w-4xl {styles.hardware}"
          className={'rounded md:rounded-large w-full h-full object-cover relative max-w-4xl'}
          alt="..."
        />
      </div>
      <div className="w-full py-32 px-24 flex flex-wrap justify-around relative">

        <img src={gaoda} className={`w-64 h-64 object-cover mb-12 md:mb-0 ${styles['img-list']}`} />
        <img src={wangwen} className={`w-64 h-64 object-cover mb-12 md:mb-0 ${styles['img-list']}`} />
        <img src={wanju2} className={`w-64 h-64 object-cover mb-12 md:mb-0 ${styles['img-list']}`} />
        <img src={ball} className={`w-64 h-64 object-cover mb-12 md:mb-0 ${styles['img-list']}`} />

        <h4 className={`text-3xl  font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20 ${styles.title}`}>life</h4>
        <h4 className="text-3xl font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20">fragment</h4>

      </div>
    </div>
  )
}