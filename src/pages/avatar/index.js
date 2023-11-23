import React from 'react';
import { useState, useRef } from 'react';
import { put } from '@vercel/blob';


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
            console.log(file.name);
            console.log(process.env.BLOB_READ_WRITE_TOKEN);
            const response = await put(
              `${file.name}`,
              {
                method: 'POST',
                body: file,
              },
              {
                access: 'public',
              }
            );
            console.log(response);
   
            const newBlob = await response.json();
   
            setBlob(newBlob);
          }}
        >
          <input name="file" ref={inputFileRef} type="file" required />
          <button type="submit">Upload1</button>
        </form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </>
    );
}