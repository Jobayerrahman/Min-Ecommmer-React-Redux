import { CARTADDED, CARTDISPLAYED, CARTREMOVED, CARTUPDATEDDECREMENT, CARTUPDATEDINCREMENT, PLACEORDERADDED, ORDERADDED } from "./actionIdentifire";


export const cartItemDisplayed = () =>{
    return {
        type: CARTDISPLAYED,
    }
}

export const cartItemAdded = (itemObject) =>{
    return {
        type: CARTADDED,
        payload: itemObject,
    }
}


export const cartItemRemoved = (itemId) =>{
    return{
        type: CARTREMOVED,
        payload: itemId
    }
}

export const cartItemIncrement = (itemId,price) =>{
    return{
        type: CARTUPDATEDINCREMENT,
        payload: {
            id: itemId,
            price: price
        }
    }
}

export const cartItemDecrement = (itemId,price) =>{
    return{
        type: CARTUPDATEDDECREMENT,
        payload: {
            id: itemId,
            price: price
        }
    }
}


export const placeOrderAdded = (placeOrderObj) =>{
    return {
        type: PLACEORDERADDED,
        payload: placeOrderObj
    }
}


export const orderAdded = (data,status) =>{
    return {
        type: ORDERADDED,
        payload: {
            dataObject: data,
            status: status
        }
    }
}