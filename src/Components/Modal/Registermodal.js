import React, { useState } from 'react';
import '../../assets/authmodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';


function Authmodal({showAuth,closeAuth}) {

    const showHiddenAuth = showAuth ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenAuth}>
            <div className='modal-main register-modal'>
                <div className='flex mx-2 
                        justify-between
                        items-center'>
                    <h2 className='text-[16px] font-[600]'>Auth Modal</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        text-lg hover:cursor-pointer' 
                        onClick={closeAuth}
                        icon={faXmark} />
                </div>
                <div className='mx-6 my-6'>
                    <form>
                        <label class="block mb-3">
                            <span class="after:content-['*'] 
                                    after:ml-0.5 
                                    after:text-red-500 
                                    block text-sm 
                                    font-medium 
                                    text-slate-700">
                                Full Name
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="enter your email" />
                        </label>
                        <label class="block mb-3">
                            <span class="after:content-['*'] 
                                    after:ml-0.5 
                                    after:text-red-500 
                                    block text-sm 
                                    font-medium 
                                    text-slate-700">
                                Email
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="enter your email" />
                        </label>
                        <label class="block mb-3">
                            <span class="after:content-['*'] 
                                    after:ml-0.5 
                                    after:text-red-500 
                                    block text-sm 
                                    font-medium 
                                    text-slate-700">
                                Password
                            </span>
                            <input 
                                type="password" 
                                name="password" 
                                class="mt-2 px-3 
                                    py-2 bg-white 
                                    border shadow-sm 
                                    border-slate-300 
                                    placeholder-slate-400 
                                    focus:outline-none 
                                    focus:border-sky-500 
                                    focus:ring-sky-500 
                                    block w-full 
                                    rounded-md sm:text-sm 
                                    focus:ring-1" 
                                placeholder="enter your password" />
                        </label>
                        <label class="block mb-3">
                            <span class="after:content-['*'] 
                                    after:ml-0.5 
                                    after:text-red-500 
                                    block text-sm 
                                    font-medium 
                                    text-slate-700">
                                Confirm Password
                            </span>
                            <input 
                                type="password" 
                                name="password" 
                                class="mt-2 px-3 
                                    py-2 bg-white 
                                    border shadow-sm 
                                    border-slate-300 
                                    placeholder-slate-400 
                                    focus:outline-none 
                                    focus:border-sky-500 
                                    focus:ring-sky-500 
                                    block w-full 
                                    rounded-md sm:text-sm 
                                    focus:ring-1" 
                                placeholder="enter your password" />
                        </label>
                        <button 
                            class="bg-[#e6ac0e] 
                                py-1.5 mt-2 
                                text-center text-white 
                                rounded-md w-full 
                                font-semibold">
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className='mx-6 my-4 text-center'>
                    <h6 className='text-sm 
                            font-normal mb-3
                            text-slate-400 '>
                        --------- Don't have account? ---------
                    </h6>
                    <button 
                        class="bg-[#020202]
                            w-full py-1.5 px-4 mt-2 
                            text-center text-white 
                            rounded-md w-[140px] 
                            font-semibold">
                        Sign In
                    </button>
                    <div className='flex
                            justify-center mt-6'>
                        <FontAwesomeIcon 
                            className='text-dark
                            text-md 
                            w-[20px] h-[20px]
                            mx-2 p-2
                            text-lg text-white
                            bg-[#020202]
                            rounded-md
                            hover:cursor-pointer' 
                            icon={faGoogle} /> 
                        <FontAwesomeIcon 
                            className='text-dark
                            w-[20px] h-[20px] 
                            mx-2 p-2
                            text-lg text-white
                            bg-[#020202]
                            rounded-md
                            hover:cursor-pointer' 
                            icon={faFacebookF} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authmodal;