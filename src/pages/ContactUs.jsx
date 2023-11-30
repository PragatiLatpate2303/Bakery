import React from 'react'
import './ContactUs.css'

// import img1 from '../components/asssets/images/ca1.jpg';
// import img2 from '../components/asssets/images/purple6.jpeg';
// import img3 from '../components/asssets/images/purple4.jpeg';

const ContactUs = () => {
  return (
	<div className='imageAreaContactUs'>
	<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
  <div class="row">
    <label class="required" for="name">Name:</label><br />
    <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">E-mail:</label><br />
    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Message:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    
    <input id="submit_button" type="submit" value="Send email" />
</form>
</div>
  )
}

export default ContactUs
