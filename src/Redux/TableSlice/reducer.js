import { TABLEDISPLAYED, TABLEBOOKED } from "./actionIdentifire";
import initialState from "./initialState";


const  generateId = (bookingStates) =>{
    const maxId = bookingStates.reduce((maxId, bookingState) => Math.max(bookingState.id, maxId),-1);
    return maxId +1;
}


const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case TABLEBOOKED:
            return{
                ...state,
                bookedInfos:[ 
                    ...state.bookedInfos,
                    {
                        id: generateId(state.bookedInfos),
                        name: action.payload.name,
                        mobile: action.payload.mobile,
                        table: action.payload.table,
                        member: action.payload.member,
                        time: action.payload.time,
                    }
                ]
            };
            
        case TABLEDISPLAYED:
            return{
                ...state,
                tables: action.payload
            };

        default:
            return state;
    }
}

export default reducer;