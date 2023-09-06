import React from 'react';
import '../../assets/cartmodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/image/image01.jpeg';
import { useState } from 'react';

function Cartmodal({showCart,closeCart}) {

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";

    const [count, setCount] = useState(0);
    const [isProduct, setIsProduct] = useState(true);

    const handleRemoveProduct= () =>{
        if(count !== 0){
            setCount(count-1);
        }
    }

    const handleAddProduct= () =>{
        setCount(count+1);
    }

    const handleProductCard= () =>{
        setIsProduct(false);
    }

    return (
        <div className={showHiddenCart}>
            <div className='modal-main'>
                <div className='flex 
                        justify-between
                        items-center mb-6'>
                    <h2 className='text-3xl font-bold'>Cart Modal (0)</h2>
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

                <div className='flex flex-wrap w-full h-full overflow-y-auto'>
                    {isProduct? (
                        <div className='card flex h-[150px]'>
                            <div className='flex'>
                                <img className='w-[200px] 
                                        h-[auto] object-cover
                                        rounded' 
                                        src={productImage}/>
                                <div className='flex flex-col'>
                                    <div className='mx-5 mb-3'>
                                        <h2 className='text-2xl 
                                                font-bold mb-2'>
                                            Product name
                                        </h2>
                                        <spna className='text-sm-[18px] 
                                                font-medium mb-2'>
                                            $20.00
                                        </spna>
                                    </div>
                                    <div className='flex flex-nowrap items-center mt-4 mx-2 mb-3'>
                                        <button 
                                            className='text-2xl 
                                                font-extrabold 
                                                mx-2 px-3 pb-1
                                                bg-slate-900
                                                text-white
                                                rounded-md' 
                                            onClick={handleRemoveProduct}>
                                            -
                                        </button>
                                        <h6 
                                            className='text-xl 
                                                font-bold mx-2'>
                                                    {count}
                                        </h6>
                                        <button 
                                            className='text-2xl 
                                                font-extrabold 
                                                mx-2 px-3 pb-1
                                                bg-slate-900
                                                text-white
                                                rounded-md' 
                                            onClick={handleAddProduct}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon 
                                    className='text-dark 
                                        mr-2 p-2text-lg
                                        hover:cursor-pointer' 
                                    onClick={handleProductCard}
                                    icon={faXmark} />
                            </div>
                        </div>
                    ):null}
                </div>
                
                <div className='flex justify-between'>
                    <h4 className='text-2xl mt-3 
                            font-bold mb-3
                            text-slate-400'>
                        Total - $300.00
                    </h4>
                    <button 
                        class="bg-slate-900 
                            py-2 px-4 
                            text-center 
                            text-white 
                            rounded-md w-[300px] 
                            font-semibold">
                        Checkout 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cartmodal;