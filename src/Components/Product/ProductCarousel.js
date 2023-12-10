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
        // console.log("Yes previous Click");
        const element =nextList.pop();
        const newArray = originalList.unshift(element);
        // console.log(originalList, element,nextList, newArray);
        const displayList = originalList.slice(0,4);
        setDisplayList(displayList);
        const firstItem   = originalList.find((value,index) => index === 0);
        setFirstItem(firstItem);
    }

    const handleNext = () =>{
        // console.log("Yes next Click");
        const element = originalList.shift()
        nextList.push(element);
        // console.log(originalList, element,nextList);
        const displayList = originalList.slice(0,4);
        setDisplayList(displayList);
        const firstItem   = originalList.find((value,index) => index === 0);
        setFirstItem(firstItem);
    }


    return (
        <div className='mx-5 my-10 content-start h-[200px]
                md:mx-[170px] md:my-15 md:h-[300px] 2md:mx-[220px]
                lg:mx-[200px] lg:my-15 lg:h-[400px]
                1xl:mx-[400px] 2xl:mx-[600px] 2xl:my-15 2xl:h-[400px]'>
                {isLoading? (
                        <SkeletonProductCarousel/> 
                    ): (
                    <div className='flex w-full relative'>
                        <div className='flex w-full h-full justify-between absolute items-center'>
                            <FontAwesomeIcon 
                                className='text-[24px] font-[600] text-[#94a3b8]' 
                                icon={faCircleArrowLeft} 
                                onClick={handlePrevious}
                                />
                            <FontAwesomeIcon 
                                className='text-[24px] font-[600] text-[#94a3b8]' 
                                icon={faCircleArrowRight} 
                                onClick={handleNext}
                                />
                        </div>
                        <div className='w-2/5'>
                            <div className='flex flex-col w-full h-full items-center'>
                                <img className='w-4/5 h-[180px] mx-2 mb-[5px] md:h-[280px] lg:h-[380px] rounded-md object-cover' src={firstItem.image}/>
                                <h2 className='text-[10px] font-[600] 2xl:text-[14px] 2xl:font-[600]'>{firstItem.title}</h2>
                                <p className='text-[10px] font-[600] 2xl:text-[12px] 2xl:font-[600]'>{firstItem.price}</p> 
                            </div>
                        </div>
                        <div className='flex flex-wrap w-3/5 mx-2'>
                            {displayList.map((slicedProduct)=>
                                (<div className='w-2/4'>
                                    <div className='flex flex-col w-full h-full items-center'>
                                        <img className='w-[80px] h-[80px] 
                                            md:w-[100px] md:h-[120px]
                                            lg:w-[170px] lg:h-[180px] 
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