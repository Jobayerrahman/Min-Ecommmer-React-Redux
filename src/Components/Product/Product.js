import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getAllProduct} from "../../Services/Actions/ProductAction"
import Productcard from "./Productcard";
export default function Product(){

    const {isLoading,products,errors} =useSelector((state) => state);

    const {items, setItems} = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllProduct())},[])

    const handleWomenFasion=()=>{
        const items = products.filter((product)=> product.category === "men's clothing");
        const productlist =  items.map((item)=>{
            return (<div>
                <Productcard {...item} />
            </div>)
        })
        setItems(productlist);
    }

    const handleMenFasion=()=>{
        console.log("men fasion");
    }

    const handleElectronics=()=>{
        console.log("elec");
    }

    const handleAccessories=()=>{
        console.log("access");
    }

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
        </div>
    )
}