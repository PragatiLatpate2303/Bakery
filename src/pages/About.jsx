import React from 'react';
import './About.css'
import img1 from '../components/asssets/images/ca1.jpg';
import img2 from '../components/asssets/images/purple6.jpeg';
import img3 from '../components/asssets/images/purple4.jpeg';

const About = () => {


  return (
  <div className='AboutForm'>   
  <img id='bgimg' src={img1} alt="" />
    <div className='ImageArea'>
      <img src={img2} alt="" />
    </div>
    <div className='form'>
       <h1>About Us</h1>
       <h2>Baked with love</h2>
       <h2>Served with smile.</h2>
    </div>
  </div>
  )
}

export default About
