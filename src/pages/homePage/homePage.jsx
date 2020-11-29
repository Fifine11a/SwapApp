import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homepageImg from '../../img/homepage.jpg';
import Button from '../../button/button';

const HomePage = (props) => {
  return (
    <div className="mainPage mediaQueries">
      <img className="homepageImg" src={homepageImg} alt="útulný domov" />
      <div className="largeBtn">
        <Button title="Hledám" location="/kategorie" />
      </div>
    </div>
  );
};

export default HomePage;
