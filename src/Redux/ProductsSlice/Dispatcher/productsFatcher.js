import axios from "axios";
import { loaded,error, viewed } from "../actions";

export const productsFatcher = () => {
    return async (dispatch) => {
        dispatch(loaded())
        try{
            const response = await axios.get("https://restorajsondata.onrender.com/Restora_Foods_Product");
            const products = response.data;
            dispatch(viewed(products));
        }catch(err){
            dispatch(error(err));
        }
    }
}

export default productsFatcher;