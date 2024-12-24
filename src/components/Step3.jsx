'use client'
export default function Step3({handle,error}){

    return (

        <div className="  shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2   p-10  flex flex-col gap-5">
            <div>Please Select Your Health Issues You Want To Track with ZenStreet.Ai</div>
           <div className=" flex gap-2 justify-center">
           <label htmlFor="ds1">I have Dibetes</label>
            <input type="checkbox" name="ds1" id="ds1" onChange={handle}   />
           </div>

           <div className=" flex gap-2 justify-center">
           <label htmlFor="ds2">I have Bp Problem</label>

<input type="checkbox" name="ds2" id="ds2"  onChange={handle}  />
           </div>




        </div>
    )

}