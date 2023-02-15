import React,{FC} from 'react'
import Skeleton from 'react-loading-skeleton'
const ProfileAreaSkeleton:FC = () => {
  return (
    <>
      <div className='bg-[#005adc]/20 px-4 p-2 flex flex-row justify-start items-center gap-x-3 rounded-md md:flex hidden'>
        <Skeleton circle={true} width="24px" height="24px" />
        <Skeleton count={1} width="80px" height="8px"/>
      </div>
      <Skeleton circle={true} width="48px" height="48px" />
    </>
  )
}

export default ProfileAreaSkeleton
