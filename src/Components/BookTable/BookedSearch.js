import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import searchTableDispatcher from "../../Redux/TableSlice/Dispatcher/searchTableDispatcher";

function BookedSearch({onShowTable}) {
    const dispatch = useDispatch();
    const [ searchedInfo, setSearchedInfo ] = useState();

    const handleSearchedInput = (e) =>{
        const inputValue = e.target.value;
        setSearchedInfo(inputValue);
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        if(isNaN(searchedInfo)){
            toast.error("Please enter your mobile number.", {position: toast.POSITION.TOP_RIGHT, className: "toast-message"});
        }else{
            dispatch(searchTableDispatcher(searchedInfo));
        }
        setSearchedInfo('');
    }

    return (
        <div className="w-[100%]">
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number :</h4>
                <input className="w-[100%] h-[40px] 
                    text-[14px] mb-[5px] px-2
                    border-solid border-2 
                    border-slate-200 rounded-md" onChange={handleSearchedInput} value={searchedInfo} />
            </div>
            <button 
                className="p-2 mb-5 w-[100%] text-white
                    bg-[#e6ac0e] rounded-md 
                    font-bold text-[16px] 
                    hover:bg-[#f8c331]"
                onClick={handleSearch}>
                    Search Table
            </button> 
            <button 
                className="p-2 mb-5 w-[100%] text-white
                    bg-[#020202] rounded-md 
                    font-bold text-[16px] 
                    hover:bg-[#2b2b2b]"
                onClick={onShowTable}>
                    Back
            </button>
        </div>
    );
}

export default BookedSearch;