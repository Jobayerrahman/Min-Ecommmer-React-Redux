import axios from "axios";
import { orderAdded } from "../actions";

const addOrderDispatcher = (orderObj) =>{
    return async (dispatch) =>{
        const response = await axios.post("http://localhost:5000/order",orderObj);
        const orderedInfo = response.data;
        const orderStatus = response.status;
        dispatch(orderAdded(orderedInfo,orderStatus));
    }
}

export default addOrderDispatcher;