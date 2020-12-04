import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homepageImg from '../../img/homepage.jpeg';
import Button from '../../button/button';
import velkeLogo from '../../img/logo.png';
import ItemsOverview from '../../itemOverview/itemOverview.jsx';

const HomePage = (props) => {
  return (
    <div className="mainPage mediaQueries">
      <img className="logo_velke" src={velkeLogo} alt="SwapApp logo" />
      {/* <p>
        Jsme Marie&Magdalena a vítáme Tě na prvním a zatím jediném swapovacím
        webu v Čechách. Vytvořily jsme ho s láskou pro lidi, jako jsme my. Kteří
        nepotřebné věci raději pošlou dál, než vyhodí. Kteří si potřebné věci
        raději pořídí z druhé ruky, než nové.
      </p> */}
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
      <div className="largeBtn headerBtn">
        <Button title="Hledám" location="/kategorie" />
      </div>
      <ItemsOverview
        className="homepageTitle"
        title="V nabídce například:"
        sort="description"
        max="6"
      />
    </div>
  );
};

export default HomePage;
