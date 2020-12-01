import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from '../../itemPreview/itemPreview';
import db from '../../firestore.js';

import './categoryDetailPage.css';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';

const CategoryDetail = (props) => {
  let { id } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    db.collection('categories')
      .doc(id)
      .get()
      .then((result) => result.data())
      .then((data) => setCategory(data));
  }, [id]);

  /* 
  db.collection('categories')
    .get()
    .then((result) => result.docs.map((e) => e.data()))
    .then(console.log);
 */

  if (!category) {
    return null;
  }

  return (
    <div className="CategoryDetail mediaQueries">
      <h1>{category.name}</h1>

      {/* <Breadcrumbs /> */}
      <div className="categoryDetailElm">
        {(category.items ?? []).map((item) => (
          <ItemPreview key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
