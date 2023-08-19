import '../assets/style.css';
import { useState } from 'react';
export default function Productcard({title,photo,price,des}){
    const [showMore, setShowMore] = useState(false);
    return(
        <div className="productCardWrapper">
            <img className='productImage' src={photo}/>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <p>
                {showMore ? des : `${des.substring(0, 50)}`}
                <a className="btn" onClick={()=> setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</a>
            </p>
        </div>
    )
}