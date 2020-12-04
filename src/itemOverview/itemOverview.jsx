import React, { useEffect, useState } from 'react';
import '../pages/categoryPage/categoryPage.css';
// import Button from '../../button/button';
import db from '../firestore.js';
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; */
import ItemPreview from '../itemPreview/itemPreview.jsx';
import './itemOverview.css';
import { Link } from 'react-router-dom';

const ItemOverview = (props) => {
  const [overview, setOverview] = useState([]);
  const itemsDb = db.collection('items');

  useEffect(() => {
    itemsDb
      .orderBy(props.sort)
      .limit(props.max)
      .get()
      .then((result) =>
        result.docs.map((item) => {
          const data = item.data();
          return {
            ...data,
            id: item.id,
          };
        }),
      )
      .then((data) => setOverview(data));
  }, []);

  return (
    <div className="itemOverview">
      <h2>{props.title}</h2>
      {overview.map((product) => (
        <div className="itemOverviewElm">
          <ItemPreview key={product.id} id={product.id} />
        </div>
      ))}
    </div>
  );
};

export default ItemOverview;
