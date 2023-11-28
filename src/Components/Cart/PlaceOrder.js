import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrderAdded } from '../../Redux/CartSlice/actions';

function PlaceOrder() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState();
    const [ mobile, setMobile ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ address, setAddress ] = useState();
    const [ discountCode, setDiscountCode ] = useState();

    const handleFormInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'name'){
            setName(inputValue);
        }
        else if(e.target.name === 'mobile'){
            setMobile(inputValue);
        }
        else if(e.target.name === 'address'){
            setAddress(inputValue);
        }
        else if(e.target.name === 'email'){
            setEmail(inputValue);
        }
        else if(e.target.name === 'password'){
            setPassword(inputValue);
        }
        else if(e.target.name === 'discountCode'){
            setDiscountCode(inputValue);
        }
    }

    const handlePlaceOrder = (e) =>{
        e.preventDefault();
        const orderObj = {name: name, mobile: mobile, address:address, email: email, password: password,  discountcode: discountCode};
        dispatch(placeOrderAdded(orderObj));
        setName('');
        setMobile('');
        setAddress('');
        setEmail('');
        setPassword('');
        setDiscountCode('');
    }

    return (
        <form onSubmit={handlePlaceOrder}>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Name* :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md" 
                    type="text"
                    name="name"
                    onChange={ handleFormInput }
                    value={name}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number* :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md"
                    type="text"
                    name="mobile"
                    onChange={ handleFormInput }
                    value={mobile}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Your Address* :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md"
                    type="text"
                    name="address"
                    onChange={ handleFormInput }
                    value={address}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Email (Optional) :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md"
                    type="text"
                    name="email"
                    onChange={ handleFormInput }
                    value={email}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Password* :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md"
                    type="password"
                    name="password"
                    onChange={ handleFormInput }
                    value={password}
                />
            </div>
            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                <h4 className="font-bold text-[14px] mb-[5px]">Discount Code (Optional) :</h4>
                <input 
                    className="w-[100%] h-[40px] 
                        text-[14px] mb-[3.5px] 
                        border-solid border-2 px-2
                        border-slate-200 rounded-md"
                    type="text"
                    name="discountCode"
                    onChange={ handleFormInput }
                    value={discountCode}
                />
            </div>
            <button 
                className="p-2 mb-5 w-[100%] text-white
                    bg-[#e6ac0e]  rounded-md 
                    font-bold text-[16px] 
                    hover:bg-[#f8c331] "     
                >
                Submit
            </button>
        </form>
    );
}

export default PlaceOrder;