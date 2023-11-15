import Productcard from "./Productcard";
export default function Product({isLoading,products,errors,fasionCetagory,isFasion}){
    return(
        <div className="productsWrapper">
            <h2 className="text-slate-950 font-bold text-[32px] mb-10">Taste Our Products</h2>
            {isLoading && <h2>Loading...</h2>}
            {errors && <h2>{errors.message}</h2>}
            {!isFasion ? (
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
                {fasionCetagory}
            </div>
            )}
        </div>
    )
}