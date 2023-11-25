import axios from "axios";
import { added } from "../action";

const addTableDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.post("http://localhost:5000/tables",bookedInfo);
        const BookedInfo = response.data;
        dispatch(added(BookedInfo));
    }
}

export default addTableDispatcher;