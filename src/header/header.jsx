import React from 'react';
import Hamburger from '../hamburger/hamburger';

const Header = () => {
  return (
    <>
      <Hamburger />
      <div className="logo">
        <img className="logo_male" src="img/logo.png" alt="swapApp logo" />
      </div>
    </>
  );
};

export default Header;
