import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
function Topnavigation(props) {
    const [modal,setModal] = useState(false);
    const handlePress = () =>{
        setModal(true);
    }
    return (
        <div className='flex 
            flex-row 
            bg-transparent 
            fixed top-0 
            w-full 
            h-[60px] 
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
                            text-base p-2 
                            hover:text-black 
                            hover:bg-slate-100 
                            hover:rounded 
                            hover:cursor-pointer'>
                        Cetagories
                    </li>
                    <li className='text-white 
                            font-medium 
                            text-base p-2 
                            hover:text-black 
                            hover:bg-slate-100 
                            hover:rounded 
                            hover:cursor-pointer'>
                        Products
                    </li>
                </ul>
            </div>
            <div className='basis-1/2 text-center'>
                <FontAwesomeIcon 
                    className='text-white 
                        mr-2 text-lg
                        hover:cursor-pointer' 
                    onClick={handlePress} 
                    icon={faBagShopping} 
                />
            </div>
        </div>
    );
}

export default Topnavigation;