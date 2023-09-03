import React from 'react';
import '../../assets/authmodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Authmodal({showAuth,closeAuth}) {

    const showHiddenAuth = showAuth ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenAuth}>
            <div className='modal-auth'>
                <div className='flex 
                        justify-between
                        items-center
                        p-2 m-2'>
                    <h2 className='text-xl font-bold'>Auth Modal (0)</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        hover:cursor-pointer' 
                        onClick={closeAuth}
                        icon={faXmark} />
                </div>
            </div>
        </div>
    );
}

export default Authmodal;