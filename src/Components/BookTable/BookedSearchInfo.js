import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Deletemodal from '../Modal/Deletemodal';
import { useDispatch, useSelector } from "react-redux";
import { closeSearchInfo } from '../../Redux/TableSlice/action';
import updateBookingInfoDispatcher from '../../Redux/TableSlice/Dispatcher/updateBookingInfoDispatcher';

function BookedSearchInfo() {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.tableSlice);

    const [ isEdit , setIsEdit ] = useState(false);
    const [ bookingName, setBookingName ] = useState(state.searchBookedInfos.name);
    const [ mobile, setMobile ] = useState(state.searchBookedInfos.mobile);
    const [ tableNumber, setTableNumber ] = useState(state.searchBookedInfos.table);
    const [ member, setMember ] = useState(state.searchBookedInfos.member);
    const [ time, setTime ] = useState(state.searchBookedInfos.time);
    const [showDeleteModal,setShowDeleteModal] = useState(false);

    const handleDeleteModal = () =>{
        setShowDeleteModal(true);
    }    

    const handleCloseDelete = () =>{
        setShowDeleteModal(false);
    }

    const handleEdit = () =>{
        setIsEdit(!isEdit);
    }

    const handleDisplayClose = () =>{
        dispatch(closeSearchInfo())
    }

    const handleFormInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'name'){
            setBookingName(inputValue);
        }
        else if(e.target.name === 'mobile'){
            setMobile(inputValue);
        }
        else if(e.target.name === 'selectedTable'){
            setTableNumber(inputValue);
        }
        else if(e.target.name === 'selectedMember'){
            setMember(inputValue);
        }
        else if(e.target.name === 'selectedTime'){
            setTime(inputValue);
        }
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        if(bookingName !== '' && mobile !== '' && tableNumber !== '' && member !== '' && time !== ''){
            if(isNaN(mobile)){
                toast.error("Mobile field must be number!", {position: toast.POSITION.TOP_RIGHT, className: "toast-message"} );
            }else{
                const updatedInfo = {id:state.searchBookedInfos.id, name: bookingName, mobile: mobile, table: tableNumber, member: member, time: time};
                dispatch(updateBookingInfoDispatcher(updatedInfo));
                toast.success("Table booking update successfully!", {position: toast.POSITION.TOP_RIGHT, className: "toast-message"} );
            }
        }else{
            toast.error("Field can not be empty!", {position: toast.POSITION.TOP_RIGHT, className: "toast-message"} );
        }
        setIsEdit(!isEdit);
    }

    return (
        <div className={`block w-[100%] flex justify-center`}>
            <table className="mt-3 bg-[#e2e8f0] w-[450px] h-[auto] p-5 rounded-md md:w-[450px] lg:w-[450px]">
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td className='w-[100px]'>
                        <h2 className="text-[16px] font-[700] mx-4">Name:</h2>
                    </td>
                    <td>
                        {isEdit? (
                            <input 
                                className="w-[200px] h-[35px] 
                                    text-[14px] px-2
                                    border-solid border-2 
                                    border-slate-200 rounded-md
                                    md:w-[300px] lg:w-[300px]"
                                type="text"
                                name="name"
                                onChange={ handleFormInput }
                                value={bookingName}/>
                        ):(
                            <h4 className="text-[14px] font-[500] mx-4">{state.searchBookedInfos.name}</h4>
                        )}
                    </td>
                </tr>
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td className='w-[100px]'>
                        <h2 className="text-[16px] font-[700] mx-4">Mobile:</h2>
                    </td>
                    <td>
                        {isEdit? (
                            <input 
                                className="w-[200px] h-[35px] 
                                    text-[14px] px-2
                                    border-solid border-2 
                                    border-slate-200 rounded-md
                                    md:w-[300px] lg:w-[300px]"
                                type="text"
                                name="mobile"
                                onChange={ handleFormInput }
                                value={mobile}/>
                        ):(
                            <h4 className="text-[14px] font-[500] mx-4">{state.searchBookedInfos.mobile}</h4>
                        )}
                    </td>
                </tr>
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td className='w-[100px]'>
                        <h2 className="text-[16px] font-[700] mx-4">Table:</h2>
                    </td>
                    <td>
                        {isEdit? (
                            <select 
                                className="w-[200px] h-[35px] px-2
                                text-[14px] border-solid 
                                border-2 border-slate-200 
                                rounded-md" 
                                type="text"
                                name="selectedTable"
                                onChange={ handleFormInput }
                                value={tableNumber}>
                                <option value="">-- Select Table --</option>
                                <option value="Table 01">Table 01</option>
                                <option value="Table 02">Table 02</option>
                                <option value="Table 03">Table 03</option>
                                <option value="Table 04">Table 04</option>
                                <option value="Table 05">Table 05</option>
                                <option value="Table 06">Table 06</option>
                            </select>
                        ):(
                            <h4 className="text-[14px] font-[500] mx-4">{state.searchBookedInfos.table}</h4>
                        )}
                    </td>
                </tr>
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td className='w-[100px]'>
                        <h2 className="text-[16px] font-[700] mx-4">Member:</h2>
                    </td>
                    <td>
                        {isEdit? (
                            <select 
                                className="w-[200px] h-[35px] 
                                    text-[14px] border-solid border-2 px-2
                                    border-slate-200 rounded-md" 
                                    type="text"
                                    name="selectedMember"
                                    onChange={ handleFormInput }
                                    value={member}>
                                <option value="">-- Select Number of Member --</option>
                                <option value="1 member">1 member</option>
                                <option value="2 member">2 member</option>
                                <option value="3 member">3 member</option>
                                <option value="4 member">4 member</option>
                                <option value="5 member">5 member</option>
                                <option value="6 member">6 member</option>
                                <option value="7 member">7 member</option>
                            </select>
                        ):(
                            <h4 className="text-[14px] font-[500] mx-4">{state.searchBookedInfos.member}</h4>
                        )}
                    </td>
                </tr>
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td className='w-[100px]'>
                        <h2 className="text-[16px] font-[700] mx-4">Time:</h2>
                    </td>
                    <td>
                    {isEdit? (
                        <select 
                            className="w-[200px] h-[35px] 
                                text-[14px] px-2
                                border-solid border-2 
                                border-slate-200 rounded-md" 
                                type="text"
                                name="selectedTime"
                                onChange={ handleFormInput }
                                value={time}>
                            <option value="">-- Select Your Time --</option>
                            <option value="11:00pm - 1:00pm">All Open</option>
                            <option value="2:00 pm">2:00 pm</option>
                            <option value="3:00 pm">3:00 pm</option>
                            <option value="4:00 pm">4:00 pm</option>
                            <option value="5:00 pm">5:00 pm</option>
                            <option value="6:00 pm">6:00 pm</option>
                            <option value="7:00 pm">7:00 pm</option>
                            <option value="8:00 pm">8:00 pm</option>
                            <option value="9:00 pm">9:00 pm</option>
                            <option value="10:00 pm">10:00 pm</option>
                        </select>
                        ):(
                            <h4 className="text-[14px] font-[500] mx-4">{state.searchBookedInfos.time}</h4>
                        )}
                    </td>
                </tr>
                <tr className="flex justify-start items-center w-[100%] py-2">
                    <td>
                    {isEdit ?
                        (<button 
                            className="p-2 mx-2 mb-2 
                                w-[130px] text-white
                                bg-[#facc15]  rounded-md 
                                font-bold text-[14px] 
                                hover:bg-[#eab308] 
                                md:w-[170px] lg:w-[200px]"
                                onClick={handleUpdate}>
                             Update Now
                        </button>):
                        (<button 
                            className="p-2 mx-2 mb-2 
                                w-[100px] text-white
                                bg-[#facc15]  rounded-md 
                                font-bold text-[14px] 
                                hover:bg-[#eab308] 
                                md:w-[170px] lg:w-[150px]"
                                onClick={handleEdit}>
                             Edit Data
                        </button>
                        )}
                    </td>
                    <td>
                    {isEdit ?
                        (<button 
                            className="p-2 mx-2 mb-2 
                                w-[130px] text-white
                                bg-[#dc2626]  rounded-md 
                                font-bold text-[14px] 
                                hover:bg-[#b91c1c] 
                                md:w-[170px] lg:w-[200px]"
                            onClick={handleEdit}>
                            Cancle
                        </button>):(
                        <div className='flex'>
                            <button 
                                className="p-2 mx-2 mb-2 
                                    w-[100px] text-white
                                    bg-[#dc2626]  rounded-md 
                                    font-bold text-[14px] 
                                    hover:bg-[#b91c1c] 
                                    md:w-[170px] lg:w-[150px]"
                                onClick={handleDeleteModal}>
                                Delete
                            </button>
                            <button 
                                className="p-2 mx-2 mb-2 
                                    w-[100px] text-white
                                    bg-[#020202]  rounded-md 
                                    font-bold text-[14px] 
                                    hover:bg-[#eab308] 
                                    md:w-[170px] lg:w-[150px]"
                                    onClick={handleDisplayClose}>
                                Close
                            </button>
                        </div>
                        )}
                    </td>
                </tr>
            </table>
            <Deletemodal showDelete={showDeleteModal} closeDelete={handleCloseDelete} bookingId={state.searchBookedInfos.id}/>
        </div>
    );
}

export default BookedSearchInfo;