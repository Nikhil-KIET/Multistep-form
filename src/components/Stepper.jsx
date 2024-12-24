'use client'

export default function Stepper({step}){
   
    return(
         <div className=" flex relative items-center mb-44  w-[780px]">
            <div className={` w-[100%] h-[10px] bg-green-600 -z-10 `} style={{width:`${step*33}%`}}  ></div>
           <div className=" absolute flex   w-[100%] justify-between">
           <div className={` ${step>0 ? " bg-green-200" :" bg-red-200"}  z-30  rounded-full bg-green-200 w-[50px] h-[50px] flex justify-center items-center   `}> 1</div>
            <div className={` ${step>1 ? " bg-green-200" :" bg-red-200"}  z-30  rounded-full bg-green-200 w-[50px] h-[50px] flex justify-center items-center   `}> 2</div>
            <div className={` ${step>2 ? " bg-green-200" :" bg-red-200"}  z-30  rounded-full bg-green-200 w-[50px] h-[50px] flex justify-center items-center   `}> 3</div>
            <div className={` ${step>3 ? " bg-green-200" :" bg-red-200"}  z-30  rounded-full bg-green-200 w-[50px] h-[50px] flex justify-center items-center   `}> 4</div>

           </div>




         </div>
    )
}