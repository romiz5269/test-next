import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


function PrimaryImage(props:any) {
    const [primaryImage, setPrimaryImage] = useState<any>([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop: acceptedFiles => {
        setPrimaryImage(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = primaryImage.map((file:any) => (
      <div className='thumb' key={file.name}>
        <div className='thumbInner'>
          <img
            src={file.preview}
            
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
          <div className='bg-red-600 p-3 absolute rounded-md top-1 left-1'
            onClick={(e)=>setPrimaryImage(primaryImage.filter((item:any) => item.name !== file.name))}
            ></div>
        </div>
      </div>
    ));
  
    useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => primaryImage.forEach((file:any) => URL.revokeObjectURL(file.preview));
    }, []);
  
    return (
      <section className="container">
        {
            !primaryImage.length ? 
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag  drop some files here, or click to select files</p>
                </div>
             :
                <aside className='thumbsContainer'>
                    {thumbs}
                </aside>

        }
       
        
      </section>
    );
  }

  export default PrimaryImage