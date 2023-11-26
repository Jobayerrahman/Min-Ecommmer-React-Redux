import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import addBookingInfoDispatcher from "../../Redux/TableSlice/Dispatcher/addBookingInfoDispatcher";

function BookingForm({onShowTable}) {
    const dispatch = useDispatch();
    const [ bookingName, setBookingName ] = useState();
    const [ mobile, setMobile ] = useState();
    const [ tableNumber, setTableNumber ] = useState();
    const [ member, setMember ] = useState();
    const [ time, setTime ] = useState();

    const handleFormInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'bookingName'){
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

    const handleTableBook = (e) =>{
        e.preventDefault();
        const bookedInfo = {name: bookingName, mobile: mobile, table: tableNumber, member: member, time: time};
        dispatch(addBookingInfoDispatcher(bookedInfo));
        setBookingName('');
        setMobile('');
        setTableNumber('');
        setMember('');
        setTime('');
    }

    return (
        <form onSubmit={handleTableBook}>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Booking Name :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[5px] 
                        border-solid border-2 
                        border-slate-200 rounded-md" 
                    type="text"
                    name="bookingName"
                    onChange={ handleFormInput }
                    value={bookingName}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[5px] 
                        border-solid border-2 
                        border-slate-200 rounded-md"
                    type="text"
                    name="mobile"
                    onChange={ handleFormInput }
                    value={mobile}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Table Name :</h4>
                <select 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[5px] 
                        border-solid border-2 border-slate-200 
                        rounded-md" 
                    type="text"
                    name="selectedTable"
                    onChange={ handleFormInput }
                    value={tableNumber}
                >
                    <option value="">-- Select Table --</option>
                    <option value="Table 01">Table 01</option>
                    <option value="Table 02">Table 02</option>
                    <option value="Table 03">Table 03</option>
                    <option value="Table 04">Table 04</option>
                    <option value="Table 05">Table 05</option>
                    <option value="Table 06">Table 06</option>
                </select>
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Number of Member :</h4>
                <select 
                    className="w-[100%] h-[40px] 
`                                           text-[14px] mb-[5px] 
                        border-solid border-2 
                        border-slate-200 rounded-md" 
                    type="text"
                    name="selectedMember"
                    onChange={ handleFormInput }
                    value={member}
                >
                    <option value="">-- Select Number of Member --</option>
                    <option value="1 member">1 member</option>
                    <option value="2 member">2 member</option>
                    <option value="3 member">3 member</option>
                    <option value="4 member">4 member</option>
                    <option value="5 member">5 member</option>
                    <option value="6 member">6 member</option>
                    <option value="7 member">7 member</option>
                </select>
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Booking Time :</h4>
                <select 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[5px] 
                        border-solid border-2 
                        border-slate-200 rounded-md" 
                    type="text"
                    name="selectedTime"
                    onChange={ handleFormInput }
                    value={time}
                >
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
            </div>
            <button 
                className="p-2 mb-5 w-[100%] text-white
                    bg-[#e6ac0e]  rounded-md 
                    font-bold text-[16px] 
                    hover:bg-[#f8c331] ">
                Book Now
            </button>
            <button 
                className="p-2 mb-5 w-[100%] text-white
                    bg-[#020202] rounded-md 
                    font-bold text-[16px] 
                    hover:bg-[#2b2b2b]"
                onClick={onShowTable}>
                    Show Table
            </button>
        </form>
    );
}

export default BookingForm;