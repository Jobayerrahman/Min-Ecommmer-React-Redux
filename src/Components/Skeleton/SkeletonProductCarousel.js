import Skeleton from "./Skeleton";

function SkeletonProductCarousel(props) {
    return (
        <div className='mx-5 my-10 content-start h-[200px]
        md:mx-[170px] md:my-15 md:h-[300px] 2md:mx-[220px]
        lg:mx-[200px] lg:my-15 lg:h-[400px]
        1xl:mx-[400px] 2xl:mx-[600px] 2xl:my-15 2xl:h-[400px]'>
            <div className='flex w-full relative'>
                <div className='w-2/5'>
                    <Skeleton classes="pictute width-100" />
                </div>
                <div className='flex flex-wrap w-3/5'>
                    <Skeleton classes="pictute width-40" />
                </div>
            </div>
        </div>
    );
}

export default SkeletonProductCarousel;