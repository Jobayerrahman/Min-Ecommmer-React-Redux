import React, { useEffect, useState }from 'react';
import '../../assets/modal.css';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PlaceOrderModal from './Placeordermodal';
import { cartItemDecrement, cartItemIncrement, cartItemRemoved } from '../../Redux/CartSlice/actions';

export default function Cartmodal({showCart,closeCart}) {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.cartSlice);

    // useEffect(()=>{getItemName()},[]);
    // const [itemName,setItemName] = useState([]);

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);

    const handleIncrement= (id,price) =>{
        dispatch(cartItemIncrement(id,price));
    }

    const handleDecrement= (id,price,count) =>{
        if(count !== 1){
            dispatch(cartItemDecrement(id,price))
        }else{
            dispatch(cartItemRemoved(id));
        }
    }

    const handleRemoveItem = (id) =>{
        dispatch(cartItemRemoved(id));
    }

    const handlePlaceOrder = () =>{
        setShowPlaceOrderModal(true);
    }    

    const handleClosePlaceOrder = () =>{
        setShowPlaceOrderModal(false);
    }

    // const getItemName = () =>{
    //     state.items.map((item)=> {
    //         setItemName([...itemName,item.name])
    //     })
    // }

    const totalItem     = state.items.length
    const totalPrice    = state.items.reduce((total,item) => total + item.price ,0)

    return (
        <div className={showHiddenCart}>
            <div className='modal-main cart-modal'>
                <div className='flex 
                        justify-between
                        items-center mb-6'>
                    {state.items.length !== 0? (
                    <h2 className='text-[20px] font-bold text-[#1f2937] font-serif'>My Cart</h2>
                    ) : (
                        <h2 className='text-[20px] font-bold text-[#4b5563] font-serif'>Your Cart Is Empty</h2>
                    )}
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        bg-slate-300
                        rounded-full
                        hover:cursor-pointer' 
                        onClick={closeCart}
                        icon={faXmark} />
                </div>

                <div className='flex 
                        flex-wrap justify-between 
                        w-[100%] h-[100%] 
                        md:flex-nowrap lg:flex-nowrap'>
                    <div className='flex flex-col overflow-y-scroll hiddenScrollbar md:h-[300px] lg:h-[350px]'>
                    {state.items.map((item)=>
                            (<div className='flex items-center flex-row h-[80px] md:mb-2 lg:mb-2'>
                                <div className='mx-1 md:mx-2 lg:mx-4'>
                                    <FontAwesomeIcon className='text-dark p-2text-lghover:cursor-pointer' icon={faXmark} onClick={() => handleRemoveItem(item.id)} />
                                </div>
                                <div className='flex items-center'>
                                    <img className='w-[50px] h-[40px] 
                                            object-coverrounded 
                                            rounded-md 
                                            md:w-[60px] md:h-[40px] 
                                            lg:w-[80px] lg:h-[60px]' 
                                            src={item.image}/>
                                    <div className='flex flex-row items-center'>
                                        <div className='flex flex-row mx-2 mb-3 lg:mx-5'>
                                            <h2 className='text-[12px] 
                                                    font-bold mx-2 mt-2 
                                                    md:text-[14px] 
                                                    lg:mx-5 lg:mt-1 lg:text-[18px]'> 
                                                    {item.name} 
                                            </h2>
                                            <spna className='text-[12px] 
                                                        font-medium mx-1 mt-1 
                                                        lg:mx-5 lg:mt-1 
                                                        md:text-[12px] 
                                                        lg:mx-5 lg:text-[14px]'>
                                                    ${(Math.round(item.price * 100) / 100).toFixed(2)}
                                            </spna>
                                        </div>
                                        <div className='flex flex-nowrap items-center my-1 lg:mx-2 mb-3'>
                                            <button 
                                                className='text-[14px] 
                                                    font-extrabold mx-1 
                                                    px-2 pb-1
                                                    bg-slate-900
                                                    lg:mx-2 lg:px-3
                                                    text-white
                                                    rounded-md lg:text-[20px]' 
                                                onClick={() => handleDecrement(item.id,item.price,item.count)}>
                                                -
                                            </button>
                                            <h6 className='text-xl font-bold mx-2'>{item.count}</h6>
                                            <button 
                                                className='text-[14px] 
                                                    font-extrabold 
                                                    mx-1 px-2 pb-1
                                                    bg-slate-900
                                                    text-white lg:px-3
                                                    rounded-md lg:mx-2  lg:text-[20px]' 
                                                onClick={()=>handleIncrement(item.id,item.price)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        )}
                    </div>
                    <div className='w-[100%] h-[400px] 
                            flex flex-col p-4
                            bg-[#e2e8f0] rounded-md 
                            md:w-[250px] md:h-full
                            lg:w-[300px] lg:h-full'>
                        <table className="mt-3 w-[100%] h-[auto] p-5 rounded-md">
                            {/* <tr className="flex justify-start w-[100%] py-2">
                                <td>
                                    <h2 className="font-[24px] font-[700] mx-4">Name:</h2>
                                </td>
                                <td>
                                    <h4 className="font-[18px] font-[400] mx-4"></h4>
                                </td>
                            </tr> */}
                            <tr className="flex justify-start w-[100%] py-2">
                                <td>
                                    <h2 className="font-[24px] font-[700] mx-4">Number of Item:</h2>
                                </td>
                                <td>
                                    <h4 className="font-[18px] font-[400] mx-4">{totalItem}</h4>
                                </td>
                            </tr>
                            <tr className="flex justify-start w-[100%] py-2">
                                <td>
                                    <h2 className="font-[24px] font-[700] mx-4">Total Price:</h2>
                                </td>
                                <td>
                                    <h4 className="font-[18px] font-[400] mx-4">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                                </td>
                            </tr>
                            <tr className="flex justify-start w-[100%] py-2">
                                <td>
                                    <h2 className="font-[24px] font-[700] mx-4">Discount Amount:</h2>
                                </td>
                                <td>
                                    <h4 className="font-[18px] font-[400] mx-4">0%</h4>
                                </td>
                            </tr>
                            <tr className="flex justify-start w-[100%] py-2">
                                <td>
                                    <h2 className="font-[24px] font-[700] mx-4">Discounted Price:</h2>
                                </td>
                                <td>
                                    <h4 className="font-[18px] font-[400] mx-4">$300</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <div className='flex justify-between mt-2'>
                    <h4 className='text-[15px] mt-3 
                            font-bold mb-3
                            text-slate-400 lg:text-[22px]'>
                        Total Price - ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
                    </h4>
                    {state.items.length !== 0? (<button 
                        class="bg-slate-900 
                            py-2 px-4 
                            text-center 
                            text-white w-[200px]
                            rounded-md 
                            md:w-[250px] lg:w-[300px] 
                            font-[600]"
                            onClick={handlePlaceOrder}
                            >
                        Checkout 
                    </button>) : (
                    <button 
                        class="bg-[#9ca3af]
                            py-2 px-4 
                            text-center 
                            text-white w-[200px]
                            rounded-md 
                            md:w-[250px] lg:w-[300px] 
                            font-[600] cursor-not-allowed"
                            >
                        Cart is empty 
                    </button>
                    )}
                </div>
            </div>
            <PlaceOrderModal showPlaceOrder={showPlaceOrderModal} closePlaceOrder={handleClosePlaceOrder} />
        </div>
    );
}