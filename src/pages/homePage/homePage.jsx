import React, { useEffect } from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homepageImg from '../../img/homepage.jpeg';
import Button from '../../button/button';
import velkeLogo from '../../img/logo.png';
import ItemsOverview from '../../itemOverview/itemOverview.jsx';

const HomePage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="mainPage">
      <img className="logo_velke" src={velkeLogo} alt="SwapApp logo" />
      <div className="homepageImgElm">
        <p>
          Ať už{' '}
          <Button
            className="mainPageTextBtn"
            title="hledáš"
            location="/kategorie"
          />{' '}
          nebo{' '}
          <Button
            className="mainPageTextBtn"
            title="nabízíš"
            location="/formular/novy"
          />
          , i když tě jenom zajímá,{' '}
          <Button
            className="mainPageTextBtn"
            title="jak to funguje"
            location="/faq"
          />
          , ať je to příjemný a užitečný zážitek. Swap do každé rodiny!
        </p>
        <img className="homepageImg" src={homepageImg} alt="útulný domov" />
      </div>
      <div className="headerBtn demandBtn">
        <Button title="Hledám" location="/kategorie" />
      </div>
      <div className="itemsOverviewElm">
        <ItemsOverview
          title="V nabídce například:"
          sort="description"
          max="6"
        />
      </div>
    </div>
  );
};

export default HomePage;
