import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div className="mainPage mediaQueries">
      <div className="mainPageBtn">
        <Link className="demandMainBtn" to="/demand">
          Hledám
        </Link>
        <Link className="offerMainBtn" to="/offer">
          Nabízím
        </Link>
      </div>
      <Link className="itemDetailPage" to="/itemDetailPage">
        Detail produktu
      </Link>
      <img className="homepageImg" src="img/homepage.jpg" alt="útulný domov" />
    </div>
  );
};

export default HomePage;
