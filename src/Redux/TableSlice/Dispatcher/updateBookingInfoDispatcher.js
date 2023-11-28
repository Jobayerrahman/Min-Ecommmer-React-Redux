import axios from "axios";
import { updated } from "../action";

const updateBookingInfoDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:5000/booking_info/${bookedInfo.id}`,bookedInfo);
        const BookedInfo = response.data;
        const BookedStatus = response.status;
        dispatch(updated(BookedInfo,BookedStatus));
    }
}

export default updateBookingInfoDispatcher;