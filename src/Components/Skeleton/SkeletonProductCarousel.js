import Skeleton from "./Skeleton";

function SkeletonProductCarousel(props) {
    return (
        <div className='flex w-full relative'>
            <div className='w-2/5'>
                <div className='flex flex-col w-full h-full items-center'>
                    <div className='w-4/5 h-[180px] mb-[5px] md:h-[280px]
                                    lg:h-[380px] 2xl:h-[420px]'>
                        <Skeleton classes="image-100 width-100" />
                    </div>
                        <Skeleton classes="title width-50" />
                        <Skeleton classes="title width-30" />
                </div>
            </div>
            <div className='flex flex-wrap w-3/5 mx-2'>
                {[...Array(4).keys()].map((skeleton)=>
                    (<div key={skeleton} className='w-2/4'>
                        <div className='flex flex-col w-full h-full items-center'>
                            <div className='w-[80px] h-[80px] mb-[5px]
                                            md:w-[100px] md:h-[120px]
                                            lg:w-[170px] lg:h-[180px] 
                                            2xl:w-[220px] 2xl:h-[230px]'>
                                <Skeleton classes="image-100 width-100" />
                            </div>
                            <Skeleton classes="title width-50" />
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default SkeletonProductCarousel;