import React from 'react';
import headerimage from '../images/hd1.png';

function Header() {
    return (
        <div id='main'>
           <div className="header-heading">
               <h3>It's Great Time For A Good taste Of Burger</h3>
               <h1><span>BURGER</span> &<br/></h1>
               <h1 className="fries">Fries</h1>
               <p className='details'>It’s a piece of heaven in between buns.</p>
                  <div className="header-btns">
                      <a href="#" className='header-btn'>Order</a>
                  </div>
               </div>    
               <div className="header-image">
                <img src={headerimage} alt=''/>
                 </div>        
        </div>
    )
}

export default Header
