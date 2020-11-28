import React from 'react';
import HomePage from './pages/homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CategoryPage from './pages/categoryPage/categoryPage';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/demand">
          <CategoryPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
