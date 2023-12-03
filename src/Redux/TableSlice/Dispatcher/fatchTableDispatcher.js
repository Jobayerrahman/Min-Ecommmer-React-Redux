import axios from "axios";
import { loadedTable } from "../action";

const fatchTableDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("https://restorajsondata.onrender.com/Restora_Foods_Tables");
        const tables = response.data;
        dispatch(loadedTable(tables));
    }
}

export default fatchTableDispatcher;