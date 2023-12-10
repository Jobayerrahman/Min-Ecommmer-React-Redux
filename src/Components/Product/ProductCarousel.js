import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkeletonProductCarousel from '../Skeleton/SkeletonProductCarousel';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProductCarousel() {
    const [originalList, setOriginalList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [nextList, setNextList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [firstItem, setFirstItem] = useState({});

    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://restorajsondata.onrender.com/Restora_Foods_Product").then((response)=>{
            const result = response.data;
            setOriginalList(result);
            if(response.status === 200 ){
                setIsLoading(false);
                const displayList = result.slice(0,4);
                setDisplayList(displayList);
                const firstItem   = result.find((value,index) => index === 0);
                setFirstItem(firstItem);
            }
        })
    },[])

    const handlePrevious = () =>{
        console.log("Yes previous Click");
        const element =nextList.pop();
        const newArray = originalList.unshift(element);
        console.log(originalList, element,nextList, newArray);
        const displayList = originalList.slice(0,4);
        setDisplayList(displayList);
        const firstItem   = originalList.find((value,index) => index === 0);
        setFirstItem(firstItem);
    }

    const handleNext = () =>{
        console.log("Yes next Click");
        const element = originalList.shift()
        nextList.push(element);
        console.log(originalList, element,nextList);
        const displayList = originalList.slice(0,4);
        setDisplayList(displayList);
        const firstItem   = originalList.find((value,index) => index === 0);
        setFirstItem(firstItem);
    }


    return (
        <div className='mx-2 my-10 px-[10px] py-[20px] h-[auto]
                content-start bg-white
                shadow-lg shadow-state-500/50
                md:my-15 md:p-[20px] md:mx-[120px] 
                2md:mx-[180px] lg:mx-[100px] 
                xl:mx-[330px] 2xl:mx-[450px]'>
                <div className='flex justify-between mx-8 mb-5 2xl:mb-10'>
                    <h2 className='text-[14px] font-[700] md:text-[22px] 2xl:text-[32px]'>Flash Sales</h2>
                    <h4 className='text-[14px] font-[500] md:text-[22px] 2xl:text-[28px]'>20:30:60</h4>
                </div>
                {isLoading? (
                        <SkeletonProductCarousel/> 
                    ): (
                    <div className='flex w-full relative'>
                        <div className={`flex w-full h-full ${nextList.length === 0 ? "justify-end" : "justify-between"} absolute items-center`}>
                            <FontAwesomeIcon 
                                className={`${nextList.length === 0 ? "hidden" : "block"} text-[20px] font-[600] 
                                text-[#94a3b8]
                                lg:text-[25px]
                                2xl:text-[30px]
                                cursor-pointer`} 
                                icon={faCircleArrowLeft} 
                                onClick={handlePrevious}
                                />
                            <FontAwesomeIcon 
                                className={`${originalList.length === 1 ? "hidden" : "block"} text-[20px] font-[600] 
                                text-[#94a3b8]
                                lg:text-[25px]
                                2xl:text-[30px] 
                                cursor-pointer`}
                                icon={faCircleArrowRight} 
                                onClick={handleNext}
                                />
                        </div>
                        <div className='w-2/5'>
                            <div className='flex flex-col w-full h-full items-center mx-1 px-2 md:mx-0 md:px-0'>
                                <img className='w-4/5 h-[180px]
                                    mb-[5px] md:h-[280px] 
                                    lg:h-[380px] 2xl:h-[420px] rounded-md object-cover' src={firstItem.image}/>
                                <h2 className='text-[10px] font-[700] 2xl:text-[18px]'>{firstItem.title}</h2>
                                <p className='text-[10px] font-[600] 2xl:text-[16px]'>{firstItem.price}</p> 
                            </div>
                        </div>
                        <div className='flex flex-wrap w-3/5 px-2 md:px-0 md:mx-2'>
                            {displayList.map((slicedProduct)=>
                                (<div className='w-2/4'>
                                    <div className='flex flex-col w-full h-full items-center'>
                                        <img className='w-[80px] h-[80px] 
                                            md:w-[100px] md:h-[120px]
                                            lg:w-[170px] lg:h-[180px] 
                                            2xl:w-[220px] 2xl:h-[230px]
                                            object-cover rounded-md' 
                                            src={slicedProduct.image}/>
                                        <h2 className='text-[10px] font-[600] 2xl:text-[14px] 2xl:font-[600]'>{slicedProduct.title}</h2>
                                    </div>
                                </div>)
                            )}
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ProductCarousel;