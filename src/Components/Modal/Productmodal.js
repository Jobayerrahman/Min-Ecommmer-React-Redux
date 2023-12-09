import React from 'react';
import '../../assets/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Productdetails from '../Product/Productdetails';

function Productmodal({showProduct,closeProduct,...product}) {

    const showHiddenProduct = showProduct ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenProduct}>
            <div className='modal-main product-modal'>
                <div className='flex 
                        justify-between
                        items-center'>
                    <h2 className='text-[26px] font-bold'>{product.title}</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        bg-slate-300
                        rounded-full
                        hover:cursor-pointer' 
                        onClick={closeProduct}
                        icon={faCircleXmark} />
                </div>
                <div>
                    <Productdetails onCloseProduct={closeProduct} {...product}/>
                </div>
            </div>
        </div>
    );
}

export default Productmodal;