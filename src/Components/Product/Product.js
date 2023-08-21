import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getAllProduct} from "../../Services/Actions/ProductAction"
import Productcard from "./Productcard";
export default function Product(){

    const {isLoading,products,errors} =useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllProduct())},[])

    return(
        <div className="productsWrapper">
            <h2>Products List</h2>
            {isLoading && <h2>Loading...</h2>}
            {errors && <h2>{errors.message}</h2>}
            <div className="productListWrapper">
                {products && products.map((product)=>{
                    return (<div>
                        <Productcard title={product.title} photo={product.image} price={product.price} category={product.category} />
                    </div>)
                })
                }
            </div>
        </div>
    )
}