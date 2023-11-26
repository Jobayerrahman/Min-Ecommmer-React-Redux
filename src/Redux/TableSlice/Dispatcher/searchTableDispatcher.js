import axios from "axios";
import { searchBookedTable } from "../action";

const searchTableDispatcher = (mobile) =>{
    return async (dispatch) =>{
        const response = await axios.get("http://localhost:5000/booking_info");
        const bookingInfos = response.data;
        const searchInfo = bookingInfos.find((bookingInfo) => bookingInfo.mobile === mobile);
        const availableData = searchInfo ? true : false;
        dispatch(searchBookedTable(searchInfo,availableData));
    }
}


export default searchTableDispatcher;