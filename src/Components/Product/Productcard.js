import { useState } from 'react';
import Productmodal from '../Modal/Productmodal';
import Placeordermodal from '../Modal/Placeordermodal';
export default function Productcard({...product}){
    // const [showMore, setShowMore] = useState(false);
    // const shortendes = des ? des.substring(0, 50) : '';

    const [showProductModal,setShowProductModal] = useState(false);
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);
    const handleProduct = () =>{
        setShowProductModal(true);
    }    

    const handleCloseProduct = () =>{
        setShowProductModal(false);
    }

    const handlePlaceOrder = () =>{
        setShowPlaceOrderModal(true);
    }    

    const handleClosePlaceOrder = () =>{
        setShowPlaceOrderModal(false);
    }
    const productName= product.title ? product.title.substring(0, 10) : '';
    return(
        <>
            <div className="productCardWrapper">
                <img className='productImage' src={product.image}/>
                <div className='productCardContent'>
                    <h2 onClick={handleProduct}>{productName}</h2>
                    <h5>{product.price}</h5>
                </div>
                <a onClick={handlePlaceOrder}>Add to cart</a>
                {/* <p>
                    {showMore ? des : shortendes}
                    <a className="btn" onClick={()=> setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</a>
                </p> */}
            </div>
            <Productmodal showProduct={showProductModal} closeProduct={handleCloseProduct} />
            <Placeordermodal showPlaceOrder={showPlaceOrderModal} closePlaceOrder={handleClosePlaceOrder} ></Placeordermodal>
        </>
    )
}