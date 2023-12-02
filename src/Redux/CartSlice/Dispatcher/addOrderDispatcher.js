import axios from "axios";
import { orderAdded } from "../actions";

const addOrderDispatcher = (orderObj) =>{
    return async (dispatch) =>{
        const response = await axios.post("https://jungle-green-jaguar-cuff.cyclic.app/Restora_Foods_Orders",orderObj);
        const orderedInfo = response.data;
        const orderStatus = response.status;
        dispatch(orderAdded(orderedInfo,orderStatus));
    }
}

export default addOrderDispatcher;