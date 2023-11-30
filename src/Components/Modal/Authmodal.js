import '../../assets/authmodal.css';
import React, { useState } from 'react';
import LoginUi from '../Authentication/LoginUi';
import RegisterUi from '../Authentication/RegisterUi';


function Authmodal({showAuth,closeAuth}) {
    const [isRegister, setIsRegister] = useState(false);
    const showHiddenAuth = showAuth ? "modal display-block": "modal display-none";


    const handleOpenRegister = () =>{
        setIsRegister(true);
    }

    const handleCloseRegister = () =>{
        setIsRegister(false);
    }

    return (
        <div className={showHiddenAuth}>
            {isRegister ? ( 
                <RegisterUi onCloseRegister={handleCloseRegister} onCloseAuth={closeAuth}/>
            ):( 
                <LoginUi onOpenRegister={handleOpenRegister} onCloseAuth={closeAuth} />
            )}
        </div>
    );
}

export default Authmodal;