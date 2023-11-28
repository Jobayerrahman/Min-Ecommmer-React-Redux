import { TABLELOADED, TABLEBOOKED, TABLEUPDATED, TABLETIME, TABLESEARCH, DELETEBOOKEDINFO, BOOKINGLOADED } from "./actionIdentifire";
import initialState from "./initialState";


const  generateId = (bookingStates) =>{
    const maxId = bookingStates.reduce((maxId, bookingState) => Math.max(bookingState.id, maxId),-1);
    return maxId +1;
}


const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case BOOKINGLOADED:
            return{
                ...state,
                bookedInfos: action.payload
            };

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

        case TABLELOADED:
            return{
                ...state,
                tables: action.payload
            };

        case TABLEUPDATED:
            return{
                ...state,
                searchBookedInfos:{
                    id: action.payload.info.id,
                    name: action.payload.info.name,
                    mobile: action.payload.info.mobile,
                    table: action.payload.info.table,
                    member: action.payload.info.member,
                    time: action.payload.info.time,
                },
                bookedInfos:
                    state.bookedInfos.map((bookedInfo)=>{
                        if(bookedInfo.id !== action.payload.info.id){
                            return bookedInfo;
                        }
                    
                        return {
                            ...bookedInfo,
                            name: action.payload.info.name,
                            mobile: action.payload.info.mobile,
                            table: action.payload.info.table,
                            member: action.payload.info.member,
                            time: action.payload.info.time,
                        }
                    })
            }

        case TABLETIME:
            return {
                 ...state,
                 tables: action.payload.tables.map((table) =>{
                    if((table.time != action.payload.time)){
                        return table;
                    }

                    return{
                        ...table,
                        color: "#020202"
                    }
                 })
            }; 
            
        case TABLESEARCH:
            return {
                ...state,
                isDataAvailable: action.payload.isDataAvailable,
                searchBookedInfos: action.payload.info
            }

        case DELETEBOOKEDINFO:
            return {
                ...state,
                isDataAvailable: action.payload.status === 200 ? false : true,
                message: action.payload.status === 200 ? "Information Deleted Successfully" : "Operation not possible, Something Wrong",
                bookedInfos: state.bookedInfos.filter((bookedInfo)=> bookedInfo.id !== action.payload.bookedId)
            };

        default:
            return state;
    }
}

export default reducer;