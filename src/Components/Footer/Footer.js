import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareYoutube, faSquareInstagram, faSquarePinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="grid grid-cols-1
            2md:grid-cols-3 2md:gap-4
            justify-between justify-items-center items-center 
            bg-[#080808] w-full p-[10px] 
            md:px-[150px] md:py-[50px]
            2md:px-[50px] lg:px-[150px] 
            xl:px-[220px] 2xl:px-[400px]">
            <div className="w-full p-4 
                grid-cols-2 my-[40px] 2md:p-2
                md:w-[250px] 2md:w-[200px] xl:w-[300px]">
                <h2 className="text-[22px] font-[600] text-[#e6ac0e] mb-[20px]">OPENING HOURS</h2>
                <div className="flex justify-between mb-[10px]">
                    <h4 className="text-[14px] text-[#f1f1f1]">Sunday - Thrusday</h4>
                    <span className="text-[14px] text-[#f1f1f1]">09.00 - 22:00</span>
                </div>
                <div className="flex justify-between mb-[10px]">
                    <h4 className="text-[14px] text-[#f1f1f1]">Friday</h4>
                    <span className="text-[14px] text-[#f1f1f1]">11.00 - 23:00</span>
                </div>
                <div className="flex justify-between mb-[10px]">
                    <h4 className="text-[14px] text-[#f1f1f1]">Saturday</h4>
                    <span className="text-[14px] text-[#f1f1f1]">11.00 - 23:00</span>
                </div>
            </div>
            <div className="w-full p-4 mb-[40px] 
                text-center 2md:p-2 row-start-1 md:w-[250px] 
                2md:row-start-1 2md:col-start-2 2md:w-[200px] xl:w-[300px]">
                <h2 className="text-[32px] font-[700] text-[#e6ac0e] mb-[25px]">RESTORA</h2>
                <div className="flex flex-col mb-[20px]">
                    <h4 className="text-[12px] text-[#f1f1f1]">Korachi, Pakistan</h4>
                    <span className="text-[14px] text-[#f1f1f1]">restora@gmail.com</span>
                    <span className="text-[14px] text-[#f1f1f1]">T: +92 0281 0129</span>
                </div>
                <div className="flex justify-between mb-[10px] px-[40px]">
                    <FontAwesomeIcon className='text-[#f1f1f1] text-[20px]' icon={faSquareFacebook} /> 
                    <FontAwesomeIcon className='text-[#f1f1f1] text-[20px]' icon={faSquareYoutube} /> 
                    <FontAwesomeIcon className='text-[#f1f1f1] text-[20px]' icon={faSquareInstagram} /> 
                    <FontAwesomeIcon className='text-[#f1f1f1] text-[20px]' icon={faSquarePinterest} /> 
                </div>
            </div>
            <div className="w-full p-4 my-[40px]
                grid-cols-3 2md:p-2
                md:w-[250px] 2md:w-[200px] xl:w-[300px]">
                <h2 className="text-[24px] font-[600] text-[#e6ac0e] mb-[40px]">NEWSLETTER</h2>
                <h4 className="text-[14px] text-[#f1f1f1] mb-[20px]">Receive the latest news from us</h4>
                <div className="flex justify-between mb-[10px]">
                    <input className="bg-transparent border-b-2 border-slate-400 px-[10px]" placeholder="Your Email Address"/>
                    <FontAwesomeIcon className='text-[#f1f1f1]' icon={faArrowRight} /> 
                </div>
            </div>
        </div>
    )
}