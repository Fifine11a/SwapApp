import React from 'react';
import Button from '../button/button';
import Search from '../search/search';
import './header.css';
import logo from '../img/logoHeader.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="headerFirst">
        <Link className="logo" to="/">
          <img className="logo_male" src={logo} alt="swapApp logo" />
        </Link>
        <div className="largeBtn headerBtn">
          <Button title="Nabízím" location="/formular/novy" />
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Header;
