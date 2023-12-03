import axios from "axios";
import { updated } from "../action";

const updateBookingInfoDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.put(`https://restorajsondata.onrender.com/Restora_Tables_Booking_Info/${bookedInfo.id}`,bookedInfo);
        const BookedInfo = response.data;
        const BookedStatus = response.status;
        dispatch(updated(BookedInfo,BookedStatus));
    }
}

export default updateBookingInfoDispatcher;