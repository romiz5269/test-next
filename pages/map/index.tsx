import { NextPage } from 'next'
import React,{useState,useEffect,useRef} from 'react'
import NeshanMap from 'react-neshan-map-leaflet'

// import './SimpleMap.css'

const MapBundle:NextPage = () => {
  return (
    <NeshanMap
      options={{
        key: 'YOUR_API_KEY',
        center: [35.699739, 51.338097],
        zoom: 13
      }}
    />
  );
}

export default MapBundle
