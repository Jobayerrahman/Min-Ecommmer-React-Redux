import axios from "axios";
import { searchBookedTable } from "../action";

const searchTableDispatcher = (mobile) =>{
    return async (dispatch) =>{
        const response = await axios.get("https://restorajsondata.onrender.com/Restora_Tables_Booking_Info");
        const bookingInfos = response.data;
        const searchInfo = bookingInfos.find((bookingInfo) => bookingInfo.mobile === mobile);
        const availableData = searchInfo ? true : false;
        dispatch(searchBookedTable(searchInfo,availableData));
    }
}


export default searchTableDispatcher;