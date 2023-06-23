import { GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../Constants/ProductConstant"

const initialState = {
    isLoading: false,
    products : [],
    errors   : null
}


const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_PRODUCT_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return{
                isLoading:false,
                products :action.payload,
                errors   :null
            }

        case GET_PRODUCT_FAILED:
            return{
                isLoading:false,
                products :[],
                errors   :action.payload
            }
        default:
            return state;
    }
};

export default productReducer;