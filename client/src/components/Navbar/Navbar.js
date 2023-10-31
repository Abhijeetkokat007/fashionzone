import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Navbar.css';


function Navbar() {
  return (
    <div className='nav-container'>
      <div>FashionZone🛒</div>

      <div>
        <span>signup</span>
        <span>Login</span>
        <span>MyOrder</span>
      </div>

      <div>
        hellow user
      </div>

    </div>
  )
}

export default Navbar
