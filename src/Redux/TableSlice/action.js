import { TABLEDISPLAYED, TABLEBOOKED, TABLETIME, TABLESEARCH } from './actionIdentifire';


export const added = (BookedInfo) =>{
    return{
        type: TABLEBOOKED,
        payload: BookedInfo,
    };
};

export const displayTable = (tables) =>{
    return{
        type: TABLEDISPLAYED,
        payload: tables,
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