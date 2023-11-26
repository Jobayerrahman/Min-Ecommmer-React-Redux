import React from 'react';
import '../../assets/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/image/image01.jpeg';
import PlaceOrderModal from './Placeordermodal';
import { useState } from 'react';

export default function Cartmodal({showCart,closeCart}) {

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";

    const [count, setCount] = useState(0);
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);

    const handleRemoveProduct= () =>{
        if(count !== 0){
            setCount(count-1);
        }
    }

    const handleAddProduct= () =>{
        setCount(count+1);
    }

    const handlePlaceOrder = () =>{
        setShowPlaceOrderModal(true);
    }    

    const handleClosePlaceOrder = () =>{
        setShowPlaceOrderModal(false);
    }

    return (
        <div className={showHiddenCart}>
            <div className='modal-main cart-modal'>
                <div className='flex 
                        justify-between
                        items-center mb-6'>
                    <h2 className='text-3xl font-bold'>Product Cart</h2>
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
                        w-[100%] h-fit 
                        md:flex-nowrap lg:flex-nowrap'>

                    <div className='flex flex-col overflow-y-scroll md:h-[300px] lg:h-[350px]'>
                        <div className='flex items-center flex-row h-[80px] md:mb-2 lg:mb-2'>
                            <div className='mx-1 md:mx-2 lg:mx-4'>
                                <FontAwesomeIcon className='text-dark p-2text-lghover:cursor-pointer' icon={faXmark} />
                            </div>
                            <div className='flex items-center'>
                                <img className='w-[50px] h-[40px] 
                                        object-coverrounded 
                                        rounded-md 
                                        md:w-[60px] md:h-[40px] 
                                        lg:w-[80px] lg:h-[60px]' 
                                        src={productImage}/>
                                <div className='flex flex-row items-center'>
                                    <div className='flex flex-row mx-2 mb-3 lg:mx-5'>
                                        <h2 className='text-[14px] 
                                                font-bold mx-1 
                                                md:text-[18px] 
                                                lg:mx-5 lg:text-[24px]'> 
                                                Product name 
                                        </h2>
                                        <spna className='text-[12px] 
                                                    font-medium mx-1 mt-1 
                                                    lg:mx-5 lg:mt-2 
                                                    md:text-[12px] 
                                                    lg:mx-5 lg:text-[14px]'>
                                                $20.00
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
                                            onClick={handleRemoveProduct}>
                                            -
                                        </button>
                                        <h6 className='text-xl font-bold mx-2'>{count}</h6>
                                        <button 
                                            className='text-[14px] 
                                                font-extrabold 
                                                mx-1 px-2 pb-1
                                                bg-slate-900
                                                text-white lg:px-3
                                                rounded-md lg:mx-2  lg:text-[20px]' 
                                            onClick={handleAddProduct}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[400px] 
                            flex flex-col 
                            bg-[#e2e8f0] rounded-md 
                            md:w-[250px] md:h-full
                            lg:w-[300px] lg:h-full'>

                    </div>
                </div>
                
                <div className='flex justify-between mt-2'>
                    <h4 className='text-[15px] mt-3 
                            font-bold mb-3
                            text-slate-400 lg:text-2xl'>
                        Total - $300.00
                    </h4>
                    <button 
                        class="bg-slate-900 
                            py-2 px-4 
                            text-center 
                            text-white w-[200px]
                            rounded-md 
                            md:w-[250px] lg:w-[300px] 
                            font-semibold"
                            onClick={handlePlaceOrder}
                            >
                        Checkout 
                    </button>
                </div>
            </div>
            <PlaceOrderModal showPlaceOrder={showPlaceOrderModal} closePlaceOrder={handleClosePlaceOrder} />
        </div>
    );
}