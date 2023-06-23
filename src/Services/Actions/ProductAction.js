import axios from "axios";
import { GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_API_URL } from "../Constants/ProductConstant";


export const getAllProduct = () => async (dispatch) =>{
    dispatch({type: GET_PRODUCT_REQUEST});
    try{
        const res = await axios.get(PRODUCT_API_URL);
        dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data});
    }catch(error){
        dispatch({type:GET_PRODUCT_FAILED, payload:error.message});
    }
};