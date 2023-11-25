import { applyMiddleware, createStore } from "redux";
import productReducer from "./Services/Reducer/ProductReducer";
import thunk from "redux-thunk";

const store =createStore(productReducer,applyMiddleware(thunk));
