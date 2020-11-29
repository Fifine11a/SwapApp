import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <>
      <ul class="footer_list">
        <li className="footer_item">
          <Link to="/">Homepage</Link>
        </li>
        <li className="footer_item">
          <Link to="/formular/novy">Nahrát předmět</Link>
        </li>
        <li className="footer_item">
          <Link to="/faq">Jak na to?</Link>
        </li>
        <li className="footer_item">
          <Link to="/faq">Pravidla</Link>
        </li>
        <li className="footer_item">
          <Link to="">Kontakt?</Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
