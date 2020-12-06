import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <li className="footer_item">
          <Link to="/kategorie">Hledat</Link>
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
          <Link to="/about">O nás</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
