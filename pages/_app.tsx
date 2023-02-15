import '../styles/globals.css'
import { useEffect,useState } from 'react'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  const [connectionStatus,setConnectionStatus]=useState<boolean | null>(null)

  useEffect(()=>{
    // console.log(navigator.onLine)

      if(navigator.onLine){
        setConnectionStatus(true)
      }else{
        setConnectionStatus(false)
      }
    

  
  },[])
  return <Component {...pageProps} />
}
