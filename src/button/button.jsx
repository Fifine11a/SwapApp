import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button onclick={`"window.location.href=${props.location}"`}>
      {props.title}
    </button>
  );
};

export default Button;
