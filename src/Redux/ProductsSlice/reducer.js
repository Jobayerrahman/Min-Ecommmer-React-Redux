import { Loading, ERROR, PRODUCTSVIEWED } from "./actionIdentifire";
import initialState from "./initialState";

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case Loading:
            return{
                ...state,
                isLoading: true
            }
        
        case PRODUCTSVIEWED:
            return{
                ...state,
                isLoading: false,
                products: action.payload,
                originalList:action.payload,
                error: null
            }

        case ERROR:
            return{
                isLoading:false,
                products :[],
                errors   :action.payload
            }
        
        default:
            return state;
    }
}

export default reducer;