import React, { useState } from 'react';

const initialImageState=[
    {
        "id"        : 1,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-1.jpg"
    },
    {
        "id"        : 14,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/pizza/Pizza-3.jpg"
    },
    {
        "id"        : 4,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-4.jpg"
    },
    {
        "id"        : 5,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-5.jpg"
    },
    {
        "id"        : 12,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/pizza/Pizza-1.jpg"
    },
    {
        "id"        : 2,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-2.jpg"
    },
    {
        "id"        : 13,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/pizza/Pizza-2.jpg"
    },
    {
        "id"        : 3,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-3.jpg"
    },
    {
        "id"        : 6,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/burger/Burger-6.jpg"
    },
    {
        "id"        : 15,
        "image"     : "https://restora-food-ecom.vercel.app/sources/assets/images/pizza/Pizza-4.jpg"
    }
]

function Gallery() {
    const [ images, setImages ] = useState(initialImageState);
    
    return (
        <div>
            <div className='relative flex flex-row flex-wrap mb-4'>
                <div className='absolute min-h-[100%] w-[100%] bg-[#000] opacity-50'></div>
                {images.map((img)=>
                    <img key={img.id} className='w-[70px] h-[100px]
                            md:w-[150px] h-[200px]
                            grow object-cover
                            md:grow-0
                            md:basis-1/2
                            lg:basis-1/5
                            lg:w-[200px] h-[250px]' 
                    src={img.image}
                    />
                )}
            </div>
        </div>
    );
}

export default Gallery;