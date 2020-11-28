import React from 'react';
import { render } from 'react-dom';
import './index.html';
import '../src/styles.css';
import '../src/hamburger.css';
import '../src/pages/footer.css';
import MainCategory from '../src/category/category.jsx';
import Footer from '../src/pages/footer.jsx';

const App = () => {
  return (
    <>
      <MainCategory />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
