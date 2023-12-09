import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cartmodal from '../Modal/Cartmodal';
import { cartItemAdded } from '../../Redux/CartSlice/actions';


function Productdetails({onCloseProduct,...product}) {
    const dispatch = useDispatch();
 
    const handleCart = () =>{
        const itemObject = {name: product.title, price: product.price, count: 1, image: product.image, updatedPrice: product.price}
        dispatch(cartItemAdded(itemObject));
        toast.success("Add to Cart Successfully", {position: toast.POSITION.TOP_CENTER,} );
    }    

    return (
        <div className='flex flex-wrap py-5 md:flex-nowrap md:p-5 lg:flex-nowrap lg:p-5'>
            <div className='flex px-1 mb-5 md:mb-0'>
                <div className='mr-2'>
                    <img className='w-[400px] 
                        h-[200px] object-cover
                        rounded' 
                        src={product.image}/>
                </div>
                <div className='mx-2'>
                    <img className='w-[400px] 
                        h-[300px] object-cover
                        rounded' 
                        src={product.image}/>
                </div>
            </div>
            <div className='px-2'>
                <div className='mx-3 mb-10
                        flex flex-col text-start'>
                    <h2 className='text-[20px] 
                            font-bold mb-5'>
                        {product.title}
                    </h2>
                    <span className='text-[14px] 
                            font-medium mb-5'>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text ever since the 1500s
                    </span>
                </div>
                <div className='flex justify-between mb-10 px-2'>
                    <div className='flex'>
                        <div class="w-6 h-6 
                                bg-purple-50 
                                rounded-full 
                                border-2 m-1
                                border-zinc-700
                                flex justify-center 
                                items-center 
                                text-center p-2 
                                shadow-xl
                                cursor-pointer">
                            <h6 className='text-[12px] font-semibold'>M</h6>
                        </div>
                        <div className="w-6 h-6 
                                bg-purple-50 
                                rounded-full 
                                border-2 m-1
                                border-zinc-700
                                flex justify-center 
                                items-center 
                                text-center p-2 
                                shadow-xl
                                cursor-pointer">
                        <h6 className='text-[12px] font-semibold'>lg</h6>
                        </div>
                        <div className="w-6 h-6 
                                bg-purple-50 
                                rounded-full 
                                border-2 m-1
                                border-zinc-700
                                flex justify-center 
                                items-center 
                                text-center p-2 
                                shadow-xl
                                cursor-pointer">
                            <h6 className='text-[12px] font-semibold'>xl</h6>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=" bg-[#fbbf24] text-[#f9fafb] text-[12px] font-semibold rounded mx-1 cursor-pointer p-2">Normal</div>
                        <div className=" bg-slate-800 text-[#f9fafb] text-[12px] font-semibold rounded mx-1 cursor-pointer p-2">Special</div>
                        <div className=" bg-[#b91c1c] text-[#f9fafb] text-[12px] font-semibold rounded mx-1 cursor-pointer p-2">Naga</div>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3 px-2'>
                    <h4 className='text-[14px] mt-3 
                            font-bold
                            text-slate-500'>
                        Price - ${product.price}
                    </h4>
                    <button 
                        className="bg-slate-500 
                            p-2 text-center 
                            text-white 
                            rounded-md w-[150px] 
                            h-[100]
                            font-semibold"
                            onClick={() => { onCloseProduct(); handleCart(); }}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;