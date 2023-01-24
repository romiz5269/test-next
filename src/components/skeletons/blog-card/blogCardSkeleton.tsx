import React,{FC} from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogCardSkeleton:FC= () => {
  return (
    <div
        className={`bg-white relative box-shadow-2 rounded-2xl overflow-y-hidden grid grid-cols-12 border-[0.8px] w-full`}
    >
    

        {/* image wrapper */}

        <div
            className={`p-4 relative col-span-12`}
        >
        
        
            <div className='absolute top-6 left-0 flex items-center gap-x-2'>
                {/*star*/}
                <div className='flex  items-center gap-x-2 bg-custom-gold rounded-lg p-2 text-white z-10'>
                    <Skeleton width="50px" height="30px" baseColor='#d8d8d8' />
                    <Skeleton width="50px" height="30px" baseColor='#d8d8d8' />
                </div>
                {/*date*/}
                <div className='flex items-center gap-x-2 bg-primary rounded-lg p-2 text-white'>
                    
                
                </div>
             </div>
            
            <Skeleton style={{borderRadius:"23px"}} height="153px"/>  
            
        </div>

        {/* <div className={`${wide ? 'col-span-12 grid grid-cols-12 gap-y-4' : 'hidden'}`}> */}
                {/* property info wrapper */}
                <div
                    className={`col-span-12`}
                >
                    {/* property title */}
                    
                    <div
                        className={`text-lg font-bold px-4 pb-5 `}
                    >
                        <Skeleton count={1} width="100px" />

                    </div>

               

                    {/* property info */}

                    <div className={`px-4 pb-1`}>
                        <Skeleton count={2} width="180px" />

                    </div>
                </div>

                {/* property price */}
                <div
                    className={`col-span-12`}
                >
                    <div className="flex flex-row justify-between items-center w-full bg-gray-50 p-3 ">
                   
                                
                                <Skeleton count={1} width="90px"/>
                                <Skeleton count={1} width="90px"/>
                        
                        
                    </div>
                </div>
        {/* </div> */}

    </div>
  )
}
export default BlogCardSkeleton
