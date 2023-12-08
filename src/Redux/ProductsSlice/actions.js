import { PRODUCTSVIEWED, ERROR, Loading, NEXTPRODUCT, PREVIOUSPRODUCT } from "./actionIdentifire";



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

export const nextProduct = () =>{
    return{
        type:NEXTPRODUCT,
    }
}

export const previousProduct = () =>{
    return{
        type:PREVIOUSPRODUCT,
    }
}