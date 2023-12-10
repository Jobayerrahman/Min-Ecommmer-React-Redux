import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import deleteBookingInfoDispatcher from "../../Redux/TableSlice/Dispatcher/deleteBookingInfoDispatcher";


function Deletemodal({showDelete,closeDelete,bookingId}) {
    const showHiddenDelete = showDelete ? "modal display-block": "modal display-none";
    const dispatch = useDispatch();

    const handleDelete = (bookingId) =>{
        dispatch(deleteBookingInfoDispatcher(bookingId));
        toast.warning("Booking Information is deleted!", {position: toast.POSITION.TOP_RIGHT, className: "toast-message"} );
    }

    return (
        <div className={showHiddenDelete}>
            <div className='modal-main delete-modal'>
                <div className='flex 
                        justify-between
                        items-center my-3 mx-2'>
                        <h2 className='text-[20px] font-bold text-[#4b5563] font-serif'>Are you sure ?</h2>
                </div>
                <div className='flex justify-start items-center mx-2'>
                    <button className='w-[140px] p-2 bg-[#ef4444] text-[12px] 
                        font-[600] text-white rounded-md hover:cursor-pointer'
                        onClick={() => handleDelete(bookingId)}>
                        <FontAwesomeIcon 
                            className='text-white text-[12px] mx-2' 
                            icon={faTrash} />
                        Yes, I am sure.
                    </button>
                    <button className='w-[140px] p-2 mx-2 bg-[#10b981] text-[12px] 
                    font-[600] text-white rounded-md hover:cursor-pointer'
                        onClick={closeDelete}
                        >
                        <FontAwesomeIcon 
                            className='text-white text-[12px] mx-2' 
                            icon={faCircleXmark} />
                        Not sure, Back.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Deletemodal;