import axios from "axios";
import { placeOrderAdded } from "../actions";

export const placeOrderDispatcher = (orderObj) =>{
    return async (dispatch) => {
        const response = await axios.post("http://localhost:5000/order",orderObj);
        const OrderInfo = response.data;
        dispatch(placeOrderAdded(OrderInfo));
    }
}