import React from 'react';
import Cetagorycard from './Cetagorycard';
import Image01 from '../../assets/image/image01.jpeg'
import Image02 from '../../assets/image/image02.jpg'
import Image03 from '../../assets/image/image03.jpeg'
import Image04 from '../../assets/image/image04.jpg'
import Image05 from '../../assets/image/image05.jpg'
function Cetagory(props) {
    return (
        <div className='cetagoryWrapper'>
            <Cetagorycard image={Image01} title="Women Fasion" number="20"/>
            <Cetagorycard image={Image02} title="Men Fasion" number="19"/>
            <Cetagorycard image={Image03} title="Baby Fasion" number="14"/>
            <Cetagorycard image={Image04} title="Young Fasion" number="22"/>
            <Cetagorycard image={Image05} title="Shoes Fasion" number="12"/>
        </div>
    );
}

export default Cetagory;