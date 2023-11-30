import { SHOWLOGIN, SHOWREGISTER } from "./actionIdentifire";
import initialState from "./initialState";


const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case SHOWLOGIN:
            return{
                ...state,
                showLoginModal: action.payload,
            }

        case SHOWREGISTER:
            return{
                ...state,
                showRegisterModal: action.payload,
            }
    
        default:
            return state;
    }
}


export default reducer;