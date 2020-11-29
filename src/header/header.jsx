import React from 'react';
import Button from '../button/button';

const Header = () => {
  return (
    <>
      <div className="logo">
        <img className="logo_male" src="img/logo.png" alt="swapApp logo" />
      </div>
      <Button title="Nabízím" location="'/formular/novy'" />
    </>
  );
};

export default Header;
