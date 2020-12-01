import React from 'react';
import './search.css';

const Search = () => {
  return (
    <form className="searchForm">
      <fieldset>
        <input className="searchInput" placeholder="Hledej..." type="search" />
        <button className="searchBtn" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </fieldset>
    </form>
  );
};

export default Search;
