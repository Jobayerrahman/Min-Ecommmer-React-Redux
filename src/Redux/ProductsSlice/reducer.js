import { Loading, ERROR, PRODUCTSVIEWED, NEXTPRODUCT, PREVIOUSPRODUCT } from "./actionIdentifire";
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

        case NEXTPRODUCT:
            return{
                ...state,
                isLoading: false,
                element: state.originalList.shift(),
                nextList: state.nextList.push(state.element),
                errors:null
            }
        
    
        default:
            return state;
    }
}

export default reducer;