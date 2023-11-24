import React, { useState, useEffect } from 'react';
import HomeImg from '@site/static/img/home.jpeg';
import styles from './styles.module.css';
import { supabase } from "../../utils/auth";

const requireContext = require.context("./music", false, /^\.\/.*\.jpeg$/);
// const imageSrc = requireContext.keys().map(requireContext).map(it => {return it.default});
let src = [];

export const ImageList = () => {
    const [imgUrl, setUrl] = useState([]);

    useEffect(() => {
        supabase.storage.from('image')
        .list('live', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
        }).then((res) => {
            console.log('supbase image', res.data);
            res.data.map(it => {
                const url = getPublicUrl(it)
                src.push(url)
            })
            requireContext.keys().map(requireContext).map(it => {src.push(it.default)})
            setUrl(src)
            console.log(src);
        });
    })

    const getPublicUrl = (file) => {
        return supabase.storage.from('image').getPublicUrl('live/' + file.name).data.publicUrl
    }
    
  return (
    <div className={styles.back}>
      <h2 className={styles.title}>dreamly hardware equipment</h2>
      <div className="flex flex-column justify-around m-9 ">
        <img
          src={HomeImg}
          // className="w-full h-full object-cover relative max-w-4xl {styles.hardware}"
          className={'rounded md:rounded-large w-full h-full object-cover relative max-w-4xl'}
          alt="..."
        />
      </div>
      <div className={`w-full py-32 px-24 flex flex-wrap justify-around relative ${styles['img-life']}`}>
        {
            imgUrl.map((it,index) => {
                return (
                    <img src={it} key={index}  className={`w-64 h-64 object-cover mb-12 md:mb-0 ${styles['img-list']}`} />
                )
            })
        }
        <h4 className={`text-3xl  font-bold tracking-tighter absolute top-10 left-0 mt-12 ml-20 ${styles.title}`}>Rock Live and Life</h4>
        <h4 className="text-3xl font-bold tracking-tighter absolute bottom-5 right-0 mb-16 mr-20">fragment</h4>

      </div>
    </div>
  )
}