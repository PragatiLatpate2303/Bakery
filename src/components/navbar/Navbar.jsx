import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

import imgIcon from '../asssets/images/logo-icon-short.png'
import imgCart from '../asssets/images/cart-icon.png'

const Navbar = () => {

  const [Menu, setMenu] = useState("Home");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleBarsIconClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
    <div className='navbar-container'>
      <div className='navbar-logoIcon'>   
        <i onClick={handleBarsIconClick} class="fa fa-bars" aria-hidden="true"></i>  
        <img src={imgIcon} alt='' /> 
      </div>
      <div className='navbar-menu'>
      <ul>
      <li onClick={() => setMenu('Home')}><Link to="/"  style={{ textDecoration: 'none' }}>Home {Menu === 'Home' ? <hr /> : <></>}</Link></li>
      <li onClick={() => setMenu('Categories')}> <Link to='/Categories'  style={{ textDecoration: 'none' }}> Categories {Menu === 'Categories' ? <hr /> : <></>}</Link></li>
      <li onClick={() => setMenu('About')}> <Link to='/About'  style={{ textDecoration: 'none' }}> About {Menu === 'About' ? <hr /> : <></>}</Link></li>
      <li onClick={() => setMenu('ContactUs')}> <Link to='/ContactUs'  style={{ textDecoration: 'none' }}> Contact Us{Menu === 'ContactUs' ? <hr /> : <></>}</Link></li>
      </ul>
      </div> 
      <div className='navbar-cartIcon'>
      <img src={imgCart} alt='' /> 
      </div>
    </div>
    </>
  )
}

export default Navbar
