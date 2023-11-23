import React from 'react';
import { useState, useRef } from 'react';

import styles from './styles.module.css';
import react from '@site/static/img/react.png'
import javascript from '@site/static/img/javascript.png'
import python from '@site/static/img/python.png'
import git from '@site/static/img/git.png'
import css from '@site/static/img/css.png'
import docker from '@site/static/img/docker.png'

export const AvatarUploadPage = () => {
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);
    return (
      <>
        <h1>Upload Your Avatar</h1>
   
        <form
          onSubmit={async (event) => {
            event.preventDefault();
   
            const file = inputFileRef.current.files[0];
   
            const response = await fetch(
              `/api/avatar/upload?filename=${file.name}`,
              {
                method: 'POST',
                body: file,
              },
            );
   
            const newBlob = await response.json();
   
            setBlob(newBlob);
          }}
        >
          <input name="file" ref={inputFileRef} type="file" required />
          <button type="submit">Upload</button>
        </form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </>
    );
}