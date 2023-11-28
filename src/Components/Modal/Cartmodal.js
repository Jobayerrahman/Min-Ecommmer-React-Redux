import '../../assets/modal.css';
import React, { useEffect, useState }from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PlaceOrder from '../Cart/PlaceOrder';
import { cartItemDecrement, cartItemIncrement, cartItemRemoved } from '../../Redux/CartSlice/actions';
import addOrderDispatcher from '../../Redux/CartSlice/Dispatcher/addOrderDispatcher';

export default function Cartmodal({showCart,closeCart}) {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.cartSlice);

    // useEffect(()=>{getItemName()},[]);
    // const [itemName,setItemName] = useState([]);

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";
    const [showPlaceOrder,setShowPlaceOrder] = useState(false);

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

    const handleShowPlaceOrder = () =>{
        setShowPlaceOrder(!showPlaceOrder);
    }

    // const getItemName = () =>{
    //     state.items.map((item)=> {
    //         setItemName([...itemName,item.name])
    //     })
    // }

    const totalProduct  = state.items.length;
    const totalItem     = state.items.reduce((total,item) => total + item.count, 0);
    const totalPrice    = state.items.reduce((total,item) => total + item.price ,0);

    const handlePlaceOrder = (e) =>{
        e.preventDefault();
        const orderObject = {
            name: state.placeOrders.name,
            mobile: state.placeOrders.mobile,
            email: state.placeOrders.email,
            password: state.placeOrders.password,
            address: state.placeOrders.address,
            discountcode: state.placeOrders.discountcode,
            numbersOfProduct: totalProduct,
            numbersOfItem: totalItem,
            totalPrice: totalPrice,
            discount: 0,
            discountedPrice: totalPrice,
        }
        
        dispatch(addOrderDispatcher(orderObject));
        console.log(state)
    }

    return (
        <div className={showHiddenCart}>
            <div className='modal-main cart-modal'>
                <div className='flex 
                        justify-between
                        items-center mb-6'>
                    {state.items.length !== 0? (
                        <h2 className='text-[20px] font-bold text-[#1f2937] font-serif'>{showPlaceOrder ? 'Placing My Order' : 'My Cart'}</h2>
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
                    <div className='flex flex-col overflow-y-scroll hiddenScrollbar w-[100%] md:w-[400px] lg:w-[500px] md:h-[300px] lg:h-[350px]'>
                        {showPlaceOrder ? (
                            <PlaceOrder/>
                        ):(
                            // Cart Item
                            state.items.map((item)=>
                                (<div className='flex items-center flex-row min-w-full h-[80px] md:mb-2 lg:mb-2'>
                                    <div className='mx-1 md:mx-2 lg:mx-4'>
                                        <FontAwesomeIcon className='text-dark p-2text-lghover:cursor-pointer' icon={faXmark} onClick={() => handleRemoveItem(item.id)} />
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-[50px] h-[40px] 
                                                object-coverrounded 
                                                rounded-md 
                                                md:w-[60px] md:h-[40px] 
                                                lg:w-[80px] lg:h-[60px]' 
                                                src={item.image} alt='Product Image'/>
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
                            )
                        )}
                    </div>

                    {/* Cart Info Table */}
                    <div className='w-[100%] h-[400px] 
                            flex flex-col p-4
                            overflow-y-scroll hiddenScrollbar
                            bg-[#e2e8f0] rounded-md 
                            md:w-[250px] md:h-[400px]
                            lg:w-[300px] lg:h-[400px]'>
                        {state.isPlaceOrders ? (
                            <table className="mt-3 w-[100%] h-[400px] p-5 rounded-md">
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="font-[24px] font-[700] mx-4">Orderer Name:</h2>
                                    </td>
                                    <td>
                                        <h4 className="font-[18px] font-[400] mx-4">{state.placeOrders.name}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="font-[24px] font-[700] mx-4">Orderer Mobile:</h2>
                                    </td>
                                    <td>
                                        <h4 className="font-[18px] font-[400] mx-4">{state.placeOrders.mobile}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="font-[24px] font-[700] mx-4">Address:</h2>
                                    </td>
                                    <td>
                                        <h4 className="font-[18px] font-[400] mx-4">{state.placeOrders.address}</h4>
                                    </td>
                                </tr>
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
                                        <h2 className="font-[24px] font-[700] mx-4">Numbers of Product:</h2>
                                    </td>
                                    <td>
                                        <h4 className="font-[18px] font-[400] mx-4">{totalProduct}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="font-[24px] font-[700] mx-4">Numbers of Item:</h2>
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
                        ):(
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
                                        <h2 className="font-[24px] font-[700] mx-4">Numbers of Product:</h2>
                                    </td>
                                    <td>
                                        <h4 className="font-[18px] font-[400] mx-4">{totalProduct}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="font-[24px] font-[700] mx-4">Numbers of Item:</h2>
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
                                        <h4 className="font-[18px] font-[400] mx-4">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                                    </td>
                                </tr>
                            </table>
                        )}
                    </div>
                </div>
                
                {/* Modal Footer View */}
                <div className='flex justify-between mt-2'>
                    <h4 className='text-[15px] mt-3 
                            font-bold mb-3
                            text-slate-400 lg:text-[22px]'>
                        Total Price - ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
                    </h4>
                    {state.items.length !== 0? (
                        showPlaceOrder ? (
                            state.isPlaceOrders ? (
                                <button 
                                    class="bg-[#334155]
                                        py-2 px-4 
                                        text-center 
                                        text-white w-[200px]
                                        rounded-md 
                                        md:w-[250px] lg:w-[300px] 
                                        font-[600]"
                                        onClick={handlePlaceOrder}
                                        >
                                    Place Order
                                </button>
                            ) : (
                                <button 
                                    class="bg-[#334155]
                                        py-2 px-4 
                                        text-center 
                                        text-white w-[200px]
                                        rounded-md 
                                        md:w-[250px] lg:w-[300px] 
                                        font-[600]"
                                        onClick={handleShowPlaceOrder}
                                        >
                                    BacK Cart
                                </button>
                            )
                        ):(
                            <button 
                                class="bg-slate-900 
                                    py-2 px-4 
                                    text-center 
                                    text-white w-[200px]
                                    rounded-md 
                                    md:w-[250px] lg:w-[300px] 
                                    font-[600]"
                                    onClick={handleShowPlaceOrder}
                                    >
                                Check Out 
                            </button>
                        )
                    ) : (
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
        </div>
    );
}