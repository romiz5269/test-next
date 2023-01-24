import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {BsPlusCircle} from 'react-icons/bs'

function AddPropertyGallery(props:any) {
  const [files, setFiles] = useState<any>([]);
  const {getRootProps, getInputProps} = useDropzone({
    maxFiles:5,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles([...files,...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  
  });
  console.log(files)
  const thumbs = files.map((file:any) => (
   
        <div className='relative' key={file.name} style={{width:'100px',height:'100px'}}>
            <img
            src={file.preview}
            className="rounded-lg drop-img w-full h-full"
                
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
            <div className='bg-red-600 p-3 absolute rounded-md top-1 left-1'
            onClick={(e)=>setFiles(files.filter((item:any) => item.name !== file.name))}
            ></div>
        </div>
   
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file:any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container mx-auto px-20 ">
    
      <aside className='thumbsContainer'>
        <div className='drop-thumb'>
            <div className='thumbInner flex flex-row justify-start items-start gap-x-6  w-full'>
                {thumbs}
                
                <div {...getRootProps({className: 'drop-zone'})}>
                    <input {...getInputProps()} />
                    <span className=' flex flex-row justify-center items-center'><BsPlusCircle className='text-blue-700 text-xl' /></span>
                </div>

            </div>
        </div>
      </aside>
    </section>
  );
}

export default AddPropertyGallery

