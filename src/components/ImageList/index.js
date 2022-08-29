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
      <h4 class="text-3xl font-bold tracking-tighter top-0 left-0 mt-12 ml-20">dreamly hardware equipment</h4>
      <div class="flex flex-column justify-around m-9">
        <img
          src={HomeImg}
          // className="w-full h-full object-cover relative max-w-4xl {styles.hardware}"
          className={'rounded md:rounded-large w-full h-full object-cover relative max-w-4xl'}
          alt="..."
        />
      </div>
      <div class="w-full py-32 px-24 flex flex-wrap justify-around relative">

        <img src={gaoda} class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src={wangwen} class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src={wanju2} class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src={ball} class="w-64 h-64 object-cover" />

        <h4 class="text-3xl  font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20">life</h4>
        <h4 class="text-3xl font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20">fragment</h4>

      </div>
    </div>
  )
}