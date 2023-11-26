import React from 'react';
import '../../assets/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Placeordermodal({showPlaceOrder,closePlaceOrder}) {

    const showHiddenPlaceOrder = showPlaceOrder ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenPlaceOrder}>
            <div className='modal-main placeorder-modal'>
                <div className='flex 
                        justify-between
                        items-center'>
                    <h2 className='text-3xl font-bold'>Placeorder Modal (0)</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        bg-slate-300
                        rounded-full
                        hover:cursor-pointer' 
                        onClick={closePlaceOrder}
                        icon={faXmark} />
                </div>
            </div>
        </div>
    );
}

export default Placeordermodal;