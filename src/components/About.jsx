import React from 'react';
import aboutimage from '../images/a1.jpg';

function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>UPCOMING MENU</h1>
                <p>Double the delectable scent. Thick cuts of high-quality meat imported from Australia.
                    Burger & Fries signature ® recipe is grilled over an open flame. With cheese, bacon, and smoked BBQ sauce, it's thick and fluffy. 
                    It is the menu's one-of-a-kindness.
                    Coming soon.</p>
                    
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About
