import React from 'react';
import './footer.css';
import { BrowserRouter as Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <li className="footer_item">
          <a href="/">Homepage</a>
        </li>
        <li className="footer_item">
          <a href="/formular/novy">Nahrát předmět</a>
        </li>
        <li className="footer_item">
          <a href="/faq">Jak na to?</a>
        </li>
        <li className="footer_item">
          <a href="/faq">Pravidla</a>
        </li>
        <li className="footer_item">
          <a href="">Kontakt?</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
