import { combineReducers } from "redux";
import productReducer from './ProductsSlice/reducer';
import tableReducer from "./TableSlice/reducer";
import cartReducer from "./CartSlice/reducer";

const rootReducer = combineReducers({
    productSlice: productReducer,
    cartSlice: cartReducer,
    tableSlice: tableReducer
});

export default rootReducer;