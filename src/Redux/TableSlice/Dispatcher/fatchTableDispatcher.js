import axios from "axios";
import { displayTable } from "../action";

const fatchTableDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/tables");
        const tables = response.data;
        dispatch(displayTable(tables));
    }
}

export default fatchTableDispatcher;