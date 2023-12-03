import axios from "axios";
import { filterTimeTable } from "../action";

const filterTimeTableDispatcher = (time) =>{
    return async (dispatch) =>{
        const response = await axios.get("https://restorajsondata.onrender.com/Restora_Foods_Tables");
        const tables = response.data;
        dispatch(filterTimeTable(tables,time));
    }
}


export default filterTimeTableDispatcher;