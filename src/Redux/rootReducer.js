import { combineReducers } from "redux";
import productReducer from './ProductsSlice/reducer';
import tableReducer from "./TableSlice/reducer";

const rootReducer = combineReducers({
    productSlice: productReducer,
    tableSlice: tableReducer
});

export default rootReducer;