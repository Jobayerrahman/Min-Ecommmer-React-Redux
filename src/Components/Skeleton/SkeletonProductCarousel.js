import Skeleton from "./Skeleton";

function SkeletonProductCarousel(props) {
    return <Skeleton classes="pictute width-100" />
}

export default SkeletonProductCarousel;




{/* <div className='w-2/5'>
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
</div> */}