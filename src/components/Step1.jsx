'use client'

import { FcInfo } from "react-icons/fc";

import { Input } from "@/components/ui/input"


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Step1({ handle,error }) {

    return (


        <div className="  shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2   p-10  flex flex-col gap-10" >

          <div>
          <div className=" flex gap-2 items-center">




<label htmlFor="firstname">Enter First Name</label>



<input
style={{

}}
className="w-[200px] h-[30px] text-black shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
type="text"
name="firstname"
id="firstname"
required
onChange={handle}
/>


<TooltipProvider>
    <Tooltip>
        <TooltipTrigger>  <FcInfo />
        </TooltipTrigger>
        <TooltipContent>
            <p>Eg:Nikhil</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>


</div>
<p className=" text-red-700">{error.firstname && error.interact ? ("First name is required"):(null)}</p>
          </div>

            <div>
            <div className=" flex gap-2 items-center">
                <label htmlFor="lastname">Enter Last Name</label>



                <input required className="w-[200px] h-[30px] text-black shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2" type="text" name="lastname" id="lastname" onChange={handle} />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>  <FcInfo />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Eg: Singh</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
            <p className=" text-red-700">{error.lastname && error.interact && ("Last name is required")}</p>

            </div>


        </div>
    )

}