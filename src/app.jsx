import React from 'react';
import HomePage from './pages/homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CategoryPage from './pages/categoryPage/categoryPage';
import CategoryDetailPage from './pages/categoryDetailPage/categoryDetailPage';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import itemDetailPage from './pages/itemDetailPage/itemDetailPage.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/nabidka/detail_produktu">
          <ItemDetailPage />
        </Route>
        <Route path="/nabidka/detail_kategorie">
          <CategoryDetailPage />
        </Route>
        <Route path="/nabidka">
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
