import React,{FC} from 'react'
import Skeleton from 'react-loading-skeleton'


const FilterBoxSkeleton:FC= () => {
  return (
    <div
        className="filter-box  border-[0.8px] bg-white rounded-2xl sticky top-0 box-shadow-2 space-y-5 md:h-screen h-[600px] z-20 overflow-y-auto overflow-x-hidden "

        >
            {/* filters title */}
            <div
                className="flex flex-row  justify-between items-center sticky top-0 backdrop-blur-md px-5 py-6 z-10 overflow-hidden"
                style={{backgroundColor: " rgba(255, 255, 255, 0.4)"}}
            >
                <Skeleton width="180px" count={0.5} />
                <Skeleton width="100px" height="50px"/>
            </div>

            {/* filters */}
            <div className="px-5 space-y-8">
                {/* select options */}
                <div className="flex flex-col gap-y-5">     
                    <Skeleton count={1} height="35px"/>
                </div>
                <div className="flex flex-col gap-y-5">
                    
                    <Skeleton count={1} height="35px"/>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Skeleton count={1} height="35px"/>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Skeleton count={1} height="35px"/>
                </div>


                {/* property options filters  */}
                <div className="flex flex-col gap-y-10">

                        <div className='flex flex-row justify-between'>
                            <Skeleton count={3} width="20px"/>
                            <Skeleton count={3} width="20px"/>
                            <Skeleton count={3} width="20px"/>
                            <Skeleton count={3} width="20px"/>
                            <Skeleton count={3} width="20px"/>
                            <Skeleton count={3} width="20px"/>
                        </div>
                    
                    


                
                    {/* price filter */}

                    <div className='flex flex-col gap-y-4 pb-8'>
                        
                        <Skeleton count={1} />
                        <Skeleton count={1} height="35px"/>
                        <Skeleton count={1} height="35px"/>
                    </div>


                    
                </div>
            </div>
        </div>
  )
}

export default FilterBoxSkeleton
