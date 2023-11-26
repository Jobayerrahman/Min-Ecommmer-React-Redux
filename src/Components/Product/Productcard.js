import { useState } from 'react';
import Productmodal from '../Modal/Productmodal';
import Cartmodal from '../Modal/Cartmodal';


export default function Productcard({...product}){
    // const [showMore, setShowMore] = useState(false);
    // const shortendes = des ? des.substring(0, 50) : '';

    const [showProductModal,setShowProductModal] = useState(false);
    const [showCartModal,setShowCartModal] = useState(false);
    const handleProduct = () =>{
        setShowProductModal(true);
    }    

    const handleCloseProduct = () =>{
        setShowProductModal(false);
    }

    const handleCart = () =>{
        setShowCartModal(true);
    }    

    const handleCloseCart = () =>{
        setShowCartModal(false);
    }
    const productName= product.title ? product.title.substring(0, 10) : '';
    return(
        <>
            <div className="productCardWrapper">
                <img className='productImage' src={product.image}/>
                <div className='productCardContent' onClick={handleProduct}>
                    <h2>{productName}</h2>
                    <h5>{product.price}</h5>
                </div>
                <a onClick={handleCart}>Add to cart</a>
                {/* <p>
                    {showMore ? des : shortendes}
                    <a className="btn" onClick={()=> setShowMore(!showMore)}>{showMore ? " Show less" : " Show more"}</a>
                </p> */}
            </div>
            <Productmodal showProduct={showProductModal} closeProduct={handleCloseProduct} />
            <Cartmodal showCart={showCartModal} closeCart={handleCloseCart} ></Cartmodal>
            
        </>
    )
}