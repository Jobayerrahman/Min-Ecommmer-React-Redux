import thunk from "redux-thunk"; 
import { applyMiddleware,createStore } from "redux";
import productReducer from './ProductsSlice/reducer';
import tableReducer from "./TableSlice/reducer";

const store =createStore(productReducer,applyMiddleware(thunk));

export default store;