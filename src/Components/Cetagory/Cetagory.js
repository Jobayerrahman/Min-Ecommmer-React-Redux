import React from 'react';
import Cetagorycard from './Cetagorycard';
import bakery from '../../assets/image/category/bakery.jpg'
import burger from '../../assets/image/category/burger.jpg'
import pastry from '../../assets/image/category/pastry.jpg'
import pizza from '../../assets/image/category/pizza.jpg'
import sandwiches from '../../assets/image/category/sandwiches.jpg'
function Cetagory({all, women, men, electronics, accessories}) {
    return (
        <div className='cetagoryWrapper'>
            <Cetagorycard eventCetagory={all}           image={bakery} title="All Category"    number="12"/>
            <Cetagorycard eventCetagory={women}         image={burger} title="Burger"    number="20"/>
            <Cetagorycard eventCetagory={men}           image={pastry} title="Pastry"      number="19"/>
            <Cetagorycard eventCetagory={electronics}   image={pizza} title="Pizza"     number="14"/>
            <Cetagorycard eventCetagory={accessories}   image={sandwiches} title="Sandwiches"    number="22"/>
        </div>
    );
}

export default Cetagory;