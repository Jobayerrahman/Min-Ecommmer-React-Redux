import '../../assets/modal.css';
import React, { useEffect, useState }from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import PlaceOrder from '../Cart/PlaceOrder';
import { toast } from 'react-toastify';
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
        toast.success("Your Order Place Successfully", {position: toast.POSITION.TOP_CENTER,} );
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
                        icon={faCircleXmark} />
                </div>
                <div className='flex 
                        flex-wrap justify-between 
                        w-full h-[800px] 
                        md:flex-nowrap lg:flex-nowrap lg:h-full 2xl:h-full'>
                    <div className='flex flex-col items-center
                            overflow-y-scroll hiddenScrollbar 
                            w-[100%] h-[250px] mb-3 p-2 rounded-md
                            border-solid border-2 border-[#f1f5f9]
                            shadow-lg shadow-state-200/50
                            md:w-[70%] md:h-[400px]
                            lg:w-[70%] lg:h-[400px]
                            md:border-none md:shadow-none
                            2xl:w-[70%] 2xl:h-[400px]'>
                        {showPlaceOrder ? (
                            <PlaceOrder/>
                        ):(
                            // Cart Item
                            state.items.map((item)=>
                                (<div className='flex items-center flex-row mt-1
                                        min-w-full h-[80px] 
                                        md:mb-2 lg:mb-2 2xl:w-[100%] 2xl:px-5 2xl:mt-3'>
                                    <div className='mx-1 md:mx-2 lg:mx-4'>
                                        <FontAwesomeIcon 
                                            className='text-dark text-[14px] hover:cursor-pointer' 
                                            icon={faCircleXmark} 
                                            onClick={() => handleRemoveItem(item.id)} />
                                    </div>
                                    <div className='flex items-center p-[5px] w-[100%] bg-[#e2e8f0] rounded-md 2xl:w-[100%] 2xl:p-4'>
                                        <img className='w-[50px] h-[40px] 
                                                object-coverrounded 
                                                rounded-md 
                                                md:w-[60px] md:h-[40px] 
                                                lg:w-[80px] lg:h-[60px]' 
                                                src={item.image} alt='Product Image'/>
                                        <div className='flex flex-row items-center 2xl:w-[100%] 2xl:mx-[5px]'>
                                            <div className='flex flex-row mx-2 mt-2 mb-3 lg:mx-5 2xl:w-[70%]'>
                                                <div className='w-3/5'>
                                                    <h2 className='text-[12px] 
                                                            font-[700] m-0
                                                            md:text-[14px] 
                                                            lg:m-0 lg:text-[18px]'> 
                                                            {item.name} 
                                                    </h2>
                                                </div>
                                                <div className='w-2/5'>
                                                    <spna className='text-[12px] 
                                                                font-[600] m-0 
                                                                md:text-[12px] 
                                                                lg:text-[14px]'>
                                                            ${(Math.round(item.price * 100) / 100).toFixed(2)}
                                                    </spna>
                                                </div>
                                            </div>
                                            <div className='flex flex-nowrap items-center my-1 lg:mx-2 mb-3 2xl:w-[30%]'>
                                                <button 
                                                    className='mx-1 lg:mx-2'>
                                                    <FontAwesomeIcon 
                                                        className='text-dark p-2 text-[20px] hover:cursor-pointer' 
                                                        icon={faSquareMinus} onClick={() => handleDecrement(item.id,item.price,item.count)} />
                                                </button>
                                                <h6 className='text-[12px] 
                                                                font-[800] m-0 
                                                                md:text-[12px] 
                                                                lg:text-[14px]'>{item.count}</h6>
                                                <button 
                                                    className='mx-1 lg:mx-2'>
                                                    <FontAwesomeIcon 
                                                        className='text-dark p-2 text-[20px] hover:cursor-pointer' 
                                                        icon={faSquarePlus} 
                                                        onClick={()=>handleIncrement(item.id,item.price)} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            )
                        )}
                    </div>

                    {/* Cart Info Table */}
                    <div className='flex flex-col p-4
                            overflow-y-scroll hiddenScrollbar
                            bg-[#e2e8f0] rounded-md 
                            w-[100%] h-[250px]
                            shadow-lg shadow-state-200/50
                            md:w-[250px] md:h-[400px]
                            lg:w-[30%] lg:h-[400px]
                            2xl:w-[30%] 2xl:h-[400px]'>
                        {state.isPlaceOrders ? (
                            <table className="mt-3 w-[100%] h-full p-5 rounded-md">
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Orderer Name:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">{state.placeOrders.name}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Orderer Mobile:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">{state.placeOrders.mobile}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Address:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">{state.placeOrders.address}</h4>
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
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Numbers of Product:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[600] mx-4 2xl:text-[16px]">{totalProduct}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Numbers of Item:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[600] mx-4 2xl:text-[16px]">{totalItem}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Total Price:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[600] mx-4 2xl:text-[18px]">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[24px]">Discount Amount:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[600] mx-4 2xl:text-[18px]">0%</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[24px]">Discounted Price:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[600] mx-4 2xl:text-[18px]">$300</h4>
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
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Numbers of Product:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">{totalProduct}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Numbers of Item:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">{totalItem}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Total Price:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Discount Amount:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[500] mx-4 2xl:text-[16px]">0%</h4>
                                    </td>
                                </tr>
                                <tr className="flex justify-start w-[100%] py-2">
                                    <td>
                                        <h2 className="text-[14px] font-[600] mx-4 2xl:text-[16px]">Discounted Price:</h2>
                                    </td>
                                    <td>
                                        <h4 className="text-[12px] font-[400] mx-4 2xl:text-[16px]">${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                                    </td>
                                </tr>
                            </table>
                        )}
                    </div>
                </div>
                
                {/* Modal Footer View */}
                <div className='flex justify-between mt-4'>
                    <h4 className='text-[12px] my-3 mx-2
                            font-[600] text-[#2b2b2b] lg:text-[16px]'>
                        Total Price - ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
                    </h4>
                    {state.items.length !== 0? (
                        showPlaceOrder ? (
                            state.isPlaceOrders ? (
                                <button 
                                    class="w-[160px] h-[40px]
                                        bg-[#2b2b2b] rounded-md
                                        text-[14px] font-[600]
                                        text-center text-white  
                                        md:w-[235px] lg:w-[280px]
                                        xl:w-[290px] 2xl:w-[330px]"
                                        onClick={handlePlaceOrder}
                                        >
                                    Place Order
                                </button>
                            ) : (
                                <button 
                                    class="w-[160px] h-[40px]
                                        bg-[#2b2b2b] rounded-md
                                        text-[14px] font-[600]
                                        text-center text-white  
                                        md:w-[235px] lg:w-[280px]
                                        xl:w-[290px] 2xl:w-[330px]"
                                        onClick={handleShowPlaceOrder}
                                        >
                                    BacK Cart
                                </button>
                            )
                        ):(
                            <button 
                                class="w-[160px] h-[40px]
                                    bg-[#2b2b2b] rounded-md
                                    text-[14px] font-[600]
                                    text-center text-white  
                                    md:w-[235px] lg:w-[280px]
                                    xl:w-[290px] 2xl:w-[330px]"
                                    onClick={handleShowPlaceOrder}
                                    >
                                Check Out 
                            </button>
                        )
                    ) : (
                        <button 
                            class="w-[160px] h-[40px]
                                bg-[#2b2b2b] rounded-md
                                text-[14px] font-[600]
                                text-center text-white  
                                md:w-[235px] lg:w-[280px]
                                xl:w-[290px] 2xl:w-[330px]
                                cursor-not-allowed"
                                >
                            Cart is empty 
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}