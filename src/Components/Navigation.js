import React, { useState } from 'react';
import './Navigation.css';

let Navigation=()=>{
  let [mobileMenuOpen, setMobileMenuOpen] =useState(false);

  let toggleMobileMenu =()=>{
    setMobileMenuOpen(!mobileMenuOpen);
  }
    return(
        <nav>
        <div className="logo">
          <img src="/assests/nike.png" alt="Logo"/>
        </div>
        <div id="mobile" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen? "fas fa-times":"fas fa-bars"}></i>
      
        </div>
        <ul className={`navbar ${mobileMenuOpen ? "active" : ""}`}>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Location">Location</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <button>Login</button>
       </nav>
    )
}

export default Navigation;
