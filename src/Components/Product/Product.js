import React, { useEffect } from "react";
import Productcard from "./Productcard";
import { useDispatch, useSelector } from "react-redux";
import productsFatcher from "../../Redux/ProductsSlice/Dispatcher/productsFatcher";


export default function Product({cetagory,isItem}){

    const dispatch = useDispatch();
    useEffect(()=>{dispatch(productsFatcher())},[]);

    const {isLoading,products,errors} =useSelector((state) => state);
    const state = useSelector((state)=>state);
    console.log(state);


    return(
        <div className="productsWrapper">
            <h2 className="text-slate-950 font-bold text-[32px] mb-10">Taste Our Products</h2>
            {isLoading && <h2>Loading...</h2>}
            {errors && <h2>{errors.message}</h2>}
            {!isItem ? (
                <div className="productListWrapper">
                {products && products.slice(0, 12).map((product)=>{
                    return (<div>
                        <Productcard {...product} />
                    </div>)
                    })
                }
            </div>
            ):(
                <div className="productListWrapper">
                {cetagory}
            </div>
            )}
        </div>
    )
}