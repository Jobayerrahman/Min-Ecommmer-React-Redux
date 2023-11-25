import { TABLEADDED, TABLEBOOKED } from './actionIdentifire';


export const added = (BookedInfo) =>{
    return{
        type: TABLEBOOKED,
        payload: BookedInfo,
    };
};