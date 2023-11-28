import axios from "axios";
import { loaded } from "../action";

const loadedBookingInfoDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/booking_info");
        const BookedInfo = response.data;
        dispatch(loaded(BookedInfo));
    }
}

export default loadedBookingInfoDispatcher;