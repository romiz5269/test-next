import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import AddPropertyGallery from '../../src/components/previews/AddPropertyGallery';
import PrimaryImage from '../../src/components/previews/PrimaryImage';
import Timer from '../../src/components/Timer/Timer'
import {useState} from 'react'
import Stepper from '../../src/components/stepper/Stepper';
import { numberToWords } from "@persian-tools/persian-tools";


import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Head from 'next/head';

const state = {
  labels: ['شنبه', 'یکشنبه', 'دوشنبه',
           'سه شنبه', 'چهارشنبه','پنجشنبه','جمعه'],
  datasets: [
    {
      label: 'تعداد آگهی',
      fill: true,
      fillColor:'linear-gradient(180deg, rgba(0, 90, 220, 0.6) -2.37%, rgba(255, 255, 255, 0) 100%)',
      lineTension: 0.25,
      backgroundColor: 'rgba(0, 90, 220, 0.1)',
      borderColor: 'rgba(0, 90, 220, 0.9)',
      borderWidth: 2,
      data: [21,23,20,27,31,33,31]
    }
  ]
}

const Circle:NextPage = () => {


  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Corporation",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    };
  }


  const [activeStep,setActiveStep]=useState(3)
  const [steps,setSteps]=useState<any>([
    {
      id:1,
      label:"نوع ملک",
      onClick:()=>{
        console.log('clicked')
      }
    },
    {
      id:2,
      label:"اطلاعات کلی",
      onClick:()=>{
        console.log('clicked')
      }
    },
    {
      id:3,
      label:"گالری تصاویر",
      onClick:()=>{
        console.log('clicked')
      }
    },
  ])  
  return (
    <>

      <Head>
        <title>My Product</title>
        <meta
          name="description"
          content="Super product with free shipping."
          key="desc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      {/* <Timer duration={10} /> */}
      {/* <Stepper activeStep={1} style={{transform:'rotateY(-180deg)'}}> 
        <Step className='text-blue-600 relative' style={{transform:'rotateY(-180deg)'}} 
        >
          1
          <span className='absolute text-blue-600  -bottom-8  text-center -right-5  w-20'>نوع ملک</span>
        </Step>
        <Step className='text-blue-600 relative' style={{transform:'rotateY(-180deg)'}} >
          2
          <span className='absolute text-blue-600  -bottom-8  text-center -right-5  w-20'>نوع ملک</span>
        </Step>
        <Step className='text-blue-600 relative' style={{transform:'rotateY(-180deg)'}}  >
          3
          <span className='absolute text-blue-600  -bottom-8  text-center -right-5  w-20'>نوع ملک</span>
        </Step>      
      </Stepper> */}
      {
        numberToWords(2500000000)
      }
      <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} clickable={true}/>
      {/* <PrimaryImage />
      <AddPropertyGallery /> */}
      <br/>
      <br/>
        <div className='w-4/5 h-[450px]'>
          <Chart  type='line'  data={state} />
        </div>

    </>
  );
}



export default Circle

