import React from 'react';
import HomePage from './homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainCategory from './pages/category.jsx';
import Footer from './footer/footer.jsx';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>

      <>
        <MainCategory />
        <Footer />
      </>
    </Router>
  );
}
