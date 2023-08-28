import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
function Topnavigation(props) {
    return (
        <div className='flex flex-row absolute  top-0 w-full h-[60px] p-[10px]'>
            <div className='basis-1/4 w-full text-center h-full'>
                <h2 className='text-[#fff] font-bold text-2xl hover:cursor-pointer'>mini-E-commerce</h2>
            </div>
            <div className='basis-1/2 text-center'>
                <ul className='flex text-center basis-full'>
                    <li className='text-white font-medium text-base p-2 hover:text-black hover:bg-slate-100'>Cetagories</li>
                    <li className='text-white font-medium text-base p-2 hover:cursor-pointer'>Products</li>
                </ul>
            </div>
            <div className='basis-1/4 text-center'>
            </div>
            
        </div>
    );
}

export default Topnavigation;