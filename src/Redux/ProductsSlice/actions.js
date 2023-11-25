import { PRODUCTSVIEWED, ERROR, Loading } from "./actionIdentifire";



export const loaded = () =>{
    return{
        type: Loading,
    }
}

export const error = (error) =>{
    return{
        type: ERROR,
        payload: error
    }
}

export const viewed = (view) =>{
    return{
        type: PRODUCTSVIEWED,
        payload: view
    }
}