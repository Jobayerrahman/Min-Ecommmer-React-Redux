import axios from "axios";
import { deleteBookedInfo } from "../action";

const deleteBookingInfoDispatcher = (bookedId) =>{
    return async (dispatch) => {
        const response = await axios.delete(`https://restorajsondata.onrender.com/Restora_Tables_Booking_Info/${bookedId}`);
        const status = response.status;
        dispatch(deleteBookedInfo(bookedId,status));
    }
}

export default deleteBookingInfoDispatcher;