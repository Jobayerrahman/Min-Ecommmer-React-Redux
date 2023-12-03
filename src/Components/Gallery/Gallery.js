import React, { useEffect, useState } from 'react';
import axios from "axios"; 

function Gallery() {
    const [ images, setImages ] = useState([]);

    useEffect(()=>{
        axios.get("https://restorajsondata.onrender.com/Restora_Foods_Gallery").then((response) => {
            const result = response.data;
            setImages(result);
            });
    })
    
    return (
        <div>
            <div className='relative flex flex-row flex-wrap mb-4'>
                <div className='absolute min-h-[100%] w-[100%] bg-[#000] opacity-50'></div>
                {images.map((img)=>
                    <img className='w-[150px] h-[200px]
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