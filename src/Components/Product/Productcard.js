import { useState } from 'react';
export default function Productcard({...product}){
    // const [showMore, setShowMore] = useState(false);
    // const shortendes = des ? des.substring(0, 50) : '';
    const productName= product.title ? product.title.substring(0, 10) : '';
    return(
        <div className="productCardWrapper">
            <img className='productImage' src={product.image}/>
            <div className='productCardContent'>
                <h2>{productName}</h2>
                <h5>{product.price}</h5>
            </div>
            <a>Add to cart</a>
            {/* <p>
                {showMore ? des : shortendes}
                <a className="btn" onClick={()=> setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</a>
            </p> */}
        </div>
    )
}