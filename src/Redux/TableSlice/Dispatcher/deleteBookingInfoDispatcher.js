import axios from "axios";
import { deleteBookedInfo } from "../action";

const deleteBookingInfoDispatcher = (bookedId) =>{
    return async (dispatch) => {
        const response = await axios.delete(`https://jungle-green-jaguar-cuff.cyclic.app/Restora_Tables_Booking_Info/${bookedId}`);
        const status = response.status;
        dispatch(deleteBookedInfo(bookedId,status));
    }
}

export default deleteBookingInfoDispatcher;