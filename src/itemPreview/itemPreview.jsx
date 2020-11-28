import React from 'react';
import items from '../data/items.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ItemPreview = (props) => {
  const itemPreviewId = props.id;
  const itemPreview = items.find((item) => item.id === itemPreviewId);

  return (
    <div className="detailItem">
      <Link to={`/produkt/${itemPreview.id}`}>{itemPreview.image}</Link>
      <Link to={`/produkt/${itemPreview.id}`}>{itemPreview.title}</Link>
      <Link to={`/produkt/${itemPreview.id}`}>{itemPreview.city}</Link>
      <Link to={`/produkt/${itemPreview.id}`}>{itemPreview.name}</Link>
    </div>
  );
};

export default ItemPreview;
