import React from 'react';
import '../../assets/modal.css';

function Cartmodal({showCart,closeCart}) {

    const showHiddenCart = showCart ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenCart}>
            <div className='modal-main'>
                <h2 className=''>Cart Modal</h2>
                <button type="button" onClick={closeCart}>close</button>
            </div>
        </div>
    );
}

export default Cartmodal;