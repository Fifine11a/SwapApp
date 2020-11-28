import React from 'react';
import HomePage from './homePage/homePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainCategory from './pages/categoryPage.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

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
        <Header />
        <MainCategory />
        <Footer />
      </>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
