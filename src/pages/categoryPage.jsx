import React from 'react';
import './categoryPage.css';
import Search from '../search/search';

const MainCategory = (props) => {
  return (
    <div className="demandPage mediaQueries">
      <div className="header">
        <h1>Hledám</h1>
      </div>
      <Search />
      <div className="categoryBtn">
        <button className="category searchCategoryClothes">Oblečení</button>
        <button className="category searchCategoryKids">Vše pro děti</button>
        <button className="category searchCategoryHouse">
          Vše pro domácnost
        </button>
        <button className="category searchCategoryPlants">Květiny</button>
        <button className="category searchCategoryBooks">Knihy</button>
        <button className="category searchCategoryOthers">Ostatní</button>
      </div>
    </div>
  );
};

export default MainCategory;
