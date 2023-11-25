import { TABLEDISPLAYED, TABLEBOOKED } from './actionIdentifire';


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