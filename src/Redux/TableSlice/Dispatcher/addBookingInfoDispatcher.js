import axios from "axios";
import { added } from "../action";

const addBookingInfoDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.post("https://jungle-green-jaguar-cuff.cyclic.app/Restora_Tables_Booking_Info",bookedInfo);
        const BookedInfo = response.data;
        dispatch(added(BookedInfo));
    }
}

export default addBookingInfoDispatcher;