import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Cartmodal from '../Modal/Cartmodal';
import Authmodal from '../Modal/Authmodal';
function Topnavigation(props) {
    const [navigationStyle,setNavigationStyle] = useState('navigationWrapper');
    const [showCartModal,setShowCartModal] = useState(false);
    const [showAuthModal,setShowAuthModal] = useState(false);

    const state = useSelector((state)=>state);

    const handleCart = () =>{
        setShowCartModal(true);
    }    

    const handleCloseCart = () =>{
        setShowCartModal(false);
    }

    const handleUser = () =>{
        setShowAuthModal(true);
    }

    const handleCloseAuth = () =>{
        setShowAuthModal(false);
    }

    const onScroll=()=>{
        if(window.scrollY>100){
            setNavigationStyle("navigationScrollWrapper");
        }
        else if(window.scrollY<100){
            setNavigationStyle("navigationWrapper");
        }
    }

    useEffect(()=>{ window.addEventListener('scroll', onScroll); },[])
    
    useEffect(()=>{
        if(window>100){
            setNavigationStyle("navigationScrollWrapper");
        }
        else if(window<100){
            setNavigationStyle("navigationWrapper");
        }
    },[])

    return (
        <div>
            <div className={navigationStyle}>
                <div>
                    <a className='navigationTitle'>
                        Restora
                    </a>
                </div>
                <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                    <a className='flex justify-center items-center
                            p-2 bg-trasparnt text-white font-serif
                            border-2 border-gray-50 text-[12px]
                            md:text-[14px] font-[500] min-w-[120px] 
                            min-w-[120px] md:min-w-[150px] 
                            md:max-w-[150px] rounded
                            hover:cursor-pointer color-animatedBtn'
                        onClick={state.cartSlice.items.length !== 0? handleCart : handleUser }>
                            {state.cartSlice.items.length !== 0 ? 'My Cart' : 'Order Now' }
                            
                            {/* <FontAwesomeIcon 
                                className='navigationIcon' 
                                onClick={handleCart} 
                                icon={faBagShopping} 
                                /> */}
                    </a>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="flex justify-center items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col 
                        p-4 md:p-0 mt-4 
                        font-medium rounded-lg bg-transparent 
                        md:space-x-8 rtl:space-x-reverse 
                        md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                        <li>
                            <a className='text-white font-semibold font-serif mr-4 
                                hover:text-[#e6ac0e]  hover:cursor-pointer'>
                                Home
                            </a> 
                        </li>
                        <li>
                            <a className='text-white font-semibold font-serif mr-4 
                                hover:text-[#e6ac0e] hover:cursor-pointer'>
                                Menu
                            </a> 
                        </li>
                    </ul>
                </div>
            </div>
            <Cartmodal showCart={showCartModal} closeCart={handleCloseCart} ></Cartmodal>
            <Authmodal showAuth={showAuthModal} closeAuth={handleCloseAuth}></Authmodal>
        </div>
    );
}

export default Topnavigation;











            {/* <div className='flex 
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
        </div> */}