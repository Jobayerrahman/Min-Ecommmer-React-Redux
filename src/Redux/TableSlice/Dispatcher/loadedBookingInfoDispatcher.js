import axios from "axios";
import { loaded } from "../action";

const loadedBookingInfoDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("https://restorajsondata.onrender.com/Restora_Tables_Booking_Info");
        const BookedInfo = response.data;
        dispatch(loaded(BookedInfo));
    }
}

export default loadedBookingInfoDispatcher;