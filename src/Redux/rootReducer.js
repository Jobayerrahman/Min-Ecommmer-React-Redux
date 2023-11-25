import { combineReducers } from "redux";
import productReducer from './ProductsSlice/reducer';
import tableReducer from "./TableSlice/reducer";

const rootReducer = combineReducers({productReducer,tableReducer});

export default rootReducer;