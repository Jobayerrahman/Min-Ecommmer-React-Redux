import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getAllProduct} from "../../Services/Actions/ProductAction"
import Productcard from "./Productcard";
export default function Product(){

    const {isLoading,products,errors} =useSelector((state) => state);

    const [fasions, setFasions] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllProduct())},[])

    const handleWomenFasion=()=>{
        const product = products.filter((product)=> product.category === "women's clothing");
        setFasions(product);
    }

    const handleMenFasion=()=>{
        const product = products.filter((product)=> product.category === "men's clothing");
        setFasions(product);
    }

    const handleElectronics=()=>{
        const product = products.filter((product)=> product.category === "electronics");
        setFasions(product);
    }

    const handleAccessories=()=>{
        const product = products.filter((product)=> product.category === "jewelery");
        setFasions(product);
    }

    const fasionCetagory = fasions.map((fasion)=><Productcard {...fasion} />)

    return(
        <div className="productsWrapper">
            <h2>Products List</h2>
            <button onClick={handleWomenFasion}>Women fasion</button>
            <button onClick={handleMenFasion}>Men fasion</button>
            <button onClick={handleElectronics}>Electronics</button>
            <button onClick={handleAccessories}>Accessories</button>
            {isLoading && <h2>Loading...</h2>}
            {errors && <h2>{errors.message}</h2>}
            <div className="productListWrapper">
                {products && products.map((product)=>{
                    return (<div>
                        <Productcard {...product} />
                    </div>)
                    })
                }
            </div>
            <br></br>

            <div className="productListWrapper">
                {fasionCetagory}
            </div>
        </div>
    )
}