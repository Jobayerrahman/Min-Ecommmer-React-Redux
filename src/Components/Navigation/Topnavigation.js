import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Cartmodal from '../Modal/Cartmodal';
import Authmodal from '../Modal/Authmodal';
function Topnavigation(props) {
    const [navigationStyle,setNavigationStyle] = useState('navigationWrapper');
    const [showCartModal,setShowCartModal] = useState(false);
    const [showAuthModal,setShowAuthModal] = useState(false);
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
            console.log("navigationScrollWrapper");
        }
        else if(window.scrollY<100){
            setNavigationStyle("navigationWrapper");
            console.log("navigationWrapper");
        }
    }

    useEffect(()=>{ window.addEventListener('scroll', onScroll); },[])

    return (
        <div>
            <div className={navigationStyle}>
                <div>
                    <a className='navigationTitle'>
                        Restura
                    </a>
                </div>
                <div className='flex justify-center'>
                    <a className='text-white font-semibold font-serif mr-4 
                        hover:text-[#e6ac0e]  hover:cursor-pointer'>
                        Home
                    </a> 
                    <a className='text-white font-semibold font-serif mr-4 
                        hover:text-[#e6ac0e] hover:cursor-pointer'>
                        Menu
                    </a> 
                </div>
                <div>
                    <a className='flex justify-center items-center
                        bg-trasparnt border-2 border-gray-50 
                        text-white font-semibold 
                        p-2 rounded text-base
                        hover:bg-[#e6ac0e] 
                        hover:border-[#f8c331]
                        hover:cursor-pointer'>
                            Order Now
                            <FontAwesomeIcon 
                                className='navigationIcon' 
                                onClick={handleCart} 
                                icon={faBagShopping} 
                                />
                    </a>
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