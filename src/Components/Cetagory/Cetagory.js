import React from 'react';
import Cetagorycard from './Cetagorycard';
import bakeryImage from '../../assets/image/category/bakery.jpg'
import burgerImage from '../../assets/image/category/burger.jpg'
import pastryImage from '../../assets/image/category/pastry.jpg'
import pizzaImage from '../../assets/image/category/pizza.jpg'
import sandwichesImage from '../../assets/image/category/sandwiches.jpg'
function Cetagory({all, burger, pastry, pizza, sandwich}) {
    return (
        <div className='cetagoryWrapper'>
            <Cetagorycard eventCetagory={all} image={bakeryImage} title="All Category" number="12"/>
            <Cetagorycard eventCetagory={burger} image={burgerImage} title="Burger" number="20"/>
            <Cetagorycard eventCetagory={pastry} image={pastryImage} title="Pastry" number="19"/>
            <Cetagorycard eventCetagory={pizza} image={pizzaImage} title="Pizza" number="14"/>
            <Cetagorycard eventCetagory={sandwich} image={sandwichesImage} title="Sandwiches" number="22"/>
        </div>
    );
}

export default Cetagory;