import React from "react";

export default function BookTable(){
    return(
        <div className="my-[40px] h-[950px] p-[20px] 
                text-center bg-white 
                shadow-lg shadow-indigo-500/50 
                md:h-[650px] xl:h-[650px]
                md:mx-[50px] xl:mx-[300px]"
            >
            <h2 className="font-bold text-[32px] mb-10">Reserve A Table</h2>
            <div className="flex flex-wrap justify-stretch md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
                <div className="flex justify-between min-w-fit">
                    <img className="mx-[20px] mb-[40px] 
                            w-[140px] h-[240px] object-cover
                            md:w-[150px] md:h-[350px]
                            lg:w-[200px] lg:h-[400px]" 
                            src="http://localhost:3002/sources/assets/images/pizza/Pizza-2.jpg" 
                        />
                    <img className="mx-[20px] mt-[40px] 
                            w-[140px] h-[240px] object-cover
                            md:w-[150px] md:h-[350px]
                            lg:w-[200px] lg:h-[400px]" 
                            src="http://localhost:3002/sources/assets/images/pizza/Pizza-3.jpg" 
                        />
                </div>
                <div className="w-[100%] h-[100%] flex flex-col items-start p-3">
                    <div className="w-[100%] flex flex-col items-start mb-[25px]">
                        <h4 className="font-bold text-[14px] mb-[5px]">Booking Name :</h4>
                        <input className="w-[100%] h-[40px] text-[14px] mb-[5px] border-solid border-2 border-slate-200 rounded-md" />
                    </div>
                    <div className="w-[100%] flex flex-col items-start mb-[25px]">
                        <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number :</h4>
                        <input className="w-[100%] h-[40px] text-[14px] mb-[5px] border-solid border-2 border-slate-200 rounded-md" />
                    </div>
                    <div className="w-[100%] flex flex-col items-start mb-[25px]">
                        <h4 className="font-bold text-[14px] mb-[5px]">Table Name :</h4>
                        <select className="w-[100%] h-[40px] text-[14px] mb-[5px] border-solid border-2 border-slate-200 rounded-md" name="selectedFruit">
                            <option value="Table 01">Table 01</option>
                            <option value="Table 02">Table 02</option>
                            <option value="Table 03">Table 03</option>
                            <option value="Table 04">Table 04</option>
                            <option value="Table 05">Table 05</option>
                            <option value="Table 06">Table 06</option>
                        </select>
                    </div>
                    <div className="w-[100%] flex flex-col items-start mb-[25px]">
                        <h4 className="font-bold text-[14px] mb-[5px]">Number of Member :</h4>
                        <select className="w-[100%] h-[40px] text-[14px] mb-[5px] border-solid border-2 border-slate-200 rounded-md" name="selectedFruit">
                            <option value="">1 member</option>
                            <option value="">2 member</option>
                            <option value="">3 member</option>
                            <option value="">4 member</option>
                            <option value="">5 member</option>
                            <option value="">6 member</option>
                            <option value="">7 member</option>
                        </select>
                    </div>
                    <button className="p-2 mb-5 w-[100%] bg-[#e6ac0e] rounded-md font-bold text-[16px] hover:bg-[#f8c331]">Book Now</button>
                    <button className="p-2 mb-5 w-[100%] bg-[#e6ac0e] rounded-md font-bold text-[16px] hover:bg-[#f8c331]">Show Table</button>
                </div>
            </div>
        </div>
    )
}