import React from 'react';
import './hamburger.css';

const Hamburger = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="index.html">
            <li>Domů</li>
          </a>
          <a href="">
            <li>položka menu</li>
          </a>
          <a href="swapRules.html">
            <li>Pravidla swapu</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
