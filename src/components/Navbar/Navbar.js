import React from 'react';
import './Navbar.css'; // Import the stylesheet for the Navbar component
import logo from '../../assets/Navbar/logo.png'; // Import the logo image

function Navbar() {
  return (
    <div className="logo">
        <img src={logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
