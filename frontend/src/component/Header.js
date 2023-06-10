import React from 'react';
import LogoImage from './logo.png'; // Import the logo image file
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="Logo" className="logo-image" />
      </div>
      <h1 className="header-title"> ? מה אתם מחפשים</h1>
      
    </header>
  );
};

export default Header;
