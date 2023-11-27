import { CARTADDED, CARTDELETED, CARTDISPLAYED, CARTREMOVED, CARTUPDATEDDECREMENT, CARTUPDATEDINCREMENT } from "./actionIdentifire";
import initialState from "./initialState";


const  generateId = (bookingStates) =>{
    const maxId = bookingStates.reduce((maxId, bookingState) => Math.max(bookingState.id, maxId),-1);
    return maxId +1;
}

const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case CARTDISPLAYED:
            return state;
        
        case CARTADDED:
            return {
                ...state,
                items:  [
                    ...state.items,
                    {
                        id:generateId(state.items),
                        name: action.payload.name,
                        price: action.payload.price,
                        image: action.payload.image,
                        count: action.payload.count,
                        updatedPrice: action.payload.price,
                    }
                ],
            }
        
        case CARTREMOVED:
            return{
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            }

        case CARTUPDATEDINCREMENT:
            return {
                ...state,
                items: 
                    state.items.map((item) =>{
                        if(item.id !== action.payload.id){
                            return item;
                        }
                        return{
                            ...item,
                            count: item.count + 1,
                            price: item.price + item.updatedPrice,
                        }
                    })   
            }

        case CARTUPDATEDDECREMENT:
            return{ 
                ...state,
                items:
                    state.items.map((item)=>{
                        if(item.id !== action.payload.id) {
                            return item;
                        } 

                        return{
                            ...item,
                            count: item.count - 1,
                            price: item.price - item.updatedPrice,
                        }
                    })
            }
    
        default:
            return state;
    }
}

export default reducer;