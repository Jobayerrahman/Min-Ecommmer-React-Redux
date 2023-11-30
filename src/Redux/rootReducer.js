import { combineReducers } from "redux";
import authSlice from "./AuthSlice/reducer";
import cartReducer from "./CartSlice/reducer";
import tableReducer from "./TableSlice/reducer";
import productReducer from './ProductsSlice/reducer';

const rootReducer = combineReducers({
    authSlice: authSlice,
    productSlice: productReducer,
    cartSlice: cartReducer,
    tableSlice: tableReducer
});

export default rootReducer;