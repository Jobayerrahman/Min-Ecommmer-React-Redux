import { CARTADDED, CARTDISPLAYED, CARTREMOVED, CARTUPDATEDDECREMENT, CARTUPDATEDINCREMENT, ORDERADDED, PLACEORDERADDED } from "./actionIdentifire";
import initialState from "./initialState";


const  generateId = (states) =>{
    const maxId = states.reduce((maxId, state) => Math.max(state.id, maxId),-1);
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
        
        case PLACEORDERADDED:
            return{
                ...state,
                placeOrders:
                    {
                        name: action.payload.name,
                        mobile: action.payload.mobile,
                        email: action.payload.email,
                        password: action.payload.password,
                        address: action.payload.address,
                        discountcode: action.payload.discountcode
                    },
                isPlaceOrders : true,
            }

        case ORDERADDED:
            return{
                ...state,
                isPlaceOrders : false,
                orders:[
                    ...state.orders,
                    {
                        id: generateId(state.orders),
                        name: action.payload.dataObject.name,
                        mobile: action.payload.dataObject.mobile,
                        email: action.payload.dataObject.email,
                        password: action.payload.dataObject.password,
                        address: action.payload.dataObject.address,
                        discountcode: action.payload.dataObject.discountcode,
                        numbersOfProduct: action.payload.dataObject.numbersOfProduct,
                        numbersOfItem: action.payload.dataObject.numbersOfProduct,
                        totalPrice: action.payload.dataObject.totalPrice,
                        discount: action.payload.dataObject.discount,
                        discountedPrice: action.payload.dataObject.discountedPrice,
                        status: action.payload.status,
                    }
                ],
                items:[]
            }
    
        default:
            return state;
    }
}

export default reducer;