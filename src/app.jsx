import React from 'react';
import HomePage from './homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainCategory from './pages/categoryPage.jsx';
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
