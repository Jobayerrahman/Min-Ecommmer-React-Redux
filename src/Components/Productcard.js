import '../assets/style.css';
export default function Productcard({title,photo,price,category}){
    return(
        <div className="productCardWrapper">
            <div className='productCardHead'>
                <img className='productImage' src={photo}/>
            </div>
            <div className='productCardBody'>
                <p className='productCardCategory'>{category}</p>
                <h2 className='productCardTitle'>{title}</h2>
                <h5 className='productCardPrice'>$ {price}</h5>
                <div className='productCartButton' >Add to cart</div>
            </div>
        </div>
    )
}