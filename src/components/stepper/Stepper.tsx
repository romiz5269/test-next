import React, { CSSProperties, FC, SetStateAction, useState } from 'react'

interface StepperProps{
    steps:[],
    setActiveStep:SetStateAction<any>
    activeStep:number,
    dir?:CSSProperties | string | undefined,
    clickable:boolean
}


const Stepper:FC<StepperProps> = ({steps,activeStep,setActiveStep,dir="rtl",clickable}) => {

    
    const handleClick = (currentStep:any) =>{
        
        if(clickable){
            if(currentStep < activeStep){
                // steps[currentStep-1].onClick()
                setActiveStep((activeStep:any)=>activeStep -1)
            }
        }
    }

    const renderSteps = steps?.map((item:any)=>{
        if(item.id===1){
            return(
                <div className='flex flex-row items-center justify-center w-full flex-1 ' key={item.id ? item.id : item.label} onClick={(e)=>handleClick(item.id)}>
                    <div className="h-[4px] flex-1 content-['']"></div>
                    <div className={`rounded-full flex flex-col justify-center items-center step-circle ${item.id ===activeStep ? 'active-step' : item.id < activeStep && 'completed-step'} relative`}>
                        {item.id}
                        <span className='absolute text-blue-600 -bottom-8 w-32 text-center -left-10'>{item.label}</span>
                    </div>
                    <div className={`h-[4px] flex-1 content-[''] ${item.id === activeStep ? 'bg-slate-200' : 'bg-blue-600'}`}></div>
                </div>
            )
        }
        if(item.id===steps.length){
            return(
                <div className='flex flex-row items-center justify-center w-full flex-1 ' key={item.id ? item.id : item.label} onClick={(e)=>handleClick(item.id)}>
                    <div className={`h-[4px] flex-1 content-[''] ${item.id <= activeStep ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                    <div className={`rounded-full flex flex-col justify-center items-center step-circle  ${item.id ===activeStep ? 'active-step' : item.id < activeStep && 'completed-step'} relative`}>
                        {item.id}
                        <span className='absolute text-blue-600 -bottom-8 w-32 text-center -left-10'>{item.label}</span>
                    </div>                    
                    <div className="h-[4px] flex-1 content-[''] "></div>
                </div>
            )
        }
            return(
                <div className='flex flex-row items-center justify-center w-full flex-1' key={item.id ? item.id : item.label} onClick={(e)=>handleClick(item.id)}>
                    <div className={`h-[4px] flex-1 content-[''] ${item.id ===activeStep ? 'bg-blue-600' : item.id > activeStep ? 'bg-slate-200' : item.id < activeStep && 'bg-blue-600'}`}></div>
                    <div className={`rounded-full flex flex-col justify-center items-center step-circle  ${item.id ===activeStep ? 'active-step' : item.id < activeStep && 'completed-step'} relative`}>
                            {item.id}
                            <span className='absolute text-blue-600 -bottom-8 w-32 text-center -left-10'>{item.label}</span>
                    </div>
                    <div className={`h-[4px] flex-1 content-[''] ${item.id ===activeStep ? 'bg-slate-200' : item.id > activeStep ? 'bg-slate-200' : item.id < activeStep && 'bg-blue-600'} `}></div>
                </div>
            )
       
    })
  return (
    <div className="flex flex-row items-center  mx-auto w-[600px] stepper-wrapper" style={{direction:"rtl"}}>
        <div  className=" flex flex-row justify-center items-center flex-1 step ">

            {renderSteps}
        </div>

    </div>
  )
}

export default Stepper
