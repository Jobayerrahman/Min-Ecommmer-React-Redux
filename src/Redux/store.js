import thunk from "redux-thunk"; 
import { applyMiddleware,createStore } from "redux";
import tableReducer from "./TableSlice/reducer";

const store =createStore(tableReducer,applyMiddleware(thunk));

export default store;