import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/s3.png';
import pimage4 from '../images/s4.png';
import pimage5 from '../images/s5.png';
import pimage6 from '../images/s6.png';


function products() {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Choose the menu that you want & Enjoy it.</p>
            <div className="a-container">
                <Productbox image={pimage1} title="Grilled Pork Burger"/>
                <Productbox image={pimage2} title="Classic Beef Burger"/>
                <Productbox image={pimage3} title="Bacon Cheese Burger"/>
            </div>
            
            <div className="a-container">
                <Productbox image={pimage4} title="Charcoal Burger"/>
                <Productbox image={pimage5} title="Crispy Fish Burger"/>
                <Productbox image={pimage6} title="Nuggets & Fries "/>
            </div>
        </div>
    )
}

export default products
