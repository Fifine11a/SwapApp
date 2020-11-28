import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import db from '../firestore.js';

const ItemPreview = (props) => {
  const itemPreviewId = props.id;

  const [itemPreview, setItem] = useState(null);

  useEffect(() => {
    db.collection('items')
      .doc(itemPreviewId)
      .get()
      .then((result) => result.data())
      .then((data) => setItem(data));
  }, [itemPreviewId]);

  if (!itemPreview) {
    return null;
  }

  return (
    <div className="detailItem">
      <Link to={`/produkt/${itemPreviewId}`}>
        <img src={itemPreview.imageUrl} />
      </Link>
      <Link to={`/produkt/${itemPreviewId}`}>{itemPreview.title}</Link>
      <Link to={`/produkt/${itemPreviewId}`}>{itemPreview.city}</Link>
      <Link to={`/produkt/${itemPreviewId}`}>{itemPreview.userName}</Link>
    </div>
  );
};

export default ItemPreview;
