import React from 'react';
import '../../assets/cartmodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/image/image01.jpeg';
import { useState } from 'react';

function Cartmodal({showCart,closeCart}) {

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";

    const [count, setCount] = useState(0);

    const handleRemoveProduct= () =>{
        if(count !== 0){
            setCount(count-1);
        }
    }

    const handleAddProduct= () =>{
        setCount(count+1);
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

                <div className='flex m-4 w-full'>
                    <div>
                        <img src={productImage}/>
                        <div className='flex flex-col'>
                            <div className='mx-5'>
                                <h2 className='text-2xl font-bold mb-2'>Product name</h2>
                                <spna className='text-xl font-bold mb-2'>$20.00</spna>
                            </div>
                            <div className='flex flex-nowrap items-center mt-4 mx-2'>
                                <button className='text-2xl font-bold mx-2' onClick={handleRemoveProduct}>-</button>
                                <h6 className='text-3xl font-bold mx-2'>{count}</h6>
                                <button className='text-2xl font-bold mx-2' onClick={handleAddProduct}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartmodal;