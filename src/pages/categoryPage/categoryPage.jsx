import React, { useEffect, useState } from 'react';
import './categoryPage.css';
import db from '../../firestore.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from '../../search/search.jsx';

const MainCategory = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    db.collection('categories')
      .get()
      .then((result) =>
        result.docs.map((e) => {
          const data = e.data();
          return {
            ...data,
            id: e.id,
          };
        }),
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="demandPage mediaQueries">
      <div className="header">
        <h1>Hledám</h1>
      </div>
      <Search />
      <div className="categoryBtn">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="category searchCategoryClothes"
            to={`/kategorie/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainCategory;
