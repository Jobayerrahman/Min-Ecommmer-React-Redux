import { SHOWLOGIN, SHOWREGISTER } from "./actionIdentifire";


export const showLogin =(status) =>{
    return{
        type: SHOWLOGIN,
        payload: status
    }
}

export const showRegister =(status) =>{
    return{
        type: SHOWREGISTER,
        payload: status
    }
}