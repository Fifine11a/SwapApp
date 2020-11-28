import React from 'react';
import './categoryPage.css';
import categories from '../../data/category.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from '../../search/search.jsx';

const MainCategory = (props) => {
  return (
    <div className="demandPage mediaQueries">
      <div className="header">
        <h1>Hledám</h1>
      </div>
      <Search />
      <div className="categoryBtn">
        {categories.map((category) => (
          <Link
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
