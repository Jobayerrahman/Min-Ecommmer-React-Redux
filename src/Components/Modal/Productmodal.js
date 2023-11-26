import React from 'react';
import '../../assets/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Productdetails from '../Product/Productdetails';

function Productmodal({showProduct,closeProduct}) {

    const showHiddenProduct = showProduct ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenProduct}>
            <div className='modal-main product-modal'>
                <div className='flex 
                        justify-between
                        items-center'>
                    <h2 className='text-[26px] font-bold'>Product Name (0)</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        bg-slate-300
                        rounded-full
                        hover:cursor-pointer' 
                        onClick={closeProduct}
                        icon={faXmark} />
                </div>
                <div>
                    <Productdetails/>
                    {/* <div className='flex flex-wrap py-5 md:flex-nowrap md:p-5 lg:flex-nowrap lg:p-5'>
                        <div className='flex px-1 mb-5 md:mb-0'>
                            <div className='mr-2'>
                                <img className='w-[400px] 
                                    h-[200px] object-cover
                                    rounded' 
                                    src={burger}/>
                            </div>
                            <div className='mx-2'>
                                <img className='w-[400px] 
                                    h-[300px] object-cover
                                    rounded' 
                                    src={burger}/>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className='mx-3 mb-10
                                    flex flex-col text-start'>
                                <h2 className='text-[20px] 
                                        font-bold mb-5'>
                                    Product name
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
                                    <h6 className='text-[12px] font-semibold'>lg</h6>
                                    </div>
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
                                <h4 className='text-lg mt-3 
                                        font-bold
                                        text-slate-400'>
                                    Price - $300.00
                                </h4>
                                <button 
                                    class="bg-slate-900 
                                        p-2 text-center 
                                        text-white 
                                        rounded-md w-[150px] 
                                        h-[100]
                                        font-semibold">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Productmodal;