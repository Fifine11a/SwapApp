import React from 'react';
import './footer.css';
import { BrowserRouter as Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <Link to="/">Homepage</Link>
        <Link to="/faq">FAQ a pravidla</Link>
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
