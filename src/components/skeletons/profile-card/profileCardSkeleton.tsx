import React,{FC} from 'react'
import Skeleton from 'react-loading-skeleton'
const ProfileCardSkeleton = () => {
  return (
    <div className='bg-gray-50 flex flex-col justify-center items-center p-2'>
        <div className='flex flex-row justify-start items-center w-full'>
            <Skeleton width="28px" height="28px" />
        </div>
        <div className='flex flex-col  justify-center items-center gap-y-5'>
            <Skeleton count={1} circle={true} width="64px" height="64px" />
            <Skeleton count={1}  width="94px"  />
            <Skeleton count={1} width="64px"  />
            <Skeleton count={1} width="94px"  />
        </div>
    </div>
  )
}

export default ProfileCardSkeleton
