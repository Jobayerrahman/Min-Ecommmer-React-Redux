import React from 'react';
import Productimage from '../../assets/image/image04.jpg'
function Productdetails(props) {
    return (
        <div className='flex p-5'>
            <div className='flex px-2'>
                <div className='mr-2'>
                    <img className='w-[400px] 
                        h-[200px] object-cover
                        rounded' 
                        src={Productimage}/>
                </div>
                <div className='mx-2'>
                    <img className='w-[400px] 
                        h-[300px] object-cover
                        rounded' 
                        src={Productimage}/>
                </div>
            </div>
            <div className='px-2'>
                <div className='mx-3 mb-10
                        flex flex-col'>
                    <h2 className='text-2xl 
                            font-bold mb-5'>
                        Product name
                    </h2>
                    <span className='text-sm-[18px] 
                            font-medium mb-5'>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text ever since the 1500s
                    </span>
                </div>
                <div className='flex justify-between mb-5 px-2'>
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
                            <h6 className='text-sm'>M</h6>
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
                           <h6 className='text-sm'>lg</h6>
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
                            <h6 className='text-sm'>xl</h6>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="w-6 h-6 bg-red-600 rounded-full mx-1 cursor-pointer p-2"></div>
                        <div className="w-6 h-6 bg-slate-800 rounded-full mx-1 cursor-pointer p-2"></div>
                        <div className="w-6 h-6 bg-slate-800 rounded-full mx-1 cursor-pointer p-2"></div>
                    </div>
                </div>
                <div className='flex justify-between mb-3 px-2'>
                    <h4 className='text-lg mt-3 
                            font-bold
                            text-slate-400'>
                        Total - $300.00
                    </h4>
                    <button 
                        class="bg-slate-900 
                            px-2 text-center 
                            text-white 
                            rounded-md w-[150px] 
                            h-[100]
                            font-semibold">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;