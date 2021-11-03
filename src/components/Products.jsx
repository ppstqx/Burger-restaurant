import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1r.png';
import pimage2 from '../images/s2r.png';
import pimage3 from '../images/s3r.png';
import pimage4 from '../images/s4r.png';
import pimage5 from '../images/s5r.png';
import pimage6 from '../images/s6r.png';


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
