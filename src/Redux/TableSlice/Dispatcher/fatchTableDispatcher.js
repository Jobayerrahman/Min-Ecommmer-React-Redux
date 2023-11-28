import axios from "axios";
import { loadedTable } from "../action";

const fatchTableDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/tables");
        const tables = response.data;
        dispatch(loadedTable(tables));
    }
}

export default fatchTableDispatcher;