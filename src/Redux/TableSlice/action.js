import { TABLELOADED, TABLEBOOKED, TABLEUPDATED, TABLETIME, TABLESEARCH, DELETEBOOKEDINFO, BOOKINGLOADED } from './actionIdentifire';


export const added = (BookedInfo) =>{
    return{
        type: TABLEBOOKED,
        payload: BookedInfo,
    };
};

export const loaded = (BookedInfo) =>{
    return{
        type: BOOKINGLOADED,
        payload: BookedInfo,
    };
}


export const loadedTable = (tables) =>{
    return{
        type: TABLELOADED,
        payload: tables,
    };
};

export const updated = (BookedInfo,BookedStatus) =>{
    return{
        type: TABLEUPDATED,
        payload: {
            info: BookedInfo,
            status: BookedStatus,
        },
    };
};


export const filterTimeTable = (tables,time) =>{
    return{
        type: TABLETIME,
        payload: {
            tables: tables,
            time: time,
        },
    }
}


export const searchBookedTable = (searchInfo,availableData) =>{
    return{
        type: TABLESEARCH,
        payload: {
            info: searchInfo,
            isDataAvailable: availableData
        }
    }
}

export const deleteBookedInfo = (bookedId,status) =>{
    return{
        type:DELETEBOOKEDINFO,
        payload: {
            bookedId: bookedId,
            status: status
        }
    }
}