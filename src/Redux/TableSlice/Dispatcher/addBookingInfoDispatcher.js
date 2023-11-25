import axios from "axios";
import { added } from "../action";

const addBookingInfoDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.post("http://localhost:5000/booking_info",bookedInfo);
        const BookedInfo = response.data;
        dispatch(added(BookedInfo));
    }
}

export default addBookingInfoDispatcher;