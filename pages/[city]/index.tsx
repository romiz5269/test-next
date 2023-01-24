import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useEffect, useState} from 'react'

const index = () => {
    const router = useRouter()
    console.log(router.query)
    const [test,setTest]=useState<any>("test")
    // useEffect(()=>{

    // },[])
  return (
    <div>
      <Link href={test === "test" ? '/gooz' : '/goh'}>
        link
      </Link>
    </div>
  )
}

export default index
