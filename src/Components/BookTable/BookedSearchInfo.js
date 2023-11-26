import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import fatchTableDispatcher from "../../Redux/TableSlice/Dispatcher/fatchTableDispatcher";
import deleteBookingInfoDispatcher from "../../Redux/TableSlice/Dispatcher/deleteBookingInfoDispatcher";

function BookedSearchInfo(props) {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.tableSlice);

    const handleDelete = (bookedId) =>{
        dispatch(deleteBookingInfoDispatcher(bookedId));
    }

    return (
        <div className='w-[100%]'>
            <table className="mt-3 bg-[#e2e8f0] w-[100%] h-[auto] p-5 rounded-md md:w-[450px] lg:w-[500px]">
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <h2 className="font-[24px] font-[700] mx-4">Name :</h2>
                    </td>
                    <td>
                        <h4 className="font-[18px] font-[400] mx-4">{state.bookedInfos.name}</h4>
                    </td>
                </tr>
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <h2 className="font-[24px] font-[700] mx-4">Mobile :</h2>
                    </td>
                    <td>
                        <h4 className="font-[18px] font-[400] mx-4">{state.bookedInfos.mobile}</h4>
                    </td>
                </tr>
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <h2 className="font-[24px] font-[700] mx-4">Table Number :</h2>
                    </td>
                    <td>
                        <h4 className="font-[18px] font-[400] mx-4">{state.bookedInfos.table}</h4>
                    </td>
                </tr>
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <h2 className="font-[24px] font-[700] mx-4">Number of Member :</h2>
                    </td>
                    <td>
                        <h4 className="font-[18px] font-[400] mx-4">{state.bookedInfos.member}</h4>
                    </td>
                </tr>
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <h2 className="font-[24px] font-[700] mx-4">Booked Time :</h2>
                    </td>
                    <td>
                        <h4 className="font-[18px] font-[400] mx-4">{state.bookedInfos.time}</h4>
                    </td>
                </tr>
                <tr className="flex justify-start w-[100%] py-2">
                    <td>
                        <button 
                            className="p-2 mx-2 mb-5 
                                w-[150px] text-white
                                bg-[#facc15]  rounded-md 
                                font-bold text-[14px] 
                                hover:bg-[#eab308] ">
                            Edit Data
                        </button>
                    </td>
                    <td>
                        <button 
                            className="p-2 mx-2 mb-5 
                                w-[150px] text-white
                                bg-[#dc2626]  rounded-md 
                                font-bold text-[14px] 
                                hover:bg-[#b91c1c] "
                            onClick={()=>handleDelete(state.bookedInfos.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default BookedSearchInfo;



{/* <div className="mt-3 bg-[#e2e8f0] 
        w-[100%] h-[auto] 
        p-5 rounded-md text-center
        md:w-[450px] lg:w-[500px]">
    <h2 className="font-[24px] font-[700] mx-4">No Information Available</h2>
</div> */}