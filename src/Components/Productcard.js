import '../assets/style.css';
export default function Productcard({title,photo,price,des}){
    return(
        <div className="productCardWrapper">
            <img className='productImage' src={photo}/>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <p>{des}</p>
        </div>
    )
}