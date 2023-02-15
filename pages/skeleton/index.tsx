import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogCardSkeleton from '../../src/components/skeletons/blog-card/blogCardSkeleton'
import FilterBoxSkeleton from '../../src/components/skeletons/filterbox/FilterBoxSkeleton'
import ListPropertySkeleton from '../../src/components/skeletons/list-property/listPropertySkeleton'
import ProfileAreaSkeleton from '../../src/components/skeletons/profile-area/profileAreaSkeleton'
import ProfileCardSkeleton from '../../src/components/skeletons/profile-card/profileCardSkeleton'

import { numberToWords } from "@persian-tools/persian-tools";
const SkeletonComp = () => {

    const [loading,setLoading]=useState(true)
    const [wide,setWide]=useState(true)
    const [price,setPrice]=useState(0)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //        setLoading(false)
    //     },5000)
    // },[])
  return (
    <div className='container  mx-auto lg:max-w-screen-xl'>
        {
            loading ? 
            <div className="pb-7 mx-auto mt-8" style={{direction:'rtl'}}>
                {/*  List property & filters body */}
                <div className="grid grid-cols-12 ">
                    {/* filters */}
                    <div className="lg:col-span-3 md:col-span-4 hidden md:block ">
                        <FilterBoxSkeleton  />
                    </div>

                    {/* Cards wrapper */}
                    <div className="lg:col-span-9 md:col-span-8 md:pr-10 col-span-12 px-4   relative ">

                        {/* similar single property */}
                        <ListPropertySkeleton wide={true} />
                        <div className='w-1/6 my-20'>
                            <ProfileAreaSkeleton />
                        </div>
                        <div className='w-2/6 my-20'>
                            <ProfileCardSkeleton />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-5 mb-20'>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </div>
            </div>

            : <>
             dsfsdf
            </>
        }
 
    </div>
  )
}



export default SkeletonComp
