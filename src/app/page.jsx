
'use client'

import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import Stepper from "@/components/Stepper";
import { useState } from "react";

import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/Navbar";










export default function Home() {

  const { toast } = useToast()
  const [data, setData] = useState({ firstname: "", lastname: "", add: "",ds1:false,ds2:false })
  const [step, setStep] = useState(0);
  const[errors,setErrors]=useState({ firstname: true, lastname:true, add: true, interact:false })

  function submitHandler(){
    if(errors["interact"]===false){
      toast({
        title:"Please Fill The Form"
        
      })
      setStep(0);
      return

    }
    if(errors["firstname"]===true){
      toast({
        title:"Please Fill FirstName"
      })
      setStep(0);
      return

    }
    if(errors["lastname"]===true){
      toast({
        title:"Please Fill LastName"
      })
      setStep(0);
      return

    }
    if(errors["add"]===true){
      toast({
        title:"Please Fill Address"
      })
      setStep(1);
      return

    }

    

    toast({
      title:"submitted sucessfully"
    })

  }


  function changeHandler(e) {
    const { name, value, type,checked} = e.target;
    console.log(type)
    if(value!==""){
      

      
        setErrors((prev)=>({
          ...prev,
          [name]:false,
          ["interact"]:true
        }
        ))

      

      
      
    }else{
      setErrors((prev)=>({
        ...prev,
        [name]:true,
        ["interact"]:true
      }
      ))

    }
    if(type=="checkbox"){
      setData((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));

    }

    
    
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    console.log(data);
    console.log(value);
  }




  return (
    <div className=" flex flex-col justify-center items-center ">

      <Navbar></Navbar>

      <Stepper step={step}></Stepper>

      <form action="">

        {
          step == 0 &&  ( <Step1 error={errors} handle={changeHandler}></Step1>)
              


         

        }
        {
          step == 1 && <Step2 handle={changeHandler} error={errors} ></Step2>
        }
        {
          step == 2 && <Step3 handle={changeHandler} error={errors} ></Step3>
        }
        {
          step == 3 && <Step4 handle={data} ></Step4>
        }

        <div className=" flex justify-between mt-5">
        {
          step <= 3 && step>0 ? (<button className=" text-white font-medium text-lg  rounded-lg px-8 py-3 bg-blue-600" onClick={(e) => {
            e.preventDefault()
            setStep((prev) => {
              return prev - 1
            })
          }} > Prev </button>) : step === 3 &&  (<button className=" text-white font-medium text-lg  rounded-lg px-5 py-3 bg-blue-600" type="submit" onClick={(e) => {
            e.preventDefault()
            setStep(4)
            submitHandler()

            
          }} > Submit </button>)
        }



        {
           step< 3 && (<button className=" text-white font-medium text-lg  rounded-lg px-5 py-3 bg-blue-600"    onClick={(e) => {
            e.preventDefault()
            
            setStep((prev) => {
              return prev + 1
            })

          }} > Next </button>)

          

        }
          {
            step === 3 &&  (<button className=" text-white font-medium text-lg  rounded-lg px-5 py-3 bg-blue-600" type="submit" onClick={(e) => {
            e.preventDefault()
            setStep(4)
            submitHandler()

            
          }} > Submit </button>)
          }
        
        </div>
      </form>


    </div>
  );
}
