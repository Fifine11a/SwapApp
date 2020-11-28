import React from 'react';
import HomePage from './pages/homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainCategory from './pages/categoryPage/categoryPage';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <>
        <Header />
        <MainCategory />
        <Footer />
      </>
    </Router>
  );
}
