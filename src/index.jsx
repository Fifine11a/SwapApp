import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.html';
import '../src/styles.css';

render(<App />, document.querySelector('#app'));
