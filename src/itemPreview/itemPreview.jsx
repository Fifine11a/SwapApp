import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import db from '../firestore.js';
import towns from '../data/towns.json';
import './itemPreview.css';
import '../styles.css';

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

  const city = towns.find((city) => city.id === parseInt(itemPreview.cityId));

  return (
    <div className="detailItem">
      <Link className="itemImg" to={`/produkt/${itemPreviewId}`}>
        <img src={itemPreview.imageUrl} />
      </Link>
      <Link className="itemTitle" to={`/produkt/${itemPreviewId}`}>
        {itemPreview.title}
      </Link>
      <Link className="itemCity" to={`/produkt/${itemPreviewId}`}>
        {city?.name}
      </Link>
      <Link className="itemUser" to={`/produkt/${itemPreviewId}`}>
        {itemPreview.userName}
      </Link>
    </div>
  );
};

export default ItemPreview;
