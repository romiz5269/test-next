import { useRouter } from 'next/router'
import React,{useEffect} from 'react'

const index = () => {
    const router = useRouter()
    console.log(router.query)
    // useEffect(()=>{

    // },[])
  return (
    <div>
      
    </div>
  )
}

export default index