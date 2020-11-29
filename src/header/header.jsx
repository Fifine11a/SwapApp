import React from 'react';
import Button from '../button/button';
import Search from '../search/search';
import './header.css';
import logo from '../img/logoHeader.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo_male" src={logo} alt="swapApp logo" />
      </div>
      <Search />
      <Button title="Nabízím" location="/formular/novy" />
    </div>
  );
};

export default Header;
