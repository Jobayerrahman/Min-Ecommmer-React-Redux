import axios from "axios";
import { loadedTable } from "../action";

const fatchTableDispatcher = () =>{
    return async (dispatch) => {
        const response = await axios.get("https://jungle-green-jaguar-cuff.cyclic.app/Restora_Foods_Tables");
        const tables = response.data;
        dispatch(loadedTable(tables));
    }
}

export default fatchTableDispatcher;