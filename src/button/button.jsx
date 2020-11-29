import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.location}>
      <button>{props.title}</button>
    </Link>
  );
};

export default Button;
