import React from 'react';
import HomePage from './pages/homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CategoryPage from './pages/categoryPage/categoryPage';
import CategoryDetailPage from './pages/categoryDetailPage/categoryDetailPage';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import ItemDetail from './pages/itemDetailPage/itemDetailPage.jsx';
import NewForm from './pages/formPage/newFormPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/form/new">
          <NewForm />
        </Route>
        <Route path="/produkt/:id">
          <ItemDetail />
        </Route>
        <Route path="/kategorie/:id">
          <CategoryDetailPage />
        </Route>
        <Route path="/kategorie">
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
