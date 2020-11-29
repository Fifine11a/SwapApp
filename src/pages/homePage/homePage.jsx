import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homepageImg from '../../img/homepage.jpg';

const HomePage = (props) => {
  return (
    <div className="mainPage mediaQueries">
      <div className="mainPageBtn">
        <Link className="demandMainBtn" to="/kategorie">
          Hledám
        </Link>
        <Link className="offerMainBtn" to="/formular/novy">
          Nabízím
        </Link>
      </div>
      <Link className="rulesPage" to="/faq">
        FAQ a pravidla
      </Link>
      <Link className="itemDetailPage" to="/produkt/1">
        Detail produktu
      </Link>

      <img className="homepageImg" src={homepageImg} alt="útulný domov" />
    </div>
  );
};

export default HomePage;
