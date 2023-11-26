import axios from "axios";
import { deleteBookedInfo } from "../action";

const deleteBookingInfoDispatcher = (bookedId) =>{
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:5000/booking_info/${bookedId}`);
        const status = response.status;
        dispatch(deleteBookedInfo(bookedId,status));
    }
}

export default deleteBookingInfoDispatcher;