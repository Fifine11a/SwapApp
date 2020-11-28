import React from 'react';
import { render } from 'react-dom';
import './index.html';
import '../src/styles.css';
import '../src/hamburger.css';
import MainCategory from '../src/category/category.jsx';

const App = () => {
  return <MainCategory />;
};

render(<App />, document.querySelector('#app'));
