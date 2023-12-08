import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterTimeTableDispatcher from "../../Redux/TableSlice/Dispatcher/filterTimeTableDispatcher";
import BookingForm from "./BookingForm";
import BookedSearch from "./BookedSearch";
import BookedSearchInfo from "./BookedSearchInfo";

export default function BookTable(){
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.tableSlice);
    const [ showTable, setShowTable ] = useState(false);

    const handleShowTable = () =>{
        setShowTable(!showTable);
    }

    const handleSelectedInput = (e) =>{
        const inputValue = e.target.value;
        dispatch(filterTimeTableDispatcher(inputValue));
    }

    return(
        <div className="my-[40px] h-[auto] p-[20px] 
                text-center bg-white 
                shadow-lg shadow-indigo-500/50  
                md:mx-[50px] md:h-[auto]  xl:h-[650px] xl:mx-[200px]">
            <h2 className="font-bold text-[32px] mb-4">Reserve A Table</h2>
            <div className="flex flex-wrap justify-stretch 
                    lg:flex-nowrap 
                    xl:flex-nowrap lg:h-fit">
                {showTable ? (
                    <div className="flex flex-col 
                            w-fit mx-[15px] 
                            py-3 md:mx-[15px] 
                            xl:w-max xl:mx-[60px]">
                        <div className="w-[100%] flex flex-col items-start mb-[20px]">
                            <h4 className="font-bold text-[14px] mb-[5px]">Booking Time :</h4>
                            <select className="w-[100%] h-[40px] 
                                        text-[14px] mb-[5px] px-2 
                                        border-solid border-2 
                                        border-slate-200 rounded-md" 
                                    name="selectedTimeTable"
                                    onChange={handleSelectedInput}
                                >
                                <option value="">-- Select Time --</option>
                                <option value="2:00pm">2:00 pm</option>
                                <option value="3:00pm">3:00 pm</option>
                                <option value="4:00pm">4:00 pm</option>
                                <option value="5:00pm">5:00 pm</option>
                                <option value="6:00pm">6:00 pm</option>
                                <option value="7:00pm">7:00 pm</option>
                                <option value="8:00pm">8:00 pm</option>
                                <option value="9:00pm">9:00 pm</option>
                                <option value="10:00pm">10:00 pm</option>
                            </select>
                        </div>
                        <div className="flex justify-between flex-wrap items-stretch mx-[50px] h-[auto] md: mb-[25px]"> 
                            {state.tables.map((table)=>(
                                <div key={table.id} 
                                     className={`w-[80px] h-[25px] 
                                        mx-2 my-2 bg-[${table.color}] 
                                        text-white rounded-md`}>
                                            {table.table}
                                </div>
                            ))}
                        </div>
                    </div>
                    ):(<div className="flex justify-between min-w-fit md:w-[100%] md:justify-center">
                        <img className="mx-[20px] mb-[40px] 
                                w-[120px] h-[240px] object-cover
                                md:w-[200px] md:h-[300px]
                                lg:w-[200px] lg:h-[400px]" 
                                src="https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-2.jpg" 
                            />
                        <img className="mx-[20px] mt-[40px] 
                                w-[120px] h-[240px] object-cover
                                md:w-[200px] md:h-[300px]
                                lg:w-[200px] lg:h-[400px]" 
                                src="https://restora-food-ecom.vercel.app/sources/assets/images/pizza/Pizza-3.jpg" 
                            />
                    </div>)
                }
                <div className="w-[100%] h-[100%] flex flex-col items-start p-3">
                    {showTable ? (
                        <div className="w-[100%]">
                            <BookedSearch onShowTable={handleShowTable} />
                            {state.isDataAvailable? <BookedSearchInfo/> : null}
                        </div>
                        ):(
                        <div className="w-[100%]">
                            <BookingForm onShowTable={handleShowTable} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}