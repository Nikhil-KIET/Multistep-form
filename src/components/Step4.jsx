'use client'
export default function Step4({ handle }) {

    let data = JSON.stringify(handle)


    return (
        <div className="  shadow-lg shadow-gray-500/50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2   p-5  flex flex-col gap-10" >


            <p className=" font-medium text-xl underline ">Please Review Your Details Before Submitting</p>




            <div className="  flex gap-3">
                <label htmlFor="fname">First Name</label>



                <input  readOnly="text" id="fname" disabled value={handle.firstname} />
            </div>


            <div className="  flex gap-3">
                <label htmlFor="lname">Last Name</label>
                <input readOnly type="text" id="lname" disabled value={handle.lastname} />

            </div>

            <div className="  flex gap-3" >

            <label htmlFor="add">Address</label>
                <textarea readOnly name="add" id="add" cols="30" rows="2" value={handle.add}/>


            </div>

            <div className=" flex flex-col gap-5">
                <div>
                <label htmlFor="ds1">Track Dibetes</label>
                <input type="checkbox" name="ds1" id="ds1"  readOnly checked={`${handle.ds1==='on'?("on"):("off")}`} />
                </div>

                <div>
                <label htmlFor="ds2">Track BP</label>
                <input type="checkbox" name="ds2" id="ds2" readOnly checked={`${handle.ds2==='on'?("on"):("of")}`}  />
                </div>

            </div>





        </div>
    )

}