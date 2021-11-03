import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder='Your Name'/>
                <input type="text" placeholder='Your E-mail'/>
                <textarea placeholder='Your message...'></textarea>
                <input type="submit" value='SEND'/>
            </form>  
        </div>
    )
}

export default Contact 
