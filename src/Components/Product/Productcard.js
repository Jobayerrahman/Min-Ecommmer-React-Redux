import { useState } from 'react';
export default function Productcard({title,photo,price,des}){
    // const [showMore, setShowMore] = useState(false);
    // const shortendes = des ? des.substring(0, 50) : '';
    return(
        <div className="productCardWrapper">
            <img className='productImage' src={photo}/>
            <div className='productCardContent'>
                <h2>{title}</h2>
                <h5>{price}</h5>
            </div>
            <a>Add to cart</a>
            {/* <p>
                {showMore ? des : shortendes}
                <a className="btn" onClick={()=> setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</a>
            </p> */}
        </div>
    )
}