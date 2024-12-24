'use client'
import { FcInfo } from "react-icons/fc";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Step2({handle,error}){

    return (
        <div className="  shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2   p-10  flex flex-col gap-5">

<div className=" flex gap-3">
<label  htmlFor="firstname">Enter Address </label>

<TooltipProvider>
    <Tooltip>
        <TooltipTrigger>  <FcInfo />
        </TooltipTrigger>
        <TooltipContent>
            <p>For example: John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA .</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
</div>

<input className="w-[300px] h-[50px] text-black shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2" type="text" name="add" id="add" onChange={handle}  />
<p className=" text-red-700">{error.add && error.interact && ("Address is required")}</p>

            

        </div>
    )

}