import React from 'react';
import "./Contact.css";
// import PizzaLeft from "../../assets/PizzaLeft.jpg"
import Maps from "../localisation/Map";
function Contact() {
  const location = { lat:  36.684908 , lng: 10.299154 };
  const zoomLevel = 16;
  return (
    <div className='contact'>
        <div className='leftSide'   >
        <Maps location={location}  zoomLevel={zoomLevel}/>
        </div>
        <div className='rightSide'>
         <h1>Contact us</h1>
        <form id="contact-form" method='post'>
        <label htmlFor='name'for>Full Name</label>
        <input name='name' placeholder='Enter full Name...' type='text'/>
        <label htmlFor='email'for>Email</label>
        <input name='name' placeholder='Enter email...' type='email'/>
        <label htmlFor='message'for>Message</label>
        <textarea rows="3"placeholder='Enter message...'
        name='message' required> </textarea>
        <button type='submit'> Send Message</button>

            </form>
        </div>
      
    </div>
  )
}

export default Contact
