import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <li className="footer_item">
          <a href="index.html">Homepage</a>
        </li>
        <li className="footer_item">
          <a href="swapRules.html">Pravidla</a>
        </li>
        <li className="footer_item">
          <a href="">položka patičky</a>
        </li>
        <li className="footer_item">
          <a href="">položka patičky</a>
        </li>
        <li className="footer_item">
          <a href="">položka patičky</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
