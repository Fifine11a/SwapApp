import React from 'react';
import Hamburger from '../hamburger/hamburger';

const Header = () => {
  return (
    <>
      <Hamburger />
      <div class="logo">
        <img class="logo_male" src="img/logo.png" alt="swapApp logo" />
      </div>
    </>
  );
};

export default Header;
