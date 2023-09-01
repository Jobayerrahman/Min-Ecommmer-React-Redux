import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Cartmodal from '../Modal/Cartmodal';
function Topnavigation(props) {
    const [showModal,setShowModal] = useState(false);
    const handleCart = () =>{
        setShowModal(true);
    }    

    const handleCloseCart = () =>{
        setShowModal(false);
    }

    const handleUser = () =>{
        console.log("User modal");
    }
    return (
        <div>
            <div className='flex 
                flex-row 
                bg-transparent 
                fixed top-0 
                bg-gray-700
                w-full 
                h-[50px] 
                p-[10px]'>
                <div className='basis-1/4 
                    w-full 
                    text-center 
                    h-full'>
                    <h2 className='text-[#fff] 
                            font-bold 
                            text-2xl 
                            hover:cursor-pointer'>
                        mini-E-commerce
                    </h2>
                </div>
                <div className='basis-1/4 text-center'>
                    <ul className='flex text-center basis-full'>
                        <li className='text-white 
                                font-medium 
                                text-base p-1
                                hover:text-black 
                                hover:bg-slate-100 
                                hover:rounded 
                                hover:cursor-pointer'>
                            Cetagories
                        </li>
                        <li className='text-white 
                                font-medium 
                                text-base p-1 
                                hover:text-black 
                                hover:bg-slate-100 
                                hover:rounded 
                                hover:cursor-pointer'>
                            Products
                        </li>
                    </ul>
                </div>
                <div className='basis-1/2 text-center mt-1'>
                    <FontAwesomeIcon 
                        className='text-white 
                        mr-2 p-2
                        text-lg
                        hover:cursor-pointer' 
                        onClick={handleCart} 
                        icon={faBagShopping} 
                        />
                    <FontAwesomeIcon 
                        className='text-white 
                        mr-2 p-2
                        text-lg
                        hover:cursor-pointer' 
                        onClick={handleUser} 
                        icon={faUser} />
                </div>
            </div>
            <Cartmodal showCart={showModal} closeCart={handleCloseCart} ></Cartmodal>
        </div>
    );
}

export default Topnavigation;